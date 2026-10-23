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

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = join(root, 'data', 'variables_python1.js');

const REFERENCE = {
    'module-1': [
        { question: 'What is machine code?', code: '' },
        { question: 'What are the four fundamental elements that make a language?', code: '' },
        {
            question:
                'What do you call a file containing a program written in a high-level programming language?',
            code: '',
        },
        { question: 'What is true about compilation? (Select two answers)', code: '' },
        { question: 'What is the best definition of a script?', code: '' },
        { question: 'Select the true statements. (Select two answers)', code: '' },
        { question: 'What is CPython?', code: '' },
        {
            question:
                'What do you call a command-line interpreter which lets you interact with your OS and execute Python commands and scripts?',
            code: '',
        },
        { question: 'What is the expected behavior of the following program?', code: 'print("Hello!")' },
        { question: 'What is the expected behavior of the following program?', code: 'prin("Goodbye!")' },
    ],
    'module-2': [
        { question: 'The digraph forces the print() function to:', code: '' },
        { question: 'The meaning of the keyword parameter is determined by:', code: '' },
        {
            question: 'The value twenty point twelve times ten raised to the power of eight should be written as:',
            code: '',
        },
        { question: 'The 0o prefix means that the number after it is denoted as:', code: '' },
        { question: 'The ** operator:', code: '' },
        { question: 'The result of the following division:', code: '1 / 1' },
        { question: 'Which of the following statements are true? (Select two answers)', code: '' },
        {
            question: 'Left-sided binding determines that the result of the following expression:',
            code: '1 // 2 * 3',
        },
        { question: 'Which of the following variable names are illegal? (Select two answers)', code: '' },
        { question: 'The print() function can output values of:', code: '' },
        {
            question: 'What is the output of the following snippet?',
            code: 'x = 1 y = 2 z = x x = y y = z print(x, y)',
        },
        {
            question:
                'What is the output of the following snippet if the user enters two lines containing 2 and 4 respectively?',
            code: 'x = input() y = input() print(x + y)',
        },
        {
            question:
                'What is the output of the following snippet if the user enters two lines containing 2 and 4 respectively?',
            code: 'x = int(input()) y = int(input()) x = x // y y = y // x print(y)',
        },
        {
            question:
                'What is the output of the following snippet if the user enters two lines containing 2 and 4 respectively?',
            code: 'x = int(input()) y = int(input()) x = x / y y = y / x print(y)',
        },
        {
            question:
                'What is the output of the following snippet if the user enters two lines containing 11 and 4 respectively?',
            code: 'x = int(input()) y = int(input()) x = x % y x = x % y y = y % x print(y)',
        },
        {
            question:
                'What is the output of the following snippet if the user enters two lines containing 3 and 6 respectively?',
            code: 'x = input() y = int(input()) print(x * y)',
        },
        {
            question: 'What is the output of the following snippet?',
            code: "z = y = x = 1 print(x, y, z, sep='*')",
        },
        { question: 'What is the output of the following snippet?', code: 'y = 2 + 3 * 5. print(Y)' },
        {
            question: 'What is the output of the following snippet?',
            code: 'x = 1 / 2 + 3 // 3 + 4 ** 2 print(x)',
        },
        {
            question:
                'What is the output of the following snippet if the user enters two lines containing 2 and 4 respectively?',
            code: 'x = int(input()) y = int(input()) print(x + y)',
        },
    ],
    'module-3': [
        { question: 'An operator able to check whether two values are equal is coded as:', code: '' },
        { question: 'The value eventually assigned to x is equal to:', code: 'x = 1 x = x == x' },
        {
            question: 'How many stars (*) will the following snippet send to the console?',
            code: 'i = 0 while i <= 3 : i += 2 print("*")',
        },
        {
            question: 'How many stars (*) will the following snippet send to the console?',
            code: 'i = 0 while i <= 5 : i += 1 if i % 2 == 0: break print("*")',
        },
        {
            question: 'How many hashes (#) will the following snippet send to the console?',
            code: 'for i in range(1): print("#") else: print("#")',
        },
        {
            question: 'How many hashes (#) will the following snippet send to the console?',
            code: 'var = 0 while var < 6: var += 1 if var % 2 == 0: continue print("#")',
        },
        {
            question: 'How many hashes (#) will the following snippet send to the console?',
            code: 'var = 1 while var < 10: print("#") var = var << 1',
        },
        {
            question: 'What value will be assigned to the x variable?',
            code: 'z = 10 y = 0 x = y < z and z > y or y > z and z < y',
        },
        {
            question: 'What is the output of the following snippet?',
            code: 'a = 1 b = 0 c = a & b d = a | b e = a ^ b print(c + d + e)',
        },
        {
            question: 'What is the output of the following snippet?',
            code: 'my_list = [3, 1, -2] print(my_list[my_list[-1]])',
        },
        {
            question: 'What is the output of the following snippet?',
            code: 'my_list = [1, 2, 3, 4] print(my_list[-3:-2])',
        },
        {
            question: 'The second assignment:',
            code: 'vals = [0, 1, 2] vals[0], vals[2] = vals[2], vals[0]',
        },
        {
            question: 'After execution of the following snippet, the sum of all vals elements will be equal to:',
            code: 'vals = [0, 1, 2] vals.insert(0, 1) del vals[1]',
        },
        {
            question: 'Take a look at the snippet, and choose the true statements: (Select two answers)',
            code: 'nums = [1, 2, 3] vals = nums del vals[1:2]',
        },
        {
            question: 'Which of the following sentences are true? (Select two answers)',
            code: 'nums = [1, 2, 3] vals = nums[-1:-2]',
        },
        {
            question: 'What is the output of the following snippet?',
            code: 'my_list_1 = [1, 2, 3] my_list_2 = [] for v in my_list_1: my_list_2.insert(0, v) print(my_list_2)',
        },
        {
            question: 'What is the output of the following snippet?',
            code: 'my_list = [1, 2, 3] for v in range(len(my_list)): my_list.insert(1, my_list[v]) print(my_list)',
        },
        {
            question: 'How many elements does the my_list list contain?',
            code: 'my_list = [i for i in range(-1, 2)]',
        },
        {
            question: 'What is the output of the following snippet?',
            code: 't = [[3-i for i in range (3)] for j in range (3)] s = 0 for i in range(3): s += t[i][i] print(s)',
        },
        {
            question: 'What is the output of the following snippet?',
            code: 'my_list = [[0, 1, 2, 3] for i in range(2)] print(my_list[2][0])',
        },
    ],
    'module-4': [
        { question: 'Which one of the following lines properly starts a parameterless function definition?', code: '' },
        {
            question: 'A function defined in the following way: (Select two answers)',
            code: 'def function(x=0): return x',
        },
        { question: 'A built-in function is a function which:', code: '' },
        { question: 'The fact that tuples belong to sequence types means that:', code: '' },
        {
            question: 'What is the output of the following snippet?',
            code: 'def f(x): if x == 0: return 0 return x + f(x - 1) print(f(3))',
        },
        {
            question: 'What is the output of the following snippet?',
            code: 'def fun(x): x += 1 return x x = 2 x = fun(x + 1) print(x)',
        },
        {
            question: 'What code would you insert instead of the comment to obtain the expected output?',
            code: "dictionary = {} my_list = ['a', 'b', 'c', 'd'] for i in range(len(my_list) - 1): dictionary[my_list[i]] = (my_list[i], ) for i in sorted(dictionary.keys()): k = dictionary[i] # Insert your code here.",
        },
        { question: 'The following snippet:', code: 'def func(a, b): return a ** a print(func(2))' },
        {
            question: 'The following snippet:',
            code: 'def func_1(a): return a ** a def func_2(a): return func_1(a) * func_1(a) print(func_2(2))',
        },
        {
            question:
                'Which of the following lines properly starts a function using two parameters, both with zeroed default values?',
            code: '',
        },
        { question: 'Which of the following statements are true? (Select two answers)', code: '' },
        {
            question: 'What is the output of the following snippet?',
            code: 'def fun(x): if x % 2 == 0: return 1 else: return print(fun(fun(2)) + 1)',
        },
        {
            question: 'What is the output of the following snippet?',
            code: 'def fun(x): global y y = x * x return y fun(2) print(y)',
        },
        {
            question: 'What is the output of the following snippet?',
            code: "def any(): print(var + 1, end='') var = 1 any() print(var)",
        },
        {
            question:
                'Assuming that my_tuple is a correctly created tuple, the fact that tuples are immutable means that the following instruction:',
            code: 'my_tuple[1] = my_tuple[1] + my_tuple[0]',
        },
        {
            question: 'What is the output of the following snippet?',
            code: "my_list = ['Mary', 'had', 'a', 'little', 'lamb'] def my_list(my_list): del my_list[3] my_list[3] = 'ram' print(my_list(my_list))",
        },
        {
            question: 'What is the output of the following snippet?',
            code: 'def fun(x, y, z): return x + 2 * y + 3 * z print(fun(0, z=1, y=3))',
        },
        {
            question: 'What is the output of the following snippet?',
            code: 'def fun(inp=2, out=3): return inp * out print(fun(out=2))',
        },
        {
            question: 'What is the output of the following code?',
            code: "dictionary = {'one': 'two', 'three': 'one', 'two': 'three'} v = dictionary['one'] for k in range(len(dictionary)): v = dictionary[v] print(v)",
        },
        {
            question: 'What is the output of the following code?',
            code: 'tup = (1, 2, 4, 8) tup = tup[1:-1] tup = tup[0] print(tup)',
        },
        {
            question:
                'Select the true statements about the try-except block in relation to the following example. (Select two answers.)',
            code: 'try: # Some code is here... except: # Some code is here...',
        },
        {
            question: 'What is the output of the following code?',
            code: 'try: value = input("Enter a value: ") print(value/value) except ValueError: print("Bad input...") except ZeroDivisionError: print("Very bad input...") except TypeError: print("Very very bad input...") except: print("Booo!")',
        },
    ],
};

