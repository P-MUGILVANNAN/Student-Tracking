import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PythonCourseView from './pages/PythonCourseView';
import HtmlNotes from './pages/courses/Html';
import CssNotes from './pages/courses/CssNotes';
import JavascriptNotes from './pages/courses/JavascriptNotes';
import BootstrapNotes from './pages/courses/BootstrapNotes';
import ReactNotes from './pages/courses/ReactNotes';
import PythonNotes from './pages/courses/PythonNotes';
import MySqlNotes from './pages/courses/MySqlNotes';
import DjangoNotes from './pages/courses/DjangoNotes';
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
        <Route path='/course-view' element={<PythonCourseView />} />
        <Route path='/courses/html' element={<HtmlNotes />} />
        <Route path='/courses/css' element={<CssNotes />} />
        <Route path='/courses/javascript' element={<JavascriptNotes />} />
        <Route path='/courses/bootstrap' element={<BootstrapNotes />} />
        <Route path='/courses/react' element={<ReactNotes />} />
        <Route path='/courses/python' element={<PythonNotes />} />
        <Route path='/courses/django' element={<DjangoNotes />} />
        <Route path='/courses/mysql' element={<MySqlNotes />} />
      </Routes>
      <ScrollToTopArrow />
      <Footer />
    </BrowserRouter>
  );
}

export default App;