import { Link, useNavigate } from 'react-router-dom';

function StudentNavbar({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black py-2">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand fs-4 fw-bold text-warning" to="/student/profile">
          <i className="bi bi-mortarboard-fill me-2"></i>Student Portal
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-warning"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <i className="bi bi-list text-warning"></i>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Profile */}
            <li className="nav-item mx-1">
              <Link
                className="nav-link d-flex align-items-center py-2 px-3 rounded hover-bg-warning-10"
                to="/student/profile"
              >
                <i className="bi bi-person-fill me-2 text-warning"></i>
                Profile
              </Link>
            </li>

            {/* Dashboard */}
            <li className="nav-item mx-1">
              <Link
                className="nav-link d-flex align-items-center py-2 px-3 rounded hover-bg-warning-10"
                to="/student/dashboard"
              >
                <i className="bi bi-speedometer2 me-2 text-warning"></i>
                Dashboard
              </Link>
            </li>

            {/* Enrolled Courses */}
            <li className="nav-item mx-1">
              <Link
                className="nav-link d-flex align-items-center py-2 px-3 rounded hover-bg-warning-10"
                to="/student/enrolled-courses"
              >
                <i className="bi bi-journal-bookmark-fill me-2 text-warning"></i>
                My Courses
              </Link>
            </li>
          </ul>

          {/* User Dropdown - Fixed with responsive classes */}
          <div className="d-flex">
            <div className="dropdown"> {/* Changed to dropstart for mobile */}
              <button
                className="btn btn-transparent dropdown-toggle d-flex align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user?.profilePic || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}
                  alt="Profile"
                  className="rounded-circle border border-warning"
                  width="40"
                  height="40"
                />
              </button>

              {/* Added responsive dropdown classes */}
              <ul className="dropdown-menu dropdown-menu-lg-end bg-dark border border-warning">
                <li>
                  <Link className="dropdown-item text-light hover-bg-warning-10" to="/student/profile">
                    <i className="bi bi-person-fill me-2 text-warning"></i>My Profile
                  </Link>
                </li>
                <li><hr className="dropdown-divider bg-warning" /></li>
                <li>
                  <button
                    className="dropdown-item text-danger hover-bg-warning-10"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right me-2"></i>Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default StudentNavbar;