const FINAL_REFERENCE = [
    {
        question: 'Consider the following Python code snippet. What will the contents of my_numbers be after execution?',
        code: 'my_numbers = [10, 20, 30, 40, 50] for i in range(4): my_numbers.insert(i, my_numbers[-1]) print(my_numbers)',
    },
    {
        question:
            'In the context of a function call in Python, what determines the meaning of a positional argument?',
        code: '',
    },
    {
        question: 'Analyze the following Python code snippet:',
        code: 'alpha = [4, 8, 15, 16, 23, 42] beta = alpha[:] beta[2] = 99',
    },
    { question: 'An operator able to check whether two values are not equal is coded as:', code: '' },
    {
        question: 'Given the Python code segment below:',
        code: 'def compute_square(x): return x * x def compute_quad(x): return compute_square(x) * compute_square(None) print(compute_quad(4))',
    },
    { question: 'The result of the following division:', code: '1 // 2' },
    {
        question: 'Consider the Python function defined below:',
        code: 'def raise_power(base, exponent): return base ** exponent print(raise_power(exponent=3, 2))',
    },
    {
        question: 'What value will be assigned to the x variable?',
        code: 'z = 0 y = 10 x = y < z and z > y or y < z and z < y',
    },
    {
        question:
            'Review the following identifiers and select the ones that are reserved keywords in Python and would cause a SyntaxError if used as variable names. (Select two answers)',
        code: '',
    },
    {
        question: 'What is the expected output of the following Python code?',
        code: 'my_values = [3 * i for i in range(5)] def modify_list(values): del values[values[2] // 3] return values print(modify_list(my_values))',
    },
    {
        question: 'What is the output of the following piece of code?',
        code: 'x = 1 y = 2 x, y, z = x, x, y z, y, z = x, y, z print(x, y, z)',
    },
    {
        question: 'What will be the output of the following snippet?',
        code: 'a = 1 b = 0 a = a ^ b b = a ^ b a = a ^ b print(a, b)',
    },
    {
        question: 'What is the output of the following Python code snippet?',
        code: 'def custom_function(value): if value % 3 == 0: return 1 else: return 2 print(custom_function(custom_function(4)))',
    },
    {
        question:
            'Consider the following Python code snippet and determine which statement is correct:',
        code: "inventory = ['apple', 'banana', 'cherry'] backup_inventory = inventory del backup_inventory[:]",
    },
    {
        question: 'Consider the following Python code, where only integer inputs are allowed:',
        code: 'first_integer = int(input("Enter an integer: ")) second_integer = int(input("Enter another integer: ")) first_integer = first_integer % second_integer first_integer = first_integer % second_integer second_integer = second_integer % first_integer print(second_integer)',
    },
    {
        question:
            'Assuming the user enters 8 on the first line and 5 on the second line, what is the output of the following Python code?',
        code: 'first_input = input("Enter first number: ") second_input = input("Enter second number: ") print(second_input + first_input)',
    },
    {
        question: 'What is the output of the following piece of code?',
        code: 'print("a", "b", "c", sep="sep")',
    },
    {
        question: 'What is the output of the following piece of code?',
        code: 'x = 1 // 5 + 1 / 5 print(x)',
    },
    {
        question:
            'What is the result of trying to execute the following code snippet if sample_tuple is a tuple that has been previously defined with at least two elements?',
        code: 'sample_tuple[0] = 5 print(sample_tuple)',
    },
    {
        question:
            'What is the output of the following piece of code if the user enters two lines containing 2 and 4 respectively?',
        code: 'x = float(input()) y = float(input()) print(y ** (1 / x))',
    },
    {
        question: 'What is the expected output of the following code snippet?',
        code: "dictionary = {'alpha': 'beta', 'gamma': 'alpha', 'beta': 'gamma'} value = dictionary['gamma'] for key in range(len(dictionary)): value = dictionary[value] print(value)",
    },
    {
        question: 'How many elements are in the values list?',
        code: 'values = [i for i in range(-1, -3, -1)]',
    },
    {
        question: 'Which of the following function calls correctly invoke the function defined below? (Select two answers)',
        code: 'def custom_function(x, y, z=0): # Body of the function.',
    },
    {
        question: 'What is the output of the following snippet?',
        code: 'def fun(x, y): if x == y: return x else: return fun(x, y-1) print(fun(0, 3))',
    },
    {
        question: 'How many stars (*) will the following snippet send to the console?',
        code: 'i = 0 while i < i + 2 : i += 1 print("*") else: print("*")',
    },
    {
        question: 'What is the output of the following Python code snippet?',
        code: 'my_tuple = (10, 20, 30, 40, 50) my_tuple = my_tuple[-3:-1] my_tuple = my_tuple[-1] print(my_tuple)',
    },
    {
        question: 'Given the following Python code:',
        code: 'my_dict = {"apple": 1, "banana": 2, "cherry": 3}',
    },
    {
        question: 'What is the output of the following snippet?',
        code: "dct = {} dct['1'] = (1, 2) dct['2'] = (2, 1) for x in dct.keys(): print(dct[x][1], end=\"\")",
    },
    {
        question: 'What is the output of the following snippet?',
        code: 'def fun(inp=2, out=3): return inp * out print(fun(out=2))',
    },
    {
        question: 'How many times will the # symbol be printed to the console by the following code snippet?',
        code: 'matrix = [[x for x in range(3)] for y in range(3)] count = 0 for row in matrix: for element in row: if element % 2 != 0: count += 1 print(count)',
    },
    {
        question: 'What is the output of the following code if the user enters a 0?',
        code: 'try: value = input("Enter a value: ") print(int(value)/len(value)) except ValueError: print("Bad input...") except ZeroDivisionError: print("Very bad input...") except TypeError: print("Very very bad input...") except: print("Booo!")',
    },
    {
        question: 'What is the expected behavior of the following Python program?',
        code: 'try: print(10 / 0) break except ZeroDivisionError:: print("Zero division error occurred...") except (ValueError, TypeError): print("Value or type error occurred..") except: print("Unknown error occurred...")',
    },
    {
        question: 'What is the expected behavior of the following program?',
        code: 'foo = (1, 2, 3) foo.index(0)',
    },
    {
        question:
            'Which of the following snippets shows the correct way of handling multiple exceptions in a single except clause?',
        code: '# A: except (TypeError, ValueError, ZeroDivisionError): # Some code. # B: except TypeError, ValueError, ZeroDivisionError: # Some code. # C: except: (TypeError, ValueError, ZeroDivisionError) # Some code. # D: except: TypeError, ValueError, ZeroDivisionError # Some code. # E: except (TypeError, ValueError, ZeroDivisionError) # Some code. # F: except TypeError, ValueError, ZeroDivisionError # Some code.',
    },
    {
        question: 'What will happen when you attempt to run the following code?',
        code: 'print(3 + "5")',
    },
];

