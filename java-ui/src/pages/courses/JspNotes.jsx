import React from 'react';

function JspNotes() {
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
            background-color: #e9ecef;
          }
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-jsp"></i> JSP Notes</h1>
          <p className="lead">Your Comprehensive Guide to Java Server Pages</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> JSP Introduction</a>
              <a className="nav-link" href="#lifecycle"><i className="bi bi-arrow-repeat"></i> JSP Life Cycle</a>
              <a className="nav-link" href="#scripting"><i className="bi bi-code-square"></i> Scripting Elements</a>
              <a className="nav-link" href="#implicit"><i className="bi bi-box-seam"></i> Implicit Objects</a>
              <a className="nav-link" href="#directives"><i className="bi bi-file-earmark-text"></i> Directives</a>
              <a className="nav-link" href="#exception"><i className="bi bi-exclamation-triangle"></i> Exception Handling</a>
              <a className="nav-link" href="#actions"><i className="bi bi-lightning"></i> Action Tags</a>
              <a className="nav-link" href="#el"><i className="bi bi-braces"></i> Expression Language</a>
              <a className="nav-link" href="#jdbc"><i className="bi bi-database"></i> JSP JDBC</a>
              <a className="nav-link" href="#mvc"><i className="bi bi-diagram-3"></i> MVC in JSP</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> JSP Introduction</h2>
              <div className="property-card">
                <ul>
                  <li><strong>JSP</strong> technology is used to create web applications just like Servlet technology.</li>
                  <li>It can be thought of as an extension to servlet because it provides more functionality than servlet such as expression language, JSTL etc.</li>
                  <li>A JSP page consists of HTML tags and JSP tags.</li>
                  <li>The JSP pages are easier to maintain than servlet because we can separate designing and development.</li>
                  <li>It provides some additional features such as Expression Language, Custom Tags etc.</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-check-circle"></i> Advantages of JSP over Servlet</h3>
                <ol>
                  <li><strong>Extension to Servlet:</strong> JSP technology is the extension to Servlet technology.</li>
                  <li><strong>Easy to maintain:</strong> JSP separates presentation and business logic.</li>
                  <li><strong>Fast Development:</strong> No need to recompile and redeploy.</li>
                  <li><strong>Less code than Servlet:</strong> In JSP, we can use many tags like action tags, JSTL, custom tags, etc. that reduce the code.</li>
                </ol>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> JSP Example</h3>
                <pre><code>{`<html>
<body>
<% out.print(2*5); %>
</body>
</html>`}</code></pre>
              </div>
            </section>

            <section id="lifecycle" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> JSP Life Cycle Methods</h2>
              <div className="property-card">
                <ol>
                  <li><code>jspInit()</code></li>
                  <li><code>_jspService(HttpServletRequest request, HttpServletResponse response)</code></li>
                  <li><code>jspDestroy()</code></li>
                </ol>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> jspInit()</h3>
                <ul>
                  <li><code>jspInit()</code> is declared in the <code>JspPage</code> interface.</li>
                  <li>This method is called only once in JSP lifecycle to initialize config params.</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> jspService()</h3>
                <ul>
                  <li><code>jspService(HttpServletRequest request, HttpServletResponse response)</code> is declared in the <code>HttpJspPage</code> interface.</li>
                  <li>It is responsible for handling client requests.</li>
                  <li>The underscore <code>_</code> signifies that you cannot override this method.</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> jspDestroy()</h3>
                <ul>
                  <li><code>jspDestroy()</code> is declared in the <code>JspPage</code> interface.</li>
                  <li>It is called to unload the JSP from memory.</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Life Cycle Example</h3>
                <pre><code>{`<%!
int counter;
public void jspInit() {
    counter = 0;
    log("The lifecycle jsp has been initialized");
}
%>
<html>
<head>
    <title>JSP Life Cycle Example</title>
</head>
<body>
<%
log("The lifecycle jsp has received a request");
counter++;
%>
    <h2>JSP Life cycle : Request counter</h2>
    <p>This page has been called <%=counter %> times</p>
</body>
</html>
<%!
public void jspDestroy() {
    log("The lifecycle jsp is being destroyed");
}
%>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-box"></i> JSP API</h3>
                <p>The JSP API consists of two packages:</p>
                <ol>
                  <li><code>jakarta.servlet.jsp</code></li>
                  <li><code>jakarta.servlet.jsp.tagext</code></li>
                </ol>

                <h4 className="h5 mt-3">jakarta.servlet.jsp package</h4>
                <p>The <code>jakarta.servlet.jsp</code> package has two interfaces and several classes:</p>
                
                <h5 className="h6">Interfaces:</h5>
                <ul>
                  <li><code>JspPage</code></li>
                  <li><code>HttpJspPage</code></li>
                </ul>
                
                <h5 className="h6">Classes:</h5>
                <ul>
                  <li><code>JspWriter</code></li>
                  <li><code>PageContext</code></li>
                  <li><code>JspFactory</code></li>
                  <li><code>JspEngineInfo</code></li>
                  <li><code>JspException</code></li>
                  <li><code>JspError</code></li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-diagram-2"></i> The JspPage Interface</h3>
                <ul>
                  <li>According to the JSP specification, all the generated servlet classes must implement the <code>JspPage</code> interface.</li>
                  <li>It extends the <code>Servlet</code> interface.</li>
                  <li>It provides two life cycle methods:
                    <ol>
                      <li><code>public void jspInit()</code>: Invoked only once during the life cycle of the JSP when JSP page is requested firstly. It is used to perform initialization.</li>
                      <li><code>public void jspDestroy()</code>: Invoked only once during the life cycle of the JSP before the JSP page is destroyed. It can be used to perform some clean up operation.</li>
                    </ol>
                  </li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-diagram-2"></i> The HttpJspPage Interface</h3>
                <ul>
                  <li>The <code>HttpJspPage</code> interface extends the <code>JspPage</code> interface.</li>
                  <li>It provides one life cycle method:
                    <ul>
                      <li><code>public void _jspService()</code>: Invoked each time when request for the JSP page comes to the container. It is used to process the request.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>

            <section id="scripting" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> JSP Scripting Elements</h2>
              <div className="property-card">
                <p>In JSP, Java code can be written inside the JSP page using scripting elements. There are three types of scripting elements:</p>
                <ol>
                  <li>Scriptlet tag</li>
                  <li>Expression tag</li>
                  <li>Declaration tag</li>
                </ol>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> JSP Scriptlet Tag</h3>
                <p>The scriptlet tag allows you to write Java code in JSP.</p>
                <h5 className="h5">Syntax:</h5>
                <pre><code>{`<% java source code %>`}</code></pre>
                <h5 className="h5">Example:</h5>
                <pre><code>{`<html>
<body>
<% out.print("welcome to jsp"); %>
</body>
</html>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> JSP Expression Tag</h3>
                <p>The code placed within JSP expression tag is written to the output stream of the response.</p>
                <h5 className="h5">Syntax:</h5>
                <pre><code>{`<%= statement %>`}</code></pre>
                <h5 className="h5">Example:</h5>
                <pre><code>{`<html>
<body>
<%= "welcome to jsp" %>  
</body>
</html>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> JSP Declaration Tag</h3>
                <p>The JSP declaration tag is used to declare fields and methods.</p>
                <h5 className="h5">Syntax:</h5>
                <pre><code>{`<%! field or method declaration %>`}</code></pre>
                <h5 className="h5">Example:</h5>
                <pre><code>{`<html>
<body>
<%!
int cube(int n){
    return n*n*n;
}
%>
<%= "Cube of 3 is:"+cube(3) %>
</body>
</html>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-compare"></i> Difference between JSP Scriptlet tag and Declaration tag</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>JSP Scriptlet Tag</th>
                      <th>JSP Declaration Tag</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Can only declare variables not methods</td>
                      <td>Can declare variables as well as methods</td>
                    </tr>
                    <tr>
                      <td>The declaration is placed inside the _jspService() method</td>
                      <td>The declaration is placed outside the _jspService() method</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="implicit" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box-seam"></i> JSP Implicit Objects</h2>
              <div className="property-card">
                <p>There are 9 JSP implicit objects. These objects are created by the web container that are available to all the JSP pages.</p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Object</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>out</td>
                      <td>JspWriter</td>
                    </tr>
                    <tr>
                      <td>request</td>
                      <td>HttpServletRequest</td>
                    </tr>
                    <tr>
                      <td>response</td>
                      <td>HttpServletResponse</td>
                    </tr>
                    <tr>
                      <td>config</td>
                      <td>ServletConfig</td>
                    </tr>
                    <tr>
                      <td>application</td>
                      <td>ServletContext</td>
                    </tr>
                    <tr>
                      <td>session</td>
                      <td>HttpSession</td>
                    </tr>
                    <tr>
                      <td>pageContext</td>
                      <td>PageContext</td>
                    </tr>
                    <tr>
                      <td>page</td>
                      <td>Object</td>
                    </tr>
                    <tr>
                      <td>exception</td>
                      <td>Throwable</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> JSP out implicit object</h3>
                <p>For writing any data to the buffer, JSP provides an implicit object named out. It is the object of JspWriter.</p>
                <h5 className="h5">Example:</h5>
                <pre><code>{`<html>
<body>
<% out.print("JSP out object demo"); %>
</body>
</html>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> JSP request implicit object</h3>
                <p>The JSP request is an implicit object of type HttpServletRequest created for each JSP request by the web container.</p>
                <h5 className="h5">Example:</h5>
                <h6 className="h6">index.html</h6>
                <pre><code>{`<html>
<body>
<form action="welcome.jsp">
    <input type="text" name="uname">
    <input type="submit" value="go"></br>
</form>
</body>
</html>`}</code></pre>
                <h6 className="h6">welcome.jsp</h6>
                <pre><code>{`<%
String name=request.getParameter("uname");
out.print("welcome "+name);
%>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> JSP response implicit object</h3>
                <p>In JSP, response is an implicit object of type HttpServletResponse.</p>
                <h5 className="h5">Example:</h5>
                <h6 className="h6">index.html</h6>
                <pre><code>{`<html>
<body>
<form action="welcome.jsp">
    <input type="text" name="uname">
    <input type="submit" value="go"></br>
</form>
</body>
</html>`}</code></pre>
                <h6 className="h6">welcome.jsp</h6>
                <pre><code>{`<%
response.sendRedirect("http://www.google.com");
%>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> JSP config implicit object</h3>
                <p>In JSP, config is an implicit object of type ServletConfig.</p>
                <h5 className="h5">Example:</h5>
                <h6 className="h6">web.xml</h6>
                <pre><code>{`<web-app>
<servlet>
    <servlet-name>welcome.jsp</servlet-name>
    <jsp-file>/welcome.jsp</jsp-file>
    <init-param>
        <param-name>dname</param-name>
        <param-value>sun.jdbc.odbc.JdbcOdbcDriver</param-value>
    </init-param>
</servlet>
<servlet-mapping>
    <servlet-name>welcome.jsp</servlet-name>
    <url-pattern>/welcome.jsp</url-pattern>
</servlet-mapping>
</web-app>`}</code></pre>
                <h6 className="h6">welcome.jsp</h6>
                <pre><code>{`<%
out.print("Welcome "+request.getParameter("uname"));
String driver=config.getInitParameter("dname");
out.print("driver name is="+driver);
%>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-5-circle"></i> JSP application implicit object</h3>
                <p>In JSP, application is an implicit object of type ServletContext.</p>
                <h5 className="h5">Example:</h5>
                <h6 className="h6">web.xml</h6>
                <pre><code>{`<web-app>
<context-param>
    <param-name>dname</param-name>
    <param-value>sun.jdbc.odbc.JdbcOdbcDriver</param-value>
</context-param>
</web-app>`}</code></pre>
                <h6 className="h6">welcome.jsp</h6>
                <pre><code>{`<%
out.print("Welcome "+request.getParameter("uname"));
String driver=application.getInitParameter("dname");
out.print("driver name is="+driver);
%>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-6-circle"></i> JSP session implicit object</h3>
                <p>In JSP, session is an implicit object of type HttpSession.</p>
                <h5 className="h5">Example:</h5>
                <h6 className="h6">index.html</h6>
                <pre><code>{`<html>
<body>
<form action="welcome.jsp">
    <input type="text" name="uname">
    <input type="submit" value="go"></br>
</form>
</body>
</html>`}</code></pre>
                <h6 className="h6">welcome.jsp</h6>
                <pre><code>{`<html>
<body>
<%
String name=request.getParameter("uname");
out.print("Welcome "+name);
session.setAttribute("user",name);
%>
<a href="second.jsp">second jsp page</a>
</body>
</html>`}</code></pre>
                <h6 className="h6">second.jsp</h6>
                <pre><code>{`<html>
<body>
<%
String name=(String)session.getAttribute("user");
out.print("Hello "+name);
%>
</body>
</html>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-7-circle"></i> JSP pageContext implicit object</h3>
                <p>In JSP, pageContext is an implicit object of type PageContext class.</p>
                <h5 className="h5">Example:</h5>
                <h6 className="h6">welcome.jsp</h6>
                <pre><code>{`<html>
<body>
<%
String name=request.getParameter("uname");
out.print("Welcome "+name);
pageContext.setAttribute("user",name,PageContext.SESSION_SCOPE);
%>
<a href="second.jsp">second jsp page</a>
</body>
</html>`}</code></pre>
                <h6 className="h6">second.jsp</h6>
                <pre><code>{`<html>
<body>
<%
String name=(String)pageContext.getAttribute("user",PageContext.SESSION_SCOPE);
out.print("Hello "+name);
%>
</body>
</html>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-8-circle"></i> JSP page implicit object</h3>
                <p>Page implicit variable holds the currently executed servlet object for the corresponding JSP.</p>
                <h5 className="h5">Example:</h5>
                <pre><code>{`<html>
<body>
<% String pageName = page.toString();
out.println("Page Name is " +pageName);%>
</body>
</html>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-9-circle"></i> JSP exception implicit object</h3>
                <p>Exception is the implicit object of the Throwable class. It is used for exception handling in JSP.</p>
                <h5 className="h5">Example:</h5>
                <h6 className="h6">error.jsp</h6>
                <pre><code>{`<%@ page errorPage="isErrorpage.jsp"%>
<html>
<body>
<%
int[] num1={1,2,3,4};
out.println(num1[5]);
%>
</body>
</html>`}</code></pre>
                <h6 className="h6">isErrorpage.jsp</h6>
                <pre><code>{`<%@ page isErrorPage="true"%>
<html>
<body>
sorry an exception occured
<br>The Exception is <%= exception %>
</body>
</html>`}</code></pre>
              </div>
            </section>

            <section id="directives" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-text"></i> JSP Directives</h2>
              <div className="property-card">
                <p>The JSP directives are messages that tells the web container how to translate a JSP page into the corresponding servlet.</p>
                <p>There are three types of directives:</p>
                <ol>
                  <li>Page directive</li>
                  <li>Include directive</li>
                  <li>Taglib directive</li>
                </ol>
                <h5 className="h5">Syntax of JSP Directive:</h5>
                <pre><code>{`<%@ directive attribute="value" %>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> JSP Page Directive</h3>
                <p>The page directive defines attributes that apply to an entire JSP page.</p>
                <h5 className="h5">Syntax:</h5>
                <pre><code>{`<%@ page attribute="value" %>`}</code></pre>
                <h5 className="h5">Attributes of JSP page directive:</h5>
                <ul>
                  <li>import</li>
                  <li>contentType</li>
                  <li>extends</li>
                  <li>info</li>
                  <li>buffer</li>
                  <li>language</li>
                  <li>isELIgnored</li>
                  <li>isThreadSafe</li>
                  <li>autoFlush</li>
                  <li>session</li>
                  <li>pageEncoding</li>
                  <li>errorPage</li>
                  <li>isErrorPage</li>
                </ul>

                <h5 className="h5 mt-3">1) import:</h5>
                <p>The import attribute is used to import class, interface or all the members of a package.</p>
                <h6 className="h6">Example:</h6>
                <pre><code>{`<html>
<body>
<%@ page import="java.util.Date" %>
Today is: <%= new Date() %>
</body>
</html>`}</code></pre>

                <h5 className="h5 mt-3">2) contentType:</h5>
                <p>The contentType attribute defines the MIME(Multipurpose Internet Mail Extension) type of the HTTP response.</p>
                <h6 className="h6">Example:</h6>
                <pre><code>{`<html>
<body>
<%@ page contentType="application/msword" %>
Today is: <%= new java.util.Date() %>
</body>
</html>`}</code></pre>

                <h5 className="h5 mt-3">3) extends:</h5>
                <p>The extends attribute defines the parent class that will be inherited by the generated servlet.</p>

                <h5 className="h5 mt-3">4) info:</h5>
                <p>This attribute simply sets the information of the JSP page which is retrieved later by using getServletInfo() method.</p>
                <h6 className="h6">Example:</h6>
                <pre><code>{`<html>
<body>
<%@ page info="composed by Someone" %>
Today is: <%= getServletInfo() %>
</body>
</html>`}</code></pre>

                <h5 className="h5 mt-3">5) buffer:</h5>
                <p>The buffer attribute sets the buffer size in kilobytes to handle output generated by the JSP page.</p>
                <h6 className="h6">Example:</h6>
                <pre><code>{`<html>
<body>
<%@ page buffer="16kb" %>
Today is: <%= new java.util.Date() %>
</body>
</html>`}</code></pre>

                <h5 className="h5 mt-3">6) language:</h5>
                <p>The language attribute specifies the scripting language used in the JSP page. The default value is "java".</p>

                <h5 className="h5 mt-3">7) isELIgnored:</h5>
                <p>We can ignore the Expression Language (EL) in JSP by the isELIgnored attribute.</p>
                <h6 className="h6">Example:</h6>
                <pre><code>{`<%@ page isELIgnored="true" %>  // Now EL will be ignored`}</code></pre>

                <h5 className="h5 mt-3">8) isThreadSafe:</h5>
                <p>Servlet and JSP both are multithreaded. If you want to control this behavior of JSP page, you can use isThreadSafe attribute.</p>
                <h6 className="h6">Example:</h6>
                <pre><code>{`<%@ page isThreadSafe="false" %>`}</code></pre>

                <h5 className="h5 mt-3">9) errorPage:</h5>
                <p>The errorPage attribute is used to define the error page, if exception occurs in the current page.</p>
                <h6 className="h6">Example:</h6>
                <pre><code>{`<%@ page errorPage="myerrorpage.jsp" %>
<html>
<body>
<%= 100/0 %>
</body>
</html>`}</code></pre>

                <h5 className="h5 mt-3">10) isErrorPage:</h5>
                <p>The isErrorPage attribute is used to declare that the current page is the error page.</p>
                <h6 className="h6">Example:</h6>
                <pre><code>{`<html>
<body>
<%@ page isErrorPage="true" %>
Sorry an exception occurred!</br>
The exception is: <%= exception %>
</body>
</html>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> JSP Include Directive</h3>
                <p>The include directive is used to include the contents of any resource (JSP file, HTML file or text file).</p>
                <h5 className="h5">Advantage:</h5>
                <ul>
                  <li>Code Reusability</li>
                </ul>
                <h5 className="h5">Syntax:</h5>
                <pre><code>{`<%@ include file="resourceName" %>`}</code></pre>
                <h5 className="h5">Example:</h5>
                <pre><code>{`<html>
<body>
<%@ include file="header.html" %>
Today is: <%= java.util.Calendar.getInstance().getTime() %>
</body>
</html>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> JSP Taglib Directive</h3>
                <p>The JSP taglib directive is used to define a tag library that defines many tags.</p>
                <h5 className="h5">Syntax:</h5>
                <pre><code>{`<%@ taglib uri="uriofthetaglibrary" prefix="prefixoftaglibrary" %>`}</code></pre>
              </div>
            </section>

            <section id="exception" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-exclamation-triangle"></i> JSP Exception Handling</h2>
              <div className="property-card">
                <p>The exception is normally an object that is thrown at runtime. Exception Handling is the process to handle the runtime errors.</p>
                <p>In JSP, there are different ways to perform exception handling:</p>
                <ul>
                  <li>By <strong>errorPage</strong> and <strong>isErrorPage</strong> attributes of page directive</li>
                </ul>
                <h5 className="h5">Example:</h5>
                <h6 className="h6">index.jsp</h6>
                <pre><code>{`<html>
<body>
<form action="process.jsp">
No1:<input type="text" name="n1" /><br/><br/>
No2:<input type="text" name="n2" /><br/><br/>
<input type="submit" value="divide"/>
</form>
</body>
</html>`}</code></pre>
                <h6 className="h6">process.jsp</h6>
                <pre><code>{`<%@ page errorPage="error.jsp" %>
<%
String num1=request.getParameter("n1");
String num2=request.getParameter("n2");
int a=Integer.parseInt(num1);
int b=Integer.parseInt(num2);
int c=a/b;
out.print("division of numbers is: "+c);
%>`}</code></pre>
                <h6 className="h6">error.jsp</h6>
                <pre><code>{`<%@ page isErrorPage="true" %>  
<h3>Sorry an exception occurred!</h3>  
Exception is: <%= exception %>`}</code></pre>
              </div>
            </section>

            <section id="actions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-lightning"></i> JSP Action Tags</h2>
              <div className="property-card">
                <p>There are many JSP action tags or elements. Each JSP action tag is used to perform some specific tasks.</p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>JSP Action Tags</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>jsp:forward</td>
                      <td>forwards the request and response to another resource</td>
                    </tr>
                    <tr>
                      <td>jsp:include</td>
                      <td>includes another resource</td>
                    </tr>
                    <tr>
                      <td>jsp:useBean</td>
                      <td>creates or locates bean object</td>
                    </tr>
                    <tr>
                      <td>jsp:setProperty</td>
                      <td>sets the value of property in bean object</td>
                    </tr>
                    <tr>
                      <td>jsp:getProperty</td>
                      <td>prints the value of property of the bean</td>
                    </tr>
                    <tr>
                      <td>jsp:plugin</td>
                      <td>embeds another components such as applet</td>
                    </tr>
                    <tr>
                      <td>jsp:param</td>
                      <td>sets the parameter value (used in forward and include mostly)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> jsp:forward action tag</h3>
                <p>The jsp:forward action tag is used to forward the request to another resource (JSP, HTML or another resource).</p>
                <h5 className="h5">Syntax without parameter:</h5>
                <pre><code>{`<jsp:forward page="relativeURL | <%= expression %>" />`}</code></pre>
                <h5 className="h5">Syntax with parameter:</h5>
                <pre><code>{`<jsp:forward page="relativeURL | <%= expression %>" >
<jsp:param name="parametername" value="parametervalue | <%=expression%>" />
</jsp:forward>`}</code></pre>
                <h5 className="h5">Example:</h5>
                <h6 className="h6">index.jsp</h6>
                <pre><code>{`<html>
<body>
<h2>this is index page</h2>
<jsp:forward page="printdate.jsp" >
<jsp:param name="name" value="javahello.com" />
</jsp:forward>
</body>
</html>`}</code></pre>
                <h6 className="h6">printdate.jsp</h6>
                <pre><code>{`<html>
<body>
<% out.print("Today is:"+java.util.Calendar.getInstance().getTime()); %>
<%= request.getParameter("name") %>
</body>
</html>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> jsp:include action tag</h3>
                <p>The jsp:include action tag is used to include the content of another resource (JSP, HTML or servlet).</p>
                <h5 className="h5">Advantage:</h5>
                <ul>
                  <li>Code reusability</li>
                </ul>
                <h5 className="h5">Syntax without parameter:</h5>
                <pre><code>{`<jsp:include page="relativeURL | <%= expression %>" />`}</code></pre>
                <h5 className="h5">Syntax with parameter:</h5>
                <pre><code>{`<jsp:include page="relativeURL | <%= expression %>" >
<jsp:param name="parametername" value="parametervalue | <%=expression%>" />
</jsp:include>`}</code></pre>
                <h5 className="h5">Example:</h5>
                <h6 className="h6">index.jsp</h6>
                <pre><code>{`<h2>this is index page</h2>
<jsp:include page="printdate.jsp" />
<h2>end section of index page</h2>`}</code></pre>
                <h6 className="h6">printdate.jsp</h6>
                <pre><code>{`<% out.print("Today is:"+java.util.Calendar.getInstance().getTime()); %>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> jsp:useBean action tag</h3>
                <p>The jsp:useBean action tag is used to locate or instantiate a bean class.</p>
                <h5 className="h5">Syntax:</h5>
                <pre><code>{`<jsp:useBean id="instanceName" scope="page | request | session | application"
class="packageName.className" type="packageName.className"
beanName="packageName.className | <%= expression >" >
</jsp:useBean>`}</code></pre>
                <h5 className="h5">Example:</h5>
                <h6 className="h6">Calculator.java (a simple Bean class)</h6>
                <pre><code>{`package com;
public class Calculator {
    public int add(int a,int b) {
        return (a+b);
    }
}`}</code></pre>
                <h6 className="h6">index.jsp file:</h6>
                <pre><code>{`<jsp:useBean id="obj" class="com.Calculator"/>
<%
int m=obj.add(5,10);
out.print("add of 5 and 10 is "+m);
%>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> jsp:setProperty and jsp:getProperty action tags</h3>
                <p>The setProperty and getProperty action tags are used for developing web application with Java Bean.</p>
                <h5 className="h5">Syntax of jsp:setProperty:</h5>
                <pre><code>{`<jsp:setProperty name="instanceOfBean" property="*"
property="propertyName" param="parameterName"
property="propertyName" value="{ string | <%= expression %>}"/>`}</code></pre>
                <h5 className="h5">Examples:</h5>
                <ul>
                  <li>Set all values from request: <code>&lt;jsp:setProperty name="bean" property="*" /&gt;</code></li>
                  <li>Set specific property from request: <code>&lt;jsp:setProperty name="bean" property="username" /&gt;</code></li>
                  <li>Set specific value: <code>&lt;jsp:setProperty name="bean" property="username" value="Kumar"/&gt;</code></li>
                </ul>
                <h5 className="h5">Syntax of jsp:getProperty:</h5>
                <pre><code>{`<jsp:getProperty name="instanceOfBean" property="propertyName"/>`}</code></pre>
                <h5 className="h5">Example of bean development in JSP:</h5>
                <h6 className="h6">index.html</h6>
                <pre><code>{`<form action="process.jsp">
Name:<input type="text" name="name"></br>
Password:<input type="password" name="password"></br>
Email:<input type="text" name="email"></br>
<input type="submit" value="register">
</form>`}</code></pre>
                <h6 className="h6">process.jsp</h6>
                <pre><code>{`<jsp:useBean id="u" class="org.sssit.User"></jsp:useBean>
<jsp:setProperty property="*" name="u"/>
Record:<br>
<jsp:getProperty property="name" name="u"/><br>
<jsp:getProperty property="password" name="u"/><br>
<jsp:getProperty property="email" name="u"/><br>`}</code></pre>
                <h6 className="h6">User.java</h6>
                <pre><code>{`package org.sssit;
public class User {
    private String name;
    private String password;
    private String email;

    // No-argument constructor
    public User() {}

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}`}</code></pre>
              </div>
            </section>

            <section id="el" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-braces"></i> Expression Language in JSP</h2>
              <div className="property-card">
                <ul>
                  <li>The Expression Language (EL) simplifies the accessibility of data stored in the Java Bean component, and other objects like request, session, application etc.</li>
                  <li>There are many implicit objects, operators and reserve words in EL.</li>
                  <li>It is the newly added feature in JSP technology version 2.0.</li>
                </ul>
                <h5 className="h5">Syntax:</h5>
                <pre><code>{`\${ expression }`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-box-seam"></i> Implicit Objects in Expression Language (EL)</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Implicit Objects</th>
                      <th>Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>sessionScope</td>
                      <td>maps the given attribute name with the value set in the session scope</td>
                    </tr>
                    <tr>
                      <td>param</td>
                      <td>maps the request parameter to the single value</td>
                    </tr>
                    <tr>
                      <td>cookie</td>
                      <td>maps the given cookie name to the cookie value</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> EL param example</h3>
                <h5 className="h5">index.jsp</h5>
                <pre><code>{`<html>
<body>
<form action="process.jsp">
Enter Name:<input type="text" name="name" /><br/><br/>
<input type="submit" value="go"/>
</form>
</body>
</html>`}</code></pre>
                <h5 className="h5">process.jsp</h5>
                <pre><code>{`Welcome, \${ param.name }`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> EL sessionScope example</h3>
                <h5 className="h5">index.jsp</h5>
                <pre><code>{`<h3>welcome to index page</h3>
<%
session.setAttribute("user","sonoo");
%>
<a href="process.jsp">visit</a>`}</code></pre>
                <h5 className="h5">process.jsp</h5>
                <pre><code>{`Value is \${ sessionScope.user }`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> EL cookie example</h3>
                <h5 className="h5">index.jsp</h5>
                <pre><code>{`<h1>First JSP</h1>
<%
Cookie ck=new Cookie("name","abhishek");
response.addCookie(ck);
%>
<a href="process.jsp">click</a>`}</code></pre>
                <h5 className="h5">process.jsp</h5>
                <pre><code>{`Hello, \${cookie.name.value}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-calculator"></i> Precedence of Operators in EL</h3>
                <ol>
                  <li><code>[] .</code></li>
                  <li><code>()</code></li>
                  <li><code>- (unary) not ! empty</code></li>
                  <li><code>* / div % mod</code></li>
                  <li><code>+ - (binary)</code></li>
                  <li><code>&lt; &lt;= &gt; &gt;= lt le gt ge</code></li>
                  <li><code>== != eq ne</code></li>
                  <li><code>&amp;&amp; and</code></li>
                  <li><code>|| or</code></li>
                  <li><code>?:</code></li>
                </ol>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-exclamation-triangle"></i> Reserve words in EL</h3>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>lt</td>
                      <td>le</td>
                      <td>gt</td>
                      <td>ge</td>
                    </tr>
                    <tr>
                      <td>eq</td>
                      <td>ne</td>
                      <td>true</td>
                      <td>false</td>
                    </tr>
                    <tr>
                      <td>and</td>
                      <td>or</td>
                      <td>not</td>
                      <td>instanceof</td>
                    </tr>
                    <tr>
                      <td>div</td>
                      <td>mod</td>
                      <td>empty</td>
                      <td>null</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="jdbc" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> JSP JDBC CRUD</h2>
              
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-plus-circle"></i> Insert Record</h3>
                <h5 className="h5">Table Creation:</h5>
                <pre><code>{`create table sample(firstname varchar(50),lastname varchar(50),username varchar(50),password varchar(50));`}</code></pre>
                <h5 className="h5">index.html</h5>
                <pre><code>{`<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action="insert.jsp" method = "post">
First Name<input type="text" name="firstName"></br>
Last Name<input type="text" name="lastName"></br>
Username<input type="text" name="userName"></br>
Password<input type="password" name="passWord"></br>
<input type="submit" value="submit">
</form>
</body>
</html>`}</code></pre>
                <h5 className="h5">insert.jsp</h5>
                <pre><code>{`<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%
String first = request.getParameter("firstName");
String last = request.getParameter("lastName");
String user = request.getParameter("userName");
String pass = request.getParameter("passWord");
Class.forName("com.mysql.cj.jdbc.Driver");
Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/javascript1", "root", "pass");
PreparedStatement ps = con.prepareStatement("insert into sample values(?,?,?,?)");
ps.setString(1, first);
ps.setString(2, last);
ps.setString(3, user);
ps.setString(4, pass);
int i = ps.executeUpdate();
if(i>0){
    out.println("Values Inserted Successfully");
}
%>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-check"></i> Select Records</h3>
                <pre><code>{`<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%
Class.forName("com.mysql.cj.jdbc.Driver ");
Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/javascript", "root", "pass");
PreparedStatement ps = con.prepareStatement("select * from sample");
ResultSet r = ps.executeQuery(); %>
<table BORDER="2" BORDERCOLOR="red">
<tr><th> First Name</th><th>Last Name </th><th>Username </th><th>Password </th></tr>
<% while(r.next()) { %>
<tr><td><%out.print(r.getString("firstName")); %></td><td><%out.print(r.getString("lastName")); %></td><td><%out.print(r.getString("userName")); %></td><td><%out.print(r.getString("passWord")); %></td></tr>
<% } %></table>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-pencil-square"></i> Update Record</h3>
                <h5 className="h5">Update.html</h5>
                <pre><code>{`<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action="update.jsp" method = "post">
Username<input type="text" name="userName"></br>
Password<input type="password" name="passWord"></br>
<input type="submit" value="submit">
</form>
</body>
</html>`}</code></pre>
                <h5 className="h5">Update.jsp</h5>
                <pre><code>{`<%@page import="java.sql.PreparedStatement" %>
<%@page import="java.sql.DriverManager" %>
<%@page import="java.sql.Connection"%>
<%
String user = request.getParameter("userName");
String pass = request.getParameter("passWord");
Class.forName("com.mysql.cj.jdbc.Driver");
Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/javascript ", "root", "pass");
PreparedStatement ps = con.prepareStatement("update sample set password = ? where username = ?");
ps.setString(1, pass);
ps.setString(2, user);
int i = ps.executeUpdate();
if(i>0){
    out.println("Values Updated Successfully");
}
%>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-trash"></i> Delete Record</h3>
                <h5 className="h5">Delete.html</h5>
                <pre><code>{`<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action="delete.jsp" method = "post">
Username<input type="text" name="userName"></br>
<input type="submit" value="submit">
</form>
</body>
</html>`}</code></pre>
                <h5 className="h5">Delete.jsp</h5>
                <pre><code>{`<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%
String user = request.getParameter("userName");
Class.forName("com.mysql.cj.jdbc.Driver");
Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/javascript ", "root", "pass");
PreparedStatement ps = con.prepareStatement("delete from sample where username = ?");
ps.setString(1, user);
int i = ps.executeUpdate();
if(i>0){
    out.println("Values deleted Successfully");
}
%>`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-upload"></i> Uploading File in JSP</h3>
                <p>There are many ways to upload the file to the server. One of the way is by the MultipartRequest class.</p>
                <h5 className="h5">MultipartRequest class:</h5>
                <p>It is a utility class to handle the multipart/form-data request.</p>
                <h5 className="h5">Example:</h5>
                <h6 className="h6">index.jsp</h6>
                <pre><code>{`<html>
<body>
<form action="upload.jsp" enctype="multipart/form-data" method="post">
Select File: <input type="file" name="fname"/> <br/>
<input type = "Submit"></form>
</body>
</html>`}</code></pre>
                <h6 className="h6">upload.jsp</h6>
                <pre><code>{`<%@ page import="com.oreilly.servlet.MultipartRequest" %>
<%
MultipartRequest m = new MultipartRequest(request, "d:/new");
out.print("successfully uploaded");
%>`}</code></pre>
              </div>
            </section>

            <section id="mvc" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> MVC in JSP</h2>
              <div className="property-card">
                <ul>
                  <li><strong>MVC</strong> stands for Model View and Controller.</li>
                  <li>It is a design pattern that separates the business logic, presentation logic and data.</li>
                  <li><strong>Controller</strong> acts as an interface between View and Model. Controller intercepts all the incoming requests.</li>
                  <li><strong>Model</strong> represents the state of the application i.e. data. It can also have business logic.</li>
                  <li><strong>View</strong> represents the presentation i.e. UI(User Interface).</li>
                </ul>
                <h5 className="h5">Advantage:</h5>
                <ul>
                  <li>Easy to maintain the large application</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> MVC Example</h3>
                <h5 className="h5">index.jsp</h5>
                <pre><code>{`<html>
<body>
<form action="ControllerServlet" method="post">
Name:<input type="text" name="name"></br>
Password:<input type="password" name="password"></br>
<input type="submit" value="login">
</form>
</body>
</html>`}</code></pre>
                <h5 className="h5">ControllerServlet.java</h5>
                <pre><code>{`package com;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class ControllerServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out=response.getWriter();
        String name=request.getParameter("name");
        String password=request.getParameter("password");
        LoginBean bean=new LoginBean();
        bean.setName(name);
        bean.setPassword(password);
        request.setAttribute("bean",bean);
        boolean status=bean.validate();
        
        if(status){
            RequestDispatcher rd=request.getRequestDispatcher("login-success.jsp");
            rd.forward(request, response);
        }
        else{
            RequestDispatcher rd=request.getRequestDispatcher("login-error.jsp");
            rd.forward(request, response);
        }
    }
}`}</code></pre>
                <h5 className="h5">LoginBean.java</h5>
                <pre><code>{`package com;
public class LoginBean {
    private String name,password;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public boolean validate() {
        if(password.equals("admin")) {
            return true;
        }
        else{
            return false;
        }
    }
}`}</code></pre>
                <h5 className="h5">login-success.jsp</h5>
                <pre><code>{`<%@page import="com.LoginBean"%>
<p>You are successfully logged in!</p>
<%
LoginBean bean=(LoginBean)request.getAttribute("bean");
out.print("Welcome, "+bean.getName());
%>`}</code></pre>
                <h5 className="h5">login-error.jsp</h5>
                <pre><code>{`<p>Sorry! username or password error</p>
<%@ include file="index.jsp" %>`}</code></pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>JSP Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default JspNotes;