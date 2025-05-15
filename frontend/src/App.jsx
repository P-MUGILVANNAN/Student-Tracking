import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import StudentLogin from './pages/StudentLogin';
import StudentProfile from './pages/StudentProfile';
import CourseView from './pages/CourseView';
import StudentNavbar from './components/StudentNavbar';
import { useEffect, useState } from 'react';
import EnrolledCourses from './pages/EnrolledCourses';
import './App.css';
import Dashboard from './pages/Dashboard';
import AssessmentPage from './pages/AssessmentPage';
import ProjectPage from './pages/ProjectPage';

function Layout({ children }) {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const hideOnRoutes = ['/'];
    setShowNavbar(!hideOnRoutes.includes(location.pathname));
  }, [location]);

  const user = {
    name: 'Student Name',
    profileImage: '/default-avatar.png',
  };

  return (
    <>
      {showNavbar && <StudentNavbar user={user} />}
      <main>{children}</main>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<StudentLogin />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/course/:courseId" element={<CourseView />} />
          <Route path="/student/enrolled-courses" element={<EnrolledCourses />} />
          <Route path="/student/dashboard" element={<Dashboard />} />
          <Route path="/student/assessment/:assessmentId" element={<AssessmentPage />} />
          <Route path="/student/project/:projectId" element={<ProjectPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
