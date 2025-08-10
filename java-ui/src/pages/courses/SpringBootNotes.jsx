import React from 'react';

function SpringBootNotes() {
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
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1rem;
          }
          .comparison-table th, .comparison-table td {
            border: 1px solid #dee2e6;
            padding: 0.75rem;
            text-align: left;
          }
          .comparison-table th {
            background-color: #e9ecef;
          }
        `}
      </style>

      <header className="bg-primary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-spring"></i> Spring Boot Notes</h1>
          <p className="lead">Your Comprehensive Guide to Spring Boot Framework</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> What is Spring Boot?</a>
              <a className="nav-link" href="#goals"><i className="bi bi-bullseye"></i> Goals of Spring Boot</a>
              <a className="nav-link" href="#features"><i className="bi bi-star"></i> Features</a>
              <a className="nav-link" href="#architecture"><i className="bi bi-diagram-3"></i> Architecture</a>
              <a className="nav-link" href="#vs-spring"><i className="bi bi-arrow-left-right"></i> Spring vs Spring Boot</a>
              <a className="nav-link" href="#ioc"><i className="bi bi-arrow-repeat"></i> IoC & Dependency Injection</a>
              <a className="nav-link" href="#beans"><i className="bi bi-box"></i> Beans</a>
              <a className="nav-link" href="#projects"><i className="bi bi-collection"></i> Spring Sister Projects</a>
              <a className="nav-link" href="#thymeleaf"><i className="bi bi-filetype-html"></i> Thymeleaf</a>
              <a className="nav-link" href="#validation"><i className="bi bi-check-circle"></i> Validation</a>
              <a className="nav-link" href="#rest"><i className="bi bi-globe"></i> REST API</a>
              <a className="nav-link" href="#jpa"><i className="bi bi-database"></i> Spring Data JPA</a>
              <a className="nav-link" href="#crud"><i className="bi bi-list-check"></i> CRUD Operations</a>
              <a className="nav-link" href="#mvc"><i className="bi bi-layers"></i> MVC Architecture</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> What is Spring Boot?</h2>
              <div className="property-card">
                <ul>
                  <li><strong>Spring Boot</strong> is a project that is built on the top of the Spring Framework.</li>
                  <li>It provides an easier and faster way to set up, configure, and run both simple and web-based applications.</li>
                  <li>It is a Spring module that provides the RAD (Rapid Application Development) feature to the Spring Framework.</li>
                  <li>It is used to create a stand-alone Spring-based application that you can just run because it needs minimal Spring configuration.</li>
                </ul>
                <div className="mt-3">
                  <h4 className="h5">Key Components:</h4>
                  <ul>
                    <li>Spring Framework</li>
                    <li>Embedded HTTP Servers (Tomcat, Jetty)</li>
                    <li>XML &lt;bean&gt; Configuration or @Configuration</li>
                  </ul>
                </div>
                <blockquote className="blockquote mt-3 bg-light p-3 border-start border-primary border-3">
                  <p>In short, Spring Boot is the combination of Spring Framework and Embedded Servers.</p>
                  <p>In Spring Boot, there is no requirement for XML configuration (deployment descriptor).</p>
                  <p>It uses convention over configuration software design paradigm that means it decreases the effort of the developer.</p>
                  <p>We can use <strong>Spring STS IDE</strong> or <strong>Spring Initializr</strong> to develop Spring Boot Java applications.</p>
                </blockquote>
              </div>
            </section>

            <section id="goals" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-bullseye"></i> Goals of Spring Boot</h2>
              <div className="property-card">
                <p>The main goal of Spring Boot is to reduce development, unit test, and integration test time.</p>
                <ul>
                  <li>✓ Provides Opinionated Development approach</li>
                  <li>✓ Avoids defining more Annotation Configuration</li>
                  <li>✓ Avoids writing lots of import statements</li>
                  <li>✓ Avoids XML Configuration</li>
                </ul>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4"><i className="bi bi-list-check"></i> Prerequisite of Spring Boot</h3>
                <p>To create a Spring Boot application, following are the prerequisites:</p>
                <ul>
                  <li>Java 1.8</li>
                  <li>Maven 3.0+</li>
                  <li>Spring Framework 5.0.0.BUILD-SNAPSHOT</li>
                  <li>An IDE (Spring Tool Suite) is recommended</li>
                </ul>
              </div>
            </section>

            <section id="features" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-star"></i> Spring Boot Features</h2>
              <div className="property-card">
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li><input type="checkbox" checked readOnly /> SpringApplication</li>
                      <li><input type="checkbox" checked readOnly /> Application events and listeners</li>
                      <li><input type="checkbox" checked readOnly /> Admin features</li>
                      <li><input type="checkbox" checked readOnly /> Externalized Configuration</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li><input type="checkbox" checked readOnly /> Properties Files</li>
                      <li><input type="checkbox" checked readOnly /> YAML Support</li>
                      <li><input type="checkbox" checked readOnly /> Type-safe Configuration</li>
                      <li><input type="checkbox" checked readOnly /> Logging</li>
                      <li><input type="checkbox" checked readOnly /> Security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="first-program" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> First Spring Boot Program</h2>
              <div className="property-card">
                <h3 className="h4">Step 1: Create a Spring Boot Project</h3>
                <p>Use Spring Initializr (https://start.spring.io/) or Spring STS IDE to create a new Spring Boot project.</p>
              </div>

              <div className="property-card mt-3">
                <h3 className="h4">Step 2: Main Application Class</h3>
                <pre><code>{`import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}`}</code></pre>
                <p>The <code>@SpringBootApplication</code> annotation is a combination of:</p>
                <ul>
                  <li><code>@Configuration</code></li>
                  <li><code>@EnableAutoConfiguration</code></li>
                  <li><code>@ComponentScan</code></li>
                </ul>
              </div>
            </section>

            <section id="architecture" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> Spring Boot Architecture</h2>
              <div className="property-card">
                <p>Spring Boot follows a layered architecture in which each layer communicates with the layer directly below or above (hierarchical structure) it.</p>
                <p>There are <strong>four</strong> layers in Spring Boot:</p>
                <ol>
                  <li><strong>Presentation Layer</strong> - Handles HTTP requests, translates JSON to objects, authentication</li>
                  <li><strong>Business Layer</strong> - Contains business logic, validation, authorization</li>
                  <li><strong>Persistence Layer</strong> - Contains storage logic, translates business objects to/from database rows</li>
                  <li><strong>Database Layer</strong> - Performs CRUD operations</li>
                </ol>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Spring Boot Flow Architecture</h3>
                <ul>
                  <li>The client makes HTTP requests (PUT or GET)</li>
                  <li>The request goes to the controller, which maps and handles it</li>
                  <li>The controller calls service logic if required</li>
                  <li>Service layer performs business logic on data mapped to JPA with model classes</li>
                  <li>A view (JSP page) is returned to the user if no error occurred</li>
                </ul>
              </div>
            </section>

            <section id="vs-spring" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-left-right"></i> Spring vs Spring Boot</h2>
              <div className="property-card">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Spring Framework</th>
                      <th>Spring Boot</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Most popular application development framework of Java</td>
                      <td>Module of Spring Framework</td>
                    </tr>
                    <tr>
                      <td>Main feature is dependency Injection or Inversion of Control (IoC)</td>
                      <td>Allows building stand-alone applications with minimal configurations</td>
                    </tr>
                    <tr>
                      <td>Helps develop loosely coupled applications</td>
                      <td>Better for developing simple Spring-based applications or RESTful services</td>
                    </tr>
                    <tr>
                      <td>Developer writes lots of boilerplate code</td>
                      <td>Reduces boilerplate code</td>
                    </tr>
                    <tr>
                      <td>Need to set up server explicitly for testing</td>
                      <td>Offers embedded server like Jetty and Tomcat</td>
                    </tr>
                    <tr>
                      <td>No support for in-memory database</td>
                      <td>Offers plugins for embedded and in-memory databases like H2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Spring Boot vs. Spring MVC</h3>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Spring Boot</th>
                      <th>Spring MVC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Module of Spring for packaging applications with sensible defaults</td>
                      <td>Model view controller-based web framework under Spring</td>
                    </tr>
                    <tr>
                      <td>Provides default configurations</td>
                      <td>Provides ready-to-use features for web applications</td>
                    </tr>
                    <tr>
                      <td>No need for manual configuration</td>
                      <td>Requires manual build configuration</td>
                    </tr>
                    <tr>
                      <td>No deployment descriptor required</td>
                      <td>Deployment descriptor is required</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="ioc" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> Inversion of Control (IoC) and Dependency Injection</h2>
              <div className="property-card">
                <h3 className="h4">What is the IoC Container?</h3>
                <p>The <strong>Inversion of Control (IoC) container</strong> in Spring is responsible for:</p>
                <ul>
                  <li>Managing the lifecycle and configuration of application objects</li>
                  <li>Creating and injecting the dependencies at runtime automatically</li>
                </ul>
              </div>

              <div className="property-card mt-3">
                <h3 className="h4">What is Dependency Injection?</h3>
                <p><strong>Dependency Injection (DI)</strong> is a design pattern used to implement IoC.</p>
                <p>In Spring:</p>
                <ul>
                  <li>Objects are given (injected) their dependencies by the Spring container</li>
                  <li>It promotes <strong>loose coupling</strong> between components</li>
                </ul>

                <h4 className="h5 mt-3">Types of DI in Spring:</h4>
                <ol>
                  <li><strong>Constructor Injection</strong> - Dependencies are provided via the constructor</li>
                  <li><strong>Setter Injection</strong> - Dependencies are provided via setter methods</li>
                </ol>

                <h4 className="h5 mt-3">Benefits of DI:</h4>
                <ul>
                  <li>Promotes loose coupling</li>
                  <li>Improves code reusability and testability</li>
                  <li>Reduces boilerplate code</li>
                  <li>Makes application easier to maintain and extend</li>
                </ul>
              </div>
            </section>

            <section id="beans" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-box"></i> Beans in Spring</h2>
              <div className="property-card">
                <p>In Spring, a bean is an object that is:</p>
                <ul>
                  <li>Instantiated</li>
                  <li>Assembled</li>
                  <li>Managed by the <strong>Spring IoC container</strong> (Inversion of Control container)</li>
                </ul>
                <p>Beans form the backbone of a Spring application and are defined either through:</p>
                <ul>
                  <li><strong>Annotations</strong> (most common in Spring Boot)</li>
                  <li><strong>XML</strong> configuration</li>
                  <li><strong>Java configuration</strong> classes</li>
                </ul>
              </div>
            </section>

            <section id="pizza-example" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-egg-fried"></i> Practical Example – Pizza Ordering System</h2>
              <div className="property-card">
                <h3 className="h4">Folder Structure:</h3>
                <pre><code>{`src/
