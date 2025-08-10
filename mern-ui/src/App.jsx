import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MernCourseView from './pages/MernCourseView';
import HtmlNotes from './pages/courses/Html';
import CssNotes from './pages/courses/CssNotes';
import JavascriptNotes from './pages/courses/JavascriptNotes';
import BootstrapNotes from './pages/courses/BootstrapNotes';
import ReactNotes from './pages/courses/ReactNotes';
import NodeJsNotes from './pages/courses/NodeJsNotes';
import ExpressJsNotes from './pages/courses/ExpressJsNotes';
import MongoDBNotes from './pages/courses/MongoDBNotes';
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
        <Route path='/course-view' element={<MernCourseView />} />
        <Route path='/courses/html' element={<HtmlNotes />} />
        <Route path='/courses/css' element={<CssNotes />} />
        <Route path='/courses/javascript' element={<JavascriptNotes />} />
        <Route path='/courses/bootstrap' element={<BootstrapNotes />} />
        <Route path='/courses/react' element={<ReactNotes />} />
        <Route path='/courses/nodejs' element={<NodeJsNotes />} />
        <Route path='/courses/expressjs' element={<ExpressJsNotes />} />
        <Route path='/courses/mongodb' element={<MongoDBNotes />} />
      </Routes>
      <ScrollToTopArrow />
      <Footer />
    </BrowserRouter>
  );
}

export default App;