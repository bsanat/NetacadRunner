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
            question: "What is machine code?",
            code: null,
            answers: [
                "A low-level programming language consisting of binary digits/bits that the computer reads and understands",
            ],
        },
        {
            question: "What are the four fundamental elements that make a language?",
            code: null,
            answers: [
                "an alphabet",
                "a lexis",
                "grammar",
                "semantics",
            ],
        },
        {
            question: "What do you call a file containing a program written in a high-level programming language?",
            code: null,
            answers: [
                "A source file",
            ],
        },
        {
            question: "What is true about compilation? (Select two answers)",
            code: null,
            answers: [
                "The code is converted directly into machine code executable by the processor",
                "It tends to be faster than interpretation",
            ],
        },
        {
            question: "What is the best definition of a script?",
            code: null,
            answers: [
                "It’s a text file that contains which make up a Python program",
            ],
        },
        {
            question: "Select the true statements. (Select two answers)",
            code: null,
            answers: [
                "Python is a good choice for creating and executing tests for applications",
                "Python is free, open-source, and multiplatform",
            ],
        },
        {
            question: "What is CPython?",
            code: null,
            answers: [
                "It’s the default, reference implementation of Python, written in the C language",
            ],
        },
        {
            question: "What do you call a command-line interpreter which lets you interact with your OS and execute Python commands and scripts?",
            code: null,
            answers: [
                "A console",
            ],
        },
        {
            question: "What is the expected behavior of the following program?",
            code: "print(\"Hello!\")",
            answers: [
                "The program will output Hello! to the screen",
                "Hello!",
            ],
        },
        {
            question: "What is the expected behavior of the following program?",
            code: "prin(\"Goodbye!\")",
            answers: [
                "The program will generate an error message on the screen",
            ],
        }
    ],
    'module-2': [
        {
            question: "The digraph forces the print() function to:",
            code: null,
            answers: [
                "break the output line",
            ],
        },
        {
            question: "The meaning of the keyword parameter is determined by:",
            code: null,
            answers: [
                "the argument’s name specified along with its value",
            ],
        },
        {
            question: "The value twenty point twelve times ten raised to the power of eight should be written as:",
            code: null,
            answers: [
                "20.12E8",
            ],
        },
        {
            question: "The 0o prefix means that the number after it is denoted as:",
            code: null,
            answers: [
                "an octal number",
                "octal",
            ],
        },
        {
            question: "The ** operator:",
            code: null,
            answers: [
                "performs exponentiation",
            ],
        },
        {
            question: "The result of the following division:",
            code: "1 / 1",
            answers: [
                "is equal to 1.0",
                "1.0",
            ],
        },
        {
            question: "Which of the following statements are true? (Select two answers)",
            code: null,
            answers: [
                "The ** operator uses right-sided binding.",
                "**",
                "The right argument of the % operator cannot be zero.",
                "%",
            ],
        },
        {
            question: "Left-sided binding determines that the result of the following expression:",
            code: "1 // 2 * 3",
            answers: [
                "0",
            ],
        },
        {
            question: "Which of the following variable names are illegal? (Select two answers)",
            code: null,
            answers: [
                "and",
                "True",
            ],
        },
        {
            question: "The print() function can output values of:",
            code: null,
            answers: [
                "any number of arguments (including zero)",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "x = 1 y = 2 z = x x = y y = z print(x, y)",
            answers: [
                "2 1",
            ],
        },
        {
            question: "What is the output of the following snippet if the user enters two lines containing 2 and 4 respectively?",
            code: "x = input() y = input() print(x + y)",
            answers: [
                "24",
            ],
        },
        {
            question: "What is the output of the following snippet if the user enters two lines containing 2 and 4 respectively?",
            code: "x = int(input()) y = int(input()) x = x // y y = y // x print(y)",
            answers: [
                "the code will cause a runtime error",
            ],
        },
        {
            question: "What is the output of the following snippet if the user enters two lines containing 2 and 4 respectively?",
            code: "x = int(input()) y = int(input()) x = x / y y = y / x print(y)",
            answers: [
                "2.0",
                "2",
            ],
        },
        {
            question: "What is the output of the following snippet if the user enters two lines containing 11 and 4 respectively?",
            code: "x = int(input()) y = int(input()) x = x % y x = x % y y = y % x print(y)",
            answers: [
                "1",
            ],
        },
        {
            question: "What is the output of the following snippet if the user enters two lines containing 3 and 6 respectively?",
            code: "x = input() y = int(input()) print(x * y)",
            answers: [
                "333333",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "z = y = x = 1 print(x, y, z, sep='*')",
            answers: [
                "1*1*1",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "y = 2 + 3 * 5. print(Y)",
            answers: [
                "the snippet will cause an execution error",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "x = 1 / 2 + 3 // 3 + 4 ** 2 print(x)",
            answers: [
                "17.5",
            ],
        },
        {
            question: "What is the output of the following snippet if the user enters two lines containing 2 and 4 respectively?",
            code: "x = int(input()) y = int(input()) print(x + y)",
            answers: [
                "6",
            ],
        }
    ],
    'module-3': [
        {
            question: "An operator able to check whether two values are equal is coded as:",
            code: null,
            answers: [
                "==",
            ],
        },
        {
            question: "The value eventually assigned to x is equal to:",
            code: "x = 1 x = x == x",
            answers: [
                "True",
            ],
        },
        {
            question: "How many stars (*) will the following snippet send to the console?",
            code: "i = 0 while i <= 3 : i += 2 print(\"*\")",
            answers: [
                "two",
            ],
        },
        {
            question: "How many stars (*) will the following snippet send to the console?",
            code: "i = 0 while i <= 5 : i += 1 if i % 2 == 0: break print(\"*\")",
            answers: [
                "one",
            ],
        },
        {
            question: "How many hashes (#) will the following snippet send to the console?",
            code: "for i in range(1): print(\"#\") else: print(\"#\")",
            answers: [
                "two",
            ],
        },
        {
            question: "How many hashes (#) will the following snippet send to the console?",
            code: "var = 0 while var < 6: var += 1 if var % 2 == 0: continue print(\"#\")",
            answers: [
                "three",
            ],
        },
        {
            question: "How many hashes (#) will the following snippet send to the console?",
            code: "var = 1 while var < 10: print(\"#\") var = var << 1",
            answers: [
                "four",
            ],
        },
        {
            question: "What value will be assigned to the x variable?",
            code: "z = 10 y = 0 x = y < z and z > y or y > z and z < y",
            answers: [
                "True",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "a = 1 b = 0 c = a & b d = a | b e = a ^ b print(c + d + e)",
            answers: [
                "2",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "my_list = [3, 1, -2] print(my_list[my_list[-1]])",
            answers: [
                "1",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "my_list = [1, 2, 3, 4] print(my_list[-3:-2])",
            answers: [
                "[2]",
            ],
        },
        {
            question: "The second assignment:",
            code: "vals = [0, 1, 2] vals[0], vals[2] = vals[2], vals[0]",
            answers: [
                "reverses the list",
            ],
        },
        {
            question: "After execution of the following snippet, the sum of all vals elements will be equal to:",
            code: "vals = [0, 1, 2] vals.insert(0, 1) del vals[1]",
            answers: [
                "4",
            ],
        },
        {
            question: "Take a look at the snippet, and choose the true statements: (Select two answers)",
            code: "nums = [1, 2, 3] vals = nums del vals[1:2]",
            answers: [
                "nums and vals are of the same length",
                "nums",
                "vals",
                "nums and vals refer to the same list",
            ],
        },
        {
            question: "Which of the following sentences are true? (Select two answers)",
            code: "nums = [1, 2, 3] vals = nums[-1:-2]",
            answers: [
                "nums and vals are two different lists",
                "nums is longer than vals",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "my_list_1 = [1, 2, 3] my_list_2 = [] for v in my_list_1: my_list_2.insert(0, v) print(my_list_2)",
            answers: [
                "[3, 2, 1]",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "my_list = [1, 2, 3] for v in range(len(my_list)): my_list.insert(1, my_list[v]) print(my_list)",
            answers: [
                "[1, 1, 1, 1, 2, 3]",
            ],
        },
        {
            question: "How many elements does the my_list list contain?",
            code: "my_list = [i for i in range(-1, 2)]",
            answers: [
                "three",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "t = [[3-i for i in range (3)] for j in range (3)] s = 0 for i in range(3): s += t[i][i] print(s)",
            answers: [
                "6",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "my_list = [[0, 1, 2, 3] for i in range(2)] print(my_list[2][0])",
            answers: [
                "the snippet will cause a runtime error",
            ],
        }
    ],
    'module-4': [
        {
            question: "Which one of the following lines properly starts a parameterless function definition?",
            code: null,
            answers: [
                "def fun():",
            ],
        },
        {
            question: "A function defined in the following way: (Select two answers)",
            code: "def function(x=0): return x",
            answers: [
                "may be invoked with exactly one argument",
                "may be invoked without any argument",
            ],
        },
        {
            question: "A built-in function is a function which:",
            code: null,
            answers: [
                "comes with Python, ans is an integer part of Python",
            ],
        },
        {
            question: "The fact that tuples belong to sequence types means that:",
            code: null,
            answers: [
                "they can be indexed and sliced like lists",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "def f(x): if x == 0: return 0 return x + f(x - 1) print(f(3))",
            answers: [
                "6",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "def fun(x): x += 1 return x x = 2 x = fun(x + 1) print(x)",
            answers: [
                "4",
            ],
        },
        {
            question: "What code would you insert instead of the comment to obtain the expected output?",
            code: "dictionary = {} my_list = ['a', 'b', 'c', 'd'] for i in range(len(my_list) - 1): dictionary[my_list[i]] = (my_list[i], ) for i in sorted(dictionary.keys()): k = dictionary[i] # Insert your code here.",
            answers: [
                "print(k[0])",
            ],
        },
        {
            question: "The following snippet:",
            code: "def func(a, b): return a ** a print(func(2))",
            answers: [
                "is erroneous",
            ],
        },
        {
            question: "The following snippet:",
            code: "def func_1(a): return a ** a def func_2(a): return func_1(a) * func_1(a) print(func_2(2))",
            answers: [
                "will output 16",
                "16",
            ],
        },
        {
            question: "Which of the following lines properly starts a function using two parameters, both with zeroed default values?",
            code: null,
            answers: [
                "def fun (a=0, b=0) :",
            ],
        },
        {
            question: "Which of the following statements are true? (Select two answers)",
            code: null,
            answers: [
                "The None value can be assigned to variables",
                "The None value can be compared with variables",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "def fun(x): if x % 2 == 0: return 1 else: return print(fun(fun(2)) + 1)",
            answers: [
                "the code will cause a runtime error",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "def fun(x): global y y = x * x return y fun(2) print(y)",
            answers: [
                "4",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "def any(): print(var + 1, end='') var = 1 any() print(var)",
            answers: [
                "the code will cause a runtime error",
            ],
        },
        {
            question: "Assuming that my_tuple is a correctly created tuple, the fact that tuples are immutable means that the following instruction:",
            code: "my_tuple[1] = my_tuple[1] + my_tuple[0]",
            answers: [
                "is illegal",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "my_list = ['Mary', 'had', 'a', 'little', 'lamb'] def my_list(my_list): del my_list[3] my_list[3] = 'ram' print(my_list(my_list))",
            answers: [
                "no output, the snippet is erroneous",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "def fun(x, y, z): return x + 2 * y + 3 * z print(fun(0, z=1, y=3))",
            answers: [
                "9",
            ],
        },
        {
            question: "What is the output of the following snippet?",
            code: "def fun(inp=2, out=3): return inp * out print(fun(out=2))",
            answers: [
                "4",
            ],
        },
        {
            question: "What is the output of the following code?",
            code: "dictionary = {'one': 'two', 'three': 'one', 'two': 'three'} v = dictionary['one'] for k in range(len(dictionary)): v = dictionary[v] print(v)",
            answers: [
                "two",
            ],
        },
        {
            question: "What is the output of the following code?",
            code: "tup = (1, 2, 4, 8) tup = tup[1:-1] tup = tup[0] print(tup)",
            answers: [
                "2",
            ],
        },
        {
            question: "Select the true statements about the try-except block in relation to the following example. (Select two answers.)",
            code: "try: # Some code is here... except: # Some code is here...",
            answers: [
                "if you suspect that a snippet may raise an exception, you should place it in the try block",
                "The code that follows the except statement will be executed if the code in the try clause runs into an error.",
            ],
        },
        {
            question: "What is the output of the following code?",
            code: "try: value = input(\"Enter a value: \") print(value/value) except ValueError: print(\"Bad input...\") except ZeroDivisionError: print(\"Very bad input...\") except TypeError: print(\"Very very bad input...\") except: print(\"Booo!\")",
            answers: [
                "Very very bad input...",
            ],
        }
    ]
};

const FINAL_EXAM_DB = [
    {
        question: "Consider the following Python code snippet. What will the contents of my_numbers be after execution?",
        code: "my_numbers = [10, 20, 30, 40, 50] for i in range(4): my_numbers.insert(i, my_numbers[-1]) print(my_numbers)",
        answers: [
            "[10, 20, 30, 40, 50, 50, 50, 50]",
        ],
    },
    {
        question: "In the context of a function call in Python, what determines the meaning of a positional argument?",
        code: null,
        answers: [
            "its position within the argument list",
        ],
    },
    {
        question: "Analyze the following Python code snippet:",
        code: "alpha = [4, 8, 15, 16, 23, 42] beta = alpha[:] beta[2] = 99",
        answers: [
            "alpha and beta are separate lists; the alpha list remains unchanged after the modification.",
            "The alpha list is of the same length as the beta list, but their contents are not identical.",
        ],
    },
    {
        question: "An operator able to check whether two values are not equal is coded as:",
        code: null,
        answers: [
            "!=",
        ],
    },
    {
        question: "Given the Python code segment below:",
        code: "def compute_square(x): return x * x def compute_quad(x): return compute_square(x) * compute_square(None) print(compute_quad(4))",
        answers: [
            "The code will cause a runtime error."
        ],
    },
    {
        question: "The result of the following division:",
        code: "1 // 2",
        answers: [
            "is equal to 0",
            "0",
        ],
    },
    {
        question: "Consider the Python function defined below:",
        code: "def raise_power(base, exponent): return base ** exponent print(raise_power(exponent=3, 2))",
        answers: [
            "The code is erroneous and will not execute."
        ],
    },
    {
        question: "What value will be assigned to the x variable?",
        code: "z = 0 y = 10 x = y < z and z > y or y < z and z < y",
        answers: [
            "False",
        ],
    },
    {
        question: "Review the following identifiers and select the ones that are reserved keywords in Python and would cause a SyntaxError if used as variable names. (Select two answers)",
        code: null,
        answers: [
            "class",
            "continue",
        ],
    },
    {
        question: "What is the expected output of the following Python code?",
        code: "my_values = [3 * i for i in range(5)] def modify_list(values): del values[values[2] // 3] return values print(modify_list(my_values))",
        answers: [
            "[0, 3, 9, 12]",
        ],
    },
    {
        question: "What is the output of the following piece of code?",
        code: "x = 1 y = 2 x, y, z = x, x, y z, y, z = x, y, z print(x, y, z)",
        answers: [
            "1 1 2",
            "1 1 2",
        ],
    },
    {
        question: "What will be the output of the following snippet?",
        code: "a = 1 b = 0 a = a ^ b b = a ^ b a = a ^ b print(a, b)",
        answers: [
            "0 1",
        ],
    },
    {
        question: "What is the output of the following Python code snippet?",
        code: "def custom_function(value): if value % 3 == 0: return 1 else: return 2 print(custom_function(custom_function(4)))",
        answers: [
            "2",
        ],
    },
    {
        question: "Consider the following Python code snippet and determine which statement is correct:",
        code: "inventory = ['apple', 'banana', 'cherry'] backup_inventory = inventory del backup_inventory[:]",
        answers: [
            "Both inventory and backup_inventory contain the same number of items."
        ],
    },
    {
        question: "Consider the following Python code, where only integer inputs are allowed:",
        code: "first_integer = int(input(\"Enter an integer: \")) second_integer = int(input(\"Enter another integer: \")) first_integer = first_integer % second_integer first_integer = first_integer % second_integer second_integer = second_integer % first_integer print(second_integer)",
        answers: [
            "The initial value of first_integer cannot be a multiple of second_integer."
        ],
    },
    {
        question: "Assuming the user enters 8 on the first line and 5 on the second line, what is the output of the following Python code?",
        code: "first_input = input(\"Enter first number: \") second_input = input(\"Enter second number: \") print(second_input + first_input)",
        answers: [
            "58",
        ],
    },
    {
        question: "What is the output of the following piece of code?",
        code: "print(\"a\", \"b\", \"c\", sep=\"sep\")",
        answers: [
            "asepbsepc",
        ],
    },
    {
        question: "What is the output of the following piece of code?",
        code: "x = 1 // 5 + 1 / 5 print(x)",
        answers: [
            "0.2",
        ],
    },
    {
        question: "What is the result of trying to execute the following code snippet if sample_tuple is a tuple that has been previously defined with at least two elements?",
        code: "sample_tuple[0] = 5 print(sample_tuple)",
        answers: [
            "the code will raise a TypeError exception",
            "TypeError",
        ],
    },
    {
        question: "What is the output of the following piece of code if the user enters two lines containing 2 and 4 respectively?",
        code: "x = float(input()) y = float(input()) print(y ** (1 / x))",
        answers: [
            "2.0",
        ],
    },
    {
        question: "What is the expected output of the following code snippet?",
        code: "dictionary = {'alpha': 'beta', 'gamma': 'alpha', 'beta': 'gamma'} value = dictionary['gamma'] for key in range(len(dictionary)): value = dictionary[value] print(value)",
        answers: [
            "beta",
        ],
    },
    {
        question: "How many elements are in the values list?",
        code: "values = [i for i in range(-1, -3, -1)]",
        answers: [
            "two",
            "2",
        ],
    },
    {
        question: "Which of the following function calls correctly invoke the function defined below? (Select two answers)",
        code: "def custom_function(x, y, z=0): # Body of the function.",
        answers: [
            "custom_function(y=2, x=1)",
            "custom_function(4, 5, 6)",
        ],
    },
    {
        question: "What is the output of the following snippet?",
        code: "def fun(x, y): if x == y: return x else: return fun(x, y-1) print(fun(0, 3))",
        answers: [
            "0",
        ],
    },
    {
        question: "How many stars (*) will the following snippet send to the console?",
        code: "i = 0 while i < i + 2 : i += 1 print(\"*\") else: print(\"*\")",
        answers: [
            "the snippet will enter an infinite loop, printing one star per line",
        ],
    },
    {
        question: "What is the output of the following Python code snippet?",
        code: "my_tuple = (10, 20, 30, 40, 50) my_tuple = my_tuple[-3:-1] my_tuple = my_tuple[-1] print(my_tuple)",
        answers: [
            "30",
        ],
    },
    {
        question: "Given the following Python code:",
        code: "my_dict = {\"apple\": 1, \"banana\": 2, \"cherry\": 3}",
        answers: [
            "for value in my_dict.values(): print(value)",
        ],
    },
    {
        question: "What is the output of the following snippet?",
        code: "dct = {} dct['1'] = (1, 2) dct['2'] = (2, 1) for x in dct.keys(): print(dct[x][1], end=\"\")",
        answers: [
            "21",
        ],
    },
    {
        question: "What is the output of the following snippet?",
        code: "def fun(inp=2, out=3): return inp * out print(fun(out=2))",
        answers: [
            "4",
        ],
    },
    {
        question: "How many times will the # symbol be printed to the console by the following code snippet?",
        code: "matrix = [[x for x in range(3)] for y in range(3)] count = 0 for row in matrix: for element in row: if element % 2 != 0: count += 1 print(count)",
        answers: [
            "zero",
            "0",
        ],
    },
    {
        question: "What is the output of the following code if the user enters a 0?",
        code: "try: value = input(\"Enter a value: \") print(int(value)/len(value)) except ValueError: print(\"Bad input...\") except ZeroDivisionError: print(\"Very bad input...\") except TypeError: print(\"Very very bad input...\") except: print(\"Booo!\")",
        answers: [
            "0.0",
        ],
    },
    {
        question: "What is the expected behavior of the following Python program?",
        code: "try: print(10 / 0) break except ZeroDivisionError:: print(\"Zero division error occurred...\") except (ValueError, TypeError): print(\"Value or type error occurred..\") except: print(\"Unknown error occurred...\")",
        answers: [
            "The program will cause a SyntaxError exception",
            "SyntaxError",
        ],
    },
    {
        question: "What is the expected behavior of the following program?",
        code: "foo = (1, 2, 3) foo.index(0)",
        answers: [
            "The program will cause a ValueError exception.",
            "ValueError",
            "exception.",
        ],
    },
    {
        question: "Which of the following snippets shows the correct way of handling multiple exceptions in a single except clause?",
        code: "# A: except (TypeError, ValueError, ZeroDivisionError): # Some code. # B: except TypeError, ValueError, ZeroDivisionError: # Some code. # C: except: (TypeError, ValueError, ZeroDivisionError) # Some code. # D: except: TypeError, ValueError, ZeroDivisionError # Some code. # E: except (TypeError, ValueError, ZeroDivisionError) # Some code. # F: except TypeError, ValueError, ZeroDivisionError # Some code.",
        answers: [
            "A only"
        ],
    },
    {
        question: "What will happen when you attempt to run the following code?",
        code: "print(3 + \"5\")",
        answers: [
            "The code will raise a TypeError exception",
            "TypeError",
        ],
    }
];