└── main/
    └── java/
        └── com/example/spring_exercise/
            ├── Pizza.java
            ├── PizzaShop.java
            └── PizzaController.java`}</code></pre>

                <h3 className="h4 mt-3">Pizza.java – A Simple Bean</h3>
                <pre><code>{`package com.example.spring_exercise;

import org.springframework.stereotype.Component;

@Component // This makes the class a Spring-managed bean
public class Pizza {
    private String name = "Margherita";
    private double price = 8.99;

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }
}`}</code></pre>

                <h3 className="h4 mt-3">PizzaShop.java – Using Constructor Injection</h3>
                <pre><code>{`package com.example.spring_exercise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PizzaShop {
    private final Pizza pizza;

    // Constructor Injection
    @Autowired
    public PizzaShop(Pizza pizza) {
        this.pizza = pizza;
    }

    public String deliverPizza() {
        return "Your " + pizza.getName() + " pizza will be delivered shortly. Price: $" + pizza.getPrice();
    }
}`}</code></pre>

                <h3 className="h4 mt-3">PizzaController.java – REST API Layer</h3>
                <pre><code>{`package com.example.spring_exercise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // Combines @Controller + @ResponseBody
public class PizzaController {
    private final PizzaShop pizzaShop;

    @Autowired
    public PizzaController(PizzaShop pizzaShop) {
        this.pizzaShop = pizzaShop;
    }

