import { LockKeyhole } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/anaya-global-logo.png';
import api from '../services/api.js';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { data } = await api.post('/auth/login', credentials);
      localStorage.setItem('anaya_admin_token', data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="grid min-h-screen place-items-center bg-platinum px-4">
      <form onSubmit={login} className="w-full max-w-md rounded-lg border border-silver bg-white p-7 shadow-soft">
        <img src={logo} alt="Anaya Global" className="mx-auto h-24 w-24 object-contain" />
        <div className="mt-4 text-center">
          <LockKeyhole className="mx-auto text-azure" />
          <h1 className="mt-3 text-2xl font-bold text-navy">Admin Login</h1>
        </div>
        <label className="mt-6 grid gap-2 text-sm font-semibold text-navy">
          Email
          <input className="focus-ring rounded-md border border-silver px-4 py-3 font-normal" type="email" value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} required />
        </label>
        <label className="mt-4 grid gap-2 text-sm font-semibold text-navy">
          Password
          <input className="focus-ring rounded-md border border-silver px-4 py-3 font-normal" type="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} required />
        </label>
        {error && <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
        <button className="focus-ring mt-5 w-full rounded-md bg-navy px-5 py-3 font-bold text-white hover:bg-steel" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </main>
  );
}
