import React from 'react';

function ReactNotes() {
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
          .feature-table {
            width: 100%;
            border-collapse: collapse;
          }
          .feature-table th, .feature-table td {
            border: 1px solid #dee2e6;
            padding: 8px;
            text-align: left;
          }
          .feature-table th {
            background-color: #f8f9fa;
          }
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-react"></i> React Notes</h1>
          <p className="lead">Your Comprehensive Guide to React Library</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#client-side"><i class="bi bi-pc-display"></i> Client-Side Frameworks</a>
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#features"><i className="bi bi-stars"></i> React Features</a>
              <a className="nav-link" href="#setup-react"><i className="bi bi-stars"></i> React Setup</a>
              <a className="nav-link" href="#components"><i className="bi bi-puzzle"></i> Components</a>
              <a className="nav-link" href="#jsx"><i className="bi bi-filetype-jsx"></i> JSX</a>
              <a className="nav-link" href="#state"><i className="bi bi-database"></i> State</a>
              <a className="nav-link" href="#props"><i className="bi bi-box-arrow-in-right"></i> Props</a>
              <a className="nav-link" href="#data-binding"><i class="bi bi-activity"></i> Data Binding</a>
              <a className="nav-link" href="#parent-child"><i class="bi bi-broadcast-pin"></i> Parent Child Communication</a>
              <a className="nav-link" href="#list"><i class="bi bi-list"></i> List in React</a>
              <a className="nav-link" href="#lifecycle"><i className="bi bi-arrow-repeat"></i> Lifecycle</a>
              <a className="nav-link" href="#hooks"><i className="bi bi-hook"></i> Hooks</a>
              <a className="nav-link" href="#routing"><i className="bi bi-signpost-split"></i> Routing</a>
              <a className="nav-link" href="#forms"><i className="bi bi-input-cursor-text"></i> Forms</a>
              <a className="nav-link" href="#styling"><i className="bi bi-brush"></i> Styling</a>
              <a className="nav-link" href="#axios"><i className="bi bi-cloud-arrow-down"></i> Axios</a>
              <a className="nav-link" href="#conditional"><i class="bi bi-shield-check"></i> Conditional Rendering</a>
              <a className="nav-link" href="#redux"><i class="bi bi-diagram-3"></i> Redux</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section className="mb-5" id="client-side">
              <h2><i class="bi bi-pc-display"></i> What is meant by client-side frameworks?</h2>
              <div className="property-card">
                <ul>
                  <li>There are two sides of web development – the server side and the client side. A server-side frameworks typically uses a programming language with a compiler and run on a web server, such as Node.js, PHP, Python, Java and ASP.Net.</li>
                  <li>The client-side frameworks are usually a JavaScript library and runs in a web browser, such as React, Angular and Vue.</li>
                </ul>
              </div>
              <h3 className="mb-3">Different client-side frameworks:</h3>
              <div className="property-card">
                <h4><i className="bi bi-1-circle"></i> Angular</h4>
                <ul>
                  <li>Originally developed and referred to as AngularJs, Angular is an open source, front-end, JavaScript framework that can be used with any platform.</li>
                  <li>It was designed and developed by Google to create a dynamic and interesting web applications.</li>
                </ul>
                <h4><i className="bi bi-2-circle"></i> React</h4>
                <ul>
                  <li>Originally developed and maintained by Facebook.</li>
                  <li>React is an open source, declarative, front-end, JavaScript library to help developers building user interfaces for single page or mobile apps.</li>
                  <li>React is simple to use, scalable and fast.</li>
                </ul>
                <h4><i className="bi bi-3-circle"></i> Bootstrap</h4>
                <ul>
                  <li>An HTML, CSS, JavaScript framework tool that helps developers to build responsive and native mobile websites.</li>
                  <li>Created by twitter.</li>
                </ul>
                <h4><i className="bi bi-4-circle"></i> Vue</h4>
                <ul>
                  <li>A progressive framework that developers can use to build user interfaces.</li>
                  <li>The core library is focused on the view layer only.</li>
                </ul>
              </div>
            </section>
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> What is React?</h2>
              <div className="property-card">
                <p>ReactJs is a declarative, efficient and flexible JavaScript library for building reusable UI components.</p>
                <p>It is an open source, component based front-end library responsible only for the view layer of the application.</p>
                <p>It was created by Jordan Walke, who was a software engineer at Facebook.</p>
                <p>Facebook was developed ReactJs in 2011, but it was released in the public in the month of May 2013.</p>
                <p>Today most of the websites are built using MVC (model view controller) architecture.</p>
                <p>In MVC architecture, React is the “V” which stands for view layers.</p>
                <p>A ReactJs application is made up of multiple components, each component responsible for outputting a smack, reusable piece of HTML code.</p>
                <p>The components are the heart of all React applications.</p>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-lightbulb"></i> Why React?</h3>
                <ul>
                  <li>Virtual DOM for efficient updates</li>
                  <li>Component-based architecture for reusability</li>
                  <li>Unidirectional data flow</li>
                  <li>Rich ecosystem and community support</li>
                  <li>Works well with other libraries/frameworks</li>
                </ul>
              </div>
            </section>

            <section id="features" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-stars"></i> React Features</h2>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-filetype-jsx"></i> JSX</h3>
                <p>JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code in JavaScript.</p>
                <pre><code>{`function Greeting() {
  return <h1>Hello, React!</h1>;
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-puzzle"></i> Components</h3>
                <p>React applications are built using reusable components that manage their own state and UI.</p>
                <pre><code>{`function Welcome() {
  return <h1>Welcome to our app!</h1>;
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-down-up"></i> One-Way Data Binding</h3>
                <p>React follows unidirectional data flow where data flows from parent to child components.</p>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-mirror"></i> Virtual DOM</h3>
                <p>React maintains a lightweight representation of the DOM in memory for efficient updates.</p>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-mirror"></i> Simplicity</h3>
                <p>ReactJS uses JSX file which makes the application simple and to code as well as understand.</p>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-mirror"></i> Performance</h3>
                <p>ReactJS is known to be a great performer. This feature makes it much better than other frameworks out there today. The reason behind this is that it manages a virtual DOM.</p>
              </div>

              <h2 className="h2 mb-3"><i class="bi bi-asterisk"></i> React Advantages</h2>
              <div className="property-card">
                <ul>
                  <li>Easy to learn and use.</li>
                  <li>Creating Dynamic web application becomes easier.</li>
                  <li>Reusable components.</li>
                  <li>Performance Enhancement.</li>
                  <li>Scope for testing the codes.</li>
                </ul>
              </div>
              <h2 className="h2 mb-3"><i class="bi bi-star-half"></i> React Disadvantages</h2>
              <div className="property-card">
                <ul>
                  <li>The high pace of development.</li>
                  <li>Poor documentation.</li>
                  <li>View part.</li>
                </ul>
              </div>
            </section>
            <section className="mb-5" id="setup-react">
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> Setting Up React</h3>
                <pre><code>{`Download and install Node.js and npm.
Code Editor: Visual Studio Code, WebStorm, etc...`}</code></pre>
                <pre><code>{`# Create a new React project using Vite
npm create vite@latest my-react-app

give project name

select framework (react)

select language (JavaScript)

# Navigate to project directory
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev`}</code></pre>
                <h3 className="h4"><i className="bi bi-gear"></i> React Example</h3>
                <pre><code>{`Example
import React from 'react';
function App(){
    return(
      <div>
        <h1>Hello I'm React APP</h1>
      </div>
    );
}
export default App;`}</code></pre>
              </div>

              <h2 className="mb-3"><i className="bi bi-puzzle"></i> React App Directory Structure</h2>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-mirror"></i> node_modules</h3>
                <p>It contains the react library and any other third party libraries needed.</p>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-mirror"></i> public</h3>
                <p>It holds the public assets of the application. It contains the index.html where React will mount the application on the {`<div id="root"></div>`} element.</p>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-mirror"></i> src</h3>
                <p>It contains the App.css, App.js, App.test.js, index.css, index.js files. Here the App.js always responsible for displaying the output screen in react.</p>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-mirror"></i> package-lock.json</h3>
                <p>It is generated automatically for any operations where npm package modifies either the node_modules tree or package.json. It cannot be published.</p>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-mirror"></i> package.json</h3>
                <p>It holds various metadata required for the project. It gives information to npm, which allows to identify the project as well as handle the projects dependencies.</p>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-mirror"></i> README.md</h3>
                <p>It provides the documentation to read about React topics.</p>
              </div>
            </section>

            <section id="components" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-puzzle"></i> React Components</h2>
              <ul>
                <li>React component is a building block of React Application.</li>
                <li>A React component represents a small chunk of user interface in a webpage.</li>
                <li>The primary job of a React component is to render its user interface and update it whenever its internal state is changed. In addition to rendering the UI, it manages the events belongs to its user interface.</li>
              </ul>
              <p>To summarize, react component provides below functionalities.</p>
              <ul>
                <li>Initial rendering of the user interface.</li>
                <li>Management and handling of events.</li>
                <li>Updating the user interface whenever the internal state is changed.</li>
              </ul>
              <p>React component accomplish these features using three concepts</p>
              <ul>
                <li>Properties - Enables the component to receive input.</li>
                <li>Events Enable the component to manage DOM events and end-user interaction.</li>
                <li>State - Enable the component to stay stateful. Stateful component updates its Ul with respect to its state.</li>
              </ul>

              <div className="property-card">
                <h3 className="h4 mb-3"><i className="bi bi-puzzle"></i> Creating a React Component</h3>
                <p>React library has two component types. The types are categorized based on the way it is being created.</p>
                <ul>
                  <li>Function component – uses plain JavaScript function</li>
                  <li>Class component – uses ES6 class</li>
                </ul>
                <p>The core difference between function and class components are</p>
                <ul><li>Function components are very minimal in nature. Its only requirement is to return a React element.</li></ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-code"></i> Functional Components</h3>
                <ul>
                  <li>In React, function components are a way to write components that only contain a render method and don't have their own state.</li>
                  <li>They are simply JavaScript functions that may or may not receive data as parameters.</li>
                  <li>We can create a function that takes props (properties) as input and returns what should be rendered.</li>
                  <li>A valid functional component can be shown in the below example.</li>
                </ul>
                <pre><code>{`function Greeting() {
  return <h1>Hello, Welcome!</h1>;
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-code-fill"></i> Class Components</h3>
                <ul>
                  <li>Class components are more complex than functional components.</li>
                  <li>It requires you to extend from React. Component and create a render function which returns a React element. You can pass data from one class to other class components.</li>
                  <li>You can create a class by defining a class that extends Component and has a render function.</li>
                  <li>The class component is also known as a stateful component because they can hold or manage local state.</li>
                  <li>Valid class component is shown in the below example</li>
                </ul>
                <pre><code>{`class Greeting extends React.Component {
  render() {
    return <h1>Hello, Welcome!</h1>;
  }
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-left-right"></i> Functional vs Class Components</h3>
                <table className="feature-table">
                  <thead>
                    <tr>
                      <th>Functional Components</th>
                      <th>Class Components</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Plain JavaScript functions</td>
                      <td>ES6 classes extending React.Component</td>
                    </tr>
                    <tr>
                      <td>No render method needed</td>
                      <td>Must have render() method</td>
                    </tr>
                    <tr>
                      <td>Stateless (before Hooks)</td>
                      <td>Stateful</td>
                    </tr>
                    <tr>
                      <td>No lifecycle methods (before Hooks)</td>
                      <td>Has lifecycle methods</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="jsx" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-filetype-jsx"></i> JSX</h2>
              <ul>
                <li>React JSX is an extension to JavaScript.</li>
                <li>JSX stands for JavaScript XML.</li>
                <li>It enables developer to create virtual DOM using XML syntax.</li>
                <li>It compiles down to pure JavaScript (React.createElement function calls). Since it
                  compiles to JavaScript, it can be used inside any valid JavaScript code.</li>
              </ul>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-slash"></i> JSX Basics</h3>
                <p>JSX is a syntax extension that allows you to write HTML-like code in JavaScript.</p>
                <pre><code>{`const element = <h1>Hello, world!</h1>;`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-braces"></i> Embedding Expressions</h3>
                <p>You can embed any JavaScript expression in JSX using curly braces.</p>
                <pre><code>{`function App() {
  return <p>{10+5}</p>;
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-chat-square-text"></i> JSX Comments</h3>
                <p>Comments in JSX are written inside curly braces.</p>
                <pre><code>{`function App() {
  return (
    <div>
      <h1>Hello World</h1>
      {/* This is a JSX comment */}
    </div>
  );
}`}</code></pre>
              </div>
            </section>

            <section id="state" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> State</h2>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-box-seam"></i> What is State?</h3>
                <ul>
                  <li>The state is an updatable structure that is used to contain data or information about the component.</li>
                  <li>The state in a component can change over time.</li>
                  <li>The change in state over time can happen as a response to user action or system event.</li>
                  <li>A component with the state is known as stateful components.</li>
                  <li>It is the heart of the react component which determines the behaviour of the component and how it will render.</li>
                  <li>They are also responsible for making a component dynamic and interactive.</li>
                  <li>A state must be kept as simple as possible.</li>
                  <li>It can be set by using the setState() method and calling setState() method triggers Ul updates.</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-code-fill"></i> Class Component State</h3>
                <pre><code>{`export default class StateEg Component {
  constructor() {
    super();
    this.state={
        name:"Rahul",
        age:25
    };
  }

  render() {
    return (
      <div>
        <h1>My name is {this.state.name} and I'm {this.state.age} years old.</h1>
      </div>
    );
  }
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-code"></i> Changing the State</h3>
                <p>We can change the component state by using setState() method and passing a new state object as the argument.</p>
                <pre><code>{`export default class StateEg Component {
  constructor() {
    super();
    this.state={
        name:"Rahul",
        age:25
    };
  }
  
  handleChange=()=>{
      this.setState({
          name:'Muthu',
          age:20
      });
  }

  render() {
    return (
      <div>
        <h1>My name is {this.state.name} and I'm {this.state.age} years old.</h1>
        <button onClick={this.handleChange}>Change State</button>
      </div>
    );
  }
}`}</code></pre>
              </div>
            </section>

            <section id="props" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box-arrow-in-right"></i> Props</h2>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-box"></i> What are Props?</h3>
                <ul>
                  <li>Props stand for "Properties."</li>
                  <li>They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes.</li>
                  <li>It gives a way to pass data from one component to other components.</li>
                  <li>It is similar to function arguments.</li>
                  <li>Props are passed to the component in the same way as arguments passed in a function.</li>
                  <li>Props are immutable so we cannot modify the props from inside the component.</li>
                  <li>Inside the components, we can add attributes called props.</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> Passing Props</h3>
                <pre><code>{`function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Welcome name="Alice" />;
}`}</code></pre>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> Default Props</h3>
                <p>If you want to use the props in class component we have to use these default props method.</p>
                <pre><code>{`export default class StateEg Component {
  constructor() { }

  render() {
    return (
      <div>
        <h2>My name is {this.props.name} and I'm {this.props.age} years old.</h2>
      </div>
    );
  }
}

StateEg.defaultProps={
    name:"Rahul",
    age:25
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-shield-check"></i> React Props Validation</h3>
                <ul>
                  <li>Props are an important mechanism for passing the read-only attributes to React components.</li>
                  <li>The props are usually required to use correctly in the component.</li>
                  <li>If it is not used correctly, the components may not behave as expected.</li>
                  <li>Hence, it is required to use props validation in improving react components.</li>
                  <li>Props validation is a tool that will help the developers to avoid future bugs and problems.</li>
                  <li>React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes.</li>
                  <li>However, if you use propTypes with your components, it helps you to avoid unexpected bugs.</li>
                </ul>
                <h5 className='mb-3'>React Props Validator</h5>
                <ol>
                  <li>PropTypes.any: The props can be of any data type.</li>
                  <li>PropTypes.array: The props should be an array.</li>
                  <li>PropTypes.bool: The props should be a boolean.</li>
                  <li>PropTypes.func: The props should be a function.</li>
                  <li>PropTypes.number: The props should be a number.</li>
                  <li>PropTypes.object: The props should be an object.</li>
                  <li>PropTypes.string: The props should be a string.</li>
                  <li>PropTypes.symbol: The props should be a symbol.</li>
                  <li>PropTypes.instanceOf: The props should be an instance of a particular JavaScript class.</li>
                  <li>PropTypes.isRequired: The props must be provided.</li>
                </ol>
                <pre><code>{`import PropTypes from 'prop-types';

export default ValidateEg extends Component{
    render(){
        return(
          <div>
            <h1>ReactJS Props validation example</h1>
            <table>
              <tr>
                <th>Type</th>
                <th>Value</th>
                <th>Valid</th>
              </tr>
              <tr>
                <td>Array</td>
                <td>{this.props.propArray}</td>
                <td>{this.props.propArray ? "true" : "false" }</td>
              </tr>
              <tr>
                <td>Boolean</td>
                <td>{this.props.propBool ? "true" : "false"}</td>
                <td>{this.props.propBool ? "true" : "false"}</td>
              </tr>
              <tr>
                <td>Function</td>
                <td>{this.props.propFunc(5)}</td>
                <td>{this.props.propFunc(5) ? "true" : "false" }</td>
              </tr>
              <tr>
                <td>String</td>
                <td>{this.props.propString}</td>
                <td>{this.props.propString ? “true” : “false” }</td>
              </tr>
              <tr>
                <td>Number</td>
                <td>{this.props.propNumber}</td>
                <td>{this.props.propNumber ? “true” : “false” }</td>
              </tr>
            </table>
          </div>
        );
    }   
}
ValidateEg.propTypes ={
    propArray : PropTypes.array.isRequired,
    propBool : PropTypes.bool.isRequired,
    propFunc : PropTypes.func,
    propNumber : PropTypes.number,
    propString : PropTypes.string,
}
ValidateEg.defaultProps = {
    propArray: [10,20,30,40],
    propBool: true,
    propFunc: function(x){return x+5},
    propNumber: 1,
    propString: "Dhoni"
}`}</code></pre>
              </div>
            </section>

            <section className="mb-5" id="data-binding">
              <h2 className="h2 mb-3"><i class="bi bi-activity"></i> Data Binding</h2>
              <ul>
                <li>Data Binding is the process of connecting the view element or user interface, with the data which populates it.</li>
                <li>In ReactJS, components are rendered to the user interface and the component's logic contains the data to be displayed in the view (UI).</li>
                <li>The connection between the data to be displayed in the view and the component's logic is called data binding in ReactJS.</li>
              </ul>
              <div className="property-card">
                <h4 className="mb-3"><i class="bi bi-arrow-right"></i> One-Way Data Binding</h4>
                <p>ReactJS uses one-way data binding. In one-way data binding one of the following conditions can be followed:</p>
                <ul>
                  <li>Component to View: Any change in component data would get reflected in the view.</li>
                  <li>View to Component: Any change in View would get reflected in the component's data.</li>
                </ul>
              </div>
              <div className="property-card">
                <h3 className="h3 mb-3"><i class="bi bi-activity"></i> Data Binding Example</h3>
                <pre><code>{`import React, { Component } from 'react'

export default class OneWayBinding extends Component {
    state={ 
      name: 'Mugil'
    }

    handleChange=(event)=>{
      this.setState({
        name:event.target.value
      })
    }
    
    render() {
      return (
        <div>
          <h1>One Way Binding</h1>
          <p>My name is {this.state.name}</p>
          Enter name : <input type="text" name='firstname' onChange={this.handleChange}/>
        </div>
      )
    }
}`}</code></pre>
              </div>
            </section>

            <section className="mb-5" id="parent-child">
              <h2 className="mb-3"><i class="bi bi-broadcast-pin"></i> Parent Child Communication</h2>
              <div className="property-card">
                <p>Following are the steps to pass data from child component to parent component:</p>
                <ul>
                  <li>In the parent component, create a callback function. This callback function will retrieve the data from the child component.</li>
                  <li>Pass the callback function to the child as props from the parent component.</li>
                  <li>The child component calls the parent callback function using props and passes the data to the parent component.</li>
                </ul>
              </div>
              <div className="property-card">
                <h2 className="mb-3"><i class="bi bi-broadcast-pin"></i> Parent Example</h2>
                <p>Create a component named as Parent.js</p>
                <pre><code>{`import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
    state={
      name:""
    }

    handleCallback=(childData)=>{
      this.setState({name:childData})
    }

    render() {
      return (
        <div>
          <Child parentCallback={this.handleCallback}/>
          Name: {this.state.name}
        </div>
      )
    }
}`}</code></pre>
              </div>
              <div className="property-card">
                <h2 className="mb-3"><i class="bi bi-broadcast-pin"></i> Child Example</h2>
                <p>Create a component named as Child.js</p>
                <pre><code>{`import React, { Component } from 'react'

export default class Child extends Component {

    onTrigger=(event)=>{
      this.props.parentCallback(event.target.myname.value);
      event.preventDefault();
    }

    render() {
      return (
        <div>
          <form action="" onSubmit={this.onTrigger}>
            <input type="text" name='myname' placeholder='Enter Name'/><br /><br />
            <input type="submit" value="Submit"/>
          </form>
        </div>
      )
    }
}`}</code></pre>
              </div>
            </section>

            <section className="mb-5" id="list">
              <h2 className="mb-3"><i class="bi bi-list"></i> List in React</h2>
              <div className="property-card">
                <ul>
                  <li>Lists are used to display data in an ordered format and mainly used to display menus on websites.</li>
                  <li>In React, Lists can be created in a similar way as we create lists in JavaScript.</li>
                  <li>Let us see how we transform Lists in regular JavaScript.</li>
                  <li>The map() function is used for traversing the lists. In the below example, the map() function takes an array of actors and show it in the lists.</li>
                </ul>
              </div>
              <div className="property-card">
                <h2 className="mb-3">List Example</h2>
                <pre><code>{`import React from 'react';

function List() {
    const actors =['Vijay','Ak','Sk','Dhanush','Surya'];
    const listItems = actors.map((actor)=>{
        return <li>{actor}</li>
    })

    return (
      <div>
        <h1>Actor List</h1>
        <ol>
          {listItems}
        </ol>
      </div>
    )
}

export default List;`}</code></pre>
              </div>

              <div className="property-card">
                <h2 className="mb-3">React Keys</h2>
                <ul>
                  <li>A key is a unique identifier.</li>
                  <li>In React, it is used to identify which items have changed, updated, or deleted from the Lists.</li>
                  <li>It is useful when we dynamically created components or when the users alter the lists.</li>
                  <li>It also helps to determine which components in a collection needs to be re-rendered instead of re-rendering the entire set of components every time.</li>
                  <li>Keys should be given inside the array to give the elements a stable identity.</li>
                  <li>The best way to pick a key as a string that uniquely identifies the items in the list. It can be understood with the below example.</li>
                </ul>

                <h2 className="mb-3">Key Example</h2>
                <pre><code>{`import React from 'react';

function List() {
    const actors =['Vijay','Ak','Sk','Dhanush','Surya'];
    const listItems = actors.map((actor,index)=>{
        return <li key={index}>{actor}</li>
    })

    return (
      <div>
        <h1>Actor List</h1>
        <ol>
          {listItems}
        </ol>
      </div>
    )
}

export default List;`}</code></pre>
              </div>
            </section>

            <section id="lifecycle" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> Component Lifecycle</h2>
              <ul>
                <li>In ReactJS, every component creation process involves various lifecycle methods. These lifecycle methods are termed as component lifecycle.</li>
                <li>The lifecycle of component is divided into four phases. They are:</li>
                <ol>
                  <li>Initial Phase</li>
                  <li>Mounting Phase</li>
                  <li>Updating Phase</li>
                  <li>Unmounting Phase</li>
                </ol>
              </ul>

              <div className="property-card">
                <h3 className="h4 mb-3"><i className="bi bi-skip-start"></i> Initial Phase</h3>
                <ul>
                  <li>It is the birth phase of the lifecycle of the ReactJS component. Here, the component starts its journey on a way to the DOM.</li>
                </ul>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-up-circle"></i> Mounting Phase</h3>
                <p>These methods are invoked when a component is being created and inserted into the DOM. It consists of the following methods.</p>
                <ul>
                  <li><code>constructor()</code> - Initializes state and binds methods</li>
                  <li><code>static getDerivedStateFromProps(props,state)</code> - Synchronize state with props before rendering.</li>
                  <li><code>render()</code> - Returns the JSX to render</li>
                  <li><code>componentDidMount()</code> - Runs after component is mounted to DOM and it is commonly used for API calls or DOM manipulation.</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-clockwise"></i> Updating Phase</h3>
                <p>These methods are invoked when a component is being re-rendered due to changes in props or state.It consists of the following methods:</p>
                <ul>
                  <li><code>shouldComponentUpdate()</code> - Determines if component should re-render</li>
                  <li><code>render()</code> - Re-renders the component</li>
                  <li><code>getSnapshotBeforeUpdate(props, state)</code> - Captures some information from the DOM before it is updated.</li>
                  <li><code>componentDidUpdate()</code> - Runs after component updates</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-down-circle"></i> Unmounting Phase</h3>
                <p>These methods are invoked when a component is being removed from the DOM.</p>
                <ul>
                  <li><code>componentWillUnmount()</code> - Cleanup before component is removed</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-square"></i> Lifecycle Example</h3>
                <pre><code>{`import React, { Component } from 'react';

export default class Lifecycle extends Component {
  constructor(){
    console.log("Construnctor is executed");
    super();
    this.state={
      name:'Muthu'
    }
  }
  static getDerivedStateFromProps(state,props){
    console.log("getDerivedStateFromProps is executed",state,props);
    return null;
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  shouldComponentUpdate() {
    console.log('Should component update?');
    return true;
  }
  handleChange=()=>{
    this.setState({name:'Priya'})
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  getSnapshotBeforeUpdate(state,props){
    console.log("getSnapshotBeforeUpdate is executed",state,props);
    return null;
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    console.log('Render is executed');
    return (
      <div>
        <h1> Lifecycle Methods</h1>
        <p>My name is {this.state.name} and I'm {this.props.age} years old.</p>
        <button className='btn btn-success' onClick={this.handleChange}>Change State</button>
      </div>
    );
  }
}

Lifecycle.defaultProps={
age:19
}`}</code></pre>
              </div>
            </section>

            <section id="hooks" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-hook"></i> React Hooks</h2>
              <ul>
                <li>Hooks are the new features introduced in React.</li>
                <li>It allows you to use state and other React features without writing a class.</li>
                <li>Hooks are the functions which “hook into” react state and lifecycle features from function components.</li>
                <li>It does not work inside the classes.</li>
              </ul>
              <h2 className="h2 mb-3"><i className="bi bi-hook"></i> Rules of Hooks</h2>
              <ul>
                <li>Hooks are similar to JavaScript functions, but you need to follow these two rules when using them.</li>
                <li>These rules are:</li>
                <ol>
                  <li>Only call Hooks at the top level (Do not call Hooks inside loops,conditions, or nested functions.).</li>
                  <li>Only call Hooks from React functions.</li>
                </ol>
              </ul>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-1-circle"></i> useState</h3>
                <ul>
                  <li>Hook state is the new way of declaring a state in react app.</li>
                  <li>Hook uses useState() functional component for setting and retrieving state.</li>
                </ul>
                <h4 className="mb-3">Example</h4>
                <pre><code>{`import React, { useState } from 'react';

function UseStateEg() {
    const [name,setName] = useState("Muthu");
    const [age, setAge] = useState(25);
    
    const handleChange=()=>{
      setName("Raj");
      setAge(30);
    }

    return (
      <div>
        <h1>UseStateEg</h1>
        <h2>My name is {name} and I'm {age} years old.</h2>
        <button onClick={handleChange}>Change Name</button>
      </div>
    )
}

export default UseStateEg;`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-2-circle"></i> useEffect</h3>
                <ul>
                  <li>The Effect Hook allows us to perform side effects in the function components.</li>
                  <li>It does not use components lifecycle methods which are available in class components.</li>
                  <li>In other words, Effects are equivalent to componentDidMount(), componentDidUpdate() and componentWillMount() lifecycle methods.</li>
                  <li>Side effects have common features which the most web applications need to perform, such as:</li>
                  <ol>
                    <li>Updating the DOM</li>
                    <li>Fetching and consuming data from a server API</li>
                  </ol>
                </ul>
                <h4 className="mb-3">Example</h4>
                <pre><code>{`import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-3-circle"></i> useContext</h3>
                <p>Allows you to access context in functional components.</p>
                <h4 className="mb-3">Context Example</h4>
                <pre><code>{`import React, { createContext } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const user = {
    name: 'Mugilvannan',
    email: 'mugil@example.com',
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use user context
export default UserContext;
`}</code></pre>
                <h4 className="mb-3">Use in Component</h4>
                <pre><code>{`import React, { useContext } from 'react';
import UserContext from './UserContext';

const ContextEg = () => {
  const { name, email } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {name}!</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default ContextEg;
`}</code></pre>
                <h4 className="mb-3">Use in App.jsx</h4>
                <pre><code>{`import { UserProvider } from './components/UserContext';
import ContextEg from './components/ContextEg';

<UserProvider>
    <ContextEg />
</UserProvider>`}</code></pre>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-4-circle"></i> Custom Hooks</h3>
                <ul>
                  <li>A custom hook is a JavaScript function. The name of custom hooks starts with “use” which can call other hooks.</li>
                  <li>Building custom Hooks allows you to extract component logic into reusable functions.</li>
                </ul>
                <h4 className="mb-3">Example</h4>
                <pre><code>{`import React, { useEffect, useState } from 'react';

const useDocumentTitle=title=>{
    useEffect(()=>{
      document.title = title;
    },[title])
}

function CustomHookEg() {
    const [count,setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
    useDocumentTitle(\`you clicked \${count} times\`);

    return (
      <div>
        <h1>Custom hooks example</h1>
        <p>You clicked {count} times.</p>
        <button onClick={incrementCount}>Click me</button>
      </div>
    )
}

export default CustomHookEg;`}</code></pre>
              </div>


            </section>

            <section id="routing" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-signpost-split"></i> React Router</h2>
              <ul>
                <li>Routing is a process in which a user is directed to different pages based on their action or request.</li>
                <li>ReactJS Router is mainly used for developing Single Page Web Applications.</li>
                <li>React Router is used to define multiple routes in the application.</li>
                <li>When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</li>
                <li>React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package.</li>
              </ul>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> Installation</h3>
                <pre><code>{`npm install react-router-dom`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-router"></i> Basic Routing</h3>
                <pre><code>{`import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right-square"></i> Adding Navigation using Link component</h3>
                <pre><code>{`import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bgsecondary">
      <div class="container-fluid">
        <Link to="/" className='text-decoration-none'><a class="navbar-brand" href="#">React Router App</a></Link>
        <button class="navbar-toggler" type="button" databs-toggle="collapse" data-bstarget="#navbarSupportedContent" ariacontrols="navbarSupportedContent" ariaexpanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto gap-lg-5 fs-5 mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" className='text-decorationnone'><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className='text-decorationnone'><a class="nav-link" href="#">About</a></Link>
            </li>
            <li class="nav-item">
              <Link to="/blog" className='text-decorationnone'><a class="nav-link" href="#">Blog</a></Link>
            </li>
            <li class="nav-item">
              <Link to="/service" className='text-decorationnone'><a class="nav-link" href="#">Service</a></Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" className='text-decorationnone'><a class="nav-link" href="#">Contact</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;`}</code></pre>
              </div>
            </section>

            <section id="forms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-input-cursor-text"></i> Forms in React</h2>
              <ul>
                <li>Forms are an integral part of any modern web application.</li>
                <li>It allows the users to interact with the application as well as gather information from the users.</li>
                <li>Forms can perform many tasks that depend on the nature of your business requirements and logic such as authentication of the user, adding user, searching, filtering, booking, ordering, etc.</li>
                <li>A form can contain text fields, buttons, checkbox, radio button, etc.</li>
              </ul>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-controller"></i> Controlled Components</h3>
                <p>Form elements whose value is controlled by React state.</p>
                <pre><code>{`function Form() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted: ' + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-controller"></i> Uncontrolled Components</h3>
                <p>Form elements that manage their own state internally.</p>
                <pre><code>{`function Form() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted: ' + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`}</code></pre>
              </div>
            </section>

            <section id="styling" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-brush"></i> Styling in React</h2>
              <ul>
                <li>CSS in React is used to style the React App or Component.</li>
                <li>The style attribute is the most used attribute for styling in React applications, which adds dynamically-computed styles at render time.</li>
                <li>It accepts a JavaScript object in camelCased properties rather than a CSS string.</li>
              </ul>
              <p>There are many ways available to add styling to your React App or Component with CSS. Here, we are going to discuss mainly four ways to style React Components, which are given below:</p>
              <ul>
                <li>Inline Styling</li>
                <li>Internal Styling</li>
                <li>CSS Stylesheet</li>
                <li>CSS Module</li>
              </ul>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-slash"></i> Inline Styles</h3>
                <pre><code>{`function StyledComponent() {
  return (
    <div style={{ 
      color: 'white', 
      backgroundColor: 'blue',
      padding: '10px'
    }}>
      Inline Styled Component
    </div>
  );
}`}</code></pre>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-slash"></i> Internal Styles</h3>
                <pre><code>{`function StyledComponent() {
  const styleEg = { 
      color: 'white', 
      backgroundColor: 'blue',
      padding: '10px'
  }
  return (
    <div style={styleEg}>
      Internal Styled Component
    </div>
  );
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-filetype-css"></i> CSS Stylesheets</h3>
                <pre><code>{`/* styles.css */
.my-style {
  color: white;
  background-color: blue;
  padding: 10px;
}

// Component.js
import './styles.css';

function StyledComponent() {
  return <div className="my-style">Styled Component</div>;
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-modem"></i> CSS Modules</h3>
                <pre><code>{`/* styles.module.css */
.container {
  color: white;
  background-color: blue;
  padding: 10px;
}

// Component.js
import styles from './styles.module.css';

function StyledComponent() {
  return <div className={styles.container}>Styled Component</div>;
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-bootstrap"></i> React Bootstrap</h3>
                <pre><code>{`npm install react-bootstrap bootstrap

// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  return <Button variant="primary">Bootstrap Button</Button>;
}`}</code></pre>
              </div>
            </section>

            <section id="axios" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-cloud-arrow-down"></i> Axios in React</h2>
              <ul>
                <li>In ReactJS, Axios is a library that serves to create HTTP requests that are present externally.</li>
                <li>It is evident from the fact that we may sometimes in React applications need to get data from the external source.</li>
                <li>It is quite difficult to fetch such data so that they can be normally shown on the website.</li>
                <li>Thus, it helps in retrieving the data thereby adding it to the state to facilitate the application whenever the requirement arises.</li>
                <li>Additionally, react Axios is very easy to modify and is quite lightweight.</li>
                <li>It also works great with many other frameworks present today.</li>
                <li>The main purpose of using Axios is to get support for request and response interception, conversion of data into JSON format, and transform it.</li>
                <li>It also helps you in protecting XSRF forgery (Cross-site request forgery) by default while you request cross-site access.</li>
                <li>Axios is promise-based, which gives you the ability to take advantage of JavaScript's async and await for more readable asynchronous code.</li>
              </ul>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-gear"></i> Installation</h3>
                <pre><code>{`npm install axios`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-download"></i> GET Request</h3>
                <pre><code>{`import axios from 'axios';
import React, { Component } from 'react';

export default class AxiosGetEg extends Component {
    state={
      persons:[]
    }

    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res=>{
        const personList = res.data;
        this.setState({persons:personList})
      })
      .catch((err)=>{
        console.log(err);  
      })
    }

    render() {
      return (
        <div>
          <h1>User name</h1>
          <ul>
          { 
            this.state.persons.map((person)=>{
              return <li key={person.id}>{person.name}------{person.phone}</li>
            })
          }
          </ul>
        </div>
      )
    }
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-upload"></i> POST Request</h3>
                <pre><code>{`import axios from 'axios';
import { useState } from 'react';

function AddUser() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', { name })
      .then(response => alert('User added!'))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Add User</button>
    </form>
  );
}`}</code></pre>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-trash"></i> DELETE Request</h3>
                <pre><code>{`function App() {
  const deleteUser = (id) => {
    axios.delete(\`https://api.example.com/users/\${id}\`)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  };

  return (
    <button onClick={() => deleteUser(1)}>
      Delete User
    </button>
  );
}`}</code></pre>
              </div>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-trash"></i> Axios GET and DELETE Request</h3>
                <pre><code>{`import axios from 'axios';
import React, { Component } from 'react';

export default class AxiosDeleteEg extends Component {
    state={
      posts:[]
    }

    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res=>{
        this.setState({posts:res.data})
      })  
    }

    deleteRow(id,e){
      axios.delete(\`https://jsonplaceholder.typicode.com/posts/\${id}\`)
      .then(res=>{
        console.log(res);
        console.log(res.data);
        const posts = this.state.posts.filter(item => item.id !==id);
          this.setState({posts:posts})
        })
        alert('Data deleted uccessfully')
    }

    render() {
      return (
        <div>
        <h1>Axios Delete Request</h1>
        <table className="table table-bordered table-secondary">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td><button className='btn btn-danger' onClick={(e)=>this.deleteRow(post.id,e)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}`}</code></pre>
              </div>
            </section>

            <section className="mb-5" id="conditional">
              <h2 className="mb-3"><i class="bi bi-shield-check"></i> Conditional Rendering</h2>
              <p>Conditional rendering in React allows components to render different UI elements or components based on certain conditions. This is one of the core features of React and is achieved using standard JavaScript syntax, such as if-else, ternary operators, logical operators, or even function calls.</p>

              <div className="property-card">
                <h4 className="mb-3"><i className="bi bi-1-circle"></i> Using if-else</h4>
                <p>You can use an if-else statement to render a component conditionally.</p>
                <pre><code>{`function App (){
    const isLoggedIn = true;
    if (isLoggedIn) {
      return <h1>Welcome back!</h1>;
    } else {  
      return <h1>Please log in.</h1>;
    }
}`}</code></pre>
              </div>
              <div className="property-card">
                <h4 className="mb-3"><i className="bi bi-2-circle"></i> Using Ternary Operator</h4>
                <p>The ternary operator is a concise way to conditionally render components.</p>
                <pre><code>{`function App (){
    const isLoggedIn = true;
    
    return(
      <div>
        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
      </div>
    )
}`}</code></pre>
              </div>
              <div className="property-card">
                <h4 className="mb-3"><i className="bi bi-3-circle"></i> Using Logical && Operator</h4>
                <p>If you want to render something only when a condition is true, use the logical && operator.</p>
                <pre><code>{`function App (){
    const isLoggedIn = true;
    
    return(
      <div>
        {isLoggedIn && <h1>Welcome back!</h1>}
      </div>
    )
}`}</code></pre>
              </div>
              <div className="property-card">
                <h4 className="mb-3"><i className="bi bi-4-circle"></i> Conditional Rendering with switch-case</h4>
                <p>For more complex conditions, you can use a switch statement.</p>
                <pre><code>{`function App (){
    const userRole = 'admin';
    
    switch (userRole) {
      case 'admin':
        return <h1>Admin Dashboard</h1>;
      case 'user':
        return <h1>User Dashboard</h1>;
      default:
        return <h1>Welcome to the App</h1>;
    }
}`}</code></pre>
              </div>
              <div className="property-card">
                <h4 className="mb-3"><i className="bi bi-5-circle"></i> Inline Function for Conditional Rendering</h4>
                <p>You can define a function that returns the desired component based on a condition..</p>
                <pre><code>{`function App (){
    const isLoggedIn = false;
    
    function renderMessage() {
      if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
      }
      return <h1>Please log in.</h1>;
    }
    return <div>{renderMessage()}</div>;
}`}</code></pre>
              </div>
            </section>

            <section className="mb-5" id="redux">
              <h2 className="mb-3">
                <i className="bi bi-diagram-3"></i> Redux in React (Step-by-Step)
              </h2>
              <p>
                Redux is a predictable state container used for managing application-level state. It helps maintain consistent
                behavior, especially in complex applications. Redux works on three principles: <strong>Single source of truth</strong>,
                <strong>State is read-only</strong>, and <strong>Changes are made with pure functions</strong>.
              </p>

              {/* Step 1 - Install Redux */}
              <div className="property-card">
                <h4 className="mb-3"><i className="bi bi-1-circle"></i> Step 1: Install Redux & React-Redux</h4>
                <p>Install both redux and react-redux libraries:</p>
                <pre><code>{`npm install redux react-redux`}</code></pre>
              </div>

              {/* Step 2 - Create Actions */}
              <div className="property-card">
                <h4 className="mb-3"><i className="bi bi-2-circle"></i> Step 2: Create Actions</h4>
                <p>Actions describe what should happen. Example: increment and decrement actions.</p>
                <pre><code>{`// actions.js
export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });`}</code></pre>
              </div>

              {/* Step 3 - Create Reducer */}
              <div className="property-card">
                <h4 className="mb-3"><i className="bi bi-3-circle"></i> Step 3: Create Reducer</h4>
                <p>Reducer handles the actions and updates the state.</p>
                <pre><code>{`// reducer.js
const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;`}</code></pre>
              </div>

              {/* Step 4 - Create Store */}
              <div className="property-card">
                <h4 className="mb-3"><i className="bi bi-4-circle"></i> Step 4: Create Redux Store</h4>
                <p>Store is the single source of truth that holds the global state.</p>
                <pre><code>{`// store.js
import { createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(counterReducer);
export default store;`}</code></pre>
              </div>

              {/* Step 5 - Wrap App with Provider */}
              <div className="property-card">
                <h4 className="mb-3"><i className="bi bi-5-circle"></i> Step 5: Provide Store to App</h4>
                <p>Use <code>Provider</code> from <code>react-redux</code> to give access to the Redux store throughout the React app.</p>
                <pre><code>{`// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);`}</code></pre>
              </div>

              {/* Step 6 - Use Redux in Component */}
              <div className="property-card">
                <h4 className="mb-3"><i className="bi bi-6-circle"></i> Step 6: Use useSelector and useDispatch</h4>
                <p>Access state with <code>useSelector</code> and update it with <code>useDispatch</code>.</p>
                <pre><code>{`// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>➕</button>
      <button onClick={() => dispatch(decrement())}>➖</button>
    </div>
  );
}

export default App;`}</code></pre>
              </div>

              {/* Step 7 - Final Structure */}
              <div className="property-card">
                <h4 className="mb-3"><i className="bi bi-7-circle"></i> Step 7: Final Project Structure</h4>
                <p>Organize files like this for a clean structure:</p>
                <pre><code>{`
/src
├── actions.js
├── reducer.js
├── store.js
├── App.js
└── index.js
`}</code></pre>
              </div>
            </section>



          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>React Notes &copy; 2025 | Created by Mugilvannan P.</p>
        </div>
      </footer>
    </div>
  );
}

export default ReactNotes;