    @GetMapping("/order")
    public String orderPizza() {
        return pizzaShop.deliverPizza();
    }
}`}</code></pre>

                <h3 className="h4 mt-3">Output Example</h3>
                <p>When you access: <code>http://localhost:8080/order</code></p>
                <p>You'll get a response like:</p>
                <pre><code>Your Margherita pizza will be delivered shortly. Price: $8.99</code></pre>
              </div>
            </section>

            <section id="projects" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-collection"></i> Spring Sister Projects</h2>
              <div className="property-card">
                <p>Along with the Spring Boot Framework, many other Spring sister projects help to build applications addressing modern business needs:</p>
                <ol>
                  <li><strong>Spring Data:</strong> Simplifies data access from relational and NoSQL databases</li>
                  <li><strong>Spring Batch:</strong> Provides powerful batch processing</li>
                  <li><strong>Spring Security:</strong> Security framework that provides robust security to applications</li>
                  <li><strong>Spring Social:</strong> Supports integration with social networking like LinkedIn</li>
                  <li><strong>Spring Integration:</strong> Implementation of Enterprise Integration Patterns, facilitates integration with other enterprise applications</li>
                </ol>
              </div>
            </section>

            <section id="thymeleaf" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-filetype-html"></i> Spring Boot Thymeleaf</h2>
              <div className="property-card">
                <p><strong>Thymeleaf</strong> is a modern server-side Java template engine for both web and standalone environments.</p>
                <p>Key features:</p>
                <ul>
                  <li>Works on both web and non-web environments</li>
                  <li>Java template engine for HTML5/XML/XHTML</li>
                  <li>High-performance parsed template cache reduces I/O</li>
                  <li>Supports several template modes: XML, XHTML, and HTML5</li>
                  <li>Allows developers to extend and create custom dialect</li>
                  <li>Supports internationalization</li>
                </ul>
              </div>

              <div className="property-card mt-3">
                <h3 className="h4">Thymeleaf Example</h3>
                <h4 className="h5 mt-2">Step 1: Create Project with Dependencies</h4>
                <p>Use Spring Initializr (http://start.spring.io) with:</p>
                <ul>
                  <li>Spring Web</li>
                  <li>Thymeleaf</li>
                </ul>

                <h4 className="h5 mt-2">Step 2: Model Class (User.java)</h4>
                <pre><code>{`public class User {
    String name;
    String email;
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}`}</code></pre>

                <h4 className="h5 mt-2">Step 3: Controller (DemoController.java)</h4>
                <pre><code>{`package com.example;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.stereotype.Controller;

@Controller
public class DemoController {
    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping(value="/save", method=RequestMethod.POST)
    public ModelAndView save(@ModelAttribute User user) {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("user-data");
        modelAndView.addObject("user", user);
        return modelAndView;
    }
}`}</code></pre>

                <h4 className="h5 mt-2">Step 4: Thymeleaf Templates</h4>
                <p><strong>index.html</strong> (in src/main/resources/templates):</p>
                <pre><code>{`<html lang="en">
<head>
    <title>Index Page</title>
</head>
<body>
    <form action="save" method="post">
        <table>
            <tr>
                <td><label for="username">User Name</label></td>
                <td><input type="text" name="name"></td>
            </tr>
            <tr>
                <td><label for="email">Email</label></td>
                <td><input type="text" name="email"></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" value="Submit"></td>
            </tr>
        </table>
    </form>
