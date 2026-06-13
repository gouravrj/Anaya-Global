import { Mail, Phone, Search, Trash2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle.jsx';
import api from '../services/api.js';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [deletingId, setDeletingId] = useState('');
  const [error, setError] = useState('');
  const pageSize = 8;

  useEffect(() => {
    api.get('/enquiries')
      .then(({ data }) => setEnquiries(data.enquiries))
      .catch(() => {
        localStorage.removeItem('anaya_admin_token');
        navigate('/admin');
      });
  }, [navigate]);

  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return enquiries.filter((item) => [item.name, item.companyName, item.email, item.phoneNumber, item.serviceRequired, item.message].join(' ').toLowerCase().includes(term));
  }, [enquiries, search]);

  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  const logout = () => {
    localStorage.removeItem('anaya_admin_token');
    navigate('/admin');
  };

  const deleteLead = async (item) => {
    const confirmed = window.confirm(`Delete enquiry from ${item.name}? This cannot be undone.`);
    if (!confirmed) return;

    setDeletingId(item._id);
    setError('');

    try {
      await api.delete(`/enquiries/${item._id}`);
      setEnquiries((current) => current.filter((enquiry) => enquiry._id !== item._id));
      if (visible.length === 1 && page > 1) {
        setPage((current) => current - 1);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to delete enquiry. Please try again.');
    } finally {
      setDeletingId('');
    }
  };

  return (
    <main className="min-h-screen bg-platinum">
      <header className="border-b border-silver bg-white">
        <div className="section-shell flex flex-wrap items-center justify-between gap-4 py-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-azure">Anaya Global</p>
            <h1 className="text-2xl font-bold text-navy">Enquiry Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button onClick={logout} className="rounded-md border border-silver px-4 py-2 font-semibold text-navy hover:bg-platinum dark:border-white/15 dark:text-white dark:hover:bg-white/10">Logout</button>
          </div>
        </div>
      </header>
      <section className="section-shell py-8">
        <label className="flex max-w-xl items-center gap-3 rounded-md border border-silver bg-white px-4 py-3">
          <Search className="text-azure" size={20} />
          <input className="w-full bg-transparent outline-none" placeholder="Search enquiries" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
        </label>
        {error && <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
        <div className="mt-6 overflow-hidden rounded-lg border border-silver bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[920px] text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  {['Name', 'Company', 'Email', 'Phone', 'Service', 'Message', 'Date', 'Actions'].map((head) => <th key={head} className="px-4 py-3 font-bold">{head}</th>)}
                </tr>
              </thead>
              <tbody>
                {visible.map((item) => (
                  <tr key={item._id} className="border-t border-silver align-top">
                    <td className="px-4 py-3 font-semibold text-navy">{item.name}</td>
                    <td className="px-4 py-3">{item.companyName}</td>
                    <td className="px-4 py-3">{item.email}</td>
                    <td className="px-4 py-3">{item.phoneNumber}</td>
                    <td className="px-4 py-3">{item.serviceRequired}</td>
                    <td className="max-w-xs px-4 py-3">{item.message}</td>
                    <td className="px-4 py-3">{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <a className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-azure text-white" href={`mailto:${item.email}`} aria-label="Email lead"><Mail size={16} /></a>
                        <a className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-navy text-white" href={`tel:${item.phoneNumber}`} aria-label="Call lead"><Phone size={16} /></a>
                        <button
                          type="button"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-600 text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                          onClick={() => deleteLead(item)}
                          disabled={deletingId === item._id}
                          aria-label="Delete lead"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {visible.length === 0 && (
                  <tr>
                    <td className="px-4 py-8 text-center text-slate-600" colSpan="8">No enquiries found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm text-slate-600">Page {page} of {pages}</p>
          <div className="flex gap-2">
            <button className="rounded-md border border-silver bg-white px-4 py-2 font-semibold disabled:opacity-50" disabled={page === 1} onClick={() => setPage((value) => value - 1)}>Previous</button>
            <button className="rounded-md border border-silver bg-white px-4 py-2 font-semibold disabled:opacity-50" disabled={page === pages} onClick={() => setPage((value) => value + 1)}>Next</button>
          </div>
        </div>
      </section>
    </main>
  );
}
