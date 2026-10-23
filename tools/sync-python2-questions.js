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
const dataPath = join(root, 'data', 'variables_python2.js');

const REFERENCE = {
    'module-1': [
        {
            question:
                'Knowing that a function named fun() resides in a module named mod, choose the correct way to import it.',
            code: '',
        },
        {
            question:
                'Knowing that a function named fun() resides in a module named mod, and it has been imported using the following line: import mod Choose the way it can be invoked in your code.',
            code: '',
        },
        { question: 'A function which returns a list of all entities available in a module is called:', code: '' },
        { question: 'A pyc file contains:', code: '' },
        { question: 'When a module is imported, its contents:', code: '' },
        { question: 'A predefined Python variable that stores the current module name is called:', code: '' },
        { question: 'The following statement: from a.b import c causes the import of:', code: '' },
        {
            question: 'What is the expected value assigned to the result variable after the following code is executed?',
            code: 'import math result = math.e != math.pow(2, 4) print(int(result))',
        },
        {
            question: 'What is the expected output of the following code?',
            code: "from random import randint for i in range(2): print(randint(1, 2), end='')",
        },
        { question: 'Choose the true statements. (Select two answers)', code: '' },
        {
            question: 'During the first import of a module, Python deploys the pyc files in the directory called:',
            code: '',
        },
        { question: 'The digraph written as #! is used to:', code: '' },
        { question: 'A list of package dependencies can be obtained from pip using a command named:', code: '' },
        { question: 'The pip list command presents a list of:', code: '' },
        { question: 'What is true about the pip search command? (Select two answers)', code: '' },
        { question: 'What is true about the pip install command? (Select two answers)', code: '' },
        { question: 'What is true about updating already installed Python packages?', code: '' },
        { question: 'Which command can you use pip to remove an installed package?', code: '' },
    ],
    'module-2': [
        { question: 'Entering the try: block implies that:', code: '' },
        { question: 'The unnamed except: block:', code: '' },
        { question: 'The top-most Python exception is called:', code: '' },
        { question: 'The following statement:', code: 'assert var == 0' },
        {
            question: 'What is the expected output of the following code?',
            code: 'try: print("5"/0) except ArithmeticError: print("arith") except ZeroDivisionError: print("zero") except: print("some")',
        },
        {
            question: 'Which of the following are examples of built-in concrete Python exceptions? (Select two answers)',
            code: '',
        },
        { question: 'ASCII is:', code: '' },
        { question: 'UTF-8 is:', code: '' },
        { question: 'UNICODE is a standard:', code: '' },
        { question: 'The following code:', code: "x = '\\'' print(len(x))" },
        { question: 'The following code:', code: "print(ord('c') - ord('a'))" },
        { question: 'The following code:', code: "print(chr(ord('z') - 2))" },
        { question: 'The following code:', code: "print(3 * 'abc' + 'xyz')" },
        { question: 'The following code:', code: 'print("Mike" > "Mikey")' },
        { question: 'The following code:', code: 'print(float("1, 3"))' },
    ],
    'module-3': [
        { question: 'A data structure described as LIFO is actually a:', code: '' },
        {
            question: "If the class's constructor is declared as below, which one of the assignments is valid?",
            code: 'class Class: def __init__(self): pass',
        },
        {
            question:
                'If there is a superclass named A and a subclass named B, which one of the presented invocations should you put instead of the comment?',
            code: 'class A: def __init__(self): self.a = 1 class B(A): def __init__(self): # Put selected line here. self.b = 2',
        },
        {
            question: 'What will be the effect of running the following code?',
            code: 'class A: def __init__(self,v): self.__a = v + 1 a = A(0) print(a.__a)',
        },
        {
            question: 'What will be the output of the following code?',
            code: 'class A: def __init__(self,v = 1): self.v = v def set(self,v): self.v = v return v a = A() print(a.set(a.v + 1))',
        },
        {
            question: 'What will be the output of the following code?',
            code: 'class A: X = 0 def __init__(self,v = 0): self.Y = v A.X += v a = A() b = A(1) c = A(2) print(c.X)',
        },
        {
            question: 'What will be the output of the following code?',
            code: "class A: A = 1 print(hasattr(A,'A'))",
        },
        {
            question: 'What will be the result of executing the following code?',
            code: 'class A: def __init__(self): pass a = A(1) print(hasattr(a,\'A\'))',
        },
        {
            question: 'What will be the result of executing the following code?',
            code: "class A: def __str__(self): return 'a' class B(A): def __str__(self): return 'b' class C(B): pass o = C() print(o)",
        },
        {
            question: 'What will be the result of executing the following code?',
            code: 'class A: pass class B(A): pass class C(B): pass print(issubclass(C,A))',
        },
        {
            question: 'What will be the result of executing the following code?',
            code: "class A: def a(self): print('a') class B: def a(self): print('b') class C(B,A): def c(self): self.a() o = C() o.c()",
        },
        {
            question: 'What will be the result of executing the following code?',
            code: "class A: def __str__(self): return 'a' class B: def __str__(self): return 'b' class C(A, B): pass o = C() print(o)",
        },
        {
            question: 'What will be the result of executing the following code?',
            code: 'class A: v = 2 class B(A): v = 1 class C(B): pass o = C() print(o.v)',
        },
        {
            question: 'What will be the result of executing the following code?',
            code: 'def f(x): try: x = x / x except: print("a",end=\'\') else: print("b",end=\'\') finally: print("c",end=\'\') f(1) f(0)',
        },
        {
            question: 'What will be the result of executing the following code?',
            code: 'try: raise Exception(1,2,3) except Exception as e: print(len(e.args))',
        },
        {
            question: 'What will be the result of executing the following code?',
            code: "class Ex(Exception): def __init__(self, msg): Exception.__init__(self, msg + msg) self.args = (msg,) try: raise Ex('ex') except Ex as e: print(e) except Exception as e: print(e)",
        },
        {
            question: 'What will be the result of executing the following code?',
            code: "class I: def __init__(self): self.s = 'abc' self.i = 0 def __iter__(self): return self def __next__(self): if self.i == len(self.s): raise StopIteration v = self.s[self.i] self.i += 1 return v for x in I(): print(x,end='')",
        },
    ],
    'module-4': [
        { question: 'What keyword would you use to define an anonymous function?', code: '' },
        { question: 'Select the true statements. (Select two answers)', code: '' },
        {
            question: 'Look at the code below:',
            code: 'my_list = [1, 2, 3] # Insert line of code here. print(foo)',
        },
        {
            question: 'Look at the code below:',
            code: 'my_tuple = (0, 1, 2, 3, 4, 5, 6) # Insert line of code here. print(foo)',
        },
        {
            question: 'What is the expected result of executing the following code?',
            code: "def I(): s = 'abcdef' for c in s[::2]: yield c for x in I(): print(x, end='')",
        },
        {
            question: 'What is the expected result of executing the following code?',
            code: "def fun(n): s = '+' for i in range(n): s += s yield s for x in fun(2): print(x, end='');",
        },
        {
            question: 'What is the expected result of executing the following code?',
            code: "def o(p): def q(): return '*' * p return q r = o(1) s = o(2) print(r() + s())",
        },
        {
            question: 'Which of the following open modes allow you to perform read operations? (Select two answers)',
            code: '',
        },
        { question: 'What is the meaning of the value represented by errno.EEXIST ?', code: '' },
        { question: 'What is the expected result of the following code?', code: 'b = bytearray(3) print(b)' },
        {
            question: 'What is the expected result of the following code?',
            code: "import os os.mkdir('pictures') os.chdir('pictures') os.mkdir('thumbnails') os.chdir('thumbnails') os.mkdir('tmp') os.chdir('../') print(os.getcwd())",
        },
        {
            question: 'What is the expected result of the following code?',
            code: "import os os.mkdir('thumbnails') os.chdir('thumbnails') sizes = ['small', 'medium', 'large'] for size in sizes: os.mkdir(size) print(os.listdir())",
        },
        {
            question: 'What is the expected result of the following code?',
            code: 'from datetime import date date_1 = date(1992, 1, 16) date_2 = date(1991, 2, 5) print(date_1 - date_2)',
        },
        {
            question: 'What is the expected result of the following code?',
            code: "from datetime import datetime datetime = datetime(2019, 11, 27, 11, 27, 22) print(datetime.strftime('%y/%B/%d %H:%M:%S'))",
        },
        {
            question: 'Which program will produce the following output:',
            code: 'Mo Tu We Th Fr Sa Su',
        },
        {
            question: 'What is the expected result of the following code?',
            code: 'import calendar c = calendar.Calendar() for weekday in c.iterweekdays(): print(weekday, end=" ")',
        },
    ],
};

