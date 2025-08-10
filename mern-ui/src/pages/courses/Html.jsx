import React from 'react';

function Html() {
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

          .example-box {
            border: 1px solid #dee2e6;
            border-radius: 0.25rem;
            padding: 1rem;
            margin: 1rem 0;
            background-color: #f8f9fa;
          }

          .example-title {
            font-weight: 600;
            margin-bottom: 0.5rem;
          }

          .img-example {
            max-width: 100%;
            height: auto;
            border: 1px solid #ddd;
            margin: 0.5rem 0;
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
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-html"></i> HTML Notes</h1>
          <p className="lead">Your Comprehensive Guide to HyperText Markup Language</p>
        </div>
      </header>
      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> What is HTML?</a>
              <a className="nav-link" href="#usage"><i className="bi bi-question-circle"></i> How to Use HTML</a>
              <a className="nav-link" href="#versions"><i className="bi bi-clock-history"></i> HTML Versions</a>
              <a className="nav-link" href="#structure"><i className="bi bi-diagram-3"></i> HTML Structure</a>
              <a className="nav-link" href="#tags"><i className="bi bi-tags"></i> Tags & Attributes</a>
              <a className="nav-link" href="#heading-tags"><i className="bi bi-type-h1"></i> Heading Tags</a>
              <a className="nav-link" href="#formatting-tags"><i className="bi bi-type-bold"></i> Formatting Tags</a>
              <a className="nav-link" href="#logical-tags"><i className="bi bi-code-square"></i> Logical Tags</a>
              <a className="nav-link" href="#urls"><i className="bi bi-link"></i> URLs</a>
              <a className="nav-link" href="#links"><i className="bi bi-link-45deg"></i> HTML Links</a>
              <a className="nav-link" href="#images"><i className="bi bi-image"></i> HTML Images</a>
              <a className="nav-link" href="#tables"><i className="bi bi-table"></i> HTML Tables</a>
              <a className="nav-link" href="#lists"><i className="bi bi-list-ul"></i> HTML Lists</a>
              <a className="nav-link" href="#forms"><i className="bi bi-input-cursor-text"></i> HTML Forms</a>
              <a className="nav-link" href="#iframe"><i className="bi bi-window"></i> Iframe Tag</a>
              <a className="nav-link" href="#class-id"><i className="bi bi-pencil-square"></i> Class & ID</a>
              <a className="nav-link" href="#elements"><i className="bi bi-layout-text-sidebar"></i> Block & Inline Elements</a>
              <a className="nav-link" href="#semantic"><i className="bi bi-layout-text-sidebar-reverse"></i> Semantic Elements</a>
              <a className="nav-link" href="#layout"><i className="bi bi-layout-wtf"></i> Webpage Layout</a>
              <a className="nav-link" href="#void-elements"><i className="bi bi-file-minus"></i> Void Elements</a>
              <a className="nav-link" href="#quotations"><i className="bi bi-chat-quote"></i> Quotations</a>
              <a className="nav-link" href="#marquee"><i className="bi bi-arrow-left-right"></i> Marquee Tag</a>
              <a className="nav-link" href="#pre"><i className="bi bi-file-text"></i> Pre Tag</a>
              <a className="nav-link" href="#entities"><i className="bi bi-symbol"></i> HTML Entities</a>
              <a className="nav-link" href="#multimedia"><i className="bi bi-play-circle"></i> Multimedia</a>
              <a className="nav-link" href="#comments"><i className="bi bi-chat-left-text"></i> Comments</a>
            </nav>
          </aside>
          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> What is HTML?</h2>
              <p className="mb-3">HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It defines the structure and layout of web content by using a system of tags and attributes.</p>

              <div className="example-box">
                <div className="example-title">Key Characteristics:</div>
                <ul>
                  <li><strong>HyperText:</strong> Allows linking between web pages</li>
                  <li><strong>Markup Language:</strong> Uses tags to define elements</li>
                  <li><strong>Platform Independent:</strong> Works across different devices and browsers</li>
                  <li><strong>Interpreted Language:</strong> Processed by web browsers</li>
                </ul>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-file-earmark-text"></i> Types of Webpages</h3>
              <ul className="mb-3">
                <li><strong>Static Webpage:</strong> Content remains the same unless manually changed (HTML files)</li>
                <li><strong>Dynamic Webpage:</strong> Content changes based on user interaction or data (PHP, ASP, etc.)</li>
              </ul>

              <div className="example-box">
                <div className="example-title">Static vs Dynamic Example:</div>
                <p><strong>Static:</strong> A company's "About Us" page that rarely changes</p>
                <p><strong>Dynamic:</strong> A news website that updates content daily or a shopping cart that changes based on user selections</p>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-check-circle"></i> Advantages</h3>
              <ul className="mb-3">
                <li>Easy to learn and use</li>
                <li>Fast loading as it's client-side</li>
                <li>Supported by all browsers</li>
                <li>Free to use (no license needed)</li>
                <li>Integrates easily with other languages (CSS, JavaScript)</li>
              </ul>

              <h3 className="h4 mb-2"><i className="bi bi-x-circle"></i> Disadvantages</h3>
              <ul className="mb-3">
                <li>Limited to creating static content without CSS/JavaScript</li>
                <li>Browser compatibility issues with older versions</li>
                <li>Security features are limited</li>
                <li>Complex pages require lots of code</li>
              </ul>
            </section>

            <section id="usage" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-question-circle"></i> How to Use HTML</h2>
              <p className="mb-3">HTML can be written in any text editor, specialized HTML editor, or IDE. The basic workflow is:</p>

              <ol className="mb-3">
                <li>Create a new file with <code>.html</code> extension</li>
                <li>Write HTML code</li>
                <li>Save the file</li>
                <li>Open it in a web browser</li>
              </ol>

              <div className="example-box">
                <div className="example-title">Development Tools:</div>
                <ul>
                  <li><strong>Text Editors:</strong> Notepad, TextEdit, Sublime Text, Atom</li>
                  <li><strong>IDEs:</strong> Visual Studio Code, WebStorm, Brackets</li>
                  <li><strong>Online Editors:</strong> CodePen, JSFiddle, CodeSandbox</li>
                  <li><strong>Browsers:</strong> Chrome, Firefox, Edge, Safari</li>
                </ul>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-lightning"></i> Quick Start Example</h3>
              <pre className="mb-3"><code>{`<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>`}</code></pre>

              <div className="example-box">
                <div className="example-title">Browser Developer Tools:</div>
                <p>Modern browsers include developer tools (F12 or right-click → Inspect) that allow you to:</p>
                <ul>
                  <li>View and edit HTML/CSS in real-time</li>
                  <li>Debug JavaScript</li>
                  <li>Analyze network performance</li>
                  <li>Test responsive designs</li>
                </ul>
              </div>
            </section>

            <section id="versions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-clock-history"></i> HTML Versions</h2>
              <p className="mb-3">HTML was invented by Tim Berners-Lee in 1991 while working at CERN. The language has evolved significantly since then.</p>

              <table className="table table-bordered mb-4">
                <thead className="table-dark">
                  <tr>
                    <th>Version</th>
                    <th>Year</th>
                    <th>Key Features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HTML 1.0</td>
                    <td>1991</td>
                    <td>Basic text formatting, links</td>
                  </tr>
                  <tr>
                    <td>HTML 2.0</td>
                    <td>1995</td>
                    <td>Standardized by IETF, forms</td>
                  </tr>
                  <tr>
                    <td>HTML 3.2</td>
                    <td>1997</td>
                    <td>Tables, applets, text flow</td>
                  </tr>
                  <tr>
                    <td>HTML 4.01</td>
                    <td>1999</td>
                    <td>CSS, frames, scripting</td>
                  </tr>
                  <tr>
                    <td>XHTML 1.0</td>
                    <td>2000</td>
                    <td>Strict XML syntax</td>
                  </tr>
                  <tr>
                    <td>HTML5</td>
                    <td>2014</td>
                    <td>Semantic elements, multimedia, APIs</td>
                  </tr>
                </tbody>
              </table>

              <div className="example-box">
                <div className="example-title">HTML5 New Features:</div>
                <ul>
                  <li>Semantic elements (<code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, etc.)</li>
                  <li>Native audio and video support</li>
                  <li>Canvas for drawing</li>
                  <li>Local storage</li>
                  <li>Geolocation API</li>
                  <li>Form enhancements (new input types, validation)</li>
                </ul>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-arrow-right-circle"></i> Future of HTML</h3>
              <p>HTML continues to evolve with new features being discussed and implemented through the WHATWG (Web Hypertext Application Technology Working Group).</p>
            </section>

            <section id="structure" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> HTML Document Structure</h2>
              <p className="mb-3">Every HTML document has a specific structure that browsers use to render the page correctly.</p>

              <pre className="mb-3"><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
    <!-- Other meta tags, links to CSS, scripts, etc. -->
</head>
<body>
    <!-- Visible content goes here -->
</body>
</html>`}</code></pre>

              <h3 className="h4 mb-2"><i className="bi bi-file-earmark-break"></i> Document Type Declaration</h3>
              <p>The <code>&lt;!DOCTYPE html&gt;</code> declaration defines the document type and HTML version (HTML5 in this case). It must appear first in the document.</p>

              <h3 className="h4 mb-2"><i className="bi bi-file-earmark"></i> HTML Element</h3>
              <p>The <code>&lt;html&gt;</code> element is the root element and contains all other HTML elements. The <code>lang</code> attribute specifies the language of the document.</p>

              <h3 className="h4 mb-2"><i className="bi bi-heading"></i> Head Section</h3>
              <p>The <code>&lt;head&gt;</code> section contains meta-information about the document that isn't displayed on the page:</p>
              <ul>
                <li><code>&lt;meta charset="UTF-8"&gt;</code> - Defines character encoding</li>
                <li><code>&lt;meta name="viewport"&gt;</code> - Controls layout on mobile browsers</li>
                <li><code>&lt;title&gt;</code> - Sets the browser tab title</li>
                <li><code>&lt;link&gt;</code> - For external resources like CSS</li>
                <li><code>&lt;style&gt;</code> - For internal CSS</li>
                <li><code>&lt;script&gt;</code> - For JavaScript</li>
              </ul>

              <h3 className="h4 mb-2"><i className="bi bi-body-text"></i> Body Section</h3>
              <p>The <code>&lt;body&gt;</code> section contains all the visible content of the webpage.</p>

              <div className="example-box">
                <div className="example-title">Basic Page Structure Visualization:</div>
                <img src="https://www.w3schools.com/html/img_notepad.png" alt="HTML structure in Notepad" className="img-example" />
                <p>Example of a simple HTML document structure in a text editor.</p>
              </div>
            </section>

            <section id="tags" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-tags"></i> Tags & Attributes</h2>
              <p className="mb-3">HTML documents are built using tags and attributes that define the structure and behavior of elements.</p>

              <h3 className="h4 mb-2"><i className="bi bi-tag"></i> HTML Tags</h3>
              <p>Tags are keywords surrounded by angle brackets that define HTML elements. They typically come in pairs (opening and closing tags).</p>

              <div className="example-box">
                <div className="example-title">Tag Examples:</div>
                <pre><code>{`<p>This is a paragraph</p>
<h1>Main Heading</h1>
<a href="page.html">Link</a>`}</code></pre>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-gear"></i> HTML Attributes</h3>
              <p>Attributes provide additional information about elements and are specified in the opening tag.</p>

              <div className="example-box">
                <div className="example-title">Common Attributes:</div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>id</code></td>
                      <td>Unique identifier for an element</td>
                      <td><code>&lt;div id="header"&gt;</code></td>
                    </tr>
                    <tr>
                      <td><code>class</code></td>
                      <td>Class name for styling/scripting</td>
                      <td><code>&lt;p class="intro"&gt;</code></td>
                    </tr>
                    <tr>
                      <td><code>style</code></td>
                      <td>Inline CSS styling</td>
                      <td><code>&lt;h1 style="color:blue"&gt;</code></td>
                    </tr>
                    <tr>
                      <td><code>src</code></td>
                      <td>Source URL for embedded content</td>
                      <td><code>&lt;img src="image.jpg"&gt;</code></td>
                    </tr>
                    <tr>
                      <td><code>href</code></td>
                      <td>Hyperlink reference</td>
                      <td><code>&lt;a href="page.html"&gt;</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-code-slash"></i> Syntax Rules</h3>
              <ul>
                <li>Tags are enclosed in angle brackets <code>&lt; &gt;</code></li>
                <li>Most tags come in pairs (opening and closing)</li>
                <li>Closing tags have a forward slash <code>/</code></li>
                <li>Attributes are specified in the opening tag</li>
                <li>Attribute values should be quoted (single or double)</li>
              </ul>

              <h3 className="h4 mb-2"><i className="bi bi-file-earmark-check"></i> HTML Elements</h3>
              <p>An HTML element is defined by a start tag, content, and an end tag.</p>
              <pre className="mb-3"><code>{`<tagname>Content goes here...</tagname>`}</code></pre>

              <div className="example-box">
                <div className="example-title">Nested Elements:</div>
                <pre><code>{`<div>
    <h1>Main Title</h1>
    <p>This is a <strong>important</strong> paragraph.</p>
</div>`}</code></pre>
                <p>Elements can be nested inside other elements to create complex structures.</p>
              </div>
            </section>

            <section id="heading-tags" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-type-h1"></i> Heading Tags</h2>
              <p className="mb-3">HTML provides six levels of heading tags (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>) for document structure.</p>

              <div className="example-box">
                <div className="example-title">Heading Hierarchy:</div>
                <pre><code>{`<h1>Main Title (Most Important)</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Sub-subsection Heading</h4>
<h5>Minor Heading</h5>
<h6>Least Important Heading</h6>`}</code></pre>
                <div className='img-example'>
                  <h1>Main Title (Most Important)</h1>
                  <h2>Section Heading</h2>
                  <h3>Subsection Heading</h3>
                  <h4>Sub-subsection Heading</h4>
                  <h5>Minor Heading</h5>
                  <h6>Least Important Heading</h6>
                </div>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-lightbulb"></i> Best Practices</h3>
              <ul>
                <li>Use only one <code>&lt;h1&gt;</code> per page (main title)</li>
                <li>Maintain proper hierarchy (don't skip levels)</li>
                <li>Use headings for structure, not just styling</li>
                <li>Keep headings concise and descriptive</li>
              </ul>

              <h3 className="h4 mb-2"><i className="bi bi-paragraph"></i> Paragraph Tag</h3>
              <p>The <code>&lt;p&gt;</code> tag defines a paragraph of text.</p>
              <pre className="mb-3"><code>{`<p>This is a paragraph of text. It will appear as a 
separate block with some default spacing from other 
elements.</p>`}</code></pre>

              <div className="example-box">
                <div className="example-title">Paragraph Attributes:</div>
                <p>Common attributes for paragraphs include:</p>
                <ul>
                  <li><code>align</code>: Sets text alignment (left, right, center, justify)</li>
                  <li><code>title</code>: Tooltip text shown on hover</li>
                  <li><code>style</code>: For inline CSS styling</li>
                </ul>
                <pre><code>{`<p align="center" title="Important note" style="color: red;">
    This is a centered, red paragraph with a tooltip.
</p>`}</code></pre>
              </div>
            </section>

            <section id="formatting-tags" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-type-bold"></i> Text Formatting Tags</h2>
              <p className="mb-3">HTML provides various tags for text formatting and styling.</p>

              <div className="example-box">
                <div className="example-title">Common Formatting Tags:</div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Tag</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>&lt;b&gt;</code></td>
                      <td>Bold text (without extra importance)</td>
                      <td><b>Bold text</b></td>
                    </tr>
                    <tr>
                      <td><code>&lt;strong&gt;</code></td>
                      <td>Important text (typically bold)</td>
                      <td><strong>Strong text</strong></td>
                    </tr>
                    <tr>
                      <td><code>&lt;i&gt;</code></td>
                      <td>Italic text (without extra importance)</td>
                      <td><i>Italic text</i></td>
                    </tr>
                    <tr>
                      <td><code>&lt;em&gt;</code></td>
                      <td>Emphasized text (typically italic)</td>
                      <td><em>Emphasized text</em></td>
                    </tr>
                    <tr>
                      <td><code>&lt;mark&gt;</code></td>
                      <td>Highlighted text</td>
                      <td><mark>Marked text</mark></td>
                    </tr>
                    <tr>
                      <td><code>&lt;small&gt;</code></td>
                      <td>Smaller text</td>
                      <td><small>Small text</small></td>
                    </tr>
                    <tr>
                      <td><code>&lt;del&gt;</code></td>
                      <td>Deleted text (strikethrough)</td>
                      <td><del>Deleted text</del></td>
                    </tr>
                    <tr>
                      <td><code>&lt;ins&gt;</code></td>
                      <td>Inserted text (underlined)</td>
                      <td><ins>Inserted text</ins></td>
                    </tr>
                    <tr>
                      <td><code>&lt;sub&gt;</code></td>
                      <td>Subscript text</td>
                      <td>H<sub>2</sub>O</td>
                    </tr>
                    <tr>
                      <td><code>&lt;sup&gt;</code></td>
                      <td>Superscript text</td>
                      <td>x<sup>2</sup></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-code-square"></i> Self-Closing Tags</h3>
              <p>Some tags don't have content and don't need closing tags:</p>
              <ul>
                <li><code>&lt;br&gt;</code> - Line break</li>
                <li><code>&lt;hr&gt;</code> - Horizontal rule</li>
                <li><code>&lt;img&gt;</code> - Image</li>
                <li><code>&lt;input&gt;</code> - Form input</li>
                <li><code>&lt;meta&gt;</code> - Metadata</li>
              </ul>

              <div className="example-box">
                <div className="example-title">Formatting Example:</div>
                <pre><code>{`<p>This is <b>bold</b> and this is <strong>strong</strong>.</p>
<p>This is <i>italic</i> and this is <em>emphasized</em>.</p>
<p>Don't forget to buy <mark>milk</mark> today.</p>
<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>
<p>This is <sub>subscript</sub> and this is <sup>superscript</sup>.</p>
<p>This text is <small>smaller</small> than normal.</p>`}</code></pre>
                <div className="img-example">
                  <p>This is <b>bold</b> and this is <strong>strong</strong>.</p>
                  <p>This is <i>italic</i> and this is <em>emphasized</em>.</p>
                  <p>Don't forget to buy <mark>milk</mark> today.</p>
                  <p>My favorite color is <del>blue</del> <ins>red</ins>.</p>
                  <p>This is <sub>subscript</sub> and this is <sup>superscript</sup>.</p>
                  <p>This text is <small>smaller</small> than normal.</p>
                </div>

              </div>
            </section>

            <section id="logical-tags" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> Logical (Semantic) Tags</h2>
              <p className="mb-3">These tags provide meaning to the content rather than just presentation.</p>

              <div className="example-box">
                <div className="example-title">Semantic Text Tags:</div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Tag</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>&lt;code&gt;</code></td>
                      <td>Computer code</td>
                      <td><code>print("Hello")</code></td>
                    </tr>
                    <tr>
                      <td><code>&lt;abbr&gt;</code></td>
                      <td>Abbreviation</td>
                      <td><abbr title="HyperText Markup Language">HTML</abbr></td>
                    </tr>
                    <tr>
                      <td><code>&lt;center&gt;</code></td>
                      <td>Center Alignment</td>
                      <td style={{textAlign:'center'}}>center</td>
                    </tr>
                    <tr>
                      <td><code>&lt;cite&gt;</code></td>
                      <td>Title of creative work</td>
                      <td><cite>The Scream</cite> by Edvard Munch</td>
                    </tr>
                    <tr>
                      <td><code>&lt;address&gt;</code></td>
                      <td>Contact information</td>
                      <td><address>123 Main St, City</address></td>
                    </tr>
                    <tr>
                      <td><code>&lt;blockquote&gt;</code></td>
                      <td>Long quotation</td>
                      <td><blockquote>To be or not to be...</blockquote></td>
                    </tr>
                    <tr>
                      <td><code>&lt;q&gt;</code></td>
                      <td>Short inline quotation</td>
                      <td>He said <q>Hello</q></td>
                    </tr>
                    <tr>
                      <td><code>&lt;time&gt;</code></td>
                      <td>Date/time</td>
                      <td>Open from <time>10:00</time> to <time>21:00</time></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-lightbulb"></i> Why Use Semantic Tags?</h3>
              <ul>
                <li>Better accessibility (screen readers understand the meaning)</li>
                <li>Improved SEO (search engines understand content better)</li>
                <li>Future-proofing (semantics remain even if presentation changes)</li>
                <li>Cleaner, more maintainable code</li>
              </ul>

              <div className="example-box">
                <div className="example-title">Semantic Example:</div>
                <pre><code>{`<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>

<address>
    Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br>
    Visit us at:<br>
    Example.com<br>
    Box 564, Disneyland<br>
    USA
</address>

<p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>

<p>The HTML <code>button</code> tag defines a clickable button.</p>

<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature.
</blockquote>`}</code></pre>
              </div>
            </section>

            <section id="urls" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-link"></i> URLs (Uniform Resource Locators)</h2>
              <p className="mb-3">A URL is the address of a resource on the web. It specifies the location and how to retrieve it.</p>

              <div className="example-box">
                <div className="example-title">URL Structure:</div>
                <pre><code>{`https://www.example.com:443/path/to/page.html?query=string#fragment`}</code></pre>
                <ul>
                  <li><strong>Scheme:</strong> <code>https://</code> (protocol)</li>
                  <li><strong>Subdomain:</strong> <code>www</code></li>
                  <li><strong>Domain:</strong> <code>example.com</code></li>
                  <li><strong>Port:</strong> <code>:443</code> (optional)</li>
                  <li><strong>Path:</strong> <code>/path/to/page.html</code></li>
                  <li><strong>Query:</strong> <code>?query=string</code> (optional)</li>
                  <li><strong>Fragment:</strong> <code>#fragment</code> (optional)</li>
                </ul>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-list-check"></i> Types of URLs</h3>
              <ul>
                <li><strong>Absolute URL:</strong> Full web address including protocol and domain</li>
                <li><strong>Relative URL:</strong> Path relative to current page</li>
                <li><strong>Root-relative URL:</strong> Path starting from site root</li>
              </ul>

              <div className="example-box">
                <div className="example-title">URL Examples:</div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Absolute</td>
                      <td><code>https://www.example.com/images/photo.jpg</code></td>
                    </tr>
                    <tr>
                      <td>Relative</td>
                      <td><code>images/photo.jpg</code> (if current page is in root)</td>
                    </tr>
                    <tr>
                      <td>Root-relative</td>
                      <td><code>/images/photo.jpg</code> (starts from domain root)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="links" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-link-45deg"></i> HTML Links (Anchor Tag)</h2>
              <p className="mb-3">The <code>&lt;a&gt;</code> tag defines hyperlinks for navigation between pages.</p>

              <div className="example-box">
                <div className="example-title">Basic Link Syntax:</div>
                <pre><code>{`<a href="url">link text</a>`}</code></pre>
                <p>Example: <a href="https://www.google.com">Visit Google</a></p>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-gear"></i> Link Attributes</h3>
              <ul>
                <li><code>href</code>: Specifies the URL (required)</li>
                <li><code>target</code>: Where to open the link</li>
                <li><code>rel</code>: Relationship between documents</li>
                <li><code>download</code>: Prompts to save the linked resource</li>
                <li><code>title</code>: Tooltip text on hover</li>
              </ul>

              <div className="example-box">
                <div className="example-title">Target Attribute Values:</div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Value</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>_blank</code></td>
                      <td>Opens in a new window/tab</td>
                    </tr>
                    <tr>
                      <td><code>_self</code></td>
                      <td>Opens in the same frame (default)</td>
                    </tr>
                    <tr>
                      <td><code>_parent</code></td>
                      <td>Opens in the parent frame</td>
                    </tr>
                    <tr>
                      <td><code>_top</code></td>
                      <td>Opens in the full body of the window</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-bookmark"></i> Link Types</h3>
              <ul>
                <li><strong>Text Links:</strong> Standard clickable text</li>
                <li><strong>Image Links:</strong> Clickable images</li>
                <li><strong>Bookmark Links:</strong> Links to sections within the same page</li>
                <li><strong>Email Links:</strong> Opens default email client</li>
                <li><strong>Phone Links:</strong> Initiates phone call on mobile</li>
                <li><strong>Download Links:</strong> Triggers file download</li>
              </ul>

              <div className="example-box">
                <div className="example-title">Link Examples:</div>
                <pre><code>{`<!-- Text link -->
<a href="https://www.example.com">Visit Example.com</a>

<!-- Image link -->
<a href="large-image.jpg">
    <img src="thumbnail.jpg" alt="Description">
</a>

<!-- Bookmark link -->
<a href="#section2">Jump to Section 2</a>
...
<h2 id="section2">Section 2</h2>

<!-- Email link -->
<a href="mailto:someone@example.com">Send Email</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call Us</a>

<!-- Download link -->
<a href="document.pdf" download>Download PDF</a>`}</code></pre>
              </div>
            </section>

            <section id="images" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-image"></i> HTML Images</h2>
              <p className="mb-3">The <code>&lt;img&gt;</code> tag embeds images in web pages.</p>

              <div className="example-box">
                <div className="example-title">Basic Image Syntax:</div>
                <pre><code>{`<img src="image.jpg" alt="Description">`}</code></pre>
                <img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl in a jacket" className="img-example" style={{ width: '200px' }} />
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-gear"></i> Image Attributes</h3>
              <ul>
                <li><code>src</code>: Image source (required)</li>
                <li><code>alt</code>: Alternative text (required for accessibility)</li>
                <li><code>width</code>/<code>height</code>: Dimensions in pixels</li>
                <li><code>title</code>: Tooltip text</li>
                <li><code>loading</code>: Lazy loading (<code>lazy</code> or <code>eager</code>)</li>
                <li><code>srcset</code>: Responsive images with different sizes</li>
                <li><code>sizes</code>: Image display sizes for different viewports</li>
              </ul>

              <div className="example-box">
                <div className="example-title">Responsive Image Example:</div>
                <pre><code>{`<img src="small.jpg" 
     srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
     sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 1500px"
     alt="Responsive image">`}</code></pre>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-images"></i> Image Formats</h3>
              <p>Common web image formats:</p>
              <ul>
                <li><strong>JPEG (.jpg, .jpeg):</strong> Best for photographs</li>
                <li><strong>PNG (.png):</strong> Best for graphics with transparency</li>
                <li><strong>GIF (.gif):</strong> Simple animations</li>
                <li><strong>SVG (.svg):</strong> Vector graphics</li>
                <li><strong>WebP (.webp):</strong> Modern format with better compression</li>
              </ul>

              <h3 className="h4 mb-2"><i className="bi bi-picture"></i> Figure and Figcaption</h3>
              <p>The <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> tags provide semantic structure for images with captions.</p>
              <pre className="mb-3"><code>{`<figure>
    <img src="image.jpg" alt="Description">
    <figcaption>Caption for the image</figcaption>
</figure>`}</code></pre>
            </section>

            <section id="tables" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-table"></i> HTML Tables</h2>
              <p className="mb-3">Tables organize data into rows and columns using the <code>&lt;table&gt;</code> element.</p>

              <div className="example-box">
                <div className="example-title">Basic Table Structure:</div>
                <pre><code>{`<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
    </tr>
    <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
    </tr>
</table>`}</code></pre>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Header 1</th>
                      <th>Header 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Row 1, Cell 1</td>
                      <td>Row 1, Cell 2</td>
                    </tr>
                    <tr>
                      <td>Row 2, Cell 1</td>
                      <td>Row 2, Cell 2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-gear"></i> Table Elements</h3>
              <ul>
                <li><code>&lt;table&gt;</code>: Defines the table</li>
                <li><code>&lt;tr&gt;</code>: Table row</li>
                <li><code>&lt;th&gt;</code>: Table header cell</li>
                <li><code>&lt;td&gt;</code>: Table data cell</li>
                <li><code>&lt;caption&gt;</code>: Table caption</li>
                <li><code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>: Semantic table sections</li>
              </ul>

              <h3 className="h4 mb-2"><i className="bi bi-layout-three-columns"></i> Table Attributes</h3>
              <p>Note: Many table attributes are deprecated in HTML5. Use CSS instead.</p>
              <ul>
                <li><code>border</code>: Table border width</li>
                <li><code>cellpadding</code>: Space between cell content and border</li>
                <li><code>cellspacing</code>: Space between cells</li>
                <li><code>width</code>: Table width</li>
                <li><code>rowspan</code>: Number of rows a cell should span</li>
                <li><code>colspan</code>: Number of columns a cell should span</li>
              </ul>

              <div className="example-box">
                <div className="example-title">Spanning Example:</div>
                <pre><code>{`<table border="1">
    <tr>
        <th colspan="2">Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Jill</td>
        <td rowspan="2">Smith</td>
        <td>43</td>
    </tr>
    <tr>
        <td>Eve</td>
        <td>22</td>
    </tr>
</table>`}</code></pre>
                <table border="1">
                  <tr>
                    <th colspan="2">Name</th>
                    <th>Age</th>
                  </tr>
                  <tr>
                    <td>Jill</td>
                    <td rowspan="2">Smith</td>
                    <td>43</td>
                  </tr>
                  <tr>
                    <td>Eve</td>
                    <td>22</td>
                  </tr>
                </table>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-lightbulb"></i> Table Best Practices</h3>
              <ul>
                <li>Use tables for tabular data, not for page layout</li>
                <li>Include a caption for accessibility</li>
                <li>Use semantic sections (<code>thead</code>, <code>tbody</code>, <code>tfoot</code>)</li>
                <li>Make tables responsive for mobile devices</li>
                <li>Use proper header cells (<code>th</code>) for column/row headers</li>
              </ul>
            </section>

            <section id="lists" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-list-ul"></i> HTML Lists</h2>
              <p className="mb-3">HTML provides three types of lists for organizing content.</p>

              <h3 className="h4 mb-2"><i className="bi bi-list-ol"></i> Ordered Lists</h3>
              <p>Numbered lists using <code>&lt;ol&gt;</code> and <code>&lt;li&gt;</code>.</p>
              <div className="example-box">
                <div className="example-title">Ordered List Example:</div>
                <pre><code>{`<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>`}</code></pre>
                <ol>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                </ol>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-list-ul"></i> Unordered Lists</h3>
              <p>Bulleted lists using <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code>.</p>
              <div className="example-box">
                <div className="example-title">Unordered List Example:</div>
                <pre><code>{`<ul>
    <li>Milk</li>
    <li>Bread</li>
    <li>Eggs</li>
</ul>`}</code></pre>
                <ul>
                  <li>Milk</li>
                  <li>Bread</li>
                  <li>Eggs</li>
                </ul>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-list-check"></i> Description Lists</h3>
              <p>Name-value pairs using <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code>, and <code>&lt;dd&gt;</code>.</p>
              <div className="example-box">
                <div className="example-title">Description List Example:</div>
                <pre><code>{`<dl>
    <dt>Coffee</dt>
    <dd>- black hot drink</dd>
    <dt>Milk</dt>
    <dd>- white cold drink</dd>
</dl>`}</code></pre>
                <dl>
                  <dt>Coffee</dt>
                  <dd>- black hot drink</dd>
                  <dt>Milk</dt>
                  <dd>- white cold drink</dd>
                </dl>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-gear"></i> List Attributes</h3>
              <p>For ordered lists (<code>&lt;ol&gt;</code>):</p>
              <ul>
                <li><code>type</code>: Numbering style (1, A, a, I, i)</li>
                <li><code>start</code>: Starting number</li>
                <li><code>reversed</code>: Reverse numbering</li>
              </ul>

              <p>For unordered lists (<code>&lt;ul&gt;</code>):</p>
              <ul>
                <li><code>type</code>: Bullet style (disc, circle, square) - use CSS instead</li>
              </ul>

              <div className="example-box">
                <div className="example-title">Styled List Examples:</div>
                <pre><code>{`<ol type="A" start="3">
    <li>Item C</li>
    <li>Item D</li>
</ol>

<ol type="I">
    <li>First</li>
    <li>Second</li>
</ol>

<ul style="list-style-type: square;">
    <li>Square bullets</li>
    <li>Another item</li>
</ul>`}</code></pre>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-list-nested"></i> Nested Lists</h3>
              <p>Lists can be nested inside other lists to create hierarchies.</p>
              <div className="example-box">
                <div className="example-title">Nested List Example:</div>
                <pre><code>{`<ul>
    <li>Coffee</li>
    <li>Tea
        <ul>
            <li>Black tea</li>
            <li>Green tea</li>
        </ul>
    </li>
    <li>Milk</li>
</ul>`}</code></pre>
                <ul>
                  <li>Coffee</li>
                  <li>Tea
                    <ul>
                      <li>Black tea</li>
                      <li>Green tea</li>
                    </ul>
                  </li>
                  <li>Milk</li>
                </ul>
              </div>
            </section>

            <section id="forms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-input-cursor-text"></i> HTML Forms</h2>
              <p className="mb-3">Forms collect user input using the <code>&lt;form&gt;</code> element and various input controls.</p>

              <div className="example-box">
                <div className="example-title">Basic Form Structure:</div>
                <pre><code>{`<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <input type="submit" value="Submit">
</form>`}</code></pre>
                <form>
                  <label for="name" className="form-label">Name:</label>
                  <input type="text" id="name" name="name" className="form-control mb-2" style={{ width: '200px' }} />
                  <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-gear"></i> Form Attributes</h3>
              <ul>
                <li><code>action</code>: URL to send form data</li>
                <li><code>method</code>: HTTP method (get or post)</li>
                <li><code>target</code> Where to display response</li>
                <li><code>autocomplete</code>: Enable/disable autocomplete</li>
                <li><code>novalidate</code>: Skip validation</li>
                <li><code>enctype</code>: Encoding type for file uploads</li>
              </ul>

              <h3 className="h4 mb-2"><i className="bi bi-keyboard"></i> Form Elements</h3>
              <p>Common form controls:</p>
              <ul>
                <li><code>&lt;input&gt;</code>: Various input types</li>
                <li><code>&lt;label&gt;</code>: Label for inputs</li>
                <li><code>&lt;select&gt;</code>: Dropdown list</li>
                <li><code>&lt;textarea&gt;</code>: Multi-line text input</li>
                <li><code>&lt;button&gt;</code>: Clickable button</li>
              </ul>

              <div className="example-box">
                <div className="example-title">Input Types:</div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>text</code></td>
                      <td>Single-line text</td>
                      <td><input type="text" className="form-control" /></td>
                    </tr>
                    <tr>
                      <td><code>password</code></td>
                      <td>Masked input</td>
                      <td><input type="password" className="form-control" /></td>
                    </tr>
                    <tr>
                      <td><code>email</code></td>
                      <td>Email address</td>
                      <td><input type="email" className="form-control" /></td>
                    </tr>
                    <tr>
                      <td><code>number</code></td>
                      <td>Numeric input</td>
                      <td><input type="number" className="form-control" /></td>
                    </tr>
                    <tr>
                      <td><code>date</code></td>
                      <td>Date picker</td>
                      <td><input type="date" className="form-control" /></td>
                    </tr>
                    <tr>
                      <td><code>checkbox</code></td>
                      <td>Multiple selection</td>
                      <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                      <td><code>radio</code></td>
                      <td>Single selection</td>
                      <td><input type="radio" name="radio" /></td>
                    </tr>
                    <tr>
                      <td><code>file</code></td>
                      <td>File upload</td>
                      <td><input type="file" className="form-control" /></td>
                    </tr>
                    <tr>
                      <td><code>submit</code></td>
                      <td>Form submission</td>
                      <td><input type="submit" className="btn btn-primary" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="example-box">
                <div className="example-title">Complete Form Example:</div>
                <pre><code>{`<form>
    <fieldset>
        <legend>Personal Information</legend>
        
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname"><br>
        
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname"><br>
        
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br>
        
        <label for="birthday">Birthday:</label><br>
        <input type="date" id="birthday" name="birthday"><br>
        
        <label>Gender:</label><br>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label><br>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label><br>
        
        <label for="country">Country:</label><br>
        <select id="country" name="country">
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
        </select><br>
        
        <label for="bio">Bio:</label><br>
        <textarea id="bio" name="bio" rows="4" cols="50"></textarea><br>
        
        <input type="checkbox" id="agree" name="agree">
        <label for="agree">I agree to terms</label><br>
        
        <input type="submit" value="Submit">
    </fieldset>
</form>`}</code></pre>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-check-circle"></i> Form Validation</h3>
              <p>HTML5 introduced built-in form validation attributes:</p>
              <ul>
                <li><code>required</code>: Field must be filled</li>
                <li><code>minlength</code>/<code>maxlength</code>: Text length limits</li>
                <li><code>min</code>/<code>max</code>: Number range limits</li>
                <li><code>pattern</code>: Regular expression pattern</li>
                <li><code>type</code>: Specific input types (email, url, etc.)</li>
              </ul>

              <div className="example-box">
                <div className="example-title">Validation Example:</div>
                <pre><code>{`<form>
    <label for="username">Username (required, 4-12 chars):</label>
    <input type="text" id="username" name="username" required minlength="4" maxlength="12">
    
    <label for="email">Email (required, valid format):</label>
    <input type="email" id="email" name="email" required>
    
    <label for="age">Age (18-100):</label>
    <input type="number" id="age" name="age" min="18" max="100">
    
    <label for="password">Password (min 8 chars):</label>
    <input type="password" id="password" name="password" minlength="8" required>
    
    <input type="submit" value="Submit">
</form>`}</code></pre>
              </div>
            </section>

            <section id="iframe" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-window"></i> Iframe Tag</h2>
              <p className="mb-3">The <code>&lt;iframe&gt;</code> tag embeds another HTML page within the current page.</p>

              <div className="example-box">
                <div className="example-title">Basic Iframe Syntax:</div>
                <pre><code>{`<iframe src="url" title="description"></iframe>`}</code></pre>
                <iframe src="https://www.wikipedia.org/" title="Wikipedia" style={{ width: '100%', height: '300px', border: '1px solid #ddd' }}></iframe>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-gear"></i> Iframe Attributes</h3>
              <ul>
                <li><code>src</code>: URL of page to embed</li>
                <li><code>width</code>/<code>height</code>: Dimensions</li>
                <li><code>title</code>: Description for accessibility</li>
                <li><code>name</code>: Target for links/forms</li>
              </ul>
            </section>

            <section id="class-id" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-pencil-square"></i> Class & ID Attributes</h2>
              <p className="mb-3">The <code>class</code> and <code>id</code> attributes are used to identify elements for CSS and JavaScript.</p>

              <div className="example-box">
                <div className="example-title">Class vs ID:</div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Usage</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>class</code></td>
                      <td>Multiple elements can share the same class</td>
                      <td><code>&lt;p class="intro"&gt;</code></td>
                    </tr>
                    <tr>
                      <td><code>id</code></td>
                      <td>Should be unique within the page</td>
                      <td><code>&lt;div id="header"&gt;</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-brush"></i> Using with CSS</h3>
              <p>Classes and IDs are targeted differently in CSS:</p>
              <pre className="mb-3"><code>{`/* Class selector (prefixed with .) */
.intro {
    color: blue;
}

/* ID selector (prefixed with #) */
#header {
    background: gray;
}`}</code></pre>

              <h3 className="h4 mb-2"><i className="bi bi-code-slash"></i> Using with JavaScript</h3>
              <p>Common methods to access elements:</p>
              <pre className="mb-3"><code>{`// Get element by ID
document.getElementById("header");

// Get elements by class name
document.getElementsByClassName("intro");

// Modern methods (querySelector)
document.querySelector("#header");
document.querySelectorAll(".intro");`}</code></pre>

              <div className="example-box">
                <div className="example-title">Practical Example:</div>
                <pre><code>{`<style>
    .highlight {
        background-color: yellow;
    }
    #main-title {
        color: red;
        font-size: 2em;
    }
</style>

<h1 id="main-title">Welcome</h1>
<p class="highlight">This paragraph is highlighted.</p>
<p>This one isn't.</p>
<p class="highlight">But this one is.</p>`}</code></pre>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-lightbulb"></i> Best Practices</h3>
              <ul>
                <li>Use IDs for unique elements (header, footer, main content)</li>
                <li>Use classes for reusable styles</li>
                <li>Choose meaningful names (not just presentation-based)</li>
                <li>Follow a consistent naming convention (kebab-case is common)</li>
                <li>Avoid excessive use of IDs in CSS (classes are more reusable)</li>
              </ul>
            </section>

            <section id="elements" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-layout-text-sidebar"></i> Block & Inline Elements</h2>
              <p className="mb-3">HTML elements are displayed as either block or inline by default.</p>

              <h3 className="h4 mb-2"><i className="bi bi-square"></i> Block-Level Elements</h3>
              <p>Block elements start on a new line and take up the full width available.</p>

              <div className="example-box">
                <div className="example-title">Common Block Elements:</div>
                <ul>
                  <li><code>&lt;div&gt;</code></li>
                  <li><code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code></li>
                  <li><code>&lt;p&gt;</code></li>
                  <li><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code></li>
                  <li><code>&lt;table&gt;</code></li>
                  <li><code>&lt;form&gt;</code></li>
                  <li><code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code></li>
                </ul>
                <pre><code>{`<div style="background: lightblue;">
    This is a block element.
</div>
<p style="background: lightgreen;">Another block element.</p>`}</code></pre>
                <div style={{ background: 'lightblue', padding: '10px', margin: '5px 0' }}>This is a block element.</div>
                <p style={{ background: 'lightgreen', padding: '10px', margin: '5px 0' }}>Another block element.</p>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-justify-left"></i> Inline-Level Elements</h3>
              <p>Inline elements don't start new lines and only take up necessary width.</p>

              <div className="example-box">
                <div className="example-title">Common Inline Elements:</div>
                <ul>
                  <li><code>&lt;span&gt;</code></li>
                  <li><code>&lt;a&gt;</code></li>
                  <li><code>&lt;img&gt;</code></li>
                  <li><code>&lt;input&gt;</code></li>
                  <li><code>&lt;button&gt;</code></li>
                  <li><code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code></li>
                  <li><code>&lt;br&gt;</code></li>
                </ul>
                <pre><code>{`<p>This contains <span style="background: pink;">inline</span> elements 
like <a href="#">links</a> and <strong>formatting</strong>.</p>`}</code></pre>
                <p>This contains <span style={{ background: 'pink' }}>inline</span> elements like <a href="#">links</a> and <strong>formatting</strong>.</p>
              </div>
            </section>

            <section id="semantic" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-layout-text-sidebar-reverse"></i> Semantic HTML Elements</h2>
              <p className="mb-3">Semantic elements clearly describe their meaning to browsers and developers.</p>

              <div className="example-box">
                <div className="example-title">HTML5 Semantic Elements:</div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Element</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>&lt;header&gt;</code></td>
                      <td>Introductory content or navigation</td>
                    </tr>
                    <tr>
                      <td><code>&lt;nav&gt;</code></td>
                      <td>Navigation links</td>
                    </tr>
                    <tr>
                      <td><code>&lt;main&gt;</code></td>
                      <td>Main content of the document</td>
                    </tr>
                    <tr>
                      <td><code>&lt;section&gt;</code></td>
                      <td>Thematic grouping of content</td>
                    </tr>
                    <tr>
                      <td><code>&lt;article&gt;</code></td>
                      <td>Self-contained composition</td>
                    </tr>
                    <tr>
                      <td><code>&lt;aside&gt;</code></td>
                      <td>Content indirectly related to main content</td>
                    </tr>
                    <tr>
                      <td><code>&lt;footer&gt;</code></td>
                      <td>Footer for its nearest ancestor</td>
                    </tr>
                    <tr>
                      <td><code>&lt;figure&gt;</code></td>
                      <td>Self-contained content with caption</td>
                    </tr>
                    <tr>
                      <td><code>&lt;figcaption&gt;</code></td>
                      <td>Caption for <code>&lt;figure&gt;</code></td>
                    </tr>
                    <tr>
                      <td><code>&lt;time&gt;</code></td>
                      <td>Machine-readable date/time</td>
                    </tr>
                    <tr>
                      <td><code>&lt;mark&gt;</code></td>
                      <td>Highlighted text</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="example-box">
                <div className="example-title">Semantic Layout Example:</div>
                <pre><code>{`<body>
    <header>
        <h1>Page Title</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
    </header>
    
    <main>
        <article>
            <h2>Article Title</h2>
            <p>Article content...</p>
        </article>
        
        <aside>
            <h3>Related Links</h3>
            <ul>
                <li><a href="#">Link 1</a></li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2023 Company Name</p>
    </footer>
</body>`}</code></pre>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-layout-text-window"></i> Non-Semantic Elements</h3>
              <p>Elements like <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> don't convey meaning about their content.</p>

              <div className="example-box">
                <div className="example-title">When to Use Non-Semantic Elements:</div>
                <ul>
                  <li>When no semantic element is appropriate</li>
                  <li>For styling or scripting hooks</li>
                  <li>For grouping elements without semantic meaning</li>
                </ul>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-lightbulb"></i> Benefits of Semantic HTML</h3>
              <ul>
                <li><strong>Accessibility:</strong> Screen readers can better interpret content</li>
                <li><strong>SEO:</strong> Search engines understand content structure</li>
                <li><strong>Maintainability:</strong> Easier to understand code structure</li>
                <li><strong>Future-proofing:</strong> Semantics remain even if presentation changes</li>
              </ul>
            </section>

            <section id="layout" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-layout-wtf"></i> Webpage Layout</h2>
              <p className="mb-3">Modern web layouts combine semantic HTML with CSS for structure and presentation.</p>

              <div className="example-box">
                <div className="example-title">Typical Layout Structure:</div>
                <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <!-- Metadata, CSS, scripts -->
</head>
<body>
    <header>
        <!-- Logo, navigation -->
    </header>
    
    <nav>
        <!-- Main navigation -->
    </nav>
    
    <main>
        <article>
            <!-- Main content -->
        </article>
        
        <aside>
            <!-- Sidebar content -->
        </aside>
    </main>
    
    <footer>
        <!-- Copyright, links -->
    </footer>
</body>
</html>`}</code></pre>
                <img src="https://www.w3schools.com/html/img_sem_elements.gif" alt="Webpage layout structure" className="img-example" />
              </div>
            </section>

            <section id="void-elements" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-minus"></i> Void Elements</h2>
              <p className="mb-3">Void elements (or empty elements) don't have closing tags and can't contain content.</p>

              <div className="example-box">
                <div className="example-title">Common Void Elements:</div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Element</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>&lt;br&gt;</code></td>
                      <td>Line break</td>
                    </tr>
                    <tr>
                      <td><code>&lt;hr&gt;</code></td>
                      <td>Horizontal rule</td>
                    </tr>
                    <tr>
                      <td><code>&lt;img&gt;</code></td>
                      <td>Image</td>
                    </tr>
                    <tr>
                      <td><code>&lt;input&gt;</code></td>
                      <td>Input field</td>
                    </tr>
                    <tr>
                      <td><code>&lt;meta&gt;</code></td>
                      <td>Metadata</td>
                    </tr>
                    <tr>
                      <td><code>&lt;link&gt;</code></td>
                      <td>External resource link</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-slash-circle"></i> Self-Closing Syntax</h3>
              <p>In XHTML, void elements must be self-closed (<code>&lt;br /&gt;</code>). In HTML5, the trailing slash is optional.</p>

              <div className="example-box">
                <div className="example-title">Void Element Examples:</div>
                <pre><code>{`<!-- Line break -->
<p>First line<br>Second line</p>

<!-- Horizontal rule -->
<hr>

<!-- Image -->
<img src="image.jpg" alt="Description">

<!-- Input field -->
<input type="text" name="username">`}</code></pre>
              </div>
            </section>

            <section id="quotations" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-chat-quote"></i> Quotations</h2>
              <p className="mb-3">HTML provides specific elements for marking up quotations.</p>

              <div className="example-box">
                <div className="example-title">Quotation Elements:</div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Element</th>
                      <th>Description</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>&lt;blockquote&gt;</code></td>
                      <td>Long quotation from another source</td>
                      <td><blockquote>To be or not to be...</blockquote></td>
                    </tr>
                    <tr>
                      <td><code>&lt;q&gt;</code></td>
                      <td>Short inline quotation</td>
                      <td>He said <q>Hello</q></td>
                    </tr>
                    <tr>
                      <td><code>&lt;cite&gt;</code></td>
                      <td>Title of creative work</td>
                      <td><cite>The Scream</cite> by Edvard Munch</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-quote"></i> Quotation Marks</h3>
              <p>The browser automatically adds quotation marks to <code>&lt;q&gt;</code> elements.</p>
              <pre className="mb-3"><code>{`<p>He said <q>Hello</q> and left.</p>`}</code></pre>
              <p>He said <q>Hello</q> and left.</p>
            </section>

            <section id="marquee" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-left-right"></i> Marquee Tag</h2>
              <p className="mb-3">The <code>&lt;marquee&gt;</code> tag creates scrolling text or images (deprecated but still supported).</p>

              <div className="example-box">
                <div className="example-title">Basic Marquee:</div>
                <pre><code>{`<marquee>This text will scroll</marquee>`}</code></pre>
                <marquee>This text will scroll</marquee>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-gear"></i> Marquee Attributes</h3>
              <ul>
                <li><code>behavior</code>: scroll, slide, alternate</li>
                <li><code>direction</code>: left, right, up, down</li>
                <li><code>loop</code>: Number of loops (default infinite)</li>
                <li><code>scrollamount</code>: Speed of scroll</li>
                <li><code>scrolldelay</code>: Delay between movements</li>
              </ul>

              <div className="example-box">
                <div className="example-title">Marquee Examples:</div>
                <pre><code>{`<!-- Scroll right to left (default) -->
<marquee>Scrolling text</marquee>

<!-- Scroll left to right -->
<marquee direction="right">Right scrolling</marquee>

<!-- Bounce text -->
<marquee behavior="alternate">Bouncing text</marquee>

<!-- Slow scroll -->
<marquee scrollamount="2">Slow scroll</marquee>

<!-- Vertical scroll -->
<marquee direction="up" height="50">Upward scroll</marquee>`}</code></pre>
              </div>
            </section>

            <section id="pre" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-text"></i> Preformatted Text (Pre Tag)</h2>
              <p className="mb-3">The <code>&lt;pre&gt;</code> tag displays text exactly as written, preserving spaces and line breaks.</p>

              <div className="example-box">
                <div className="example-title">Basic Pre Example:</div>
                <pre><code>{`<pre>
    This text
        will appear
    exactly as written,
  with all spaces and line breaks preserved.
</pre>`}</code></pre>
                <pre>
                  This text
                  will appear
                  exactly as written,
                  with all spaces and line breaks preserved.
                </pre>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-code-square"></i> Common Uses</h3>
              <ul>
                <li>Displaying code snippets</li>
                <li>Showing ASCII art</li>
                <li>Presenting formatted text (like poetry)</li>
                <li>Displaying command-line output</li>
              </ul>

              <div className="example-box">
                <div className="example-title">Code Example:</div>
                <pre><code>{`<pre><code>
function hello() {
    console.log("Hello, world!");
    return true;
}
</code></pre>`}</code></pre>
                <pre><code>
                  {`function hello() {
    console.log("Hello, world!");
    return true;
}`}
                </code></pre>
              </div>
            </section>

            <section id="entities" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-symbol"></i> HTML Entities</h2>
              <p className="mb-3">Entities represent reserved characters or symbols in HTML.</p>

              <div className="example-box">
                <div className="example-title">Common HTML Entities:</div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Character</th>
                      <th>Entity Name</th>
                      <th>Entity Number</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&lt;</td>
                      <td><code>&amp;lt;</code></td>
                      <td><code>&amp;#60;</code></td>
                      <td>Less than</td>
                    </tr>
                    <tr>
                      <td>&gt;</td>
                      <td><code>&amp;gt;</code></td>
                      <td><code>&amp;#62;</code></td>
                      <td>Greater than</td>
                    </tr>
                    <tr>
                      <td>&amp;</td>
                      <td><code>&amp;amp;</code></td>
                      <td><code>&amp;#38;</code></td>
                      <td>Ampersand</td>
                    </tr>
                    <tr>
                      <td>"</td>
                      <td><code>&amp;quot;</code></td>
                      <td><code>&amp;#34;</code></td>
                      <td>Double quote</td>
                    </tr>
                    <tr>
                      <td>'</td>
                      <td><code>&amp;apos;</code></td>
                      <td><code>&amp;#39;</code></td>
                      <td>Single quote</td>
                    </tr>
                    <tr>
                      <td>©</td>
                      <td><code>&amp;copy;</code></td>
                      <td><code>&amp;#169;</code></td>
                      <td>Copyright</td>
                    </tr>
                    <tr>
                      <td>®</td>
                      <td><code>&amp;reg;</code></td>
                      <td><code>&amp;#174;</code></td>
                      <td>Registered trademark</td>
                    </tr>
                    <tr>
                      <td>™</td>
                      <td><code>&amp;trade;</code></td>
                      <td><code>&amp;#8482;</code></td>
                      <td>Trademark</td>
                    </tr>
                    <tr>
                      <td> </td>
                      <td><code>&amp;nbsp;</code></td>
                      <td><code>&amp;#160;</code></td>
                      <td>Non-breaking space</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-currency-exchange"></i> Special Characters</h3>
              <p>Entities can also display special characters not on your keyboard.</p>

              <div className="example-box">
                <div className="example-title">Special Character Examples:</div>
                <pre><code>{`&amp;euro;   &amp;#8364;  &euro;   (Euro)
&amp;cent;   &amp;#162;   &cent;   (Cent)
&amp;pound;  &amp;#163;   &pound;  (Pound)
&amp;yen;    &amp;#165;   &yen;    (Yen)
&amp;sect;   &amp;#167;   &sect;   (Section)
&amp;copy;   &amp;#169;   &copy;   (Copyright)
&amp;reg;    &amp;#174;   &reg;    (Registered)
&amp;deg;    &amp;#176;   &deg;    (Degree)
&amp;plusmn; &amp;#177;   &plusmn; (Plus-minus)
&amp;sup2;   &amp;#178;   &sup2;   (Superscript 2)
&amp;sup3;   &amp;#179;   &sup3;   (Superscript 3)
&amp;micro;  &amp;#181;   &micro;  (Micro)
&amp;para;   &amp;#182;   &para;   (Paragraph)
&amp;middot; &amp;#183;   &middot; (Middle dot)
&amp;frac14; &amp;#188;   &frac14; (1/4 fraction)
&amp;frac12; &amp;#189;   &frac12; (1/2 fraction)
&amp;frac34; &amp;#190;   &frac34; (3/4 fraction)
&amp;times;  &amp;#215;   &times;  (Multiplication)
&amp;divide; &amp;#247;   &divide; (Division)`}</code></pre>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-emoji-smile"></i> Emoji Entities</h3>
              <p>Emojis can also be represented with entities (though direct Unicode is often better).</p>
              <pre className="mb-3"><code>{`&amp;#128512; &#128512; (Grinning face)
&amp;#128513; &#128513; (Smiling face)
&amp;#128514; &#128514; (Face with tears of joy)
&amp;#128515; &#128515; (Smiling face with smiling eyes)`}</code></pre>
            </section>

            <section id="multimedia" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-play-circle"></i> Multimedia</h2>
              <p className="mb-3">HTML5 provides native support for audio and video without plugins.</p>

              <h3 className="h4 mb-2"><i className="bi bi-film"></i> Video Element</h3>
              <p>The <code>&lt;video&gt;</code> tag embeds video content.</p>

              <div className="example-box">
                <div className="example-title">Basic Video Example:</div>
                <pre><code>{`<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>`}</code></pre>
                <video width="320" height="240" controls style={{ background: '#000' }}>
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-gear"></i> Video Attributes</h3>
              <ul>
                <li><code>src</code>: Video file URL</li>
                <li><code>width</code>/<code>height</code>: Dimensions</li>
                <li><code>controls</code>: Show playback controls</li>
                <li><code>autoplay</code>: Start playing automatically</li>
                <li><code>loop</code>: Loop the video</li>
                <li><code>muted</code>: Start muted</li>
              </ul>

              <h3 className="h4 mb-2"><i className="bi bi-music-note-beamed"></i> Audio Element</h3>
              <p>The <code>&lt;audio&gt;</code> tag embeds sound content.</p>

              <div className="example-box">
                <div className="example-title">Basic Audio Example:</div>
                <pre><code>{`<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>`}</code></pre>
                <audio controls>
                  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-gear"></i> Audio Attributes</h3>
              <ul>
                <li><code>src</code>: Audio file URL</li>
                <li><code>controls</code>: Show playback controls</li>
                <li><code>autoplay</code>: Start playing automatically</li>
                <li><code>loop</code>: Loop the audio</li>
                <li><code>muted</code>: Start muted</li>
              </ul>

              <h3 className="h4 mb-2"><i className="bi bi-file-earmark-play"></i> Source Element</h3>
              <p>The <code>&lt;source&gt;</code> tag specifies multiple media resources.</p>
              <pre className="mb-3"><code>{`<video controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    Your browser does not support the video tag.
</video>`}</code></pre>

              <h3 className="h4 mb-2"><i className="bi bi-filetype-mp4"></i> Supported Formats</h3>
              <p>Common formats for maximum compatibility:</p>

              <div className="example-box">
                <div className="example-title">Video Formats:</div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Format</th>
                      <th>MIME Type</th>
                      <th>Browser Support</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>MP4 (H.264)</td>
                      <td>video/mp4</td>
                      <td>All modern browsers</td>
                    </tr>
                    <tr>
                      <td>WebM (VP8/VP9)</td>
                      <td>video/webm</td>
                      <td>Chrome, Firefox, Edge</td>
                    </tr>
                    <tr>
                      <td>Ogg (Theora)</td>
                      <td>video/ogg</td>
                      <td>Firefox, Chrome, Opera</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="example-box">
                <div className="example-title">Audio Formats:</div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Format</th>
                      <th>MIME Type</th>
                      <th>Browser Support</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>MP3</td>
                      <td>audio/mpeg</td>
                      <td>All modern browsers</td>
                    </tr>
                    <tr>
                      <td>WAV</td>
                      <td>audio/wav</td>
                      <td>All modern browsers</td>
                    </tr>
                    <tr>
                      <td>Ogg (Vorbis)</td>
                      <td>audio/ogg</td>
                      <td>Firefox, Chrome, Opera</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="comments" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-chat-left-text"></i> HTML Comments</h2>
              <p className="mb-3">Comments are ignored by browsers and useful for documentation.</p>

              <div className="example-box">
                <div className="example-title">Comment Syntax:</div>
                <pre><code>{`<!-- This is a comment -->

<!-- 
  Multi-line
  comment 
-->

<!-- Conditional comments for IE (deprecated) -->
<!--[if IE]>
    <p>This appears in Internet Explorer</p>
<![endif]-->`}</code></pre>
              </div>

              <h3 className="h4 mb-2"><i className="bi bi-lightbulb"></i> Best Practices</h3>
              <ul>
                <li>Use comments to explain complex sections</li>
                <li>Mark TODO items for future work</li>
                <li>Remove commented-out code before publishing</li>
                <li>Avoid excessive commenting of obvious code</li>
              </ul>
            </section>
          </main>
        </div>
      </div>
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>HTML Notes &copy; 2025 | Designed by Mugilvannan P</p>
        </div>
      </footer>
    </div>
  );
}

export default Html;