function normCode(code) {
    if (!code) return '';
    return String(code)
        .replace(/\u00A0/g, ' ')
        .replace(/\r?\n+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function normQ(q) {
    return String(q || '')
        .replace(/\u00A0/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

function toCodeField(code) {
    const c = normCode(code);
    return c || null;
}

function itemKey(item) {
    return `${normQ(item.question)}::${normCode(item.code ?? '')}`;
}

function scoreMatch(ref, item) {
    const rq = normQ(ref.question);
    const iq = normQ(item.question);
    const rc = normCode(ref.code);
    const ic = normCode(item.code ?? '');

    if (rq === iq && rc === ic) return 100;
    if (rc && ic && rc === ic) {
        if (rq === iq) return 95;
        if (iq.includes(rq.slice(0, 30)) || rq.includes(iq.slice(0, 30))) return 80;
        return 70;
    }
    if (rq === iq) return 60;
    if (rc && ic && rc.slice(0, 40) === ic.slice(0, 40)) return 50;
    return 0;
}

function findBestAnswers(ref, pool, used) {
    const rc = normCode(ref.code);
    let best = null;
    let bestScore = 0;
    for (const item of pool) {
        if (used.has(item)) continue;
        const ic = normCode(item.code ?? '');
        if (rc && ic !== rc) continue;
        if (!rc && ic) continue;
        const s = scoreMatch(ref, item);
        if (s > bestScore) {
            bestScore = s;
            best = item;
        }
    }
    if (best && bestScore >= 50) {
        used.add(best);
        return best.answers ?? [];
    }
    return [];
}

function mergeSection(refList, existingList) {
    const pool = [...(existingList || [])];
    const used = new Set();
    return refList.map((ref) => ({
        question: ref.question,
        code: toCodeField(ref.code),
        answers: findBestAnswers(ref, pool, used),
    }));
}

const src = readFileSync(dataPath, 'utf8');

function loadExisting(source) {
    const body = source.replace(/^[\s\S]*?const RAW_DB = \{\};\s*/m, '');
    const fn = new Function(`${body}; return { QUIZ_DB, FINAL_EXAM_DB };`);
    return fn();
}

const { QUIZ_DB: existingQuiz, FINAL_EXAM_DB: existingFinal } = loadExisting(src);

const newQuiz = {};
for (const [section, refList] of Object.entries(REFERENCE)) {
    newQuiz[section] = mergeSection(refList, existingQuiz[section]);
}

const finalPool = [...existingFinal];
for (const section of Object.values(existingQuiz)) {
    finalPool.push(...section);
}
const newFinal = mergeSection(FINAL_REFERENCE, finalPool);

const MANUAL_ANSWERS_GLOBAL = {
    [`${normQ('What are the four fundamental elements that make a language?')}::`]: [
        'an alphabet',
        'a lexis',
        'grammar',
        'semantics',
    ],
    [`${normQ('What is the output of the following snippet?')}::${normCode('x = 1 y = 2 z = x x = y y = z print(x, y)')}`]: [
        '2 1',
    ],
    [`${normQ('What is the output of the following snippet if the user enters two lines containing 2 and 4 respectively?')}::${normCode('x = int(input()) y = int(input()) x = x // y y = y // x print(y)')}`]:
        ['the code will cause a runtime error'],
    [`${normQ('What is the output of the following snippet?')}::${normCode('x = 1 / 2 + 3 // 3 + 4 ** 2 print(x)')}`]: ['17.5'],
    [`${normQ('An operator able to check whether two values are equal is coded as:')}::`]: ['=='],
    [`${normQ('Which one of the following lines properly starts a parameterless function definition?')}::`]: ['def fun():'],
    [`${normQ('What is the output of the following code?')}::${normCode('tup = (1, 2, 4, 8) tup = tup[1:-1] tup = tup[0] print(tup)')}`]: ['2'],
    [`${normQ('Select the true statements about the try-except block in relation to the following example. (Select two answers.)')}::${normCode('try: # Some code is here... except: # Some code is here...')}`]:
        [
            'if you suspect that a snippet may raise an exception, you should place it in the try block',
            'The code that follows the except statement will be executed if the code in the try clause runs into an error.',
        ],
    [`${normQ('What is the output of the following code?')}::${normCode('try: value = input("Enter a value: ") print(value/value) except ValueError: print("Bad input...") except ZeroDivisionError: print("Very bad input...") except TypeError: print("Very very bad input...") except: print("Booo!")')}`]:
        ['Very very bad input...'],
    [`${normQ('An operator able to check whether two values are not equal is coded as:')}::`]: ['!='],
    [`${normQ('The 0o prefix means that the number after it is denoted as:')}::`]: ['an octal number', 'octal'],
    [`${normQ('The result of the following division:')}::${normCode('1 / 1')}`]: ['is equal to 1.0', '1.0'],
    [`${normQ('The digraph forces the print() function to:')}::`]: ['break the output line'],
    [`${normQ('What is the output of the following snippet if the user enters two lines containing 2 and 4 respectively?')}::${normCode('x = int(input()) y = int(input()) x = x / y y = y / x print(y)')}`]:
        ['2.0', '2'],
    [`${normQ('Consider the following Python code, where only integer inputs are allowed:')}::${normCode('first_integer = int(input("Enter an integer: ")) second_integer = int(input("Enter another integer: ")) first_integer = first_integer % second_integer first_integer = first_integer % second_integer second_integer = second_integer % first_integer print(second_integer)')}`]:
        ['depends on the input values'],
    [`${normQ('Given the following Python code:')}::${normCode('my_dict = {"apple": 1, "banana": 2, "cherry": 3}')}`]: [
        'the code is valid and creates a dictionary',
    ],
    [`${normQ('A built-in function is a function which:')}::`]: [
        'comes with Python, and is an integral part of Python',
    ],
    [`${normQ('Consider the following Python code snippet. What will the contents of my_numbers be after execution?')}::${normCode('my_numbers = [10, 20, 30, 40, 50] for i in range(4): my_numbers.insert(i, my_numbers[-1]) print(my_numbers)')}`]:
        ['[50, 50, 50, 50, 10, 20, 30, 40, 50]'],
    [`${normQ('In the context of a function call in Python, what determines the meaning of a positional argument?')}::`]:
        ['its position within the argument list'],
    [`${normQ('Analyze the following Python code snippet:')}::${normCode('alpha = [4, 8, 15, 16, 23, 42] beta = alpha[:] beta[2] = 99')}`]: [
        'alpha[2] is still equal to 15',
        'beta is a copy of alpha',
    ],
    [`${normQ('Given the Python code segment below:')}::${normCode('def compute_square(x): return x * x def compute_quad(x): return compute_square(x) * compute_square(None) print(compute_quad(4))')}`]:
        ['the code will raise a TypeError exception', 'TypeError'],
    [`${normQ('The result of the following division:')}::${normCode('1 // 2')}`]: ['is equal to 0', '0'],
    [`${normQ('Consider the Python function defined below:')}::${normCode('def raise_power(base, exponent): return base ** exponent print(raise_power(exponent=3, 2))')}`]:
        ['the code will raise a TypeError exception', 'TypeError'],
    [`${normQ('What value will be assigned to the x variable?')}::${normCode('z = 0 y = 10 x = y < z and z > y or y < z and z < y')}`]: ['False'],
    [`${normQ('Review the following identifiers and select the ones that are reserved keywords in Python and would cause a SyntaxError if used as variable names. (Select two answers)')}::`]:
        ['class', 'def'],
    [`${normQ('What is the expected output of the following Python code?')}::${normCode('my_values = [3 * i for i in range(5)] def modify_list(values): del values[values[2] // 3] return values print(modify_list(my_values))')}`]:
        ['[0, 3, 9, 12]'],
    [`${normQ('What is the output of the following piece of code?')}::${normCode('x = 1 y = 2 x, y, z = x, x, y z, y, z = x, y, z print(x, y, z)')}`]:
        ['1 1 2', '1 1 2'],
    [`${normQ('What is the output of the following Python code snippet?')}::${normCode('def custom_function(value): if value % 3 == 0: return 1 else: return 2 print(custom_function(custom_function(4)))')}`]:
        ['2'],
    [`${normQ('Consider the following Python code snippet and determine which statement is correct:')}::${normCode("inventory = ['apple', 'banana', 'cherry'] backup_inventory = inventory del backup_inventory[:]")}`]:
        ['inventory and backup_inventory refer to the same list', 'inventory is empty'],
    [`${normQ('Assuming the user enters 8 on the first line and 5 on the second line, what is the output of the following Python code?')}::${normCode('first_input = input("Enter first number: ") second_input = input("Enter second number: ") print(second_input + first_input)')}`]:
        ['58'],
    [`${normQ('What is the result of trying to execute the following code snippet if sample_tuple is a tuple that has been previously defined with at least two elements?')}::${normCode('sample_tuple[0] = 5 print(sample_tuple)')}`]:
        ['the code will raise a TypeError exception', 'TypeError'],
    [`${normQ('What is the expected output of the following code snippet?')}::${normCode("dictionary = {'alpha': 'beta', 'gamma': 'alpha', 'beta': 'gamma'} value = dictionary['gamma'] for key in range(len(dictionary)): value = dictionary[value] print(value)")}`]:
        ['beta'],
    [`${normQ('How many elements are in the values list?')}::${normCode('values = [i for i in range(-1, -3, -1)]')}`]: ['two', '2'],
    [`${normQ('Which of the following function calls correctly invoke the function defined below? (Select two answers)')}::${normCode('def custom_function(x, y, z=0): # Body of the function.')}`]:
        ['custom_function(0, 1)', 'custom_function(0, 1, 2)'],
    [`${normQ('What is the output of the following snippet?')}::${normCode('def fun(x, y): if x == y: return x else: return fun(x, y-1) print(fun(0, 3))')}`]:
        ['0'],
    [`${normQ('What is the output of the following Python code snippet?')}::${normCode('my_tuple = (10, 20, 30, 40, 50) my_tuple = my_tuple[-3:-1] my_tuple = my_tuple[-1] print(my_tuple)')}`]:
        ['30'],
    [`${normQ('How many times will the # symbol be printed to the console by the following code snippet?')}::${normCode('matrix = [[x for x in range(3)] for y in range(3)] count = 0 for row in matrix: for element in row: if element % 2 != 0: count += 1 print(count)')}`]:
        ['zero', '0'],
    [`${normQ('What is the output of the following code if the user enters a 0?')}::${normCode('try: value = input("Enter a value: ") print(int(value)/len(value)) except ValueError: print("Bad input...") except ZeroDivisionError: print("Very bad input...") except TypeError: print("Very very bad input...") except: print("Booo!")')}`]:
        ['0.0'],
    [`${normQ('What is the expected behavior of the following Python program?')}::${normCode('try: print(10 / 0) break except ZeroDivisionError:: print("Zero division error occurred...") except (ValueError, TypeError): print("Value or type error occurred..") except: print("Unknown error occurred...")')}`]:
        ['The program will cause a SyntaxError exception', 'SyntaxError'],
    [`${normQ('Which of the following snippets shows the correct way of handling multiple exceptions in a single except clause?')}::${normCode('# A: except (TypeError, ValueError, ZeroDivisionError): # Some code. # B: except TypeError, ValueError, ZeroDivisionError: # Some code. # C: except: (TypeError, ValueError, ZeroDivisionError) # Some code. # D: except: TypeError, ValueError, ZeroDivisionError # Some code. # E: except (TypeError, ValueError, ZeroDivisionError) # Some code. # F: except TypeError, ValueError, ZeroDivisionError # Some code.')}`]:
        ['except (TypeError, ValueError, ZeroDivisionError):'],
    [`${normQ('What will happen when you attempt to run the following code?')}::${normCode('print(3 + "5")')}`]:
        ['The code will raise a TypeError exception', 'TypeError'],
    [`${normQ('How many stars (*) will the following snippet send to the console?')}::${normCode('i = 0 while i <= 3 : i += 2 print("*")')}`]: ['two'],
    [`${normQ('How many stars (*) will the following snippet send to the console?')}::${normCode('i = 0 while i <= 5 : i += 1 if i % 2 == 0: break print("*")')}`]: ['one'],
    [`${normQ('The second assignment:')}::${normCode('vals = [0, 1, 2] vals[0], vals[2] = vals[2], vals[0]')}`]: ['reverses the list'],
    [`${normQ('What code would you insert instead of the comment to obtain the expected output?')}::${normCode("dictionary = {} my_list = ['a', 'b', 'c', 'd'] for i in range(len(my_list) - 1): dictionary[my_list[i]] = (my_list[i], ) for i in sorted(dictionary.keys()): k = dictionary[i] # Insert your code here.")}`]:
        ['print(k[0])'],
    [`${normQ('What is the output of the following snippet?')}::${normCode("def any(): print(var + 1, end='') var = 1 any() print(var)")}`]:
        ['the code will cause a runtime error'],
    [`${normQ('What is the output of the following snippet?')}::${normCode('def fun(x, y, z): return x + 2 * y + 3 * z print(fun(0, z=1, y=3))')}`]: ['9'],
    [`${normQ('What is the output of the following snippet?')}::${normCode('def fun(inp=2, out=3): return inp * out print(fun(out=2))')}`]: ['4'],
    [`${normQ('What will be the output of the following snippet?')}::${normCode('a = 1 b = 0 a = a ^ b b = a ^ b a = a ^ b print(a, b)')}`]: ['0 1'],
    [`${normQ('What is the output of the following piece of code if the user enters two lines containing 2 and 4 respectively?')}::${normCode('x = float(input()) y = float(input()) print(y ** (1 / x))')}`]: ['2.0'],
    [`${normQ('How many stars (*) will the following snippet send to the console?')}::${normCode('i = 0 while i < i + 2 : i += 1 print("*") else: print("*")')}`]:
        ['the snippet will enter an infinite loop, printing one star per line'],
};

const MANUAL_BY_SECTION = {
    'module-4': {
        [`${normQ('Which of the following statements are true? (Select two answers)')}::`]: [
            'The None value can be assigned to variables',
            'The None value can be compared with variables',
        ],
    },
};

function applyManualAnswers(items, section) {
    for (const item of items) {
        if (item.answers.length) continue;
        const key = itemKey(item);
        const fromSection = MANUAL_BY_SECTION[section]?.[key];
        const fromGlobal = MANUAL_ANSWERS_GLOBAL[key];
        const picked = fromSection || fromGlobal;
        if (picked) item.answers = [...picked];
    }
}

for (const [section, items] of Object.entries(newQuiz)) {
    applyManualAnswers(items, section);
}
applyManualAnswers(newFinal, 'final');

function formatAnswers(answers, indent) {
    if (!answers?.length) return '[]';
    const lines = answers.map((a) => `${indent}    ${JSON.stringify(a)},`);
    return `[\n${lines.join('\n')}\n${indent}]`;
}

function formatItem(item, indent) {
    const q = JSON.stringify(item.question);
    const code = item.code === null ? 'null' : JSON.stringify(item.code);
    const ans = formatAnswers(item.answers, indent + '    ');
    return `${indent}{\n${indent}    question: ${q},\n${indent}    code: ${code},\n${indent}    answers: ${ans},\n${indent}}`;
}

function formatSection(items, indent) {
    return `[\n${items.map((it) => formatItem(it, indent + '    ')).join(',\n')}\n${indent}]`;
}

const header = src.slice(0, src.indexOf('const QUIZ_DB'));
let out = header;
out += 'const QUIZ_DB = {\n';
const sections = Object.keys(REFERENCE);
out += sections
    .map((key) => `    '${key}': ${formatSection(newQuiz[key], '    ')}`)
    .join(',\n');
out += '\n};\n\n';
out += `const FINAL_EXAM_DB = ${formatSection(newFinal, '')};\n`;

writeFileSync(dataPath, out);

let warnings = 0;
for (const [section, items] of Object.entries(newQuiz)) {
    const empty = items.filter((it) => !it.answers.length);
    if (empty.length) {
        console.warn(`${section}: ${empty.length} question(s) without answers`);
        warnings += empty.length;
    }
}
const finalEmpty = newFinal.filter((it) => !it.answers.length);
if (finalEmpty.length) {
    console.warn(`final exam: ${finalEmpty.length} question(s) without answers`);
    warnings += finalEmpty.length;
}

console.log('Updated', dataPath);
console.log(
    `Counts: ${sections.map((s) => `${s}=${newQuiz[s].length}`).join(', ')}, final=${newFinal.length}`,
);
if (warnings) console.warn(`Total without answers: ${warnings}`);