</body>
</html>`}</code></pre>

                <p><strong>user-data.html</strong> (in src/main/resources/templates):</p>
                <pre><code>{`<html xmlns:th="https://thymeleaf.org">
<table>
    <tr>
        <td><h4>User Name: </h4></td>
        <td><h4 th:text="\${user.name}"></h4></td>
    </tr>
    <tr>
        <td><h4>Email ID: </h4></td>
        <td><h4 th:text="\${user.email}"></h4></td>
    </tr>
</table>
</html>`}</code></pre>

                <h4 className="h5 mt-2">Step 5: application.properties</h4>
                <pre><code>{`spring.thymeleaf.cache=false
spring.thymeleaf.suffix: .html`}</code></pre>
              </div>
            </section>

            <section id="validation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-check-circle"></i> Spring Boot Validation</h2>
              <div className="property-card">
                <h3 className="h4">Hibernate Validator</h3>
                <p>Hibernate Validator is the reference implementation of <strong>Bean Validation</strong>. It helps enforce constraints on model properties using annotations.</p>

                <h4 className="h5 mt-3">Common Validation Annotations:</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Annotation</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>@NotNull</code></td>
                      <td>Field must not be null (can be empty like "" or size 0 for collections)</td>
                    </tr>
                    <tr>
                      <td><code>@NotEmpty</code></td>
                      <td>Field must not be null or empty</td>
                    </tr>
                    <tr>
                      <td><code>@NotBlank</code></td>
                      <td>Field must not be null, empty, or contain only whitespace</td>
                    </tr>
                    <tr>
                      <td><code>@Size</code></td>
                      <td>Used to validate length (for String, array, collections)</td>
                    </tr>
                    <tr>
                      <td><code>@Min</code></td>
                      <td>Minimum value constraint for numbers</td>
                    </tr>
                    <tr>
                      <td><code>@Max</code></td>
                      <td>Maximum value constraint for numbers</td>
                    </tr>
                    <tr>
                      <td><code>@Email</code></td>
                      <td>Validates that a field contains a proper email address</td>
                    </tr>
                    <tr>
                      <td><code>@Pattern</code></td>
                      <td>Validates against a custom regular expression</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card mt-3">
                <h3 className="h4">Example: Employee Validation</h3>
                <h4 className="h5 mt-2">Project Structure:</h4>
                <pre><code>{`src/
└── main/
    ├── java/
    │   ├── com.example.validation/
    │   │   ├── ValidationApplication.java
    │   │   ├── Employee.java
    │   │   ├── EmployeeController.java
    │   │   └── CustomExceptionHandler.java
    └── resources/`}</code></pre>

                <h4 className="h5 mt-2">Employee.java (Model with Validation)</h4>
                <pre><code>{`package com.example.validation;

import javax.validation.constraints.*;

public class Employee {
    @NotBlank(message = "Employee name cannot be blank")
    @Size(min = 5, max = 12, message = "Name must be between 5 and 12 characters")
    private String name;

    @NotNull(message = "Salary is required")
    @Min(value = 1000, message = "Salary must be at least 1000")
    @Max(value = 40000, message = "Salary must not exceed 40000")
    private Double salary;

    @NotNull(message = "Email is required")
    @Email(message = "Invalid email format", regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$")
    private String email;

    @NotBlank(message = "Qualification is required")
    private String qualification;

    // Getters and Setters
}`}</code></pre>

                <h4 className="h5 mt-2">EmployeeController.java</h4>
                <pre><code>{`package com.example.validation;

import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmployeeController {
    @PostMapping("/employees")
    public ResponseEntity<Employee> saveEmployee(@Valid @RequestBody Employee employee) {
        return new ResponseEntity(employee, HttpStatus.CREATED);
    }
}`}</code></pre>

                <h4 className="h5 mt-2">CustomExceptionHandler.java</h4>
                <pre><code>{`package com.example.validation;

import java.util.*;
import org.springframework.http.*;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {
    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
        MethodArgumentNotValidException ex,
        HttpHeaders headers,
        HttpStatus status,
        WebRequest request) {
        
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("timestamp", new Date());
        body.put("status", status.value());
        
        List<String> errors = ex.getBindingResult()
            .getFieldErrors()
            .stream()
            .map(error -> error.getDefaultMessage())
            .collect(Collectors.toList());
        
        body.put("errors", errors);
        return new ResponseEntity<>(body, headers, status);
    }
}`}</code></pre>

                <h4 className="h5 mt-2">Example API Responses</h4>
                <p><strong>Valid Request:</strong></p>
                <pre><code>{`POST /employees
Request Body:
{
    "name": "Robert",
    "salary": 20000,
    "email": "robert@example.com",
    "qualification": "MCA"
}

