import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import FrontendCourseView from './pages/FrontendCourseView';
import HtmlNotes from './pages/courses/Html';
import CssNotes from './pages/courses/CssNotes';
import JavascriptNotes from './pages/courses/JavascriptNotes';
import BootstrapNotes from './pages/courses/BootstrapNotes';
import ReactNotes from './pages/courses/ReactNotes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/course-view" replace />} />
        <Route path='/course-view' element={<FrontendCourseView />} />
        <Route path='/courses/html' element={<HtmlNotes />} />
        <Route path='/courses/css' element={<CssNotes />} />
        <Route path='/courses/javascript' element={<JavascriptNotes />} />
        <Route path='/courses/bootstrap' element={<BootstrapNotes />} />
        <Route path='/courses/react' element={<ReactNotes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;