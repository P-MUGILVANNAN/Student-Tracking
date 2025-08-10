import React from 'react';

function ServletNotes() {
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
          .method-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1rem;
          }
          .method-table th, .method-table td {
            border: 1px solid #dee2e6;
            padding: 0.75rem;
            text-align: left;
          }
          .method-table th {
            background-color: #e9ecef;
          }
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-java"></i> Servlet Notes</h1>
          <p className="lead">Your Comprehensive Guide to Java Servlets</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> What is Servlet?</a>
              <a className="nav-link" href="#disadvantages-cgi"><i className="bi bi-x-circle"></i> Disadvantages of CGI</a>
              <a className="nav-link" href="#advantages-servlet"><i className="bi bi-check-circle"></i> Advantages of Servlet</a>
              <a className="nav-link" href="#servlet-container"><i className="bi bi-box"></i> Servlet Container</a>
              <a className="nav-link" href="#servlet-api"><i className="bi bi-code-square"></i> Servlet API</a>
              <a className="nav-link" href="#servlet-interface"><i className="bi bi-plug"></i> Servlet Interface</a>
              <a className="nav-link" href="#generic-servlet"><i className="bi bi-file-earmark-code"></i> GenericServlet</a>
              <a className="nav-link" href="#http-servlet"><i className="bi bi-globe"></i> HttpServlet</a>
              <a className="nav-link" href="#servlet-request"><i className="bi bi-arrow-down-circle"></i> ServletRequest</a>
              <a className="nav-link" href="#servlet-response"><i className="bi bi-arrow-up-circle"></i> ServletResponse</a>
              <a className="nav-link" href="#servlet-chaining"><i className="bi bi-link"></i> Servlet Chaining</a>
              <a className="nav-link" href="#servlet-config"><i className="bi bi-gear"></i> ServletConfig</a>
              <a className="nav-link" href="#servlet-context"><i className="bi bi-server"></i> ServletContext</a>
              <a className="nav-link" href="#session-tracking"><i className="bi bi-person-badge"></i> Session Tracking</a>
              <a className="nav-link" href="#servlet-jdbc"><i className="bi bi-database"></i> Servlet JDBC CRUD</a>
              <a className="nav-link" href="#file-upload"><i className="bi bi-upload"></i> File Upload</a>
              <a className="nav-link" href="#login-example"><i className="bi bi-box-arrow-in-right"></i> Login Example</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> What is a Servlet?</h2>
              <div className="property-card">
                <ul>
                  <li>Servlet is a technology used to create web applications.</li>
                  <li>Servlet is an API that provides many interfaces and classes including documentation.</li>
                  <li>Servlet is an interface that must be implemented for creating any servlet.</li>
                  <li>Servlet is a class that extends the capabilities of the servers and responds to incoming requests. It can respond to any type of requests.</li>
                  <li>Servlet is a web component that is deployed on the server to create dynamic web pages.</li>
                  <li>There are many interfaces and classes in the servlet API such as Servlet, GenericServlet, HttpServlet, ServletRequest, ServletResponse etc.</li>
                </ul>
              </div>
            </section>

            <section id="disadvantages-cgi" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-x-circle"></i> Disadvantages of CGI</h2>
              <div className="property-card">
                <ul>
                  <li>If number of clients increases, it takes more time for sending response.</li>
                  <li>For each request, it starts a process and Web server is limited to start processes.</li>
                  <li>It uses platform dependent language e.g. C, C++, perl.</li>
                </ul>
                <div className="mt-3">
                  <h4 className="h5">CGI Process Flow</h4>
                  <pre>{`
**Request**   **Request**   **Request**
    |            |            |
    v            v            v
**Server** -> **CGI Shell** -> **CGI Program**
                  `}</pre>
                </div>
              </div>
            </section>

            <section id="advantages-servlet" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-check-circle"></i> Advantages of Servlet</h2>
              <div className="property-card">
                <ul>
                  <li><strong>Better performance:</strong> Because it creates a thread for each request not process.</li>
                  <li><strong>Portability:</strong> Because it uses Java language.</li>
                  <li><strong>Robust:</strong> Servlets are managed by JVM so we don't need to worry about memory leak, garbage collection etc.</li>
                  <li><strong>Secure:</strong> Because it uses Java language.</li>
                </ul>
                <div className="mt-3">
                  <p>The web container creates threads for handling the multiple requests to the servlet. Threads have a lot of benefits over the Processes such as they share a common memory area, lightweight, cost of communication between the threads are low.</p>
                </div>
              </div>
            </section>

            <section id="servlet-container" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box"></i> Servlet Container</h2>
              <div className="property-card">
                <ul>
                  <li>It provides the runtime environment for JavaEE (j2ee) applications.</li>
                  <li>The client/user can request only a static WebPages from the server.</li>
                  <li>If the user wants to read the web pages as per input then the servlet container is used in java.</li>
                  <li>The servlet container is the part of web server which can be run in a separate process.</li>
                </ul>

                <h4 className="h5 mt-4">Servlet Container States:</h4>
                <ol>
                  <li>
                    <strong>Standalone:</strong>
                    <ul>
                      <li>It is typical Java-based servers in which the servlet container and the web servers are the integral part of a single program.</li>
                      <li>For example: Tomcat running by itself</li>
                    </ul>
                  </li>
                  <li>
                    <strong>In-process:</strong>
                    <ul>
                      <li>It is separated from the web server, because a different program runs within the address space of the main server as a plug-in.</li>
                      <li>For example: Tomcat running inside the JBoss.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Out-of-process:</strong>
                    <ul>
                      <li>The web server and servlet container are different programs which are run in a different process.</li>
                      <li>For performing the communications between them, web server uses the plug-in provided by the servlet container.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </section>

            <section id="servlet-api" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> Servlet API</h2>
              <div className="property-card">
                <ul>
                  <li>The jakarta.servlet and jakarta.servlet.http packages represent interfaces and classes for servlet api.</li>
                  <li>The jakarta.servlet package contains many interfaces and classes that are used by the servlet or web container. These are not specific to any protocol.</li>
                  <li>The jakarta.servlet.http package contains interfaces and classes that are responsible for http requests only.</li>
                </ul>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="property-card">
                      <h4 className="h5">Interfaces in jakarta.servlet package:</h4>
                      <ul>
                        <li>Servlet</li>
                        <li>ServletRequest</li>
                        <li>ServletResponse</li>
                        <li>RequestDispatcher</li>
                        <li>ServletConfig</li>
                        <li>ServletContext</li>
                        <li>SingleThreadModel</li>
                        <li>Filter</li>
                        <li>FilterConfig</li>
                        <li>FilterChain</li>
                        <li>ServletRequestListener</li>
                        <li>ServletRequestAttributeListener</li>
                        <li>ServletContextListener</li>
                        <li>ServletContextAttributeListener</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property-card">
                      <h4 className="h5">Classes in jakarta.servlet package:</h4>
                      <ul>
                        <li>GenericServlet</li>
                        <li>ServletInputStream</li>
                        <li>ServletOutputStream</li>
                        <li>ServletRequestWrapper</li>
                        <li>ServletResponseWrapper</li>
                        <li>ServletRequestEvent</li>
                        <li>ServletContextEvent</li>
                        <li>ServletRequestAttributeEvent</li>
                        <li>ServletContextAttributeEvent</li>
                        <li>ServletException</li>
                        <li>UnavailableException</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="property-card">
                      <h4 className="h5">Interfaces in jakarta.servlet.http package:</h4>
                      <ul>
                        <li>HttpServletRequest</li>
                        <li>HttpServletResponse</li>
                        <li>HttpSession</li>
                        <li>HttpSessionListener</li>
                        <li>HttpSessionAttributeListener</li>
                        <li>HttpSessionBindingListener</li>
                        <li>HttpSessionActivationListener</li>
                        <li>HttpSessionContext (deprecated now)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property-card">
                      <h4 className="h5">Classes in jakarta.servlet.http package:</h4>
                      <ul>
                        <li>HttpServlet</li>
                        <li>Cookie</li>
                        <li>HttpServletRequestWrapper</li>
                        <li>HttpServletResponseWrapper</li>
                        <li>HttpSessionEvent</li>
                        <li>HttpSessionBindingEvent</li>
                        <li>HttpUtils (deprecated now)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="servlet-interface" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-plug"></i> Servlet Interface</h2>
              <div className="property-card">
                <ul>
                  <li>Servlet interface provides common behavior to all the servlets.</li>
                  <li>Servlet interface defines methods that all servlets must implement.</li>
                  <li>Servlet interface needs to be implemented for creating any servlet (either directly or indirectly).</li>
                </ul>

                <h4 className="h5 mt-4">Servlet Interface Methods:</h4>
                <table className="method-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>public void init(ServletConfig config)</code></td>
                      <td>Initializes the servlet. It is the life cycle method of servlet and invoked by the web container only once.</td>
                    </tr>
                    <tr>
                      <td><code>public void service(ServletRequest request, ServletResponse response)</code></td>
                      <td>Provides response for the incoming request. It is invoked at each request by the web container.</td>
                    </tr>
                    <tr>
                      <td><code>public void destroy()</code></td>
                      <td>Is invoked only once and indicates that servlet is being destroyed.</td>
                    </tr>
                    <tr>
                      <td><code>public ServletConfig getServletConfig()</code></td>
                      <td>Returns the object of ServletConfig.</td>
                    </tr>
                    <tr>
                      <td><code>public String getServletInfo()</code></td>
                      <td>Returns information about servlet such as writer, copyright, version etc.</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-4">Servlet Example by implementing Servlet interface:</h4>
                <pre>{`package sample;

import jakarta.servlet.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/Life")
public class Life extends HttpServlet {
    private static final long serialVersionUID = 1L;
    ServletConfig config=null;
    
    public void init(ServletConfig config) {
        this.config=config;
        System.out.println("servlet is initialized");
    }

    public Life() {
        super();
    }

    protected void service(HttpServletRequest request, HttpServletResponse response) 
        throws ServletException, IOException {
        
        ServletConfig servletConfig = getServletConfig();
        String servletInfo = getServletInfo();
        response.setContentType("text/html");
        PrintWriter out=response.getWriter();
        out.print("<html><body>");
        out.print("<b>hello simple servlet</b>");
        out.print("<p>"+servletConfig+"</p>");
        out.print("<p>"+servletInfo+"</p>");
        out.print("</body></html>");
    }
    
    public void destroy() {
        System.out.println("servlet is destroyed");
    }
    
    public ServletConfig getServletConfig() {
        return config;
    }
    
    public String getServletInfo() {
        return "copyright 2007-1010";
    }
}`}</pre>
              </div>
            </section>

            <section id="generic-servlet" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> GenericServlet Class</h2>
              <div className="property-card">
                <ul>
                  <li>Implements Servlet, ServletConfig and Serializable interfaces.</li>
                  <li>It provides the implementation of all the methods of these interfaces except the service method.</li>
                  <li>GenericServlet class can handle any type of request so it is protocol-independent.</li>
                  <li>You may create a generic servlet by inheriting the GenericServlet class and providing the implementation of the service method.</li>
                </ul>

                <h4 className="h5 mt-4">Methods of GenericServlet class:</h4>
                <ol>
                  <li><code>public void init(ServletConfig config)</code> - Used to initialize the servlet.</li>
                  <li><code>public abstract void service(ServletRequest request, ServletResponse response)</code> - Provides service for the incoming request. It is invoked at each time when user requests for a servlet.</li>
                  <li><code>public void destroy()</code> - Is invoked only once throughout the life cycle and indicates that servlet is being destroyed.</li>
                  <li><code>public ServletConfig getServletConfig()</code> - Returns the object of ServletConfig.</li>
                  <li><code>public String getServletInfo()</code> - Returns information about servlet such as writer, copyright, version etc.</li>
                  <li><code>public void init()</code> - Convenient method for the servlet programmers, now there is no need to call super.init(config)</li>
                  <li><code>public ServletContext getServletContext()</code> - Returns the object of ServletContext.</li>
                  <li><code>public String getInitParameter(String name)</code> - Returns the parameter value for the given parameter name.</li>
                  <li><code>public Enumeration getInitParameterNames()</code> - Returns all the parameters defined in the web.xml file.</li>
                  <li><code>public String getServletName()</code> - Returns the name of the servlet object.</li>
                  <li><code>public void log(String msg)</code> - Writes the given message in the servlet log file.</li>
                  <li><code>public void log(String msg,Throwable t)</code> - Writes the explanatory message in the servlet log file and a stack trace.</li>
                </ol>

                <h4 className="h5 mt-4">Servlet Example by inheriting the GenericServlet class:</h4>
                <pre>{`import java.io.*;
import jakarta.servlet.*;

public class First extends GenericServlet {
    public void service(ServletRequest req, ServletResponse res) 
        throws IOException, ServletException {
        
        res.setContentType("text/html");
        PrintWriter out=res.getWriter();
        out.print("<html><body>");
        out.print("<b>Hello Generic servlet</b>");
        out.print("</body></html>");
    }
}`}</pre>
              </div>
            </section>

            <section id="http-servlet" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-globe"></i> HttpServlet Class</h2>
              <div className="property-card">
                <ul>
                  <li>The HttpServlet class extends the GenericServlet class and implements Serializable interface.</li>
                  <li>It provides http specific methods such as doGet, doPost, doHead, doTrace etc.</li>
                </ul>

                <h4 className="h5 mt-4">Methods of HttpServlet class:</h4>
                <ol>
                  <li><code>public void service(ServletRequest req, ServletResponse res)</code> - Dispatches the request to the protected service method by converting the request and response object into http type.</li>
                  <li><code>protected void service(HttpServletRequest req, HttpServletResponse res)</code> - Receives the request from the service method, and dispatches the request to the doXXX() method depending on the incoming http request type.</li>
                  <li><code>protected void doGet(HttpServletRequest req, HttpServletResponse res)</code> - Handles the GET request. It is invoked by the web container.</li>
                  <li><code>protected void doPost(HttpServletRequest req, HttpServletResponse res)</code> - Handles the POST request. It is invoked by the web container.</li>
                  <li><code>protected void doHead(HttpServletRequest req, HttpServletResponse res)</code> - Handles the HEAD request. It is invoked by the web container.</li>
                  <li><code>protected void doOptions(HttpServletRequest req, HttpServletResponse res)</code> - Handles the OPTIONS request. It is invoked by the web container.</li>
                  <li><code>protected void doPut(HttpServletRequest req, HttpServletResponse res)</code> - Handles the PUT request. It is invoked by the web container.</li>
                  <li><code>protected void doTrace(HttpServletRequest req, HttpServletResponse res)</code> - Handles the TRACE request. It is invoked by the web container.</li>
                  <li><code>protected void doDelete(HttpServletRequest req, HttpServletResponse res)</code> - Handles the DELETE request. It is invoked by the web container.</li>
                  <li><code>protected long getLastModified(HttpServletRequest req)</code> - Returns the time when HttpServletRequest was last modified since midnight January 1, 1970 GMT.</li>
                </ol>

                <h4 className="h5 mt-4">doGet vs. doPost:</h4>
                <table className="method-table">
                  <thead>
                    <tr>
                      <th>doGet</th>
                      <th>doPost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>In case of Get request, only limited amount of data can be sent because data is sent in header.</td>
                      <td>In case of post request, large amount of data can be sent because data is sent in body.</td>
                    </tr>
                    <tr>
                      <td>Get request is not secured because data is exposed in URL bar.</td>
                      <td>Post request is secured because data is not exposed in URL bar.</td>
                    </tr>
                    <tr>
                      <td>Get request can be bookmarked.</td>
                      <td>Post request cannot be bookmarked.</td>
                    </tr>
                    <tr>
                      <td>Get request is idempotent. It means second request will be ignored until response of first request is delivered.</td>
                      <td>Post request is non-idempotent.</td>
                    </tr>
                    <tr>
                      <td>Get request is more efficient and used more than Post.</td>
                      <td>Post request is less efficient and used less than get.</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-4">Example:</h4>
                <pre>{`import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

// Extend HttpServlet class
public class HelloWorld extends HttpServlet {
    private String message;
    
    public void init() throws ServletException {
        // Do required initialization
        message = "Hello World";
    }
    
    public void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        
        // Set response content type
        response.setContentType("text/html");
        // Actual logic goes here.
        PrintWriter out = response.getWriter();
        out.println("<h1>" + message + "</h1>");
    }
    
    public void destroy() {
        // do nothing.
    }
}`}</pre>
              </div>
            </section>

            <section id="servlet-request" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-down-circle"></i> ServletRequest Interface</h2>
              <div className="property-card">
                <p>An object of ServletRequest is used to provide the client request information to a servlet such as content type, content length, parameter names and values, header informations, attributes etc.</p>

                <h4 className="h5 mt-4">Methods of ServletRequest Interface:</h4>
                <table className="method-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>public String getParameter(String name)</code></td>
                      <td>Used to obtain the value of a parameter by name.</td>
                    </tr>
                    <tr>
                      <td><code>public String[] getParameterValues(String name)</code></td>
                      <td>Returns an array of String containing all values of given parameter name. It is mainly used to obtain values of a Multi select list box.</td>
                    </tr>
                    <tr>
                      <td><code>public java.util.Enumeration getParameterNames()</code></td>
                      <td>Returns an enumeration of all of the request parameter names.</td>
                    </tr>
                    <tr>
                      <td><code>public int getContentLength()</code></td>
                      <td>Returns the size of the request entity data, or -1 if not known.</td>
                    </tr>
                    <tr>
                      <td><code>public String getCharacterEncoding()</code></td>
                      <td>Returns the character set encoding for the input of this request.</td>
                    </tr>
                    <tr>
                      <td><code>public String getContentType()</code></td>
                      <td>Returns the Internet Media Type of the request entity data, or null if not known.</td>
                    </tr>
                    <tr>
                      <td><code>public ServletInputStream getInputStream() throws IOException</code></td>
                      <td>Returns an input stream for reading binary data in the request body.</td>
                    </tr>
                    <tr>
                      <td><code>public abstract String getServerName()</code></td>
                      <td>Returns the host name of the server that received the request.</td>
                    </tr>
                    <tr>
                      <td><code>public int getServerPort()</code></td>
                      <td>Returns the port number on which this request was received.</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-4">Example:</h4>
                <p><strong>index.html</strong></p>
                <pre>{`<form action="welcome" method="get">
    Enter your name<input type="text" name="name"><br>
    <input type="submit" value="login">
</form>`}</pre>

                <p><strong>DemoServ.java</strong></p>
                <pre>{`import jakarta.servlet.http.*;
import jakarta.servlet.*;
import java.io.*;

public class DemoServ extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse response)
        throws ServletException, IOException {
        
        res.setContentType("text/html");
        PrintWriter pw=res.getWriter();
        String name=req.getParameter("name");
        pw.println("Welcome "+name);
        pw.close();
    }
}`}</pre>
              </div>
            </section>

            <section id="servlet-response" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-up-circle"></i> ServletResponse Interface</h2>
              <div className="property-card">
                <p>An object of ServletResponse is used to send data to the client. It provides response-specific methods to set content type, buffer size, character encoding etc.</p>

                <h4 className="h5 mt-4">Key Methods:</h4>
                <ul>
                  <li><code>void setContentType(String type)</code> - Sets the content type of the response being sent to the client.</li>
                  <li><code>void setCharacterEncoding(String charset)</code> - Sets the character encoding for the response.</li>
                  <li><code>PrintWriter getWriter()</code> - Returns a PrintWriter object that can send character text to the client.</li>
                  <li><code>ServletOutputStream getOutputStream()</code> - Returns a ServletOutputStream suitable for writing binary data in the response.</li>
                  <li><code>void setBufferSize(int size)</code> - Sets the preferred buffer size for the body of the response.</li>
                  <li><code>void flushBuffer()</code> - Forces any content in the buffer to be written to the client.</li>
                  <li><code>void reset()</code> - Clears any data that exists in the buffer as well as the status code and headers.</li>
                </ul>
              </div>
            </section>

            <section id="servlet-chaining" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-link"></i> Servlet Chaining</h2>
              <div className="property-card">
                <p>Servlet chaining means the output of one servlet acts as input to another servlet. There are two ways to achieve servlet chaining:</p>
                <ol>
                  <li>RequestDispatcher Interface</li>
                  <li>sendRedirect Method</li>
                </ol>

                <h4 className="h5 mt-4">1) RequestDispatcher Interface:</h4>
                <ul>
                  <li>The RequestDispatcher interface provides the facility of dispatching the request to another resource it may be html, servlet or jsp.</li>
                  <li>This interface can also be used to include the content of another resource.</li>
                  <li>It is one of the way of servlet collaboration.</li>
                </ul>

                <h5 className="h6 mt-3">Methods:</h5>
                <ol>
                  <li>
                    <code>public void forward(ServletRequest request, ServletResponse response) throws ServletException, java.io.IOException</code>
                    <p>Forwards a request from a servlet to another resource (servlet, JSP file, or HTML file) on the server.</p>
                  </li>
                  <li>
                    <code>public void include(ServletRequest request, ServletResponse response) throws ServletException, java.io.IOException</code>
                    <p>Includes the content of a resource (servlet, JSP page, or HTML file) in the response.</p>
                  </li>
                </ol>

                <h5 className="h6 mt-3">Example:</h5>
                <p><strong>index.html</strong></p>
                <pre>{`<html>
<body>
    <form action="Login" method="post">
        Name:<input type="text" name="userName"/><br/>
        Password:<input type="password" name="userPass"/><br/>
        <input type="submit" value="login"/>
    </form>
</body>
</html>`}</pre>

                <p><strong>Login.java</strong></p>
                <pre>{`import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class Login extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        String n=request.getParameter("userName");
        String p=request.getParameter("userPass");
        
        if(p.equals("servlet")) {
            RequestDispatcher rd=request.getRequestDispatcher("WelcomeServlet");
            rd.forward(request, response);
        }
        else {
            out.print("Sorry UserName or Password Error!");
            RequestDispatcher rd=request.getRequestDispatcher("/index.html");
            rd.include(request, response);
        }
    }
}`}</pre>

                <p><strong>WelcomeServlet.java</strong></p>
                <pre>{`import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class WelcomeServlet extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        String n=request.getParameter("userName");
        out.print("Welcome "+n);
    }
}`}</pre>

                <h4 className="h5 mt-4">2) sendRedirect:</h4>
                <ul>
                  <li>The sendRedirect() method of HttpServletResponse interface can be used to redirect response to another resource, it may be servlet, jsp or html file.</li>
                  <li>It accepts relative as well as absolute URL.</li>
                  <li>It works at client side because it uses the url bar of the browser to make another request. So, it can work inside and outside the server.</li>
                </ul>

                <h5 className="h6 mt-3">Difference between forward() and sendRedirect() method:</h5>
                <table className="method-table">
                  <thead>
                    <tr>
                      <th>forward() method</th>
                      <th>sendRedirect() method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>The forward() method works at server side.</td>
                      <td>The sendRedirect() method works at client side.</td>
                    </tr>
                    <tr>
                      <td>It sends the same request and response objects to another servlet.</td>
                      <td>It always sends a new request.</td>
                    </tr>
                    <tr>
                      <td>It can work within the server only.</td>
                      <td>It can be used within and outside the server.</td>
                    </tr>
                    <tr>
                      <td>Example: <code>request.getRequestDispatcher("servlet2").forward(request,response);</code></td>
                      <td>Example: <code>response.sendRedirect("servlet2");</code></td>
                    </tr>
                  </tbody>
                </table>

                <h5 className="h6 mt-3">Example:</h5>
                <pre>{`import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class DemoServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        
        response.setContentType("text/html");
        PrintWriter pw=response.getWriter();
        response.sendRedirect("http://www.google.com");
        pw.close();
    }
}`}</pre>
              </div>
            </section>

            <section id="servlet-config" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> ServletConfig Interface</h2>
              <div className="property-card">
                <ul>
                  <li>An object of ServletConfig is created by the web container for each servlet.</li>
                  <li>This object can be used to get configuration information from web.xml file.</li>
                  <li>If the configuration information is modified from the web.xml file, we don't need to change the servlet.</li>
                  <li>So it is easier to manage the web application if any specific content is modified from time to time.</li>
                </ul>

                <h4 className="h5 mt-4">Methods of ServletConfig interface:</h4>
                <ol>
                  <li><code>public String getInitParameter(String name)</code> - Returns the parameter value for the specified parameter name.</li>
                  <li><code>public Enumeration getInitParameterNames()</code> - Returns an enumeration of all the initialization parameter names.</li>
                  <li><code>public String getServletName()</code> - Returns the name of the servlet.</li>
                  <li><code>public ServletContext getServletContext()</code> - Returns an object of ServletContext.</li>
                </ol>

                <h4 className="h5 mt-4">Syntax in web.xml:</h4>
                <pre>{`<web-app>
    <servlet>
        ...
        <init-param>
            <param-name>parametername</param-name>
            <param-value>parametervalue</param-value>
        </init-param>
        ...
    </servlet>
</web-app>`}</pre>

                <h4 className="h5 mt-4">Example:</h4>
                <pre>{`import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class S2 extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        ServletConfig config=getServletConfig();
        String driver=config.getInitParameter("driver");
        out.print("Driver is: "+driver);
        out.close();
    }
}`}</pre>

                <p><strong>web.xml:</strong></p>
                <pre>{`<web-app>
    <servlet>
        <servlet-name>S2</servlet-name>
        <servlet-class>demo.S2</servlet-class>
        <init-param>
            <param-name>driver</param-name>
            <param-value>sun.jdbc.odbc.JdbcOdbcDriver</param-value>
        </init-param>
    </servlet>
    <servlet-mapping>
        <servlet-name>S2</servlet-name>
        <url-pattern>/servlet1</url-pattern>
    </servlet-mapping>
</web-app>`}</pre>
              </div>
            </section>

            <section id="servlet-context" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-server"></i> ServletContext Interface</h2>
              <div className="property-card">
                <ul>
                  <li>An object of ServletContext is created by the web container at time of deploying the project.</li>
                  <li>This object can be used to get configuration information from web.xml file.</li>
                  <li>There is only one ServletContext object per web application.</li>
                  <li>If any information is shared to many servlet, it is better to provide it from the web.xml file using the &lt;context-param&gt; element.</li>
                </ul>

                <h4 className="h5 mt-4">Advantage of ServletContext:</h4>
                <ul>
                  <li><strong>Easy to maintain</strong> if any information is shared to all the servlet, it is better to make it available for all the servlet.</li>
                  <li>We provide this information from the web.xml file, so if the information is changed, we don't need to modify the servlet.</li>
                  <li>Thus it removes maintenance problem.</li>
                </ul>

                <h4 className="h5 mt-4">Methods of ServletContext interface:</h4>
                <ol>
                  <li><code>public String getInitParameter(String name)</code> - Returns the parameter value for the specified parameter name.</li>
                  <li><code>public Enumeration getInitParameterNames()</code> - Returns the names of the context's initialization parameters.</li>
                  <li><code>public void setAttribute(String name,Object object)</code> - Sets the given object in the application scope.</li>
                  <li><code>public Object getAttribute(String name)</code> - Returns the attribute for the specified name.</li>
                  <li><code>public Enumeration getInitParameterNames()</code> - Returns the names of the context's initialization parameters as an Enumeration of String objects.</li>
                  <li><code>public void removeAttribute(String name)</code> - Removes the attribute with the given name from the servlet context.</li>
                </ol>

                <h4 className="h5 mt-4">Syntax in web.xml:</h4>
                <pre>{`<web-app>
    ...
    <context-param>
        <param-name>parametername</param-name>
        <param-value>parametervalue</param-value>
    </context-param>
    ...
</web-app>`}</pre>

                <h4 className="h5 mt-4">Example:</h4>
                <pre>{`import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class DemoServlet extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res)
        throws ServletException, IOException {
        
        res.setContentType("text/html");
        PrintWriter pw=res.getWriter();
        //creating ServletContext object
        ServletContext context=getServletContext();
        //Getting the value of the initialization parameter and printing it
        String driverName=context.getInitParameter("dname");
        pw.println("driver name is="+driverName);
        pw.close();
    }
}`}</pre>

                <p><strong>web.xml:</strong></p>
                <pre>{`<web-app>
    <servlet>
        <servlet-name>DemoServlet</servlet-name>
        <servlet-class>DemoServlet</servlet-class>
    </servlet>
    <context-param>
        <param-name>dname</param-name>
        <param-value>sun.jdbc.odbc.JdbcOdbcDriver</param-value>
    </context-param>
    <servlet-mapping>
        <servlet-name>DemoServlet</servlet-name>
        <url-pattern>/context</url-pattern>
    </servlet-mapping>
</web-app>`}</pre>
              </div>
            </section>

            <section id="session-tracking" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-person-badge"></i> Session Tracking Techniques</h2>
              <div className="property-card">
                <ul>
                  <li>Session simply means a particular interval of time.</li>
                  <li>Session Tracking is a way to maintain state (data) of an user. It is also known as <strong>session management</strong> in servlet.</li>
                  <li>Http protocol is a stateless so we need to maintain state using session tracking techniques.</li>
                  <li>Each time user requests to the server, server treats the request as the new request. So we need to maintain the state of an user to recognize to particular user.</li>
                  <li>HTTP is stateless that means each request is considered as the new request.</li>
                </ul>

                <h4 className="h5 mt-4">Session Tracking Techniques:</h4>
                <ol>
                  <li>Cookies</li>
                  <li>Hidden Form Field</li>
                  <li>URL Rewriting</li>
                  <li>HttpSession</li>
                </ol>

                <h5 className="h6 mt-3">1. Cookies:</h5>
                <ul>
                  <li>A <strong>cookie</strong> is a small piece of information that is persisted between the multiple client requests.</li>
                  <li>A cookie has a name, a single value, and optional attributes such as a comment, path and domain qualifiers, a maximum age, and a version number.</li>
                  <li>By default, each request is considered as a new request.</li>
                  <li>In cookies technique, we add cookie with response from the servlet.</li>
                  <li>So cookie is stored in the cache of the browser.</li>
                  <li>After that if request is sent by the user, cookie is added with request by default. Thus, we recognize the user as the old user.</li>
                </ul>

                <h6 className="h6 mt-2">Types of Cookie:</h6>
                <ol>
                  <li>
                    <strong>Non-persistent cookie:</strong>
                    <ul>
                      <li>It is valid for single session only.</li>
                      <li>It is removed each time when user closes the browser.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Persistent cookie:</strong>
                    <ul>
                      <li>It is valid for multiple session.</li>
                      <li>It is not removed each time when user closes the browser. It is removed only if user logout or signout.</li>
                    </ul>
                  </li>
                </ol>

                <h6 className="h6 mt-2">Advantage of Cookies:</h6>
                <ul>
                  <li>Simplest technique of maintaining the state.</li>
                  <li>Cookies are maintained at client side.</li>
                </ul>

                <h6 className="h6 mt-2">Disadvantage of Cookies:</h6>
                <ul>
                  <li>It will not work if cookie is disabled from the browser.</li>
                  <li>Only textual information can be set in Cookie object.</li>
                </ul>

                <h6 className="h6 mt-2">Useful Methods of Cookie class:</h6>
                <table className="method-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>public void setMaxAge(int expiry)</code></td>
                      <td>Sets the maximum age of the cookie in seconds.</td>
                    </tr>
                    <tr>
                      <td><code>public String getName()</code></td>
                      <td>Returns the name of the cookie. The name cannot be changed after creation.</td>
                    </tr>
                    <tr>
                      <td><code>public String getValue()</code></td>
                      <td>Returns the value of the cookie.</td>
                    </tr>
                    <tr>
                      <td><code>public void setName(String name)</code></td>
                      <td>Changes the name of the cookie.</td>
                    </tr>
                    <tr>
                      <td><code>public void setValue(String value)</code></td>
                      <td>Changes the value of the cookie.</td>
                    </tr>
                  </tbody>
                </table>

                <h6 className="h6 mt-2">Example:</h6>
                <p><strong>index.html</strong></p>
                <pre>{`<html>
<body>
    <form action="FirstServlet" method="post">
        Name:<input type="text" name="userName"/><br/>
        <input type="submit" value="go"/>
    </form>
</body>
</html>`}</pre>

                <p><strong>FirstServlet.java</strong></p>
                <pre>{`import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class FirstServlet extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            String n=request.getParameter("userName");
            out.print("Welcome "+n);
            
            Cookie ck=new Cookie("uname",n);//creating cookie object
            response.addCookie(ck);//adding cookie in the response
            
            //creating submit button
            out.print("<form action='SecondServlet' method='post'>");
            out.print("<input type='submit' value='go'>");
            out.print("</form>");
            out.close();
        } catch(Exception e) { System.out.println(e); }
    }
}`}</pre>

                <p><strong>SecondServlet.java</strong></p>
                <pre>{`import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class SecondServlet extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            Cookie ck[]=request.getCookies();
            out.print("Hello "+ck[0].getValue());
            out.close();
        } catch(Exception e) { System.out.println(e); }
    }
}`}</pre>

                <h5 className="h6 mt-3">2. Hidden Form Field:</h5>
                <ul>
                  <li>In case of Hidden Form Field a hidden (invisible) textfield is used for maintaining the state of an user.</li>
                  <li>In such case, we store the information in the hidden field and get it from another servlet.</li>
                  <li>This approach is better if we have to submit form in all the pages and we don't want to depend on the browser.</li>
                  <li>It is widely used in comment form of a website.</li>
                  <li>In such case, we store page id or page name in the hidden field so that each page can be uniquely identified.</li>
                </ul>

                <h6 className="h6 mt-2">Syntax:</h6>
                <pre>{`<input type="hidden" name="uname" value="Sachin">`}</pre>

                <h6 className="h6 mt-2">Advantage of Hidden Form Field:</h6>
                <ul>
                  <li>It will always work whether cookie is disabled or not.</li>
                </ul>

                <h6 className="h6 mt-2">Disadvantage of Hidden Form Field:</h6>
                <ul>
                  <li>It is maintained at server side.</li>
                  <li>Extra form submission is required on each pages.</li>
                  <li>Only textual information can be used.</li>
                </ul>

                <h6 className="h6 mt-2">Example:</h6>
                <p><strong>index.html</strong></p>
                <pre>{`<html>
<body>
    <form action="FirstServlet">
        Name: <input type="text" name="userName"/><br/>
        <input type="submit" value="go"/>
    </form>
</body>
</html>`}</pre>

                <p><strong>FirstServlet.java</strong></p>
                <pre>{`import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class FirstServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            String n=request.getParameter("userName");
            out.print("Welcome "+n);
            
            //creating form that have invisible textfield
            out.print("<form action='SecondServlet'>");
            out.print("<input type='hidden' name='uname' value='"+n+"'>");
            out.print("<input type='submit' value='go'>");
            out.print("</form>");
            out.close();
        } catch(Exception e) { System.out.println(e); }
    }
}`}</pre>

                <p><strong>SecondServlet.java</strong></p>
                <pre>{`import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class SecondServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            //Getting the value from the hidden field
            String n=request.getParameter("uname");
            out.print("Hello "+n);
            out.close();
        } catch(Exception e) { System.out.println(e); }
    }
}`}</pre>

                <h5 className="h6 mt-3">3. URL Rewriting:</h5>
                <ul>
                  <li>In URL rewriting, we append a token or identifier to the URL of the next Servlet or the next resource.</li>
                  <li>We can send parameter name/value pairs using the following format: <code>url?name1=value1&amp;name2=value2&amp;??</code></li>
                  <li>A name and a value is separated using an equal = sign, a parameter name/value pair is separated from another parameter using the ampersand(&amp;).</li>
                  <li>When the user clicks the hyperlink, the parameter name/value pairs will be passed to the server.</li>
                  <li>From a Servlet, we can use getParameter() method to obtain a parameter value.</li>
                </ul>

                <h6 className="h6 mt-2">Advantage of URL Rewriting:</h6>
                <ol>
                  <li>It will always work whether cookie is disabled or not (browser independent).</li>
                  <li>Extra form submission is not required on each pages.</li>
                </ol>

                <h6 className="h6 mt-2">Disadvantage of URL Rewriting:</h6>
                <ol>
                  <li>It will work only with links.</li>
                  <li>It can send Only textual information.</li>
                </ol>

                <h6 className="h6 mt-2">Example:</h6>
                <p><strong>index.html</strong></p>
                <pre>{`<html>
<body>
    <form action="FirstServlet">
        Name:<input type="text" name="userName"/><br/>
        <input type="submit" value="go"/>
    </form>
</body>
</html>`}</pre>

                <p><strong>FirstServlet.java</strong></p>
                <pre>{`import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class FirstServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            String n=request.getParameter("userName");
            out.print("Welcome "+n);
            
            //appending the username in the query string
            out.print("<a href='SecondServlet?uname="+n+"'>visit</a>");
            out.close();
        } catch(Exception e) { System.out.println(e); }
    }
}`}</pre>

                <p><strong>SecondServlet.java</strong></p>
                <pre>{`import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class SecondServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            //getting value from the query string
            String n=request.getParameter("uname");
            out.print("Hello "+n);
            out.close();
        } catch(Exception e) { System.out.println(e); }
    }
}`}</pre>

                <h5 className="h6 mt-3">4. HttpSession:</h5>
                <ul>
                  <li>In such case, container creates a session id for each user. The container uses this id to identify the particular user.</li>
                </ul>

                <h6 className="h6 mt-2">Difference between getSession(true) and getSession(false):</h6>
                <ul>
                  <li><code>request.getSession(true)</code> will return current session. If current session does not exist, then it will create a new session.</li>
                  <li><code>getSession(false)</code> will return current session if current session exists, then it will not create a new session.</li>
                </ul>

                <h6 className="h6 mt-2">Example:</h6>
                <p><strong>index.html</strong></p>
                <pre>{`<html>
<body>
    <form action="FirstServlet">
        Name:<input type="text" name="userName"/><br/>
        <input type="submit" value="go"/>
    </form>
</body>
</html>`}</pre>

                <p><strong>FirstServlet.java</strong></p>
                <pre>{`import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class FirstServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            String n=request.getParameter("userName");
            out.print("Welcome "+n);
            
            HttpSession session=request.getSession();
            session.setAttribute("uname",n);
            out.print("<a href='SecondServlet'>visit</a>");
            out.close();
        } catch(Exception e) { System.out.println(e); }
    }
}`}</pre>

                <p><strong>SecondServlet.java</strong></p>
                <pre>{`import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class SecondServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            HttpSession session=request.getSession(false);
            String n=(String)session.getAttribute("uname");
            out.print("Hello "+n);
            out.close();
        } catch(Exception e) { System.out.println(e); }
    }
}`}</pre>
              </div>
            </section>

            <section id="servlet-jdbc" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> Servlet JDBC CRUD</h2>
              <div className="property-card">
                <p>JDBC – Java Database Connectivity<br />
                  CRUD – Create Read Update Delete</p>

                <h4 className="h5 mt-4">Example Files:</h4>
                <ol>
                  <li>Home.jsp</li>
                  <li>Insert.jsp</li>
                  <li>Delete.jsp</li>
                  <li>Success.jsp</li>
                  <li>Select.jsp</li>
                  <li>Update.jsp</li>
                  <li>Result.jsp</li>
                  <li>DbUtil.java</li>
                  <li>InsertDetails.java</li>
                  <li>DeleteDetails.java</li>
                  <li>SelectDetails.java</li>
                  <li>UpdateDetails.java</li>
                </ol>

                <h5 className="h6 mt-3">Home.jsp:</h5>
                <pre>{`<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Welcome Page</title>
</head>
<body>
<h2 align="center">Welcome to Student database management system</h2>
<br />
<table align="center">
    <tr>
        <td>To insert your details into the Database:</td>
        <td><input type="button" value="Insert data"
        onclick="window.location.href='insert.jsp'"/></td>
    </tr>
    <tr>
        <td>To delete your details from the Database:</td>
        <td><input type="button" value="Delete data"
        onclick="window.location.href='delete.jsp'"/></td>
    </tr>
    <tr>
        <td>To view your details from the Database:</td>
        <td><input type="button" value="Select data"
        onclick="window.location.href='select.jsp'"/></td>
    </tr>
</table>
</body>
</html>`}</pre>

                <h5 className="ht mt-3">Insert.jsp</h5>
                <pre>{`<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Insert Details</title>
</head>
<body>
    <h2>Fill in the details</h2>
    <form action="InsertDetails" method="post">
      <table>
        <tr>
          <td>ID:</td>
          <td><input type="text" name="id" maxlength="6" size="7" /></td>
        </tr>
        <tr>
          <td>Name:</td>
            <td><input type="text" name="name" maxlength="30" size="25" /></td>
        </tr>
        <tr>
          <td>Email Id:</td>
          <td><input type="text" name="email" maxlength="40" size="35" /></td>
        </tr>
        <tr>
          <td>Phone Number:</td>
          <td><input type="text" name="phnum" maxlength="10" size="11" /></td>
        </tr>
      </table><br /> 
      <input type="submit" value="Insert Data" />
    </form>
    <br />
    <input type="button" value="Return to Home" onclick="window.location.href='home.jsp'" />
</body>
</html>`}</pre>

                <h5 className="h6 mt-3">Delete.jsp</h5>
                <pre>{`<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Delete Details</title>
</head>
<body>
    <form action="DeleteDetails" method="post">
      <table>
        <tr>
          <td>Enter ID:</td>
          <td><input type="text" name="id" maxlength="6" size="7" /></td>
        </tr>
      </table>
      <br /> 
      <input type="submit" value="Delete Data" />
    </form>
    <br />
    <input type="button" value="Return to Home" onclick="window.location.href='Home.jsp'" />
</body>
</html>`}</pre>

                <h5 className="h6 mt-3">Success.jsp</h5>
                <pre>{`<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Success Page</title>
</head>
<body>
    <form action="Home.jsp">
    <h3><%=request.getParameter("msg")%> Successful</h3>
    <br /> 
    <input type="submit" value="Return to Home page" />
  </form>
</body>
</html>`}</pre>

                <h5 className="h6 mt-3">Select.jsp</h5>
                <pre>{`<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Select Details</title>
</head>
<body>
    <form action="SelectDetails" method="get">
      <table>
        <tr>
          <td>Enter ID:</td>
          <td><input type="text" name="id" maxlength="6" size="7" /></td>
        </tr>
      </table>
      <br /> 
      <input type="submit" value="View Data" />
    </form>
    <br />
    <input type="button" value="Return to Home" onclick="window.location.href='Home.jsp'" />
</body>
</html>`}</pre>

                <h5 className="h6 mt-3">Result.jsp</h5>
                <pre>{`<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Student Details</title>
</head>
<body>
    <h2>Details</h2>
    <form>
      <input type="hidden" name="stid" value="<%=request.getParameter("id")%>">
      <table>
        <tr>
          <td>ID:</td>
          <td><%=request.getParameter("id")%></td>
        </tr>
        <tr>
          <td>Name:</td>
          <td><%=request.getParameter("name")%></td>
        </tr>
        <tr>
          <td>Email Id:</td>
          <td><%=request.getParameter("email")%></td>
        </tr>
        <tr>
          <td>Phone Number:</td>
          <td><%=request.getParameter("phone")%></td>
        </tr>
      </table>
    </form>
    <br />
    <input type="button" value="Update data" onclick="update()" />
    <br />
    <input type="button" value="Return to Home" onclick="window.location.href='Home.jsp'" />
</body>
<script language="javascript" type="text/javascript">
function update() {
    var sid = document.forms[0].elements['stid'].value;
    window.location.href = "Update.jsp?id=" + sid;
}
</script>
</html>`}</pre>

                <h5 className="h6 mt-3">Update.jsp</h5>
                <pre>{`<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Student Details</title>
</head>
<body>
    <h2>Fill in your details</h2>
    <form action="./UpdateDetails" method="post">
      <table>
        <tr>
          <td>ID:</td>
          <td><input type="text" name="id" value="<%=request.getParameter("id")%>" readonly="readonly"></td>
        </tr>
        <tr>
          <td>Name:</td>
          <td><input type="text" name="name" maxlength="30" size="25" /></td>
        </tr>
        <tr>
          <td>Email Id:</td>
          <td><input type="text" name="email" maxlength="40" size="35" /></td>
        </tr>
        <tr>
          <td>Phone Number:</td>
          <td><input type="text" name="phnum" maxlength="10" size="11" /></td>
        </tr>
      </table>
      <br /> 
      <input type="submit" value="Update Data" />
    </form>
    <br />
    <input type="button" value="Return to Home" onclick="window.location.href='Home.jsp'" />
</body>
</html>`}</pre>

                <h5 className="h6 mt-3">DbUtil.java:</h5>
                <pre>{`package demo;

public class DbUtil {
    public static String url = "jdbc:mysql://localhost:3306/database_name";
    public static String user = "root";
    public static String password = "password";
    public static String driver = "com.mysql.cj.jdbc.Driver";
}`}</pre>

                <h5 className="h6 mt-3">InsertDetails.java:</h5>
                <pre>{`import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/InsertDetails")
public class InsertDetails extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

        // Jdbc Connection
        try {
            Class.forName(DbUtil.driver);
        } catch (ClassNotFoundException e) {
            System.out.println("Class not found " + e);
        }
        
        try {
            Connection conn = DriverManager.getConnection(DbUtil.url, DbUtil.user, DbUtil.password);
            System.out.println("connection successful");
            
            // Query/statement to insert the values
            PreparedStatement st = conn.prepareStatement("insert into studentdetails values(?, ?, ?, ?)");
            
            // set values into the query
            st.setInt(1, Integer.valueOf(request.getParameter("id")));
            st.setString(2, request.getParameter("name"));
            st.setString(3, request.getParameter("email"));
            st.setString(4, request.getParameter("phnum"));
            
            // Execute the query
            st.executeUpdate();
            st.close();
            conn.close();

            // Redirect the response to success page
            response.sendRedirect("Success.jsp?msg=Insert");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`}</pre>

                <h5 className="h6 mt-3">DeleteDetails.java:</h5>
                <pre>{`import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/DeleteDetails")
public class DeleteDetails extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        
        try {
            Class.forName(DbUtil.driver);
        } catch (ClassNotFoundException e) {
            System.out.println("Class not found " + e);
        }
        
        try {
            Connection conn = DriverManager.getConnection(DbUtil.url, DbUtil.user, DbUtil.password);
            System.out.println("connection successful");
            
            PreparedStatement st = conn.prepareStatement("delete from studentdetails where stuid=?");
            st.setInt(1, Integer.valueOf(request.getParameter("id")));
            st.executeUpdate();
            st.close();
            conn.close();

            response.sendRedirect("Success.jsp?msg=Delete");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`}</pre>

                <h5 className="h6 mt-3">SelectDetails.java:</h5>
                <pre>{`import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/SelectDetails")
public class SelectDetails extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

        try {
            Class.forName(DbUtil.driver);
        } catch (ClassNotFoundException e) {
            System.out.println("Class not found " + e);
        }
        
        try {
            int id = 0;
            String name = "", email = "", ph = "";

            Connection conn = DriverManager.getConnection(DbUtil.url, DbUtil.user, DbUtil.password);
            System.out.println("connection successful");
            
            PreparedStatement st = conn.prepareStatement("select * from studentdetails where stuid=?");
            st.setInt(1, Integer.valueOf(request.getParameter("id"))));
            ResultSet rs = st.executeQuery();

            while (rs.next()) {
                id = rs.getInt(1);
                name = rs.getString(2);
                email = rs.getString(3);
                ph = rs.getString(4);
            }

            rs.close();
            st.close();
            conn.close();

            response.sendRedirect("Result.jsp?id=" + id + "&name=" + name + "&email=" + email + "&phone=" + ph);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`}</pre>

                <h5 className="h6 mt-3">UpdateDetails.java:</h5>
                <pre>{`import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/UpdateDetails")
public class UpdateDetails extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

        try {
            Class.forName(DbUtil.driver);
        } catch (ClassNotFoundException e) {
            System.out.println("Class not found " + e);
        }
        
        try {
            Connection conn = DriverManager.getConnection(DbUtil.url, DbUtil.user, DbUtil.password);
            System.out.println("connection successful");

            PreparedStatement st = conn.prepareStatement(
                "update studentdetails set stuname=?, email=?, phonenum=? where stuid=?");

            st.setString(1, request.getParameter("name"));
            st.setString(2, request.getParameter("email"));
            st.setString(3, request.getParameter("phnum"));
            st.setInt(4, Integer.valueOf(request.getParameter("id")));
            st.executeUpdate();
            st.close();
            conn.close();

            response.sendRedirect("Success.jsp?msg=Update");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`}</pre>
              </div>
            </section>

            <section id="file-upload" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-upload"></i> Uploading File in Servlet</h2>
              <div className="property-card">
                <p>For uploading a file to the server, method must be post and enctype must be multipart/form-data in html file.</p>

                <h4 className="h5 mt-4">Example:</h4>
                <p><strong>index.html</strong></p>
                <pre>{`<html>
<body>
    <form action="UploadServlet" method="post" enctype="multipart/form-data">
        Select File:<input type="file" name="fname"/><br/>
        <input type="submit" value="Upload"/>
    </form>
</body>
</html>`}</pre>

                <p><strong>UploadServlet.java</strong></p>
                <pre>{`import java.io.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import com.oreilly.servlet.MultipartRequest;

public class UploadServlet extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        MultipartRequest m=new MultipartRequest(request, "d:/new");
        out.print("successfully uploaded");
    }
}`}</pre>
              </div>
            </section>

            <section id="login-example" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box-arrow-in-right"></i> Example of Login Form in Servlet</h2>
              <div className="property-card">
                <p>Files needed:</p>
                <ol>
                  <li>index.html</li>
                  <li>FirstServlet.java</li>
                  <li>LoginDao.java</li>
                  <li>SecondServlet.java</li>
                  <li>web.xml</li>
                </ol>

                <p>First create the database table:</p>
                <pre>{`create table userreg(name varchar(40), pass varchar(40));`}</pre>

                <h4 className="h5 mt-4">index.html</h4>
                <pre>{`<form action="FirstServlet" method="post">
    Name:<input type="text" name="username"/><br/><br/>
    Password:<input type="password" name="userpass"/><br/><br/>
    <input type="submit" value="login"/>
</form>`}</pre>

                <h4 className="h5 mt-4">FirstServlet.java</h4>
                <pre>{`import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class FirstServlet extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        String n=request.getParameter("username");
        String p=request.getParameter("userpass");
        
        if(LoginDao.validate(n, p)) {
            RequestDispatcher rd=request.getRequestDispatcher("WelcomeServlet");
            rd.forward(request,response);
        }
        else {
            out.print("Sorry username or password error");
            RequestDispatcher rd=request.getRequestDispatcher("index.html");
            rd.include(request,response);
        }
        out.close();
    }
}`}</pre>

                <h4 className="h5 mt-4">LoginDao.java</h4>
                <pre>{`import java.sql.*;

public class LoginDao {
    public static boolean validate(String name,String pass) {
        boolean status=false;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con=DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/javascript", "root", "password");
            
            PreparedStatement ps=con.prepareStatement(
                "select * from userreg where name=? and pass=?");
            ps.setString(1,name);
            ps.setString(2,pass);
            
            ResultSet rs=ps.executeQuery();
            status=rs.next();
        } catch(Exception e) { System.out.println(e); }
        
        return status;
    }
}`}</pre>

                <h4 className="h5 mt-4">WelcomeServlet.java</h4>
                <pre>{`import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class WelcomeServlet extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        String n=request.getParameter("username");
        out.print("Welcome "+n);
        out.close();
    }
}`}</pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Servlet Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default ServletNotes;