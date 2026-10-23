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

const RAW_DB = {};

const QUIZ_DB = {
    'module-1': [
        {
            question: "Knowing that a function named fun() resides in a module named mod, choose the correct way to import it.",
            code: null,
            answers: [
                "from mod import fun",
            ],
        },
        {
            question: "Knowing that a function named fun() resides in a module named mod, and it has been imported using the following line: import mod Choose the way it can be invoked in your code.",
            code: null,
            answers: [
                "mod.fun()",
            ],
        },
        {
            question: "A function which returns a list of all entities available in a module is called:",
            code: null,
            answers: [
                "dir()",
            ],
        },
        {
            question: "A pyc file contains:",
            code: null,
            answers: [
                "compiled Python code",
            ],
        },
        {
            question: "When a module is imported, its contents:",
            code: null,
            answers: [
                "are executed once (implicitly)",
            ],
        },
        {
            question: "A predefined Python variable that stores the current module name is called:",
            code: null,
            answers: [
                "__name__",
            ],
        },
        {
            question: "The following statement: from a.b import c causes the import of:",
            code: null,
            answers: [
                "entity c from module b from package a",
            ],
        },
        {
            question: "What is the expected value assigned to the result variable after the following code is executed?",
            code: "import math result = math.e != math.pow(2, 4) print(int(result))",
            answers: [
                "1",
            ],
        },
        {
            question: "What is the expected output of the following code?",
            code: "from random import randint for i in range(2): print(randint(1, 2), end='')",
            answers: [
                "11, 12, 21, or 22",
            ],
        },
        {
            question: "Choose the true statements. (Select two answers)",
            code: null,
            answers: [
                "The version function from the platform module returns a string with your OS version",
                "version",
                "platform",
                "The system function from the platform module returns a string with your OS name",
                "system",
            ],
        },
        {
            question: "During the first import of a module, Python deploys the pyc files in the directory called:",
            code: null,
            answers: [
                "__pycache__",
            ],
        },
        {
            question: "The digraph written as #! is used to:",
            code: null,
            answers: [
                "tell a Unix or Unix-like OS how to execute the contents of a Python file",
            ],
        },
        {
            question: "A list of package dependencies can be obtained from pip using a command named:",
            code: null,
            answers: [
                "show",
            ],
        },
        {
            question: "The pip list command presents a list of:",
            code: null,
            answers: [
                "locally installed package",
            ],
        },
        {
            question: "What is true about the pip search command? (Select two answers)",
            code: null,
            answers: [
                "it needs a working internet connection to work.",
                "it searches through all PyPI packages",
            ],
        },
        {
            question: "What is true about the pip install command? (Select two answers)",
            code: null,
            answers: [
                "it allows the user to install a specific version of the package",
                "it installs a package per user only when the --user option is specified",
                "--user",
            ],
        },
        {
            question: "What is true about updating already installed Python packages?",
            code: null,
            answers: [
                "it’s performed by the install command accompanied by the -U option",
                "install",
                "command accompanied by the -U option",
                "-U",
                "option",
            ],
        },
        {
            question: "Which command can you use pip to remove an installed package?",
            code: null,
            answers: [
                "pip uninstall package",
            ],
        }
    ],
    'module-2': [
        {
            question: "Entering the try: block implies that:",
            code: null,
            answers: [
                "some of the instructions from this block may not be executed",
            ],
        },
        {
            question: "The unnamed except: block:",
            code: null,
            answers: [
                "must be the last one",
            ],
        },
        {
            question: "The top-most Python exception is called:",
            code: null,
            answers: [
                "BaseException",
            ],
        },
        {
            question: "The following statement:",
            code: "assert var == 0",
            answers: [
                "will stop the program when var != 0",
            ],
        },
        {
            question: "What is the expected output of the following code?",
            code: "try: print(\"5\"/0) except ArithmeticError: print(\"arith\") except ZeroDivisionError: print(\"zero\") except: print(\"some\")",
            answers: [
                "some",
            ],
        },
        {
            question: "Which of the following are examples of built-in concrete Python exceptions? (Select two answers)",
            code: null,
            answers: [
                "IndexError",
                "ImportError",
            ],
        },
        {
            question: "ASCII is:",
            code: null,
            answers: [
                "short for American Standard Code for Information Interchange",
            ],
        },
        {
            question: "UTF-8 is:",
            code: null,
            answers: [
                "a form of encoding Unicode code points",
            ],
        },
        {
            question: "UNICODE is a standard:",
            code: null,
            answers: [
                "like ASCII, but much more expansive",
            ],
        },
        {
            question: "The following code:",
            code: "x = '\\'' print(len(x))",
            answers: [
                "1",
            ],
        },
        {
            question: "The following code:",
            code: "print(ord('c') - ord('a'))",
            answers: [
                "2",
            ],
        },
        {
            question: "The following code:",
            code: "print(chr(ord('z') - 2))",
            answers: [
                "x",
            ],
        },
        {
            question: "The following code:",
            code: "print(3 * 'abc' + 'xyz')",
            answers: [
                "abcabcabcxyz",
            ],
        },
        {
            question: "The following code:",
            code: "print(\"Mike\" > \"Mikey\")",
            answers: [
                "False",
            ],
        },
        {
            question: "The following code:",
            code: "print(float(\"1, 3\"))",
            answers: [
                "raises a ValueError exception",
                "ValueError",
            ],
        }
    ],
    'module-3': [
        {
            question: "A data structure described as LIFO is actually a:",
            code: null,
            answers: [
                "stack",
            ],
        },
        {
            question: "If the class's constructor is declared as below, which one of the assignments is valid?",
            code: "class Class: def __init__(self): pass",
            answers: [
                "object = Class()",
            ],
        },
        {
            question: "If there is a superclass named A and a subclass named B, which one of the presented invocations should you put instead of the comment?",
            code: "class A: def __init__(self): self.a = 1 class B(A): def __init__(self): # Put selected line here. self.b = 2",
            answers: [
                "A.__init__(self)",
            ],
        },
        {
            question: "What will be the effect of running the following code?",
            code: "class A: def __init__(self,v): self.__a = v + 1 a = A(0) print(a.__a)",
            answers: [
                "The code will raise an AttributeError exception",
                "AttributeError",
            ],
        },
        {
            question: "What will be the output of the following code?",
            code: "class A: def __init__(self,v = 1): self.v = v def set(self,v): self.v = v return v a = A() print(a.set(a.v + 1))",
            answers: [
                "2",
            ],
        },
        {
            question: "What will be the output of the following code?",
            code: "class A: X = 0 def __init__(self,v = 0): self.Y = v A.X += v a = A() b = A(1) c = A(2) print(c.X)",
            answers: [
                "3",
            ],
        },
        {
            question: "What will be the output of the following code?",
            code: "class A: A = 1 print(hasattr(A,'A'))",
            answers: [
                "True",
            ],
        },
        {
            question: "What will be the result of executing the following code?",
            code: "class A: def __init__(self): pass a = A(1) print(hasattr(a,'A'))",
            answers: [
                "it will raise an exception",
            ],
        },
        {
            question: "What will be the result of executing the following code?",
            code: "class A: def __str__(self): return 'a' class B(A): def __str__(self): return 'b' class C(B): pass o = C() print(o)",
            answers: [
                "it will print b",
                "b",
            ],
        },
        {
            question: "What will be the result of executing the following code?",
            code: "class A: pass class B(A): pass class C(B): pass print(issubclass(C,A))",
            answers: [
                "it will print True",
                "True",
            ],
        },
        {
            question: "What will be the result of executing the following code?",
            code: "class A: def a(self): print('a') class B: def a(self): print('b') class C(B,A): def c(self): self.a() o = C() o.c()",
            answers: [
                "it will print b",
                "b",
            ],
        },
        {
            question: "What will be the result of executing the following code?",
            code: "class A: def __str__(self): return 'a' class B: def __str__(self): return 'b' class C(A, B): pass o = C() print(o)",
            answers: [
                "it will print a",
                "a",
            ],
        },
        {
            question: "What will be the result of executing the following code?",
            code: "class A: v = 2 class B(A): v = 1 class C(B): pass o = C() print(o.v)",
            answers: [
                "it will print 1",
                "1",
            ],
        },
        {
            question: "What will be the result of executing the following code?",
            code: "def f(x): try: x = x / x except: print(\"a\",end='') else: print(\"b\",end='') finally: print(\"c\",end='') f(1) f(0)",
            answers: [
                "it will print bcac",
                "bcac",
            ],
        },
        {
            question: "What will be the result of executing the following code?",
            code: "try: raise Exception(1,2,3) except Exception as e: print(len(e.args))",
            answers: [
                "it will print 3",
                "3",
            ],
        },
        {
            question: "What will be the result of executing the following code?",
            code: "class Ex(Exception): def __init__(self, msg): Exception.__init__(self, msg + msg) self.args = (msg,) try: raise Ex('ex') except Ex as e: print(e) except Exception as e: print(e)",
            answers: [
                "it will print ex",
                "ex",
            ],
        },
        {
            question: "What will be the result of executing the following code?",
            code: "class I: def __init__(self): self.s = 'abc' self.i = 0 def __iter__(self): return self def __next__(self): if self.i == len(self.s): raise StopIteration v = self.s[self.i] self.i += 1 return v for x in I(): print(x,end='')",
            answers: [
                "it will print abc",
                "abc",
            ],
        }
    ],
    'module-4': [
        {
            question: "What keyword would you use to define an anonymous function?",
            code: null,
            answers: [
                "lambda",
            ],
        },
        {
            question: "Select the true statements. (Select two answers)",
            code: null,
            answers: [
                "The lambda function can evaluate only one expressrion",
                "The lambda function can accept any number of arguments",
            ],
        },
        {
            question: "Look at the code below:",
            code: "my_list = [1, 2, 3] # Insert line of code here. print(foo)",
            answers: [
                "foo = tuple(map(lambda x: x**x, my_list))",
            ],
        },
        {
            question: "Look at the code below:",
            code: "my_tuple = (0, 1, 2, 3, 4, 5, 6) # Insert line of code here. print(foo)",
            answers: [
                "foo = tuple(filter(lambda x: x > 1, my_tuple))",
            ],
        },
        {
            question: "What is the expected result of executing the following code?",
            code: "def I(): s = 'abcdef' for c in s[::2]: yield c for x in I(): print(x, end='')",
            answers: [
                "It will print ace",
                "ace",
            ],
        },
        {
            question: "What is the expected result of executing the following code?",
            code: "def fun(n): s = '+' for i in range(n): s += s yield s for x in fun(2): print(x, end='');",
            answers: [
                "It will print ++++++",
                "++++++",
            ],
        },
        {
            question: "What is the expected result of executing the following code?",
            code: "def o(p): def q(): return '*' * p return q r = o(1) s = o(2) print(r() + s())",
            answers: [
                "It will print ***",
                "***",
            ],
        },
        {
            question: "Which of the following open modes allow you to perform read operations? (Select two answers)",
            code: null,
            answers: [
                "r",
                "r+",
            ],
        },
        {
            question: "What is the meaning of the value represented by errno.EEXIST ?",
            code: null,
            answers: [
                "File exists",
            ],
        },
        {
            question: "What is the expected result of the following code?",
            code: "b = bytearray(3) print(b)",
            answers: [
                "bytearray(b'\\x00\\x00\\x00')",
            ],
        },
        {
            question: "What is the expected result of the following code?",
            code: "import os os.mkdir('pictures') os.chdir('pictures') os.mkdir('thumbnails') os.chdir('thumbnails') os.mkdir('tmp') os.chdir('../') print(os.getcwd())",
            answers: [
                "It prints the path to the pictures directory"
            ],
        },
        {
            question: "What is the expected result of the following code?",
            code: "import os os.mkdir('thumbnails') os.chdir('thumbnails') sizes = ['small', 'medium', 'large'] for size in sizes: os.mkdir(size) print(os.listdir())",
            answers: [
                "['large', 'small', 'medium']",
            ],
        },
        {
            question: "What is the expected result of the following code?",
            code: "from datetime import date date_1 = date(1992, 1, 16) date_2 = date(1991, 2, 5) print(date_1 - date_2)",
            answers: [
                "345 days, 0:00:00",
            ],
        },
        {
            question: "What is the expected result of the following code?",
            code: "from datetime import datetime datetime = datetime(2019, 11, 27, 11, 27, 22) print(datetime.strftime('%y/%B/%d %H:%M:%S'))",
            answers: [
                "19/November/27 11:27:22",
            ],
        },
        {
            question: "Which program will produce the following output:",
            code: "Mo Tu We Th Fr Sa Su",
            answers: [
                "import calendar print(calendar.weekheader(2))",
            ],
        },
        {
            question: "What is the expected result of the following code?",
            code: "import calendar c = calendar.Calendar() for weekday in c.iterweekdays(): print(weekday, end=\" \")",
            answers: [
                "0 1 2 3 4 5 6",
            ],
        }
    ]
};

