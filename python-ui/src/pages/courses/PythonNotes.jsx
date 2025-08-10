import React from 'react';
import single from '../../assets/Single-Inheritance.jpg';
import multilevel from '../../assets/Multilevel-Inheritance.jpg';
import hierarchical from '../../assets/Hierarchical-Inheritance-in-Java.jpg';
import multiple from '../../assets/multiple_inheritance.png';
import hybrid from '../../assets/Hybrid-Inheritance.jpg';

function PythonNotes() {
  return (
    <div className="bg-light">
      <style>
        {`
          pre {
            background-color: #1f2937;
            color: #e5e7eb;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
          }
          code {
            font-family: 'Courier New', monospace;
          }
          .sidebar {
            position: sticky;
            top: 1rem;
            height: calc(100vh - 2rem);
            overflow-y: auto;
          }
          @media (max-width: 991.98px) {
            .sidebar {
              position: static;
              height: auto;
              margin-bottom: 20px;
              overflow-y: visible;
            }
          }
          .nav-link {
            color: #495057;
          }
          .nav-link:hover {
            color: #0d6efd;
          }
          .property-card {
            background-color: #f8f9fa;
            border-left: 4px solid #0d6efd;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 4px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1rem;
          }
          th, td {
            border: 1px solid #dee2e6;
            padding: 0.75rem;
            text-align: left;
          }
          th {
            background-color: #f8f9fa;
          }
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-py"></i> Python Notes</h1>
          <p className="lead">Your Comprehensive Guide to Python Programming</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#setup"><i className="bi bi-download"></i> Environment Setup</a>
              <a className="nav-link" href="#syntax"><i className="bi bi-file-earmark-code"></i> Basic Syntax</a>
              <a className="nav-link" href="#variables"><i className="bi bi-code-square"></i> Variables</a>
              <a className="nav-link" href="#datatypes"><i className="bi bi-list-check"></i> Data Types</a>
              <a className="nav-link" href="#operators"><i className="bi bi-calculator"></i> Operators</a>
              <a className="nav-link" href="#decision"><i className="bi bi-diagram-2"></i> Decision Making</a>
              <a className="nav-link" href="#loops"><i className="bi bi-arrow-repeat"></i> Loops</a>
              <a className="nav-link" href="#built-in-datatypes"><i className="bi bi-collection"></i> Built-in Datatypes</a>
              <a className="nav-link" href="#list"><i className="bi bi-collection"></i> List</a>
              <a className="nav-link" href="#tuple"><i className="bi bi-collection"></i> Tuple</a>
              <a className="nav-link" href="#dictionary"><i className="bi bi-collection"></i> Dictionary</a>
              <a className="nav-link" href="#set"><i className="bi bi-collection"></i> Set</a>
              <a className="nav-link" href="#string"><i className="bi bi-collection"></i> String</a>
              <a className="nav-link" href="#functions"><i className="bi bi-box-arrow-in-right"></i> Functions</a>
              <a className="nav-link" href="#oops"><i className="bi bi-box"></i> OOP Concepts</a>
              <a className="nav-link" href="#exceptions"><i className="bi bi-exclamation-triangle"></i> Exception Handling</a>
              <a className="nav-link" href="#file"><i className="bi bi-file-earmark"></i> File Handling</a>
              <a className="nav-link" href="#modules"><i className="bi bi-box-seam"></i> Modules</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to Python</h2>

              <div className="property-card">
                <h3 className="h4">What is Python?</h3>
                <ul>
                  <li>Python is a high-level, object-oriented programming language</li>
                  <li>Developed by Guido van Rossum in 1991</li>
                  <li>Known for its simple syntax and readability</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Python Uses</h3>
                <ul>
                  <li>Web development (server-side)</li>
                  <li>Software development</li>
                  <li>Mathematics and scientific computing</li>
                  <li>System scripting</li>
                  <li>Data analysis and machine learning</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Why Learn Python?</h3>
                <ul>
                  <li>Works on different platforms (Windows, Mac, Linux)</li>
                  <li>Simple syntax similar to English</li>
                  <li>Large standard library</li>
                  <li>Free and open source</li>
                  <li>Strong community support</li>
                </ul>
              </div>
              <div className="property-card">
                <h3 className="h4">Advantages</h3>
                <ul>
                  <li>Easy to learn and use</li>
                  <li>Free and open source</li>
                  <li>Rapid development</li>
                  <li>Interpreter</li>
                </ul>
              </div>
              <div className="property-card">
                <h3 className="h4">Disadvantages</h3>
                <ul>
                  <li>Slow speed</li>
                  <li>Heavy memory usage</li>
                </ul>
              </div>
            </section>

            <section id="setup" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-download"></i> Environment Setup</h2>

              <div className="property-card">
                <h3 className="h4">Installation Steps</h3>
                <ol>
                  <li>Download Python from <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">python.org</a></li>
                  <li>Run the installer and check "Add Python to PATH"</li>
                  <li>Verify installation by running <code>python --version</code> in command prompt</li>
                </ol>
              </div>

              <div className="property-card">
                <h3 className="h4">IDEs for Python</h3>
                <ul>
                  <li>VS Code</li>
                  <li>PyCharm</li>
                  <li>IDLE (comes with Python)</li>
                  <li>Jupyter Notebook</li>
                  <li>Sublime Text</li>
                </ul>
              </div>
            </section>

            <section id="syntax" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> Basic Syntax</h2>

              <div className="property-card">
                <h3 className="h4">Hello World Example</h3>
                <pre><code>{`print("Hello, World!")`}</code></pre>
                <p>Output: <code>Hello, World!</code></p>
              </div>

              <div className="property-card">
                <h3 className="h4">Indentation</h3>
                <p>Python uses indentation to define code blocks (instead of curly braces)</p>
                <pre><code>{`if 5 > 2:
    print("Five is greater than two!")`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Comments</h3>
                <p>Used to explain the code (readable only).</p>
                <pre><code>{`# This is a single line comment

"""
This is a 
multi-line comment
"""`}</code></pre>
              </div>
            </section>

            <section id="variables" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> Variables</h2>
              <p>It is a container used to store the values.</p>

              <div className="property-card">
                <h4 className="mb-3">Syntax</h4>
                <pre>{`varName = value`}</pre>
                <h3 className="h4">Variable Declaration</h3>
                <pre><code>{`# Variable assignment
x = 5
y = "Hello"
z = 3.14`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Variable Scope</h3>
                <p><strong>Global Scope:</strong> If a variable is created outside the functions.</p>
                <p><strong>Local Scope:</strong> If a variable is created inside the functions.</p>
                <pre><code>{`# Global variable
global_var = "I'm global"

def my_func():
    # Local variable
    local_var = "I'm local"
    print(global_var)  # Accessible
    
my_func()
# print(local_var)  # Error - not accessible`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Variable Naming Rules</h3>
                <ul>
                  <li>Must start with a letter or underscore</li>
                  <li>Can only contain alphanumeric characters and underscores</li>
                  <li>Case-sensitive</li>
                  <li>Avoid Python keywords (like <code>if</code>, <code>for</code>, etc.)</li>
                </ul>
              </div>
            </section>

            <section id="datatypes" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-list-check"></i> Data Types</h2>

              <div className="property-card">
                <h3 className="h4">Basic Data Types</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>int</code></td>
                      <td>Integer numbers</td>
                      <td><code>x = 10</code></td>
                    </tr>
                    <tr>
                      <td><code>float</code></td>
                      <td>Decimal numbers</td>
                      <td><code>y = 10.5</code></td>
                    </tr>
                    <tr>
                      <td><code>str</code></td>
                      <td>Text (string)</td>
                      <td><code>s = "Hello"</code></td>
                    </tr>
                    <tr>
                      <td><code>bool</code></td>
                      <td>Boolean (True/False)</td>
                      <td><code>b = True</code></td>
                    </tr>
                    <tr>
                      <td><code>complex</code></td>
                      <td>Complex numbers</td>
                      <td><code>c = 1 + 2j</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">Collection Data Types</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>list</code></td>
                      <td>Ordered, mutable collection</td>
                      <td><code>lst = [1, 2, 3]</code></td>
                    </tr>
                    <tr>
                      <td><code>tuple</code></td>
                      <td>Ordered, immutable collection</td>
                      <td><code>tup = (1, 2, 3)</code></td>
                    </tr>
                    <tr>
                      <td><code>set</code></td>
                      <td>Unordered, unique elements</td>
                      <td><code>{`s = {1, 2, 3}`}</code></td>
                    </tr>
                    <tr>
                      <td><code>dict</code></td>
                      <td>Key-value pairs</td>
                      <td><code>{`d = {"name": "John", "age": 30}`}</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">Type Conversion</h3>
                <pre><code>{`# Convert between types
x = 10
print(float(x))  # 10.0
print(str(x))    # "10"

y = "20"
print(int(y))    # 20

lst = [1, 2, 3]
print(tuple(lst))  # (1, 2, 3)`}</code></pre>
              </div>
            </section>

            <section id="operators" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> Operators</h2>

              <div className="property-card">
                <h3 className="h4">Arithmetic Operators</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>+</code></td>
                      <td>Addition</td>
                      <td><code>10 + 20</code></td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td><code>-</code></td>
                      <td>Subtraction</td>
                      <td><code>20 - 10</code></td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td><code>*</code></td>
                      <td>Multiplication</td>
                      <td><code>10 * 20</code></td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td><code>/</code></td>
                      <td>Division</td>
                      <td><code>20 / 10</code></td>
                      <td>2.0</td>
                    </tr>
                    <tr>
                      <td><code>%</code></td>
                      <td>Modulus (Remainder)</td>
                      <td><code>20 % 10</code></td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td><code>**</code></td>
                      <td>Exponentiation</td>
                      <td><code>10 ** 2</code></td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td><code>//</code></td>
                      <td>Floor Division</td>
                      <td><code>20 // 10</code></td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">Assignment Operators</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                      <th>Equivalent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>=</code></td>
                      <td>Assign</td>
                      <td><code>x = 10</code></td>
                      <td><code>x = 10</code></td>
                    </tr>
                    <tr>
                      <td><code>+=</code></td>
                      <td>Add and assign</td>
                      <td><code>x += 5</code></td>
                      <td><code>x = x + 5</code></td>
                    </tr>
                    <tr>
                      <td><code>-=</code></td>
                      <td>Subtract and assign</td>
                      <td><code>x -= 5</code></td>
                      <td><code>x = x - 5</code></td>
                    </tr>
                    <tr>
                      <td><code>*=</code></td>
                      <td>Multiply and assign</td>
                      <td><code>x *= 5</code></td>
                      <td><code>x = x * 5</code></td>
                    </tr>
                    <tr>
                      <td><code>/=</code></td>
                      <td>Divide and assign</td>
                      <td><code>x /= 5</code></td>
                      <td><code>x = x / 5</code></td>
                    </tr>
                    <tr>
                      <td><code>%=</code></td>
                      <td>Modulus and assign</td>
                      <td><code>x %= 5</code></td>
                      <td><code>x = x % 5</code></td>
                    </tr>
                    <tr>
                      <td><code>**=</code></td>
                      <td>Exponentiation and assign</td>
                      <td><code>x **= 2</code></td>
                      <td><code>x = x ** 2</code></td>
                    </tr>
                    <tr>
                      <td><code>//=</code></td>
                      <td>Floor division and assign</td>
                      <td><code>x //= 2</code></td>
                      <td><code>x = x // 2</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">Comparison Operators</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>==</code></td>
                      <td>Equal to</td>
                      <td><code>10 == 20</code></td>
                      <td><code>False</code></td>
                    </tr>
                    <tr>
                      <td><code>!=</code></td>
                      <td>Not equal to</td>
                      <td><code>10 != 20</code></td>
                      <td><code>True</code></td>
                    </tr>
                    <tr>
                      <td><code>&gt;</code></td>
                      <td>Greater than</td>
                      <td><code>20 &gt; 10</code></td>
                      <td><code>True</code></td>
                    </tr>
                    <tr>
                      <td><code>&gt;=</code></td>
                      <td>Greater than or equal to</td>
                      <td><code>20 &gt;= 10</code></td>
                      <td><code>True</code></td>
                    </tr>
                    <tr>
                      <td><code>&lt;</code></td>
                      <td>Less than</td>
                      <td><code>20 &lt; 10</code></td>
                      <td><code>False</code></td>
                    </tr>
                    <tr>
                      <td><code>&lt;=</code></td>
                      <td>Less than or equal to</td>
                      <td><code>20 &lt;= 10</code></td>
                      <td><code>False</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">Logical Operators</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>and</code></td>
                      <td>Logical AND</td>
                      <td><code>(10 == 20) and (20 == 33)</code></td>
                      <td><code>False</code></td>
                    </tr>
                    <tr>
                      <td><code>or</code></td>
                      <td>Logical OR</td>
                      <td><code>(10 == 20) or (20 == 33)</code></td>
                      <td><code>False</code></td>
                    </tr>
                    <tr>
                      <td><code>not</code></td>
                      <td>Logical NOT</td>
                      <td><code>not(10 == 20)</code></td>
                      <td><code>True</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">Bitwise Operators</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>&amp;</code></td>
                      <td>Bitwise AND</td>
                      <td><code>10 &amp; 20</code></td>
                      <td><code>0</code></td>
                    </tr>
                    <tr>
                      <td><code>|</code></td>
                      <td>Bitwise OR</td>
                      <td><code>10 | 20</code></td>
                      <td><code>30</code></td>
                    </tr>
                    <tr>
                      <td><code>^</code></td>
                      <td>Bitwise XOR</td>
                      <td><code>10 ^ 20</code></td>
                      <td><code>30</code></td>
                    </tr>
                    <tr>
                      <td><code>~</code></td>
                      <td>Bitwise NOT</td>
                      <td><code>~10</code></td>
                      <td><code>-11</code></td>
                    </tr>
                    <tr>
                      <td><code>&lt;&lt;</code></td>
                      <td>Bitwise left shift</td>
                      <td><code>10 &lt;&lt; 2</code></td>
                      <td><code>40</code></td>
                    </tr>
                    <tr>
                      <td><code>&gt;&gt;</code></td>
                      <td>Bitwise right shift</td>
                      <td><code>10 &gt;&gt; 2</code></td>
                      <td><code>2</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">Identity Operators</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>is</code></td>
                      <td>Returns <code>True</code> if both variables point to the same object (identity).</td>
                      <td>
                        a = 10 <br />
                        c = a <br />
                        print(a is c)
                      </td>
                      <td><code>True</code></td>
                    </tr>
                    <tr>
                      <td><code>is not</code></td>
                      <td>Returns <code>True</code> if variables do not point to the same object.</td>
                      <td>
                        a = 10 <br />
                        b = 20
                        c = a <br />
                        print(a is not b)
                      </td>
                      <td><code>True</code></td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  <strong>Note:</strong> <code>is</code> and <code>is not</code> check for object identity (same memory location), not just equality of values.
                </p>
              </div>

              <div className="property-card">
                <h3 className="h4">Membership Operators</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Operator</th>
                      <th>Description</th>
                      <th>Example</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>in</code></td>
                      <td>Returns <code>True</code> if the value in the sequence.</td>
                      <td>
                        a = [10,20,30] <br />
                        print(20 in a)
                      </td>
                      <td><code>True</code></td>
                    </tr>
                    <tr>
                      <td><code>not in</code></td>
                      <td>Returns <code>True</code> if the value is not in the sequence.</td>
                      <td>
                        a = [10,20,30] <br />
                        print(40 not in a)
                      </td>
                      <td><code>True</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="decision" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-2"></i> Decision Making Statements</h2>

              <div className="property-card">
                <h3 className="h4">if statement</h3>
                <p className="mb-3">If block will get executed whether the condition is true.</p>
                <pre><code>{`# Syntax:
if condition:
    # statements

# Example:
age = 18
if age >= 18:
    print("You are an Adult")`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">if-else statement</h3>
                <p className="mb-3">If block will get executed whether the condition is true and else block will get executed whether the condition is false.</p>
                <pre><code>{`# Syntax:
if condition:
    # statements
else:
    # statements

# Example:
age = 18
if age >= 18:
    print("You are an Adult")
else:
    print("You are Minor")`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">elif statement</h3>
                <pre><code>{`# Syntax:
if condition1:
    # statements
elif condition2:
    # statements
else:
    # statements

# Example:
a = 10
b = 25
c = 100
if a > b and a > c:
    print("A is greater")
elif b > a and b > c:
    print("B is greater")
else:
    print("C is greater")`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Nested if statement</h3>
                <pre><code>{`# Syntax:
if condition1:
    if condition2:
        # statements

# Example:
marks = 97
if marks > 90:
    if marks > 95:
        print("O Grade")
    else:
        print("A+ Grade")
else:
    print("Other grades")`}</code></pre>
              </div>
            </section>

            <section id="loops" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> Loops</h2>
              <p className="mb-3">It is a block of code which will be executed repeatedly until the condition becomes false.</p>
              <h4 className="h4 mb-3">Types of loop:</h4>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle me-2"></i>for loop</h3>
                <p>It is a block of code which will be executed until the last item in the sequence.</p>
                <pre><code>{`# Syntax:
for val in sequence:
    # statements

# Example 1:
x = [10, 20, 30, 40, 50]
for i in x:
    print(i)

# Example 2: Using range()
for i in range(5):  # 0 to 4
    print(i)

for i in range(1, 6):  # 1 to 5
    print(i)

for i in range(2, 7, 2):  # 2, 4, 6
    print(i)`}</code></pre>

                <pre>{`Note: range() – This function returns a sequence of numbers, by default the starting number will be 0 and increments by 1 and ends at n-1.`}</pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle me-2"></i>while loop</h3>
                <pre><code>{`# Syntax:
initialization
while condition:
    # statements
    increment/decrement

# Example:
i = 0
while i < 5:
    print(i)
    i += 1`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle me-2"></i>Nested loops</h3>
                <pre><code>{`# Example:
for i in range(3):
    for j in range(3):
        print(i, j)

# Output:
# 0 0
# 0 1
# 0 2
# 1 0
# 1 1
# 1 2
# 2 0
# 2 1
# 2 2`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h3">Jump Statements</h3>
                <h5>Types of jump statements:</h5>
                <ol>
                  <li>break</li>
                  <li>continue</li>
                </ol>
                <h4 className='mb-3'><i className="bi bi-1-circle me-2"></i>break statement</h4>
                <p>It is used to break the loop.</p>
                <h4 className='mb-3'><i className="bi bi-2-circle me-2"></i>continue statement</h4>
                <p>It is used to skip the item and move to next item.</p>
                <pre><code>{`# break statement
for i in range(5):
    print(i)
    if i == 2:
        break

# Output: 0 1 2

# continue statement
for i in range(5):
    if i == 2:
        continue
    print(i)

# Output: 0 1 3 4`}</code></pre>
              </div>
            </section>

            <section className="mb-5" id="built-in-datatypes">
              <h2 className="mb-3">Built-in Datatypes</h2>
              <div className="property-card">
                <ol>
                  <li>List</li>
                  <li>Tuple</li>
                  <li>Dictionary</li>
                  <li>Set</li>
                </ol>
              </div>

              <section className="mb-5" id="list">
                <h2 className="mb-3"><i className="bi bi-collection me-2"></i>List</h2>
                <div className="property-card">
                  <ul>
                    <li>It is used to store multiple items in a single variable.</li>
                    <li>List are created using square brackets [].</li>
                    <li>It is one of the built-in datatypes (list, tuple, dictionary, set).</li>
                    <li>It is a mutable datatype (changeable).</li>
                    <li>It is order and allows duplicate values.</li>
                    <li>It works based on index values.</li>
                  </ul>
                </div>
                <div className="property-card">
                  <h3 className="mb-3">List Examples</h3>
                  <pre><code>{`x = [1,2,3,4,5]
print(x)
print(type(x)) 
print(len(x))

# len() - used to get the length of the list.
# type() - used to get the datatype of the value.

# List Slicing
a = [10,20,30,40,50]
print(a[0:3])
print(a[:2])
print(a[2:])

# Negative Indexing
a = ["Naruto","Sasuke","Hinata"]
print(a[-1])

# For loop in list
a = [10,20,30,40,50]
for i in a:
    print(a)
`}</code></pre>
                </div>
                <div className="property-card">
                  <h2 className="mb-3">List Methods</h2>
                  <pre><code>{`# append () - Add an element at the end of the list
Eg:
a = ["Dhoni","Jaddu","Virat"]
a.append("Rutu")
print(a)
Output : ["Dhoni","Jaddu","Virat","Rutu"]

# insert () - Add an element at the specified index position
Eg:
a = ["Dhoni","Jaddu","Virat"]
a.insert(1,"Rohit")
print(a)
Output : ["Dhoni","Rohit","Jaddu","Virat"]

# remove () - Remove a specified item in the list
Eg:
a = ["Dhoni","Jaddu","Virat"]
a.remove("Jaddu")
print(a)
Output : ["Dhoni","Virat"]

# extend () - Add a list to another list
Eg:
a = ["Dhoni","Jaddu","Rohit"]
b = ["Ashwin","Virat"]
a.extend(b)
print(a)
Output: ['Dhoni', 'Jaddu', 'Rohit', 'Ashwin', 'Virat']

# pop () - Remove an item in the specified index position.
Eg:
a = ["Dhoni","Jaddu","Rohit"]
a.pop(1)
print(a)
Output : ["Dhoni","Rohit"]

# clear () - Remove all items in a list
Eg:
a = [10,20,30]
a.clear()
print(a)
Output: []

# copy () - Used to make a duplicate of the list
Eg:
x = [10,20]
y = x.copy()
print(y)
Output : [10,20]

# sort () - Used to arrange the items in the ascending order
Eg:
x = [89,20,47,100,406,16]
x.sort()
print(x)
Output : [16, 20, 47, 89, 100, 406]

# reverse () - Used to reverse the items in the list
Eg:
x = [10,20,30,40,50]
x.reverse()
print(x)
Output : [50, 40, 30, 20, 10]`}</code></pre>
                </div>
              </section>

              <section className="mb-5" id="tuple">
                <h2 className="mb-3"><i className="bi bi-collection"></i>Tuple</h2>
                <div className="property-card">
                  <ul>
                    <li>It is used to store multiple items in a single variable.</li>
                    <li>Tuples are created using round brackets ().</li>
                    <li>It is one of the built-in datatypes (list, tuple, dictionary, set).</li>
                    <li>It is an immutable datatype (unchangeable).</li>
                    <li>It is order and allows duplicate values.</li>
                    <li>It works based on index values.</li>
                  </ul>
                </div>
                <div className="property-card">
                  <h3 className="mb-3">Tuple Examples</h3>
                  <pre><code>{`x = (1,2,3,4,5)
print(x)
print(type(x)) 
print(len(x))

# len() - used to get the length of the tuple.
# type() - used to get the datatype of the value.

# Tuple Slicing
a = (10,20,30,40,50)
print(a[0:3])
print(a[:2])
print(a[2:])

# Negative Indexing
a = ("Naruto","Sasuke","Hinata")
print(a[-1])

# For loop in tuple
a = (10,20,30,40,50)
for i in a:
    print(a)

# Tuple concatenation
a = (10,20)
b = (30,40)
c = a+b
print(c)

Output: (10,20,30,40)
`}</code></pre>
                </div>
              </section>

              <section className="mb-5" id="dictionary">
                <h2 className="mb-3"><i className="bi bi-collection me-2"></i>Dictionary</h2>
                <div className="property-card">
                  <ul>
                    <li>It is used to store multiple items in a single variable as key-value pairs..</li>
                    <li>Dictionaries are created using curly brackets { }.</li>
                    <li>It is one of the built-in datatypes (list, tuple, dictionary, set).</li>
                    <li>It is an mutable datatype (changeable).</li>
                    <li>It is order and does not allows duplicate values.</li>
                  </ul>
                </div>
                <div className="property-card">
                  <h3 className="mb-3">Dictionary Examples</h3>
                  <pre><code>{`x = {
  "id":1,
  "name":"John",
  "age":30
}
print(x)
print(x["name"])
print(type(x))
print(len(x))

# for loop in Dictionary:
x = {
  "id":1,
  "name":"John",
  "age":30
}
for i in x:
  print(x[i])
`}</code></pre>
                </div>
                <div className="property-card">
                  <h2 className="mb-3">Dictionary Methods</h2>
                  <pre><code>{`# update () - Used to update an element
Eg:
a = {
  "name":"Dhoni",
  "age":30,
  "city":"Ranchi",
  "year":2025
}
a.update({"age":43})
print(a)

Output: {'name': 'Dhoni', 'age': 43, 'city': 'Ranchi', 'year': 2025}

# clear () - Remove all elements in the dictionary
Eg:
a = {
  "name":"Dhoni",
  "age":30,
}
a.clear()
print(a)

Output: {}

# pop () - Remove an item in the specified key value pair
Eg:
a = {
  "name":"Dhoni",
  "age":30,
  "city":"Ranchi",
  "year":2025
}
a.pop("year")
print(a)

Output: {'name': 'Dhoni', 'age': 43, 'city': 'Ranchi'}

# popitem () - Remove a last key value pair in dictionary
Eg:
a = {
  "name":"Dhoni",
  "age":30,
  "city":"Ranchi"
}
a.popitem()
print(a)

Output: {'name': 'Dhoni', 'age': 43}

# copy () - Used to make a duplicate of the list
Eg:
a = {
  "name":"Dhoni",
  "age":30
}
b = a.copy()
print(b)

Output: {'name': 'Dhoni', 'age': 43}

# get () - Used to get the value of the specified key
Eg:
a = {
  "name":"Dhoni",
  "age":30
}
b = a.get("name")
print(b)

Output: Dhoni

# keys () - Used to get all keys and return in list
Eg:
a = {
  "name":"Dhoni",
  "age":30
}
b = a.keys()
print(b)

Output: dict_keys(['name','age'])`}</code></pre>
                </div>
              </section>

              <section className="mb-5" id="set">
                <h2 className="mb-3"><i className="bi bi-collection me-2"></i>Set</h2>
                <div className="property-card">
                  <ul>
                    <li>It is used to store multiple items in a single variable.</li>
                    <li>Set are created using curly brackets { }.</li>
                    <li>It is one of the built-in datatypes (list, tuple, dictionary, set).</li>
                    <li>It is an mutable datatype (changeable).</li>
                    <li>It is unorder and does not allows duplicate values.</li>
                  </ul>
                </div>
                <div className="property-card">
                  <h3 className="mb-3">Set Examples</h3>
                  <pre><code>{`x = {"naruto","sasuke","sakura","hinata"}
print(x)
print(type(x))
print(len(x))

# for loop in set:
x = {"naruto","sasuke","sakura","hinata"}
for i in x:
  print(i)
`}</code></pre>
                </div>
                <div className="property-card">
                  <h2 className="mb-3">Set Methods</h2>
                  <pre><code>{`# add () - Add an item in the set
Eg:
a = {"naruto","sasuke","sakura","hinata"}
a.add("kakashi")
print(a)

Output: {'kakashi', 'sakura', 'hinata', 'naruto', 'sasuke'}

# update () - Add a set into another set
Eg:
a = {"naruto","sasuke","sakura","hinata"}
b = {"Shikamaru","Konahamaru"}
a.update(b)
print(a)

Output: {'kakashi', 'sakura', 'hinata', 'Shikamaru', 'Konahamaru', 'naruto', 'sasuke'}

# remove () - Remove a specified item in list
Eg:
a = {"naruto","sasuke","sakura","hinata"}
a.remove("sasuke")
print(a)

Output: {'sakura', 'hinata','naruto'}

# pop () - Remove a random item in the set
Eg:
a = {"naruto","sasuke","sakura","hinata"}
a.pop()
print(a)

# clear () - Remove all item in the set
Eg:
a = {"naruto","sasuke","sakura","hinata"}
a.clear()
print(a)

Output: set()`}</code></pre>
                </div>
              </section>
            </section>

            <section className="mb-5" id='string'>
              <h2 className="mb-3">String</h2>
              <p>It is a collection of characters (alphabets, numbers and symbols) stored within " " quotes of ' ' quotes.</p>

              <div className="property-card">
                <h3 className="mb-3">String Example</h3>
                <pre><code>{`a = "Dhoni"
print(a)
print(type(a))
print(len(a))

# for loop in string:
a = "Jadeja"
for i in a:
  print(i)

# String slicing:
a = "Rohit"
print(a[2])
print(a[1:3])
print(a[:3])
print(a[1:])`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="mb-3">String Methods</h3>
                <pre><code>{`# lower () - Converts a string into lower case
a = "Dhoni"
print(a.lower())

Output: dhoni

# upper () - Converts a string into upper case
a = "Dhoni"
print(a.upper())

Output: DHONI

# capitalize () - Converts a string into capitalize
a = "dhoni"
print(a.capitalize())

Output: Dhoni

# strip () - Remove the whitespace from beginning and end
a = "Dhoni"
print(a.strip())

Output: Dhoni

# split () - Splits the string at the specified separator, and returns a list
a = "Dhoni,Rohit,Virat"
print(a.split(","))

Output: ['Dhoni','Rohit','Virat']

# format () - Insert numbers into string
a = 10
b = "My age is {}"
print(b.format(a))

Output: My age is 10

# index () - Find the index value of the specified character
a = "Dhoni"
print(a.index ('D'))

Output: 0

# isalnum () - Returns True if all characters in the string are alphanumeric
a = "Dhoni07"
print(a.isalnum())

Output: True

# isalpha () - Returns True if all characters in the string are alphabets
a = "Dhoni"
print(a.isalpha())

Output: True

# isdigit () - Returns True if all characters in the string are numbers
a = "07"
print(a.isdigit())

Output: True

# islower () - Returns True if all characters in the string are lowercase
a = "dhoni"
print(a.islower())

Output: True

# isupper () - Returns True if all characters in the string are uppercase
a = "DHONI"
print(a.isupper())

Output: True

# isspace () - Returns True if all characters in the string are whitespace
a = " "
print(a.isspace())

Output: True

# replace () - Replace the old character into new character
a = "dhoni"
print(a.replace('d','m'))

Output: mhoni

# swapcase () - Convert the string into swap
a = "Dhoni"
print(a.swapcase())

Output: dHONI`}</code></pre>
              </div>
            </section>

            <section id="functions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box-arrow-in-right"></i> Functions</h2>
              <p>It is a block of code which will be executed whenever it is been called.</p>

              <div className="property-card">
                <h3 className="h4">Function Definition</h3>
                <pre><code>{`# Syntax:
def function_name(parameters):
    # statements
    return value  # optional

# Example:
def greet():
    print("Good morning")

# Function call
greet()`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Parameters and Arguments</h3>
                <p>The information can be passed inside the function () is called parameters.</p>
                <pre><code>{`# Example with parameters
def add(a, b):
    return a + b

print(add(100, 40))  # 140`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Recursion</h3>
                <p>It is a function can call by itself.</p>
                <pre><code>{`# Example: Factorial function
def fact(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * fact(n-1)

print(fact(4))  # 24`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Lambda Functions</h3>
                <p>It can take any number of arguments but can have only one expression.</p>
                <pre><code>{`# Syntax:
lambda arguments: expression

# Example:
x = lambda a, b: a + b
print(x(10, 5))  # 15`}</code></pre>
              </div>
            </section>

            <section id="oops" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box"></i> Object-Oriented Programming (OOP)</h2>
              <ul>
                <li>Class</li>
                <li>Object</li>
                <li>Inheritance</li>
                <li>Polymorphism</li>
                <li>Abstraction</li>
                <li>Encapsulation</li>
              </ul>

              <div className="property-card">
                <h3 className="h4">Class</h3>
                <ul>
                  <li>It is a blueprint or template used to create an object.</li>
                  <li>It consists of data members and functions.</li>
                </ul>
                <pre><code>{`#Syntax
class ClassName:
  variables
  function(self):
    #statements`}</code></pre>
                <pre><code>{`# Class definition
class Student:
    id = 1
    name = "Raina"
    
    def rank(self):
        print("O grade")

`}</code></pre>
                <pre>{`Note: self - predefined argument, it will be helpful to access the attributes (variables) and methods of class in python`}</pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Object</h3>
                <ul>
                  <li>It is a real-world entity which consists of state and behaviour.</li>
                  <li>State represents the characteristics of an object.</li>
                  <li>Behaviour represents the functionality of an object.</li>
                  <li>It is the instance of the class.</li>
                </ul>
                <pre><code>{`#Syntax
objName = ClassName()`}</code></pre>
                <pre><code>{`# Example using class and object
class Student:
    id = 1
    name = "Raina"
    def rank(self):
        print('O grade")
obj1 = Student()
print(obj1.id) # 1
print(obj1.name) # Raina
obj1.rank() # O grade
obj2.id = 2
obj2.name = "Dhoni"
print(obj2.id) # 2
print(obj2.name) # Dhoni
`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h3">Constructor</h3>
                <p>It is a special type of function it will be called automatically when the object is been created.</p>
                <pre><code>{`# Syntax:
def __init__(self):
    #statements`}</code></pre>
                <h4 className="mb-3">Types of Constructor</h4>
                <ol>
                  <li>Default/Non Parameterized Constructor</li>
                  <li>Parameterized Constructor</li>
                </ol>
                <pre><code>{`# Default constructor
class Student:
    def __init__(self):
        print("Non-Parameterized constructor")

obj = Student()  # Non-Parameterized constructor

# Parameterized constructor
class Student:
    def __init__(self, name):
        print("Parameterized constructor")
        print(name)

obj = Student("Rutu")  # Parameterized constructor and Rutu`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h3 mb-3">Inheritance</h3>
                <p>All the properties and functions will be acquired from parent class to child class is called inheritance.</p>
                <h4 className='mb-3'>Parent Class</h4>
                <p>The class which gives properties and functions are called parent class / base class and superclass.</p>
                <h4 className='mb-3'>Child Class</h4>
                <p>The class which acquires properties and functions from parent class is called child class / sub class / derived class and extended class.</p>
                <h4 className="mb-3">Types of Inheritance</h4>
                <ol>
                  <li>Single level inheritance - One Parent One Child</li>
                  <li>Multi level inheritance - Multiple parents at different level</li>
                  <li>Multiple inheritance - Multiple parents at same level</li>
                  <li>Hierarchical inheritance - One Parent Many Children</li>
                  <li>Hybrid inheritance - Multiple type of inheritance</li>
                </ol>
                <h4 className='mb-3'><i className="bi bi-1-circle"></i> Single Level Inheritance</h4>
                <img src={single} alt="" className="img-fluid" /><br /><br />
                <pre><code>{`# Single level inheritance
class Parent:
    def abc(self):
        print("Parent property")

class Child(Parent):
    def lmn(self):
        print("Child property")

obj = Child()
obj.abc()  # Parent property
obj.lmn()  # Child property`}</code></pre>
                <h4 className='mb-3'><i className="bi bi-2-circle"></i> Multi Level Inheritance</h4>
                <img src={multilevel} alt="" className="img-fluid" /><br /><br />
                <pre><code>{`# Multi-level inheritance
class Grandpa:
    def xyz(self):
        print("Grandpa property")

class Parent(Grandpa):
    def abc(self):
        print("Parent property")

class Child(Parent):
    def lmn(self):
        print("Child property")

obj = Child()
obj.xyz()  # Grandpa property
obj.abc()  # Parent property
obj.lmn()  # Child property`}</code></pre>
                <h4 className='mb-3'><i className="bi bi-3-circle"></i> Multiple Inheritance</h4>
                <img src={multiple} alt="" className="img-fluid" /><br /><br />
                <pre><code>{`# Multiple inheritance
class Father:
    def xyz(self):
        print("Father property")

class Mother:
    def abc(self):
        print("Mother property")

class Child(Father,Mother):
    def lmn(self):
        print("Child property")

obj = Child()
obj.xyz()  # Father property
obj.abc()  # Mother property
obj.lmn()  # Child property`}</code></pre>
                <h4 className='mb-3'><i className="bi bi-4-circle"></i> Hierarchical Inheritance</h4>
                <img src={hierarchical} alt="" className="img-fluid" /><br /><br />
                <pre><code>{`# Hierarchical inheritance
class Parent:
    def xyz(self):
        print("Parent property")

class Child1(Parent):
    def abc(self):
        print("Child1 property")

class Child2(Parent):
    def lmn(self):
        print("Child2 property")

obj1 = Child1()
obj2 = Child2()
obj1.xyz()  # Parent property
obj1.abc()  # Child1 property
obj2.xyz()  # Parent property
obj2.lmn()  # Child2 property`}</code></pre>
                <h4 className='mb-3'><i className="bi bi-5-circle"></i> Hybrid Inheritance</h4>
                <img src={hybrid} alt="" className="img-fluid" /><br /><br />
                <pre><code>{`# Hybrid inheritance

class CEO: 
   def ceoMethod(self):
      print ("I am the CEO")
      
class Manager(CEO): 
   def managerMethod(self):
      print ("I am the Manager")

class Employee1(Manager): 
   def employee1Method(self):
      print ("I am Employee one")
      
class Employee2(Manager, CEO): 
   def employee2Method(self):
      print ("I am Employee two")      

emp = Employee2()
emp.managerMethod() 
emp.ceoMethod()
emp.employee2Method()`}</code></pre>
              </div>

              <div className="property-card">
                <h2 className="h2">Polymorphism</h2>
                <ul>
                  <li>Poly - many</li>
                  <li>Morph - forms</li>
                  <li>It refers to many forms</li>
                  <li>By using polymorphism, we can execute multiple functionalities with same function name</li>
                </ul>

                <h3 className="mb-3">Types of Polymorphism</h3>
                <ol>
                  <li>Compile time polymorphism / Static polymorphism</li>
                  <li>Runtime polymorphism / Dynamic polymorphism</li>
                </ol>

                <h3 className="mb-3"><i className="bi bi-1-circle"></i> Compile time polymorphism</h3>
                <p>It will be achieved by method overloading (same method name, different parameters and present in same class)</p>
                <pre><code>{`# Method Overloading (Python doesn't support directly)
def add(a, b):
    return a + b

def add(a, b, c):
    return a + b + c

print(add(10, 50))    # Error, last definition is used
print(add(10, 5, 2))  # 17
`}</code></pre>

                <h3 className="mb-3"><i className="bi bi-2-circle"></i> Runtime polymorphism</h3>
                <p>It will be achieved by method overriding (same method name, same parameter but present in different class)</p>
                <pre><code>{`# Method Overriding
class Java:
    def level(self):
        print("Hard")
class JavaScript(Java):
    def level(self):
        print("Easy")
obj1 = Java()
obj2 = JavaScript()
obj1.level() # Hard
obj2.level() # Easy
`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h3">Abstraction</h3>
                <p>It is used to hide the details and showing only the essential information from the user.</p>
                <pre><code>{`# Syntax:
from abc import ABC

class ClassName(ABC):

Note: ABC means Abstract Base Classes
Abstract method means a function without function implementation.`}</code></pre>
                <h4 className='mb-3'>Abstraction Example</h4>
                <pre><code>{`from abc import ABC, abstractmethod

class School(ABC):
    @abstractmethod
    def studentName(self):
        pass

class Student1(School):
    def studentName(self):
        print("Narusuco")

class Student2(School):
    def studentName(self):
        print("Inosuki")

obj1 = Student1()
obj2 = Student2()
obj1.studentName()  # Narusuco
obj2.studentName()  # Inosuki`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Encapsulation</h3>
                <p>It is a process of wrapping the data members and functions together is called encapsulation.</p>
                <pre><code>{`# Public method
class ATM:
    def __init__(self):
        self.amount = 10000

obj = ATM()
print(obj.amount)  # 10000

# Private method (using double underscore)
class ATM:
    def __init__(self):
        self.__amount = 10000
    
    def show(self):
        print(self.__amount)

obj = ATM()
obj.show()  # 10000
# print(obj.amount)  # Error`}</code></pre>
              </div>
            </section>

            <section id="exceptions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-exclamation-triangle"></i> Exception Handling</h2>
              <div className="property-card">
                <ul>
                  <li>Abnormal condition.</li>
                  <li>In a program if we receive an exception it leads to abnormal termination of a program so it is mandatory to handle an exception.</li>
                  <li>The valid statements will not be executed if exception occurs.</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="mb-3">Hierarchy of Exception:</h3>
                <ol>
                  <li><b>ZeroDivisionError</b> - Occurs when a number divided by zero (5/0)</li>
                  <li><b>NameError</b> - It occurs when a name is not found. It may be local or global</li>
                  <li><b>IndentationError</b> - If incorrect indendation is given</li>
                  <li><b>IOError</b> - It occurs when input operation fails</li>
                </ol>
              </div>

              <div className="property-card">
                <h3 className="h4">Ways to handle an Exception</h3>
                <pre><code>{`# Syntax:
try:
    # code that may raise exception
except ExceptionType:
    # code to handle exception
else:
    # code if no exception
finally:
    # code that always executes
`}</code></pre>
                <h4 className='mb-3'>Zero Division Error</h4>
                <pre><code>{`# Example 1: ZeroDivisionError
try:
    print(10/0)
except ZeroDivisionError:
    print("Infinity")
finally:
    print("Exception is handled")`}</code></pre>
                <h4 className='mb-3'>Name Error</h4>
                <pre><code>{`# Example 2: NameError
try:
    print(a)
except NameError:
    print("Exception Occurred")
finally:
    print("Exception is handled")`}</code></pre>
              </div>
            </section>

            <section id="file" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark"></i> File Handling</h2>
              <ul>
                <li>Python too supports file handling and allows users to handle files. ie, to read and write files.</li>
                <li>Each line of code includes a sequence of characters and they form a text file.</li>
                <li>File is an external storage on hard disk from where data can be stored and retrieved.</li>
              </ul>

              <div className="property-card">
                <h4 className="mb-3">Create a file named file.txt</h4>
                <pre><code>{`I'm Mahendra Singh Dhoni
I'm an WK Batsman
My age is 43`}</code></pre>
              </div>

              <div className="property-card">
                <h4 className="mb-3">File Syntax</h4>
                <pre><code>{`# Syntax
f = open("filename","mode")`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">File Modes</h3>
                <ul>
                  <li><code>'r'</code> - Read (default)</li>
                  <li><code>'w'</code> - Write (creates new or truncates existing)</li>
                  <li><code>'a'</code> - Append</li>
                  <li><code>'r+'</code> - Read and write</li>
                  <li><code>'w+'</code> - Write and read</li>
                  <li><code>'a+'</code> - Append and read</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Reading Files</h3>
                <pre><code>{`# Method 1: Reading line by line
f = open('file.txt', 'r')
for x in f:
    print(x)
f.close()

# Method 2: Reading entire file
f = open('file.txt', 'r')
print(f.read())
f.close()`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Writing Files</h3>
                <pre><code>{`# Writing to a file
f = open("file1.txt", "w")  # creates if doesn't exist
f.write("My name is Rutu")
f.write("I'm an opening batsman")
f.close()`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Appending to Files</h3>
                <pre><code>{`# Appending to a file
f = open("file1.txt", "a")
f.write("My age is 33")
f.close()`}</code></pre>
              </div>
            </section>

            <section id="modules" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box-seam"></i> Modules</h2>
              <ul>
                <li>It is same as code library.</li>
                <li>A file containing a set of functions you want to include in your application.</li>
              </ul>
              <h3 className="mb-3">Types of Module</h3>
              <ol>
                <li>User-defined module</li>
                <li>Predefined module</li>
              </ol>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> User-defined Module</h3>
                <pre><code>{`# operators.py (module file)
def add(a, b):
    return a + b

def sub(a, b):
    return a - b

def mul(a, b):
    return a * b

def div(a, b):
    return a / b

# example.py (main file)
import operators

print(operators.add(10, 5))  # 15
print(operators.sub(15, 5))  # 10
print(operators.mul(10, 5))  # 50
print(operators.div(10, 5))  # 2.0`}</code></pre>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> Pre-defined Module</h3>
                <pre><code>{`# pre-defined module
# example.py (main file)
import math

print(math.sqrt(64))  # 8.0
print(math.pow(2, 4))  # 16.0`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Database Connectivity</h3>
                <pre><code>{`# Install MySQL connector
# python -m pip install mysql-connector-python

import mysql.connector

# Connect to MySQL
x = mysql.connector.connect(
    host="localhost",
    user="yourusername",
    password="yourpassword",
    port="yourport"
)

print(x)  # Connection object

# Create a database
z = x.cursor()
z.execute("CREATE DATABASE demo")`}</code></pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Python Notes &copy; 2025 | Created by Mugilvannan P.</p>
        </div>
      </footer>
    </div>
  );
}

export default PythonNotes;