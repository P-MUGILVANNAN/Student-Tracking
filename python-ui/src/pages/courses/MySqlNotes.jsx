import React from 'react';

function MySqlNotes() {
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
        `}
            </style>

            <header className="bg-success text-white py-4">
                <div className="container">
                    <h1 className="display-4 fw-bold"><i className="bi bi-database"></i> MySQL Notes</h1>
                    <p className="lead">Your Comprehensive Guide to MySQL Database Management</p>
                </div>
            </header>

            <div className="container py-4">
                <div className="row">
                    <aside className="col-lg-3 sidebar">
                        <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
                        <nav className="nav flex-column">
                            <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> What is SQL?</a>
                            <a className="nav-link" href="#rdbms"><i className="bi bi-diagram-3"></i> RDBMS</a>
                            <a className="nav-link" href="#mysql"><i className="bi bi-database"></i> What is MySQL?</a>
                            <a className="nav-link" href="#datatypes"><i className="bi bi-list-columns"></i> Data Types</a>
                            <a className="nav-link" href="#ddl"><i className="bi bi-file-earmark-code"></i> DDL Commands</a>
                            <a className="nav-link" href="#dml"><i className="bi bi-pencil-square"></i> DML Commands</a>
                            <a className="nav-link" href="#dql"><i className="bi bi-search"></i> DQL Commands</a>
                            <a className="nav-link" href="#dcl"><i className="bi bi-shield-lock"></i> DCL Commands</a>
                            <a className="nav-link" href="#tcl"><i className="bi bi-arrow-repeat"></i> TCL Commands</a>
                            <a className="nav-link" href="#functions"><i className="bi bi-calculator"></i> Aggregate Functions</a>
                            <a className="nav-link" href="#grouping"><i className="bi bi-collection"></i> Group By & Order By</a>
                            <a className="nav-link" href="#constraints"><i className="bi bi-shield-check"></i> Constraints</a>
                            <a className="nav-link" href="#joins"><i className="bi bi-arrow-left-right"></i> Joins</a>
                            <a className="nav-link" href="#foreignkey"><i className="bi bi-link-45deg"></i> Foreign Key</a>
                        </nav>
                    </aside>

                    <main className="col-lg-9">
                        <section id="introduction" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> What is SQL?</h2>
                            <ul className="mb-3">
                                <li>SQL stands for Structured Query Language</li>
                                <li>SQL lets you access and manipulate databases</li>
                                <li>Became an ANSI standard in 1986 and ISO standard in 1987</li>
                            </ul>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> Uses of SQL</h3>
                                <ul>
                                    <li>Execute queries against a database</li>
                                    <li>Retrieve data from a database</li>
                                    <li>Insert records in a database</li>
                                    <li>Update records in a database</li>
                                    <li>Delete records from a database</li>
                                    <li>Create new databases</li>
                                    <li>Create new tables in a database</li>
                                </ul>
                            </div>
                        </section>

                        <section id="rdbms" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> RDBMS</h2>
                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> What is RDBMS?</h3>
                                <ul>
                                    <li>RDBMS stands for Relational Database Management System</li>
                                    <li>It's the basis for SQL and all modern database systems</li>
                                    <li>Examples: MS SQL Server, IBM DB2, Oracle, MySQL, Microsoft Access</li>
                                </ul>
                            </div>
                        </section>

                        <section id="mysql" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-database"></i> What is MySQL?</h2>
                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> MySQL Features</h3>
                                <ul>
                                    <li>Relational database management system</li>
                                    <li>Open-source and free</li>
                                    <li>Ideal for both small and large applications</li>
                                    <li>Fast, reliable, scalable, and easy to use</li>
                                    <li>Cross-platform</li>
                                    <li>Compliant with the ANSI SQL standard</li>
                                    <li>First released in 1995</li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-download"></i> Environmental Setup</h3>
                                <p>Step 1: Download MySQL installer from official website</p>
                            </div>
                        </section>

                        <section id="datatypes" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-list-columns"></i> MySQL Data Types</h2>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> Numeric Types</h3>
                                <ul>
                                    <li><code>INT</code> - 4 bytes (-2,147,483,648 to 2,147,483,647)</li>
                                    <li><code>TINYINT</code> - 1 byte (-128 to 127)</li>
                                    <li><code>BIGINT</code> - 8 bytes (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)</li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> String Types</h3>
                                <ul>
                                    <li><code>CHAR(size)</code> - Fixed-length string (1 byte per character)</li>
                                    <li><code>VARCHAR(size)</code> - Variable-length string (2 bytes overhead + length)</li>
                                </ul>
                            </div>
                        </section>

                        <section id="ddl" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> DDL (Data Definition Language)</h2>
                            <p>Commands used to define the database structure/schema</p>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-database-add"></i> CREATE DATABASE</h3>
                                <pre><code>{`CREATE DATABASE database_name;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`CREATE DATABASE java;`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-database-check"></i> USE DATABASE</h3>
                                <pre><code>{`USE database_name;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`USE java;`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-table"></i> CREATE TABLE</h3>
                                <pre><code>{`CREATE TABLE table_name(
    column_name datatype,
    column_name datatype,
    column_name datatype
);`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`CREATE TABLE students(
    Sno int,
    Name varchar(200),
    Phone bigint
);`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-pencil-square"></i> ALTER TABLE</h3>
                                <p><strong>Add Column:</strong></p>
                                <pre><code>{`ALTER TABLE table_name ADD COLUMN column_name datatype;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`ALTER TABLE students ADD COLUMN dept varchar(100);`}</code></pre>

                                <p><strong>Rename Column:</strong></p>
                                <pre><code>{`ALTER TABLE table_name CHANGE COLUMN old_column_name new_column_name datatype;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`ALTER TABLE students CHANGE COLUMN dept department varchar(200);`}</code></pre>

                                <p><strong>Drop Column:</strong></p>
                                <pre><code>{`ALTER TABLE table_name DROP column_name;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`ALTER TABLE students DROP department;`}</code></pre>

                                <p><strong>Rename Table:</strong></p>
                                <pre><code>{`ALTER TABLE table_name RENAME TO new_table_name;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`ALTER TABLE students RENAME TO student_details;`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-trash"></i> DROP TABLE</h3>
                                <pre><code>{`DROP TABLE table_name;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`DROP TABLE student_details;`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-eraser"></i> TRUNCATE TABLE</h3>
                                <pre><code>{`TRUNCATE TABLE table_name;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`TRUNCATE TABLE student_details;`}</code></pre>
                                <p>Note: Deletes all data but keeps the table structure</p>
                            </div>
                        </section>

                        <section id="dml" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-pencil-square"></i> DML (Data Manipulation Language)</h2>
                            <p>Commands used for managing data within tables</p>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-plus-circle"></i> INSERT</h3>
                                <pre><code>{`INSERT INTO table_name VALUES(values);`}</code></pre>
                                <p>Examples:</p>
                                <pre><code>{`INSERT INTO student_details VALUES(1,"xyz",9876543210);
INSERT INTO student_details VALUES(2,"abc",9876543210);
INSERT INTO student_details VALUES(3,"def",9876543210);`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-arrow-repeat"></i> UPDATE</h3>
                                <p><strong>Update all rows:</strong></p>
                                <pre><code>{`UPDATE table_name SET column_name=new_value;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`UPDATE student_details SET name="abcd";`}</code></pre>

                                <p><strong>Update specific row:</strong></p>
                                <pre><code>{`UPDATE table_name SET column_name=new_value WHERE column_name=value;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`UPDATE student_details SET name="Hathvik" WHERE Sno=2;`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-dash-circle"></i> DELETE</h3>
                                <p><strong>Delete all rows:</strong></p>
                                <pre><code>{`DELETE FROM table_name;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`DELETE FROM student_details;`}</code></pre>

                                <p><strong>Delete specific row:</strong></p>
                                <pre><code>{`DELETE FROM table_name WHERE column_name=value;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`DELETE FROM student_details WHERE Sno=2;`}</code></pre>
                            </div>
                        </section>

                        <section id="dql" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-search"></i> DQL (Data Query Language)</h2>
                            <p>Commands used to query/read data from tables</p>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-card-list"></i> SELECT</h3>
                                <p><strong>Select all columns:</strong></p>
                                <pre><code>{`SELECT * FROM table_name;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`SELECT * FROM student_details;`}</code></pre>

                                <p><strong>Select specific columns:</strong></p>
                                <pre><code>{`SELECT column_names FROM table_name;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`SELECT Name,Phone FROM student_details;`}</code></pre>

                                <p><strong>Select with condition:</strong></p>
                                <pre><code>{`SELECT column_name FROM table_name WHERE condition;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`SELECT Phone FROM student_details WHERE Name="abc";`}</code></pre>
                            </div>
                        </section>

                        <section id="dcl" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-shield-lock"></i> DCL (Data Control Language)</h2>
                            <p>Commands used for rights, permissions and other controls</p>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-check-circle"></i> GRANT</h3>
                                <pre><code>{`GRANT permission;`}</code></pre>
                                <p>Gives user access privileges to database</p>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-x-circle"></i> REVOKE</h3>
                                <pre><code>{`REVOKE permission;`}</code></pre>
                                <p>Takes back permissions from user</p>
                            </div>
                        </section>

                        <section id="tcl" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> TCL (Transaction Control Language)</h2>
                            <p>Commands used to manage transactions in database</p>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-save"></i> COMMIT</h3>
                                <pre><code>{`COMMIT;`}</code></pre>
                                <p>Saves transactions permanently to database</p>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-arrow-counterclockwise"></i> ROLLBACK</h3>
                                <pre><code>{`ROLLBACK;`}</code></pre>
                                <p>Restores database to last committed state</p>
                            </div>
                        </section>

                        <section id="functions" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-calculator"></i> Aggregate Functions</h2>
                            <p>Functions that perform calculations on data</p>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-list-ol"></i> Types of Aggregate Functions</h3>
                                <ul>
                                    <li><code>SUM()</code> - Returns the sum of values</li>
                                    <li><code>COUNT()</code> - Returns the number of rows</li>
                                    <li><code>AVG()</code> - Returns the average value</li>
                                    <li><code>MAX()</code> - Returns the maximum value</li>
                                    <li><code>MIN()</code> - Returns the minimum value</li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-code-square"></i> Examples</h3>
                                <pre><code>{`SELECT AVG(marks) from student_details;
SELECT AVG(marks) as Average from student_details;
SELECT MIN(marks) from student_details;
SELECT MAX(marks) from student_details;
SELECT COUNT(name) from student_details;
SELECT SUM(marks) from student_details;`}</code></pre>
                            </div>
                        </section>

                        <section id="grouping" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-collection"></i> ORDER BY & GROUP BY</h2>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-sort-alpha-down"></i> ORDER BY</h3>
                                <p>Sorts the result set in ascending or descending order</p>
                                <pre><code>{`SELECT columns FROM table_name ORDER BY column condition;`}</code></pre>
                                <p>Examples:</p>
                                <pre><code>{`SELECT * FROM student_details ORDER BY Name asc;
SELECT * FROM student_details ORDER BY Name desc;`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-collection"></i> GROUP BY</h3>
                                <p>Groups rows that have the same values into summary rows</p>
                                <pre><code>{`SELECT AGGREGATE_FUNCTION(column_name),columns FROM table_name GROUP BY column_name;`}</code></pre>
                                <p>Example:</p>
                                <pre><code>{`SELECT COUNT(Name),dept FROM student_details GROUP BY dept;`}</code></pre>
                            </div>
                        </section>

                        <section id="constraints" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-shield-check"></i> MySQL Constraints</h2>
                            <p>Rules enforced on data columns to ensure data integrity</p>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-list-ol"></i> Types of Constraints</h3>
                                <ul>
                                    <li><code>NOT NULL</code> - Column cannot have NULL values</li>
                                    <li><code>UNIQUE</code> - All values in column must be different</li>
                                    <li><code>PRIMARY KEY</code> - Combination of NOT NULL and UNIQUE</li>
                                    <li><code>FOREIGN KEY</code> - Links tables together</li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-code-square"></i> Syntax</h3>
                                <pre><code>{`CREATE TABLE table_name(
    column_name datatype constraints,
    column_name datatype constraints,
    column_name datatype constraints
);`}</code></pre>
                            </div>
                        </section>

                        <section id="joins" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-arrow-left-right"></i> MySQL Joins</h2>
                            <p>Combine rows from two or more tables based on related columns</p>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-diagram-2"></i> Types of Joins</h3>
                                <ul>
                                    <li>INNER JOIN</li>
                                    <li>LEFT JOIN</li>
                                    <li>RIGHT JOIN</li>
                                    <li>CROSS JOIN</li>
                                </ul>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-arrow-left-right"></i> INNER JOIN</h3>
                                <p>Selects records with matching values in both tables</p>
                                <pre><code>{`SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.Column_name = table2.Column_name;`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-arrow-left"></i> LEFT JOIN</h3>
                                <p>Returns all records from left table and matched records from right table</p>
                                <pre><code>{`SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.Column_name = table2.Column_name;`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-arrow-right"></i> RIGHT JOIN</h3>
                                <p>Returns all records from right table and matched records from left table</p>
                                <pre><code>{`SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-arrows-angle-expand"></i> CROSS JOIN</h3>
                                <p>Returns all records from both tables (Cartesian product)</p>
                                <pre><code>{`SELECT column_name(s)
FROM table1
CROSS JOIN table2;`}</code></pre>
                            </div>
                        </section>

                        <section id="foreignkey" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-link-45deg"></i> Foreign Key Example</h2>

                            <div className="property-card">
                                <h3 className="h4"><i className="bi bi-code-square"></i> Creating Tables with Foreign Key</h3>
                                <pre><code>{`create table customers(
    CId int primary key,
    Name varchar(200) not null,
    Phone bigint unique
);

insert into customers
values(1,"Dhoni",9876543201);
insert into customers
values(2,"Virat",8876543201);

create table orders(
    Old int primary key,
    Status varchar(200) not null,
    CId int,
    foreign key(CId) references customers(CId)
);

insert into orders values(100,"Placed",2);
insert into orders values(200,"Not placed",1);

select * from orders;`}</code></pre>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

            <footer className="bg-dark text-white py-4">
                <div className="container text-center">
                    <p>MySQL Notes &copy; 2025 | Designed by Mugilvannan P</p>
                </div>
            </footer>
        </div>
    );
}

export default MySqlNotes;