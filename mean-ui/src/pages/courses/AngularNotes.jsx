import React from 'react';

function AngularNotes() {
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
          .example-box {
            background-color: #f0f8ff;
            border: 1px solid #d1e7ff;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
          }
        `}
      </style>

      <header className="bg-danger text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-angular"></i> Angular Notes</h1>
          <p className="lead">Comprehensive Guide to Angular Framework</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#features"><i className="bi bi-star-fill"></i> Features</a>
              <a className="nav-link" href="#setup"><i className="bi bi-gear"></i> Setup</a>
              <a className="nav-link" href="#components"><i className="bi bi-puzzle"></i> Components</a>
              <a className="nav-link" href="#data-binding"><i className="bi bi-arrow-left-right"></i> Data Binding</a>
              <a className="nav-link" href="#directives"><i className="bi bi-code-slash"></i> Directives</a>
              <a className="nav-link" href="#pipes"><i className="bi bi-filter"></i> Pipes</a>
              <a className="nav-link" href="#forms"><i className="bi bi-input-cursor-text"></i> Forms</a>
              <a className="nav-link" href="#http"><i className="bi bi-cloud-arrow-down"></i> HTTP Client</a>
              <a className="nav-link" href="#routing"><i className="bi bi-signpost-split"></i> Routing</a>
              <a className="nav-link" href="#lifecycle"><i className="bi bi-arrow-repeat"></i> Lifecycle Hooks</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> What is Angular?</h2>
              
              <div className="property-card">
                <h3 className="h4">Client-Side Frameworks</h3>
                <ul>
                  <li>There are two sides of web development – the server side and the client side.</li>
                  <li>Server-side frameworks typically use programming languages with compilers and run on web servers (Node.js, PHP, Python, Java, ASP.Net).</li>
                  <li>Client-side frameworks are usually JavaScript libraries that run in web browsers (React, Angular, Vue).</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Angular Introduction</h3>
                <ul>
                  <li>TypeScript-based open-source web application framework</li>
                  <li>Maintained by Google</li>
                  <li>Designed for building single-page applications (SPAs)</li>
                  <li>Uses component-based architecture</li>
                  <li>Supports two-way data binding, dependency injection, and RxJS</li>
                  <li>Founded by Miško Hevery (initial version: AngularJS)</li>
                  <li>Initial Release: 2010 (as AngularJS)</li>
                  <li>Modern Angular (2+): Released in 2016</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Other Client-Side Frameworks</h3>
                <h4 className="h5 mt-3">React</h4>
                <ul>
                  <li>Developed and maintained by Facebook</li>
                  <li>Open source, declarative, front-end JavaScript library</li>
                  <li>Used for building user interfaces for single page or mobile apps</li>
                  <li>Simple to use, scalable and fast</li>
                </ul>

                <h4 className="h5 mt-3">Vue</h4>
                <ul>
                  <li>Progressive framework for building user interfaces</li>
                  <li>Core library focused on the view layer only</li>
                </ul>

                <h4 className="h5 mt-3">Bootstrap</h4>
                <ul>
                  <li>HTML, CSS, JavaScript framework</li>
                  <li>Helps developers build responsive and mobile websites</li>
                  <li>Created by Twitter</li>
                </ul>
              </div>
            </section>

            <section id="features" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-star-fill"></i> Angular Features</h2>
              
              <div className="property-card">
                <h3 className="h4">1. Component-Based Architecture</h3>
                <p>Breaks the UI into reusable, self-contained components that manage their own logic and view.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Two-Way Data Binding</h3>
                <p>Synchronizes data between the model (logic) and the view (UI) instantly, reducing boilerplate code.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Dependency Injection (DI)</h3>
                <p>Automatically provides and injects services into components and classes, promoting modularity and easy testing.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Directives</h3>
                <p>Special HTML attributes or tags that allow custom behavior (e.g., *ngIf, *ngFor) to manipulate the DOM.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">5. Routing</h3>
                <p>Built-in support for creating Single Page Applications (SPAs) by navigating between views or components without reloading the page.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">6. TypeScript Support</h3>
                <p>Angular is built using TypeScript, a superset of JavaScript, which adds static typing and modern OOP features.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">7. Reactive Forms & Template-Driven Forms</h3>
                <p>Provides two approaches to handle user input and form validation effectively.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">8. Pipes</h3>
                <p>Transform data in templates (e.g., date, uppercase, currency) without changing the original data.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">9. CLI (Command Line Interface)</h3>
                <p>Powerful Angular CLI tool to generate components, services, and modules, and to manage builds and testing.</p>
              </div>
            </section>

            <section id="setup" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Angular Setup</h2>
              
              <div className="property-card">
                <h3 className="h4">How to create an Angular app?</h3>
                <h4 className="h5 mt-3">Step 1: Install Angular CLI</h4>
                <pre><code>{`npm install -g @angular/cli`}</code></pre>

                <h4 className="h5 mt-3">Step 2: Create a new Angular project</h4>
                <pre><code>{`ng new app-name`}</code></pre>
                <p>Then choose CSS and No for server-side rendering when prompted.</p>

                <h4 className="h5 mt-3">Step 3: Run the project</h4>
                <pre><code>{`cd app-name
ng serve`}</code></pre>
                <p>The application will be available at <code>http://localhost:4200/</code></p>
              </div>

              <div className="property-card">
                <h3 className="h4">Potential Setup Issues</h3>
                <p>If you encounter execution policy errors in PowerShell:</p>
                <pre><code>{`Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`}</code></pre>
                <p>Type "yes" when prompted.</p>
              </div>
            </section>

            <section id="components" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-puzzle"></i> Components</h2>
              
              <div className="property-card">
                <h3 className="h4">What is a Component?</h3>
                <ul>
                  <li>A Component is the basic building block of an Angular application</li>
                  <li>It controls a part of the UI (called a view) and contains:
                    <ul>
                      <li>HTML template → for the structure/layout</li>
                      <li>TypeScript class → for logic and data</li>
                      <li>CSS/SCSS → for styling</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Component Structure</h3>
                <pre><code>{`@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  // component logic
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Creating Components with Angular CLI</h3>
                <h4 className="h5 mt-3">Basic Component</h4>
                <pre><code>{`ng generate component component-name
// or shorthand:
ng g c component-name`}</code></pre>

                <h4 className="h5 mt-3">Component in Specific Folder</h4>
                <pre><code>{`ng g c folder-name/component-name`}</code></pre>
              </div>
            </section>

            <section id="data-binding" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-left-right"></i> Data Binding</h2>
              
              <div className="property-card">
                <h3 className="h4">What is Data Binding?</h3>
                <ul>
                  <li>Process that connects the component logic (TypeScript) with the view (HTML template)</li>
                  <li>Allows communication between the class and the DOM, either one-way or two-way</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Types of Data Binding</h3>
                
                <h4 className="h5 mt-3">1. Interpolation {`{{}}`}</h4>
                <p>One-way binding from component to view.</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`<!-- HTML -->
<h1>Welcome {{userName}}</h1>

<!-- TypeScript -->
export class AppComponent {
  userName = 'John';
}`}</code></pre>
                </div>

                <h4 className="h5 mt-3">2. Property Binding ([property])</h4>
                <p>Binds DOM properties to component values.</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`<!-- HTML -->
<h1 [innerText]="userName"></h1>

<!-- TypeScript -->
export class AppComponent {
  userName = 'John';
}`}</code></pre>
                </div>

                <h4 className="h5 mt-3">3. Event Binding ((event))</h4>
                <p>Binds DOM events (like click) to component methods.</p>
                <div className="example-box">
                  <h5>Example 1:</h5>
                  <pre><code>{`<!-- HTML -->
<button (click)="showAlert()">Click Me</button>

<!-- TypeScript -->
showAlert() {
  alert('Button Clicked!');
}`}</code></pre>
                  <h5 className="mt-3">Example 2:</h5>
                  <pre><code>{`<!-- HTML -->
Type here: <input type="text" (input)="handleInput($event)">
<p>{{value}}</p>

<!-- TypeScript -->
value = "";
handleInput(event: any) {
  this.value = (event.target as HTMLInputElement).value;
}`}</code></pre>
                </div>

                <h4 className="h5 mt-3">4. Two-Way Binding ([(ngModel)])</h4>
                <p>Syncs data both ways between input and component. Requires FormsModule.</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`<!-- HTML -->
<input [(ngModel)]="userName" />
<p>Your name is: {{ userName }}</p>

<!-- TypeScript -->
export class AppComponent {
  userName = "";
}`}</code></pre>
                </div>
              </div>
            </section>

            <section id="directives" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-slash"></i> Directives</h2>
              
              <div className="property-card">
                <h3 className="h4">What are Directives?</h3>
                <ul>
                  <li>Special instructions in the DOM (like custom HTML attributes or tags)</li>
                  <li>Used to manipulate the structure or behavior of HTML elements</li>
                  <li>Help control the appearance, layout, and behavior of DOM elements dynamically</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Types of Directives</h3>
                
                <h4 className="h5 mt-3">1. Component Directive</h4>
                <p>A directive with a template. When you create a new component in Angular, you're creating a directive.</p>
                <div className="example-box">
                  <h5>Example:</h5>
                  <pre><code>{`@Component({ 
  selector: 'app-user', 
  templateUrl: './user.component.html' 
}) 
export class UserComponent { }

<!-- Used in HTML -->
<app-user></app-user>`}</code></pre>
                </div>

                <h4 className="h5 mt-3">2. Structural Directives</h4>
                <p>Change the structure of the DOM by adding or removing elements.</p>
                <p>Common Structural Directives:</p>
                <ul>
                  <li><code>*ngIf</code> – conditionally adds/removes elements</li>
                  <li><code>*ngFor</code> – loops through a list and renders elements</li>
                  <li><code>*ngSwitch</code> – renders elements based on matching condition</li>
                </ul>
                <p className="text-muted">Note: Need to import CommonModule in imports when using structural directives.</p>

                <div className="example-box">
                  <h5>*ngIf Example:</h5>
                  <pre><code>{`<p *ngIf="true">Display</p>
<p *ngIf="false">Not Display</p>`}</code></pre>

                  <h5 className="mt-3">*ngFor Example:</h5>
                  <pre><code>{`<!-- TypeScript -->
title = "Fruits";
fruits = ['apple', 'banana', 'orange'];

<!-- HTML -->
<h1>{{title}}</h1>
<ul>
  <li *ngFor="let fruit of fruits">
    {{fruit}}
  </li>
</ul>

<!-- Output:
Fruits
• apple
• banana
• orange -->`}</code></pre>

                  <h5 className="mt-3">*ngFor Attributes:</h5>
                  <ul>
                    <li><code>index</code> - <code>let i = index;</code> (automatically generate index values from 0 to n-1)</li>
                    <li><code>odd & even</code> - <code>let o = odd; let e = even;</code></li>
                    <li><code>first & last</code> - <code>let f = first; let l = last;</code></li>
                  </ul>

                  <h5 className="mt-3">*ngSwitch Example:</h5>
                  <pre><code>{`<!-- TypeScript -->
color = "blue";

<!-- HTML -->
<div [ngSwitch]="color">
  <p *ngSwitchCase="'red'">Red color</p>
  <p *ngSwitchCase="'green'">Green color</p>
  <p *ngSwitchCase="'gray'">Gray color</p>
  <p *ngSwitchDefault="'yellow'">Other color</p>
</div>`}</code></pre>
                </div>

                <h4 className="h5 mt-3">3. Attribute Directives</h4>
                <p>Change the appearance or behavior of an element, component, or another directive.</p>
                <p>Built-in Examples:</p>
                <ul>
                  <li><code>ngClass</code> – adds/removes CSS classes dynamically</li>
                  <li><code>ngStyle</code> – adds dynamic styles</li>
                  <li><code>required</code>, <code>disabled</code>, etc.</li>
                </ul>
                <div className="example-box">
                  <h5>Examples:</h5>
                  <pre><code>{`<!-- ngClass -->
<p [ngClass]="{ 'active': isActive }">Status</p>

<!-- ngStyle -->
<p [ngStyle]="{ 'color': 'red' }">Message</p>`}</code></pre>
                </div>
              </div>
            </section>

            <section id="pipes" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-filter"></i> Pipes</h2>
              
              <div className="property-card">
                <h3 className="h4">What are Pipes?</h3>
                <ul>
                  <li>Used to transform data in Angular templates</li>
                  <li>Take input data, apply transformation logic, and return formatted output</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Pipe Syntax</h3>
                <pre><code>{`{{ value | pipeName[:arg1][:arg2] }}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Common Pipes</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Pipe Name</th>
                        <th>Purpose</th>
                        <th>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>date</code></td>
                        <td>Formats date values</td>
                        <td><code>{`{{ today | date }}`}</code></td>
                      </tr>
                      <tr>
                        <td><code>uppercase</code></td>
                        <td>Converts text to uppercase</td>
                        <td><code>{`{{ name | uppercase }}`}</code></td>
                      </tr>
                      <tr>
                        <td><code>lowercase</code></td>
                        <td>Converts text to lowercase</td>
                        <td><code>{`{{ name | lowercase }}`}</code></td>
                      </tr>
                      <tr>
                        <td><code>titlecase</code></td>
                        <td>Converts text to title case</td>
                        <td><code>{`{{ name | titlecase }}`}</code></td>
                      </tr>
                      <tr>
                        <td><code>number</code></td>
                        <td>Formats number</td>
                        <td><code>{`{{ value | number }}`}</code></td>
                      </tr>
                      <tr>
                        <td><code>percent</code></td>
                        <td>Converts number to percentage</td>
                        <td><code>{`{{ 0.75 | percent }}`}</code></td>
                      </tr>
                      <tr>
                        <td><code>currency</code></td>
                        <td>Formats number as currency</td>
                        <td><code>{`{{ price | currency }}`}</code></td>
                      </tr>
                      <tr>
                        <td><code>slice</code></td>
                        <td>Slices string/array</td>
                        <td><code>{`{{ message | slice:0:7 }}`}</code></td>
                      </tr>
                      <tr>
                        <td><code>json</code></td>
                        <td>Converts object to JSON string</td>
                        <td><code>{`{{ user | json }}`}</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">Pipe Examples</h3>
                
                <h4 className="h5 mt-3">date Pipe</h4>
                <pre><code>{`{{ today | date }}
{{ today | date:'fullDate' }}
{{ today | date:'short' }}
{{ today | date:'medium' }}
{{ today | date:'longDate' }}
{{ today | date:'dd/MM/yyyy' }}`}</code></pre>

                <h4 className="h5 mt-3">uppercase & lowercase Pipes</h4>
                <pre><code>{`{{ 'angular' | uppercase }} <!-- Output: ANGULAR -->
{{ 'ANGULAR' | lowercase }} <!-- Output: angular -->`}</code></pre>

                <h4 className="h5 mt-3">titlecase Pipe</h4>
                <pre><code>{`{{ 'hello angular world' | titlecase }} <!-- Output: Hello Angular World -->`}</code></pre>

                <h4 className="h5 mt-3">number Pipe</h4>
                <pre><code>{`{{ 3.14159 | number:'1.1-2' }} <!-- Output: 3.14 -->`}</code></pre>

                <h4 className="h5 mt-3">percent Pipe</h4>
                <pre><code>{`{{ 0.85 | percent }} <!-- Output: 85% -->`}</code></pre>

                <h4 className="h5 mt-3">currency Pipe</h4>
                <pre><code>{`{{ 1234.5 | currency:'INR':'symbol' }} <!-- ₹1,234.50 -->
{{ 1234.5 | currency:'USD':'code' }} <!-- USD1,234.50 -->`}</code></pre>

                <h4 className="h5 mt-3">slice Pipe</h4>
                <pre><code>{`{{ 'Angular Pipes' | slice:0:7 }} <!-- Output: Angular -->`}</code></pre>

                <h4 className="h5 mt-3">json Pipe</h4>
                <pre><code>{`{{ {name: 'John', age: 30} | json }}`}</code></pre>
              </div>
            </section>

            <section id="forms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-input-cursor-text"></i> Angular Forms</h2>
              
              <div className="property-card">
                <h3 className="h4">What are Angular Forms?</h3>
                <p>Used to handle user input, perform data binding, and validate input data.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">Types of Angular Forms</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Use Case</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Template-driven</td>
                        <td>Logic inside HTML template using [(ngModel)]</td>
                        <td>Simple forms</td>
                      </tr>
                      <tr>
                        <td>Reactive (Model-driven)</td>
                        <td>Logic written in the component using FormGroup & FormControl</td>
                        <td>Complex/structured forms</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">1. Template-driven Form</h3>
                <p>Simple and declarative approach.</p>
                <h4 className="h5 mt-3">Steps:</h4>
                <ol>
                  <li>Import FormsModule in app.module.ts</li>
                  <li>Use [(ngModel)] for two-way data binding</li>
                  <li>Use #form="ngForm" to access form object</li>
                </ol>

                <div className="example-box">
                  <h5>app.module.ts:</h5>
                  <pre><code>{`import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ]
})`}</code></pre>

                  <h5 className="mt-3">template-driven.component.html:</h5>
                  <pre><code>{`<form #contactForm="ngForm" (submit)="onSubmit(contactForm)">
  <label for="firstname">First Name</label>
  <input type="text" id="firstname" name="firstname" ngModel required>
  
  <label for="lastname">Last Name</label>
  <input type="text" id="lastname" name="lastname" ngModel required>
  
  <label for="email">Email</label>
  <input type="email" id="email" name="email" ngModel required>
  
  <button type="submit" [disabled]="!contactForm.valid">Submit</button>
