import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/student/profile');
    } catch (err) {
      alert('Login failed! Please check your credentials.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-3" 
         style={{background: 'linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)'}}>
      <div className="card p-4 shadow-lg border-0" style={{width: '100%', maxWidth: '400px'}}>
        <div className="text-center mb-4">
          <h3 className="text-primary fw-bold">Student Login</h3>
          <div className="mt-2" style={{
            height: '4px',
            width: '60px',
            background: 'linear-gradient(to right, #1a2980, #26d0ce)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>
        
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{borderRadius: '8px', border: '1px solid #ced4da'}}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="form-label fw-semibold text-secondary">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-control py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{borderRadius: '8px', border: '1px solid #ced4da'}}
              required
            />
          </div>
          
          <button
            className="btn w-100 py-2 text-white fw-bold border-0"
            type="submit"
            disabled={loading}
            style={{
              borderRadius: '8px',
              background: 'linear-gradient(to right, #1a2980, #26d0ce)',
              boxShadow: '0 4px 15px rgba(26, 41, 128, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.opacity = '0.9'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Logging in...
              </>
            ) : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}