const FINAL_REFERENCE = [
    {
        question:
            'Knowing that a function named fun() resides in a module named mod, and was imported using the following statement:',
        code: 'from mod import fun',
    },
    {
        question: 'Given the Python code snippet below:',
        code: 'import random print(len(dir(random)))',
    },
    {
        question: 'The compiled Python bytecode is stored in files which have their names ending with:',
        code: '',
    },
    {
        question:
            'Assuming that the following three files: a.py, b.py, and c.py reside in the same directory, what will be the output produced after running the c.py file?',
        code: '# file a.py print("a", end=\'\') # file b.py import a print("b", end=\'\') # file c.py print("c", end=\'\') import a import b',
    },
    {
        question:
            'If the following line of code is at the end of a Python script named calculator.py, what will be the output when this script is run directly?',
        code: 'print(__name__)',
    },
    {
        question: 'Consider the following Python import statement in a script:',
        code: 'from data.processing.analysis.v1 import compute_metrics as cm',
    },
    {
        question: 'Given the following Python code segment:',
        code: 'try: # Code that may raise an exception risky_call() except ValueError: print("Caught ValueError") except TypeError: print("Caught TypeError") except Exception: print("Caught a different exception")',
    },
    {
        question: 'Consider the following Python code:',
        code: 'try: raise Exception("An error occurred") except ValueError as ve: print("ValueError:", str(ve)) except BaseException as be: print("BaseException:", str(be)) except: print("Caught some other exception")',
    },
    {
        question: 'Review the Python code below:',
        code: 'try: raise Exception("An error has occurred") except Exception: print("a") except: print("b") except BaseException: print("c")',
    },
    {
        question: 'Analyze the Python statement below:',
        code: "with open('data.csv', 'r') as file: for record in file:",
    },
    {
        question: 'Examine the Python assertion statement provided:',
        code: 'assert var > 0',
    },
    {
        question: 'Given the Python code segment below:',
        code: 'x = r"\\" print(len(x))',
    },
    {
        question: 'Given the Python code segment below:',
        code: 'x = "\\// print(len(x))',
    },
    {
        question: 'Consider the Python code provided below:',
        code: "print(chr(ord('a') + 1))",
    },
    {
        question: 'Consider the following Python code snippet:',
        code: 'print(int("1.0"))',
    },
    {
        question: 'If the class constructor is declared in the following way:',
        code: 'class Class: def __init__(self, val=0): pass',
    },
    {
        question: 'Consider the Python class CustomNumber and the subsequent operations performed on its instance:',
        code: 'class CustomNumber: def __init__(self, value=1.5): self.value = value def increment(self, increase=2): self.value -= increase return self.value num_instance = CustomNumber() num_alias = num_instance num_alias.increment() print(num_instance.value)',
    },
    {
        question: 'What is the expected output of the following code?',
        code: "class A: A = 1 def __init__(self): self.a = 0 print(hasattr(A, 'a'))",
    },
    {
        question: 'What will the following Python code output?',
        code: 'class Parent: pass class Uncle(Parent): pass class Child(Uncle): pass class Cousin(Parent): pass print(issubclass(Child, Cousin), issubclass(Cousin, Uncle))',
    },
    { question: 'What is the sys.stdout stream in Python typically associated with?', code: '' },
    {
        question: 'What will be the result of running the following code?',
        code: 'class A: def __init__(self, v): self.__a = v + 1 class B(A): def __init__(self, v): super().__init__(v) self.__a += 1 b = B(0) print(b._A__a)',
    },
    {
        question: 'What is the expected result of executing the following code?',
        code: 'class A: def __init__(self): pass a = A(1) print(hasattr(a, \'A\'))',
    },
    {
        question: 'What is the expected result of executing the following code?',
        code: "class A: def a(self): print('a') class B: def a(self): print('b') class C(B, A): def c(self): self.a() o = C() o.c()",
    },
    {
        question: 'What is the expected result of executing the following code?',
        code: 'try: raise Exception(1, 2, 3, (4), "A",) except Exception as e: print(len(e.args))',
    },
    {
        question: 'What is the expected result of executing the following code?',
        code: "def my_fun(n): s = '+' for i in range(n): s += s yield s for x in my_fun(2): print(x, end='')",
    },
    {
        question: 'What is the expected result of executing the following code?',
        code: "class I: def __init__(self): self.s = 'abc' self.i = 0 def __iter__(self): return self def __next__(self): if self.i == len(self.s): raise StopIteration v = self.s[self.i] self.i += 1 return v for x in I(): print(x, end='')",
    },
    {
        question: 'What will be the output of the following code?',
        code: "def generate_pattern(n): def create_pattern(): return '**' * n return create_pattern pattern1 = generate_pattern(1) pattern2 = generate_pattern(2) print(pattern1() + pattern2())",
    },
    {
        question: 'If s is a stream opened in read mode, the following line of code do?',
        code: 'q = s.read(-1)',
    },
    {
        question: 'Assuming that the open() invocation has gone successfully, the following snippet:',
        code: "for x in open('file', 'rt'): print(x)",
    },
    {
        question: 'If you want to fill a byte array with data read in from a stream, which method can you use?',
        code: '',
    },
    {
        question: "Which of the following commands would you use to check pip's version? (Select two answers)",
        code: '',
    },
    {
        question: 'Which of the following commands can be used with pip to uninstall a specific Python package?',
        code: '',
    },
    {
        question: 'Look at the following code:',
        code: 'numbers = [0, 2, 7, 9, 10] # Insert line of code here. print(list(foo))',
    },
    {
        question: 'Look at the following code:',
        code: 'numbers = [i*i for i in range(5)] # Insert line of code here. print(foo)',
    },
    {
        question: 'Look at the code below:',
        code: 'import random # # Insert lines of code here. # print(a, b, c)',
    },
    {
        question: 'What is the expected result of the following code?',
        code: "import os os.mkdir('pictures') os.chdir('pictures') print(os.getcwd())",
    },
    {
        question: 'What information can be read using the uname function provided by the os module? (Select two answers)',
        code: '',
    },
    {
        question: 'What is the expected result of the following code?',
        code: 'from datetime import datetime datetime_1 = datetime(2019, 11, 27, 11, 27, 22) datetime_2 = datetime(2019, 11, 27, 0, 0, 0) print(datetime_1 - datetime_2)',
    },
    {
        question: 'If you want to calculate the date that is 30 days after the current date, which of the following code snippets would you use?',
        code: '',
    },
    {
        question: 'What is the expected result of executing the following Python code?',
        code: 'import calendar calendar.setfirstweekday(calendar.FRIDAY) print(calendar.weekheader(2))',
    },
];

