/*
    netacad-automation
    Copyright (C) 2026 Saurabh Kumar Yadav

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import {
    BOTTOM_PERCENT,
    POST_ACTION_FAST_POLL_MS,
    SCROLL_PERCENTAGE,
    TICK_MS_AFTER_ACTION,
    TICK_MS_ASSESSMENT,
    TICK_MS_POST_ACTION_POLL,
    TICK_MS_PRACTICE_AFTER,
    TICK_MS_PRACTICE_IDLE,
    TICK_MS_PRACTICE_POLL,
    TICK_MS_SCROLL,
} from './config.js';
import { createAssessmentHelpers } from './assessment.js';
import { createContentHelpers } from './content.js';
import { invalidateShadowCache, deepQuerySelectorAll } from './dom.js';
import { isSecureExam } from './exam-type.js';
import { setStatus } from './status.js';
import { extractCleanText } from './text.js';
import { tryHandlePythonExercise } from './python-exercise.js';
import { tryHandleCheckExercise } from './check-exercise.js';
import { tryHandleHotgrid } from './hotgrid.js';
import { tryHandleHotgraphic } from './hotgraphic.js';
import { tryHandleInteractiveWidgets, tryHandleFlipcards } from './interactive-widgets.js';
import { tryHandleModuleIntroVideo } from './module-intro-video.js';
import {
    getQuestionBodyEl,
    extractQuestionCodeText,
    isQuestionAnswered,
    isSubmitEnabled,
    shouldTreatAsManual,
    solveQuestion,
    trySubmitAndAdvance,
    waitForManualCompletion,
} from './solver.js';

export function createMainLoop(doc, win, databases) {
    const assessment = createAssessmentHelpers(doc, win);
    const content = createContentHelpers(doc, win, assessment);
    const scroll = content.createScrollState();

    const clickedButtons = new Set();
    const processedVideos = new Set();

    const runtime = { isAdvancing: false, isPaused: false, isVideoActive: false, stopped: false };
    let lastAssessmentQContainer = null;
    let lastAssessmentQContainerTick = 0;
    let tickTimer = null;
    let restartTimer = null;
    let cooldownUntil = 0;
    let lastActionAt = 0;
    let loopTicks = 0;

    function defaultActionCooldownMs() {
        return isSecureExam() ? TICK_MS_PRACTICE_AFTER : TICK_MS_AFTER_ACTION;
    }

    function bumpCooldown(ms) {
        const delay = ms ?? defaultActionCooldownMs();
        cooldownUntil = Date.now() + delay;
        lastActionAt = Date.now();
    }

    function getAssessmentPollMs() {
        if (isSecureExam()) return TICK_MS_PRACTICE_POLL;
        if (Date.now() - lastActionAt < POST_ACTION_FAST_POLL_MS) return TICK_MS_POST_ACTION_POLL;
        return TICK_MS_ASSESSMENT;
    }

    function getAssessmentIdleMs() {
        return isSecureExam() ? TICK_MS_PRACTICE_IDLE : TICK_MS_ASSESSMENT;
    }

    function getTickDelay() {
        if (runtime.isPaused || runtime.isAdvancing) return 300;
        const wait = cooldownUntil - Date.now();
        if (wait > 0) return wait;
        if (assessment.isAssessmentInProgress() && assessment.isAssessmentStarted(clickedButtons)) {
            return getAssessmentPollMs();
        }
        return TICK_MS_SCROLL;
    }

    function scheduleNextTick(delay) {
        if (runtime.stopped) return;
        clearTimeout(tickTimer);
        tickTimer = setTimeout(runMainTick, delay);
    }

    function scheduleAssessmentPoll() {
        const afterAction = Date.now() - lastActionAt < POST_ACTION_FAST_POLL_MS;
        const delay = isSecureExam()
            ? TICK_MS_PRACTICE_POLL
            : (afterAction ? TICK_MS_POST_ACTION_POLL : getAssessmentIdleMs());
        scheduleNextTick(delay);
    }

    function tryClickWidget(handler) {
        if (!handler()) return false;
        runtime.isPaused = true;
        setStatus('Click');
        bumpCooldown(400);
        invalidateShadowCache();
        setTimeout(() => {
            runtime.isPaused = false;
        }, 400);
        scheduleNextTick(getTickDelay());
        return true;
    }

    function runMainTick() {
        if (runtime.stopped) return;
        try {
            runMainTickBody();
        } catch (e) {
            console.error('[AutoRunner] tick:', e);
            scheduleNextTick(TICK_MS_SCROLL);
        }
    }

    function runMainTickBody() {
        if (runtime.isAdvancing) {
            scheduleNextTick(300);
            return;
        }
        if (runtime.isPaused) {
            scheduleNextTick(300);
            return;
        }
        if (Date.now() < cooldownUntil) {
            scheduleNextTick(getTickDelay());
            return;
        }

        loopTicks++;

        if (tryHandleModuleIntroVideo(doc, content, win, runtime, processedVideos)) {
            bumpCooldown(400);
            invalidateShadowCache();
            scheduleNextTick(getTickDelay());
            return;
        }

        if (tryClickWidget(() => tryHandleHotgrid(doc, content, { allowInlineButtons: false }))) return;
        if (tryClickWidget(() => tryHandleHotgraphic(doc, content, { allowInlineButtons: false }))) return;
        if (tryClickWidget(() => tryHandleFlipcards(doc, content, clickedButtons))) return;

        const assessmentRoot = assessment.getVisibleAssessmentRoot(0.15);
        const assessmentDone = assessment.isAssessmentResultVisible(doc) ||
            (assessmentRoot && assessment.isAssessmentComplete(assessmentRoot));
        const submitOpts = { elementVisibilityRatio: assessment.elementVisibilityRatio };

        if (!assessmentDone && tryHandlePythonExercise(doc, databases, assessment)) {
            setStatus('Check');
            bumpCooldown(400);
            invalidateShadowCache();
            scheduleNextTick(getTickDelay());
            return;
        }

        if (!assessmentDone && tryHandleCheckExercise(doc, databases, assessment)) {
            setStatus('Check');
            bumpCooldown(400);
            invalidateShadowCache();
            scheduleNextTick(getTickDelay());
            return;
        }

        if (assessmentDone) {
            setStatus('Done');
            if (assessmentRoot) {
                delete assessmentRoot.dataset.quizInProgress;
                delete assessmentRoot.dataset.blockedNavWarned;
                delete assessmentRoot.dataset.waitingStart;
                assessment.markInAssessmentStartsHandled(assessmentRoot, clickedButtons);
            }
        } else if (assessmentRoot) {
            if (assessment.isAssessmentInProgress()) {
                delete assessmentRoot.dataset.waitingStart;
                assessmentRoot.dataset.quizInProgress = 'true';
                assessment.markInAssessmentStartsHandled(assessmentRoot, clickedButtons);
            } else {
                delete assessmentRoot.dataset.quizInProgress;
                delete assessmentRoot.dataset.waitingStart;
                for (const btn of assessment.getInAssessmentStartButtons(assessmentRoot)) {
                    if (clickedButtons.has(btn)) continue;
                    if (!assessment.isElementSubstantiallyVisible(btn, 0.4)) continue;
                    btn.click();
                    clickedButtons.add(btn);
                    setStatus('Start');
                    bumpCooldown(isSecureExam() ? 300 : 600);
                    invalidateShadowCache();
                    scheduleNextTick(getTickDelay());
                    return;
                }
            }
        }

        const finalScreens = deepQuerySelectorAll('.final-screen-inner', doc);
        for (const screen of finalScreens) {
            if (!assessment.isElementSubstantiallyVisible(screen, 0.35)) continue;

            const confirmCheckbox = deepQuerySelectorAll('#confirm-exam, input[name="confirm"]', screen)[0];
            if (confirmCheckbox && !confirmCheckbox.checked) {
                confirmCheckbox.click();
                bumpCooldown(500);
                scheduleNextTick(getTickDelay());
                return;
            }

            const submitCandidates = [
                ...deepQuerySelectorAll('.adaptive-assessment-submit', screen),
                ...deepQuerySelectorAll('.submit-button', screen),
                ...deepQuerySelectorAll('button[type="submit"]', screen),
                ...deepQuerySelectorAll('button', screen).filter(b =>
                    /\b(final\s+submit|submit\s+exam|submit)\b/i.test((b.textContent || '').trim()),
                ),
            ];

            const finalSubmitBtn = submitCandidates.find(btn =>
                btn && !btn.disabled && !btn.classList.contains('is-disabled') && !btn.hasAttribute('disabled'),
            );

            if (finalSubmitBtn) {
                finalSubmitBtn.click();
                setStatus('Submit');
                bumpCooldown(800);
                invalidateShadowCache();
                scheduleNextTick(getTickDelay());
                return;
            }
        }

        if (!assessmentDone && assessmentRoot && assessment.isAssessmentStarted(clickedButtons)) {
            const activeDb = databases.getActiveDb(doc);
            let qContainer = assessment.findReadyQuestionContainer(assessmentRoot);

            if (!qContainer && assessment.hasQuestionContent(assessmentRoot)) {
                if (assessment.scrollQuestionIntoView(assessmentRoot)) {
                    setStatus('Scroll');
                    scheduleNextTick(TICK_MS_SCROLL);
                    return;
                }
            }

            if (qContainer) {
                setStatus('Quiz');
                lastAssessmentQContainer = qContainer;
                lastAssessmentQContainerTick = loopTicks;
            } else if (
                lastAssessmentQContainer &&
                loopTicks - lastAssessmentQContainerTick <= 20 &&
                assessment.isQuestionReadyToAnswer(lastAssessmentQContainer)
            ) {
                qContainer = lastAssessmentQContainer;
                setStatus('Quiz');
            }

            if (assessment.isAssessmentInProgress() && !qContainer && !assessmentRoot.dataset.noMcqWarned) {
                assessmentRoot.dataset.noMcqWarned = 'true';
                scheduleAssessmentPoll();
                return;
            }
            if (qContainer) delete assessmentRoot.dataset.noMcqWarned;

            if (qContainer) {
                const qTextEl = getQuestionBodyEl(qContainer);
                if (!qTextEl) {
                    scheduleAssessmentPoll();
                    return;
                }

                const qText = extractCleanText(qTextEl);
                const qCode = extractQuestionCodeText(qContainer);
                const tag = databases.getDbTag(activeDb.mode);

                if (!activeDb.ready) {
                    if (!qContainer.dataset.warned) {
                        const dbName = databases.getDbVarName(activeDb.mode);
                        console.error(`[AutoRunner] ${tag} ${dbName} is not defined. Paste the JSON database before running.`);
                        qContainer.dataset.warned = 'true';
                    }
                    scheduleAssessmentPoll();
                    return;
                }

                const entry = databases.lookupEntryCached(activeDb, qText, qCode);

                if (!entry) {
                    if (!qContainer.dataset.warned) {
                        qContainer.dataset.warned = 'true';
                    }
                    const userDone = isQuestionAnswered(qContainer) || isSubmitEnabled(doc);
                    if (!userDone) {
                        scheduleAssessmentPoll();
                        return;
                    }
                    delete qContainer.dataset.warned;
                    if (trySubmitAndAdvance(doc, qContainer, submitOpts)) {
                        setStatus('Submit');
                        bumpCooldown();
                        invalidateShadowCache();
                    }
                    scheduleAssessmentPoll();
                    return;
                }

                if (shouldTreatAsManual(entry, qContainer)) {
                    if (waitForManualCompletion(qContainer, doc, entry)) {
                        setStatus('Manual');
                        scheduleAssessmentPoll();
                        return;
                    }
                    if (trySubmitAndAdvance(doc, qContainer, submitOpts)) bumpCooldown();
                    scheduleAssessmentPoll();
                    return;
                }

                runtime.isPaused = false;

                const acted = solveQuestion(
                    qContainer,
                    entry,
                    qText,
                    doc,
                    isSecureExam(),
                );
                if (acted) {
                    setStatus('Answer');
                    bumpCooldown();
                }

                if (acted) {
                    if (isQuestionAnswered(qContainer) &&
                        trySubmitAndAdvance(doc, qContainer, submitOpts)) {
                        setStatus('Check');
                        bumpCooldown();
                        invalidateShadowCache();
                    }
                    scheduleAssessmentPoll();
                    return;
                }
                if (!isQuestionAnswered(qContainer)) {
                    scheduleAssessmentPoll();
                    return;
                }
                if (trySubmitAndAdvance(doc, qContainer, submitOpts)) {
                    bumpCooldown();
                    invalidateShadowCache();
                    scheduleAssessmentPoll();
                    return;
                }
                scheduleAssessmentPoll();
                return;
            }
        } else if (
            assessmentRoot &&
            !assessment.isAssessmentResultVisible(doc) &&
            !assessment.isAssessmentComplete(assessmentRoot) &&
            !assessment.isAssessmentInProgress() &&
            !assessment.isAssessmentStarted(clickedButtons)
        ) {
            assessmentRoot.dataset.waitingStart = 'true';
        }

        if (!assessmentDone && assessmentRoot && assessment.hasQuestionContent(assessmentRoot)) {
            if (assessment.scrollQuestionIntoView(assessmentRoot)) {
                setStatus('Scroll');
                scheduleNextTick(TICK_MS_SCROLL);
                return;
            }
        }

        if (!assessmentDone && assessmentRoot && assessment.isAssessmentInProgress()) {
            const pending = assessment.findReadyQuestionContainer(assessmentRoot);
            if (!pending) {
                if (assessment.scrollQuestionIntoView(assessmentRoot)) {
                    setStatus('Scroll');
                    scheduleNextTick(TICK_MS_SCROLL);
                    return;
                }
            }
            scheduleAssessmentPoll();
            return;
        }

        const allowInlineButtons = scroll.getScrollPercent() > 10 || scroll.getScrollTop() > 100;

        if (tryClickWidget(() => tryHandleHotgrid(doc, content, { allowInlineButtons }))) return;
        if (tryClickWidget(() => tryHandleHotgraphic(doc, content, { allowInlineButtons }))) return;
        if (tryClickWidget(() => tryHandleInteractiveWidgets(doc, content, win, clickedButtons, { allowInlineButtons }))) return;

        const buttons = deepQuerySelectorAll(
            'button.open-dialog, button.btn__action:not(.reset-answer):not(.change-question):not(.adaptive-assessment-submit):not(.submit-button):not(.pageTracer-button):not(.check__button), button.tabs__nav-item-btn',
            doc,
        );
        for (const btn of buttons) {
            if (btn.disabled || btn.classList.contains('disabled')) continue;
            if (!allowInlineButtons) continue;
            if (!clickedButtons.has(btn) && content.isElementSubstantiallyVisible(btn, 0.35, win)) {
                runtime.isPaused = true;
                setStatus('Click');
                btn.click();
                clickedButtons.add(btn);
                bumpCooldown(400);
                setTimeout(() => {
                    runtime.isPaused = false;
                }, 400);
                scheduleNextTick(getTickDelay());
                return;
            }
        }

        if (!runtime.isVideoActive) {
            if (content.tryOpenVideo()) {
                scheduleNextTick(TICK_MS_ASSESSMENT);
                return;
            }
            const pendingVideo = content.getNextPendingVideo(processedVideos);
            if (pendingVideo && content.handleVideoTick(pendingVideo, processedVideos, runtime)) {
                scheduleNextTick(getTickDelay());
                return;
            }
        }

        const percentDown = scroll.getScrollPercent();
        const keepScrollingForAssessment = assessment.needsMoreScrollForAssessment(clickedButtons);
        const navRoot = assessmentRoot || assessment.getVisibleAssessmentRoot(0.15);
        const onQuizResult = assessmentDone || assessment.isOnQuizResultScreen(navRoot);

        if (!onQuizResult && assessment.shouldBlockModuleAdvance(navRoot, isSubmitEnabled, isQuestionAnswered)) {
            if (navRoot) navRoot.dataset.blockedNavWarned = 'true';
            scheduleAssessmentPoll();
            return;
        }
        if (navRoot) delete navRoot.dataset.blockedNavWarned;

        if (onQuizResult) {
            const moduleNext = content.findModuleNavNextButton();
            if (moduleNext) {
                runtime.isAdvancing = true;
                clearTimeout(tickTimer);
                setStatus('Next');
                moduleNext.click();
                clearTimeout(restartTimer);
                restartTimer = setTimeout(() => window.autoRunnerRestart?.(), 4000);
                return;
            }

            if (navRoot && assessment.tryExitQuizResult(navRoot)) {
                setStatus('Next');
                bumpCooldown(500);
                scheduleNextTick(getTickDelay());
                return;
            }

            if (!scroll.isAtScrollBottom()) {
                scroll.scrollToBottom();
                setStatus('Scroll');
                scheduleNextTick(TICK_MS_SCROLL);
                return;
            }
        }

        const contentNext = content.findInContentNextButton(
            assessment.getVisibleAssessmentRoot,
            assessment.isAssessmentInProgress,
            doc,
            { allowOnResult: onQuizResult },
        );
        const atScrollBottom = scroll.isAtScrollBottom();

        if (contentNext && atScrollBottom && !keepScrollingForAssessment) {
            setStatus('Next');
            contentNext.click();
            scroll.refreshScrollContainer();
            invalidateShadowCache();
            bumpCooldown(500);
            scheduleNextTick(getTickDelay());
            return;
        }

        if (onQuizResult && !scroll.isAtScrollBottom()) {
            scroll.scrollToBottom();
            setStatus('Scroll');
            scheduleNextTick(TICK_MS_SCROLL);
            return;
        }

        if (percentDown < BOTTOM_PERCENT || keepScrollingForAssessment) {
            const viewport = scroll.scrollContainer.useWindow
                ? win.innerHeight
                : scroll.scrollContainer.element.clientHeight;
            scroll.scrollByStep(Math.round(viewport * SCROLL_PERCENTAGE));
            setStatus('Scroll');
            scheduleNextTick(TICK_MS_SCROLL);
            return;
        }

        const moduleNext = content.findModuleNavNextButton();
        if (moduleNext) {
            runtime.isAdvancing = true;
            clearTimeout(tickTimer);
            setStatus('Next');
            moduleNext.click();
            clearTimeout(restartTimer);
            restartTimer = setTimeout(() => window.autoRunnerRestart?.(), 4000);
            return;
        }

        scheduleNextTick(getTickDelay());
    }

    function stop() {
        runtime.stopped = true;
        runtime.cancelVideo?.();
        clearTimeout(tickTimer);
        clearTimeout(restartTimer);
        tickTimer = null;
        restartTimer = null;
    }

    return {
        start() {
            runtime.stopped = false;
            runMainTick();
        },
        stop,
    };
}
