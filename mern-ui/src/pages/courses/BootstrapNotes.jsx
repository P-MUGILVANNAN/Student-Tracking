import React from 'react';

function BootstrapNotes() {
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
          .color-box {
            width: 100%;
            height: 40px;
            border-radius: 4px;
            margin-bottom: 5px;
          }
          .example-box {
            border: 1px solid #dee2e6;
            padding: 15px;
            margin: 10px 0;
            border-radius: 4px;
            background-color: white;
          }
        `}
            </style>

            <header className="bg-secondary text-white py-4">
                <div className="container">
                    <h1 className="display-4 fw-bold"><i className="bi bi-bootstrap"></i> Bootstrap Notes</h1>
                    <p className="lead">Your Comprehensive Guide to Bootstrap Framework</p>
                </div>
            </header>

            <div className="container py-4">
                <div className="row">
                    <aside className="col-lg-3 sidebar">
                        <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
                        <nav className="nav flex-column">
                            <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
                            <a className="nav-link" href="#inclusion"><i className="bi bi-code-square"></i> Including Bootstrap</a>
                            <a className="nav-link" href="#colors"><i className="bi bi-palette"></i> Colors</a>
                            <a className="nav-link" href="#breakpoints"><i className="bi bi-grid"></i> Breakpoints</a>
                            <a className="nav-link" href="#containers"><i className="bi bi-border-all"></i> Containers</a>
                            <a className="nav-link" href="#grid"><i className="bi bi-grid-3x3"></i> Grid System</a>
                            <a className="nav-link" href="#typography"><i className="bi bi-type"></i> Typography</a>
                            <a className="nav-link" href="#images"><i className="bi bi-image"></i> Images</a>
                            <a className="nav-link" href="#tables"><i className="bi bi-table"></i> Tables</a>
                            <a className="nav-link" href="#forms"><i className="bi bi-input-cursor-text"></i> Forms</a>
                            <a className="nav-link" href="#buttons"><i className="bi bi-joystick"></i> Buttons</a>
                            <a className="nav-link" href="#utilities"><i className="bi bi-tools"></i> Utilities</a>
                            <a className="nav-link" href="#components"><i className="bi bi-collection"></i> Components</a>
                            <a className="nav-link" href="#icons"><i className="bi bi-emoji-smile"></i> Icons</a>
                        </nav>
                    </aside>

                    <main className="col-lg-9">
                        <section id="introduction" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> What is Bootstrap?</h2>
                            <div className="property-card">
                                <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.</p>
                                <ul>
                                    <li><strong>Version:</strong> Current version is Bootstrap 5 (v5.3.3 as of 2024)</li>
                                    <li><strong>Creator:</strong> Originally developed by Twitter (now maintained by the Bootstrap team)</li>
                                    <li><strong>Features:</strong> Includes design templates for typography, forms, buttons, navigation, and other interface components</li>
                                    <li><strong>Responsive:</strong> Built with responsive design in mind, adapting to phones, tablets, and desktops</li>
                                    <li><strong>Components:</strong> Provides pre-styled components like alerts, modals, carousels, etc.</li>
                                    <li><strong>Utilities:</strong> Includes utility classes for quick styling without custom CSS</li>
                                </ul>
                                <div className="example-box">
                                    <h5 className="h6">Key Advantages:</h5>
                                    <ul>
                                        <li>Saves development time with pre-built components</li>
                                        <li>Ensures consistency across browsers and devices</li>
                                        <li>Responsive grid system makes layout creation easy</li>
                                        <li>Large community and extensive documentation</li>
                                        <li>Customizable through Sass variables</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="inclusion" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> How to include Bootstrap</h2>
                            <div className="property-card">
                                <h4 className="h5">CDN Method (Recommended for quick setup)</h4>
                                <pre className="mb-3"><code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  
  <title>Bootstrap Demo</title>
</head>
<body>
  <!-- Your content here -->
  
  <!-- Bootstrap JS Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}</code></pre>
                                
                                <h4 className="h5 mt-4">npm Installation (For build systems)</h4>
                                <pre className="mb-3"><code>{`npm install bootstrap@5.3.3`}</code></pre>
                                
                                <h4 className="h5 mt-4">Download Method</h4>
                                <p>Download compiled CSS and JS from <a href="https://getbootstrap.com/" target="_blank">getbootstrap.com</a> and include in your project.</p>
                                
                                <div className="alert alert-info mt-3">
                                    <strong>Note:</strong> Always include the viewport meta tag for proper responsive behavior on mobile devices.
                                </div>
                            </div>
                        </section>

                        <section id="colors" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-palette"></i> Colors</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="property-card">
                                        <h4 className="h5">Theme Colors</h4>
                                        <p>Bootstrap includes a set of predefined colors for consistent styling.</p>
                                        
                                        <div class="color-box bg-primary"></div>
                                        <p><code>primary</code> - Main brand color (#0d6efd)</p>
                                        
                                        <div class="color-box bg-secondary"></div>
                                        <p><code>secondary</code> - Gray color (#6c757d)</p>
                                        
                                        <div class="color-box bg-success"></div>
                                        <p><code>success</code> - Green color (#198754)</p>
                                        
                                        <div class="color-box bg-danger"></div>
                                        <p><code>danger</code> - Red color (#dc3545)</p>
                                        
                                        <div class="color-box bg-warning"></div>
                                        <p><code>warning</code> - Yellow color (#ffc107)</p>
                                        
                                        <div class="color-box bg-info"></div>
                                        <p><code>info</code> - Light blue (#0dcaf0)</p>
                                        
                                        <div class="color-box bg-light"></div>
                                        <p><code>light</code> - Light gray (#f8f9fa)</p>
                                        
                                        <div class="color-box bg-dark"></div>
                                        <p><code>dark</code> - Dark gray (#212529)</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="property-card">
                                        <h4 className="h5">Usage Examples</h4>
                                        <pre className="mb-3"><code>{`<!-- Text colors -->
<p class="text-primary">Primary text</p>
<p class="text-success">Success text</p>

<!-- Background colors -->
<div class="bg-warning p-3">Warning background</div>
<div class="bg-info text-white p-3">Info background</div>

<!-- Button colors -->
<button class="btn btn-danger">Delete</button>
<button class="btn btn-outline-primary">Outline</button>

<!-- Alert colors -->
<div class="alert alert-success">Success message</div>`}</code></pre>
                                    </div>
                                    <div className="property-card mt-3">
                                        <h4 className="h5">Customizing Colors</h4>
                                        <p>You can override Bootstrap's default colors by modifying Sass variables:</p>
                                        <pre className="mb-3"><code>{`// Customize primary color
$primary: #ff5722;

// Import Bootstrap
@import "bootstrap/scss/bootstrap";`}</code></pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="breakpoints" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-grid"></i> Breakpoints</h2>
                            <div className="property-card">
                                <p>Breakpoints are the building blocks of responsive design in Bootstrap. They define the minimum viewport width at which layout changes occur.</p>
                                
                                <table className="table table-bordered">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Breakpoint</th>
                                            <th>Class Infix</th>
                                            <th>Dimensions</th>
                                            <th>Usage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>X-Small</td>
                                            <td><em>None</em></td>
                                            <td>&lt;576px</td>
                                            <td>Default styles (mobile first)</td>
                                        </tr>
                                        <tr>
                                            <td>Small</td>
                                            <td><code>sm</code></td>
                                            <td>≥576px</td>
                                            <td>Phones (landscape)</td>
                                        </tr>
                                        <tr>
                                            <td>Medium</td>
                                            <td><code>md</code></td>
                                            <td>≥768px</td>
                                            <td>Tablets</td>
                                        </tr>
                                        <tr>
                                            <td>Large</td>
                                            <td><code>lg</code></td>
                                            <td>≥992px</td>
                                            <td>Laptops</td>
                                        </tr>
                                        <tr>
                                            <td>X-Large</td>
                                            <td><code>xl</code></td>
                                            <td>≥1200px</td>
                                            <td>Desktops</td>
                                        </tr>
                                        <tr>
                                            <td>XX-Large</td>
                                            <td><code>xxl</code></td>
                                            <td>≥1400px</td>
                                            <td>Large desktops</td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                                <h4 className="h5 mt-4">Breakpoint Usage Example</h4>
                                <pre className="mb-3"><code>{`<!-- Column will be 100% width on mobile, 50% on tablets, 25% on desktop -->
<div class="col-12 col-md-6 col-lg-3">Content</div>

<!-- Text will be centered on mobile, left-aligned on tablets and up -->
<p class="text-center text-md-start">Responsive text alignment</p>

<!-- Margin bottom 3 on mobile, margin bottom 5 on desktop -->
<div class="mb-3 mb-lg-5">Spacing example</div>`}</code></pre>
                                
                                <div className="alert alert-warning mt-3">
                                    <strong>Note:</strong> Bootstrap uses a mobile-first approach, meaning styles apply to all breakpoints unless overridden by a larger breakpoint.
                                </div>
                            </div>
                        </section>

                        <section id="containers" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-border-all"></i> Containers</h2>
                            <div className="property-card">
                                <p>Containers are the most basic layout element in Bootstrap and are required when using the grid system.</p>
                                
                                <h4 className="h5">Container Types</h4>
                                <pre className="mb-3"><code>{`<!-- Default container (responsive fixed width) -->
<div class="container">
  <!-- Content here -->
</div>

<!-- Fluid container (full width) -->
<div class="container-fluid">
  <!-- Content here -->
</div>

<!-- Responsive containers (specific to breakpoints) -->
<div class="container-sm">100% wide until sm breakpoint</div>
<div class="container-md">100% wide until md breakpoint</div>
<div class="container-lg">100% wide until lg breakpoint</div>
<div class="container-xl">100% wide until xl breakpoint</div>
<div class="container-xxl">100% wide until xxl breakpoint</div>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Container Behavior</h4>
                                <table className="table table-bordered">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Container Type</th>
                                            <th>Extra Small (&lt;576px)</th>
                                            <th>Small (≥576px)</th>
                                            <th>Medium (≥768px)</th>
                                            <th>Large (≥992px)</th>
                                            <th>X-Large (≥1200px)</th>
                                            <th>XX-Large (≥1400px)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>.container</code></td>
                                            <td>100%</td>
                                            <td>540px</td>
                                            <td>720px</td>
                                            <td>960px</td>
                                            <td>1140px</td>
                                            <td>1320px</td>
                                        </tr>
                                        <tr>
                                            <td><code>.container-sm</code></td>
                                            <td>100%</td>
                                            <td>540px</td>
                                            <td>720px</td>
                                            <td>960px</td>
                                            <td>1140px</td>
                                            <td>1320px</td>
                                        </tr>
                                        <tr>
                                            <td><code>.container-md</code></td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>720px</td>
                                            <td>960px</td>
                                            <td>1140px</td>
                                            <td>1320px</td>
                                        </tr>
                                        <tr>
                                            <td><code>.container-lg</code></td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>960px</td>
                                            <td>1140px</td>
                                            <td>1320px</td>
                                        </tr>
                                        <tr>
                                            <td><code>.container-xl</code></td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>1140px</td>
                                            <td>1320px</td>
                                        </tr>
                                        <tr>
                                            <td><code>.container-xxl</code></td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>1320px</td>
                                        </tr>
                                        <tr>
                                            <td><code>.container-fluid</code></td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                                <div className="example-box mt-3">
                                    <h5 className="h6">Practical Example</h5>
                                    <div className="container border p-3 mb-3">
                                        <p>This is a default <code>.container</code> with responsive fixed width.</p>
                                    </div>
                                    <div className="container-fluid border p-3">
                                        <p>This is a <code>.container-fluid</code> that spans the full width.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="grid" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-grid-3x3"></i> Grid System</h2>
                            <div className="property-card">
                                <p>Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content.</p>
                                
                                <h4 className="h5">Basic Grid Structure</h4>
                                <pre className="mb-3"><code>{`<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
  </div>
</div>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Key Concepts</h4>
                                <ul>
                                    <li><strong>12-column system:</strong> The grid is divided into 12 equal columns</li>
                                    <li><strong>Rows:</strong> Must be placed within a container and contain columns</li>
                                    <li><strong>Columns:</strong> Immediate children of rows that hold your content</li>
                                    <li><strong>Gutters:</strong> Padding between columns (can be adjusted)</li>
                                    <li><strong>Responsive:</strong> Columns can be sized differently at different breakpoints</li>
                                </ul>
                                
                                <h4 className="h5 mt-4">Responsive Grid Example</h4>
                                <pre className="mb-3"><code>{`<div class="container">
  <div class="row">
    <!-- Full width on mobile, half on tablet, one third on desktop -->
    <div class="col-12 col-md-6 col-lg-4">Column 1</div>
    <div class="col-12 col-md-6 col-lg-4">Column 2</div>
    <div class="col-12 col-md-12 col-lg-4">Column 3</div>
  </div>
</div>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Grid Options</h4>
                                <table className="table table-bordered">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Breakpoint</th>
                                            <th>Class Prefix</th>
                                            <th>Columns</th>
                                            <th>Gutters</th>
                                            <th>Container Width</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>X-Small (&lt;576px)</td>
                                            <td><code>.col-</code></td>
                                            <td>Auto-layout</td>
                                            <td>1.5rem (24px)</td>
                                            <td>None (auto)</td>
                                        </tr>
                                        <tr>
                                            <td>Small (≥576px)</td>
                                            <td><code>.col-sm-</code></td>
                                            <td>Up to 12</td>
                                            <td>1.5rem (24px)</td>
                                            <td>540px</td>
                                        </tr>
                                        <tr>
                                            <td>Medium (≥768px)</td>
                                            <td><code>.col-md-</code></td>
                                            <td>Up to 12</td>
                                            <td>1.5rem (24px)</td>
                                            <td>720px</td>
                                        </tr>
                                        <tr>
                                            <td>Large (≥992px)</td>
                                            <td><code>.col-lg-</code></td>
                                            <td>Up to 12</td>
                                            <td>1.5rem (24px)</td>
                                            <td>960px</td>
                                        </tr>
                                        <tr>
                                            <td>X-Large (≥1200px)</td>
                                            <td><code>.col-xl-</code></td>
                                            <td>Up to 12</td>
                                            <td>1.5rem (24px)</td>
                                            <td>1140px</td>
                                        </tr>
                                        <tr>
                                            <td>XX-Large (≥1400px)</td>
                                            <td><code>.col-xxl-</code></td>
                                            <td>Up to 12</td>
                                            <td>1.5rem (24px)</td>
                                            <td>1320px</td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                                <h4 className="h5 mt-4">Advanced Grid Features</h4>
                                <pre className="mb-3"><code>{`<!-- Equal-width columns -->
<div class="row">
  <div class="col">1 of 2</div>
  <div class="col">2 of 2</div>
</div>

<!-- Setting one column width -->
<div class="row">
  <div class="col-8">8 columns wide</div>
  <div class="col-4">4 columns wide</div>
</div>

<!-- Variable width content -->
<div class="row">
  <div class="col-md-auto">Variable width</div>
  <div class="col">Remaining width</div>
</div>

<!-- Vertical alignment -->
<div class="row align-items-start">
  <div class="col">Top</div>
</div>

<!-- Horizontal alignment -->
<div class="row justify-content-center">
  <div class="col-4">Centered</div>
</div>

<!-- Column breaks -->
<div class="row">
  <div class="col-6 col-sm-3">Column 1</div>
  <div class="col-6 col-sm-3">Column 2</div>
  <div class="w-100"></div> <!-- Break to new line -->
  <div class="col-6 col-sm-3">Column 3</div>
  <div class="col-6 col-sm-3">Column 4</div>
</div>`}</code></pre>
                                
                                <div className="example-box mt-3">
                                    <h5 className="h6">Practical Grid Example</h5>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-lg-3 p-3 bg-primary text-white">Column 1</div>
                                            <div className="col-12 col-md-6 col-lg-3 p-3 bg-success text-white">Column 2</div>
                                            <div className="col-12 col-md-6 col-lg-3 p-3 bg-warning text-dark">Column 3</div>
                                            <div className="col-12 col-md-6 col-lg-3 p-3 bg-danger text-white">Column 4</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="typography" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-type"></i> Typography</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="property-card">
                                        <h4 className="h5">Headings</h4>
                                        <p>Bootstrap provides styled heading classes that match the styling of HTML headings.</p>
                                        <pre className="mb-3"><code>{`<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>`}</code></pre>
                                        <div className="example-box">
                                            <p className="h1">h1. Heading</p>
                                            <p className="h2">h2. Heading</p>
                                            <p className="h3">h3. Heading</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="property-card">
                                        <h4 className="h5">Display Headings</h4>
                                        <p>Larger, more prominent heading styles for when you need more attention.</p>
                                        <pre className="mb-3"><code>{`<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>`}</code></pre>
                                        <div className="example-box">
                                            <p className="display-6">Display 6 Example</p>
                                            <p className="display-5">Display 5 Example</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="property-card">
                                        <h4 className="h5">Text Decoration</h4>
                                        <pre className="mb-3"><code>{`<!-- Remove underline from links -->
<a href="#" class="text-decoration-none">Non-underlined link</a>

<!-- Text decoration -->
<p class="text-decoration-underline">Underlined text</p>
<p class="text-decoration-line-through">Strikethrough text</p>`}</code></pre>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="property-card">
                                        <h4 className="h5">Text Alignment</h4>
                                        <pre className="mb-3"><code>{`<p class="text-start">Left aligned text</p>
<p class="text-center">Center aligned text</p>
<p class="text-end">Right aligned text</p>

<!-- Responsive alignment -->
<p class="text-sm-end">Right aligned on sm and up</p>
<p class="text-md-center">Center aligned on md and up</p>
<p class="text-lg-start">Left aligned on lg and up</p>`}</code></pre>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="property-card">
                                        <h4 className="h5">Text Transformation</h4>
                                        <pre className="mb-3"><code>{`<p class="text-lowercase">LOWERCASE TEXT</p>
<p class="text-uppercase">uppercase text</p>
<p class="text-capitalize">capitalized text</p>`}</code></pre>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="property-card">
                                        <h4 className="h5">Font Weight and Italics</h4>
                                        <pre className="mb-3"><code>{`<p class="fw-bold">Bold text</p>
<p class="fw-bolder">Bolder weight text</p>
<p class="fw-semibold">Semibold weight text</p>
<p class="fw-normal">Normal weight text</p>
<p class="fw-light">Light weight text</p>
<p class="fw-lighter">Lighter weight text</p>
<p class="fst-italic">Italic text</p>
<p class="fst-normal">Normal font style</p>`}</code></pre>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="property-card">
                                        <h4 className="h5">Text Colors</h4>
                                        <pre className="mb-3"><code>{`<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-success">Success text</p>
<p class="text-danger">Danger text</p>
<p class="text-warning">Warning text</p>
<p class="text-info">Info text</p>
<p class="text-light bg-dark">Light text</p>
<p class="text-dark">Dark text</p>
<p class="text-body">Default body color</p>
<p class="text-muted">Muted text</p>
<p class="text-white bg-dark">White text</p>
<p class="text-black-50">Black with 50% opacity</p>
<p class="text-white-50 bg-dark">White with 50% opacity</p>`}</code></pre>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="property-card">
                                        <h4 className="h5">Lists</h4>
                                        <pre className="mb-3"><code>{`<!-- Unstyled list -->
<ul class="list-unstyled">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Inline list -->
<ul class="list-inline">
  <li class="list-inline-item">Item 1</li>
  <li class="list-inline-item">Item 2</li>
</ul>

<!-- Description list alignment -->
<dl class="row">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>
</dl>`}</code></pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="images" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-image"></i> Images</h2>
                            <div className="property-card">
                                <h4 className="h5">Responsive Images</h4>
                                <pre className="mb-3"><code>{`<!-- Image scales with parent element -->
<img src="..." class="img-fluid" alt="Responsive image">

<!-- Image with thumbnail styling -->
<img src="..." class="img-thumbnail" alt="Thumbnail">

<!-- Aligning images -->
<img src="..." class="rounded float-start" alt="...">
<img src="..." class="rounded float-end" alt="...">
<img src="..." class="rounded mx-auto d-block" alt="...">

<!-- Centered image with max-width -->
<div class="text-center">
  <img src="..." class="rounded" alt="...">
</div>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Image Shapes</h4>
                                <pre className="mb-3"><code>{`<img src="..." class="rounded" alt="...">
<img src="..." class="rounded-top" alt="...">
<img src="..." class="rounded-end" alt="...">
<img src="..." class="rounded-bottom" alt="...">
<img src="..." class="rounded-start" alt="...">
<img src="..." class="rounded-circle" alt="...">
<img src="..." class="rounded-pill" alt="...">
<img src="..." class="rounded-0" alt="...">
<img src="..." class="rounded-1" alt="...">
<img src="..." class="rounded-2" alt="...">
<img src="..." class="rounded-3" alt="...">
<img src="..." class="rounded-4" alt="...">
<img src="..." class="rounded-5" alt="...">`}</code></pre>
                                
                                <div className="example-box">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://via.placeholder.com/300" className="img-fluid rounded mb-3" alt="Placeholder"/>
                                            <p className="text-center"><code>.rounded</code></p>
                                        </div>
                                        <div className="col-md-4">
                                            <img src="https://via.placeholder.com/300" className="img-fluid rounded-circle mb-3" alt="Placeholder"/>
                                            <p className="text-center"><code>.rounded-circle</code></p>
                                        </div>
                                        <div className="col-md-4">
                                            <img src="https://via.placeholder.com/300x100" className="img-fluid rounded-pill mb-3" alt="Placeholder"/>
                                            <p className="text-center"><code>.rounded-pill</code></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="tables" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-table"></i> Tables</h2>
                            <div className="property-card">
                                <h4 className="h5">Basic Table</h4>
                                <pre className="mb-3"><code>{`<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
  </tbody>
</table>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Table Variations</h4>
                                <pre className="mb-3"><code>{`<!-- Table with dark header -->
<table class="table">
  <thead class="table-dark">
    ...
  </thead>
</table>

<!-- Striped rows -->
<table class="table table-striped">
  ...
</table>

<!-- Bordered table -->
<table class="table table-bordered">
  ...
</table>

<!-- Borderless table -->
<table class="table table-borderless">
  ...
</table>

<!-- Hoverable rows -->
<table class="table table-hover">
  ...
</table>

<!-- Small table -->
<table class="table table-sm">
  ...
</table>

<!-- Colored tables -->
<table class="table table-primary">
  ...
</table>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Responsive Tables</h4>
                                <pre className="mb-3"><code>{`<!-- Horizontal scrolling on small devices -->
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>

<!-- Responsive with breakpoint -->
<div class="table-responsive-sm">...</div>
<div class="table-responsive-md">...</div>
<div class="table-responsive-lg">...</div>
<div class="table-responsive-xl">...</div>
<div class="table-responsive-xxl">...</div>`}</code></pre>
                                
                                <div className="example-box">
                                    <h5 className="h6">Practical Example</h5>
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th>#</th>
                                                    <th>First</th>
                                                    <th>Last</th>
                                                    <th>Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th>2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th>3</th>
                                                    <td colSpan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="forms" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-input-cursor-text"></i> Forms</h2>
                            <div className="property-card">
                                <h4 className="h5">Basic Form</h4>
                                <pre className="mb-3"><code>{`<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1">
    <div id="emailHelp" class="form-text">We'll never share your email.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Form Controls</h4>
                                <pre className="mb-3"><code>{`<!-- Text input -->
<input type="text" class="form-control">

<!-- Select menu -->
<select class="form-select">
  <option selected>Open this menu</option>
  <option value="1">One</option>
</select>

<!-- Textarea -->
<textarea class="form-control"></textarea>

<!-- File input -->
<input class="form-control" type="file">

<!-- Color picker -->
<input type="color" class="form-control form-control-color">

<!-- Range input -->
<input type="range" class="form-range">

<!-- Checkboxes -->
<div class="form-check">
  <input class="form-check-input" type="checkbox">
  <label class="form-check-label">Checkbox</label>
</div>

<!-- Radios -->
<div class="form-check">
  <input class="form-check-input" type="radio">
  <label class="form-check-label">Radio</label>
</div>

<!-- Switches -->
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch">
</div>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Sizing</h4>
                                <pre className="mb-3"><code>{`<!-- Large -->
<input class="form-control form-control-lg" type="text">

<!-- Small -->
<input class="form-control form-control-sm" type="text">

<!-- Select sizing -->
<select class="form-select form-select-lg">
  <option>Large select</option>
</select>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Disabled and Readonly</h4>
                                <pre className="mb-3"><code>{`<!-- Disabled -->
<input class="form-control" type="text" disabled>

<!-- Readonly -->
<input class="form-control" type="text" readonly>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Validation</h4>
                                <pre className="mb-3"><code>{`<!-- Valid -->
<div class="mb-3">
  <label class="form-label">Valid input</label>
  <input type="text" class="form-control is-valid">
  <div class="valid-feedback">Looks good!</div>
</div>

<!-- Invalid -->
<div class="mb-3">
  <label class="form-label">Invalid input</label>
  <input type="text" class="form-control is-invalid">
  <div class="invalid-feedback">Please provide a valid value.</div>
</div>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Input Groups</h4>
                                <pre className="mb-3"><code>{`<!-- Basic example -->
<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>

<!-- Multiple addons -->
<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
  <input type="text" class="form-control">
</div>

<!-- Button addons -->
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <input type="text" class="form-control">
</div>

<!-- Dropdowns -->
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
    Dropdown
  </button>
  <input type="text" class="form-control">
</div>`}</code></pre>
                                
                                <div className="example-box">
                                    <h5 className="h6">Practical Form Example</h5>
                                    <form>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <label htmlFor="firstName" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="firstName" required/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="lastName" required/>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="password" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="bio" className="form-label">Bio</label>
                                            <textarea className="form-control" id="bio" rows="3"></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Skills</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="html"/>
                                                <label className="form-check-label" htmlFor="html">HTML</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="css"/>
                                                <label className="form-check-label" htmlFor="css">CSS</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="js"/>
                                                <label className="form-check-label" htmlFor="js">JavaScript</label>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Experience Level</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="experience" id="junior"/>
                                                <label className="form-check-label" htmlFor="junior">Junior</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="experience" id="mid"/>
                                                <label className="form-check-label" htmlFor="mid">Mid-level</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="experience" id="senior"/>
                                                <label className="form-check-label" htmlFor="senior">Senior</label>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="country" className="form-label">Country</label>
                                            <select className="form-select" id="country">
                                                <option>Select country</option>
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>United Kingdom</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </section>

                        <section id="buttons" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-joystick"></i> Buttons</h2>
                            <div className="property-card">
                                <h4 className="h5">Button Styles</h4>
                                <pre className="mb-3"><code>{`<!-- Solid buttons -->
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>

<!-- Outline buttons -->
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Button Sizes</h4>
                                <pre className="mb-3"><code>{`<button type="button" class="btn btn-primary btn-lg">Large</button>
<button type="button" class="btn btn-primary">Default</button>
<button type="button" class="btn btn-primary btn-sm">Small</button>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Disabled State</h4>
                                <pre className="mb-3"><code>{`<button type="button" class="btn btn-primary" disabled>Disabled</button>
<a class="btn btn-primary disabled" role="button" aria-disabled="true">Disabled link</a>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Button Groups</h4>
                                <pre className="mb-3"><code>{`<!-- Basic group -->
<div class="btn-group" role="group">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>

<!-- Toolbar -->
<div class="btn-toolbar" role="toolbar">
  <div class="btn-group me-2">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
  </div>
  <div class="btn-group me-2">
    <button type="button" class="btn btn-secondary">3</button>
  </div>
</div>

<!-- Vertical group -->
<div class="btn-group-vertical">
  <button type="button" class="btn btn-primary">Top</button>
  <button type="button" class="btn btn-primary">Middle</button>
</div>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Toggle Buttons</h4>
                                <pre className="mb-3"><code>{`<!-- Checkbox toggle -->
<input type="checkbox" class="btn-check" id="btncheck1">
<label class="btn btn-outline-primary" for="btncheck1">Toggle</label>

<!-- Radio toggle -->
<input type="radio" class="btn-check" name="options" id="option1">
<label class="btn btn-outline-primary" for="option1">Radio 1</label>`}</code></pre>
                                
                                <div className="example-box">
                                    <h5 className="h6">Practical Button Examples</h5>
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        <button type="button" className="btn btn-primary">Primary</button>
                                        <button type="button" className="btn btn-secondary">Secondary</button>
                                        <button type="button" className="btn btn-success">Success</button>
                                        <button type="button" className="btn btn-danger">Danger</button>
                                        <button type="button" className="btn btn-warning">Warning</button>
                                        <button type="button" className="btn btn-info">Info</button>
                                        <button type="button" className="btn btn-light">Light</button>
                                        <button type="button" className="btn btn-dark">Dark</button>
                                        <button type="button" className="btn btn-link">Link</button>
                                    </div>
                                    
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        <button type="button" className="btn btn-outline-primary">Primary</button>
                                        <button type="button" className="btn btn-outline-secondary">Secondary</button>
                                        <button type="button" className="btn btn-outline-success">Success</button>
                                        <button type="button" className="btn btn-outline-danger">Danger</button>
                                        <button type="button" className="btn btn-outline-warning">Warning</button>
                                        <button type="button" className="btn btn-outline-info">Info</button>
                                        <button type="button" className="btn btn-outline-light">Light</button>
                                        <button type="button" className="btn btn-outline-dark">Dark</button>
                                    </div>
                                    
                                    <div className="d-flex flex-wrap gap-2 mb-3 align-items-center">
                                        <button type="button" className="btn btn-primary btn-lg">Large</button>
                                        <button type="button" className="btn btn-primary">Default</button>
                                        <button type="button" className="btn btn-primary btn-sm">Small</button>
                                    </div>
                                    
                                    <div className="btn-group mb-3" role="group">
                                        <button type="button" className="btn btn-primary">Left</button>
                                        <button type="button" className="btn btn-primary">Middle</button>
                                        <button type="button" className="btn btn-primary">Right</button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="utilities" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-tools"></i> Utility Classes</h2>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-border-width"></i> Borders</h4>
                                <pre className="mb-3"><code>{`<!-- Additive -->
<div class="border"></div>
<div class="border-top"></div>
<div class="border-end"></div>
<div class="border-bottom"></div>
<div class="border-start"></div>

<!-- Subtractive -->
<div class="border-0"></div>
<div class="border-top-0"></div>

<!-- Border color -->
<div class="border border-primary"></div>
<div class="border border-secondary"></div>

<!-- Border width -->
<div class="border border-1"></div>
<div class="border border-2"></div>
<div class="border border-3"></div>
<div class="border border-4"></div>
<div class="border border-5"></div>

<!-- Border radius -->
<div class="rounded"></div>
<div class="rounded-top"></div>
<div class="rounded-end"></div>
<div class="rounded-bottom"></div>
<div class="rounded-start"></div>
<div class="rounded-circle"></div>
<div class="rounded-pill"></div>
<div class="rounded-0"></div>
<div class="rounded-1"></div>
<div class="rounded-2"></div>
<div class="rounded-3"></div>`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-layout-three-columns"></i> Display</h4>
                                <pre className="mb-3"><code>{`<!-- Display classes -->
<div class="d-inline">inline</div>
<div class="d-inline-block">inline-block</div>
<div class="d-block">block</div>
<div class="d-grid">grid</div>
<div class="d-table">table</div>
<div class="d-table-row">table-row</div>
<div class="d-table-cell">table-cell</div>
<div class="d-flex">flex</div>
<div class="d-inline-flex">inline-flex</div>
<div class="d-none">none</div>

<!-- Responsive display -->
<div class="d-sm-none">Hidden on sm and up</div>
<div class="d-md-flex">Flex on md and up</div>
<div class="d-lg-inline-block">Inline block on lg and up</div>`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-distribute-vertical"></i> Flex</h4>
                                <pre className="mb-3"><code>{`<!-- Direction -->
<div class="d-flex flex-row">Horizontal (default)</div>
<div class="d-flex flex-row-reverse">Horizontal reversed</div>
<div class="d-flex flex-column">Vertical</div>
<div class="d-flex flex-column-reverse">Vertical reversed</div>

<!-- Justify content -->
<div class="d-flex justify-content-start">Start (default)</div>
<div class="d-flex justify-content-end">End</div>
<div class="d-flex justify-content-center">Center</div>
<div class="d-flex justify-content-between">Between</div>
<div class="d-flex justify-content-around">Around</div>
<div class="d-flex justify-content-evenly">Evenly</div>

<!-- Align items -->
<div class="d-flex align-items-start">Start</div>
<div class="d-flex align-items-end">End</div>
<div class="d-flex align-items-center">Center</div>
<div class="d-flex align-items-baseline">Baseline</div>
<div class="d-flex align-items-stretch">Stretch (default)</div>

<!-- Align self -->
<div class="align-self-start">Start</div>
<div class="align-self-end">End</div>

<!-- Wrap -->
<div class="flex-nowrap">No wrap (default)</div>
<div class="flex-wrap">Wrap</div>
<div class="flex-wrap-reverse">Wrap reversed</div>

<!-- Grow and shrink -->
<div class="flex-grow-1">Grow</div>
<div class="flex-shrink-1">Shrink</div>

<!-- Auto margins -->
<div class="me-auto">Margin right auto</div>
<div class="ms-auto">Margin left auto</div>`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-float"></i> Float</h4>
                                <pre className="mb-3"><code>{`<!-- Float classes -->
<div class="float-start">Float left</div>
<div class="float-end">Float right</div>
<div class="float-none">Don't float</div>

<!-- Responsive float -->
<div class="float-sm-start">Float left on sm and up</div>
<div class="float-md-end">Float right on md and up</div>
<div class="float-lg-none">Don't float on lg and up</div>`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-eye"></i> Opacity</h4>
                                <pre className="mb-3"><code>{`<div class="opacity-100">100% opacity</div>
<div class="opacity-75">75% opacity</div>
<div class="opacity-50">50% opacity</div>
<div class="opacity-25">25% opacity</div>
<div class="opacity-0">0% opacity</div>`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-fullscreen"></i> Overflow</h4>
                                <pre className="mb-3"><code>{`<div class="overflow-auto">Scroll if needed</div>
<div class="overflow-hidden">Hide overflow</div>
<div class="overflow-visible">Show overflow (default)</div>
<div class="overflow-scroll">Always scroll</div>`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-geo-alt"></i> Position</h4>
                                <pre className="mb-3"><code>{`<!-- Position classes -->
<div class="position-static">Static (default)</div>
<div class="position-relative">Relative</div>
<div class="position-absolute">Absolute</div>
<div class="position-fixed">Fixed</div>
<div class="position-sticky">Sticky</div>

<!-- Placement -->
<div class="top-0">Top 0</div>
<div class="top-50">Top 50%</div>
<div class="top-100">Top 100%</div>

<!-- Center elements -->
<div class="top-50 start-50 translate-middle">Centered</div>`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-arrows-angle-expand"></i> Sizing</h4>
                                <pre className="mb-3"><code>{`<!-- Width -->
<div class="w-25">Width 25%</div>
<div class="w-50">Width 50%</div>
<div class="w-75">Width 75%</div>
<div class="w-100">Width 100%</div>
<div class="w-auto">Width auto</div>

<!-- Height -->
<div class="h-25">Height 25%</div>
<div class="h-50">Height 50%</div>
<div class="h-75">Height 75%</div>
<div class="h-100">Height 100%</div>
<div class="h-auto">Height auto</div>

<!-- Max width/height -->
<div class="mw-100">Max-width 100%</div>
<div class="mh-100">Max-height 100%</div>

<!-- Viewport width/height -->
<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-border-outer"></i> Spacing</h4>
                                <pre className="mb-3"><code>{`/* Margin and padding utility classes follow this syntax:
{property}{sides}-{size} for xs
{property}{sides}-{breakpoint}-{size} for sm, md, lg, xl, and xxl */

/* Where property is one of:
m - for margin
p - for padding */

/* Where sides is one of:
t - for top
b - for bottom
s - for start (left in LTR)
e - for end (right in LTR)
x - for both left and right
y - for both top and bottom
blank - for all sides */

/* Where size is one of:
0 - 0rem (0px)
1 - 0.25rem (4px)
2 - 0.5rem (8px)
3 - 1rem (16px)
4 - 1.5rem (24px)
5 - 3rem (48px)
auto - auto margin */

/* Examples: */
.mt-0 { margin-top: 0; }
.ms-1 { margin-left: 0.25rem; }
.px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
.py-3 { padding-top: 1rem; padding-bottom: 1rem; }
.m-4 { margin: 1.5rem; }
.mx-auto { margin-left: auto; margin-right: auto; }

/* Responsive example: */
.mt-md-5 { margin-top: 3rem; }
.p-lg-4 { padding: 1.5rem; }`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-text-center"></i> Text</h4>
                                <pre className="mb-3"><code>{`<!-- Alignment -->
<p class="text-start">Start aligned text</p>
<p class="text-center">Center aligned text</p>
<p class="text-end">End aligned text</p>

<!-- Responsive alignment -->
<p class="text-sm-start">Start aligned on sm and up</p>
<p class="text-md-center">Center aligned on md and up</p>
<p class="text-lg-end">End aligned on lg and up</p>

<!-- Wrapping and overflow -->
<div class="text-wrap">Normal text wrap</div>
<div class="text-nowrap">No text wrap</div>
<div class="text-truncate">Truncated text...</div>

<!-- Word break -->
<p class="text-break">Verylongwordthatwillbreak</p>

<!-- Text transform -->
<p class="text-lowercase">LOWERCASE TEXT</p>
<p class="text-uppercase">uppercase text</p>
<p class="text-capitalize">capitalized text</p>

<!-- Font size -->
<p class="fs-1">Font size 1</p>
<p class="fs-2">Font size 2</p>
<p class="fs-3">Font size 3</p>
<p class="fs-4">Font size 4</p>
<p class="fs-5">Font size 5</p>
<p class="fs-6">Font size 6</p>

<!-- Font weight and italics -->
<p class="fw-bold">Bold text</p>
<p class="fw-bolder">Bolder text</p>
<p class="fw-semibold">Semibold text</p>
<p class="fw-normal">Normal weight</p>
<p class="fw-light">Light weight</p>
<p class="fw-lighter">Lighter weight</p>
<p class="fst-italic">Italic text</p>
<p class="fst-normal">Normal font style</p>

<!-- Line height -->
<p class="lh-1">Line height 1</p>
<p class="lh-sm">Line height small</p>
<p class="lh-base">Line height base</p>
<p class="lh-lg">Line height large</p>

<!-- Monospace -->
<p class="font-monospace">Monospace text</p>

<!-- Reset color -->
<p class="text-reset">Reset color</p>

<!-- Text decoration -->
<p class="text-decoration-underline">Underlined text</p>
<p class="text-decoration-line-through">Strikethrough text</p>
<a href="#" class="text-decoration-none">Non-underlined link</a>`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-arrow-down-up"></i> Vertical Alignment</h4>
                                <pre className="mb-3"><code>{`<!-- Inline elements -->
<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
<span class="align-text-top">text-top</span>
<span class="align-text-bottom">text-bottom</span>

<!-- Table cells -->
<td class="align-baseline">baseline</td>
<td class="align-top">top</td>
<td class="align-middle">middle</td>
<td class="align-bottom">bottom</td>`}</code></pre>
                            </div>

                            <div className="property-card">
                                <h4 className="h5"><i className="bi bi-eye-fill"></i> Visibility</h4>
                                <pre className="mb-3"><code>{`<div class="visible">Visible</div>
<div class="invisible">Invisible</div>`}</code></pre>
                            </div>
                        </section>

                        <section id="components" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-collection"></i> Components</h2>
                            
                            <div className="property-card">
                                <h4 className="h5">Alerts</h4>
                                <pre className="mb-3"><code>{`<div class="alert alert-primary" role="alert">
  A simple primary alert
</div>

<!-- Additional content -->
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities.</p>
</div>

<!-- Dismissible -->
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You can close this alert.
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>`}</code></pre>
                                <div className="example-box">
                                    <div className="alert alert-primary">Primary alert</div>
                                    <div className="alert alert-success">
                                        <h4 className="alert-heading">Success!</h4>
                                        <p>This is a success alert with additional content.</p>
                                    </div>
                                    <div className="alert alert-warning alert-dismissible fade show">
                                        <strong>Warning!</strong> Dismissible alert.
                                        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="property-card">
                                <h4 className="h5">Badges</h4>
                                <pre className="mb-3"><code>{`<!-- Basic -->
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>

<!-- Pill badges -->
<span class="badge rounded-pill bg-success">Success</span>

<!-- Positioned -->
<button type="button" class="btn btn-primary">
  Notifications <span class="badge bg-secondary">4</span>
</button>`}</code></pre>
                                <div className="example-box">
                                    <span className="badge bg-primary me-2">Primary</span>
                                    <span className="badge rounded-pill bg-success me-2">Pill</span>
                                    <button type="button" className="btn btn-primary">
                                        Notifications <span className="badge bg-secondary">4</span>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="property-card">
                                <h4 className="h5">Breadcrumbs</h4>
                                <pre className="mb-3"><code>{`<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>`}</code></pre>
                                <div className="example-box">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                                            <li className="breadcrumb-item active">Data</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                            
                            <div className="property-card">
                                <h4 className="h5">Cards</h4>
                                <pre className="mb-3"><code>{`<!-- Basic -->
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<!-- Header and footer -->
<div class="card">
  <div class="card-header">Featured</div>
  <div class="card-body">
    <h5 class="card-title">Special title</h5>
    <p class="card-text">With supporting text.</p>
  </div>
  <div class="card-footer text-muted">2 days ago</div>
</div>

<!-- Grid cards -->
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card.</p>
      </div>
    </div>
  </div>
</div>`}</code></pre>
                                <div className="example-box">
                                    <div className="card" style={{width: '18rem'}}>
                                        <img src="https://via.placeholder.com/300" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card Title</h5>
                                            <p className="card-text">Some example text for the card.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="property-card">
                                <h4 className="h5">Carousel</h4>
                                <pre className="mb-3"><code>{`<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>`}</code></pre>
                                <div className="alert alert-info">
                                    Note: Carousel requires JavaScript to function. See Bootstrap docs for full implementation.
                                </div>
                            </div>
                            
                            <div className="property-card">
                                <h4 className="h5">Dropdowns</h4>
                                <pre className="mb-3"><code>{`<!-- Basic -->
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<!-- Directions -->
<div class="dropend">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
    Dropend
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>`}</code></pre>
                                <div className="example-box">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Dropdown
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="property-card">
                                <h4 className="h5">List Group</h4>
                                <pre className="mb-3"><code>{`<!-- Basic -->
<ul class="list-group">
  <li class="list-group-item">First item</li>
  <li class="list-group-item active">Active item</li>
  <li class="list-group-item disabled">Disabled item</li>
</ul>

<!-- With badges -->
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Inbox
    <span class="badge bg-primary rounded-pill">12</span>
  </li>
</ul>

<!-- Horizontal -->
<ul class="list-group list-group-horizontal">
  <li class="list-group-item">First</li>
  <li class="list-group-item">Second</li>
</ul>`}</code></pre>
                                <div className="example-box">
                                    <ul className="list-group">
                                        <li className="list-group-item">First item</li>
                                        <li className="list-group-item active">Active item</li>
                                        <li className="list-group-item">Third item</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="property-card">
                                <h4 className="h5">Modal</h4>
                                <pre className="mb-3"><code>{`<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`}</code></pre>
                                <div className="alert alert-info">
                                    Note: Modal requires JavaScript to function. See Bootstrap docs for full implementation.
                                </div>
                            </div>
                            
                            <div className="property-card">
                                <h4 className="h5">Navbar</h4>
                                <pre className="mb-3"><code>{`<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`}</code></pre>
                                <div className="alert alert-info">
                                    Note: Navbar requires JavaScript for the mobile toggle functionality.
                                </div>
                            </div>
                            
                            <div className="property-card">
                                <h4 className="h5">Pagination</h4>
                                <pre className="mb-3"><code>{`<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>`}</code></pre>
                                <div className="example-box">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            
                            <div className="property-card">
                                <h4 className="h5">Progress</h4>
                                <pre className="mb-3"><code>{`<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%"></div>
</div>

<!-- Colored -->
<div class="progress">
  <div class="progress-bar bg-success" style="width: 40%"></div>
</div>

<!-- Striped -->
<div class="progress">
  <div class="progress-bar progress-bar-striped" style="width: 50%"></div>
</div>

<!-- Animated -->
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>
</div>

<!-- Multiple bars -->
<div class="progress">
  <div class="progress-bar" style="width: 15%"></div>
  <div class="progress-bar bg-success" style="width: 30%"></div>
</div>`}</code></pre>
                                <div className="example-box">
                                    <div className="progress mb-3">
                                        <div className="progress-bar" role="progressbar" style={{width: '25%'}}></div>
                                    </div>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-success" style={{width: '40%'}}></div>
                                    </div>
                                    <div className="progress mb-3">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: '75%'}}></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="property-card">
                                <h4 className="h5">Spinners</h4>
                                <pre className="mb-3"><code>{`<!-- Border spinner -->
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<!-- Colored -->
<div class="spinner-border text-primary"></div>
<div class="spinner-border text-success"></div>

<!-- Growing spinner -->
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<!-- Buttons with spinners -->
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status"></span>
  Loading...
</button>`}</code></pre>
                                <div className="example-box">
                                    <div className="spinner-border text-primary me-3" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-success me-3" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <button className="btn btn-primary" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                        Loading...
                                    </button>
                                </div>
                            </div>
                            
                            <div className="property-card">
                                <h4 className="h5">Toasts</h4>
                                <pre className="mb-3"><code>{`<!-- Basic -->
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <strong class="me-auto">Bootstrap</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>

<!-- Live example -->
<button type="button" class="btn btn-primary" id="liveToastBtn">Show toast</button>

<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
  <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Bootstrap</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>`}</code></pre>
                                <div className="alert alert-info">
                                    Note: Toasts require JavaScript to function. See Bootstrap docs for full implementation.
                                </div>
                            </div>
                            
                            <div className="property-card">
                                <h4 className="h5">Tooltips</h4>
                                <pre className="mb-3"><code>{`<!-- HTML -->
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>

<!-- JavaScript initialization -->
<script>
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
</script>`}</code></pre>
                                <div className="alert alert-info">
                                    Note: Tooltips require JavaScript to function. See Bootstrap docs for full implementation.
                                </div>
                            </div>
                        </section>

                        <section id="icons" className="mb-5">
                            <h2 className="h2 mb-3"><i className="bi bi-emoji-smile"></i> Bootstrap Icons</h2>
                            <div className="property-card">
                                <p>Bootstrap includes a free, high quality, open source icon library with over 1,800 icons.</p>
                                
                                <h4 className="h5">Including Bootstrap Icons</h4>
                                <pre className="mb-3"><code>{`<!-- CDN link -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

<!-- npm installation -->
npm install bootstrap-icons`}</code></pre>
                                
                                <h4 className="h5 mt-4">Using Icons</h4>
                                <pre className="mb-3"><code>{`<!-- Basic usage -->
<i class="bi bi-alarm"></i>

<!-- Sizing -->
<i class="bi bi-alarm" style="font-size: 2rem;"></i>
<i class="bi bi-alarm fs-1"></i>

<!-- Coloring -->
<i class="bi bi-heart-fill text-danger"></i>

<!-- Buttons -->
<button class="btn btn-primary">
  <i class="bi bi-search"></i> Search
</button>`}</code></pre>
                                
                                <h4 className="h5 mt-4">Popular Icons</h4>
                                <div className="example-box">
                                    <div className="d-flex flex-wrap gap-3">
                                        <i className="bi bi-house-door fs-3"></i>
                                        <i className="bi bi-search fs-3"></i>
                                        <i className="bi bi-heart-fill text-danger fs-3"></i>
                                        <i className="bi bi-person-circle fs-3"></i>
                                        <i className="bi bi-gear-fill fs-3"></i>
                                        <i className="bi bi-star-fill text-warning fs-3"></i>
                                        <i className="bi bi-cart3 fs-3"></i>
                                        <i className="bi bi-envelope fs-3"></i>
                                        <i className="bi bi-bell-fill text-primary fs-3"></i>
                                        <i className="bi bi-arrow-right-circle-fill text-success fs-3"></i>
                                    </div>
                                </div>
                                
                                <div className="alert alert-info mt-3">
                                    <strong>Tip:</strong> Browse all available icons at <a href="https://icons.getbootstrap.com/" target="_blank">icons.getbootstrap.com</a>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

            <footer className="bg-dark text-white py-4">
                <div className="container text-center">
                    <p>Bootstrap Notes &copy; 2025 | Designed by Mugilvannan P</p>
                    <p className="mb-0">Bootstrap v5.3.3 | Bootstrap Icons v1.11.1</p>
                </div>
            </footer>
        </div>
    );
}

export default BootstrapNotes;