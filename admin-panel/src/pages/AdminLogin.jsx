import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://student-tracking-e3tk.onrender.com/api/admin/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      console.log('Login successful. Navigating to /admin...');
      navigate('/admin');
    } catch (error) {
      setLoading(false);
      alert('Invalid credentials or server error');
      console.error(error);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-3"
      style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="card p-4 shadow-lg border-0" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <img src="https://fiit.co.in/wp-content/uploads/2024/10/fiit-logo.png" alt="" className="img-fluid" />
          <div className="mt-2" style={{
            height: '4px',
            width: '60px',
            background: 'linear-gradient(to right, #667eea, #764ba2)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
          <h3 className="text-primary fw-bold">Trainer Login</h3>
          <div className="mt-2" style={{
            height: '4px',
            width: '60px',
            background: 'linear-gradient(to right, #1a2980, #26d0ce)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary">Email</label>
            <input
              type="email"
              className="form-control py-2"
              placeholder='Enter your email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ borderRadius: '8px', border: '1px solid #ced4da' }}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold text-secondary">Password</label>
            <input
              type="password"
              className="form-control py-2"
              placeholder='Enter your password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ borderRadius: '8px', border: '1px solid #ced4da' }}
            />
          </div>

          <button
            className="btn w-100 py-2 text-white fw-bold border-0"
            type="submit"
            disabled={loading}
            style={{
              borderRadius: '8px',
              background: 'linear-gradient(to right, #667eea, #764ba2)',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
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