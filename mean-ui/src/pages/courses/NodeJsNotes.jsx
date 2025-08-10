import React from 'react';

function NodeJsNotes() {
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
          .property-card {
            background-color: #f8f9fa;
            border-left: 4px solid #0d6efd;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 4px;
          }
          .example-box {
            background-color: #f0f8ff;
            border: 1px solid #d1e7ff;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
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
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-node-plus"></i> Node.js Notes</h1>
          <p className="lead">Complete Guide to Server-Side JavaScript Development</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#features"><i className="bi bi-star"></i> Features</a>
              <a className="nav-link" href="#architecture"><i className="bi bi-diagram-3"></i> Architecture</a>
              <a className="nav-link" href="#installation"><i className="bi bi-download"></i> Installation</a>
              <a className="nav-link" href="#modules"><i className="bi bi-box"></i> Modules</a>
              <a className="nav-link" href="#events"><i className="bi bi-lightning"></i> Events</a>
              <a className="nav-link" href="#global-objects"><i className="bi bi-globe"></i> Global Objects</a>
              <a className="nav-link" href="#filesystem"><i className="bi bi-file-earmark"></i> File System</a>
              <a className="nav-link" href="#streams"><i className="bi bi-pipe"></i> Streams</a>
              <a className="nav-link" href="#buffers"><i className="bi bi-memory"></i> Buffers</a>
              <a className="nav-link" href="#webserver"><i className="bi bi-server"></i> Web Server</a>
              <a className="nav-link" href="#restapi"><i className="bi bi-plug"></i> RESTful API</a>
              <a className="nav-link" href="#npm"><i className="bi bi-box-seam"></i> NPM</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Node.js Introduction</h2>
              <div className="property-card">
                <p>Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). It was developed by Ryan Dahl in 2009 and has since become one of the most popular backend technologies.</p>
                <p>Key characteristics:</p>
                <ul>
                  <li>Built on Chrome's JavaScript runtime</li>
                  <li>Uses event-driven, non-blocking I/O model</li>
                  <li>Lightweight and efficient</li>
                  <li>Ideal for data-intensive real-time applications</li>
                  <li>Includes a rich library of JavaScript modules</li>
                </ul>
                <p>Node.js = JavaScript Runtime Environment + JavaScript Library</p>
              </div>
            </section>

            <section id="features" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-star"></i> Features of Node.js</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-lightning"></i> Asynchronous and Event Driven</h4>
                    <p>All APIs of Node.js are asynchronous. This feature means the server doesn't wait for an API to return data and can handle multiple requests simultaneously.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-speedometer2"></i> Very Fast</h4>
                    <p>Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-cpu"></i> Single Threaded but Highly Scalable</h4>
                    <p>Node.js uses a single threaded model with event looping. This helps the server to respond in a non-blocking way and makes the server highly scalable.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-hdd"></i> No Buffering</h4>
                    <p>Node.js applications never buffer any data. These applications simply output the data in chunks.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="architecture" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> Node.js Process Model</h2>
              <div className="property-card">
                <p>Node.js processes user requests differently when compared to a traditional web server model:</p>
                <ul>
                  <li>Runs in a single process with application code in a single thread</li>
                  <li>Requires fewer resources than traditional platforms</li>
                  <li>All user requests are handled by a single thread</li>
                  <li>I/O work or long running jobs are performed asynchronously</li>
                  <li>The thread doesn't wait for requests to complete and is free to handle next requests</li>
                </ul>
                
                <div className="example-box">
                  <h5>Traditional Web Server Model vs Node.js Model</h5>
                  <pre>{`// Traditional Web Server
// Each request handled by dedicated thread
// If no thread available, request waits

// Node.js Model
// Single thread handles all requests
// I/O operations are asynchronous
// Thread remains free to handle other requests`}</pre>
                </div>
              </div>
            </section>

            <section id="installation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-download"></i> Installing Node.js</h2>
              <div className="property-card">
                <h4 className="h5"><i className="bi bi-windows"></i> On Windows</h4>
                <ol>
                  <li>Download the Node.js .msi installer from official website</li>
                  <li>Run the installer and follow the setup wizard</li>
                  <li>Verify installation by running <code>node -v</code> in command prompt</li>
                </ol>
                
                <div className="example-box">
                  <h5>Creating a Simple Node.js Application</h5>
                  <pre>{`// Step 1: Import required module
const http = require('http');

// Step 2: Create server
http.createServer(function(req, res) {
    res.end("Hi, I'm coming from server");
}).listen(5000, function() {
    console.log("Server is running on port 5000");
});`}</pre>
                </div>
              </div>
            </section>

            <section id="modules" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box"></i> Modules in Node.js</h2>
              <div className="property-card">
                <ul>
                  <li>Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node.js application.</li>
                  <li>Each module in Node.js has its own context, so it cannot interfere with other modules.</li>
                  <li>Also, each module can be placed in a separate .js file under a separate folder.</li>
                </ul>
                <ol>
                  <li><strong>Core Modules</strong> - Built-in modules that come with Node.js installation</li>
                  <li><strong>Local Modules</strong> - Modules created locally in your application</li>
                  <li><strong>Third-party Modules</strong> - Modules installed via NPM</li>
                </ol>
                
                <h4 className='mb-3'>Core Modules</h4>
                  <ul>
                    <li>The core modules include bare minimum functionalities of Node.js.</li>
                    <li>These core modules are compiled into its binary distribution and load automatically when Node.js process starts. However, you need to import the core modules first in order to use it n your application.</li>
                  </ul>
                <div className="example-box">
                  <h5>Core Modules Examples</h5>
                  <pre>{`const http = require('http');  // HTTP server
const fs = require('fs');      // File system
const path = require('path');   // Path utilities
const os = require('os');       // OS utilities`}</pre>
                </div>
                
                <h4 className='mb-3'>Local Modules</h4>
                <ul>
                  <li>Local modules are modules created locally in your Node.js application.</li>
                  <li>These modules include different functionalities of your application in separate files and folders.</li>
                </ul>
                <div className="example-box">
                  <h5>Creating a Local Module</h5>
                  <pre>{`// operator.js
let operator = {
    sum: function(a, b) { return a + b; },
    sub: function(a, b) { return a - b; },
    mul: function(a, b) { return a * b; },
    div: function(a, b) { return a / b; }
};
module.exports = operator;

// index.js
let operator = require('./operator.js');
console.log(operator.sum(10, 5));  // 15`}</pre>
                </div>
              </div>
            </section>

            <section id="events" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-lightning"></i> Event Loop</h2>
              <div className="property-card">
                <ul>
                  <li>Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks.</li>
                  <li>Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency.</li>
                  <li>Node uses observer pattern.</li>
                  <li>Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.</li>
                </ul>
                <h2 className="mb-3"><i className="bi bi-lightning"></i> Event Driven Programming</h2>
                <ul>
                  <li>Node.js uses events heavily and it is also one of the reasons why Node.js is pretty fast compared to other similar technologies.</li>
                  <li>As soon as Node starts its server, it simply initiates its variables, declares functions and then simply waits for the event to occur.</li>
                  <li>In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected.</li>
                  <li>The functions that listen to events act as Observers.</li>
                  <li>Whenever an event gets fired, its listener function starts executing. Node.js has multiple in-built events available through events module and Event Emitter class which are used to bind events and event-listeners as follows</li>
                </ul>
                
                <div className="example-box">
                  <h5>Event Emitter Example</h5>
                  <pre>{`const events = require('events');
const eventEmitter = new events.EventEmitter();

// Bind event listener
eventEmitter.on('myEvent', function() {
    console.log('Event received');
});

// Raise an event
eventEmitter.emit('myEvent');`}</pre>
                </div>
              </div>
            </section>

            <section className="mb-5" id="global-objects">
              <h2 className="mb-3"><i className="bi bi-globe"></i> Global Objects</h2>
              <div className="property-card">
                <ul>
                  <li>Node.js global objects are global in nature and they are available in all modules.</li>
                  <li>We do not include these objects in our application, rather we can use them directly.</li>
                </ul>

                <div className="example-box">
                  <h4><i className="bi bi-1-circle"></i> __filename:</h4>
                  <p>The __filename represents the filename of the code being executed.</p>
                  <pre><code>{`console.log(__filename);`}</code></pre>
                </div>
                <div className="example-box">
                  <h4><i className="bi bi-2-circle"></i> __dirname:</h4>
                  <p>The __dirname represents the name of the directory that the currently executing script resides in.</p>
                  <pre><code>{`console.log(__dirname);`}</code></pre>
                </div>
                <div className="example-box">
                  <h4><i className="bi bi-3-circle"></i> setTimeout(cb,ms):</h4>
                  <p>The setTimeout(cb,ms) global function is used to run callback function after at least milli seconds.</p>
                  <pre><code>{`function greet(){
  console.log("Good afternoon");
}
setTimeout(greet,2000);`}</code></pre>
                </div>
                <div className="example-box">
                  <h4><i className="bi bi-3-circle"></i> clearTimeout():</h4>
                  <p>This function used to stop a timer that was previously created with setTimeout().</p>
                  <pre><code>{`function greet(){
  console.log("Good afternoon");
}
const c = setTimeout(greet,2000);
clearTimeout(c);`}</code></pre>
                </div>
              </div>
            </section>

            <section id="filesystem" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark"></i> File System Module</h2>
              <div className="property-card">
                <p>The fs module provides an API for interacting with the file system. It supports both synchronous and asynchronous operations.</p>
                <h3 className="mb-3">Synchronous</h3>
                <p>They are called blocking functions as it waits for each operation to complete, only after that, it executes the next operation, hence blocking the next command from execution i.e. a command will not be executed until & unless the query has finished executing to get all the result from previous commands.</p>
                
                <h3 className='mb-3'>Asynchronous</h3>
                <p>They are called non-blocking functions as it never waits for each operation to complete, rather it executes all operations in the first go itself.</p>
                <div className="example-box">
                  <h5>Synchronous vs Asynchronous File Reading</h5>
                  <pre>{`const fs = require('fs');

// Asynchronous read
fs.readFile('input.txt', function(err, data) {
    if (err) return console.error(err);
    console.log("Async read: " + data.toString());
});

// Synchronous read
const data = fs.readFileSync('input.txt');
console.log("Sync read: " + data.toString());`}</pre>
                </div>
                
                <div className="example-box">
                  <h5>Writing to a File</h5>
                  <pre>{`fs.writeFile('input.txt', 'Node.js Programming', function(err) {
    if (err) return console.error(err);
    console.log("Data written successfully!");
});`}</pre>
                </div>
              </div>
            </section>

            <section id="streams" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-pipe"></i> Streams in Node.js</h2>
              <div className="property-card">
                <p>Streams are objects that let you read data from a source or write data to a destination in a continuous fashion.</p>
                <p>Types of streams:</p>
                <ul>
                  <li><strong>Readable</strong> - Used for read operations</li>
                  <li><strong>Writable</strong> - Used for write operations</li>
                  <li><strong>Duplex</strong> - Can be used for both read and write</li>
                  <li><strong>Transform</strong> - A type of duplex stream where output is computed based on input</li>
                </ul>
                
                <div className="example-box">
                  <h5>Reading from a Stream</h5>
                  <pre>{`const fs = require('fs');
let data = '';

const readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end', function() {
    console.log(data);
});

readerStream.on('error', function(err) {
    console.log(err.stack);
});`}</pre>
                </div>
                <div className="example-box">
                  <h5>Writing to a Stream</h5>
                  <pre>{`const fs = require('fs');
let data = 'Hi I'm Node js Streams';

const writerStream = fs.createWritStream('input.txt');
writerStream.write(data,'UTF-8');
writerStream.end();

writerStream.on('finish',function(){
console.log('Write completed');
});

writerStream.on('error',function(err){
console.log(err.stack);
});

console.log("Program Ended");`}</pre>
                </div>
                
                <div className="example-box">
                  <h5>Piping Streams</h5>
                  <ul>
                    <li>Piping is a mechanism where we provide the output of one stream as the input to another stream.</li>
                    <li>It is normally used to get data from one stream and to pass the output of that stream to another stream.</li>
                    <li>There is no limit on piping operations.</li>
                  </ul>
                  <pre>{`const fs = require('fs');

const rs = fs.createReadStream('./input.txt');
const ws = fs.createWriteStream('./output.txt');

rs.pipe(ws);
console.log("Program ended");`}</pre>
                </div>
              </div>
            </section>

            <section id="buffers" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-memory"></i> Buffers in Node.js</h2>
              <div className="property-card">
                <ul>
                  <li>Node provides Buffer class which provides instances to store raw data similar to an array of integers but corresponds to a raw memory allocation outside the v8 heap.</li>
                  <li>Buffer class is a global class that can be accessed in an application without importing the buffer module.</li>
                </ul>
                
                <div className="example-box">
                  <h5>Creating Buffers</h5>
                  <pre>{`// Uninitiated Buffer of 10 octets
let buf = new Buffer(10);

// Create from array
let buf = new Buffer([1, 2, 3, 4, 5]);

// Create from string
let buf = new Buffer("Hello", 'utf-8');`}</pre>
                </div>
                
                <div className="example-box">
                  <h5>Buffer Operations</h5>
                  <pre>{`// Writing to buffer
let buf = new Buffer(100);
let len = buf.write("Node.js Buffers");
console.log(len);

// Reading from buffer
let buf = new Buffer(100);
buf.write('Mahendra Singh Dhoni');
console.log(buf.toString()) ;

// Convert to JSON
let buf = new Buffer(100);
buf.write('Mahendra Singh Dhoni');
console.log(buf.toJSON()) ;

// Concatenate buffers
let buf1 = new Buffer(“Ravindra”);
let buf2 = new Buffer(“Jadeja”);
let buf3 = Buffer.concat([buf1,buf2]);
console.log(buf3.toString());

// Copy buffer
let buf1 = new Buffer(“Raina”);
let buf2 = new Buffer(5);
buf1.copy(buf2);
console.log(buf2.toString());

// Slice buffer
let buf1 = new Buffer(“Ruturaj”);
let buf2 = buf1.slice(0,4);
console.log(buf2.toString());

// Length
let buf1 = new Buffer(“Ruturaj”);
console.log(buf1.length);`}</pre>
                </div>
              </div>
            </section>

            <section id="webserver" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-server"></i> Web Server</h2>
              <div className="property-card">
                <ul>
                  <li>A Web Server is a software application which handles HTTP requests sent by the HTTP client, like web browsers, and returns web pages in response to the clients.</li>
                  <li>Web servers usually deliver html documents along with images, style sheets, and scripts.</li>
                  <li>Most of the web servers support server-side scripts, using scripting languages or redirecting the task to an application server which retrieves data from a database and performs complex logic and then sends a result to the HTTP client through the Web server.</li>
                  <li>Apache web server is one of the most commonly used web servers.</li>
                  <li>It is an open-source project.</li>
                </ul>
                <h2 className="mb-3">Web Application Architecture</h2>
                <p>A web application is usually divided into four layers.</p>
                <ol>
                   <li>Client - This layer consists of web browsers, mobile browsers on applications which can make HTTP requests to the web server.</li>
                   <li>Server - This layer has the web server which can intercept the requests made by the clients and pass then the response.</li>
                   <li>Business - This layer contains the application server which is utilized by the web server to do the required processing. This layer interacts with the data layer via the database or some external programs.</li>
                   <li>Data - This layer contains the databases or any other source of data.</li>
                </ol>
                
                <div className="example-box">
                  <h5>Basic Web Server Example</h5>
                  <pre>{`const http = require('http');

http.createServer(function(req, res) {
    res.end("Hi, I'm coming from server");
}).listen(5000, function() {
    console.log("Server is running on port 5000");
});`}</pre>
                </div>
              </div>
            </section>

            <section id="restapi" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-plug"></i> RESTful API with Node.js</h2>
              <div className="property-card">
                <ul>
                  <li>REST stands for REpresentational State Transfer.</li>
                  <li>REST is web standards-based architecture and uses HTTP Protocol.</li>
                  <li>It revolves around resource where every component is a resource and a resource is accessed by a common interface using HTTP standard methods.</li>
                  <li>REST was first introduced by Roy Fielding in 2000.</li>
                  <li>A REST Server simply provides access to resources and REST client accesses and modifies the resources using HTTP protocol.</li>
                  <li>Here each resource is identified by URIs/ global IDs.</li>
                  <li>REST uses various representation to represent a resource like text, JSON, XML but JSON is the most popular one.</li>
                </ul>
                <p>Common HTTP methods used in REST:</p>
                <ul>
                  <li><strong>GET</strong> - Read-only access to a resource</li>
                  <li><strong>POST</strong> - Create a new resource</li>
                  <li><strong>PUT</strong> - Update an existing resource</li>
                  <li><strong>DELETE</strong> - Remove a resource</li>
                </ul>
                
                <h2 className="h2 mb-3"><i className="bi bi-plug"></i> RESTful API Web Services</h2>
                <ul>
                  <li>A web service is a collection of open protocols and standards used for exchanging data between applications or systems.</li>
                  <li>Software applications written in various programming languages and running on various platforms can use web services to exchange data over computer networks like the Internet in a manner similar to inter-process communication on a single computer.</li>
                  <li>This interoperability (e.g., communication between Java and Python, or Windows and Linux applications) is due to the use of open standards.</li>
                  <li>Web services based on REST Architecture are known as RESTful web services.</li>
                  <li>These webservices uses HTTP methods to implement the concept of REST architecture. A RESTful web service usually defines a URI, Uniform Resource Identifier a service, which provides resource representation such as JSON and set of HTTP Methods</li>
                </ul>
                
                <h2 className="h2 mb-3"><i className="bi bi-plug"></i> Creating RESTFul Library</h2>
                <p>Create users.json file and include the below</p>
                <div className="example-box">
                  <pre><code>{`{
  "user1": {
    "name": "John",
    "age": 30,
    "city": "New York",
    "id": 1
  },
  "user2": {
    "name": "babyJohn",
    "age": 27,
    "city": "Mexico",
    "id": 2
  },
  "user3": {
    "name": "Sweety",
    "age": 28,
    "city": "Baroda",
    "id": 3
  },
  "user4": {
    "name": "Priya",
    "age": 20,
    "city": "Mexico",
    "id": 4
  }
}`}</code></pre>
                </div>
                
                <div className="example-box">
                  <h5>GET Users Example</h5>
                  <pre>{`const express = require('express');
const app = express();
const fs = require('fs');

app.get('/users', (req, res) => {
    fs.readFile('users.json', (err, data) => {
        res.end(data);
    });
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});`}</pre>
                </div>
                
                <div className="example-box">
                  <h5>GET User by ID</h5>
                  <pre>{`app.get('/users/:id', (req, res) => {
    fs.readFile('users.json', 'utf-8', (err, data) => {
        const users = JSON.parse(data);
        const user = users['user' + req.params.id];
        if (!user) return res.status(404).send('User not found');
        res.send(user);
    });
});`}</pre>
                </div>
                <div className="example-box">
                  <h5>Add Users</h5>
                  <pre>{`const express=require("express");
const app=express();
var fs=require("fs")
var user = {
  "user4": {
    "name": "Muthu",
    "age": 20,
    "city":"Baroda",
    "id": 5
  }
};
app.post('/adduser', function (req, res) {
  fs.readFile('users.json', 'utf-8', function (err, data) {
    if (err) {
      return res.status(500).send({ message: err });
    }
    const users = JSON.parse(data);
    users["user4"] = user["user4"];
    fs.writeFile('users.json', JSON.stringify(users, null, 2), function (writeErr) {
    if (writeErr) {
      return res.status(500).send({ message: writeErr });
    }
    console.log("User added successfully:");
    console.log(users);
    res.send(users);
    });
  });
});
app.listen(8080,()=>{
  console.log("server is running on port 8080");
})`}</pre>
                </div>
              </div>
            </section>

            <section id="npm" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box-seam"></i> Node Package Manager (NPM)</h2>
              <div className="property-card">
                <p>NPM is the default package manager for Node.js and provides:</p>
                <ul>
                  <li>Online repositories for Node.js packages/modules</li>
                  <li>Command line utility to install packages</li>
                </ul>
                
                <div className="example-box">
                  <h5>Installing Modules with NPM</h5>
                  <pre>{`npm install module-name

# Example:
npm install express`}</pre>
                </div>
                
                <div className="example-box">
                  <h5>Key NPM Commands</h5>
                  <pre>{`npm init          # Initialize a new package
npm install      # Install all dependencies
npm update       # Update packages
npm uninstall    # Remove a package
npm publish      # Publish a package`}</pre>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Node.js Notes &copy; 2025 | Comprehensive Guide to Server-Side JavaScript</p>
        </div>
      </footer>
    </div>
  );
}

export default NodeJsNotes;