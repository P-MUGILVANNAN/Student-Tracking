import React from 'react';
import exceptions from '../../assets/exceptions in java.webp';
import collections from '../../assets/collections.jpg';
import single from '../../assets/Single-Inheritance.jpg';
import multilevel from '../../assets/Multilevel-Inheritance.jpg';
import hierarchical from '../../assets/Hierarchical-Inheritance-in-Java.jpg';
import multiple from '../../assets/multiple_inheritance.png';
import hybrid from '../../assets/Hybrid-Inheritance.jpg';

function JavaNotes() {
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
          .example-box {
            background-color: #e9ecef;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 15px;
          }
            @media (max-width: 991.98px) {
            .sidebar {
              position: relative;
              height: auto;
              top: auto;
              margin-bottom: 20px;
              overflow-y: visible;
            }
            
            .main-content {
              width: 100%;
            }
          }
            .operator-table {
            width: 100%;
            border-collapse: collapse;
          }
          .operator-table th, .operator-table td {
            border: 1px solid #dee2e6;
            padding: 8px;
            text-align: left;
          }
          .operator-table th {
            background-color: #e9ecef;
          }
        `}
            </style>

            <header className="bg-secondary text-white py-4">
                <div className="container">
                    <h1 className="display-4 fw-bold"><i className="bi bi-filetype-java"></i> Java Programming Notes</h1>
                    <p className="lead">Complete Guide to Java Programming Language</p>
                </div>
            </header>

            <div className="container py-4">
                <div className="row">
                    <aside className="col-lg-3 sidebar">
                        <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
                        <nav className="nav flex-column">
                            <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
                            <a className="nav-link" href="#features"><i className="bi bi-star"></i> Features</a>
                            <a className="nav-link" href="#components"><i className="bi bi-gear"></i> Java Components</a>
                            <a className="nav-link" href="#setup"><i className="bi bi-tools"></i> Environment Setup</a>
                            <a className="nav-link" href="#class"><i className="bi bi-file-code"></i> Class</a>
                            <a className="nav-link" href="#variables"><i className="bi bi-tag"></i> Variables</a>
                            <a className="nav-link" href="#methods"><i className="bi bi-code-square"></i> Methods</a>
                            <a className="nav-link" href="#objects"><i className="bi bi-box"></i> Objects</a>
                            <a className="nav-link" href="#datatypes"><i className="bi bi-list-ol"></i> Datatypes</a>
                            <a className="nav-link" href="#type"><i className="bi bi-arrow-left-right"></i> Type Casting</a>
                            <a className="nav-link" href="#operators"><i className="bi bi-calculator"></i> Operators</a>
                            <a className="nav-link" href="#conditionals"><i className="bi bi-diagram-2"></i> Conditional Statements</a>
                            <a className="nav-link" href="#loops"><i className="bi bi-arrow-repeat"></i> Loops</a>
                            <a className="nav-link" href="#jump"><i className="bi bi-play"></i> Jump Statements</a>
                            <a className="nav-link" href="#scanner"><i className="bi bi-keyboard"></i> Scanner Class</a>
                            <a className="nav-link" href="#arrays"><i className="bi bi-collection"></i> Arrays</a>
                            <a className="nav-link" href="#strings"><i className="bi bi-textarea-t"></i> Strings</a>
                            <a className="nav-link" href="#oops"><i className="bi bi-shapes"></i> OOP Concepts</a>
                            <a className="nav-link" href="#inheritance"><i className="bi bi-diagram-3"></i> Inheritance</a>
                            <a className="nav-link" href="#polymorphism"><i className="bi bi-arrow-left-right"></i> Polymorphism</a>
                            <a className="nav-link" href="#abstraction"><i className="bi bi-eye-slash"></i> Abstraction</a>
                            <a className="nav-link" href="#abstraction"><i className="bi bi-buildings"></i> Constructor</a>
                            <a className="nav-link" href="#abstraction"><i className="bi bi-key"></i> Super and This Keyword</a>
                            <a className="nav-link" href="#abstraction"><i className="bi bi-copy me-2"></i>Interfaces</a>
                            <a className="nav-link" href="#encapsulation"><i className="bi bi-capsule"></i> Encapsulation</a>
                            <a className="nav-link" href="#encapsulation">OOPS Program</a>
                            <a className="nav-link" href="#exception"><i className="bi bi-exclamation-triangle"></i> Exception Handling</a>
                            <a className="nav-link" href="#collections"><i className="bi bi-collection"></i> Collections</a>
                            <a className="nav-link" href="#multithreading"><i className="bi bi-cpu"></i> Multithreading</a>
                            <a className="nav-link" href="#lambda"><i className="bi bi-arrow-right-square"></i> Lambda Expressions</a>
                            <a className="nav-link" href="#filehandling"><i className="bi bi-collection"></i> File Handling in Java</a>
                        </nav>
                    </aside>

                    <main className="col-lg-9">
                        <section id="introduction" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to Java</h2>
                            <div className="property-card">
                                <p>Java is a high-level, object-oriented programming language invented by James Gosling in 1995.</p>
                                <p><strong>Key Characteristics:</strong></p>
                                <ul>
                                    <li><strong>Robust:</strong> Strong memory management and exception handling</li>
                                    <li><strong>Portable:</strong> Write once, run anywhere (WORA) with JVM</li>
                                    <li><strong>Hybrid Model:</strong> Combines compiled and interpreted approaches</li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-laptop"></i> Uses of Java</h3>
                                <ul>
                                    <li><strong>Web Development:</strong> Spring, Spring Boot, JSP</li>
                                    <li><strong>Mobile Apps:</strong> Android development</li>
                                    <li><strong>Desktop Apps:</strong> JavaFX, Swing</li>
                                    <li><strong>Enterprise Apps:</strong> Java EE</li>
                                    <li><strong>Game Development:</strong> Game engines and simple games</li>
                                </ul>
                            </div>
                        </section>

                        <section id="features" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-star"></i> Java Features</h2>
                            <div className="property-card">
                                <ul>
                                    <li><strong>Simple:</strong> Easy to learn with clean syntax</li>
                                    <li><strong>Object-Oriented:</strong> Follows OOP principles</li>
                                    <li><strong>Platform Independent:</strong> Runs on any platform with JVM</li>
                                    <li><strong>Portable:</strong> Can be moved between platforms</li>
                                    <li><strong>Robust:</strong> Strong memory management</li>
                                    <li><strong>Secure:</strong> Built-in security features</li>
                                    <li><strong>Interpreted:</strong> Bytecode interpreted by JVM</li>
                                    <li><strong>Multi-threaded:</strong> Supports concurrent execution</li>
                                </ul>
                            </div>
                        </section>

                        <section id="components" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Java Components</h2>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-box-seam"></i> JDK (Java Development Kit)</h3>
                                <ul>
                                    <li>It stands for Java Development Kit.</li>
                                    <li>JDK is a software which consists of JRE and development tools.</li>
                                    <li>In general, the developers will have JDK is installed in computer since they need to develop the code and run the code.</li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-play-circle"></i> JRE (Java Runtime Environment)</h3>
                                <ul>
                                    <li>It stands for Java Runtime Environment.</li>
                                    <li>JRE is a software which consists of JVM and library files.</li>
                                    <li>It is used for running the Java application.</li>
                                    <li>In general, JRE should be installed in the client systems.</li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-cpu"></i> JVM (Java Virtual Machine)</h3>
                                <ul>
                                    <li>It stands for Java Virtual Machine.</li>
                                    <li>It is an interpreter software which is used to convert byte code into native code.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="setup" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-tools"></i> Environment Setup</h2>
                            <div className="property-card">
                                <h3 className="h4">Steps to Set Up Java:</h3>
                                <ol>
                                    <li>Download and install JDK from Oracle</li>
                                    <li>Install an IDE (Eclipse, IntelliJ IDEA, etc.)</li>
                                    <li>Verify installation with <code>java -version</code></li>
                                </ol>
                            </div>
                        </section>

                        <section id="class" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-file-code"></i> Java Basics</h2>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-file-earmark-binary"></i> Class</h3>
                                <ul>
                                    <li>It is a blueprint or template used to create an object.</li>
                                    <li>It consists of data members and methods.</li>
                                </ul>
                                <pre><code>{`// Syntax
class ClassName {
    Data members (variables)
    Methods(){
       // statements
    }
}`}</code></pre>
                                <div className="example-box">
                                    <h5>Example:</h5>
                                    <pre><code>{`class Demo {
    int id = 1;
    String name = "Dhoni";
    
    void greeting() {
        System.out.println("Good afternoon");
    }
}`}</code></pre>
                                </div>
                            </div>

                            <section className="mb-5" id='variables'>
                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-tag"></i> Variables</h3>
                                    <p>It is a container used to store the values.</p>
                                    <p><strong>Syntax:</strong> <code>datatype varName = value;</code></p>
                                    <p><strong>Types:</strong></p>
                                    <ul>
                                        <li><strong>Instance variable:</strong> If a variable is created inside class</li>
                                        <li><strong>Local variable:</strong> If a variable is created inside method</li>
                                        <li><strong>Reference variable:</strong> If a variable is points to an object</li>
                                    </ul>
                                    <div className="example-box">
                                        <h5>Example:</h5>
                                        <pre><code>{`int a = 10; // instance variable

void method() {
    int b = 20; // local variable
}`}</code></pre>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-5" id="methods">
                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-code-square"></i> Methods</h3>
                                    <p>It is a block of code which will be executed whenever it is been called.</p>
                                    <p><strong>Syntax:</strong></p>
                                    <pre><code>{`returnType methodName(parameters) {
    // statements
}`}</code></pre>
                                    <div className="example-box">
                                        <h5>Examples:</h5>
                                        <pre><code>{`void greet() {
    System.out.println("Hello");
}

int add(int a, int b) {
    return a + b;
}`}</code></pre>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-5" id="objects">
                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-box"></i> Objects</h3>
                                    <ul>
                                        <li>It is a real-world entity which consists of state and behaviour.</li>
                                        <li>State represents the characteristics of an object.</li>
                                        <li>Behaviour represents the functionality of an object.</li>
                                        <li>It is the instance of the class.</li>
                                    </ul>
                                    <p><strong>Syntax:</strong> <code>ClassName refVariable = new ClassName();</code></p>
                                    <div className="example-box">
                                        <h5>Example:</h5>
                                        <pre><code>{`class Student
{
    int id = 1;
    String name = “Dhoni”;
    void greeting()
    {
        System.out.println(“Good afternoon”);
    }
    public static void main(String args[])
    {
        Student s1 = new Student();
        Student s2 = new Student();
        System.out.println(s1.id);
        System.out.println(s1.name);
        s1.greeting();
        s2.id = 2;
        s2.name = “Jadeja”;
        System.out.println(s2.id);
        System.out.println(s2.name);
    }
}`}</code></pre>
                                    </div>
                                    <h3 className="mb-3">Note:</h3>
                                    <ul>
                                        <li><b>public</b> - The main method should always be public since it should be accessible from anywhere.</li>
                                        <li><b>static</b> - The main method should always be static since it should start execution on its own without waiting for object creation.</li>
                                        <li><b>void</b> - The main method should always be void since it has no return type.</li>
                                        <li><b>main()</b> - method name</li>
                                        <li><b>String args[]</b> - parameters</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="mb-5" id="datatypes">
                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-list-ol"></i> Data Types</h3>
                                    <p>The type of value can be described as data is called datatype.</p>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Data Type</th>
                                                <th>Size</th>
                                                <th>Range</th>
                                                <th>Default</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr><td>byte</td><td>1 byte</td><td>-128 to 127</td><td>0</td></tr>
                                            <tr><td>short</td><td>2 bytes</td><td>-32768 to 32767</td><td>0</td></tr>
                                            <tr><td>int</td><td>4 bytes</td><td>-2^31 to 2^31-1</td><td>0</td></tr>
                                            <tr><td>long</td><td>8 bytes</td><td>-2^63 to 2^63-1</td><td>0</td></tr>
                                            <tr><td>float</td><td>4 bytes</td><td>6-7 digits</td><td>0.0</td></tr>
                                            <tr><td>double</td><td>8 bytes</td><td>15 digits</td><td>0.0</td></tr>
                                            <tr><td>char</td><td>2 bytes</td><td>0 to 65535</td><td>'\u0000'</td></tr>
                                            <tr><td>boolean</td><td>1 bit</td><td>true/false</td><td>false</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section className="mb-5" id="type">
                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-arrow-left-right"></i> Type Casting</h3>
                                    <p><strong>Automatic (Widening):</strong> byte → short → char → int → long → float → double</p>
                                    <p><strong>Manual (Narrowing):</strong> double → float → long → int → char → short → byte</p>
                                    <div className="example-box">
                                        <h5>Examples:</h5>
                                        <pre><code>{`// Automatic
int a = 100;
double b = a; // 100.0

// Manual
double x = 15.50;
int y = (int)x; // 15`}</code></pre>
                                    </div>
                                </div>
                            </section>

                            <section id="operators" className="mb-5">
                                <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> Java Operators</h2>

                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-1-circle"></i> Unary Operators</h3>
                                    <pre className="mb-3"><code>{`int a = 10;
a++; // Increment (11)
a--; // Decrement (9)`}</code></pre>
                                </div>

                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-2-circle"></i> Arithmetic Operators</h3>
                                    <table className="operator-table">
                                        <thead>
                                            <tr>
                                                <th>Operator</th>
                                                <th>Description</th>
                                                <th>Example</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>+</td>
                                                <td>Addition</td>
                                                <td>10 + 20 = 30</td>
                                            </tr>
                                            <tr>
                                                <td>-</td>
                                                <td>Subtraction</td>
                                                <td>20 - 10 = 10</td>
                                            </tr>
                                            <tr>
                                                <td>*</td>
                                                <td>Multiplication</td>
                                                <td>10 * 20 = 200</td>
                                            </tr>
                                            <tr>
                                                <td>/</td>
                                                <td>Division</td>
                                                <td>20 / 10 = 2</td>
                                            </tr>
                                            <tr>
                                                <td>%</td>
                                                <td>Modulus</td>
                                                <td>20 % 10 = 0</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-3-circle"></i> Assignment Operators</h3>
                                    <table className="operator-table">
                                        <thead>
                                            <tr>
                                                <th>Operator</th>
                                                <th>Example</th>
                                                <th>Equivalent To</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>=</td>
                                                <td>x = y</td>
                                                <td>x = y</td>
                                            </tr>
                                            <tr>
                                                <td>+=</td>
                                                <td>x += y</td>
                                                <td>x = x + y</td>
                                            </tr>
                                            <tr>
                                                <td>-=</td>
                                                <td>x -= y</td>
                                                <td>x = x - y</td>
                                            </tr>
                                            <tr>
                                                <td>*=</td>
                                                <td>x *= y</td>
                                                <td>x = x * y</td>
                                            </tr>
                                            <tr>
                                                <td>/=</td>
                                                <td>x /= y</td>
                                                <td>x = x / y</td>
                                            </tr>
                                            <tr>
                                                <td>%=</td>
                                                <td>x %= y</td>
                                                <td>x = x % y</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-4-circle"></i> Comparison Operators</h3>
                                    <table className="operator-table">
                                        <thead>
                                            <tr>
                                                <th>Operator</th>
                                                <th>Description</th>
                                                <th>Example</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>==</td>
                                                <td>Equal to</td>
                                                <td>10 == 20 → false</td>
                                            </tr>
                                            <tr>
                                                <td>!=</td>
                                                <td>Not equal</td>
                                                <td>10 != 20 → true</td>
                                            </tr>
                                            <tr>
                                                <td>!==</td>
                                                <td>Strict not equal</td>
                                                <td>10 !== "10" → true</td>
                                            </tr>
                                            <tr>
                                                <td>&gt;</td>
                                                <td>Greater than</td>
                                                <td>20 &gt; 10 → true</td>
                                            </tr>
                                            <tr>
                                                <td>&gt;=</td>
                                                <td>Greater than or equal</td>
                                                <td>20 &gt;= 10 → true</td>
                                            </tr>
                                            <tr>
                                                <td>&lt;</td>
                                                <td>Less than</td>
                                                <td>20 &lt; 10 → false</td>
                                            </tr>
                                            <tr>
                                                <td>&lt;=</td>
                                                <td>Less than or equal</td>
                                                <td>20 &lt;= 10 → false</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-5-circle"></i> Logical Operators</h3>
                                    <table className="operator-table">
                                        <thead>
                                            <tr>
                                                <th>Operator</th>
                                                <th>Description</th>
                                                <th>Example</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>&amp;&amp;</td>
                                                <td>Logical AND</td>
                                                <td>(10 == 10 &amp;&amp; 20 == 20) → true</td>
                                            </tr>
                                            <tr>
                                                <td>||</td>
                                                <td>Logical OR</td>
                                                <td>(10 == 20 || 20 == 20) → true</td>
                                            </tr>
                                            <tr>
                                                <td>!</td>
                                                <td>Logical NOT</td>
                                                <td>!(10 == 20) → true</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-6-circle"></i> Bitwise Operators</h3>
                                    <table className="operator-table">
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
                                    <h3 className="h4"><i className="bi bi-6-circle"></i> Ternary Operator</h3>
                                    <pre className="mb-3"><code>{`// Syntax:
(condition) ? expression1 : expression2;

// Example:
int a = 70;
int b = 20;
int max = (a > b) ? a : b;
System.out.println(max); // 70`}</code></pre>
                                </div>
                            </section>

                            <section id="conditionals" className="mb-5">
                                <h2 className="h2 mb-3"><i className="bi bi-diagram-2"></i> Conditional Statements</h2>

                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-1-circle"></i> if Statement</h3>
                                    <p className="mb-3">If block will get executed whether the condition is true.</p>
                                    <pre className="mb-3"><code>{`// Syntax:
if(condition) {
  // statements
}

// Example:
int a = 18;
if(a >= 18) {
  System.out.println("You are adult");
}`}</code></pre>
                                </div>

                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-2-circle"></i> if-else Statement</h3>
                                    <p className="mb-3">If block will get executed whether the condition is true and else block will get executed whether the condition is false.</p>
                                    <pre className="mb-3"><code>{`// Syntax:
if(condition) {
  // statements
} else {
  // statements
}

// Example:
int a = 15;
if(a >= 18) {
  System.out.println("You are adult");
} else {
  System.out.println("You are not adult");
}`}</code></pre>
                                </div>

                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-3-circle"></i> if-else if Statement</h3>
                                    <pre className="mb-3"><code>{`// Syntax:
if(condition1) {
  // statements
} else if(condition2) {
  // statements
} else {
  // statements
}

// Example:
int marks = 85;
if(marks > 90) {
  System.out.println("Grade O");
} else if(marks > 80) {
  System.out.println("Grade A+");
} else if(marks > 70) {
  System.out.println("Grade A");
} else {
  System.out.println("Grade B");
}`}</code></pre>
                                </div>
                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-4-circle"></i> nested if Statement</h3>
                                    <pre className="mb-3"><code>{`// Syntax:
if(condition1) {
    if(condition2) {
      // statements
    } 
    else {
      // statements
    }
else{
  // statements
}

// Example:
int marks = 96;
if(marks > 90) {
  if(marks > 95) {
    System.out.println("Excellant");
  }
  else{
    System.out.println("Very Good");
  } 
} else {
  System.out.println("Good");
}`}</code></pre>
                                </div>

                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-5-circle"></i> Switch Statement</h3>
                                    <pre className="mb-3"><code>{`// Syntax:
switch(expression) {
  case value1:
    // statements
    break;
  case value2:
    // statements
    break;
  default:
    // statements
}

// Example:
let a = 2;
switch(a) {
  case 1:
    System.out.println("Fan switch");
    break;
  case 2:
    System.out.println("Light switch");
    break;
  case 3:
    System.out.println("AC switch");
    break;
  default:
    System.out.println("Invalid switch");
}`}</code></pre>
                                </div>
                            </section>

                            <section id="loops" className="mb-5">
                                <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> Loops in Java</h2>
                                <p className="mb-3">It is a block of code which will be executed repeatedly until the condition becomes false.</p>
                                <h4 className="h4 mb-3">Types of loop:</h4>

                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-1-circle"></i> for Loop</h3>
                                    <pre className="mb-3"><code>{`// Syntax:
for(initialization; condition; increment/decrement) {
  // statements
}

// Example:
for(int i = 0; i < 5; i++) {
  System.out.println(i); // 0,1,2,3,4
}`}</code></pre>
                                </div>

                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-2-circle"></i> while Loop</h3>
                                    <pre className="mb-3"><code>{`// Syntax:
initialization;
while(condition) {
  // statements
  increment/decrement;
}

// Example:
let i = 1;
while(i <= 5) {
  System.out.println(i); // 1,2,3,4,5
  i++;
}`}</code></pre>
                                </div>

                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-3-circle"></i> do-while Loop</h3>
                                    <pre className="mb-3"><code>{`// Syntax:
initialization;
do {
  // statements
  increment/decrement;
} while(condition);

// Example:
let i = 1;
do {
  System.out.println(i); // 1,2,3,4,5
  i++;
} while(i <= 5);`}</code></pre>
                                </div>
                            </section>

                            <section className="mb-5" id="jump">
                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-skip-forward"></i> Jump Statements</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="property-card">
                                                <h5>break</h5>
                                                <p>Terminates the loop or switch statement</p>
                                                <div className="example-box">
                                                    <pre><code>{`for(int i=1; i<=5; i++) {
    if(i == 3) break;
    System.out.println(i);
}
// Output: 1 2`}</code></pre>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="property-card">
                                                <h5>continue</h5>
                                                <p>Skips the current iteration</p>
                                                <div className="example-box">
                                                    <pre><code>{`for(int i=1; i<=5; i++) {
    if(i == 3) continue;
    System.out.println(i);
}
// Output: 1 2 4 5`}</code></pre>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-5" id="scanner">
                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-keyboard"></i> Scanner Class</h3>
                                    <p>Used to get user input</p>
                                    <pre><code>{`import java.util.Scanner;

Scanner sc = new Scanner(System.in);
int num = sc.nextInt();
String str = sc.nextLine();`}</code></pre>
                                    <p><strong>Input Methods:</strong></p>
                                    <ul>
                                        <li><code>nextInt()</code> - integer</li>
                                        <li><code>nextByte()</code> - byte</li>
                                        <li><code>nextShort()</code> - short</li>
                                        <li><code>nextDouble()</code> - double</li>
                                        <li><code>nextFloat()</code> - float</li>
                                        <li><code>nextBoolean()</code> - boolean</li>
                                        <li><code>nextChar()</code> - char</li>
                                        <li><code>next()</code> - single word</li>
                                        <li><code>nextLine()</code> - entire line</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="mb-5" id="arrays">
                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-collection"></i> Arrays</h3>
                                    <ul>
                                        <li>It is used to store multiple values in a single variable.</li>
                                        <li>It works based on index values.</li>
                                        <li>Where index values starts from 0 to n-1.</li>
                                        <li>Where n is the length of an array.</li>
                                    </ul>
                                    <h4 className="h5">Advantages</h4>
                                    <ol>
                                        <li>Code Optimization</li>
                                        <li>Random access</li>
                                    </ol>
                                    <h4 className="h5">Disadvantages</h4>
                                    <ol>
                                        <li>Fixed size</li>
                                        <li>Only similar datatypes can be stored</li>
                                    </ol>
                                    <h4 className="mb-3">Types of Array</h4>
                                    <ol>
                                        <li>Single Dimension</li>
                                        <li>Multi Dimension</li>
                                        <li>Jagged Array</li>
                                    </ol>
                                </div>
                                <div className="property-card">
                                    <h5><i className="bi bi-1-circle me-2"></i>Single Dimension</h5>
                                    <p>Single row only.</p>
                                    <pre><code>{`// Declaration
int[] arr;
int arr[];
int []arr;

// Initialization
int[] arr = {10, 20, 30}; // direct
int[] arr = new int[3]; // indirect
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;`}</code></pre>
                                </div>
                                <div className="property-card">
                                    <h5>Single Dimension Example</h5>
                                    <pre><code>{`import java.util.Scanner ;

class SingleDimension
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of an array:");
        int size = sc.nextInt();
        int sum = 0;
        int arr[] = new int[size];
        System.out.println("Enter the array values:");
        for(int i=0;i<size;i++){
            arr[i] = sc.nextInt();
        }
        for(int i=0;i<size;i++){
            sum = sum+arr[i];
        }
        System.out.println("The sum of array values is: "+sum);
    }
}`}</code></pre>
                                </div>
                                <div className="property-card">
                                    <h5><i className="bi bi-2-circle me-2"></i>Multi Dimension</h5>
                                    <p>Multiple rows and columns.</p>
                                    <pre><code>{`// Declaration
int arr[][];

// Initialization
int[][] arr = {{1,2}, {3,4}};// direct
int[][] arr = new int[2][2];// indirect
arr[0][0] = 10;
arr[0][1] = 20;
arr[1][0] = 30;
arr[1][1] = 40;`}</code></pre>
                                </div>
                                <div className="property-card">
                                    <h5>Multi Dimension Example</h5>
                                    <pre><code>{`import java.util.Scanner;

class MultiDimension
{
    public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the size of an array:");
    int size = sc.nextInt();
    int arr1[][] = new int[size][size];
    int arr2[][] = new int[size][size];
    int arr3[][] = new int[size][size];
    System.out.println("Enter array 1 values: ");
    for(int i=0;i<size;i++){
        for(int j=0;j<size;j++){
            arr1[i][j] = sc.nextInt();
        }
    }
    System.out.println("Enter array 2 values: ");
    for(int i=0;i<size;i++){
        for(int j=0;j<size;j++){
            arr2[i][j] = sc.nextInt();
        }
    }   
    for(int i=0;i<size;i++){
        for(int j=0;j<size;j++){
            arr3[i][j] = arr1[i][j] + arr2[i][j];
            System.out.print(arr3[i][j]);
        }
        System.out.println();
    }
}`}</code></pre>
                                </div>
                                <div className="property-card">
                                    <h5><i className="bi bi-3-circle"></i>Jagged Array</h5>
                                    <p>Number of rows is fixed and columns can be varying.</p>
                                    <pre><code>{`// Syntax
datatype varName[][] = new int[rowsize][];
varName[0] = new int[colsize]

// Example
int[][] arr = new int[3][];
arr[0] = new int[2];
arr[1] = new int[5];
arr[2] = new int[3];`}</code></pre>
                                </div>
                                <div className="property-card">
                                    <h5>Jagged Array Examples</h5>
                                    <pre><code>{`import java.util.Scanner;

class JaggedArray
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the row size of an array:");
        int row = sc.nextInt(); // 3
        int arr[][] = new int[row][];
        arr[0] = new int[3];
        arr[1] = new int[2];
        arr[2] = new int[5];
        System.out.println("Enter array values: ");
        for(int i=0;i<size;i++){
            for(int j=0;j<size;j++){
                arr1[i][j] = sc.nextInt();
            }
        }
        for(int i=0;i<size;i++){
            for(int j=0;j<size;j++){
                System.out.print(arr1[i][j]);
            }
            System.out.println();
        }
    }
}`}</code></pre>
                                </div>
                            </section>

                            <section className="mb-5" id="strings">
                                <div className="property-card">
                                    <h3 className="h4"><i className="bi bi-textarea-t"></i> Strings</h3>
                                    <p>Collection of characters stored within " " quotes.</p>
                                    <p>It is used to store the text data.</p>

                                    <h5>String Creation</h5>
                                    <pre><code>{`// Using literal
String s1 = "Hello";

// Using new keyword
String s2 = new String("Hello");

// From char array
char[] ch = {'H','e','l','l','o'};
String s3 = String.valueOf(ch);
System.out.println(s3);`}</code></pre>
                                    <h5>String Methods</h5>
                                    <pre><code>{`length() - "Hello".length() → 5
charAt(1) - "Hello".charAt(1) → 'e'
indexOf('l') - "Hello".indexOf('l') → 2
toUpperCase() - "Hello".toUpperCase() → "HELLO"
toLowerCase() - "Hello".toLowerCase() → "hello"
trim() - " Hello ".trim() → "Hello"
equals() - "Hello".equals("hello") → false
equalsIgnoreCase() - "Hello".equalsIgnoreCase("hello") → true
replace() -> used to replace the old value with the new value.
concat() -> used to add two strings.
valueOf() -> used to convert the character array into string.`}</code></pre>
                                </div>
                            </section>
                        </section>

                        <section id="oops" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-shapes"></i> OOP Concepts</h2>
                            <div className="property-card">
                                <h3 className="h4">Four Pillars of OOP:</h3>
                                <ol>
                                    <li><strong>Encapsulation:</strong> Binding data and methods together</li>
                                    <li><strong>Inheritance:</strong> Acquiring properties from parent class</li>
                                    <li><strong>Polymorphism:</strong> One name many forms</li>
                                    <li><strong>Abstraction:</strong> Hiding implementation details</li>
                                </ol>
                            </div>
                        </section>

                        <section id="inheritance" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> Inheritance</h2>
                            <div className="property-card">
                                <p>All the properties and methods will be acquired from parent class to child class is called inheritance.</p>
                                <h4>Parent Class</h4>
                                <p>The class which gives properties and methods are called parent class / base class and superclass.</p>
                                <h4>Child Class</h4>
                                <p>The class which acquires properties and methods from parent class is called child class / sub class / derived class and extended class.</p>
                                <p><strong>Types:</strong></p>
                                <ul>
                                    <li><strong>Single Level:</strong> One parent → one child</li>
                                    <li><strong>Multi Level:</strong> Grandparent → parent → child</li>
                                    <li><strong>Hierarchical:</strong> One parent → multiple children</li>
                                    <li><strong>Multiple:</strong> Multiple parents → one child (through interfaces)</li>
                                    <li><strong>Hybrid:</strong> Combination of multiple and hierarchical</li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-1-circle me-2"></i>Single Level Inheritance</h3>
                                <img src={single} className='img-fluid' alt="" /><br /><br />
                                <pre><code>{`class Parent {
    void abc() {
        System.out.println("Parent Method");
    }
}

class Child extends Parent {
    void def() {
        System.out.println("Child Method");
    }
}

// Driver class
class SingleLevel{
    public static void main(String args[]){
        Child obj = new Child();
        obj.abc(); // Parent Method
        obj.def(); // Child Method
    }
}
`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-2-circle me-2"></i>Multi Level Inheritance</h3>
                                <img src={multilevel} alt="" className="img-fluid" /><br /><br />
                                <pre><code>{`class Grandpa {
    void xyz() { System.out.println("Grandpa Method"); }
}

class Parent extends Grandpa {
    void abc() { System.out.println("Parent Method"); }
}

class Child extends Parent {
    void def() { System.out.println("Child Method"); }
}

// Driver class
class MultiLevel{
    public static void main(String args[]){
        Child obj = new Child();
        obj.xyz(); // Grandpa Method
        obj.abc(); // Parent Method
        obj.def(); // Child Method
    }
}
`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-3-circle me-2"></i>Hierarchical Inheritance</h3>
                                <img src={hierarchical} alt="" style={{width:'75%',height:'400px'}} className="img-fluid" /><br /><br />
                                <pre><code>{`class Parent {
    void xyz() { System.out.println("Parent Method"); }
}

class Child1 extends Parent {
    void abc() { System.out.println("Child1 Method"); }
}

class Child2 extends Parent {
    void def() { System.out.println("Child2 Method"); }
}

// Driver class
class Hierarchical{
    public static void main(String args[]){
        Child1 obj1 = new Child1();
        Child2 obj2 = new Child2();
        obj1.xyz(); // Parent Method
        obj1.abc(); // Child1 Method
        obj2.xyz(); // Parent Method
        obj2.def(); // Child2 Method
    }
}
`}</code></pre>
                            </div>
                        </section>

                        <section id="polymorphism" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-arrow-left-right"></i> Polymorphism</h2>
                            <div className="property-card">
                                <p>One name many forms (same method name with different implementations)</p>
                                <p><strong>Types:</strong></p>
                                <ul>
                                    <li><strong>Compile-time (Method Overloading):</strong> Same method name, different parameters in same class</li>
                                    <li><strong>Runtime (Method Overriding):</strong> Same method name, same parameters in different classes</li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h3 className="h4">Method Overloading</h3>
                                <pre><code>{`class Operator {
    void add(int a, int b) {
        System.out.println(a + b);
    }
    
    void add(int a, int b, int c) {
        System.out.println(a + b + c);
    }
    
    public static void main(String args[]){
        Operator o = new Operator();
        o.add(100, 4);    // 104
        o.add(120, 54, 56); // 230
    }
}`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4">Method Overriding</h3>
                                <pre><code>{`class Python {
    void level() {
        System.out.println("Easy");
    }
}

class CPP extends Python {
    void level() {
        System.out.println("Hard");
    }
}

// Driver class
class Overriding{
    public static void main(String args[]){
        Python p = new Python();
        CPP c = new CPP();
        p.level(); // Easy
        c.level(); // Hard
    }
}
`}</code></pre>
                            </div>
                        </section>

                        <section id="abstraction" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-eye-slash"></i> Abstraction</h2>
                            <div className="property-card">
                                <p>It is used to hide the details and showing only the essential information from the user.</p>
                                <h4 className='mb-3'>Steps for Abstraction:</h4>
                                <p>Step 1: If you want to create an abstract method there should be no method definition / implementation, it should have abstract key word in the method signature and it should end with semicolon.</p>
                                <pre>{`abstract void abc();`}</pre>
                                <p>Step 2: If there is one abstract method in a class then entire class must be abstract by nature.</p>
                                <pre><code>{`abstract class A{
    abstact void abc();
}`}</code></pre>

                                <p>Step 3: The abstract class can contain abstract method and non-abstract methods. An abstract class cannot be instantiation.</p>
                                <p>Step 4: If a class becoming a child of an abstract class, then it is also considered to be abstract class.</p>
                                <p>Step 5: To convert an abstract class into concrete class meaning to override all the abstract method present in a parent class.</p>
                                <p>Step 6: A concrete class can be instantiated. The first class which gives implementation for the abstract method is called to be concrete class.</p>

                                <pre><code>{`// Example
abstract class A
{
    abstract void abc();
}
//Concrete class
class B extends A
{
    void abc(){
        System.out.println(“Abstract method”);
    }
}
//Driver class
class Main
{
    public static void main(String args[])
    {
        B obj = new B();
        obj.abc();
    }
}`}</code></pre>
                            </div>
                        </section>

                        <section className="mb-5" id="constructor">
                            <h2 className="h2 mb-3"><i className="bi bi-buildings"></i> Constructor</h2>
                            <div className="property-card">
                                <p>It is a special type of method it will be called automatically when the object is been created.</p>
                                <pre><code>{`//Syntax
ClassName(parameters)
{
    //statements;
}`}</code></pre>

                                <h4 className='mb-3'>Types of Constructor:</h4>
                                <ol>
                                    <li>Default / Non-Parameterized Constructor</li>
                                    <li>Parameterized Constructor</li>
                                </ol>
                                <h4 className="mb-3">Default Constructor Example</h4>
                                <pre><code>{`//Example
class Operator{
    Operator()
    {
        int a = 10;
        int b = 100;
        System.out.println(a+b);
        System.out.println("Constructor is called ");
    }
}
//Driver class
class Main
{
    public static void main(String args[])
    {
        Operator o = new Operator(); // constructor called
    }
}`}</code></pre>
                                <h4 className="mb-3">Parameterized Constructor Example</h4>
                                <pre><code>{`//Example
class Operator{
    Operator(int a,int b)
    {
        System.out.println(a+b);
        System.out.println("Constructor is called ");
    }
}
//Driver class
class Main
{
    public static void main(String args[])
    {
        Operator o = new Operator(100,50); // constructor called
    }
}`}</code></pre>
                            </div>
                        </section>

                        <section className="mb-5" id="superandthis">
                            <h2 className="mb-3"><i className="bi bi-key me-2"></i>Super and This Keyword</h2>
                            <div className="property-card">
                                <ul>
                                    <li>super - It is a keyword which refer to super class (parent class).</li>
                                    <li>super () - Refers to superclass non parameterized constructor.</li>
                                    <li>super(parameters) - Refers to superclass parameterized constructor.</li>
                                    <li>super.varName - Refers to superclass variable.</li>
                                    <li>super.methodName() - Refers to superclass method.</li><br />
                                    <li>this - It is a keyword which refer to current class.</li>
                                    <li>this () - Refers to current class non parameterized constructor.</li>
                                    <li>this (parameters) - Refers to current class parameterized constructor.</li>
                                    <li>this.varName - Refers to current class variable.</li>
                                    <li>this.methodName() - Refers to current class method.</li>
                                </ul>
                                <pre><code>{`//Example
class A
{
    A()
    {
        this(10);
        System.out.println(“A Non Param Cons”);
    }
    A(int a)
    {
        System.out.println(“A Param Cons”);
    }
    int x = 100;
    void abc()
    {
        System.out.println(“abc method 1”);
    }
}
class B extends A
{
    B()
    {
        System.out.println(“B Non Param Cons”);
    }
    int x = 200;
    int y = 150;
    void abc()
    {
        System.out.println(“abc method 2”);
    }
    void def()
    {
        this.abc();
        super.abc();
        System.out.println(this.y);
        System.out.println(y);
        System.out.println(super.x);
        System.out.println(this.x);
    }
}
//Driver class
class Main
{
    public static void main(String args[])
    {
        B obj = new B();
        obj.def();
    }
}`}</code></pre>
                                <p><b>Note:</b> Every constructor will call the super class constructor by default.</p>
                            </div>
                        </section>

                        <section className="mb-5" id="interfaces">
                            <h2 className="mb-3"><i className="bi bi-copy me-2"></i>Interfaces</h2>
                            <div className="property-card">
                                <ul>
                                    <li>Interface is a blueprint of class.</li>
                                    <li>In an interface all the data members will be public static final in nature and all the methods will be public abstract in nature.</li>
                                    <li>In simple words interface contains static constraints and abstract methods.</li>
                                </ul>
                                <pre><code>{`//Syntax
interface InterfaceName
{
    dm;
    methods();
}`}</code></pre>
                                <pre><code>{`//Example
interface A
{
    int x = 20;
    void abc();
}
class B implements A
{
    public void abc()
    {
        System.out.println(“Interface method”);
    }
}
//Driver class
class Main
{
    public static void main(String args[])
    {
        B obj = new B();
        obj.abc();
        System.out.println(obj.x);
    }
}`}</code></pre>
                                <pre><code>{`//On Compiling
interface A
{
    public static final int x = 20;
    public abstract void abc();
}`}</code></pre>
                            </div>
                            <div className="property-card">
                                <h3 className="mb-3">Access Modifier/Specifier</h3>
                                <ol>
                                    <li><b>private</b> - accessible only within the class.</li>
                                    <li><b>public</b> - accessible from anywhere.</li>
                                    <li><b>protected</b> - accessible within the package and also outside the package but it must be a subclass.</li>
                                    <li><b>default</b> - accessible only within the package.</li>
                                </ol>
                            </div>
                            <div className="property-card">
                                <h3 className="h4">Multiple Inheritance with Interfaces</h3>
                                <img src={multiple} alt="" className="img-fluid" /><br /><br />
                                <pre><code>{`interface Father {
    void xyz();
}

interface Mother {
    void abc();
}

class Child implements Father, Mother {
    public void xyz() {
        System.out.println("Father method");
    }
    
    public void abc() {
        System.out.println("Mother method");
    }
}

// Driver class
class Multiple{
    public static void main(String args[]){
        Child c = new Child();
        c.xyz();
        c.abc();
    }
}
`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4">Hybrid Inheritance with Interfaces</h3>
                                <img src={hybrid} alt="" className="img-fluid" /><br /><br />
                                <pre><code>{`interface Z {
    void xyz();
}

interface A extends Z {
    void abc();
}

interface B extends Z {
    void lmn();
}

class C implements A,B {
    public void xyz() {
        System.out.println("Z method");
    }
    
    public void abc() {
        System.out.println("A method");
    }
    
    public void lmn() {
        System.out.println("B method");
    }
}

// Driver class
class Hybrid{
    public static void main(String args[]){
        C obj = new C();
        obj.xyz();
        obj.abc();
        obj.lmn();
    }
}
`}</code></pre>
                            </div>
                        </section>

                        <section id="encapsulation" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-capsule"></i> Encapsulation</h2>
                            <div className="property-card">
                                <p>Binding data (variables) and code (methods) together as a single unit</p>
                                <p><strong>Implementation:</strong> Using private variables with public getter/setter methods</p>
                                <pre><code>{`class ATM {
    private int amount; // private variable
    
    // public getter
    public int getAmount() {
        return amount;
    }
    
    // public setter
    public void setAmount(int a) {
        amount = a;
    }
}

// Usage
ATM a = new ATM();
a.setAmount(10000);
System.out.println(a.getAmount()); // 10000`}</code></pre>
                            </div>
                        </section>

                        <section className="mb-5" id='oops-program'>
                            <h2 className="mb-3">OOPS Example</h2>
                            <div className="property-card">
                                <pre><code>{`//Example
//Encapsulation
class A
{
    private int x;
    void setX(int a)
    {
        this.x = a;
    }
    int getX()
    {
        return x;
    }
}
//Abstraction & Compile time polymorphism
abstract class B
{
    abstract void abc();
    void abc(char c)
    {
        System.out.println("CSK);
    }
}
//Inheritance & Runtime polymorphism
class C extends B
{
    void abc()
    {
        System.out.println(“PBKS”);
    }
}
//Driver class
class Main
{
    public static void main(String args[])
    {
        A obj1 = new A();
        C obj2 = new C();
        obj1.setX (2000);
        System.out.println(obj1.getX());
        obj2.abc();
    }
}`}</code></pre>
                            </div>
                        </section>

                        <section id="exception" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-exclamation-triangle"></i> Exception Handling</h2>
                            <div className="property-card">
                                <ul>
                                    <li>Abnormal condition.</li>
                                    <li>In a program if we receive an exception it leads to abnormal termination of a program, so it is mandatory to handle an exception.</li>
                                    <li>The valid statements will not be executed if exception occurs.</li>
                                </ul>
                                <p><strong>Types:</strong></p>
                                <img src={exceptions} alt="" className="img-fluid w-100" />
                                <ul>
                                    <li><strong>Checked:</strong> Compile-time exceptions (IOException, SQLException)</li>
                                    <li><strong>Unchecked:</strong> Runtime exceptions (NullPointerException, ArrayIndexOutOfBoundsException)</li>
                                </ul>
                                <h4 className="mb-3">Ways to handle an Exception:</h4>
                                <ul>
                                    <li><b>try</b> - The try is a block inside which the statement is going to throw an exception to be placed.</li>
                                    <li><b>catch</b> - The catch block will get executed when the suitable exception is being called.</li>
                                    <li><b>finally</b> - This block will get executed whether the exception is handled or not.</li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h3 className="h4">Arithmetic Exception</h3>
                                <pre><code>{`try {
    int result = 10 / 0;
} catch(ArithmeticException e) {
    System.out.println("Cannot divide by zero");
} finally {
    System.out.println("This always executes");
}`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4">Multiple catch blocks</h3>
                                <pre><code>{`try {
    int[] arr = new int[5];
    arr[10] = 50; // ArrayIndexOutOfBoundsException
} catch(ArithmeticException e) {
    System.out.println("Arithmetic Exception");
} catch(ArrayIndexOutOfBoundsException e) {
    System.out.println("Array Index Out Of Bounds");
}`}</code></pre>
                            </div>
                            <div className="property-card">
                                <h3 className="h4">Number Format Exception</h3>
                                <pre><code>{`try {
    String s = "hello";
    int i = Integer.parseInt(s);
    System.out.println("Valid");
} catch(NumberFormatException e) {
    System.out.println("Invalid");
} finally {
    System.out.println("This always executes");
}`}</code></pre>
                            </div>


                            <div className="property-card">
                                <h3 className="h4">throw and throws</h3>
                                <pre><code>{`// throw - manually throw exception
void checkAge(int age) {
    if(age < 18) {
        throw new ArithmeticException("Access denied");
    }
}

// throws - declare exceptions method might throw
void myMethod() throws IOException {
    // code that may throw IOException
}`}</code></pre>
                            </div>
                        </section>

                        <section className="mb-5" id='final-finally-finalize'>
                            <h2 className="mb-3">Difference between final, finally and finalize:</h2>
                            <div className="property-card">
                                <table className="operator-table">
                                    <thead>
                                        <tr>
                                            <th>final</th>
                                            <th>finally</th>
                                            <th>finalize</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>It is a keyword.</td>
                                            <td>It is a block.</td>
                                            <td>It is a method.</td>
                                        </tr>
                                        <tr>
                                            <td>It is constant.</td>
                                            <td>Executed whether the exception is handled or not.</td>
                                            <td>It is a method to cleanup the unreferenced object in memory.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="collections" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-collection"></i> Collections Framework</h2>
                            <div className="property-card">
                                <ul>
                                    <li>Collections in java is a framework that provides an architecture to store and manipulate the group of objects.</li>
                                    <li>All the operations that you perform on a data such as searching, sorting, insertion, manipulation, deletion etc. can be performed by Java Collections.</li>
                                    <li>Java Collection framework provides many interfaces (Set, List, Queue, Deque etc.) and classes (ArrayList, Vector, LinkedList, PriorityQueue, HashSet, LinkedHashSet, TreeSet etc).</li>
                                </ul>
                                <img src={collections} className='img-fluid w-100' alt="" />

                            </div>

                            <div className="property-card">
                                <h3 className="h4">ArrayList</h3>
                                <ul>
                                    <li>Java ArrayList class uses a dynamic array for storing the elements.</li>
                                    <li>It inherits AbstractList class and implements List interface.</li>
                                    <li>The important points about Java ArrayList class are</li>
                                    <ol>
                                        <li>Java ArrayList class can contain duplicate elements.</li>
                                        <li>Java ArrayList class maintains insertion order.</li>
                                        <li>Java ArrayList class is non synchronized.</li>
                                        <li>Java ArrayList allows random access because array works at the index basis.</li>
                                        <li>In Java ArrayList class, manipulation is slow because a lot of shifting needs to be occurred if any element is removed from the array list.</li>
                                    </ol>
                                </ul>
                                <pre><code>{`import java.util.ArrayList;

ArrayList<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
list.add("Cherry");

System.out.println(list); // [Apple, Banana, Cherry]
System.out.println(list.get(1)); // Banana
list.remove(0); // removes Apple
System.out.println(list.size()); // 2`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="mb-3">ArrayList Methods</h3>
                                <ul>
                                    <li>add() - Add an item to the list</li>
                                    <li>addAll() - Add a collection of items to the list</li>
                                    <li>clear() - Remove all items from the list</li>
                                    <li>clone() - Create a copy of the ArrayList</li>
                                    <li>indexOf() - Return the position of the first occurrence of an item in the list</li>
                                    <li>lastIndexOf() - Return the position of the last occurrence of an item in the list</li>
                                    <li>get() - Return the item at a specific position in the list</li>
                                    <li>set() - Replace an item at a specified position in the list</li>
                                    <li>size() - Return the number of items in the list</li>
                                    <li>sort() - Sort the list</li>
                                    <li>contains() - Checks whether an item exist in the list</li>
                                    <li>remove() - Remove an item from the list</li>
                                </ul>
                                <pre>{`Note: These methods will applicable for both Array list and Linked list`}</pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4">LinkedList</h3>
                                <ul>
                                    <li>In Java, a LinkedList is a class that implements the List interface and represents a linked list data structure.</li>
                                    <li>Unlike arrays, which store elements in contiguous memory locations, a linked list stores elements as nodes, where each node contains the element itself and a reference (or pointer) to the next node in the sequence.</li>
                                    <li>The important points about Java LinkedList are:</li>
                                    <ol>
                                        <li>Java LinkedList class can contain duplicate elements.</li>
                                        <li>Java LinkedList class maintains insertion order.</li>
                                        <li>Java LinkedList class is non synchronized.</li>
                                        <li>In Java LinkedList class, manipulation is fast because no shifting needs to occur.</li>
                                        <li>Java LinkedList class can be used as a list, stack or queue.</li>
                                    </ol>
                                </ul>
                                <pre><code>{`import java.util.LinkedList;

LinkedList<String> ll = new LinkedList<>();
ll.add("Ravi");
ll.add("Vijay");
ll.add("Ajay");

System.out.println(ll); // [Ravi, Vijay, Ajay]
ll.addFirst("First");
ll.addLast("Last");
System.out.println(ll.peek()); // First (retrieves but doesn't remove)`}</code></pre>
                            </div>
                            <div className="property-card">
                                <h3 className="mb-3">LinkedList Methods</h3>
                                <ul>
                                    <li>offer() - Adds an item at the end of the list</li>
                                    <li>peek() - Retrieves the first item in the list</li>
                                    <li>poll() - Retrieves and removes the first item in the list.</li>
                                    <li>pop() - Returns the first element in the list.</li>
                                    <li>remove() - Remove an item from the list</li>
                                </ul>

                            </div>
                            <div className="property-card">
                                <h3 className="h4">HashSet</h3>
                                <ul>
                                    <li>In Java, a HashSet is a part of the java.util package and implements the Set interface.</li>
                                    <li>It stores elements in a hash table and does not allow duplicate elements.</li>
                                    <li>The important points about Java HashSet are:</li>
                                    <ol>
                                        <li>Does not maintain insertion order.</li>
                                        <li>Allows null element.</li>
                                        <li>No duplicates allowed.</li>
                                        <li>Backed internally by a HashMap.</li>
                                        <li>Performance is faster than ArrayList for search operations due to hashing.</li>
                                    </ol>
                                </ul>
                                <pre><code>{`import java.util.HashSet;

HashSet<String> hs = new HashSet<>();
hs.add("Ravi");
hs.add("Vijay");
hs.add("Ajay");
hs.add("Ravi"); // Duplicate, won't be added

System.out.println(hs); // [Vijay, Ajay, Ravi] - Order may vary`}</code></pre>
                            </div>
                            <div className="property-card">
                                <h3 className="mb-3">HashSet  Methods</h3>
                                <ul>
                                    <li>add(element) - Adds the specified element if it's not already present.</li>
                                    <li>remove(element) - Removes the specified element.</li>
                                    <li>contains(element) - Checks if the element exists.</li>
                                    <li>size() - Returns the number of elements.</li>
                                    <li>clear() - Removes all elements.</li>
                                </ul>

                            </div>
                            <div className="property-card">
                                <h3 className="h4">LinkedHashSet</h3>
                                <ul>
                                    <li>LinkedHashSet is a subclass of HashSet that maintains insertion order.</li>
                                    <li>Key points:</li>
                                    <ol>
                                        <li>Maintains insertion order.</li>
                                        <li>No duplicate values.</li>
                                        <li>Allows null values.</li>
                                        <li>Slower than HashSet for large data due to linked list maintenance.</li>
                                    </ol>
                                </ul>
                                <pre><code>{`import java.util.LinkedHashSet;

LinkedHashSet<String> lhs = new LinkedHashSet<>();
lhs.add("Ravi");
lhs.add("Vijay");
lhs.add("Ajay");

System.out.println(lhs); // [Ravi, Vijay, Ajay]`}</code></pre>
                            </div>
                            <div className="property-card">
                                <h3 className="h4">TreeSet</h3>
                                <ul>
                                    <li>TreeSet implements the NavigableSet interface and is backed by a TreeMap.</li>
                                    <li>It stores elements in sorted (ascending) order.</li>
                                    <li>Key Points:</li>
                                    <ol>
                                        <li>Automatically sorts elements.</li>
                                        <li>No duplicates allowed.</li>
                                        <li>Does not allow null elements (throws NullPointerException).</li>
                                        <li>Slower than HashSet for add/remove.</li>
                                    </ol>
                                </ul>
                                <pre><code>{`import java.util.TreeSet;

TreeSet<String> ts = new TreeSet<>();
ts.add("Ravi");
ts.add("Vijay");
ts.add("Ajay");

System.out.println(ts); // [Ajay, Ravi, Vijay]`}</code></pre>
                            </div>
                            <div className="property-card">
                                <h3 className="mb-3">TreeSet  Methods</h3>
                                <ul>
                                    <li>first() - Returns the first (lowest) element.</li>
                                    <li>last() - Returns the last (highest) element.</li>
                                    <li>headSet(toElement) - Elements less than the given element.</li>
                                    <li>tailSet(fromElement) - Elements greater than or equal to given element.</li>
                                    <li>subSet(fromElement, toElement) - Elements within a range.</li>
                                </ul>
                            </div>
                            <div className="property-card">
                                <h3 className="h4">HashMap</h3>
                                <ul>
                                    <li>HashMap is a class that implements the Map interface and stores key-value pairs.</li>
                                    <li>Key Points:</li>
                                    <ol>
                                        <li>Allows one null key and multiple null values.</li>
                                        <li>No duplicate keys (latest value replaces old).</li>
                                        <li>Not synchronized.</li>
                                        <li>Order is not guaranteed.</li>
                                    </ol>
                                </ul>
                                <pre><code>{`import java.util.HashMap;

HashMap<Integer, String> hm = new HashMap<>();
hm.put(1, "Ravi");
hm.put(2, "Vijay");
hm.put(3, "Ajay");

System.out.println(hm); // {1=Ravi, 2=Vijay, 3=Ajay}
`}</code></pre>
                            </div>
                            <div className="property-card">
                                <h3 className="mb-3">HashMap  Methods</h3>
                                <ul>
                                    <li>put(key, value) - Adds a key-value pair.</li>
                                    <li>get(key) - Returns value associated with key.</li>
                                    <li>remove(key) - Removes the key-value pair.</li>
                                    <li>containsKey(key) - Checks if a key exists.</li>
                                    <li>containsValue(value) - Checks if a value exists.</li>
                                    <li>keySet() - Returns all keys.</li>
                                    <li>values() - Returns all values.</li>
                                </ul>
                            </div>
                            <div className="property-card">
                                <h3 className="h4">LinkedHashMap</h3>
                                <ul>
                                    <li>A subclass of HashMap that maintains insertion order of entries.</li>
                                    <li>Key Points:</li>
                                    <ol>
                                        <li>Maintains insertion order.</li>
                                        <li>Faster iteration than HashMap.</li>
                                        <li>Allows null keys and values.</li>
                                    </ol>
                                </ul>
                                <pre><code>{`import java.util.LinkedHashMap;

LinkedHashMap<Integer, String> lhm = new LinkedHashMap<>();
lhm.put(1, "Ravi");
lhm.put(2, "Vijay");
lhm.put(3, "Ajay");

System.out.println(lhm); // {1=Ravi, 2=Vijay, 3=Ajay} `}</code></pre>
                            </div>
                            <div className="property-card">
                                <h3 className="h4">TreeMap</h3>
                                <ul>
                                    <li>Implements the NavigableMap interface and stores key-value pairs in sorted order of keys.</li>
                                    <li>Key Points:</li>
                                    <ol>
                                        <li>Automatically sorts keys in natural order.</li>
                                        <li>Does not allow null keys.</li>
                                        <li>Slower than HashMap.</li>
                                    </ol>
                                </ul>
                                <pre><code>{`import java.util.TreeMap;

TreeMap<Integer, String> tm = new TreeMap<>();
tm.put(3, "Ajay");
tm.put(1, "Ravi");
tm.put(2, "Vijay");

System.out.println(tm); // {1=Ravi, 2=Vijay, 3=Ajay}
`}</code></pre>
                            </div>
                        </section>

                        <section id="multithreading" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-cpu"></i> Multithreading</h2>
                            <p>It is one of the ways to achieve multi-tasking.</p>
                            <div className="property-card">
                                <h3 className="mb-3">Thread</h3>
                                <ul>
                                    <li>It is the light weight sub process.</li>
                                    <li>Threads are independent.</li>
                                    <li>Threads shares the common memory area.</li>
                                    <li>If one thread having an exception the other threads in the process will work simultaneously.</li>
                                </ul>
                                <p><strong>Thread Lifecycle:</strong></p>
                                <ol>
                                    <li><strong>New:</strong> The thread considered to be a new state which it is getting created.</li>
                                    <pre>{`Eg: Thread t = new Thread();`}</pre>
                                    <li><strong>Runnable:</strong> A thread is said to be a runnable state when start() is invoke but thread is not selected by thread scheduler.</li>
                                    <pre>{`Eg: t.start();`}</pre>
                                    <li><strong>Running:</strong> A thread is said to be a running state when it executing run().</li>
                                    <pre><code>{`//Example
public void run()
{
    //statements;
}`}</code></pre>
                                    <li><strong>Non-Runnable:</strong> A thread is said to be in nonrunnable state when the thread is alive but not in running state.</li>
                                    <pre><code>{`//Example
Thread.sleep(2000); - static method
t.join(); - non static method
Note: sleep() will throw an InterruptedException.`}</code></pre>
                                    <li><strong>Terminated:</strong> When run() completes</li>
                                </ol>
                            </div>

                            <div className="property-card">
                                <h3 className="h4">Creating Threads</h3>


                                <h5>Extending Thread class</h5>
                                <pre><code>{`class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

// Usage
MyThread t1 = new MyThread();
t1.start();`}</code></pre>
                                <h5>Implementing Runnable</h5>
                                <pre><code>{`class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread is running");
    }
}

// Usage
MyRunnable mr = new MyRunnable();
Thread t2 = new Thread(mr);
t2.start();`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h2 className="mb-3">Thread Scheduler</h2>
                                <ul>
                                    <li>It is a part of CPU which will decide which thread to be executed.</li>
                                    <li>The thread scheduler will select the thread on two ways</li>
                                    <ol>
                                        <li>Promptive technique based on the priority of the thread</li>
                                        <li>Time slicing technique based on the time</li>
                                    </ol>
                                </ul>
                                <pre>{`Note: The minimum priority of thread is 1.
MIN-PRIORITY is 1
MAX-PRIORITY is 10
NORM-PRIORITY is 5`}</pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4">Thread Methods</h3>
                                <pre><code>{`start() - Starts thread execution
run() - Contains thread's code
sleep(ms) - Pauses thread for specified time
join() - Waits for thread to die
getName() - Returns thread's name
setName() - Sets thread's name
getPriority() - Returns thread's priority (1-10)
setPriority() - Sets thread's priority
currentThread() - Returns reference to current thread
isAlive() - Checks if thread is alive`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4">Thread Example</h3>
                                <pre><code>{`class Demo extends Thread
{
    public void run()
    {
        for(int i=0;i<5;i++)
        {
            System.out.println(Thread.currentThread().getName());
        }
    }
    public static void main(String args[])
    {
        Demo d1 = new Demo();
        Demo d2 = new Demo();
        d1.setName("Ram");
        d2.setName("Bheem");
        d1.start();
        d2.start();
        d1.join();
    }
}`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4">Thread Priority Example</h3>
                                <pre><code>{`class Demo extends Thread {
    public void run() {
        System.out.println(Thread.currentThread().getName());
    }
    
    public static void main(String args[]) {
        Demo d1 = new Demo();
        Demo d2 = new Demo();
        
        d1.setName("Thread-1");
        d2.setName("Thread-2");
        
        d1.setPriority(Thread.MIN_PRIORITY); // 1
        d2.setPriority(Thread.MAX_PRIORITY); // 10
        
        d1.start();
        d2.start();
    }
}`}</code></pre>
                            </div>
                        </section>

                        <section id="lambda" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-arrow-right-square"></i> Lambda Expressions</h2>
                            <div className="property-card">
                                <p>Provide implementation of functional interface (interface with single abstract method)</p>
                                <p><strong>Benefits:</strong></p>
                                <ul>
                                    <li>Reduces code</li>
                                    <li>No need to define method again</li>
                                    <li>Can be treated as method argument</li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h3 className="h4">Lambda vs Traditional Implementation</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="property-card">
                                            <h5>Traditional</h5>
                                            <pre><code>{`interface A {
    void abc();
}

class B implements A {
    public void abc() {
        System.out.println("Hello");
    }
}

// Usage
A obj = new B();
obj.abc();`}</code></pre>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="property-card">
                                            <h5>Lambda</h5>
                                            <pre><code>{`interface A {
    void abc();
}

// Usage
A obj = () -> System.out.println("Hello");
obj.abc();`}</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="property-card">
                                <h3 className="h4">Lambda Examples</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="property-card">
                                            <h5>No Parameters</h5>
                                            <pre><code>{`interface Sayable {
    void say();
}

Sayable s = () -> System.out.println("Hello");
s.say();`}</code></pre>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="property-card">
                                            <h5>With Parameters</h5>
                                            <pre><code>{`interface Addable {
    int add(int a, int b);
}

Addable ad = (a,b) -> a + b;
System.out.println(ad.add(10,20)); // 30`}</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mb-5" id="filehandling">
                            <h2 className="h2 mb-3"><i className="bi bi-collection"></i> File Handling in Java</h2>
                            <div className="property-card">
                                <ul>
                                    <li>In Java, file handling is done using classes from the java.io and java.nio.file packages.</li>
                                    <li>It allows reading, writing, updating, and deleting files and directories.</li>
                                </ul>
                            </div>
                            <div className="property-card">
                                <h4 className="h4 mb-3">1. File Class</h4>
                                <p>The File class (from java.io) is used to represent file and directory pathnames in an abstract manner.</p>
                                <pre><code>{`import java.io.File;

public class FileDemo {
    public static void main(String[] args) {
        File file = new File("example.txt");
        
        if (file.exists()) {
            System.out.println("File name: " + file.getName());
            System.out.println("Path: " + file.getAbsolutePath());
            System.out.println("Writable: " + file.canWrite());
            System.out.println("Readable: " + file.canRead());
            System.out.println("File size in bytes: " + file.length());
        } else {
            System.out.println("File does not exist.");
        }
    }
}
`}</code></pre>
                                <h5>Common File Methods:</h5>
                                <ol>
                                    <li>createNewFile() – Creates a new empty file.</li>
                                    <li>mkdir() – Creates a directory.</li>
                                    <li>exists() – Checks if the file exists.</li>
                                    <li>getName() – Returns the file name.</li>
                                    <li>getAbsolutePath() – Returns the full path.</li>
                                    <li>canRead() / canWrite() – Checks readability/writability.</li>
                                    <li>length() – Returns file size in bytes.</li>
                                    <li>delete() – Deletes the file.</li>
                                </ol>
                            </div>
                            <div className="property-card">
                                <h4 className="h4 mb-3">2. Writing to a File</h4>
                                <p>Use FileWriter and BufferedWriter for writing data to a file.</p>
                                <pre><code>{`import java.io.FileWriter;
import java.io.IOException;

public class WriteFile {
    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("output.txt");
            writer.write("Hello, this is a sample file.");
            writer.close();
            System.out.println("Successfully written to file.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
`}</code></pre>
                            </div>
                            <div className="property-card">
                                <h4 className="h4 mb-3">3. Reading from a File</h4>
                                <p>Use FileReader, BufferedReader, or Scanner to read data.</p>
                                <pre><code>{`import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadFile {
    public static void main(String[] args) {
        try {
            File file = new File("output.txt");
            Scanner sc = new Scanner(file);
            while (sc.hasNextLine()) {
                String data = sc.nextLine();
                System.out.println(data);
            }
            sc.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
`}</code></pre>
                            </div>
                            <div className="property-card">
                                <h4 className="h4 mb-3">4. Append to a File</h4>
                                <p>Use FileWriter in append mode (true flag).</p>
                                <pre><code>{`import java.io.FileWriter;
import java.io.IOException;

public class AppendFile {
    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("output.txt", true);
            writer.write("\nAppended line.");
            writer.close();
            System.out.println("Appended to the file.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
`}</code></pre>
                            </div>
                            <div className="property-card">
                                <h4 className="h4 mb-3">5. Deleting a File</h4>
                                <pre><code>{`import java.io.File;

public class DeleteFile {
    public static void main(String[] args) {
        File file = new File("output.txt");
        if (file.delete()) {
            System.out.println("Deleted file: " + file.getName());
        } else {
            System.out.println("Failed to delete the file.");
        }
    }
}
`}</code></pre>
                            </div>
                            <div className="property-card">
                                <h4 className="h4 mb-3">6. Create a Directory</h4>
                                <pre><code>{`import java.io.File;

public class CreateDirectory {
    public static void main(String[] args) {
        File dir = new File("MyDirectory");
        if (dir.mkdir()) {
            System.out.println("Directory created.");
        } else {
            System.out.println("Directory creation failed.");
        }
    }
}
`}</code></pre>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default JavaNotes;