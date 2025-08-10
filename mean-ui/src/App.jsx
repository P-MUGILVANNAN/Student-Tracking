import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MeanCourseView from './pages/MeanCourseView';
import HtmlNotes from './pages/courses/Html';
import CssNotes from './pages/courses/CssNotes';
import JavascriptNotes from './pages/courses/JavascriptNotes';
import BootstrapNotes from './pages/courses/BootstrapNotes';
import AngularNotes from './pages/courses/AngularNotes';
import NodeJsNotes from './pages/courses/NodeJsNotes';
import ExpressJsNotes from './pages/courses/ExpressJsNotes';
import MongoDBNotes from './pages/courses/MongoDBNotes';
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
        <Route path='/course-view' element={<MeanCourseView />} />
        <Route path='/courses/html' element={<HtmlNotes />} />
        <Route path='/courses/css' element={<CssNotes />} />
        <Route path='/courses/javascript' element={<JavascriptNotes />} />
        <Route path='/courses/bootstrap' element={<BootstrapNotes />} />
        <Route path='/courses/angular' element={<AngularNotes />} />
        <Route path='/courses/nodejs' element={<NodeJsNotes />} />
        <Route path='/courses/expressjs' element={<ExpressJsNotes />} />
        <Route path='/courses/mongodb' element={<MongoDBNotes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;