Response (201 Created):
{
    "name": "Robert",
    "salary": 20000,
    "email": "robert@example.com",
    "qualification": "MCA"
}`}</code></pre>

                <p><strong>Invalid Request:</strong></p>
                <pre><code>{`{
    "timestamp": "2025-06-10T12:00:00.000+00:00",
    "status": 400,
    "errors": [
        "Name must be between 5 and 12 characters",
        "Invalid email format"
    ]
}`}</code></pre>
              </div>
            </section>

            <section id="rest" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-globe"></i> REST API with Spring Boot</h2>
              <div className="property-card">
                <h3 className="h4">What is REST?</h3>
                <p><strong>REST</strong> stands for <strong>Representational State Transfer</strong>. It is an architectural style used for designing web services that are simple, scalable, and stateless.</p>
                <p>REST uses standard HTTP methods to perform operations on resources, which are typically represented as JSON or XML over the web.</p>

                <h4 className="h5 mt-3">Key Concepts of REST</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Concept</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Resource</strong></td>
                      <td>A data object (e.g., user, product, order) represented via a URL</td>
                    </tr>
                    <tr>
                      <td><strong>Stateless</strong></td>
                      <td>Each request from a client contains all the info needed – no session data</td>
                    </tr>
                    <tr>
                      <td><strong>Client-Server</strong></td>
                      <td>Separation of frontend (client) and backend (server) responsibilities</td>
                    </tr>
                    <tr>
                      <td><strong>Cacheable</strong></td>
                      <td>Responses can be cached to improve performance</td>
                    </tr>
                    <tr>
                      <td><strong>Uniform Interface</strong></td>
                      <td>Standardized way of interacting with the system (HTTP methods, URIs)</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Common REST Methods (HTTP Verbs)</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>HTTP Method</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>GET</code></td>
                      <td>Fetch a resource or list of resources</td>
                      <td><code>GET /students</code></td>
                    </tr>
                    <tr>
                      <td><code>POST</code></td>
                      <td>Create a new resource</td>
                      <td><code>POST /students</code></td>
                    </tr>
                    <tr>
                      <td><code>PUT</code></td>
                      <td>Update an existing resource (full update)</td>
                      <td><code>PUT /students/5</code></td>
                    </tr>
                    <tr>
                      <td><code>PATCH</code></td>
                      <td>Partially update a resource</td>
                      <td><code>PATCH /students/5</code></td>
                    </tr>
                    <tr>
                      <td><code>DELETE</code></td>
                      <td>Delete a resource</td>
                      <td><code>DELETE /students/5</code></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="h5 mt-3">Example REST Endpoints</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Endpoint</th>
                      <th>HTTP Method</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>/api/students</code></td>
                      <td><code>GET</code></td>
                      <td>Get all students</td>
                    </tr>
                    <tr>
                      <td><code>/api/students/1</code></td>
                      <td><code>GET</code></td>
                      <td>Get student with ID 1</td>
                    </tr>
                    <tr>
                      <td><code>/api/students</code></td>
                      <td><code>POST</code></td>
                      <td>Create new student</td>
                    </tr>
                    <tr>
                      <td><code>/api/students/1</code></td>
                      <td><code>PUT</code></td>
                      <td>Update student with ID 1</td>
                    </tr>
                    <tr>
                      <td><code>/api/students/1</code></td>
                      <td><code>DELETE</code></td>
                      <td>Delete student with ID 1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="jpa" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> Spring Data JPA</h2>
              <div className="property-card">
                <p><strong>Spring Data JPA</strong> makes it easy to implement JPA-based repositories. It significantly reduces boilerplate code by allowing developers to focus on entity design and repository interfaces.</p>

                <h3 className="h4">What is JPA?</h3>
                <p><strong>Java Persistence API (JPA)</strong> is a specification for object-relational mapping in Java. Spring Boot uses <strong>Hibernate</strong> as the default implementation of JPA.</p>

                <h4 className="h5 mt-3">Key JPA Annotations</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Annotation</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>@Entity</code></td>
                      <td>Marks the class as a JPA entity (mapped to a table)</td>
                    </tr>
                    <tr>
                      <td><code>@Table</code></td>
                      <td>Defines the table name and constraints like uniqueConstraints</td>
                    </tr>
                    <tr>
                      <td><code>@Id</code></td>
                      <td>Specifies the primary key field</td>
                    </tr>
                    <tr>
                      <td><code>@GeneratedValue</code></td>
                      <td>Configures how the primary key is generated</td>
                    </tr>
                    <tr>
                      <td><code>@Column</code></td>
                      <td>Specifies column properties like name, nullable, unique</td>
                    </tr>
                    <tr>
                      <td><code>@SequenceGenerator</code></td>
                      <td>Defines a sequence generator (commonly used with Oracle, PostgreSQL)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card mt-3">
                <h3 className="h4">Example: Student Entity with Repository</h3>
                <h4 className="h5 mt-2">Student.java (Entity)</h4>
                <pre><code>{`package com.example.spring_jpa.model;

import jakarta.persistence.*;

@Entity(name = "Student")
@Table(
    name = "student",
    uniqueConstraints = {
        @UniqueConstraint(name = "student_email_unique", columnNames = "email")
    }
)
public class Student {
    @Id
    @SequenceGenerator(
        name = "student_sequence",
        sequenceName = "student_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "student_sequence"
    )
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "firstname", nullable = false, columnDefinition = "TEXT")
    private String firstname;

    @Column(name = "lastname", nullable = false, columnDefinition = "TEXT")
    private String lastname;

    @Column(name = "email", nullable = false, columnDefinition = "TEXT", unique = true)
    private String email;

    @Column(name = "age", nullable = false)
    private Integer age;

    // Constructors, Getters, and Setters
}`}</code></pre>

                <h4 className="h5 mt-2">StudentRepository.java</h4>
                <pre><code>{`package com.example.spring_jpa.repository;

