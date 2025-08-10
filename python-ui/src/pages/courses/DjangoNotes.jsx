import React from 'react';

function DjangoNotes() {
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
          .command {
            background-color: #e9ecef;
            padding: 0.2rem 0.4rem;
            border-radius: 0.25rem;
            font-family: monospace;
          }
        `}
      </style>

      <header className="bg-secondary text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-filetype-py"></i> Django Notes</h1>
          <p className="lead">Comprehensive Guide to Django Web Framework</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#introduction"><i className="bi bi-info-circle"></i> Introduction</a>
              <a className="nav-link" href="#setup"><i className="bi bi-gear"></i> Setup & Installation</a>
              <a className="nav-link" href="#project-structure"><i className="bi bi-folder"></i> Project Structure</a>
              <a className="nav-link" href="#views-templates"><i className="bi bi-file-earmark-code"></i> Views & Templates</a>
              <a className="nav-link" href="#static-files"><i className="bi bi-file-earmark"></i> Static Files</a>
              <a className="nav-link" href="#forms"><i className="bi bi-input-cursor-text"></i> Forms</a>
              <a className="nav-link" href="#admin-panel"><i className="bi bi-person-badge"></i> Admin Panel</a>
              <a className="nav-link" href="#models-orm"><i className="bi bi-database"></i> Models & ORM</a>
              <a className="nav-link" href="#mysql"><i className="bi bi-server"></i> MySQL Connectivity</a>
              <a className="nav-link" href="#crud"><i className="bi bi-arrow-repeat"></i> CRUD Operations</a>
              <a className="nav-link" href="#file-upload"><i className="bi bi-upload"></i> File Upload</a>
              <a className="nav-link" href="#cookies-sessions"><i className="bi bi-cookie"></i> Cookies & Sessions</a>
              <a className="nav-link" href="#authentication"><i className="bi bi-shield-lock"></i> Authentication & Authorization</a>
              <a className="nav-link" href="#drf-intro"><i className="bi bi-code-square"></i> Django REST Framework</a>
              <a className="nav-link" href="#drf-setup"><i className="bi bi-gear"></i> DRF Setup & Installation</a>
              <a className="nav-link" href="#drf-simple-api"><i className="bi bi-terminal"></i> Simple API with DRF</a>
              <a className="nav-link" href="#django-react"><i className="bi bi-braces"></i> Django + React Integration</a>
              <a className="nav-link" href="#separate-frontend"><i className="bi bi-diagram-2"></i> React Frontend Setup</a>
              <a className="nav-link" href="#sample-project"><i className="bi bi-book"></i> Sample Project</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="introduction" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-info-circle"></i> Introduction to Django</h2>
              <div className="property-card">
                <h3 className="h4">What is Django?</h3>
                <ul>
                  <li>Django is a high-level Python web framework that enables rapid development of secure and maintainable websites</li>
                  <li>Follows MVT (Model-View-Template) design pattern</li>
                  <li>Created by Lawrence Journal World in 2003, released publicly in July 2005 under BSD license</li>
                  <li>Currently maintained by Django Software Foundation (DSF)</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Key Features</h3>
                <ul>
                  <li><strong>Rapid Development:</strong> Django was designed to help developers take applications from concept to completion as quickly as possible</li>
                  <li><strong>Secure:</strong> Helps developers avoid many common security mistakes</li>
                  <li><strong>Scalable:</strong> Can quickly and flexibly scale from small to large applications</li>
                  <li><strong>Fully Loaded:</strong> Includes dozens of extras for common web development tasks</li>
                  <li><strong>Versatile:</strong> Can build almost any type of website</li>
                  <li><strong>Open Source:</strong> Free to use and modify</li>
                </ul>
              </div>
            </section>

            <section id="setup" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> Setup & Installation</h2>

              <div className="property-card">
                <h3 className="h4">Step 1: Check Python and pip versions</h3>
                <pre className="mb-3"><code>py --version
                  pip --version</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Step 2: Create Virtual Environment</h3>
                <pre className="mb-3"><code>py -m venv env-name</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Step 3: Activate Virtual Environment</h3>
                <p>On Windows:</p>
                <pre className="mb-3"><code>cd env-name
                  cd Scripts
                  .\activate</code></pre>
                <p>On Mac/Linux:</p>
                <pre className="mb-3"><code>source env-name/bin/activate</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Step 4: Install Django</h3>
                <pre className="mb-3"><code>py -m pip install django</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Step 5: Verify Django Installation</h3>
                <pre className="mb-3"><code>django-admin --version</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Creating a Django Project</h3>
                <pre className="mb-3"><code>django-admin startproject projectname</code></pre>
                <p>Example:</p>
                <pre className="mb-3"><code>django-admin startproject myFirstProject</code></pre>
              </div>
            </section>

            <section id="project-structure" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-folder"></i> Django Project Structure</h2>

              <div className="property-card">
                <h3 className="h4">Key Files and Directories</h3>
                <ul>
                  <li><strong>manage.py:</strong> Command-line utility for interacting with the project</li>
                  <li><strong>myFirstProject/:</strong> The actual Python package for your project</li>
                  <li><strong>__init__.py:</strong> Empty file that tells Python this directory should be considered a package</li>
                  <li><strong>settings.py:</strong> Configuration for this Django project</li>
                  <li><strong>urls.py:</strong> URL declarations for this Django project</li>
                  <li><strong>wsgi.py:</strong> Entry-point for WSGI-compatible web servers to serve your project</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Running the Development Server</h3>
                <pre className="mb-3"><code>python manage.py runserver</code></pre>
                <p>Access the server at: <code>http://127.0.0.1:8000</code></p>
              </div>

              <div className="property-card">
                <h3 className="h4">Creating a Django App</h3>
                <p>Difference between project and app:</p>
                <ul>
                  <li><strong>Project:</strong> Collection of configuration files and apps</li>
                  <li><strong>App:</strong> Web application that performs business logic</li>
                </ul>
                <p>Example: A bank project might have apps for loans, insurance, marketing, etc.</p>
                <pre className="mb-3"><code>python manage.py startapp appname</code></pre>
                <p>Example:</p>
                <pre className="mb-3"><code>python manage.py startapp firstapp</code></pre>
                <p>App structure includes:</p>
                <ul>
                  <li>migrations/ folder</li>
                  <li>admin.py</li>
                  <li>apps.py</li>
                  <li>models.py</li>
                  <li>tests.py</li>
                  <li>views.py</li>
                </ul>
              </div>
            </section>

            <section id="views-templates" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark-code"></i> Views & Templates</h2>
              <ul>
                <li>Service logic will be placed in views.py</li>
                <li>In Python django based application where required service to end user is defined in views.py file.</li>
                <li>For every action we will create views. 2 types of views are available</li>
              </ul>

              <div className="property-card">
                <h3 className="h4">Creating Views</h3>
                <p>Two types of views:</p>
                <ol>
                  <li>Function-based views</li>
                  <li>Class-based views</li>
                </ol>
                <p>Example view (views.py):</p>
                <pre className="mb-3"><code>{`from django.shortcuts import render
from django.http import HttpResponse

def welcome(request):
    s = '<h1>Hello, Welcome to Django</h1>'
    return HttpResponse(s)`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">URL Configuration (urls.py)</h3>
                <pre className="mb-3"><code>{`from django.contrib import admin
from django.urls import path
from firstapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello/', views.welcome),
]`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Using Templates</h3>
                <ul>
                  <li>It is not recommended to write an Html code inside Python Scripts (views.py file).</li>
                  <li>It reduces the readability because python code mixed with Html code.</li>
                  <li>No separation of roles python developer has to concentrate on both python code and html code.</li>
                  <li>It doesn't promote reusability of code. So, we can overcome these problems by separating html code into the separate html file.</li>
                  <li>This html file is nothing but template from the python file (views.py file).We can use these templates based on our requirement. So, we have to write templates at project level at only once and we can use this in multiple applications.</li>
                </ul>
                <p>Create a templates folder in your project directory and add HTML files</p>
                <p>Example (index.html):</p>
                <pre className="mb-3"><code>{`<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <h1>Hello Welcome</h1>