function normCode(code) {
    if (!code) return '';
    return String(code)
        .replace(/[\u200B-\u200D\uFEFF]/g, '')
        .replace(/[\u2010-\u2015\u2212]/g, '-')
        .replace(/\u00A0/g, ' ')
        .replace(/\r?\n+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function normQ(q) {
    return String(q || '')
        .replace(/[\u2010-\u2015\u2212]/g, '-')
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
    [`${normQ('Knowing that a function named fun() resides in a module named mod, choose the correct way to import it.')}::`]:
        ['from mod import fun'],
    [`${normQ('Knowing that a function named fun() resides in a module named mod, and it has been imported using the following line: import mod Choose the way it can be invoked in your code.')}::`]:
        ['mod.fun()'],
    [`${normQ('A function which returns a list of all entities available in a module is called:')}::`]: ['dir()'],
    [`${normQ('A pyc file contains:')}::`]: ['compiled Python code'],
    [`${normQ('When a module is imported, its contents:')}::`]: ['are executed once (implicitly)'],
    [`${normQ('A predefined Python variable that stores the current module name is called:')}::`]: ['__name__'],
    [`${normQ('The following statement: from a.b import c causes the import of:')}::`]: [
        'entity c from module b from package a',
    ],
    [`${normQ('What is the expected output of the following code?')}::${normCode("from random import randint for i in range(2): print(randint(1, 2), end='')")}`]:
        ['11, 12, 21, or 22'],
    [`${normQ('Choose the true statements. (Select two answers)')}::`]: [
        'The version function from the platform module returns a string with your OS version',
        'The system function from the platform module returns a string with your OS name',
    ],
    [`${normQ('During the first import of a module, Python deploys the pyc files in the directory called:')}::`]:
        ['__pycache__'],
    [`${normQ('The digraph written as #! is used to:')}::`]: [
        'tell a Unix or Unix-like OS how to execute the contents of a Python file',
    ],
    [`${normQ('A list of package dependencies can be obtained from pip using a command named:')}::`]: ['show'],
    [`${normQ('The pip list command presents a list of:')}::`]: ['locally installed packages'],
    [`${normQ('What is true about the pip search command? (Select two answers)')}::`]: [
        'it needs working internet connection to work',
        'it searches through all PyPI packages',
    ],
    [`${normQ('What is true about the pip install command? (Select two answers)')}::`]: [
        'it allows the user to install a specific version of the package',
        'it installs a package per user only when the --user option is specified',
    ],
    [`${normQ('What is true about updating already installed Python packages?')}::`]: [
        "it's performed by the install command accompanied by the -U option",
    ],
    [`${normQ('Which command can you use pip to remove an installed package?')}::`]: ['pip uninstall package'],
    [`${normQ('Entering the try: block implies that:')}::`]: [
        'some of the instructions from this block may not be executed',
    ],
    [`${normQ('The unnamed except: block:')}::`]: ['must be the last one'],
    [`${normQ('The top-most Python exception is called:')}::`]: ['BaseException'],
    [`${normQ('The following statement:')}::${normCode('assert var == 0')}`]: [
        'will stop the program when var != 0',
    ],
    [`${normQ('What is the expected output of the following code?')}::${normCode('try: print("5"/0) except ArithmeticError: print("arith") except ZeroDivisionError: print("zero") except: print("some")')}`]:
        ['some'],
    [`${normQ('Which of the following are examples of built-in concrete Python exceptions? (Select two answers)')}::`]:
        ['IndexError', 'ImportError'],
    [`${normQ('ASCII is:')}::`]: ['short for American Standard Code for Information Interchange'],
    [`${normQ('UTF-8 is:')}::`]: ['a form of encoding Unicode code points'],
    [`${normQ('UNICODE is a standard:')}::`]: ['like ASCII, but much more expansive'],
    [`${normQ('The following code:')}::${normCode("x = '\\'' print(len(x))")}`]: ['1'],
    [`${normQ('The following code:')}::${normCode("print(ord('c') - ord('a'))")}`]: ['2'],
    [`${normQ('The following code:')}::${normCode("print(chr(ord('z') - 2))")}`]: ['x'],
    [`${normQ('The following code:')}::${normCode("print(3 * 'abc' + 'xyz')")}`]: ['abcabcabcxyz'],
    [`${normQ('The following code:')}::${normCode('print("Mike" > "Mikey")')}`]: ['False'],
    [`${normQ('The following code:')}::${normCode('print(float("1, 3"))')}`]: ['raises a ValueError exception', 'ValueError'],
    [`${normQ('A data structure described as LIFO is actually a:')}::`]: ['stack'],
    [`${normQ("If the class's constructor is declared as below, which one of the assignments is valid?")}::${normCode('class Class: def __init__(self): pass')}`]:
        ['object = Class()'],
    [`${normQ('If there is a superclass named A and a subclass named B, which one of the presented invocations should you put instead of the comment?')}::${normCode('class A: def __init__(self): self.a = 1 class B(A): def __init__(self): # Put selected line here. self.b = 2')}`]:
        ['A.__init__(self)'],
    [`${normQ('What will be the effect of running the following code?')}::${normCode('class A: def __init__(self,v): self.__a = v + 1 a = A(0) print(a.__a)')}`]:
        ['The code will raise an AttributeError exception', 'AttributeError'],
    [`${normQ('What will be the output of the following code?')}::${normCode('class A: def __init__(self,v = 1): self.v = v def set(self,v): self.v = v return v a = A() print(a.set(a.v + 1))')}`]:
        ['2'],
    [`${normQ('What will be the output of the following code?')}::${normCode('class A: X = 0 def __init__(self,v = 0): self.Y = v A.X += v a = A() b = A(1) c = A(2) print(c.X)')}`]:
        ['3'],
    [`${normQ('What will be the output of the following code?')}::${normCode("class A: A = 1 print(hasattr(A,'A'))")}`]: ['True'],
    [`${normQ('What will be the result of executing the following code?')}::${normCode("class A: def __init__(self): pass a = A(1) print(hasattr(a,'A'))")}`]:
        ['it will raise an exception'],
    [`${normQ('What will be the result of executing the following code?')}::${normCode("class A: def __str__(self): return 'a' class B(A): def __str__(self): return 'b' class C(B): pass o = C() print(o)")}`]:
        ['it will print b', 'b'],
    [`${normQ('What will be the result of executing the following code?')}::${normCode('class A: pass class B(A): pass class C(B): pass print(issubclass(C,A))')}`]:
        ['it will print True', 'True'],
    [`${normQ('What will be the result of executing the following code?')}::${normCode("class A: def a(self): print('a') class B: def a(self): print('b') class C(B,A): def c(self): self.a() o = C() o.c()")}`]:
        ['it will print b', 'b'],
    [`${normQ('What will be the result of executing the following code?')}::${normCode("class A: def __str__(self): return 'a' class B: def __str__(self): return 'b' class C(A, B): pass o = C() print(o)")}`]:
        ['it will print a', 'a'],
    [`${normQ('What will be the result of executing the following code?')}::${normCode('class A: v = 2 class B(A): v = 1 class C(B): pass o = C() print(o.v)')}`]:
        ['it will print 1', '1'],
    [`${normQ('What will be the result of executing the following code?')}::${normCode('def f(x): try: x = x / x except: print("a",end=\'\') else: print("b",end=\'\') finally: print("c",end=\'\') f(1) f(0)')}`]:
        ['it will print bcac', 'bcac'],
    [`${normQ('What will be the result of executing the following code?')}::${normCode('try: raise Exception(1,2,3) except Exception as e: print(len(e.args))')}`]:
        ['it will print 3', '3'],
    [`${normQ('What will be the result of executing the following code?')}::${normCode("class Ex(Exception): def __init__(self, msg): Exception.__init__(self, msg + msg) self.args = (msg,) try: raise Ex('ex') except Ex as e: print(e) except Exception as e: print(e)")}`]:
        ['it will print ex', 'ex'],
    [`${normQ('What will be the result of executing the following code?')}::${normCode("class I: def __init__(self): self.s = 'abc' self.i = 0 def __iter__(self): return self def __next__(self): if self.i == len(self.s): raise StopIteration v = self.s[self.i] self.i += 1 return v for x in I(): print(x,end='')")}`]:
        ['it will print abc', 'abc'],
    [`${normQ('What keyword would you use to define an anonymous function?')}::`]: ['lambda'],
    [`${normQ('Select the true statements. (Select two answers)')}::`]: [
        'The lambda function can evaluate only one expression',
        'The lambda function can accept any number of arguments',
    ],
    [`${normQ('Look at the code below:')}::${normCode('my_list = [1, 2, 3] # Insert line of code here. print(foo)')}`]:
        ['foo = tuple(map(lambda x: x**x, my_list))'],
    [`${normQ('Look at the code below:')}::${normCode('my_tuple = (0, 1, 2, 3, 4, 5, 6) # Insert line of code here. print(foo)')}`]:
        ['foo = tuple(filter(lambda x: x > 1, my_tuple))'],
    [`${normQ('What is the expected result of executing the following code?')}::${normCode("def I(): s = 'abcdef' for c in s[::2]: yield c for x in I(): print(x, end='')")}`]:
        ['It will print ace', 'ace'],
    [`${normQ('What is the expected result of executing the following code?')}::${normCode("def fun(n): s = '+' for i in range(n): s += s yield s for x in fun(2): print(x, end='');")}`]:
        ['It will print ++++++', '++++++'],
    [`${normQ('What is the expected result of executing the following code?')}::${normCode("def o(p): def q(): return '*' * p return q r = o(1) s = o(2) print(r() + s())")}`]:
        ['It will print ***', '***'],
    [`${normQ('Which of the following open modes allow you to perform read operations? (Select two answers)')}::`]: ['r', 'r+'],
    [`${normQ('What is the meaning of the value represented by errno.EEXIST ?')}::`]: ['File exists'],
    [`${normQ('What is the expected result of the following code?')}::${normCode('b = bytearray(3) print(b)')}`]:
        ["bytearray(b'\\x00\\x00\\x00')"],
    [`${normQ('What is the expected result of the following code?')}::${normCode("import os os.mkdir('pictures') os.chdir('pictures') os.mkdir('thumbnails') os.chdir('thumbnails') os.mkdir('tmp') os.chdir('../') print(os.getcwd())")}`]:
        ['The path to the pictures directory'],
    [`${normQ('What is the expected result of the following code?')}::${normCode("import os os.mkdir('thumbnails') os.chdir('thumbnails') sizes = ['small', 'medium', 'large'] for size in sizes: os.mkdir(size) print(os.listdir())")}`]:
        ["['large', 'medium', 'small']"],
    [`${normQ('What is the expected result of the following code?')}::${normCode('from datetime import date date_1 = date(1992, 1, 16) date_2 = date(1991, 2, 5) print(date_1 - date_2)')}`]:
        ['345 days, 0:00:00'],
    [`${normQ('What is the expected result of the following code?')}::${normCode("from datetime import datetime datetime = datetime(2019, 11, 27, 11, 27, 22) print(datetime.strftime('%y/%B/%d %H:%M:%S'))")}`]:
        ['19/November/27 11:27:22'],
    [`${normQ('Which program will produce the following output:')}::${normCode('Mo Tu We Th Fr Sa Su')}`]:
        ['import calendar print(calendar.weekheader(2))'],
    [`${normQ('What is the expected result of the following code?')}::${normCode('import calendar c = calendar.Calendar() for weekday in c.iterweekdays(): print(weekday, end=" ")')}`]:
        ['0 1 2 3 4 5 6'],
    [`${normQ('Knowing that a function named fun() resides in a module named mod, and was imported using the following statement:')}::${normCode('from mod import fun')}`]:
        ['fun()'],
    [`${normQ('Given the Python code snippet below:')}::${normCode('import random print(len(dir(random)))')}`]:
        ['a positive integer'],
    [`${normQ('The compiled Python bytecode is stored in files which have their names ending with:')}::`]: ['.pyc', 'pyc'],
    [`${normQ('Assuming that the following three files: a.py, b.py, and c.py reside in the same directory, what will be the output produced after running the c.py file?')}::${normCode('# file a.py print("a", end=\'\') # file b.py import a print("b", end=\'\') # file c.py print("c", end=\'\') import a import b')}`]:
        ['cab'],
    [`${normQ('If the following line of code is at the end of a Python script named calculator.py, what will be the output when this script is run directly?')}::${normCode('print(__name__)')}`]:
        ['__main__'],
    [`${normQ('Consider the following Python import statement in a script:')}::${normCode('from data.processing.analysis.v1 import compute_metrics as cm')}`]:
        ['it imports the compute_metrics function from the specified module and binds it to the name cm'],
    [`${normQ('Given the following Python code segment:')}::${normCode('try: # Code that may raise an exception risky_call() except ValueError: print("Caught ValueError") except TypeError: print("Caught TypeError") except Exception: print("Caught a different exception")')}`]:
        ['the except branches are evaluated in order'],
    [`${normQ('Consider the following Python code:')}::${normCode('try: raise Exception("An error occurred") except ValueError as ve: print("ValueError:", str(ve)) except BaseException as be: print("BaseException:", str(be)) except: print("Caught some other exception")')}`]:
        ['BaseException: An error occurred'],
    [`${normQ('Review the Python code below:')}::${normCode('try: raise Exception("An error has occurred") except Exception: print("a") except: print("b") except BaseException: print("c")')}`]:
        ['The code will cause a SyntaxError exception', 'SyntaxError'],
    [`${normQ('Analyze the Python statement below:')}::${normCode("with open('data.csv', 'r') as file: for record in file:")}`]:
        ['it opens the file and iterates over its records'],
    [`${normQ('Examine the Python assertion statement provided:')}::${normCode('assert var > 0')}`]:
        ['will stop the program when var <= 0'],
    [`${normQ('Given the Python code segment below:')}::${normCode('x = r"\\\" print(len(x))')}`]: ['2'],
    [`${normQ('Given the Python code segment below:')}::${normCode('x = "\\// print(len(x))')}`]: ['3'],
    [`${normQ('Consider the Python code provided below:')}::${normCode("print(chr(ord('a') + 1))")}`]: ['b'],
    [`${normQ('Consider the following Python code snippet:')}::${normCode('print(int("1.0"))')}`]:
        ['raises a ValueError exception', 'ValueError'],
    [`${normQ('If the class constructor is declared in the following way:')}::${normCode('class Class: def __init__(self, val=0): pass')}`]:
        ['object = Class()', 'object = Class(1)'],
    [`${normQ('Consider the Python class CustomNumber and the subsequent operations performed on its instance:')}::${normCode('class CustomNumber: def __init__(self, value=1.5): self.value = value def increment(self, increase=2): self.value -= increase return self.value num_instance = CustomNumber() num_alias = num_instance num_alias.increment() print(num_instance.value)')}`]:
        ['-0.5'],
    [`${normQ('What is the expected output of the following code?')}::${normCode("class A: A = 1 def __init__(self): self.a = 0 print(hasattr(A, 'a'))")}`]:
        ['False'],
    [`${normQ('What will the following Python code output?')}::${normCode('class Parent: pass class Uncle(Parent): pass class Child(Uncle): pass class Cousin(Parent): pass print(issubclass(Child, Cousin), issubclass(Cousin, Uncle))')}`]:
        ['False False'],
    [`${normQ('What is the sys.stdout stream in Python typically associated with?')}::`]: ['the screen'],
    [`${normQ('What will be the result of running the following code?')}::${normCode('class A: def __init__(self, v): self.__a = v + 1 class B(A): def __init__(self, v): super().__init__(v) self.__a += 1 b = B(0) print(b._A__a)')}`]:
        ['2'],
    [`${normQ('What is the expected result of executing the following code?')}::${normCode("class A: def a(self): print('a') class B: def a(self): print('b') class C(B, A): def c(self): self.a() o = C() o.c()")}`]:
        ['b'],
    [`${normQ('What is the expected result of executing the following code?')}::${normCode('try: raise Exception(1, 2, 3, (4), "A",) except Exception as e: print(len(e.args))')}`]:
        ['5'],
    [`${normQ('What will be the output of the following code?')}::${normCode("def generate_pattern(n): def create_pattern(): return '**' * n return create_pattern pattern1 = generate_pattern(1) pattern2 = generate_pattern(2) print(pattern1() + pattern2())")}`]:
        ['******'],
    [`${normQ('If s is a stream opened in read mode, the following line of code do?')}::${normCode('q = s.read(-1)')}`]:
        ['reads the whole file'],
    [`${normQ('Assuming that the open() invocation has gone successfully, the following snippet:')}::${normCode("for x in open('file', 'rt'): print(x)")}`]:
        ['reads the file line by line'],
    [`${normQ('If you want to fill a byte array with data read in from a stream, which method can you use?')}::`]:
        ['readinto()'],
    [`${normQ("Which of the following commands would you use to check pip's version? (Select two answers)")}::`]:
        ['pip --version', 'pip3 --version'],
    [`${normQ('Which of the following commands can be used with pip to uninstall a specific Python package?')}::`]:
        ['pip uninstall package'],
    [`${normQ('Look at the following code:')}::${normCode('numbers = [0, 2, 7, 9, 10] # Insert line of code here. print(list(foo))')}`]:
        ['foo = map(lambda num: num ** 2, numbers)'],
    [`${normQ('Look at the following code:')}::${normCode('numbers = [i*i for i in range(5)] # Insert line of code here. print(foo)')}`]:
        ['foo = list(filter(lambda x: x % 2, numbers))'],
    [`${normQ('Look at the code below:')}::${normCode('import random # # Insert lines of code here. # print(a, b, c)')}`]:
        [
            'a = random.randint(0, 100)',
            'b = random.randrange(10, 100, 3)',
            'c = random.choice((0, 100, 3))',
        ],
    [`${normQ('What information can be read using the uname function provided by the os module? (Select two answers)')}::`]:
        ['Operating system name', 'Hardware identifier'],
    [`${normQ('If you want to calculate the date that is 30 days after the current date, which of the following code snippets would you use?')}::`]:
        ['date.today() + timedelta(days=30)'],
    [`${normQ('What is the expected result of executing the following Python code?')}::${normCode('import calendar calendar.setfirstweekday(calendar.FRIDAY) print(calendar.weekheader(2))')}`]:
        ['Fr Sa Su Mo Tu We Th'],
    [`${normQ('What is the expected result of executing the following code?')}::${normCode("class I: def __init__(self): self.s = 'abc' self.i = 0 def __iter__(self): return self def __next__(self): if self.i == len(self.s): raise StopIteration v = self.s[self.i] self.i += 1 return v for x in I(): print(x, end='')")}`]:
        ['abc'],
    [`${normQ('What is the expected result of the following code?')}::${normCode('from datetime import datetime datetime_1 = datetime(2019, 11, 27, 11, 27, 22) datetime_2 = datetime(2019, 11, 27, 0, 0, 0) print(datetime_1 - datetime_2)')}`]:
        ['11:27:22'],
    [`${normQ('What is the expected result of executing the following code?')}::${normCode('class A: def __init__(self): pass a = A(1) print(hasattr(a, \'A\'))')}`]:
        ['The code will raise an exception'],
};

const MANUAL_BY_SECTION = {
    'module-4': {
        [`${normQ('Select the true statements. (Select two answers)')}::`]: [
            'The lambda function can evaluate only one expression',
            'The lambda function can accept any number of arguments',
        ],
    },
};

function applyManualAnswers(items, section) {
    for (const item of items) {
        if (item.answers.length) continue;
        const key = itemKey(item);
        const picked = MANUAL_BY_SECTION[section]?.[key] || MANUAL_ANSWERS_GLOBAL[key];
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
out += sections.map((key) => `    '${key}': ${formatSection(newQuiz[key], '    ')}`).join(',\n');
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