</form>`}</code></pre>

                  <h5 className="mt-3">template-driven.component.ts:</h5>
                  <pre><code>{`onSubmit(form: NgForm) {
  console.log(form.value);
}`}</code></pre>
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Reactive Form</h3>
                <p>Structured and scalable approach.</p>
                <h4 className="h5 mt-3">Steps:</h4>
                <ol>
                  <li>Import ReactiveFormsModule in app.module.ts</li>
                  <li>Define FormGroup and FormControl in TS file</li>
                  <li>Bind form using [formGroup] and formControlName</li>
                </ol>

                <div className="example-box">
                  <h5>app.module.ts:</h5>
                  <pre><code>{`import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule
  ]
})`}</code></pre>

                  <h5 className="mt-3">reactive-form.component.ts:</h5>
                  <pre><code>{`import { FormGroup, FormControl } from '@angular/forms';

export class ReactiveFormComponent {
  contactForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl()
    })
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }
}`}</code></pre>

                  <h5 className="mt-3">reactive-form.component.html:</h5>
                  <pre><code>{`<form [formGroup]="contactForm" (submit)="onSubmit()">
  <label for="firstname">First Name</label>
  <input type="text" id="firstname" formControlName="firstName">
  
  <label for="lastname">Last Name</label>
  <input type="text" id="lastname" formControlName="lastName">
  
  <div formGroupName="address">
    <label for="city">City</label>
    <input type="text" id="city" formControlName="city">
  </div>
  
  <button type="submit">Submit</button>
