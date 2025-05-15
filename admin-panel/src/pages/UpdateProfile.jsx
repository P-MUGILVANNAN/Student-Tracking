import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UpdateProfile() {
  const [adminData, setAdminData] = useState({
    name: '',
    email: '',
    institution: { name: '', address: '' },
    trainerName: '',
    courses: []
  });
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      setAdminData(res.data);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('institution.')) {
      const [key] = name.split('.').slice(1);
      setAdminData((prevData) => ({
        ...prevData,
        institution: { ...prevData.institution, [key]: value }
      }));
    } else {
      setAdminData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    axios.put('http://localhost:5000/api/admin/profile', adminData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      navigate('/admin', { 
        state: { message: 'Profile updated successfully!' } 
      });
    }).catch(err => {
      console.error(err);
      alert('Error updating profile: ' + (err.response?.data?.message || 'Server error'));
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ 
        height: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="update-profile-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '2rem 0'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg" style={{
              borderRadius: '15px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)'
            }}>
              <div className="card-header py-3" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h3 className="text-center mb-0 text-white">
                  <i className="bi bi-person-gear me-2"></i>
                  Update Your Profile
                </h3>
              </div>
              
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* Personal Information */}
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control bg-transparent text-white"
                          id="name"
                          name="name"
                          placeholder="Full Name"
                          value={adminData.name}
                          onChange={handleChange}
                          required
                          style={{ borderRadius: '10px', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                        />
                        <label htmlFor="name" className="text-white-50">Full Name</label>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control bg-transparent text-white"
                          id="email"
                          name="email"
                          placeholder="Email"
                          value={adminData.email}
                          onChange={handleChange}
                          required
                          style={{ borderRadius: '10px', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                        />
                        <label htmlFor="email" className="text-white-50">Email</label>
                      </div>
                    </div>

                    {/* Trainer Information */}
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control bg-transparent text-white"
                          id="trainerName"
                          name="trainerName"
                          placeholder="Trainer Name"
                          value={adminData.trainerName}
                          onChange={handleChange}
                          required
                          style={{ borderRadius: '10px', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                        />
                        <label htmlFor="trainerName" className="text-white-50">Trainer Name</label>
                      </div>
                    </div>

                    {/* Institution Information */}
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control bg-transparent text-white"
                          id="institutionName"
                          name="institution.name"
                          placeholder="Institution Name"
                          value={adminData.institution.name}
                          onChange={handleChange}
                          required
                          style={{ borderRadius: '10px', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                        />
                        <label htmlFor="institutionName" className="text-white-50">Institution Name</label>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control bg-transparent text-white"
                          id="institutionAddress"
                          name="institution.address"
                          placeholder="Institution Address"
                          value={adminData.institution.address}
                          onChange={handleChange}
                          required
                          style={{ borderRadius: '10px', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                        />
                        <label htmlFor="institutionAddress" className="text-white-50">Institution Address</label>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-4">
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      onClick={() => navigate(-1)}
                      style={{ borderRadius: '10px', padding: '10px 20px' }}
                    >
                      <i className="bi bi-arrow-left me-2"></i>
                      Cancel
                    </button>
                    
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                      style={{
                        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '10px 20px',
                        fontWeight: '600'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          Updating...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-save me-2"></i>
                          Update Profile
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}