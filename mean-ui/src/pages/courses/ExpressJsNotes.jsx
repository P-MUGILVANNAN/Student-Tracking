import React from 'react';

function ExpressNotes() {
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
                    <h1 className="display-4 fw-bold"><i className="bi bi-server"></i> Express.js Notes</h1>
                    <p className="lead">Your Comprehensive Guide to Node.js Web Framework</p>
                </div>
            </header>

            <div className="container py-4">
                <div className="row">
                    <aside className="col-lg-3 sidebar">
                        <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
                        <nav className="nav flex-column">
                            <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> What is Express.js?</a>
                            <a className="nav-link" href="#setup"><i className="bi bi-gear"></i> Setup</a>
                            <a className="nav-link" href="#basic-server"><i className="bi bi-code-square"></i> Basic Server</a>
                            <a className="nav-link" href="#routing"><i className="bi bi-signpost-split"></i> Routing</a>
                            <a className="nav-link" href="#templates"><i className="bi bi-file-earmark-code"></i> Template Engines</a>
                            <a className="nav-link" href="#middleware"><i className="bi bi-layers"></i> Middleware</a>
                            <a className="nav-link" href="#request"><i className="bi bi-arrow-down-circle"></i> Request Object</a>
                            <a className="nav-link" href="#response"><i className="bi bi-arrow-up-circle"></i> Response Object</a>
                            <a className="nav-link" href="#cookies"><i className="bi bi-cookie"></i> Cookies</a>
                            <a className="nav-link" href="#sessions"><i className="bi bi-clock-history"></i> Sessions</a>
                            <a className="nav-link" href="#rest"><i className="bi bi-database"></i> REST API</a>
                            <a className="nav-link" href="#mongoose"><i className="bi bi-motherboard"></i> Mongoose</a>
                            <a className="nav-link" href="#authentication"><i className="bi bi-shield-lock"></i> Authentication</a>
                            <a className="nav-link" href="#mvc"><i className="bi bi-diagram-3"></i> MVC Structure</a>
                            <a className="nav-link" href="#file-uploads"><i className="bi bi-file-earmark-arrow-up"></i> File Uploads</a>
                            <a className="nav-link" href="#crud"><i className="bi bi-database"></i> CRUD App</a>
                            <a className="nav-link" href="#projects"><i className="bi bi-lightbulb"></i> Project Ideas</a>
                            <a className="nav-link" href="#deployment"><i className="bi bi-cloud-upload"></i> Deployement</a>
                        </nav>
                    </aside>

                    <main className="col-lg-9">
                        <section id="introduction" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> What is Express.js?</h2>
                            <div className="property-card">
                                <ul className="mb-3">
                                    <li>Express provides a minimal interface to build web applications</li>
                                    <li>It provides the tools required to build Node.js web apps</li>
                                    <li>It is flexible as there are numerous modules available on npm, which can be directly plugged into Express.</li>
                                    <li>Express was developed by TJ Holowaychuk and is maintained by the Node.js foundation and numerous open source contributors.</li>
                                    <li>Some of the core features of Express framework: It can be used to design single-page, multi-page and hybrid web applications.</li>
                                    <li>It allows to setup middlewares to respond to HTTP Requests.</li>
                                    <li>It defines a routing table which is used to perform different actions based on HTTP method and URL. It allows to dynamically render HTML Pages based on passing arguments to templates.</li>
                                </ul>
                                <h3 className="h4 mt-4">Core Features:</h3>
                                <ul>
                                    <li>Design single-page, multi-page and hybrid web applications</li>
                                    <li>Setup middlewares to respond to HTTP Requests</li>
                                    <li>Define routing tables based on HTTP methods and URLs</li>
                                    <li>Dynamically render HTML Pages based on template arguments</li>
                                </ul>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Why Use Express.js?</h3>
                                <ul>
                                    <li>✔ Ultra fast I/O</li>
                                    <li>✔ Asynchronous and single threaded</li>
                                    <li>✔ MVC like structure</li>
                                    <li>✔ Robust API makes routing easy</li>
                                </ul>
                            </div>
                        </section>

                        <section id="setup" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Environmental Setup</h2>
                            <div className="property-card">
                                <h3 className="h4">Step-by-Step Setup</h3>
                                <ol>
                                    <li>Download and install Node.js</li>
                                    <li>Create a project folder and open command prompt</li>
                                    <li>Create package.json file:
                                        <pre><code>npm init -y</code></pre>
                                    </li>
                                    <li>Install Express:
                                        <pre><code>npm install express</code></pre>
                                    </li>
                                    <li>Create a file named index.js or server.js</li>
                                </ol>
                            </div>
                        </section>

                        <section id="basic-server" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> Basic Server Example</h2>
                            <div className="property-card">
                                <pre><code>{`// Import Express
const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Welcome to the Express.js');
});

// Start the server
app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});`}</code></pre>
                                <p className="mt-3">This will start a server, and when you visit <code>http://localhost:8000</code>, it will display "Welcome to the Express.js"</p>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">How Express Works</h3>
                                <ul>
                                    <li><code>app.get(route, callback)</code> - Defines what to do when a GET request is made to the specified route</li>
                                    <li>The callback function has 2 parameters: <code>request(req)</code> and <code>response(res)</code></li>
                                    <li><code>req</code> represents the HTTP request with properties for query string, parameters, body, headers, etc.</li>
                                    <li><code>res</code> represents the HTTP response that Express sends</li>
                                    <li><code>res.send()</code> sends a response to the client</li>
                                    <li><code>app.listen()</code> binds and listens for connections on the specified port</li>
                                </ul>
                            </div>
                        </section>

                        <section id="routing" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-signpost-split"></i> Routing in Express</h2>
                            <div className="property-card">
                                <h3 className="h4">Basic Routing</h3>
                                <pre><code>{`app.METHOD(path, callback) // Where METHOD is get, post, put, delete, etc.

// Example:
app.get('/hello', function(req, res){
    res.send("Hello World!");
});

app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!");
});`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Router Module</h3>
                                <p>For better organization, you can separate routes into different files using <code>express.Router()</code></p>
                                <p><strong>things.js:</strong></p>
                                <pre><code>{`const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('GET route on things.');
});

router.post('/', function(req, res) {
    res.send('POST route on things.');
});

module.exports = router;`}</code></pre>
                                <p><strong>index.js:</strong></p>
                                <pre><code>{`const express = require('express');
const app = express();
const things = require('./things.js');

app.use('/things', things);

app.listen(3000);`}</code></pre>
                            </div>
                        </section>

                        <section id="templates" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> Template Engines</h2>
                            <div className="property-card">
                                <h3 className="h4">What are Template Engines?</h3>
                                <ul>
                                    <li>Facilitate using static template files in applications</li>
                                    <li>Replace variables in templates with actual values at runtime</li>
                                    <li>Transform templates into HTML files sent to the client</li>
                                    <li>Preferred for designing HTML pages easily</li>
                                </ul>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Popular Template Engines</h3>
                                <div className="row">
                                    <div className="col-md-4">
                                        <ul>
                                            <li>Pug (formerly Jade)</li>
                                            <li>Mustache</li>
                                            <li>Dust</li>
                                            <li>atpl</li>
                                            <li>eco</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul>
                                            <li>ect</li>
                                            <li>ejs</li>
                                            <li>haml</li>
                                            <li>haml-coffee</li>
                                            <li>handlebars</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul>
                                            <li>hogan</li>
                                            <li>jazz</li>
                                            <li>jqtpl</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Using Template Engines</h3>
                                <p>To render template files, set these application properties:</p>
                                <pre><code>{`// Specify directory for template files
app.set('views', './views');

// Specify the template engine
app.set('view engine', 'pug');`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Pug Template Engine</h3>
                                <ul>
                                    <li>Let's learn how to use pug template engine in Node.js application using Express.js.</li>
                                    <li>Pug is a template engine for Node.js.</li>
                                    <li>Pug uses whitespaces and indentation as the part of the syntax.</li>
                                    <li>Its syntax is easy to learn.</li>
                                </ul>
                                <p>Install Pug:</p>
                                <pre><code>npm install pug --save</code></pre>
                                <p><strong>Simple Pug Example (sample.pug):</strong></p>
                                <pre><code>{`doctype html
html
  head
    title A simple pug example
  body
    h1 This page is produced by pug template engine
    p some paragraph here..`}</code></pre>
                                <p><strong>Server.js:</strong></p>
                                <pre><code>{`const express = require('express');
const app = express();

app.set("view engine", "pug");

app.get("/pug", (req, res) => {
    res.render("sample.pug");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">EJS Template Engine</h3>
                                <ul>
                                    <li>EJS or Embedded Javascript Templating is a templating engine used by Node.js.</li>
                                    <li>Template engine helps to create an HTML template with minimal code.</li>
                                    <li>Also, it can inject data into HTML template at the client side and produce the final HTML.</li>
                                    <li>EJS is a simple templating language which is used to generate HTML markup with plain JavaScript. It also helps to embed JavaScript to HTML pages. To begin with, using EJS as templating engine we need to install EJS using given command:</li>
                                </ul>
                                <h4 className="mb-3">Features of EJS:</h4>
                                <ol>
                                    <li>Very Simple Syntax</li>
                                    <li>Use Plain JavaScript</li>
                                    <li>Very Fast Compilation and Execution</li>
                                    <li>Compiles with Express View system</li>
                                    <li>JavaScript Includes feature available</li>
                                    <li>Easy Debugging</li>
                                </ol>
                                <p>Install EJS:</p>
                                <pre><code>npm install ejs</code></pre>
                                <p><strong>index.ejs:</strong></p>
                                <pre><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejs Example</title>
</head>
<body>
    <h1>Im ejs template engine</h1>
    <p>Hi da</p>
</body>
</html>`}</code></pre>
                                <p><strong>Server.js:</strong></p>
                                <pre><code>{`const express = require("express");
const app = express();

app.set("view engine","ejs")

app.get("/ejs",(req,res) => {
    res.render("index.ejs");
});

app.listen(5000,() => {
    console.log("Server is running on port 5000");
});`}</code></pre>
                            </div>
                            <div className="property-card mt-4">
                                <h3 className="h4">Handlebars Template Engine</h3>
                                <ul>
                                    <li>Handlebars.js is a templating engine similar to the ejs module in node.js, but more powerful and simple to use.</li>
                                    <li>It ensures minimum templating and is a logicless engine that keeps the view and the code separated. It can be used with express as the hbs module, available through npm.</li>
                                    <li>HandleBars can be used to render web pages to the client side from data on the server-side.</li>
                                    <li>Command to install hbs module</li>
                                </ul>

                                <p>Install Handlebars:</p>
                                <pre><code>npm install hbs</code></pre>
                                <p><strong>demo.ejs:</strong></p>
                                <pre><code>{`<html>
    <body>
        <p>This a demo page using Handle bars</p>
    </body>
</html>`}</code></pre>
                                <p><strong>Server.js:</strong></p>
                                <pre><code>{`const express = require("express");
const app = express();

app.set("view engine","hbs")

app.get("/hbs",(req,res) => {
    res.render("demo.hbs");
});

app.listen(5000,() => {
    console.log("Server is running on port 5000");
});`}</code></pre>
                            </div>
                        </section>

                        <section id="middleware" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-layers"></i> Middleware in Express</h2>
                            <div className="property-card">
                                <h3 className="h4">What is Middleware?</h3>
                                <p>Middleware functions are functions that have access to:</p>
                                <ul>
                                    <li>The request object (<code>req</code>)</li>
                                    <li>The response object (<code>res</code>)</li>
                                    <li>The <code>next</code> function in the application's request-response cycle</li>
                                </ul>
                                <p>Middleware can:</p>
                                <ul>
                                    <li>Execute any code</li>
                                    <li>Make changes to request and response objects</li>
                                    <li>End the request-response cycle</li>
                                    <li>Call the next middleware in the stack</li>
                                </ul>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Types of Middleware</h3>
                                <ul>
                                    <li>Application-level middleware</li>
                                    <li>Router-level middleware</li>
                                    <li>Error-handling middleware</li>
                                    <li>Built-in middleware</li>
                                    <li>Third-party middleware</li>
                                </ul>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Application-Level Middleware</h3>
                                <ul>
                                    <li>Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.</li>
                                    <li>This example shows a middleware function with no mount path.</li>
                                    <li>The function is executed every time the app receives a request.</li>
                                </ul>
                                <pre><code>{`const express = require('express')
const app = express()

// Middleware with no mount path - executed for every request
app.use((req, res, next) => {
    console.log('Middleware executed');
    next();
});

// Middleware mounted on /user path
app.use('/user', function (req, res, next) {
    console.log("Middleware for /user");
    next();
});

app.get('/user', function (req, res) {
    res.send('Welcome to Express js');
});

app.listen(3000);`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Error-Handling Middleware</h3>
                                <ul>
                                    <li>Error-handling middleware always takes four arguments.</li>
                                    <li>You must provide four arguments to identify it as an error-handling middleware function.</li>
                                    <li>Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors. Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature <code>{`(err, req, res, next))`}</code>:</li>
                                </ul>
                                <pre><code>{`app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Built-in Middleware</h3>
                                <p><strong>express.json()</strong></p>
                                <ul>
                                    <li>express.json() is a built-in middleware function in Express.</li>
                                    <li>This method is used to parse the incoming requests with JSON payloads and is based upon the bodyparser.</li>
                                    <li>This method returns the middleware that only parses JSON and only looks at the requests where the content-type header matches the type option.</li>
                                </ul>
                                <pre><code>{`const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/', function (req, res) {
    console.log(req.body.name)
    res.end();
});

app.listen(PORT);`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Third-Party Middleware</h3>
                                <ul>
                                    <li>Use third-party middleware to add functionality to Express apps.</li>
                                    <li>Install the Node.js module for the required functionality, then load it in your app at the application level or at the router level.</li>
                                    The following example illustrates installing and loading the cookie-parsing middleware function cookie-parser:
                                </ul>
                                <p><strong>cookie-parser example:</strong></p>
                                <pre><code>{`const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

// Load the cookie-parsing middleware
app.use(cookieParser())`}</code></pre>
                                <p><strong>body-parser example:</strong></p>
                                <p>Parse incoming request bodies in a middleware before your handlers, available under the req.body property.</p>
                                <p><b>Installation: </b></p>
                                <div className="propert-card">
                                    <pre>npm install body-parser</pre>
                                </div>
                                <pre><code>{`const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())`}</code></pre>
                            </div>
                        </section>

                        <section id="request" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-arrow-down-circle"></i> Request Object</h2>
                            <div className="property-card">
                                <p>The Express.js Request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc.</p>
                                <pre><code>{`app.get('/', function (req, res) {
    // req contains the request object
    // res contains the response object
});`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Request Object Properties</h3>
                                <table className="method-table">
                                    <thead>
                                        <tr>
                                            <th>Property</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>req.app</code></td>
                                            <td>Holds reference to the Express application instance</td>
                                        </tr>
                                        <tr>
                                            <td><code>req.baseUrl</code></td>
                                            <td>URL path where router instance was mounted</td>
                                        </tr>
                                        <tr>
                                            <td><code>req.body</code></td>
                                            <td>Contains key-value pairs of submitted request body</td>
                                        </tr>
                                        <tr>
                                            <td><code>req.cookies</code></td>
                                            <td>Contains cookies sent by the request (with cookie-parser)</td>
                                        </tr>
                                        <tr>
                                            <td><code>req.fresh</code></td>
                                            <td>Indicates if request is fresh</td>
                                        </tr>
                                        <tr>
                                            <td><code>req.hostname</code></td>
                                            <td>Contains the hostname</td>
                                        </tr>
                                        <tr>
                                            <td><code>req.ip</code></td>
                                            <td>Remote IP address of the request</td>
                                        </tr>
                                        <tr>
                                            <td><code>req.originalUrl</code></td>
                                            <td>Original request URL</td>
                                        </tr>
                                        <tr>
                                            <td><code>req.params</code></td>
                                            <td>Object containing route parameters</td>
                                        </tr>
                                        <tr>
                                            <td><code>req.path</code></td>
                                            <td>Path part of the request URL</td>
                                        </tr>
                                        <tr>
                                            <td><code>req.protocol</code></td>
                                            <td>Request protocol ("http" or "https")</td>
                                        </tr>
                                        <tr>
                                            <td><code>req.query</code></td>
                                            <td>Object containing query string parameters</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Request Object Methods</h3>
                                <p><strong>req.accepts(types)</strong> - Checks if specified content types are acceptable</p>
                                <pre><code>{`req.accepts('html');        // => "html"
req.accepts('text/html');   // => "text/html"`}</code></pre>

                                <p><strong>req.get(field)</strong> - Returns specified HTTP request header field</p>
                                <pre><code>{`req.get('Content-Type');   // => "text/plain"`}</code></pre>

                                <p><strong>req.is(type)</strong> - Checks if request Content-Type matches type</p>
                                <pre><code>{`// With Content-Type: text/html; charset=utf-8
req.is('html');            // => true
req.is('text/html');       // => true
req.is('text/*');          // => true`}</code></pre>

                                <p><strong>req.param(name [, defaultValue])</strong> - Gets parameter value</p>
                                <pre><code>{`// ?name=sasha
req.param('name')         // => "sasha"`}</code></pre>
                            </div>
                        </section>

                        <section id="response" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-arrow-up-circle"></i> Response Object</h2>
                            <div className="property-card">
                                <p>The Response object (<code>res</code>) specifies the HTTP response sent by an Express app when it gets an HTTP request.</p>
                                <p>Key capabilities:</p>
                                <ul>
                                    <li>Sends response back to the client browser</li>
                                    <li>Sets cookies that will be written to the client browser</li>
                                    <li>Once you call <code>res.send()</code>, <code>res.redirect()</code>, or <code>res.render()</code>, you cannot call them again</li>
                                </ul>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Response Object Properties</h3>
                                <table className="method-table">
                                    <thead>
                                        <tr>
                                            <th>Property</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>res.app</code></td>
                                            <td>Holds reference to the Express application instance</td>
                                        </tr>
                                        <tr>
                                            <td><code>res.headersSent</code></td>
                                            <td>Boolean indicating if headers were sent</td>
                                        </tr>
                                        <tr>
                                            <td><code>res.locals</code></td>
                                            <td>Object containing response local variables scoped to the request</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Response Object Methods</h3>
                                <p><strong>res.append(field [, value])</strong> - Appends value to HTTP response header</p>
                                <pre><code>{`res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
res.append('Warning', '199 Miscellaneous warning');`}</code></pre>

                                <p><strong>res.attachment(filename)</strong> - Sends file as attachment</p>
                                <pre><code>{`res.attachment('path/to/js_pic.png');`}</code></pre>

                                <p><strong>res.cookie(name, value [, options])</strong> - Sets cookie</p>
                                <pre><code>{`res.cookie("name", "David");`}</code></pre>

                                <p><strong>res.download(path [, filename] [, fn])</strong> - Transfers file as attachment</p>
                                <pre><code>{`res.download('/report-12345.pdf');`}</code></pre>

                                <p><strong>res.end([data] [, encoding])</strong> - Ends response process</p>
                                <pre><code>{`res.end();
res.status(404).end();`}</code></pre>

                                <p><strong>res.get(field)</strong> - Returns HTTP response header</p>
                                <pre><code>{`res.get('Content-Type');`}</code></pre>

                                <p><strong>res.json([body])</strong> - Sends JSON response</p>
                                <pre><code>{`res.json(null);
res.json({ name: 'aject' });`}</code></pre>

                                <p><strong>res.location(path)</strong> - Sets response Location header</p>
                                <pre><code>{`res.location('http://xyz.com');`}</code></pre>

                                <p><strong>res.redirect([status,] path)</strong> - Redirects to URL</p>
                                <pre><code>{`res.redirect('http://example.com');`}</code></pre>

                                <p><strong>res.render(view [, locals] [, callback])</strong> - Renders view</p>
                                <pre><code>{`res.render('index');
res.render('user', { name: 'aryan' }, function(err, html) {
    // ...
});`}</code></pre>

                                <p><strong>res.send([body])</strong> - Sends HTTP response</p>
                                <pre><code>{`res.send(new Buffer("whoop"));
res.send({ some: 'json' });
res.send('<p>some html</p>');`}</code></pre>

                                <p><strong>res.sendFile(path [, options] [, fn])</strong> - Transfers file</p>
                                <pre><code>{`res.sendFile(fileName, options, function (err) {
    // ...
});`}</code></pre>

                                <p><strong>res.set(field [, value])</strong> - Sets response header</p>
                                <pre><code>{`res.set('Content-Type', 'text/plain');
res.set({
    'Content-Type': 'text/plain',
    'Content-Length': '123'
});`}</code></pre>

                                <p><strong>res.status(code)</strong> - Sets HTTP status</p>
                                <pre><code>{`res.status(403).end();
res.status(400).send('Bad Request');`}</code></pre>

                                <p><strong>res.type(type)</strong> - Sets Content-Type header</p>
                                <pre><code>{`res.type('.html');`}</code></pre>
                            </div>
                        </section>

                        <section id="cookies" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-cookie"></i> Cookies in Express</h2>
                            <div className="property-card">
                                <p>Cookies are small files/data sent to client with a server request and stored on the client side.</p>
                                <p>Every time the user loads the website back, this cookie is sent with the request.</p>
                                <p>Uses of HTTP Cookies:</p>
                                <ul>
                                    <li>Session management</li>
                                    <li>Personalization (Recommendation systems)</li>
                                    <li>User tracking</li>
                                </ul>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Using Cookies with Express</h3>
                                <p>Install cookie-parser:</p>
                                <pre><code>npm install cookie-parser</code></pre>
                                <p>Example:</p>
                                <pre><code>{`const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/cookieset', function(req, res){
    res.cookie('cookie_name', 'cookie_value');
    res.cookie('company', 'google');
    res.cookie('name', 'pooja');
    res.status(200).send('Cookie is set');
});

app.get('/cookieget', function(req, res) {
    res.status(200).send(req.cookies);
});

app.get('/', function (req, res) {
    res.status(200).send('Welcome to Express!');
});

app.listen(8000);`}</code></pre>
                            </div>
                        </section>

                        <section id="sessions" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-clock-history"></i> Sessions in Express</h2>
                            <div className="property-card">
                                <p>Sessions solve the problem of HTTP being stateless by assigning the client an ID and storing information associated with that ID on the server.</p>
                                <p>Install express-session:</p>
                                <pre><code>npm install --save express-session</code></pre>
                                <p>Example:</p>
                                <pre><code>{`const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
    if(req.session.page_views){
        req.session.page_views++;
        res.send("You visited this page " + req.session.page_views + " times");
    } else {
        req.session.page_views = 1;
        res.send("Welcome to this page for the first time!");
    }
});

app.listen(3000);`}</code></pre>
                            </div>
                        </section>

                        <section id="rest" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-database"></i> RESTful API with Express</h2>
                            <div className="property-card">
                                <p>REST (Representational State Transfer) is an architectural style for designing networked applications.</p>
                                <p>HTTP methods map to CRUD operations:</p>
                                <table className="method-table">
                                    <thead>
                                        <tr>
                                            <th>Method</th>
                                            <th>URI</th>
                                            <th>Details</th>
                                            <th>Function</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>GET</td>
                                            <td>/movies</td>
                                            <td>Safe, cachable</td>
                                            <td>Get list of all movies</td>
                                        </tr>
                                        <tr>
                                            <td>GET</td>
                                            <td>/movies/1234</td>
                                            <td>Safe, cachable</td>
                                            <td>Get details of movie id 1234</td>
                                        </tr>
                                        <tr>
                                            <td>POST</td>
                                            <td>/movies</td>
                                            <td>N/A</td>
                                            <td>Creates a new movie</td>
                                        </tr>
                                        <tr>
                                            <td>PUT</td>
                                            <td>/movies/1234</td>
                                            <td>Idempotent</td>
                                            <td>Modifies movie id 1234</td>
                                        </tr>
                                        <tr>
                                            <td>DELETE</td>
                                            <td>/movies/1234</td>
                                            <td>Idempotent</td>
                                            <td>Deletes movie id 1234</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">GET Request Example</h3>
                                <p><strong>index.html:</strong></p>
                                <pre><code>{`<html>
<body>
    <form action="http://127.0.0.1:8081/process_get" method="GET">
        First Name: <input type="text" name="first_name"><br>
        Last Name: <input type="text" name="last_name">
        <input type="submit" value="Submit">
    </form>
</body>
</html>`}</code></pre>
                                <p><strong>get.js:</strong></p>
                                <pre><code>{`const express = require('express');
const app = express();

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function (req, res) {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.listen(8000);`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">POST Request Example</h3>
                                <p><strong>index.html:</strong></p>
                                <pre><code>{`<html>
<body>
    <form action="http://127.0.0.1:8081/process_post" method="POST">
        First Name: <input type="text" name="first_name"><br>
        Last Name: <input type="text" name="last_name">
        <input type="submit" value="Submit">
    </form>
</body>
</html>`}</code></pre>
                                <p><strong>post.js:</strong></p>
                                <pre><code>{`const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.post('/process_post', urlencodedParser, function (req, res) {
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.listen(8000);`}</code></pre>
                            </div>
                        </section>
                        <section id="mongoose" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-database"></i> Express JS Database</h2>
                            <div className="property-card">
                                <p>Express apps can use any database supported by Node (Express itself doesn't define any specific additional behavior/requirements for database management).</p>
                                <p>There are many popular options, including PostgreSQL, MySQL, Redis, SQLite, and MongoDB.</p>
                                <p>There are two common approaches for interacting with a database:</p>
                                <ol>
                                    <li>Using the databases' native query language (e.g. SQL) Using an Object Data Model ("ODM") or an Object Relational Model ("ORM").</li>
                                    <li>An ODM/ORM represents the website's data as JavaScript objects, which are then mapped to the underlying database.</li>
                                </ol>
                            </div>

                            <h2 className="mb-3">CRUD, Express and MONGODB</h2>
                            <div className="property-card">
                                <h3 className="mb-3">Express</h3>
                                <p>It is a framework for building web applications on top of Node.js. It simplifies the server creation process that is already available in Node. In case you were wondering, Node allows you to use JavaScript as your server-side language.</p>
                                <h3 className="mb-3">MongoDB</h3>
                                <p>It is a database. This is the place where you store information for your websites (or applications).</p>
                                <h3 className="mb-3">CRUD</h3>
                                <p>is an acronym for Create, Read, Update and Delete. It is a set of operations we get servers to execute (POST, GET, PUT and DELETE requests respectively).</p>
                                <p>This is what each operation does:</p>
                                <ul>
                                    <li>Create (POST) - Make something</li>
                                    <li>Read (GET)- Get something</li>
                                    <li>Update (PUT) - Change something</li>
                                    <li>Delete (DELETE)- Remove something</li>
                                </ul>
                            </div>

                            <h2 className="h2 mb-3"><i className="bi bi-motherboard"></i> Mongoose with Express</h2>
                            <div className="property-card">
                                <p>Mongoose is a popular ODM (Object Data Modeling) library for MongoDB and Node.js that simplifies database interactions by providing a schema-based solution to model application data.</p>
                                <p>It is widely used to build scalable, structured, and efficient database-driven applications.</p>
                                <p><b>Install Mongoose:</b></p>
                                <pre><code>npm install mongoose</code></pre>
                                <p>Example:</p>
                                <pre><code>{`const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://username:password@cluster0.8suvg.mongodb.net/database")
.then(() => {
    console.log('Connected to database');
})
.catch((err) => {
    console.log('Error in connecting to database', err);
});

// Define schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});

// Create model
const User = mongoose.model('User', userSchema);

// Routes
app.get("/person.html", (req, res) => {
    res.sendFile(__dirname + "/views/person.html");
});

app.post("/person", (req, res) => {
    const personInfo = req.body;

    if (!personInfo.name || !personInfo.age || !personInfo.nationality) {
        res.send("Sorry, you provided wrong info");
    } else {
        const newPerson = new User({
            name: personInfo.name,
            age: personInfo.age,
            nationality: personInfo.nationality
        });

        newPerson.save()
        .then(savedPerson => {
            res.send("Person added successfully");
        })
        .catch(err => {
            console.error("Error saving person:", err);
            res.send("Error saving person to the database");
        });
    }
});

app.get('/', (req, res) => {
    res.send("Hi Im coming from express app");
});

app.listen(8080);`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">HTML Form Example (person.html)</h3>
                                <pre><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Person</title>
</head>
<body>
    <h1>Add a New Person</h1>
    <form action="http://localhost:8080/person" method="post">
        <p>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter Name" required><br><br>
        </p>
        <p>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" placeholder="Enter Age" required><br><br>
        </p>
        <p>
            <label for="nationality">Nationality:</label>
            <input type="text" id="nationality" name="nationality" placeholder="Enter Nationality" required><br><br>
        </p>
        <button type="submit">Submit</button>
    </form>
</body>
</html>`}</code></pre>
                            </div>
                        </section>

                        <section id="express-app" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-app-indicator"></i> Express Application Object</h2>
                            <div className="property-card">
                                <p>The app object has methods for:</p>
                                <ul>
                                    <li>Routing HTTP requests</li>
                                    <li>Configuring middleware</li>
                                    <li>Rendering HTML views</li>
                                    <li>Registering template engine</li>
                                </ul>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Properties</h3>
                                <p><strong>app.locals:</strong> Object with properties that are local variables within the app</p>
                                <pre><code>{`app.locals.title = 'foo';
console.dir(app.locals.title); // 'foo'`}</code></pre>

                                <p><strong>app.mountpath:</strong> Path pattern(s) where sub-app was mounted</p>
                                <pre><code>{`const express = require('express');
const app = express();
const foo = express();

foo.get('/', (req, res) => {
    res.send(foo.mountpath); // '/foo'
});
app.use('/foo', foo);`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Events</h3>
                                <p><strong>app.on('mount', callback(parent)):</strong> Fired when sub-app is mounted</p>
                                <pre><code>{`const foo = express();
foo.on('mount', (parent) => {
    console.log(parent); // parent app
});
app.use('/foo', foo);`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Methods</h3>
                                <p><strong>app.all(path, callback):</strong> Handles all HTTP methods</p>
                                <pre><code>{`app.all('/', function (req, res, next) {
    res.send('hi');
    next();
});`}</code></pre>

                                <p><strong>app.disable(name):</strong> Sets setting to false</p>
                                <pre><code>{`app.disable('foo');
app.get('/', function (req, res) {
    res.json({ foo: app.get('foo') }); // false
});`}</code></pre>
                            </div>
                        </section>

                        <section id="authentication" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-shield-lock"></i> Simple Authentication with JWT & Bcrypt</h2>

                            <div className="property-card">
                                <h3 className="h4">Authentication Flow (Simplified)</h3>
                                <ol>
                                    <li>User registers with name, email, password</li>
                                    <li>Password is hashed using bcrypt</li>
                                    <li>User logs in using email & password</li>
                                    <li>JWT token is issued on login and sent in response</li>
                                </ol>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">1. Install Packages</h3>
                                <pre><code>npm install express mongoose bcryptjs jsonwebtoken dotenv</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">2. User Model (models/User.js)</h3>
                                <pre><code>{`const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">3. Auth Controller (controllers/authController.js)</h3>
                                <pre><code>{`const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      name: newUser.name,
      email: newUser.email,
      token
    });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    res.json({
      message: 'Login successful',
      name: user.name,
      email: user.email
    });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">4. Routes (routes/authRoutes.js)</h3>
                                <pre><code>{`const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

module.exports = router;`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">5. Main App (index.js)</h3>
                                <pre><code>{`const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();
app.use(express.json());

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log('Server running on port ' + process.env.PORT);
});`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">6. Environment Variables (.env)</h3>
                                <pre><code>{`PORT=5000
MONGO_URI=mongodb://localhost:27017/myapp
JWT_SECRET=myjwtsecret`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">✅ Sample Responses</h3>
                                <ul>
                                    <li><strong>POST /api/auth/register</strong><br />
                                        <code>{`{ "name": "Mugil", "email": "mugil@example.com", "token": "..." }`}</code></li>
                                    <li><strong>POST /api/auth/login</strong><br />
                                        <code>{`{ "message": "Login successful", "name": "Mugil", "email": "mugil@example.com" }`}</code></li>
                                </ul>
                            </div>
                        </section>


                        <section id="mvc" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> MVC Structure in Express</h2>

                            <div className="property-card">
                                <h3 className="h4">MVC Project Structure</h3>
                                <pre><code>{`project-root/
├── config/
│   ├── config.env
│   └── db.js
├── controllers/
│   ├── auth.js
│   └── users.js
├── middleware/
│   ├── auth.js
│   └── error.js
├── models/
│   └── User.js
├── routes/
│   ├── auth.js
│   └── users.js
├── utils/
│   └── errorResponse.js
└── server.js`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">1. Models (Data Layer)</h3>
                                <ul>
                                    <li>Define database schemas and models</li>
                                    <li>Handle data validation</li>
                                    <li>Interact directly with the database</li>
                                    <li>Example: <code>models/User.js</code> (shown in Authentication section)</li>
                                </ul>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">2. Controllers (Business Logic)</h3>
                                <ul>
                                    <li>Handle application logic</li>
                                    <li>Process requests and return responses</li>
                                    <li>Interact with models</li>
                                    <li>Example: <code>controllers/auth.js</code> (shown in Authentication section)</li>
                                </ul>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">3. Routes (URL Endpoints)</h3>
                                <ul>
                                    <li>Define API endpoints</li>
                                    <li>Map URLs to controller methods</li>
                                    <li>Apply middleware</li>
                                    <li>Example: <code>routes/auth.js</code> (shown in Authentication section)</li>
                                </ul>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">4. Middleware (Request Processing)</h3>
                                <ul>
                                    <li>Process requests before they reach controllers</li>
                                    <li>Authentication, logging, error handling</li>
                                    <li>Example: <code>middleware/auth.js</code> (shown in Authentication section)</li>
                                </ul>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">5. Configuration (App Setup)</h3>
                                <ul>
                                    <li>Database connection</li>
                                    <li>Environment variables</li>
                                    <li>Server setup</li>
                                    <li>Example: <code>config/db.js</code></li>
                                </ul>
                                <pre><code>{`const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connected:', conn.connection.host);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;`}</code></pre>
                            </div>
                        </section>

                        <section id="file-uploads" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-file-earmark-arrow-up"></i> File Uploads in Express</h2>

                            <div className="property-card">
                                <h3 className="h4">Basic File Upload Setup</h3>
                                <p>To handle file uploads in Express, you'll need the <code>multer</code> middleware package.</p>

                                <p>Install multer:</p>
                                <pre><code>npm install multer</code></pre>

                                <p>Basic example:</p>
                                <pre><code>{`const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set up storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Uploads will be saved in 'uploads' folder
    },
    filename: function (req, file, cb) {
        // Create unique filename with original extension
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

// Initialize multer with storage configuration
const upload = multer({ storage: storage });

// Serve static files from uploads directory
app.use('/uploads', express.static('uploads'));

// Handle single file upload
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    
    res.json({
        message: 'File uploaded successfully',
        filePath: "/ uploads / \${req.file.filename}"
    });
});

app.listen(3000, () => console.log('Server started on port 3000'));`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">HTML Form Example</h3>
                                <p>Here's a simple HTML form to test the upload endpoint:</p>
                                <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>File Upload</title>
</head>
<body>
    <h1>Upload a File</h1>
    <form action="/upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="file" required>
        <button type="submit">Upload</button>
    </form>
</body>
</html>`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Handling Multiple Files</h3>
                                <p>Multer can handle multiple files at once:</p>
                                <pre><code>{`// Handle multiple files (up to 5)
app.post('/upload-multiple', upload.array('files', 5), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).send('No files uploaded.');
    }
    
    const filePaths = req.files.map(file => "/ uploads / \${file.filename}");

                                    res.json({
                                        message: 'Files uploaded successfully',
                                    filePaths: filePaths
    });
});`}</code></pre>
                            </div>
                        </section>

                        <section id="crud" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Student Management API (MERN Stack)</h2>
                            <ul className="mb-3">
                                <li><strong>Backend Stack:</strong> Express.js, MongoDB, Mongoose</li>
                                <li><strong>Features:</strong> Create, Read, Update, Delete student details</li>
                                <li><strong>DB:</strong> MongoDB Atlas or Local MongoDB via <code>.env</code></li>
                                <li><strong>API Routes:</strong> RESTful CRUD endpoints</li>
                            </ul>

                            <div className="property-card">
                                <h3 className="h4">📁 Folder Structure</h3>
                                <pre><code>{`project-root/
├── controllers/
│   └── StudentController.js
├── models/
│   └── Student.js
├── routes/
│   └── studentRoutes.js
├── .env
├── index.js
├── package.json
└── README.md`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">📄 models/Student.js</h3>
                                <pre><code>{`const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  schoolName: { type: String, required: true },
  age: { type: Number, required: true }
});

module.exports = mongoose.model('students', studentSchema);`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">📄 controllers/StudentController.js</h3>
                                <pre><code>{`const Students = require('../models/Student');

// Create
exports.createStudent = async (req, res) => {
  const { name, email, phone, age, schoolName, address } = req.body;
  if (!name || !email || !phone || !age || !schoolName || !address) {
    return res.status(400).json({ error: 'Please provide all required details' });
  }
  try {
    const student = await Students.create({ name, email, phone, age, schoolName, address });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create student' });
  }
};

// Read
exports.findStudent = async (req, res) => {
  try {
    const students = await Students.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};

// Update
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, age, schoolName, address } = req.body;
  try {
    const updatedStudent = await Students.findByIdAndUpdate(
      id,
      { name, email, phone, age, schoolName, address },
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student' });
  }
};

// Delete
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedStudent = await Students.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
};`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">📄 routes/studentRoutes.js</h3>
                                <pre><code>{`const express = require('express');
const router = express.Router();
const { createStudent, findStudent, updateStudent, deleteStudent } = require('../controllers/StudentController');

router.post('/create', createStudent);
router.get('/getdata', findStudent);
router.put('/update/:id', updateStudent);
router.delete('/delete/:id', deleteStudent);

module.exports = router;`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">📄 index.js (Main Entry)</h3>
                                <pre><code>{`const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const studentRoutes = require('./routes/studentRoutes');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// DB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Database connected'))
.catch(err => console.log("Error connecting to the database " + err));

// Routes
app.get('/', (req, res) => {
  res.send('Express app is running');
});
app.use('/api', studentRoutes);

// Start Server
app.listen(process.env.PORT, () => {
  console.log("Server is listening on " + process.env.PORT);
});`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">📄 .env</h3>
                                <pre><code>{`MONGO_URI=mongodb+srv://<your-connection-uri>
PORT=5000`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">📌 Sample API Endpoints</h3>
                                <ul>
                                    <li><strong>POST /api/create</strong> - Create new student</li>
                                    <li><strong>GET /api/getdata</strong> - Get all students</li>
                                    <li><strong>PUT /api/update/:id</strong> - Update student by ID</li>
                                    <li><strong>DELETE /api/delete/:id</strong> - Delete student by ID</li>
                                </ul>
                            </div>
                        </section>

                        <section id="projects" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-lightbulb"></i> Express Project Ideas</h2>

                            <div className="property-card">
                                <h3 className="h4">Beginner Projects</h3>
                                <ul>
                                    <li><strong>Todo List API</strong> - CRUD operations for tasks with JWT auth</li>
                                    <li><strong>Blog API</strong> - Users can create, read, update, delete blog posts</li>
                                    <li><strong>Weather App</strong> - Integrate with weather API to fetch data</li>
                                    <li><strong>Book Store API</strong> - Manage inventory with user roles</li>
                                    <li><strong>Contact Form Backend</strong> - Save form submissions to database</li>
                                </ul>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Intermediate Projects</h3>
                                <ul>
                                    <li><strong>E-commerce API</strong> - Products, cart, checkout with Stripe integration</li>
                                    <li><strong>Social Media API</strong> - Posts, comments, likes, follows</li>
                                    <li><strong>Job Board API</strong> - Post jobs, apply, user profiles</li>
                                    <li><strong>Chat Application</strong> - Real-time messaging with Socket.io</li>
                                    <li><strong>File Upload Service</strong> - Upload/download files with S3 storage</li>
                                </ul>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Advanced Projects</h3>
                                <ul>
                                    <li><strong>Microservices Architecture</strong> - Split app into separate services</li>
                                    <li><strong>Video Streaming API</strong> - Upload, process, and stream videos</li>
                                    <li><strong>Multi-tenant SaaS</strong> - Support multiple organizations</li>
                                    <li><strong>Real-time Analytics</strong> - Track and visualize user activity</li>
                                    <li><strong>Payment Gateway</strong> - Custom payment processing system</li>
                                </ul>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Full Project Example: Blog API</h3>
                                <p><strong>Features:</strong></p>
                                <ul>
                                    <li>User authentication (register/login)</li>
                                    <li>CRUD operations for blog posts</li>
                                    <li>Comments on posts</li>
                                    <li>Categories and tags</li>
                                    <li>File upload for post images</li>
                                    <li>Pagination and filtering</li>
                                </ul>
                                <p><strong>Folder Structure:</strong></p>
                                <pre><code>{`blog-api/
├── config/
│   ├── config.env
│   └── db.js
├── controllers/
│   ├── auth.js
│   ├── posts.js
│   └── comments.js
├── middleware/
│   ├── auth.js
│   ├── error.js
│   └── logger.js
├── models/
│   ├── User.js
│   ├── Post.js
│   └── Comment.js
├── routes/
│   ├── auth.js
│   ├── posts.js
│   └── comments.js
├── uploads/
├── utils/
│   ├── errorResponse.js
│   └── fileUpload.js
└── server.js`}</code></pre>
                            </div>
                        </section>

                        <section id="deployment" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-cloud-upload"></i> Express Deployment on Render</h2>

                            <div className="property-card">
                                <h3 className="h4">Steps to Deploy on Render</h3>
                                <ul>
                                    <li><strong>1. Create a Render Account</strong> - Sign up at <a href="https://render.com" target="_blank">render.com</a></li>
                                    <li><strong>2. Push Project to GitHub</strong> - Make sure your Express project is on GitHub</li>
                                    <li><strong>3. Create a New Web Service</strong> - Select "Web Service" from the Render dashboard</li>
                                    <li><strong>4. Connect GitHub Repo</strong> - Choose your Express app repository</li>
                                    <li><strong>5. Set Environment</strong>:
                                        <ul>
                                            <li><code>Build Command</code>: <code>npm install</code></li>
                                            <li><code>Start Command</code>: <code>node server.js</code> or <code>npm start</code></li>
                                        </ul>
                                    </li>
                                    <li><strong>6. Add Environment Variables</strong> - Add your variables like <code>MONGO_URI</code>, <code>JWT_SECRET</code>, etc.</li>
                                    <li><strong>7. Deploy</strong> - Click “Create Web Service” to deploy your app</li>
                                </ul>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Example: Environment Variables</h3>
                                <pre><code>{`PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url (if using image upload)
NODE_ENV=production`}</code></pre>
                            </div>

                            <div className="property-card mt-4">
                                <h3 className="h4">Tips</h3>
                                <ul>
                                    <li>Make sure <code>server.js</code> listens to <code>process.env.PORT</code></li>
                                    <li>Allow CORS if frontend is hosted separately</li>
                                    <li>Use <code>dotenv</code> for managing env variables locally</li>
                                    <li>Ensure the root folder contains <code>package.json</code></li>
                                </ul>
                            </div>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    );
}

export default ExpressNotes;