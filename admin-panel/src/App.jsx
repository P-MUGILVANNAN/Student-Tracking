import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Logout from './pages/Logout';
import ProtectedRoute from './ProtectedRoute';
import UpdateProfile from './pages/UpdateProfile';  // Import the UpdateProfile component
import Navbar from './components/Navbar';
import AdminCourseContentUploader from './pages/AdminCourseContentUploader';
import AddCourse from './pages/AddCourse';
import './App.css';
import EditCourse from './pages/EditCourse';
import AddStudent from './pages/AddStudent';
import AddAssessment from './pages/AddAssessment';
import CourseView from './pages/CourseView';
import StudentView from './pages/StudentView';
import AssessmentView from './pages/AssessmentView';
import AddSyllabus from './pages/AddSyllabus';
import AddProject from './pages/AddProject';
import AttendancePage from './pages/AttendancePage';

function AdminLayout() {
  return (
    <div className="d-flex mt-4">
      <Navbar />
      <div className="flex-grow-1 mt-4 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="/student/:id" element={<StudentView />} />
          <Route path="profile/update" element={<UpdateProfile />} />  {/* Add the update route */}
          <Route path='/addcourse' element={<AdminCourseContentUploader />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/add-assessment/:courseId" element={<AddAssessment />} />
          <Route path="/edit-course/:id" element={<EditCourse />} />
          <Route path="/course/:courseId" element={<CourseView />} />
          <Route path="/assessment/:id/:studentId" element={<AssessmentView />} />
          <Route path="/add-syllabus" element={<AddSyllabus />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/add-project/:courseId" element={<AddProject />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔁 Redirect root to login */}
        <Route path="/" element={<Navigate to="/admin/login" />} />

        {/* 🔐 Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* 🧑‍💻 Admin Panel */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        />

        {/* 🚪 Logout */}
        <Route path="/admin/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