import com.example.spring_jpa.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}`}</code></pre>

                <h4 className="h5 mt-2">application.yml (Database Config)</h4>
                <pre><code>{`spring:
  datasource:
    url: jdbc:mysql://localhost:3306/db_name
    username: root
    password: root
    driver-class-name: com.mysql.cj.jdbc.Driver
  jpa:
    hibernate:
      ddl-auto: update
      database-platform: org.hibernate.dialect.MySQLDialect
    show-sql: true
application:
  name: spring-jpa`}</code></pre>

                <h4 className="h5 mt-2">Advantages of Spring Data JPA</h4>
                <ul>
                  <li>Reduces boilerplate code for CRUD operations</li>
                  <li>Automatically implements repository methods (e.g., findAll, save)</li>
                  <li>Allows custom query methods using method names (e.g., findByEmail)</li>
                  <li>Easily integrates with Spring Boot and Hibernate</li>
                </ul>
              </div>
            </section>

            <section id="crud" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-list-check"></i> CRUD Operations</h2>
              <div className="property-card">
                <h3 className="h4">What is CRUD?</h3>
                <p><strong>CRUD</strong> stands for:</p>
                <ul>
                  <li><strong>Create</strong> – add new records</li>
                  <li><strong>Read</strong> – retrieve existing records</li>
                  <li><strong>Update</strong> – modify existing records</li>
                  <li><strong>Delete</strong> – remove records</li>
                </ul>

                <h4 className="h5 mt-3">CRUD & RESTful Mapping</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Operation</th>
                      <th>SQL</th>
                      <th>HTTP Verb</th>
                      <th>REST Mapping</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Create</td>
                      <td>INSERT</td>
                      <td>POST</td>
                      <td>/books</td>
                    </tr>
                    <tr>
                      <td>Read</td>
                      <td>SELECT</td>
                      <td>GET</td>
                      <td>/books, /book/{`id`}</td>
                    </tr>
                    <tr>
                      <td>Update</td>
                      <td>UPDATE</td>
                      <td>PUT</td>
                      <td>/books</td>
                    </tr>
                    <tr>
                      <td>Delete</td>
                      <td>DELETE</td>
                      <td>DELETE</td>
                      <td>/book/{`id`}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card mt-3">
                <h3 className="h4">Example: Book CRUD Operations</h3>
                <h4 className="h5 mt-2">Project Structure</h4>
                <pre><code>{`src/
└── main/
    ├── java/
    │   ├── com.example.crud/
    │   │   ├── controller/
    │   │   │   └── BooksController.java
    │   │   ├── model/
    │   │   │   └── Books.java
    │   │   ├── repository/
    │   │   │   └── BooksRepository.java
    │   │   ├── service/
    │   │   │   └── BooksService.java
    │   │   └── SpringBootCrudApplication.java
    └── resources/
        └── application.properties`}</code></pre>

                <h4 className="h5 mt-2">Books.java (Model)</h4>
                <pre><code>{`package com.example.crud.model;

import jakarta.persistence.*;

@Entity
@Table(name = "books")
public class Books {
    @Id
    @Column
    private int bookid;

    @Column(nullable = false)
    private String bookname;

    @Column(nullable = false)
    private String author;

    @Column
    private int price;

    // Getters and Setters
}`}</code></pre>

                <h4 className="h5 mt-2">BooksRepository.java</h4>
                <pre><code>{`package com.example.crud.repository;

import com.example.crud.model.Books;
import org.springframework.data.repository.CrudRepository;

public interface BooksRepository extends CrudRepository<Books, Integer> {
}`}</code></pre>

                <h4 className="h5 mt-2">BooksService.java</h4>
                <pre><code>{`package com.example.crud.service;

import com.example.crud.model.Books;
import com.example.crud.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class BooksService {
    @Autowired
    private BooksRepository booksRepository;

    public List<Books> getAllBooks() {
        List<Books> booksList = new ArrayList<>();
        booksRepository.findAll().forEach(booksList::add);
        return booksList;
    }

    public Books getBooksById(int id) {
        return booksRepository.findById(id).orElse(null);
    }

    public void saveOrUpdate(Books books) {
        booksRepository.save(books);
    }

    public void delete(int id) {
        booksRepository.deleteById(id);
    }
}`}</code></pre>

                <h4 className="h5 mt-2">BooksController.java</h4>
                <pre><code>{`package com.example.crud.controller;

