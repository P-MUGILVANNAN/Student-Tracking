import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import CourseView from './pages/CourseView';
import HtmlNotes from './pages/courses/Html';
import CssNotes from './pages/courses/CssNotes';
import JavascriptNotes from './pages/courses/JavascriptNotes';
import BootstrapNotes from './pages/courses/BootstrapNotes';
import ReactNotes from './pages/courses/ReactNotes';
import JavaNotes from './pages/courses/JavaNotes';
import ServletNotes from './pages/courses/ServletNotes';
import JspNotes from './pages/courses/JspNotes';
import SpringbootNotes from './pages/courses/SpringBootNotes';
import MySqlNotes from './pages/courses/MySqlNotes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopArrow from './components/ScrollToTopArrow';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/course-view" replace />} />
        <Route path='/course-view' element={<CourseView />} />
        <Route path='/courses/html' element={<HtmlNotes />} />
        <Route path='/courses/css' element={<CssNotes />} />
        <Route path='/courses/javascript' element={<JavascriptNotes />} />
        <Route path='/courses/bootstrap' element={<BootstrapNotes />} />
        <Route path='/courses/react' element={<ReactNotes />} />
        <Route path='/courses/java' element={<JavaNotes />} />
        <Route path='/courses/servlets' element={<ServletNotes />} />
        <Route path='/courses/jsp' element={<JspNotes />} />
        <Route path='/courses/spring-boot' element={<SpringbootNotes />} />
        <Route path='/courses/mysql' element={<MySqlNotes />} />
      </Routes>
      <ScrollToTopArrow />
      <Footer />
    </BrowserRouter>
  );
}

export default App;