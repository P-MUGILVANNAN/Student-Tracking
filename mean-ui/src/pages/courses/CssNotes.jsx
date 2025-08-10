import React from 'react';

function CssNotes() {
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
            padding: 10px;
            margin: 10px 0;
            border-radius: 4px;
          }
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-css"></i> CSS Notes</h1>
          <p className="lead">Your Comprehensive Guide to Cascading Style Sheets</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> What is CSS?</a>
              <a className="nav-link" href="#inclusion"><i className="bi bi-code-square"></i> Including CSS</a>
              <a className="nav-link" href="#syntax"><i className="bi bi-file-earmark-code"></i> CSS Syntax</a>
              <a className="nav-link" href="#selectors"><i className="bi bi-filter-square"></i> Selectors</a>
              <a className="nav-link" href="#units"><i className="bi bi-rulers"></i> CSS Units</a>
              <a className="nav-link" href="#text"><i className="bi bi-type"></i> Text Properties</a>
              <a className="nav-link" href="#background"><i className="bi bi-image"></i> Background</a>
              <a className="nav-link" href="#border"><i className="bi bi-square"></i> Border</a>
              <a className="nav-link" href="#font"><i className="bi bi-fonts"></i> Font</a>
              <a className="nav-link" href="#box-model"><i className="bi bi-border"></i> Box Model</a>
              <a className="nav-link" href="#table"><i className="bi bi-table"></i> Table</a>
              <a className="nav-link" href="#list"><i className="bi bi-list-ul"></i> List</a>
              <a className="nav-link" href="#display"><i className="bi bi-layout-three-columns"></i> Display</a>
              <a className="nav-link" href="#flexbox"><i className="bi bi-distribute-vertical"></i> Flexbox</a>
              <a className="nav-link" href="#grid"><i className="bi bi-grid-3x3"></i> Grid</a>
              <a className="nav-link" href="#position"><i className="bi bi-arrows-move"></i> Position</a>
              <a className="nav-link" href="#media"><i className="bi bi-display"></i> Media Queries</a>
              <a className="nav-link" href="#pseudo"><i className="bi bi-magic"></i> Pseudo Classes</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> What is CSS?</h2>
              <ul className="mb-3">
                <li><strong>CSS stands for Cascading Style Sheets</strong> - a stylesheet language used to describe the presentation of a document written in HTML</li>
                <li><strong>Purpose:</strong> CSS is used to style web pages, controlling layout, colors, fonts, and other visual aspects</li>
                <li><strong>History:</strong> Invented by Håkon Wium Lie in 1994, with the first official recommendation (CSS1) released in 1996</li>
                <li><strong>Current Version:</strong> CSS3 (modular specification with different features at various levels of maturity)</li>
                <li><strong>Key Features:</strong> Separation of content and presentation, responsive design capabilities, animations, and more</li>
              </ul>

              <div className="property-card">
                <h3 className="h4">How CSS Works</h3>
                <p>CSS works by associating rules with HTML elements. These rules govern how the content of specified elements should be displayed.</p>
                <pre><code>{`/* This is a CSS rule */
selector {
  property: value;
  another-property: value;
}`}</code></pre>
              </div>
            </section>

            <section id="inclusion" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> How to include CSS into our webpage?</h2>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> Inline styling</h3>
                <p><strong>Definition:</strong> CSS applied directly to an HTML element using the style attribute</p>
                <p><strong>Use Case:</strong> Quick styling for a single element, but generally discouraged as it mixes content with presentation</p>
                <pre className="mb-3"><code>{`<h1 style="color: #184157; font-size: 2rem; margin-bottom: 1rem;">Inline styling</h1>`}</code></pre>
                <div className="example-box">
                  <h4>Example Output:</h4>
                  <h1 style={{ color: '#184157', fontSize: '2rem', marginBottom: '1rem' }}>Inline styling</h1>
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> Internal styling</h3>
                <p><strong>Definition:</strong> CSS placed within a &lt;style&gt; tag in the HTML document's head section</p>
                <p><strong>Use Case:</strong> Useful for single-page styling when external stylesheets aren't necessary</p>
                <pre className="mb-3"><code>{`<head>
  <style>
    .internal-example {
      color: blue;
      background-color: #f0f8ff;
      padding: 1rem;
      border-radius: 0.5rem;
    }
  </style>
</head>
<body>
  <div class="internal-example">Internal Styling Example</div>
</body>`}</code></pre>
                <div className="example-box">
                  <h4>Example Output:</h4>
                  <div style={{ color: 'blue', backgroundColor: '#f0f8ff', padding: '1rem', borderRadius: '0.5rem' }}>Internal Styling Example</div>
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-right-circle"></i> External styling</h3>
                <p><strong>Definition:</strong> CSS placed in a separate .css file and linked to the HTML document</p>
                <p><strong>Best Practice:</strong> The recommended approach for most projects as it promotes reusability and separation of concerns</p>
                <pre className="mb-3"><code>{`/* In your HTML file */
<head>
  <link rel="stylesheet" href="styles.css">
</head>

/* In styles.css */
.external-example {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}`}</code></pre>
                <p><strong>Attributes:</strong></p>
                <ul>
                  <li><code>rel="stylesheet"</code> - defines the relationship between the HTML file and the linked file</li>
                  <li><code>href</code> - specifies the path to the CSS file</li>
                  <li><code>type="text/css"</code> - optional in HTML5 as it's the default for stylesheets</li>
                </ul>
              </div>
            </section>

            <section id="syntax" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> CSS Syntax</h2>
              <pre className="mb-3"><code>{`selector {
    property: value;
    another-property: value;
}`}</code></pre>

              <div className="property-card">
                <h3 className="h4">CSS Rule Structure</h3>
                <ol>
                  <li><strong>Selector:</strong> Points to the HTML element you want to style</li>
                  <li><strong>Declaration Block:</strong> Contains one or more declarations separated by semicolons</li>
                  <li><strong>Declaration:</strong> A property/value pair that applies a style to the selected element</li>
                  <li><strong>Property:</strong> The style attribute you want to change (e.g., color, font-size)</li>
                  <li><strong>Value:</strong> The setting for the property (e.g., red, 16px)</li>
                </ol>
              </div>

              <div className="property-card">
                <h3 className="h4">CSS Comments</h3>
                <p>Comments are ignored by browsers and used to explain your code:</p>
                <pre><code>{`/* This is a single-line comment */

/*
  This is a
  multi-line comment
*/`}</code></pre>
              </div>
            </section>

            <section id="selectors" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-filter-square"></i> Selectors</h2>
              <p className="mb-3">Selectors target HTML elements to apply styles. Here are the main types:</p>

              <div className="row">
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-1-circle"></i> Element (Type) Selector</h4>
                    <p><strong>Definition:</strong> Selects all elements of the specified type</p>
                    <pre className="mb-2"><code>{`/* Selects all <h1> elements */
h1 {
  color: blue;
}`}</code></pre>
                    <div className="example-box">
                      <h4>Example:</h4>
                      <p>This would style all <code>&lt;h1&gt;</code> elements on the page blue.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-2-circle"></i> Class Selector (.)</h4>
                    <p><strong>Definition:</strong> Selects elements with the specified class attribute</p>
                    <pre className="mb-2"><code>{`/* Selects elements with class="my-class" */
.my-class {
  color: red;
}`}</code></pre>
                    <div className="example-box">
                      <h4>Example:</h4>
                      <pre><code>{`<p class="my-class">This text would be red</p>
<div class="my-class other-class">This would also be red</div>`}</code></pre>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-3-circle"></i> ID Selector (#)</h4>
                    <p><strong>Definition:</strong> Selects the single element with the specified id attribute</p>
                    <pre className="mb-2"><code>{`/* Selects element with id="my-id" */
#my-id {
  color: green;
}`}</code></pre>
                    <div className="example-box">
                      <h4>Example:</h4>
                      <pre><code>{`<div id="my-id">This would be green</div>`}</code></pre>
                      <p><strong>Note:</strong> IDs should be unique in a document.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-4-circle"></i> Group Selector (,)</h4>
                    <p><strong>Definition:</strong> Selects multiple elements to apply the same styles</p>
                    <pre className="mb-2"><code>{`/* Selects h1, h2, and h3 elements */
h1, h2, h3 {
  color: purple;
  font-family: Arial, sans-serif;
}`}</code></pre>
                    <div className="example-box">
                      <h4>Example:</h4>
                      <p>This would apply the same styles to all <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, and <code>&lt;h3&gt;</code> elements.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-5-circle"></i> Universal Selector (*)</h4>
                    <p><strong>Definition:</strong> Selects all elements on the page</p>
                    <pre className="mb-2"><code>{`/* Applies to all elements */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`}</code></pre>
                    <div className="example-box">
                      <h4>Example:</h4>
                      <p>Commonly used for CSS resets to remove default browser styling.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-6-circle"></i> Attribute Selector ([])</h4>
                    <p><strong>Definition:</strong> Selects elements based on an attribute or attribute value</p>
                    <pre className="mb-2"><code>{`/* Selects elements with a title attribute */
[title] {
  border: 1px solid gray;
}

/* Selects <a> elements with target="_blank" */
a[target="_blank"] {
  color: red;
}`}</code></pre>
                    <div className="example-box">
                      <h4>Example:</h4>
                      <pre><code>{`<img src="image.jpg" title="A beautiful landscape">
<a href="https://example.com" target="_blank">External Link</a>`}</code></pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">Combinators</h3>
                <p>Combinators combine selectors to target specific relationships between elements:</p>

                <div className="row">
                  <div className="col-md-6">
                    <h5><i className="bi bi-arrow-right"></i> Descendant Selector (space)</h5>
                    <pre><code>{`/* Selects all <li> inside <nav> */
nav li {
  padding: 0.5rem;
}`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h5><i className="bi bi-arrow-right"></i> {`Child Selector (>)`}</h5>
                    <pre><code>{`/* Selects direct <li> children of <nav> */
nav > li {
  border-bottom: 1px solid #ddd;
}`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h5><i className="bi bi-plus"></i> Adjacent Sibling Selector (+)</h5>
                    <pre><code>{`/* Selects <p> immediately after <h2> */
h2 + p {
  margin-top: 0;
}`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h5><i className="bi bi-tilde"></i> General Sibling Selector (~)</h5>
                    <pre><code>{`/* Selects all <p> siblings after <h2> */
h2 ~ p {
  font-size: 0.9em;
}`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            <section id="units" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-rulers"></i> CSS Units</h2>
              <div className="property-card">
                <h3 className="h4">Absolute Units</h3>
                <p>Fixed-size units that appear as exactly that size:</p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Unit</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>px</code></td>
                      <td>Pixels (1px = 1/96th of 1in)</td>
                      <td><code>font-size: 16px;</code></td>
                    </tr>
                    <tr>
                      <td><code>cm</code></td>
                      <td>Centimeters</td>
                      <td><code>width: 10cm;</code></td>
                    </tr>
                    <tr>
                      <td><code>mm</code></td>
                      <td>Millimeters</td>
                      <td><code>margin: 5mm;</code></td>
                    </tr>
                    <tr>
                      <td><code>in</code></td>
                      <td>Inches (1in = 96px = 2.54cm)</td>
                      <td><code>padding: 0.5in;</code></td>
                    </tr>
                    <tr>
                      <td><code>pt</code></td>
                      <td>Points (1pt = 1/72 of 1in)</td>
                      <td><code>line-height: 12pt;</code></td>
                    </tr>
                    <tr>
                      <td><code>pc</code></td>
                      <td>Picas (1pc = 12pt)</td>
                      <td><code>font-size: 1.5pc;</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">Relative Units</h3>
                <p>Relative to another length property or viewport size:</p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Unit</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>em</code></td>
                      <td>Relative to the font-size of the element (2em = 2x current font size)</td>
                      <td><code>margin: 2em;</code></td>
                    </tr>
                    <tr>
                      <td><code>rem</code></td>
                      <td>Relative to font-size of the root element (html)</td>
                      <td><code>font-size: 1.2rem;</code></td>
                    </tr>
                    <tr>
                      <td><code>%</code></td>
                      <td>Percentage relative to parent element</td>
                      <td><code>width: 50%;</code></td>
                    </tr>
                    <tr>
                      <td><code>vw</code></td>
                      <td>1% of viewport width</td>
                      <td><code>width: 50vw;</code></td>
                    </tr>
                    <tr>
                      <td><code>vh</code></td>
                      <td>1% of viewport height</td>
                      <td><code>height: 100vh;</code></td>
                    </tr>
                    <tr>
                      <td><code>vmin</code></td>
                      <td>1% of viewport's smaller dimension</td>
                      <td><code>font-size: 4vmin;</code></td>
                    </tr>
                    <tr>
                      <td><code>vmax</code></td>
                      <td>1% of viewport's larger dimension</td>
                      <td><code>padding: 2vmax;</code></td>
                    </tr>
                    <tr>
                      <td><code>ch</code></td>
                      <td>Width of the "0" character in current font</td>
                      <td><code>max-width: 60ch;</code></td>
                    </tr>
                    <tr>
                      <td><code>ex</code></td>
                      <td>Height of the "x" character in current font</td>
                      <td><code>line-height: 2ex;</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="property-card">
                <h3 className="h4">When to Use Which Unit?</h3>
                <ul>
                  <li><strong>Layout:</strong> <code>%</code>, <code>vw</code>/<code>vh</code>, <code>rem</code></li>
                  <li><strong>Font sizes:</strong> <code>rem</code> (root-relative) or <code>em</code> (component-relative)</li>
                  <li><strong>Padding/margin:</strong> <code>rem</code> or <code>em</code></li>
                  <li><strong>Borders:</strong> <code>px</code> (usually fixed size)</li>
                  <li><strong>Media queries:</strong> <code>em</code> (better for accessibility)</li>
                </ul>
              </div>
            </section>

            <section id="text" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-type"></i> Text Properties</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-fonts"></i> Color</h4>
                    <p><strong>Definition:</strong> Sets the color of text</p>
                    <p><strong>Values:</strong></p>
                    <ul>
                      <li>Named colors: <code>blue, red, green</code></li>
                      <li>Hexadecimal: <code>#RRGGBB</code> or <code>#RGB</code></li>
                      <li>RGB/RGBA: <code>rgb(255, 0, 0)</code>, <code>rgba(255, 0, 0, 0.5)</code></li>
                      <li>HSL/HSLA: <code>hsl(120, 100%, 50%)</code>, <code>hsla(120, 100%, 50%, 0.3)</code></li>
                    </ul>
                    <pre><code>{`h1 {
  color: #4285f4; /* Google blue */
}

.error {
  color: rgb(220, 53, 69);
}`}</code></pre>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-text-center"></i> Text Alignment</h4>
                    <p><strong>Definition:</strong> Sets the horizontal alignment of text</p>
                    <p><strong>Values:</strong> <code>left, right, center, justify, start, end</code></p>
                    <pre><code>{`.center {
  text-align: center;
}

.justified {
  text-align: justify;
}`}</code></pre>
                    <div className="example-box">
                      <p style={{ textAlign: 'center' }}>Centered text</p>
                      <p style={{ textAlign: 'right' }}>Right-aligned text</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-text-decoration"></i> Text Decoration</h4>
                    <p><strong>Definition:</strong> Adds decoration to text (underline, overline, line-through)</p>
                    <p><strong>Properties:</strong></p>
                    <ul>
                      <li><code>text-decoration-line</code>: <code>overline, underline, line-through</code></li>
                      <li><code>text-decoration-color</code>: color value</li>
                      <li><code>text-decoration-style</code>: <code>solid, dashed, dotted, double, wavy</code></li>
                      <li><code>text-decoration-thickness</code>: length value</li>
                    </ul>
                    <pre><code>{`.underline {
  text-decoration: underline wavy red;
}

.strike {
  text-decoration-line: line-through;
  text-decoration-color: #999;
}`}</code></pre>
                    <div className="example-box">
                      <p style={{ textDecoration: 'underline wavy red' }}>Wavy red underline</p>
                      <p style={{ textDecorationLine: 'line-through', textDecorationColor: '#999' }}>Strikethrough text</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-text-indent-left"></i> Text Indent &amp; Spacing</h4>
                    <p><strong>Definition:</strong> Controls spacing between text elements</p>
                    <p><strong>Properties:</strong></p>
                    <ul>
                      <li><code>text-indent</code>: Indents the first line of text</li>
                      <li><code>letter-spacing</code>: Space between characters</li>
                      <li><code>word-spacing</code>: Space between words</li>
                      <li><code>line-height</code>: Space between lines of text</li>
                    </ul>
                    <pre><code>{`.indented {
  text-indent: 2em;
}

.spaced-letters {
  letter-spacing: 0.2em;
}

.double-spaced {
  line-height: 2;
}`}</code></pre>
                    <div className="example-box">
                      <p style={{ textIndent: '2em' }}>This paragraph has an indented first line.</p>
                      <p style={{ letterSpacing: '0.2em' }}>W I D E letters</p>
                      <p style={{ lineHeight: '2' }}>Double-spaced text<br />for better readability</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-text-uppercase"></i> Text Transform</h4>
                    <p><strong>Definition:</strong> Controls capitalization of text</p>
                    <p><strong>Values:</strong> <code>uppercase, lowercase, capitalize, none</code></p>
                    <pre><code>{`.uppercase {
  text-transform: uppercase;
}

.capitalized {
  text-transform: capitalize;
}`}</code></pre>
                    <div className="example-box">
                      <p style={{ textTransform: 'uppercase' }}>this text is uppercase</p>
                      <p style={{ textTransform: 'capitalize' }}>capitalize each word</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-droplet"></i> Text Shadow</h4>
                    <p><strong>Definition:</strong> Adds shadow to text</p>
                    <p><strong>Syntax:</strong> <code>text-shadow: h-shadow v-shadow blur-radius color;</code></p>
                    <pre><code>{`.shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.multiple-shadows {
  text-shadow: 1px 1px 2px black, 
               0 0 1em blue, 
               0 0 0.2em blue;
}`}</code></pre>
                    <div className="example-box">
                      <p style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Text with shadow</p>
                      <p style={{ textShadow: '1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue', color: 'white' }}>Fancy text effect</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="background" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-image"></i> Background Properties</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-palette"></i> Background Color</h4>
                    <p><strong>Definition:</strong> Sets the background color of an element</p>
                    <p><strong>Values:</strong> Any valid color value</p>
                    <pre><code>{`.bg-blue {
  background-color: #4285f4;
}

.transparent {
  background-color: rgba(255, 255, 255, 0.8);
}`}</code></pre>
                    <div className="example-box" style={{ backgroundColor: 'rgba(66, 133, 244, 0.2)' }}>
                      <p>Element with light blue background</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-image-fill"></i> Background Image</h4>
                    <p><strong>Definition:</strong> Sets one or more background images</p>
                    <p><strong>Values:</strong> <code>url(), linear-gradient(), radial-gradient()</code></p>
                    <pre><code>{`.hero {
  background-image: url("hero.jpg");
}

.gradient {
  background-image: linear-gradient(to right, red, yellow);
}`}</code></pre>
                    <div className="example-box" style={{ backgroundImage: 'linear-gradient(to right, #ff7e5f, #feb47b)', color: 'white' }}>
                      <p>Gradient background</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-repeat"></i> Background Repeat</h4>
                    <p><strong>Definition:</strong> Defines how background images are repeated</p>
                    <p><strong>Values:</strong> <code>repeat, repeat-x, repeat-y, no-repeat, space, round</code></p>
                    <pre><code>{`.no-repeat {
  background-repeat: no-repeat;
}

.tiled {
  background-repeat: repeat;
}`}</code></pre>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-pin-angle"></i> Background Attachment</h4>
                    <p><strong>Definition:</strong> Determines if background scrolls with content</p>
                    <p><strong>Values:</strong> <code>scroll, fixed, local</code></p>
                    <pre><code>{`.fixed-bg {
  background-attachment: fixed;
}`}</code></pre>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-arrows-move"></i> Background Position</h4>
                    <p><strong>Definition:</strong> Sets the starting position of a background image</p>
                    <p><strong>Values:</strong> Keywords (<code>top, center, bottom, left, right</code>) or coordinates</p>
                    <pre><code>{`.center-bg {
  background-position: center;
}

.custom-pos {
  background-position: 20% 50%;
}`}</code></pre>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-arrows-fullscreen"></i> Background Size</h4>
                    <p><strong>Definition:</strong> Specifies the size of background images</p>
                    <p><strong>Values:</strong> <code>auto, cover, contain</code> or specific dimensions</p>
                    <pre><code>{`.cover {
  background-size: cover;
}

.dimensions {
  background-size: 100px 50px;
}`}</code></pre>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-file-earmark-code"></i> Background Shorthand</h4>
                    <p><strong>Definition:</strong> Combines all background properties</p>
                    <p><strong>Order:</strong> <code>color image repeat attachment position/size</code></p>
                    <pre><code>{`.hero {
  background: #333 url("hero.jpg") no-repeat fixed center/cover;
}`}</code></pre>
                    <p><strong>Note:</strong> <code>background-size</code> must come after <code>background-position</code> and be separated by a slash</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-clipboard"></i> Background Clip</h4>
                    <p><strong>background-clip:</strong> Determines the background painting area</p>
                    <p><strong>Values:</strong> <code>border-box, padding-box, content-box, text</code></p>
                    <pre><code>{`.text-bg {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            <section id="border" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-square"></i> Border Properties</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-border-width"></i> Border Width</h4>
                    <p><strong>Definition:</strong> Sets the width of an element's border</p>
                    <p><strong>Values:</strong> <code>thin, medium, thick</code> or length value</p>
                    <pre><code>{`.thick-border {
  border-width: 5px;
}

.asymmetrical {
  border-width: 1px 2px 3px 4px; /* top right bottom left */
}`}</code></pre>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-border-style"></i> Border Style</h4>
                    <p><strong>Definition:</strong> Sets the style of an element's border</p>
                    <p><strong>Values:</strong> <code>none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset</code></p>
                    <pre><code>{`.dashed {
  border-style: dashed;
}

.mixed {
  border-style: solid dotted dashed double;
}`}</code></pre>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-palette"></i> Border Color</h4>
                    <p><strong>Definition:</strong> Sets the color of an element's border</p>
                    <p><strong>Values:</strong> Any valid color value</p>
                    <pre><code>{`.red-border {
  border-color: red;
}

.multi-color {
  border-color: red green blue yellow;
}`}</code></pre>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-border-outer"></i> Border Radius</h4>
                    <p><strong>Definition:</strong> Rounds the corners of an element's border</p>
                    <p><strong>Values:</strong> Length or percentage values</p>
                    <pre><code>{`.rounded {
  border-radius: 10px;
}

.circle {
  border-radius: 50%;
}

.elliptical {
  border-radius: 10px 20px 30px 40px / 20px 30px 40px 50px;
}`}</code></pre>
                    <div className="example-box">
                      <div style={{ borderRadius: '10px', border: '2px solid #4285f4', padding: '10px', display: 'inline-block' }}>Rounded corners</div>
                      <div style={{ borderRadius: '50%', border: '2px solid #4285f4', width: '50px', height: '50px', display: 'inline-block', marginLeft: '10px' }}></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-file-earmark-code"></i> Border Shorthand</h4>
                    <p><strong>Definition:</strong> Combines border properties in one declaration</p>
                    <p><strong>Order:</strong> <code>width style color</code></p>
                    <pre><code>{`.simple-border {
  border: 2px solid #333;
}

.sides {
  border-top: 1px dashed red;
  border-right: 2px dotted green;
  border-bottom: 3px double blue;
  border-left: 4px groove purple;
}`}</code></pre>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-box-shadow"></i> Box Shadow</h4>
                    <p><strong>Definition:</strong> Adds shadow effects around an element's frame</p>
                    <p><strong>Syntax:</strong> <code>box-shadow: h-offset v-offset blur spread color inset;</code></p>
                    <pre><code>{`.shadow {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}
`}</code></pre>
                    <div className="example-box">
                      <div style={{ boxShadow: '5px 5px 10px rgba(0,0,0,0.3)', padding: '10px', display: 'inline-block' }}>Box with shadow</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="font" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-fonts"></i> Font Properties</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-fonts"></i> Font Family</h4>
                    <p><strong>Definition:</strong> Specifies the font for an element</p>
                    <p><strong>Values:</strong> Font names or generic families</p>
                    <pre><code>{`body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.monospace {
  font-family: "Courier New", monospace;
}`}</code></pre>
                    <p><strong>Best Practice:</strong> Always include a generic family as fallback</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-textarea-resize"></i> Font Size</h4>
                    <p><strong>Definition:</strong> Sets the size of the font</p>
                    <p><strong>Values:</strong> Absolute or relative units</p>
                    <pre><code>{`h1 {
  font-size: 2rem; /* Relative to root */
}

.small {
  font-size: 0.875em; /* Relative to parent */
}`}</code></pre>
                    <div className="example-box">
                      <p style={{ fontSize: '2rem' }}>Large text</p>
                      <p style={{ fontSize: '0.875em' }}>Small text</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-type-italic"></i> Font Style</h4>
                    <p><strong>Definition:</strong> Specifies italic or oblique font faces</p>
                    <p><strong>Values:</strong> <code>italic, oblique, normal</code></p>
                    <pre><code>{`.italic {
  font-style: italic;
}

.oblique {
  font-style: oblique 14deg; /* Angle optional */
}`}</code></pre>
                    <div className="example-box">
                      <p style={{ fontStyle: 'italic' }}>Italic text</p>
                      <p style={{ fontStyle: 'oblique' }}>Oblique text</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-type-bold"></i> Font Weight</h4>
                    <p><strong>Definition:</strong> Sets the thickness of the font</p>
                    <p><strong>Values:</strong> <code>normal, bold, lighter, bolder</code> or <code>100-900</code></p>
                    <pre><code>{`.bold {
  font-weight: bold;
}

.light {
  font-weight: 300;
}`}</code></pre>
                    <div className="example-box">
                      <p style={{ fontWeight: 'bold' }}>Bold text</p>
                      <p style={{ fontWeight: '300' }}>Light text</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-textarea-t"></i> Font Variant</h4>
                    <p><strong>Definition:</strong> Controls small-caps and other variants</p>
                    <p><strong>Values:</strong> <code>normal, small-caps, all-small-caps</code></p>
                    <pre><code>{`.small-caps {
  font-variant: small-caps;
}`}</code></pre>
                    <div className="example-box">
                      <p style={{ fontVariant: 'small-caps' }}>Small Caps Text</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-file-earmark-code"></i> Font Shorthand</h4>
                    <p><strong>Definition:</strong> Combines font properties in one declaration</p>
                    <p><strong>Order:</strong> <code>font: style variant weight size/line-height family;</code></p>
                    <pre><code>{`.combined {
  font: italic small-caps bold 1.2em/1.5 "Arial", sans-serif;
}`}</code></pre>
                    <p><strong>Note:</strong> <code>size</code> and <code>family</code> are required</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-google"></i> Google Fonts</h4>
                    <p><strong>Using Google Fonts:</strong></p>
                    <pre><code>{`<!-- In your HTML head -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

/* In your CSS */
body {
  font-family: 'Roboto', sans-serif;
}`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            <section id="box-model" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-border"></i> Box Model</h2>
              <div className="property-card">
                <h3 className="h4">Understanding the Box Model</h3>
                <p>Every element in CSS is a rectangular box with the following properties:</p>
                <ol>
                  <li><strong>Content:</strong> The actual content of the box (text, image, etc.)</li>
                  <li><strong>Padding:</strong> Clears an area around the content (inside the border)</li>
                  <li><strong>Border:</strong> A border that goes around the padding and content</li>
                  <li><strong>Margin:</strong> Clears an area outside the border (transparent)</li>
                </ol>
                <div className="text-center my-3">
                  <img src="https://acil.in/wp-content/uploads/2021/11/boxmodel.jpg" alt="CSS Box Model" className="img-fluid" style={{ maxWidth: '400px' }} />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-arrows-angle-expand"></i> Height and Width</h4>
                    <p><strong>Definition:</strong> Sets the height and width of an element's content area</p>
                    <p><strong>Values:</strong> Length values, percentages, or <code>auto</code></p>
                    <pre><code>{`.box {
  width: 300px;
  height: 200px;
}

.percent {
  width: 50%;
}

.viewport {
  width: 50vw;
  height: 50vh;
}`}</code></pre>
                    <p><strong>Note:</strong> By default, these properties set the size of the content box</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-border-outer"></i> Margin</h4>
                    <p><strong>Definition:</strong> Sets the space outside the border (between elements)</p>
                    <p><strong>Values:</strong> Length values, percentages, or <code>auto</code></p>
                    <pre><code>{`.margin-example {
  margin: 20px; /* All sides */
  margin: 10px 20px; /* Top/bottom, left/right */
  margin: 10px 20px 30px 40px; /* Top, right, bottom, left */
}

.auto-margin {
  margin: 0 auto; /* Centering block elements */
}`}</code></pre>
                    <div className="example-box">
                      <div style={{ margin: '20px', border: '1px solid #4285f4', padding: '10px' }}>Element with margin</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-border-inner"></i> Padding</h4>
                    <p><strong>Definition:</strong> Sets the space between the content and the border</p>
                    <p><strong>Values:</strong> Length values or percentages</p>
                    <pre><code>{`.padding-example {
  padding: 15px; /* All sides */
  padding: 10px 20px; /* Top/bottom, left/right */
  padding: 10px 20px 30px 40px; /* Top, right, bottom, left */
}`}</code></pre>
                    <div className="example-box">
                      <div style={{ padding: '20px', border: '1px solid #4285f4', backgroundColor: '#f0f8ff' }}>Element with padding</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-border-all"></i> Outline</h4>
                    <p><strong>Definition:</strong> Draws a line outside the border (doesn't affect layout)</p>
                    <p><strong>Values:</strong> Similar to border but with no directional properties</p>
                    <pre><code>{`.outline-example {
  outline: 3px dashed red;
  outline-offset: 5px; /* Space between border and outline */
}`}</code></pre>
                    <div className="example-box">
                      <div style={{ outline: '3px dashed red', outlineOffset: '5px', border: '1px solid #4285f4', padding: '10px' }}>Element with outline</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-fullscreen"></i> Overflow</h4>
                    <p><strong>Definition:</strong> Controls what happens to content that overflows its box</p>
                    <p><strong>Values:</strong> <code>visible, hidden, scroll, auto</code></p>
                    <pre><code>{`.scroll-box {
  width: 200px;
  height: 100px;
  overflow: auto;
}`}</code></pre>
                    <div className="example-box" style={{ width: '200px', height: '100px', overflow: 'auto', border: '1px solid #4285f4' }}>
                      <p>This is some content that will overflow the container. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="table" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-table"></i> Table Properties</h2>

              <div className="property-card">
                <h4 className="h5"><i className="bi bi-border-all"></i> Border Collapse</h4>
                <p><strong>Definition:</strong> Controls whether table borders are collapsed into a single border or separated</p>
                <p><strong>Values:</strong> <code>collapse, separate</code></p>
                <pre><code>{`table {
  border-collapse: collapse;
}`}</code></pre>
              </div>

              <div className="property-card">
                <h4 className="h5"><i className="bi bi-border-width"></i> Border Spacing</h4>
                <p><strong>Definition:</strong> Sets the distance between borders of adjacent cells (only when border-collapse is separate)</p>
                <p><strong>Values:</strong> Length values</p>
                <pre><code>{`table {
  border-collapse: separate;
  border-spacing: 10px 5px; /* horizontal vertical */
}`}</code></pre>
              </div>

              <pre className="mb-3"><code>{`/* Complete table styling example */
table {
  width: 80%;
  margin: 20px auto;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  position: sticky;
  top: 0;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
}

h1 {
  font-weight: bold;
  margin-bottom: 10px;
}`}</code></pre>

              <pre className="mb-3"><code>{`<!-- Example HTML table -->
<table>
  <h1>Monthly Sales Report</h1>
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
      <th>Profit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$10,000</td>
      <td>$3,000</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$12,000</td>
      <td>$3,600</td>
    </tr>
    <tr>
      <td>March</td>
      <td>$15,000</td>
      <td>$4,500</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$37,000</td>
      <td>$11,100</td>
    </tr>
  </tfoot>
</table>`}</code></pre>
            </section>

            <section id="list" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-list-ul"></i> List Properties</h2>

              <div className="row">
                <div className="col-md-4">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-list-ol"></i> List Style Type</h4>
                    <p><strong>Definition:</strong> Specifies the appearance of list item markers</p>
                    <p><strong>Values for UL:</strong> <code>disc, circle, square, none</code></p>
                    <p><strong>Values for OL:</strong> <code>decimal, lower-alpha, upper-alpha, lower-roman, upper-roman</code></p>
                    <pre><code>{`ul {
  list-style-type: square;
}

ol {
  list-style-type: upper-roman;
}`}</code></pre>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-list-nested"></i> List Style Position</h4>
                    <p><strong>Definition:</strong> Specifies if list item markers appear inside or outside content flow</p>
                    <p><strong>Values:</strong> <code>inside, outside</code></p>
                    <pre><code>{`ul {
  list-style-position: inside;
}`}</code></pre>
                    <div className="example-box">
                      <ul style={{ listStylePosition: 'inside' }}>
                        <li>Inside positioned item</li>
                        <li>Another item</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-image"></i> List Style Image</h4>
                    <p><strong>Definition:</strong> Replaces list item markers with an image</p>
                    <p><strong>Values:</strong> <code>url(), none</code></p>
                    <pre><code>{`ul {
  list-style-image: url('bullet.png');
}`}</code></pre>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="property-card">
                    <h4 className="h5"><i className="bi bi-file-earmark-code"></i> List Style Shorthand</h4>
                    <p><strong>Definition:</strong> Combines all list properties in one declaration</p>
                    <p><strong>Order:</strong> <code>type position image</code></p>
                    <pre><code>{`ul {
  list-style: square inside url('bullet.png');
}`}</code></pre>
                  </div>
                </div>
              </div>

              <pre className="mb-3"><code>{`Example
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>PHP</li>
    <li>Python</li>
</ul>

list-style-type: lower-roman;
list-style-position: inside;
list-style-image: url('https://www.w3schools.com/cssref/sqpurple.gif');`}</code></pre>
            </section>

            <section id="display" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-layout-three-columns"></i> Display Properties</h2>

              <div className="property-card">
                <h3 className="h4">Display Property</h3>
                <p><strong>Definition:</strong> Specifies the display behavior of an element</p>
                <p><strong>Common Values:</strong></p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Value</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>block</code></td>
                      <td>Element starts on a new line and takes full width</td>
                    </tr>
                    <tr>
                      <td><code>inline</code></td>
                      <td>Element flows with text (no line breaks, width/height ignored)</td>
                    </tr>
                    <tr>
                      <td><code>inline-block</code></td>
                      <td>Flows like inline but respects width/height</td>
                    </tr>
                    <tr>
                      <td><code>none</code></td>
                      <td>Element is removed from the document flow</td>
                    </tr>
                    <tr>
                      <td><code>flex</code></td>
                      <td>Element becomes a flex container</td>
                    </tr>
                    <tr>
                      <td><code>grid</code></td>
                      <td>Element becomes a grid container</td>
                    </tr>
                  </tbody>
                </table>
                <pre><code>{`.block-example {
  display: block;
}

.inline-example {
  display: inline;
  width: 100px; /* Ignored */
}

.inline-block-example {
  display: inline-block;
  width: 100px; /* Respected */
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Visibility Property</h3>
                <p><strong>Definition:</strong> Controls whether an element is visible</p>
                <p><strong>Values:</strong> <code>visible, hidden, collapse</code></p>
                <pre><code>{`.hidden {
  visibility: hidden; /* Element still takes up space */
}

.collapsed-row {
  visibility: collapse; /* For table rows/columns */
}`}</code></pre>
                <p><strong>Difference from display:none:</strong> <code>visibility:hidden</code> leaves space where the element would be</p>
              </div>

              <div className="property-card">
                <h3 className="h4">Opacity Property</h3>
                <p><strong>Definition:</strong> Sets the opacity level for an element</p>
                <p><strong>Values:</strong> <code>0.0</code> (transparent) to <code>1.0</code> (opaque)</p>
                <pre><code>{`.semi-transparent {
  opacity: 0.5;
}`}</code></pre>
                <div className="example-box">
                  <div style={{ opacity: '0.5', backgroundColor: '#4285f4', color: 'white', padding: '10px' }}>50% transparent element</div>
                </div>
              </div>
            </section>

            <section id="flexbox" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-distribute-vertical"></i> Flexbox</h2>

              <div className="property-card">
                <h3 className="h4">Flexbox Basics</h3>
                <p>Flexbox is a one-dimensional layout method for arranging items in rows or columns.</p>
                <div className="text-center my-3">
                  <img src="https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg" alt="Flexbox container" className="img-fluid" style={{ maxWidth: '500px' }} />
                </div>
                <p>To create a flex container:</p>
                <pre><code>{`.container {
  display: flex; /* or inline-flex */
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Flex Container Properties</h3>
                <div className="row">
                  <div className="col-md-6">
                    <h5><i className="bi bi-arrow-left-right"></i> Flex Direction</h5>
                    <p><code>flex-direction: row, row-reverse, column, column-reverse;</code></p>
                    <pre><code>{`.container {
  flex-direction: row; /* default */
}`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h5><i className="bi bi-wrap"></i> Flex Wrap</h5>
                    <p><code>flex-wrap: nowrap, wrap, wrap-reverse;</code></p>
                    <pre><code>{`.container {
  flex-wrap: wrap;
}`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h5><i className="bi bi-justify"></i> Justify Content</h5>
                    <p><code>justify-content: flex-start, flex-end, center, space-between, space-around, space-evenly;</code></p>
                    <pre><code>{`.container {
  justify-content: center;
}`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h5><i className="bi bi-align-top"></i> Align Items</h5>
                    <p><code>align-items: stretch, flex-start, flex-end, center, baseline;</code></p>
                    <pre><code>{`.container {
  align-items: center;
}`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h5><i className="bi bi-layout-sidebar"></i> Gap</h5>
                    <p><code>gap, row-gap, column-gap: length values;</code></p>
                    <pre><code>{`.container {
  gap: 10px;
  row-gap: 15px;
  column-gap: 20px;
}`}</code></pre>
                  </div>
                </div>
              </div>


              <div className="property-card">
                <h3 className="h4">Practical Flexbox Examples</h3>
                <pre><code>{`/* Navigation bar */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #333;
}

/* Card layout */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Centering content */
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`}</code></pre>
              </div>
            </section>

            <section id="grid" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-grid-3x3"></i> CSS Grid</h2>

              <div className="property-card">
                <h3 className="h4">Grid Basics</h3>
                <p>CSS Grid is a two-dimensional layout system for the web.</p>
                <div className="text-center my-3">
                  <img src="https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-template-areas.svg" alt="CSS Grid" className="img-fluid" style={{ maxWidth: '500px' }} />
                </div>
                <p>To create a grid container:</p>
                <pre><code>{`.container {
  display: grid; /* or inline-grid */
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Grid Container Properties</h3>
                <div className="row">
                  <div className="col-md-6">
                    <h5><i className="bi bi-grid-3x3"></i> Grid Template Columns/Rows</h5>
                    <p><code>grid-template-columns: track sizes;</code></p>
                    <p><code>grid-template-rows: track sizes;</code></p>
                    <pre><code>{`.container {
  grid-template-columns: 100px 1fr 2fr;
  grid-template-rows: auto 200px;
}`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h5><i className="bi bi-distribute-vertical"></i> Justify Content/Align Items</h5>
                    <p><code>justify-content: start, end, center, stretch, space-around, space-between, space-evenly;</code></p>
                    <p><code>align-items: start, end, center, top;</code></p>
                    <pre><code>{`.container {
  justify-content: space-between;
}`}</code></pre>
                  </div>
                  <div className="col-md-6">
                    <h5><i className="bi bi-layout-sidebar"></i> Gap</h5>
                    <p><code>gap, row-gap, column-gap: length values;</code></p>
                    <pre><code>{`.container {
  gap: 10px;
  row-gap: 15px;
  column-gap: 20px;
}`}</code></pre>
                  </div>
                </div>
              </div>

              <div className="property-card">
                <h3 className="h4">Practical Grid Examples</h3>
                <pre><code>{`.container{
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    gap: 30px;
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Grid vs Flexbox</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Grid</th>
                      <th>Flexbox</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dimensions</td>
                      <td>Two-dimensional (rows and columns)</td>
                      <td>One-dimensional (rows OR columns)</td>
                    </tr>
                    <tr>
                      <td>Control</td>
                      <td>Explicit control over rows and columns</td>
                      <td>Content-based flow</td>
                    </tr>
                    <tr>
                      <td>Use Cases</td>
                      <td>Overall page layouts, complex designs</td>
                      <td>Small-scale layouts, content distribution</td>
                    </tr>
                    <tr>
                      <td>Overlap</td>
                      <td>Easy to overlap items</td>
                      <td>Items don't naturally overlap</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="position" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrows-move"></i> Position &amp; Other Properties</h2>

              <div className="property-card">
                <h3 className="h4">Position Property</h3>
                <p><strong>Definition:</strong> Specifies how an element is positioned in the document</p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Value</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>static</code></td>
                      <td>Default. Element follows normal document flow.</td>
                    </tr>
                    <tr>
                      <td><code>relative</code></td>
                      <td>Positioned relative to its normal position (using top, right, bottom, left).</td>
                    </tr>
                    <tr>
                      <td><code>absolute</code></td>
                      <td>Positioned relative to nearest positioned ancestor (not static).</td>
                    </tr>
                    <tr>
                      <td><code>fixed</code></td>
                      <td>Positioned relative to viewport (stays fixed during scrolling).</td>
                    </tr>
                    <tr>
                      <td><code>sticky</code></td>
                      <td>Hybrid of relative and fixed. Sticks when scrolling reaches threshold.</td>
                    </tr>
                  </tbody>
                </table>
                <pre><code>{`.relative-box {
  position: relative;
  top: 20px;
  left: 30px;
}

.absolute-box {
  position: absolute;
  top: 0;
  right: 0;
}

.fixed-header {
  position: fixed;
  top: 0;
  width: 100%;
}

.sticky-nav {
  position: sticky;
  top: 0;
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Z-Index Property</h3>
                <p><strong>Definition:</strong> Controls the stacking order of positioned elements</p>
                <p><strong>Values:</strong> Integer (higher numbers appear in front)</p>
                <pre><code>{`.overlay {
  position: absolute;
  z-index: 10;
}

.modal {
  position: fixed;
  z-index: 100;
}`}</code></pre>
                <p><strong>Note:</strong> Only works on positioned elements (non-static)</p>
              </div>

              <div className="property-card">
                <h3 className="h4">Float Property</h3>
                <p><strong>Definition:</strong> Positions an element to the left or right of its container</p>
                <p><strong>Values:</strong> <code>left, right, none</code></p>
                <pre><code>{`.image-float {
  float: left;
  margin-right: 20px;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}`}</code></pre>
                <p><strong>Note:</strong> Floats were traditionally used for layouts but have been largely replaced by Flexbox and Grid.</p>
              </div>

            </section>

            <section id="media" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-display"></i> Media Queries</h2>

              <div className="property-card">
                <h3 className="h4">Media Query Basics</h3>
                <p>Media queries allow you to apply CSS styles depending on device characteristics.</p>
                <pre><code>{`/* Basic syntax */
@media media-type and (media-feature) {
  /* CSS rules */
}`}</code></pre>
                <p><strong>Common Media Types:</strong> <code>all, screen, print, speech</code></p>
                <p><strong>Common Media Features:</strong> <code>width, height, orientation, resolution, hover</code></p>
              </div>

              <div className="property-card">
                <h3 className="h4">Responsive Design Breakpoints</h3>
                <pre><code>{`/* Mobile-first approach */
/* Default styles (mobile) */
.container {
  padding: 10px;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .container {
    padding: 15px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .container {
    padding: 25px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .container {
    padding: 30px;
  }
}`}</code></pre>
              </div>
            </section>

            <section id="pseudo" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-magic"></i> Pseudo Classes &amp; Elements</h2>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-pseudo"></i> Pseudo Classes</h3>
                <p><strong>Definition:</strong> A pseudo-class is used to define a special state of an element.</p>
                <pre className="mb-3"><code>{`selector:pseudo-class {
    property: value;
}`}</code></pre>

                <h5>Common Pseudo-classes:</h5>
                <div className="row">
                  <div className="col-md-6">
                    <h6>Link-related</h6>
                    <ul>
                      <li><code>:link</code> - Unvisited links</li>
                      <li><code>:visited</code> - Visited links</li>
                      <li><code>:hover</code> - When mouse over element</li>
                      <li><code>:active</code> - When element is being activated</li>
                      <li><code>:focus</code> - When element has focus</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6>Structural</h6>
                    <ul>
                      <li><code>:first-child</code> - First child element</li>
                      <li><code>:last-child</code> - Last child element</li>
                      <li><code>:nth-child(n)</code> - nth child element</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6>Form-related</h6>
                    <ul>
                      <li><code>:checked</code> - Checked radio/checkbox</li>
                      <li><code>:disabled</code> - Disabled form elements</li>
                      <li><code>:enabled</code> - Enabled form elements</li>
                      <li><code>:valid</code> - Form elements with valid content</li>
                      <li><code>:invalid</code> - Form elements with invalid content</li>
                    </ul>
                  </div>
                </div>

                <h5>Examples:</h5>
                <pre><code>{`/* Link states */
a:link { color: blue; }
a:visited { color: purple; }
a:hover { text-decoration: underline; }
a:active { color: red; }

/* Form states */
input:focus { border-color: blue; }
input:invalid { border-color: red; }

/* Structural */
li:first-child { font-weight: bold; }
tr:nth-child(even) { background: #f2f2f2; }`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-pseudo-element"></i> Pseudo Elements</h3>
                <p><strong>Definition:</strong> A CSS pseudo-element is used to style specific parts of an element.</p>
                <pre className="mb-3"><code>{`selector::pseudo-element {
    property: value;
}`}</code></pre>

                <h5>Common Pseudo-elements:</h5>
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li><code>::before</code> - Inserts content before element</li>
                      <li><code>::after</code> - Inserts content after element</li>
                      <li><code>::first-letter</code> - Styles first letter of text</li>
                      <li><code>::first-line</code> - Styles first line of text</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li><code>::selection</code> - Styles selected text</li>
                      <li><code>::marker</code> - Styles list markers</li>
                      <li><code>::placeholder</code> - Styles input placeholder text</li>
                    </ul>
                  </div>
                </div>

                <h5>Examples:</h5>
                <pre><code>{`/* Adding content */
.blockquote::before {
  content: "“";
  font-size: 3em;
  line-height: 0;
}

/* Styling parts */
p::first-letter {
  font-size: 2em;
  float: left;
}

::selection {
  background: yellow;
  color: black;
}

/* Custom list markers */
li::marker {
  content: "✓ ";
  color: green;
}`}</code></pre>

                <h5>Important Notes:</h5>
                <ul>
                  <li>Pseudo-elements require the <code>content</code> property to appear</li>
                  <li>Double colon syntax (<code>::</code>) is modern standard (single colon works for backward compatibility)</li>
                  <li>Pseudo-elements create virtual elements that don't exist in the DOM</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Combined Examples</h3>
                <pre><code>{`/* Tooltip with ::after */
.tooltip:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  background: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
}

/* Custom checkbox with ::before */
.checkbox input[type="checkbox"] + label::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  margin-right: 5px;
}

.checkbox input[type="checkbox"]:checked + label::before {
  content: "✓";
  background: #4285f4;
  color: white;
}

/* Fancy first paragraph */
article > p:first-of-type::first-line {
  font-weight: bold;
  color: #4285f4;
}`}</code></pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>CSS Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default CssNotes;