import com.example.crud.model.Books;
import com.example.crud.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class BooksController {
    @Autowired
    private BooksService booksService;

    @GetMapping("/books")
    public List<Books> getAllBooks() {
        return booksService.getAllBooks();
    }

    @GetMapping("/book/{bookid}")
    public Books getBookById(@PathVariable int bookid) {
        return booksService.getBooksById(bookid);
    }

    @PostMapping("/books")
    public int saveBook(@RequestBody Books books) {
        booksService.saveOrUpdate(books);
        return books.getBookid();
    }

    @PutMapping("/books")
    public Books updateBook(@RequestBody Books books) {
        booksService.saveOrUpdate(books);
        return books;
    }

    @DeleteMapping("/book/{bookid}")
    public void deleteBook(@PathVariable int bookid) {
        booksService.delete(bookid);
    }
}`}</code></pre>

                <h4 className="h5 mt-2">application.properties</h4>
                <pre><code>{`spring.datasource.url=jdbc:h2:mem:booksdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console`}</code></pre>

                <h4 className="h5 mt-2">Sample API Requests</h4>
                <p><strong>POST /books</strong></p>
                <pre><code>{`{
    "bookid": 1001,
    "bookname": "Spring Boot in Action",
    "author": "Craig Walls",
    "price": 799
}`}</code></pre>

                <p><strong>PUT /books</strong></p>
                <pre><code>{`{
    "bookid": 1001,
    "bookname": "Spring Boot Updated",
    "author": "Craig Walls",
    "price": 699
}`}</code></pre>
              </div>
            </section>

            <section id="mvc" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-layers"></i> MVC Architecture in Spring Boot</h2>
              <div className="property-card">
                <h3 className="h4">What is MVC?</h3>
                <p><strong>MVC (Model-View-Controller)</strong> is a design pattern that separates an application into three main logical components:</p>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-box"></i> Model</h5>
                        <ul>
                          <li>Represents the data and business logic</li>
                          <li>Contains the state of the application</li>
                          <li>Notifies view of changes</li>
                          <li>Typically uses POJOs/Entities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-eye"></i> View</h5>
                        <ul>
                          <li>Presents the data to the user</li>
                          <li>Renders the model data</li>
                          <li>Generates HTML output</li>
                          <li>Uses templates (Thymeleaf, JSP)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-controller"></i> Controller</h5>
                        <ul>
                          <li>Handles user requests</li>
                          <li>Processes input (forms, URL params)</li>
                          <li>Updates the model</li>
                          <li>Returns the appropriate view</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="h5 mt-4">Spring MVC Flow</h4>
                <ol>
                  <li>Client sends HTTP request to the server</li>
                  <li>DispatcherServlet receives the request</li>
                  <li>HandlerMapping finds the appropriate controller</li>
                  <li>Controller processes the request and returns ModelAndView</li>
                  <li>ViewResolver resolves the view name to a specific view</li>
                  <li>View renders the response and sends it back to the client</li>
                </ol>
              </div>

              <div className="property-card mt-4">
                <h3 className="h4">Complete MVC Example</h3>
                <h4 className="h5 mt-2">Project Structure</h4>
                <pre><code>{`src/
└── main/
    ├── java/
    │   └── com/example/mvc/
    │       ├── config/
    │       │   └── MvcConfig.java
    │       ├── controller/
    │       │   └── ProductController.java
    │       ├── model/
    │       │   └── Product.java
    │       ├── repository/
    │       │   └── ProductRepository.java
    │       ├── service/
    │       │   └── ProductService.java
    │       └── MvcApplication.java
    └── resources/
        ├── static/
        ├── templates/
        │   └── products/
        │       ├── list.html
        │       ├── form.html
        │       └── view.html
        └── application.properties`}</code></pre>

                <h4 className="h5 mt-2">MvcApplication.java</h4>
                <pre><code>{`package com.example.mvc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MvcApplication {
    public static void main(String[] args) {
        SpringApplication.run(MvcApplication.class, args);
    }
}`}</code></pre>

                <h4 className="h5 mt-2">application.properties</h4>
                <pre><code>{`# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/mvc_example
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# Hibernate Properties
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# Thymeleaf Configuration
spring.thymeleaf.cache=false
spring.thymeleaf.prefix=classpath:/templates/
spring.thymeleaf.suffix=.html
spring.thymeleaf.mode=HTML
spring.thymeleaf.encoding=UTF-8`}</code></pre>

                <h4 className="h5 mt-2">MvcConfig.java</h4>
                <pre><code>{`package com.example.mvc.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {
    
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("redirect:/products");
        registry.addViewController("/login").setViewName("login");
    }
}`}</code></pre>

                <h4 className="h5 mt-2">ProductRepository.java</h4>
                <pre><code>{`package com.example.mvc.repository;

import com.example.mvc.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}`}</code></pre>

                <h4 className="h5 mt-2">ProductService.java</h4>
                <pre><code>{`package com.example.mvc.service;

import com.example.mvc.model.Product;
import com.example.mvc.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Product findById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public Product save(Product product) {
        return productRepository.save(product);
    }

    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }
}`}</code></pre>

                <h4 className="h5 mt-2">Product.java (Model)</h4>
                <pre><code>{`package com.example.mvc.model;

import jakarta.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private Double price;
    
    @Column(length = 2000)
    private String description;
    
    // Constructors
    public Product() {}
    
    public Product(String name, Double price, String description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}`}</code></pre>

                <h4 className="h5 mt-2">ProductController.java</h4>
                <pre><code>{`package com.example.mvc.controller;