const FINAL_EXAM_DB = [
    {
        question: "Knowing that a function named fun() resides in a module named mod, and was imported using the following statement:",
        code: "from mod import fun",
        answers: [
            "fun()",
        ],
    },
    {
        question: "Given the Python code snippet below:",
        code: "import random print(len(dir(random)))",
        answers: [
            "a positive integer",
        ],
    },
    {
        question: "The compiled Python bytecode is stored in files which have their names ending with:",
        code: null,
        answers: [
            ".pyc",
            "pyc",
        ],
    },
    {
        question: "Assuming that the following three files: a.py, b.py, and c.py reside in the same directory, what will be the output produced after running the c.py file?",
        code: "# file a.py print(\"a\", end='') # file b.py import a print(\"b\", end='') # file c.py print(\"c\", end='') import a import b",
        answers: [
            "cab",
        ],
    },
    {
        question: "If the following line of code is at the end of a Python script named calculator.py, what will be the output when this script is run directly?",
        code: "print(__name__)",
        answers: [
            "__main__",
        ],
    },
    {
        question: "Consider the following Python import statement in a script:",
        code: "from data.processing.analysis.v1 import compute_metrics as cm",
        answers: [
            "it imports the compute_metrics function from the specified module and binds it to the name cm",
        ],
    },
    {
        question: "Given the following Python code segment:",
        code: "try: # Code that may raise an exception risky_call() except ValueError: print(\"Caught ValueError\") except TypeError: print(\"Caught TypeError\") except Exception: print(\"Caught a different exception\")",
        answers: [
            "the except branches are evaluated in order",
        ],
    },
    {
        question: "Consider the following Python code:",
        code: "try: raise Exception(\"An error occurred\") except ValueError as ve: print(\"ValueError:\", str(ve)) except BaseException as be: print(\"BaseException:\", str(be)) except: print(\"Caught some other exception\")",
        answers: [
            "BaseException: An error occurred",
        ],
    },
    {
        question: "Review the Python code below:",
        code: "try: raise Exception(\"An error has occurred\") except Exception: print(\"a\") except: print(\"b\") except BaseException: print(\"c\")",
        answers: [
            "The code will cause a SyntaxError exception",
            "SyntaxError",
        ],
    },
    {
        question: "Analyze the Python statement below:",
        code: "with open('data.csv', 'r') as file: for record in file:",
        answers: [
            "The code is valid because the open function with 'r' mode returns an iterable file object.",
        ],
    },
    {
        question: "Examine the Python assertion statement provided:",
        code: "assert var > 0",
        answers: [
            "It will raise an AssertionError if var is less than or equal to 0.",
        ],
    },
    {
        question: "Given the Python code segment below:",
        code: "x = r\"\\\" print(len(x))",
        answers: [
            "The code will cause a syntax error due to the unescaped sequence at the end of the raw string.",
        ],
    },
    {
        question: "Given the Python code segment below:",
        code: "x = \"\\// print(len(x))",
        answers: [
            "The code will cause a syntax error due to an improper sequence of escape characters.",
        ],
    },
    {
        question: "Consider the Python code provided below:",
        code: "print(chr(ord('a') + 1))",
        answers: [
            "The code will print \"b\" as it takes the Unicode code point of 'a', adds 1, and converts it back to a character.",
        ],
    },
    {
        question: "Consider the following Python code snippet:",
        code: "print(int(\"1.0\"))",
        answers: [
            "raises a ValueError exception",
            "ValueError",
        ],
    },
    {
        question: "If the class constructor is declared in the following way:",
        code: "class Class: def __init__(self, val=0): pass",
        answers: [
            "object = Class()",
            "object = Class(1)",
        ],
    },
    {
        question: "Consider the Python class CustomNumber and the subsequent operations performed on its instance:",
        code: "class CustomNumber: def __init__(self, value=1.5): self.value = value def increment(self, increase=2): self.value -= increase return self.value num_instance = CustomNumber() num_alias = num_instance num_alias.increment() print(num_instance.value)",
        answers: [
            "-0.5",
        ],
    },
    {
        question: "What is the expected output of the following code?",
        code: "class A: A = 1 def __init__(self): self.a = 0 print(hasattr(A, 'a'))",
        answers: [
            "False",
        ],
    },
    {
        question: "What will the following Python code output?",
        code: "class Parent: pass class Uncle(Parent): pass class Child(Uncle): pass class Cousin(Parent): pass print(issubclass(Child, Cousin), issubclass(Cousin, Uncle))",
        answers: [
            "False False",
        ],
    },
    {
        question: "What is the sys.stdout stream in Python typically associated with?",
        code: null,
        answers: [
            "the screen",
        ],
    },
    {
        question: "What will be the result of running the following code?",
        code: "class A: def __init__(self, v): self.__a = v + 1 class B(A): def __init__(self, v): super().__init__(v) self.__a += 1 b = B(0) print(b._A__a)",
        answers: [
            "2",
        ],
    },
    {
        question: "What is the expected result of executing the following code?",
        code: "class A: def __init__(self): pass a = A(1) print(hasattr(a, 'A'))",
        answers: [
            "The code will raise an exception",
        ],
    },
    {
        question: "What is the expected result of executing the following code?",
        code: "class A: def a(self): print('a') class B: def a(self): print('b') class C(B, A): def c(self): self.a() o = C() o.c()",
        answers: [
            "The code will print b",
        ],
    },
    {
        question: "What is the expected result of executing the following code?",
        code: "try: raise Exception(1, 2, 3, (4), \"A\",) except Exception as e: print(len(e.args))",
        answers: [
            "5",
        ],
    },
    {
        question: "What is the expected result of executing the following code?",
        code: "def my_fun(n): s = '+' for i in range(n): s += s yield s for x in my_fun(2): print(x, end='')",
        answers: [
            "The code will print ++++++",
            "++++++",
        ],
    },
    {
        question: "What is the expected result of executing the following code?",
        code: "class I: def __init__(self): self.s = 'abc' self.i = 0 def __iter__(self): return self def __next__(self): if self.i == len(self.s): raise StopIteration v = self.s[self.i] self.i += 1 return v for x in I(): print(x, end='')",
        answers: [
            "abc",
        ],
    },
    {
        question: "What will be the output of the following code?",
        code: "def generate_pattern(n): def create_pattern(): return '**' * n return create_pattern pattern1 = generate_pattern(1) pattern2 = generate_pattern(2) print(pattern1() + pattern2())",
        answers: [
            "******",
        ],
    },
    {
        question: "If s is a stream opened in read mode, the following line of code do?",
        code: "q = s.read(-1)",
        answers: [
            "It reads the entire contents of the stream s.",
        ],
    },
    {
        question: "Assuming that the open() invocation has gone successfully, the following snippet:",
        code: "for x in open('file', 'rt'): print(x)",
        answers: [
            "read the file line by line",
        ],
    },
    {
        question: "If you want to fill a byte array with data read in from a stream, which method can you use?",
        code: null,
        answers: [
            "readinto()",
        ],
    },
    {
        question: "Which of the following commands would you use to check pip's version? (Select two answers)",
        code: null,
        answers: [
            "pip --version",
            "pip3 --version",
        ],
    },
    {
        question: "Which of the following commands can be used with pip to uninstall a specific Python package?",
        code: null,
        answers: [
            "pip uninstall package",
        ],
    },
    {
        question: "Look at the following code:",
        code: "numbers = [0, 2, 7, 9, 10] # Insert line of code here. print(list(foo))",
        answers: [
            "foo = map(lambda num: num ** 2, numbers)",
        ],
    },
    {
        question: "Look at the following code:",
        code: "numbers = [i*i for i in range(5)] # Insert line of code here. print(foo)",
        answers: [
            "foo = list(filter(lambda x: x % 2, numbers))",
        ],
    },
    {
        question: "Look at the code below:",
        code: "import random # # Insert lines of code here. # print(a, b, c)",
        answers: [
            "a = random.randint(0, 100)",
            "b = random.randrange(10, 100, 3)",
            "c = random.choice((0, 100, 3))",
        ],
    },
    {
        question: "What is the expected result of the following code?",
        code: "import os os.mkdir('pictures') os.chdir('pictures') print(os.getcwd())",
        answers: [
            "The code will print the path to the created directory",
        ],
    },
    {
        question: "What information can be read using the uname function provided by the os module? (Select two answers)",
        code: null,
        answers: [
            "Operating system name",
            "Hardware identifier",
        ],
    },
    {
        question: "What is the expected result of the following code?",
        code: "from datetime import datetime datetime_1 = datetime(2019, 11, 27, 11, 27, 22) datetime_2 = datetime(2019, 11, 27, 0, 0, 0) print(datetime_1 - datetime_2)",
        answers: [
            "11:27:22",
        ],
    },
    {
        question: "If you want to calculate the date that is 30 days after the current date, which of the following code snippets would you use?",
        code: null,
        answers: [
            "current_date + timedelta(days=30)",
        ],
    },
    {
        question: "What is the expected result of executing the following Python code?",
        code: "import calendar calendar.setfirstweekday(calendar.FRIDAY) print(calendar.weekheader(2))",
        answers: [
            "It will print the names of all the days of the week in a shorter format.",
        ],
    }
];