</form>`}</code></pre>
                </div>
              </div>
            </section>

            <section id="http" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-cloud-arrow-down"></i> HTTP Client</h2>
              
              <div className="property-card">
                <h3 className="h4">What is HttpClientModule?</h3>
                <ul>
                  <li>Provides tools to make HTTP requests to REST APIs</li>
                  <li>Part of the @angular/common/http package</li>
                  <li>Allows sending GET, POST, PUT, DELETE requests</li>
                  <li>Handles responses asynchronously using Observables</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">How to Use HttpClient</h3>
                <h4 className="h5 mt-3">Step 1: Provide HttpClient globally</h4>
                <pre><code>{`// main.ts
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]
});`}</code></pre>

                <h4 className="h5 mt-3">Step 2: Create a Service</h4>
                <pre><code>{`// jsonplaceholder.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JsonPlaceholderService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  // GET
  getPosts(): Observable<any> {
    return this.http.get(this.url);
  }

  // POST
  addPost(post: any): Observable<any> {
    return this.http.post(this.url, post);
  }

  // DELETE
  deletePost(id: number): Observable<any> {
    return this.http.delete(\`\${this.url}/\${id}\`);
  }
}`}</code></pre>

                <h4 className="h5 mt-3">Step 3: Use in Component</h4>
                <pre><code>{`// app.component.ts
import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from './jsonplaceholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  posts: any[] = [];
  newPost = { title: '', body: '', userId: 1 };

  constructor(private service: JsonPlaceholderService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getPosts().subscribe((data) => {
      this.posts = data.slice(0, 5); // Limit to 5 for demo
    });
  }

  addData() {
    this.service.addPost(this.newPost).subscribe((response) => {
      console.log('Post added:', response);
      this.getData();
    });
  }

  deletePost(id: number) {
    this.service.deletePost(id).subscribe(() => {
      console.log('Post deleted:', id);
      this.posts = this.posts.filter(post => post.id !== id);
    });
  }
}`}</code></pre>

                <h4 className="h5 mt-3">Step 4: Template</h4>
                <pre><code>{`<!-- app.component.html -->
<h1>HTTP Example</h1>

<button (click)="getData()">Load Posts</button>

<ul>
  <li *ngFor="let post of posts">
    {{ post.title }}
    <button (click)="deletePost(post.id)">Delete</button>
  </li>
</ul>

<h3>Add Post</h3>
<input [(ngModel)]="newPost.title" placeholder="Title" />
<input [(ngModel)]="newPost.body" placeholder="Body" />
<button (click)="addData()">Submit</button>`}</code></pre>
              </div>
            </section>

            <section id="routing" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-signpost-split"></i> Angular Router</h2>
              
              <div className="property-card">
                <h3 className="h4">What is Angular Router?</h3>
                <ul>
                  <li>Enables navigation between different components/pages</li>
                  <li>Helps build Single Page Applications (SPA)</li>
                  <li>Loads components based on URL without full page reloads</li>
                  <li>Routes map URL paths to components</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Router Setup</h3>
                <h4 className="h5 mt-3">Step 1: Define Routes</h4>
                <pre><code>{`// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];`}</code></pre>

                <h4 className="h5 mt-3">Step 2: Setup App Component</h4>
                <pre><code>{`// app.component.ts
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  providers: [provideRouter(appRoutes)],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {}`}</code></pre>

                <h4 className="h5 mt-3">Step 3: Create Components</h4>
                <pre><code>{`// home.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: \`
    <h2>Home Page</h2>
    <p>Welcome to the Home Page!</p>
    <nav>
      <a routerLink="/about">Go to About</a>
    </nav>
  \`
})
export class HomeComponent {}

// about.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  template: \`
    <h2>About Page</h2>
    <p>This is the About Page.</p>
    <nav>
      <a routerLink="/">Back to Home</a>
    </nav>
  \`
})
export class AboutComponent {}`}</code></pre>
              </div>
            </section>

            <section id="lifecycle" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> Lifecycle Hooks</h2>
              
              <div className="property-card">
                <h3 className="h4">What are Lifecycle Hooks?</h3>
                <p>Special methods that get called automatically at specific moments in a component's creation, update, and destruction phases.</p>
              </div>

              <div className="property-card">
                <h3 className="h4">Lifecycle Hooks</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Hook</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>ngOnChanges</code></td>
                        <td>Called when input-bound properties change</td>
                      </tr>
                      <tr>
                        <td><code>ngOnInit</code></td>
                        <td>Called once after the first ngOnChanges</td>
                      </tr>
                      <tr>
                        <td><code>ngDoCheck</code></td>
                        <td>Called during every change detection run</td>
                      </tr>
                      <tr>
                        <td><code>ngAfterContentInit</code></td>
                        <td>Called after content (ng-content) is projected</td>
                      </tr>
                      <tr>
                        <td><code>ngAfterContentChecked</code></td>
                        <td>After every check of projected content</td>
                      </tr>
                      <tr>
                        <td><code>ngAfterViewInit</code></td>
                        <td>Called after component view is initialized</td>
                      </tr>
                      <tr>
                        <td><code>ngAfterViewChecked</code></td>
                        <td>After every check of the component view</td>
                      </tr>
                      <tr>
                        <td><code>ngOnDestroy</code></td>
                        <td>Called just before the component is destroyed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">Examples</h3>
                
                <h4 className="h5 mt-3">1. ngOnChanges</h4>
                <pre><code>{`// app.component.ts
title = "Mugil";

// app.component.html
Title: <input type="text" [(ngModel)]="title">
<app-lifecycle [text]="title"></app-lifecycle>

// lifecycle.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: '<p>Onchange Example</p><h1>{{text}}</h1>'
})
export class LifecycleComponent implements OnChanges {
  @Input() text: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('Input changed:', changes['text'].currentValue);
  }
}`}</code></pre>

                <h4 className="h5 mt-3">2. ngOnInit</h4>
                <pre><code>{`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: '...'
})
export class LifecycleComponent implements OnInit {
  ngOnInit() {
    console.log('Component initialized');
  }
}`}</code></pre>

                <h4 className="h5 mt-3">3. ngDoCheck</h4>
                <pre><code>{`import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: '...'
})
export class LifecycleComponent implements OnInit, DoCheck {
  noOfTitles = 0;
  
  ngOnInit() {
    console.log('Component initialized');
    this.noOfTitles = 1;
  }
  
  ngDoCheck(): void {
    console.log("ngDoCheck called");
    if(this.text.length > this.noOfTitles) {
      console.log("Modify the value");
      this.noOfTitles++;
    }
  }
}`}</code></pre>

                <h4 className="h5 mt-3">4. ngOnDestroy</h4>
                <pre><code>{`// app.component.ts
disableLifecycle = false;

// app.component.html
DisableLifecycle: <input type="checkbox" [(ngModel)]="disableLifecycle">
<app-lifecycle *ngIf="!disableLifecycle" [text]="title"></app-lifecycle>

// lifecycle.component.ts
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: '...'
})
export class LifecycleComponent implements OnInit, DoCheck, OnDestroy {
  ngOnDestroy() {
    console.log('Component is about to be destroyed');
  }
}`}</code></pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Angular Notes &copy; 2025 | Based on Angular Documentation</p>
        </div>
      </footer>
    </div>
  );
}

export default AngularNotes;