import com.example.mvc.model.Product;
import com.example.mvc.service.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/products")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public String listProducts(Model model) {
        model.addAttribute("products", productService.findAll());
        return "products/list";
    }

    @GetMapping("/create")
    public String showCreateForm(Model model) {
        model.addAttribute("product", new Product());
        return "products/form";
    }

    @PostMapping
    public String createProduct(@ModelAttribute Product product) {
        productService.save(product);
        return "redirect:/products";
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model) {
        model.addAttribute("product", productService.findById(id));
        return "products/form";
    }

    @GetMapping("/{id}")
    public String viewProduct(@PathVariable Long id, Model model) {
        model.addAttribute("product", productService.findById(id));
        return "products/view";
    }

    @PostMapping("/delete/{id}")
    public String deleteProduct(@PathVariable Long id) {
        productService.deleteById(id);
        return "redirect:/products";
    }
}`}</code></pre>

                <h4 className="h5 mt-2">form.html (Thymeleaf Template)</h4>
                <pre><code>{`<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title th:text="\${product.id} ? 'Edit Product' : 'Create Product'">Product Form</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <h1 th:text="\${product.id} ? 'Edit Product' : 'Create Product'">Product Form</h1>
    
    <form th:action="@{/products}" th:object="\${product}" method="post">
        <input type="hidden" th:field="*{id}">
        
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" th:field="*{name}" required>
        </div>
        
        <div>
            <label for="price">Price:</label>
            <input type="number" id="price" th:field="*{price}" step="0.01" min="0" required>
        </div>
        
        <div>
            <label for="description">Description:</label>
            <textarea id="description" th:field="*{description}" rows="4"></textarea>
        </div>
        
        <button type="submit">Save</button>
        <a th:href="@{/products}">Cancel</a>
    </form>
</body>
</html>`}</code></pre>

                <h4 className="h5 mt-2">list.html (Thymeleaf Template)</h4>
                <pre><code>{`<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Product List</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <h1>Products</h1>
    <a th:href="@{/products/create}">Add New Product</a>
    
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr th:each="product : \${products}">
                <td th:text="\${product.id}"></td>
                <td th:text="\${product.name}"></td>
                <td th:text="\${'$' + #numbers.formatDecimal(product.price, 1, 2)}"></td>
                <td>
                    <a th:href="@{/products/{id}(id=\${product.id})}">View</a> |
                    <a th:href="@{/products/edit/{id}(id=\${product.id})}">Edit</a> |
                    <form th:action="@{/products/delete/{id}(id=\${product.id})}" 
                          method="post" style="display: inline;">
                        <button type="submit">Delete</button>
                    </form>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>`}</code></pre>

                <h4 className="h5 mt-2">view.html (Thymeleaf Template)</h4>
                <pre><code>{`<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title th:text="\${product.name}">Product Details</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <h1 th:text="\${product.name}">Product Details</h1>
    
    <div>
        <strong>ID:</strong>
        <span th:text="\${product.id}"></span>
    </div>
    
    <div>
        <strong>Price:</strong>
        <span th:text="\${'$' + #numbers.formatDecimal(product.price, 1, 2)}"></span>
    </div>
    
    <div>
        <strong>Description:</strong>
        <p th:text="\${product.description}"></p>
    </div>
    
    <div>
        <a th:href="@{/products/edit/{id}(id=\${product.id})}">Edit</a> |
        <a th:href="@{/products}">Back to List</a>
    </div>
</body>
</html>`}</code></pre>

                <h4 className="h5 mt-2">Key Annotations in Spring MVC</h4>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Annotation</th>
                      <th>Purpose</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>@Controller</code></td>
                      <td>Marks class as MVC controller</td>
                      <td><code>{`@Controller public class MyController {... }`}</code></td>
                    </tr>
                    <tr>
                      <td><code>@RequestMapping</code></td>
                      <td>Maps web requests to handler methods</td>
                      <td><code>{`@RequestMapping("/products")`}</code></td>
                    </tr>
                    <tr>
                      <td><code>@GetMapping</code></td>
                      <td>Handles HTTP GET requests</td>
                      <td><code>{`@GetMapping("/{id}")`}</code></td>
                    </tr>
                    <tr>
                      <td><code>@PostMapping</code></td>
                      <td>Handles HTTP POST requests</td>
                      <td><code>@PostMapping</code></td>
                    </tr>
                    <tr>
                      <td><code>@ModelAttribute</code></td>
                      <td>Binds method parameter or return value to named model attribute</td>
                      <td><code>@ModelAttribute Product product</code></td>
                    </tr>
                    <tr>
                      <td><code>@PathVariable</code></td>
                      <td>Extracts URI template variables</td>
                      <td><code>@PathVariable Long id</code></td>
                    </tr>
                    <tr>
                      <td><code>@RequestParam</code></td>
                      <td>Extracts query parameters</td>
                      <td><code>@RequestParam String name</code></td>
                    </tr>
                    <tr>
                      <td><code>@ResponseBody</code></td>
                      <td>Indicates return value should be bound to web response body</td>
                      <td><code>{`@ResponseBody String hello() {... }`}</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Spring Boot Notes &copy; 2025 | Developed by Mugilvannan P.</p>
        </div>
      </footer>
    </div>
  );
}

export default SpringBootNotes;