</body>
</html>`}</code></pre>
                <p>Configure templates in settings.py:</p>
                <pre className="mb-3"><code>{`import os
TEMPLATES = [
    {
        'DIRS': [os.path.join(BASE_DIR, "templates")],
    }
]`}</code></pre>
                <p>Render template in view:</p>
                <pre className="mb-3"><code>{`from django.shortcuts import render

def home(request):
    return render(request, "index.html")`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Passing Data to Templates</h3>
                <p>views.py:</p>
                <pre className="mb-3"><code>{`def home(request):
    name = "Dhoni"
    return render(request, "index.html", {'name': name})`}</code></pre>
                <p>index.html:</p>
                <pre className="mb-3"><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>{{ name }}</p>
</body>
</html>`}</code></pre>
              </div>
            </section>

            <section id="static-files" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-earmark"></i> Static Files (CSS, JS, Images)</h2>

              <div className="property-card">
                <h3 className="h4">Static Files Setup</h3>
                <p>Create static folder structure:</p>
                <pre className="mb-3"><code>{`static/
|---CSS/
|---JAVASCRIPT/
|---IMAGES/`}</code></pre>
                <p>Configure in settings.py:</p>
                <pre className="mb-3"><code>{`STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / 'static'
]`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Using Static Files in Templates</h3>
                <p>Load static at top of template:</p>
                <pre className="mb-3"><code>{`{% load static %}`}</code></pre>
                <p>Example CSS link:</p>
                <pre className="mb-3"><code>{`<link rel="stylesheet" href="{% static 'css/style.css' %}"/>`}</code></pre>
                <p>Example JavaScript link:</p>
                <pre className="mb-3"><code>{`<script src="{% static 'javascript/script.js' %}"></script>`}</code></pre>
                <p>Example Image:</p>
                <pre className="mb-3"><code>{`<img src="{% static 'images/naruto.jpg' %}" alt="Naruto" height="300px" width="700px"/>`}</code></pre>
              </div>
            </section>

            <section id="forms" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-input-cursor-text"></i> Forms in Django</h2>

              <div className="property-card">
                <h3 className="h4">GET Method Example</h3>
                <p>index.html:</p>
                <pre className="mb-3"><code>{`<form action="register" method="get">
    <p>Name: <input type="text" name="name" placeholder="Enter Name" class="form-control w-25"></p>
    <p>Email: <input type="email" name="email" placeholder="Enter Email" class="form-control w-25"></p>
    <p><button class="btn btn-primary" type="submit">Add</button></p>
</form>`}</code></pre>
                <p>views.py:</p>
                <pre className="mb-3"><code>{`def register_page(request):
    if request.method == 'GET':
        name = request.GET['name']
        email = request.GET['email']
        return render(request, "output.html", {'name': name, 'email': email})
    else:
        return render(request, "output.html")`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">POST Method Example</h3>
                <p>index.html:</p>
                <pre className="mb-3"><code>{`<form action="register" method="post">
    {% csrf_token %}
    <p>Name: <input type="text" name="name" placeholder="Enter Name" class="form-control w-25"></p>
    <p>Email: <input type="email" name="email" placeholder="Enter Email" class="form-control w-25"></p>
    <p><button class="btn btn-primary" type="submit">Add</button></p>
</form>`}</code></pre>
                <p>views.py:</p>
                <pre className="mb-3"><code>{`def register_page(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        return render(request, "output.html", {'name': name, 'email': email})
    else:
        return render(request, "output.html")`}</code></pre>
              </div>
            </section>

            <section id="admin-panel" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-person-badge"></i> Django Admin Panel</h2>

              <div className="property-card">
                <h3 className="h4">Creating a Superuser</h3>
                <pre className="mb-3"><code>python manage.py createsuperuser</code></pre>
                <p>Follow prompts to enter username, email, and password</p>
              </div>

              <div className="property-card">
                <h3 className="h4">Accessing Admin Panel</h3>
                <p>Run server and visit:</p>
                <pre className="mb-3"><code>http://127.0.0.1:8000/admin</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Complete Admin Panel Project</h3>
                <p><strong>1. Create Project:</strong></p>
                <pre className="mb-3"><code>django-admin startproject adminpanel_project
                  cd adminpanel_project</code></pre>

                <p><strong>2. Create App:</strong></p>
                <pre className="mb-3"><code>django-admin startapp adminpanel_app</code></pre>

                <p><strong>3. Add to INSTALLED_APPS (settings.py):</strong></p>
                <pre className="mb-3"><code>{`INSTALLED_APPS = [
    ...
    'adminpanel_app',
]`}</code></pre>

                <p><strong>4. Configure Templates (settings.py):</strong></p>
                <pre className="mb-3"><code>{`import os
TEMPLATES = [
    {
        'DIRS': [os.path.join(BASE_DIR, "templates")],
    }
]`}</code></pre>

                <p><strong>5. Configure Static Files (settings.py):</strong></p>
                <pre className="mb-3"><code>{`STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / 'static'
]`}</code></pre>

                <p><strong>6. Create Templates Structure:</strong></p>
                <pre className="mb-3"><code>{`templates/
|---header.html
|---index.html
|---home.html
|---register.html
|---login.html
|---logout.html
|---profile.html
|---navbar.html`}</code></pre>

                <p><strong>index.html</strong></p>
                <pre><code>{`{% include 'header.html' %}
{% include 'navbar.html' %}
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Panel</title>
</head>
<body>
{% block content %}

{% endblock %}
</body>
</html>`}</code></pre>

                <p><strong>header.html</strong></p>
                <pre><code>{`{% load static %}
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" >
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js></script>
<link rel="stylesheet" href="{% static 'css/adminpanel.css' %}">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css” />`}</code></pre>

                <p><strong>home.html</strong></p>
                <pre><code>{`{% extends 'index.html' %}
{% block content %}
{% if user.is_authenticated %}
    <h1>Welcome {{user.username}}</h1>
{% else %}
    <h1>Welcome to the Admin Panel</h1>
{% endif %}
{% endblock %}`}</code></pre>

                <p><strong>navbar.html</strong></p>
                <pre><code>{`<nav class="navbar navbar-expand-lg bg-secondary">
    <div class="container-fluid">
        <a class="navbar-brand fs-4" href="{% url 'home' %}"><i class="fa-solid fa-user"></i> Admin Panel</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto gap-lg-5 fs-4 mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="{% url 'home' %}"><i class="fa-solid fa-home"></i> Home</a></li>
                {% if user.is_authenticated %}
                    <li class="nav-item"><a class="nav-link" href="{% url 'profile' %}"><i class="fa-solid fa-user"></i> Profile</a></li>
                    <li class="nav-item"><form action="{% url 'logout' %}" method="post" style="display: none;" id="logout-form">{% csrf_token %}</form><a class="nav-link" onclick="document.getElementById('logout-form').submit(); return false;" href="{% url 'logout' %}"><i class="fa-solid fa-users"></i> Logout</a></li>
                {% else %}
                    <li class="nav-item"><a class="nav-link" href="{% url 'login' %}"><i class="fa-solid fa-user"></i> Login</a></li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'register' %}"><i class="fa-solid fa-users"></i> Register</a></li>
                {% endif %}
            </ul>
        </div>
    </div>
</nav>`}</code></pre>

                <p><strong>register.html</strong></p>
                <pre><code>{`{% extends 'index.html' %}
{% block content %}
{% load crispy_forms_tags %}
    <div class="container-fluid w-75">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h2 class="text-primary text-center mt-5">Register Form</h2>
                {% if messages %}
                    {% for message in messages %}
                        <div class="alert alert-{{ message.tags }}">
                            {{ message }}
                        </div>
                    {% endfor %}
                {% endif %}
                <form method="post" class="mt-5">
                {% csrf_token %}
                    {{ form|crispy }}
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
            <div>
            <p>Already have an account <a href="{% url 'login' %}">Login Now</a></p>
        </div>
    </div>
{% endblock %}`}</code></pre>

                <p><strong>login.html</strong></p>
                <pre><code>{`{% extends 'index.html' %}
{% block content %}
{% load crispy_forms_tags %}
<div class="container-fluid w-50">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <h2 class="text-primary text-center mt-5">Login Form</h2>
            {% if messages %}
                {% for message in messages %}
                    <div class="alert alert-{{ message.tags }}">{{ message }}</div>
                {% endfor %}
            {% endif %}
            <form method="post" class="mt-5">
            {% csrf_token %}
                {{ form|crispy }}
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        <div>
        <p class="mt-3">Don't have an account? <a href="{% url 'register' %}">Register</a></p>
    </div>
</div>
{% endblock %}`}</code></pre>

                <p><strong>profile.html</strong></p>
                <pre><code>{`{% extends 'index.html' %}
{% block content %}
<dic class="container-fluid">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <h2>Profile Page</h2>
            <hr>
            <p>Username: {{ user.username }}</p>
            <p>Email: {{ user.email }}</p>
        </div>
    </div>
</dic>
{% endblock %}`}</code></pre>

                <p><strong>logout.html</strong></p>
                <pre><code>{`{% extends "index.html" %}
{% block content %}
{% load crispy_forms_tags %}
<div class="container-fluid">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <h2>You have been logged out</h2>
            <hr>
            Login Again? <a href="{% url 'login' %}">Login</a>
        </div>
    </div>
</div>
{% endblock %}`}</code></pre>

                <p><strong>7. Create Forms (forms.py):</strong></p>
                <pre className="mb-3"><code>{`from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class RegisterForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']`}</code></pre>

                <p><strong>8. Create Views (views.py):</strong></p>
                <pre className="mb-3"><code>{`from django.shortcuts import render, redirect
from .forms import RegisterForm
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.decorators import login_required

def home(request):
    return render(request, 'home.html')

def register_page(request):
    if request.method == 'POST':
        name = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        if password1 == password2:
            user = User.objects.create_user(username=name, email=email, password=password1)
            user.is_staff = True
            user.is_superuser = True
            user.save()
            messages.success(request, 'User created successfully')
            return redirect('login')
        else:
            messages.warning(request, 'Password does not match')
            return redirect('register')
    else:
        form = RegisterForm()
        return render(request, 'register.html', {'form': form})

@login_required
def profile_page(request):
    return render(request, 'profile.html')`}</code></pre>

                <p><strong>9. Configure URLs (urls.py):</strong></p>
                <pre className="mb-3"><code>{`from django.contrib import admin
from django.urls import path
from adminpanel_app import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.home, name='home'),
    path('register/', views.register_page, name='register'),
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='logout.html'), name='logout'),
    path('profile/', views.profile_page, name='profile'),
]`}</code></pre>

                <p><strong>10. Create Login Redirect (settings.py):</strong></p>
                <pre className="mb-3"><code>{`LOGIN_REDIRECT_URL = 'home'`}</code></pre>

                <p><strong>11. Install Required Packages:</strong></p>
                <pre className="mb-3"><code>pip install django-crispy-forms
                  pip install crispy-bootstrap5</code></pre>

                <p><strong>12. Add to settings.py:</strong></p>
                <pre className="mb-3"><code>{`INSTALLED_APPS = [
    'crispy_forms',
    'crispy_bootstrap5',
]

CRISPY_ALLOWED_TEMPLATE_PACKS = 'bootstrap5'
CRISPY_TEMPLATE_PACK = 'bootstrap5'`}</code></pre>
              </div>
            </section>

            <section id="models-orm" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> Models & ORM</h2>
              <h3 className="mb-3">Introduction to Model</h3>
              <ul>
                <li>In MVT model is related to database. So, here we don't need much queries. This model will create queries.</li>
                <li>This is the advantage of django.</li>
                <li>For each and every table we will create the model in database.</li>
                <li>When we create this model to the table. This model creates a queries related to that table.</li>
                <li>In other technologies, we have to write the queries to insert, retrieve (select) the table.</li>
                <li>But in django, we don't need to write queries. Each and every table resent in database we will create models. Ex: students, marks etc.</li>
                <li>To represent a table in django also called as Models.</li>
                <li>When we create a class in models that user fields present in that class to create table columns automatically.</li>
              </ul>

              <div className="property-card">
                <h3 className="h4">Creating Models</h3>
                <p>models.py:</p>
                <pre className="mb-3"><code>{`from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    fathername = models.CharField(max_length=100)
    classname = models.IntegerField()
    contact = models.CharField(max_length=100)`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Field Types</h3>
                <ul>
                  <li><code>AutoField</code>: Automatic increment used for integers</li>
                  <li><code>BigAutoField</code>: Big integers</li>
                  <li><code>BooleanField</code>: true/false</li>
                  <li><code>CharField</code>: String</li>
                  <li><code>DateField</code>: Date</li>
                  <li><code>DecimalField</code>: Double</li>
                  <li><code>DurationField</code>: Timestamp</li>
                  <li><code>FloatField</code>: Float</li>
                  <li><code>IntegerField</code>: Int</li>
                  <li><code>TextField</code>: Text</li>
                  <li><code>TimeField</code>: Time</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Migrations</h3>
                <pre className="mb-3"><code>python manage.py makemigrations
                  python manage.py migrate</code></pre>
                <p>To see SQL:</p>
                <pre className="mb-3"><code>python manage.py sqlmigrate appname 0001</code></pre>
              </div>

              <div className="property-card">
                <h2 className="mb-3">Django ORM</h2>
                <ul>
                  <li>One of the most powerful features of Django is its Object-Relational Mapper (ORM), which enables you to interact with your database, like you would with SQL.</li>
                  <li>In fact, Django's ORM is just a pythonical way to create SQL to query and manipulate your database and get results in a pythonic fashion.</li>
                </ul>
                <h3 className="h4">Django ORM Examples</h3>
                <p><strong>Retrieve all records:</strong></p>
                <pre className="mb-3"><code>{`from .models import Student
s = Student.objects.all()
print(s)`}</code></pre>

                <p><strong>Get single record:</strong></p>
                <pre className="mb-3"><code>{`s = Student.objects.get(id=3)
print(s)`}</code></pre>

                <p><strong>Filter records:</strong></p>
                <pre className="mb-3"><code>{`# Greater than
s = Student.objects.filter(id__gt=3)

# Greater than or equal
s = Student.objects.filter(id__gte=3)

# AND condition
s = Student.objects.filter(id__gt=2) & Student.objects.filter(classname__gt=6)

# OR condition
s = Student.objects.filter(id__gt=2) | Student.objects.filter(classname__gt=6)`}</code></pre>

                <p><strong>Insert records:</strong></p>
                <pre className="mb-3"><code>{`# Single record
s = Student(name="sam", fathername="arun", classname=9, contact="8976567890")
s.save()

# Multiple records
Student.objects.bulk_create([
    Student(name="divya", fathername="vijay", classname=8, contact="9876509876"),
    Student(name="ajay", fathername="sam", classname=7, contact="8765789080")
])`}</code></pre>

                <p><strong>Delete records:</strong></p>
                <pre className="mb-3"><code>{`# Single record
s = Student.objects.get(id=1)
s.delete()

# Multiple records
s = Student.objects.filter(id__in=[1,3,5])
s.delete()`}</code></pre>

                <p><strong>Update records:</strong></p>
                <pre className="mb-3"><code>{`s = Student.objects.get(id=1)
s.classname = 6
s.contact = '8562314567'
s.save()`}</code></pre>

                <p><strong>Aggregate functions:</strong></p>
                <pre className="mb-3"><code>{`from django.db.models import Avg, Sum, Min, Max, Count

# Average
s = Student.objects.all().aggregate(Avg('id'))

# Sum
s = Student.objects.all().aggregate(Sum('id'))

# Count
s = Student.objects.all().aggregate(Count('id'))

# Min
s = Student.objects.all().aggregate(Min('id'))

# Max
s = Student.objects.all().aggregate(Max('id'))`}</code></pre>
              </div>
            </section>

            <section id="mysql" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-server"></i> MySQL Connectivity</h2>

              <div className="property-card">
                <h3 className="h4">Install MySQL Client</h3>
                <pre className="mb-3"><code>pip install mysqlclient</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Configure Database (settings.py)</h3>
                <pre className="mb-3"><code>{`DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'database_name',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}`}</code></pre>
              </div>
            </section>

            <section id="crud" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> CRUD Operations</h2>

              <div className="property-card">
                <h3 className="h4">1. Create Project</h3>
                <pre className="mb-3"><code>django-admin startproject crud_project
                  cd crud_project</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Create App</h3>
                <pre className="mb-3"><code>django-admin startapp crud_app</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Configure settings.py</h3>
                <pre className="mb-3"><code>{`INSTALLED_APPS = [
    'crud_app',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'database_name',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / 'static'
]`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Create Model (models.py)</h3>
                <pre className="mb-3"><code>{`from django.db import models

class RegisterForm(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.EmailField()

    class Meta:
        db_table = "Register"`}</code></pre>
                <p>Run migrations:</p>
                <pre className="mb-3"><code>python manage.py makemigrations
                  python manage.py migrate</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">5. Create Form (forms.py)</h3>
                <pre className="mb-3"><code>{`from django import forms
from .models import RegisterForm

class MyRegisterForm(forms.ModelForm):
    class Meta:
        model = RegisterForm
        fields = ['name', 'age', 'address', 'phone', 'email']`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">6. Create Views (views.py)</h3>
                <pre className="mb-3"><code>{`from django.shortcuts import render, redirect
from .forms import MyRegisterForm
from django.contrib import messages
from .models import RegisterForm

def home(request):
    data = RegisterForm.objects.all()
    if data != "":
        return render(request, 'home.html', {'data': data})
    else:
        return render(request, 'home.html')

def register_page(request):
    if request.method == 'POST':
        form = MyRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Registration successful')
            return redirect('Home')
    else:
        form = MyRegisterForm()
    return render(request, 'register.html', {'form': form})

def update_data(request, id):
    data = RegisterForm.objects.get(id=id)
    if request.method == 'POST':
        name = request.POST['name']
        age = request.POST['age']
        address = request.POST['address']
        phone = request.POST['phone']
        email = request.POST['email']
        data.name = name
        data.age = age
        data.address = address
        data.phone = phone
        data.email = email
        data.save()
        messages.success(request, "Updated successfully")
        return redirect("Home")
    return render(request, "update.html", {'data': data})

def delete(request, id):
    data = RegisterForm.objects.get(id=id)
    data.delete()
    messages.error(request, "Deleted successfully")
    return redirect("Home")`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">7. Configure URLs (urls.py)</h3>
                <pre className="mb-3"><code>{`from django.contrib import admin
from django.urls import path
from crud_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.home, name="Home"),
    path("insert/", views.register_page, name="Register"),
    path("update/<int:id>", views.update_data, name="Update"),
    path("delete/<int:id>", views.delete, name="Delete"),
]`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">8. Create Templates</h3>
                <p><strong>index.html:</strong></p>
                <pre className="mb-3"><code>{`{% include 'header.html' %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DJANGO MODEL</title>
</head>
<body>
    {% block content %}
    {% endblock %}
</body>
</html>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        var alerts = document.querySelectorAll('.alert');
        alerts.forEach(function(alert) {
            setTimeout(function() {
                alert.style.display = 'none';
            }, 3000)
        })
    })
</script>`}</code></pre>

                <p><strong>header.html:</strong></p>
                <pre className="mb-3"><code>{`{% load static %}
<link rel="stylesheet" href="{% static 'css/style.css' %}">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"/>`}</code></pre>

                <p><strong>home.html:</strong></p>
                <pre className="mb-3"><code>{`{% extends 'index.html' %}
{% block content %}
<div class="container-fluid mt-5">
    <div class="col">
        <h3><i class="fa fa-database"></i> Django - MySQL Database</h3>
        <hr>
        <div class="d-flex justify-content-end gap-4">
            <input type="text" name="search" id="search" class="form-control w-25" placeholder="Search">
            <a href="{% url 'Register' %}" class="btn btn-success">Insert</a>
        </div>
        <br>
        {% if messages %}
            {% for message in messages %}
                {% if message.tags == 'error' %}
                    <div class="alert alert-danger">
                        {{ message }}
                    </div>
                {% else %}
                    <div class="alert alert-{{ message.tags }}">
                        {{ message }}
                    </div>
                {% endif %}
            {% endfor %}
        {% endif %}
        <table class="table table-bordered mt-5 text-center">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            {% for mydata in data %}
                <tbody id="myTable">
                    <tr>
                        <td>{{ forloop.counter }}</td>
                        <td>{{ mydata.name }}</td>
                        <td>{{ mydata.age }}</td>
                        <td>{{ mydata.address }}</td>
                        <td>{{ mydata.phone }}</td>
                        <td>{{ mydata.email }}</td>
                        <td class="center"><a href="update/{{ mydata.id }}" class="btn btn-primary"><i class="fa fa-edit"></i> Update</a></td>
                        <td class="center"><a href="delete/{{ mydata.id }}" class="btn btn-danger"><i class="fa fa-trash"></i> Delete</a></td>
                    </tr>
                </tbody>
            {% endfor %}
        </table>
    </div>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("search").addEventListener("keyup", function() {
            var value = this.value.toLowerCase();
            var rows = document.querySelectorAll("#myTable tr");
            rows.forEach(function(row) {
                var text = row.textContent.toLowerCase();
                if (text.indexOf(value) > -1) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    })
</script>
{% endblock %}`}</code></pre>

                <p><strong>register.html:</strong></p>
                <pre className="mb-3"><code>{`{% extends 'index.html' %}
{% block content %}
{% load crispy_forms_tags %}
<div class="container-fluid mt-5 text-center">
    <div class="col-md-6 offset-md-3">
        <h2 class="text-primary text-center"><i class="fa fa-users"></i> Registration</h2>
        <form action="" method="post">
            {% csrf_token %}
            {{ form|crispy }}
            <input type="submit" class="btn btn-primary w-100" value="Register">
        </form>
    </div>
</div>
{% endblock %}`}</code></pre>

                <p><strong>update.html:</strong></p>
                <pre className="mb-3"><code>{`{% extends 'index.html' %}
{% block content %}
<div class="container-fluid mt-5">
    <div class="col-md-6 offset-md-3">
        <form action="" method="POST" autocomplete="off">
            {% csrf_token %}
            <h3 class="text-primary text-center"><i class="fa fa-edit"></i> Update</h3>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" value="{{ data.name }}" name="name">
            </div>
            <div class="form-group">
                <label for="age">Age:</label>
                <input type="text" class="form-control" value="{{ data.age }}" name="age">
            </div>
            <div class="form-group">
                <label for="age">Address:</label>
                <input type="text" class="form-control" value="{{ data.address }}" name="address">
            </div>
            <div class="form-group">
                <label for="age">Phone:</label>
                <input type="text" class="form-control" value="{{ data.phone }}" name="phone">
            </div>
            <div class="form-group">
                <label for="age">Email:</label>
                <input type="text" class="form-control" value="{{ data.email }}" name="email">
            </div>
            <div class="form-group">
                <input type="submit" value="Update" class="btn btn-primary w-100 mt-4">
            </div>
        </form>
    </div>
</div>
{% endblock %}`}</code></pre>
              </div>
            </section>

            <section id="file-upload" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-upload"></i> File Upload</h2>

              <div className="property-card">
                <h3 className="h4">1. Create Project</h3>
                <pre className="mb-3"><code>django-admin startproject file_project
                  cd file_project</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Create App</h3>
                <pre className="mb-3"><code>django-admin startapp image_app</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Configure settings.py</h3>
                <pre className="mb-3"><code>{`INSTALLED_APPS = [
    'image_app',
]

MEDIA_URL = "/upload/"
MEDIA_ROOT = os.path.join(BASE_DIR, 'upload')`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Create Model (models.py)</h3>
                <pre className="mb-3"><code>{`from django.db import models

class MyFileUpload(models.Model):
    file_name = models.CharField(max_length=255)
    my_file = models.FileField()`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">5. Create Form (forms.py)</h3>
                <pre className="mb-3"><code>{`from django import forms
from .models import MyFileUpload

class MyFileForm(forms.ModelForm):
    class Meta:
        model = MyFileUpload
        fields = ['file_name', 'my_file']
        widgets = {
            'file_name': forms.TextInput(attrs={'class': 'form-control'}),
            'my_file': forms.ClearableFileInput(attrs={'class': 'form-control-file'}),
        }`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">6. Create Views (views.py)</h3>
                <pre className="mb-3"><code>{`from django.shortcuts import render, redirect
from .forms import MyFileForm
from .models import MyFileUpload
from django.contrib import messages
import os

def home(request):
    mydata = MyFileUpload.objects.all()
    myform = MyFileForm()
    if mydata != "":
        context = {'form': myform, 'mydata': mydata}
        return render(request, 'home.html', context)
    else:
        context = {'form': myform}
        return render(request, 'home.html', context)

def uploadfile(request):
    if request.method == 'POST':
        myform = MyFileForm(request.POST, request.FILES)
        if myform.is_valid():
            myform.save()
            messages.success(request, 'File uploaded successfully')
        else:
            messages.error(request, 'Error uploading file')
        return redirect("Home")

def deletefile(request, id):
    mydata = MyFileUpload.objects.get(id=id)
    mydata.delete()
    os.remove(mydata.my_file.path)
    messages.success(request, 'File deleted successfully')
    return redirect("Home")`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">7. Configure URLs (urls.py)</h3>
                <pre className="mb-3"><code>{`from django.contrib import admin
from django.urls import path
from image_app import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.home, name='Home'),
    path("uploadfile/", views.uploadfile, name='uploadfile'),
    path("deletefile/<int:id>", views.deletefile),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">8. Create Templates</h3>
                <p><strong>index.html:</strong></p>
                <pre className="mb-3"><code>{`{% include "header.html" %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
</head>
<body>
    {% block content %}
    {% endblock %}
</body>
</html>`}</code></pre>

                <p><strong>header.html:</strong></p>
                <pre className="mb-3"><code>{`{% load static %}
<link rel="stylesheet" href="{% static 'css/hell.css' %}">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>`}</code></pre>

                <p><strong>home.html:</strong></p>
                <pre className="mb-3"><code>{`{% extends 'index.html' %}
{% block content %}
<div class="container-fluid mt-5">
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <h3 class="text-primary text-center mb-4"><i class="fa fa-upload"></i> Upload Files</h3>
            
            <!-- Display Messages -->
            {% if messages %}
                <div class="mb-4">
                    {% for message in messages %}
                        <div class="alert alert-{{ message.tags }}">
                            {{ message }}
                        </div>
                    {% endfor %}
                </div>
            {% endif %}
            
            <!-- Upload Form -->
            <form action="{% url 'uploadfile' %}" method="post" enctype="multipart/form-data">
                {% csrf_token %}
                <div class="form-group">
                    <label for="file_name">File Name</label>
                    {{ form.file_name }}
                </div>
                <div class="form-group">
                    <label for="file">File</label>
                    {{ form.my_file }}
                </div>
                <button type="submit" class="btn btn-primary mt-3">Upload</button>
            </form>
        </div>
    </div>
</div>

<div class="container-fluid mt-5">
    <div class="col">
        {% if mydata %}
            <h3 class="text-primary text-center"><i class="fa fa-eye"></i> View Files</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th style="text-align: center;">S.No</th>
                        <th>File Name</th>
                        <th>File</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {% for data in mydata %}
                        <tr>
                            <td style="text-align: center;">{{ forloop.counter }}</td>
                            <td>{{ data.file_name }}</td>
                            <td>
                                {% if data.my_file %}
                                    <img style="max-width: 100px; max-height: 50px;" src="{{ data.my_file.url }}" alt="{{ data.file_name }}">
                                {% else %}
                                    No Image
                                {% endif %}
                            </td>
                            <td style="text-align: center;">
                                <a href="deletefile/{{ data.id }}" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete this file?')">Delete</a>
                            </td>
                        </tr>
                    {% endfor %}
                </tbody>
            </table>
        {% else %}
            <p class="text-center">No files available.</p>
        {% endif %}
    </div>
</div>
{% endblock %}`}</code></pre>
              </div>
            </section>

            <section id="cookies-sessions" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-cookie"></i> Cookies & Sessions</h2>

              <div className="property-card">
                <h3 className="h4">Django Cookies</h3>
                <p>Cookies are small pieces of information stored in the client browser</p>
                <p><strong>Setting a Cookie:</strong></p>
                <pre className="mb-3"><code>{`from django.shortcuts import render
from django.http import HttpResponse

def setcookie(request):
    response = HttpResponse("Cookie Set")
    response.set_cookie('working', 'MNC')
    return response`}</code></pre>

                <p><strong>Getting a Cookie:</strong></p>
                <pre className="mb-3"><code>{`def getcookie(request):
    data = request.COOKIES['working']
    return HttpResponse("Working at: " + data)`}</code></pre>

                <p><strong>URL Configuration:</strong></p>
                <pre className="mb-3"><code>{`from django.contrib import admin
from django.urls import path
from myapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('setcookie/', views.setcookie),
    path('getcookie/', views.getcookie),
]`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Django Sessions</h3>
                <p>Sessions store information on the server side</p>
                <p><strong>Enable Sessions:</strong></p>
                <p>Add to settings.py:</p>
                <pre className="mb-3"><code>{`MIDDLEWARE = [
    'django.contrib.sessions.middleware.SessionMiddleware',
]

INSTALLED_APPS = [
    'django.contrib.sessions',
]`}</code></pre>

                <p><strong>Setting Session Data:</strong></p>
                <pre className="mb-3"><code>{`def setsession(request):
    request.session["sname"] = 'abc'
    request.session["semail"] = 'abc@gmail.com'
    return HttpResponse("session is set")`}</code></pre>

                <p><strong>Getting Session Data:</strong></p>
                <pre className="mb-3"><code>{`def getsession(request):
    studentname = request.session["sname"]
    studentemail = request.session["semail"]
    return HttpResponse(studentname + " " + studentemail)`}</code></pre>

                <p><strong>URL Configuration:</strong></p>
                <pre className="mb-3"><code>{`from django.contrib import admin
from django.urls import path
from myapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('setsession/', views.setsession),
    path('getsession/', views.getsession),
]`}</code></pre>
              </div>
            </section>

            <section id="authentication" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-shield-lock"></i> Authentication & Authorization</h2>

              <div className="property-card">
                <h3 className="h4">Django's Built-in Authentication</h3>
                <p>Django provides a robust authentication system out of the box:</p>
                <ul>
                  <li>User objects (username, password, email, first_name, last_name)</li>
                  <li>Permissions (view, add, change, delete)</li>
                  <li>Groups for grouping users</li>
                  <li>Password hashing and validation</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">User Registration Example</h3>
                <p><strong>forms.py:</strong></p>
                <pre className="mb-3"><code>{`from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class RegisterForm(UserCreationForm):
    email = forms.EmailField()
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']`}</code></pre>

                <p><strong>views.py:</strong></p>
                <pre className="mb-3"><code>{`from django.shortcuts import render, redirect
from .forms import RegisterForm
from django.contrib import messages

def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}!')
            return redirect('login')
    else:
        form = RegisterForm()
    return render(request, 'users/register.html', {'form': form})`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Login/Logout Views</h3>
                <p><strong>views.py:</strong></p>
                <pre className="mb-3"><code>{`from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.shortcuts import render, redirect

def user_login(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')
    else:
        form = AuthenticationForm()
    return render(request, 'users/login.html', {'form': form})

def user_logout(request):
    logout(request)
    return redirect('home')`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Authorization with Decorators</h3>
                <pre className="mb-3"><code>{`from django.contrib.auth.decorators import login_required, permission_required

@login_required
def profile(request):
    return render(request, 'users/profile.html')

@permission_required('app.add_model', raise_exception=True)
def restricted_view(request):
    return render(request, 'restricted.html')`}</code></pre>
              </div>
            </section>

            <section id="drf-intro" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-code-square"></i> Django REST Framework</h2>

              <div className="property-card">
                <h3 className="h4">What is DRF?</h3>
                <ul>
                  <li>Powerful and flexible toolkit for building Web APIs in Django</li>
                  <li>Provides serialization, authentication, permissions, throttling, and more</li>
                  <li>Works well with both ORM and non-ORM data sources</li>
                  <li>Highly customizable while providing sensible defaults</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Key Features</h3>
                <ul>
                  <li><strong>Serialization:</strong> Convert complex data types to native Python datatypes</li>
                  <li><strong>Authentication:</strong> Built-in support for various authentication schemes</li>
                  <li><strong>Permissions:</strong> Fine-grained control over who can access what</li>
                  <li><strong>Throttling:</strong> Control the rate of requests clients can make</li>
                  <li><strong>Browsable API:</strong> Human-friendly HTML output for your API</li>
                  <li><strong>Versioning:</strong> API version management</li>
                </ul>
              </div>
            </section>

            <section id="drf-setup" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-gear"></i> DRF Setup & Installation</h2>

              <div className="property-card">
                <h3 className="h4">Step 1: Install DRF</h3>
                <pre className="mb-3"><code>pip install djangorestframework</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Step 2: Add to INSTALLED_APPS</h3>
                <p>settings.py:</p>
                <pre className="mb-3"><code>{`INSTALLED_APPS = [
    ...
    'rest_framework',
]`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Step 3: Configure REST Framework Settings</h3>
                <p>settings.py:</p>
                <pre className="mb-3"><code>{`REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}`}</code></pre>
              </div>
            </section>

            <section id="drf-simple-api" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-terminal"></i> Creating a Simple API</h2>

              <div className="property-card">
                <h3 className="h4">1. Create Model</h3>
                <p>models.py:</p>
                <pre className="mb-3"><code>{`from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    published_date = models.DateField()
    isbn = models.CharField(max_length=13)
    
    def __str__(self):
        return self.title`}</code></pre>
                <p>Run migrations:</p>
                <pre className="mb-3"><code>python manage.py makemigrations
                  python manage.py migrate</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Create Serializer</h3>
                <p>serializers.py:</p>
                <pre className="mb-3"><code>{`from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'published_date', 'isbn']`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Create View</h3>
                <p>views.py:</p>
                <pre className="mb-3"><code>{`from rest_framework import generics
from .models import Book
from .serializers import BookSerializer

class BookListCreate(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">4. Configure URLs</h3>
                <p>urls.py:</p>
                <pre className="mb-3"><code>{`from django.urls import path
from .views import BookListCreate, BookRetrieveUpdateDestroy

urlpatterns = [
    path('books/', BookListCreate.as_view(), name='book-list'),
    path('books/<int:pk>/', BookRetrieveUpdateDestroy.as_view(), name='book-detail'),
]`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">5. Test the API</h3>
                <p>Run server:</p>
                <pre className="mb-3"><code>python manage.py runserver</code></pre>
                <p>Access API at:</p>
                <ul>
                  <li><code>http://127.0.0.1:8000/books/</code> - List/Create books</li>
                  <li><code>http://127.0.0.1:8000/books/1/</code> - Retrieve/Update/Delete specific book</li>
                </ul>
              </div>
            </section>

            <section id="django-react" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-braces"></i> Django + React Integration</h2>

              <div className="property-card">
                <h3 className="h4">Approach 1: Separate Frontend and Backend</h3>
                <ul>
                  <li>Django serves as a pure API backend (using DRF)</li>
                  <li>React runs as a separate frontend application</li>
                  <li>Communicate via HTTP requests</li>
                  <li>Best for complex frontends or when frontend and backend are developed by separate teams</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4">Approach 2: Django Serves React</h3>
                <ul>
                  <li>Django serves both the API and React frontend</li>
                  <li>React app is built and static files are served by Django</li>
                  <li>Simpler deployment but less flexibility</li>
                </ul>
              </div>
            </section>

            <section id="separate-frontend" className="mb-5">
              <h3 className="h3 mb-3"><i className="bi bi-diagram-2"></i> Separate Frontend Setup</h3>

              <div className="property-card">
                <h3 className="h4">1. Set Up Django Backend</h3>
                <p>Create a Django project with DRF as shown in previous sections</p>
                <p>Configure CORS (Cross-Origin Resource Sharing):</p>
                <pre className="mb-3"><code>pip install django-cors-headers</code></pre>
                <p>settings.py:</p>
                <pre className="mb-3"><code>{`INSTALLED_APPS = [
    ...
    'corsheaders',
]

MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

# Allow all origins (for development only)
CORS_ALLOW_ALL_ORIGINS = True

# Or specify allowed origins
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">2. Create React Frontend</h3>
                <p>Create a new React app:</p>
                <pre className="mb-3"><code>npm create vite@latest
                  cd frontend</code></pre>
                <p>Install axios for API calls:</p>
                <pre className="mb-3"><code>npm install axios</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">3. Connect React to Django API</h3>
                <p>Example React component (BookList.jsx):</p>
                <pre className="mb-3"><code>{`import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/books/');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;`}</code></pre>
              </div>
            </section>

            <section id="sample-project" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-book"></i> Sample Project: Book Management</h2>

              <div className="property-card">
                <h3 className="h4">Backend (Django + DRF)</h3>
                <p><strong>models.py:</strong></p>
                <pre className="mb-3"><code>{`from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    published_date = models.DateField()
    isbn = models.CharField(max_length=13, unique=True)
    page_count = models.IntegerField()
    cover_url = models.URLField(blank=True)
    language = models.CharField(max_length=20)

    def __str__(self):
        return self.title`}</code></pre>

                <p><strong>serializers.py:</strong></p>
                <pre className="mb-3"><code>{`from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'`}</code></pre>

                <p><strong>views.py:</strong></p>
                <pre className="mb-3"><code>{`from rest_framework import generics, filters
from .models import Book
from .serializers import BookSerializer
from django_filters.rest_framework import DjangoFilterBackend

class BookListCreate(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['author', 'language']
    search_fields = ['title', 'author']
    ordering_fields = ['title', 'published_date']

class BookRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer`}</code></pre>

                <p><strong>urls.py:</strong></p>
                <pre className="mb-3"><code>{`from django.urls import path
from .views import BookListCreate, BookRetrieveUpdateDestroy

urlpatterns = [
    path('books/', BookListCreate.as_view(), name='book-list'),
    path('books/<int:pk>/', BookRetrieveUpdateDestroy.as_view(), name='book-detail'),
]`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4">Frontend (React)</h3>
                <p><strong>BookList.jsx:</strong></p>
                <pre className="mb-3"><code>{`import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Input, DatePicker, message } from 'antd';
import 'antd/dist/antd.css';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/books/');
      setBooks(response.data);
    } catch (error) {
      message.error('Failed to fetch books');
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      await axios.post('http://localhost:8000/api/books/', values);
      message.success('Book added successfully');
      fetchBooks();
      handleCancel();
    } catch (error) {
      message.error('Failed to add book');
    }
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Published Date',
      dataIndex: 'published_date',
      key: 'published_date',
    },
    {
      title: 'ISBN',
      dataIndex: 'isbn',
      key: 'isbn',
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Button type="primary" onClick={showModal}>
          Add Book
        </Button>
      </div>

      <Table dataSource={books} columns={columns} rowKey="id" />

      <Modal
        title="Add New Book"
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="author"
            label="Author"
            rules={[{ required: true, message: 'Please input the author!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="published_date"
            label="Published Date"
            rules={[{ required: true, message: 'Please select the date!' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="isbn"
            label="ISBN"
            rules={[{ required: true, message: 'Please input the ISBN!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="page_count"
            label="Page Count"
            rules={[{ required: true, message: 'Please input the page count!' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item name="cover_url" label="Cover URL">
            <Input />
          </Form.Item>
          <Form.Item
            name="language"
            label="Language"
            rules={[{ required: true, message: 'Please input the language!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BookList;`}</code></pre>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Django Notes &copy; 2025 | Created by Mugilvannan P.</p>
        </div>
      </footer>
    </div>
  );
}

export default DjangoNotes;