import { Send } from 'lucide-react';
import { useState } from 'react';
import api from '../services/api.js';

const initialState = {
  name: '',
  companyName: '',
  email: '',
  phoneNumber: '',
  serviceRequired: '',
  message: ''
};

const services = ['Business Process Outsourcing', 'Back Office Support', 'Customer Support', 'Virtual Assistant Services', 'IT Support Services', 'Data Management'];

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await api.post('/enquiries', form);
      setStatus({ type: 'success', message: 'Thank you. Your enquiry has been submitted successfully.' });
      setForm(initialState);
    } catch (error) {
      setStatus({ type: 'error', message: error.response?.data?.message || 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submitForm} className="rounded-lg border border-silver/80 bg-white p-6 shadow-soft">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Full Name
          <input className="focus-ring rounded-md border border-silver px-4 py-3 font-normal text-ink" name="name" value={form.name} onChange={updateField} required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Company Name
          <input className="focus-ring rounded-md border border-silver px-4 py-3 font-normal text-ink" name="companyName" value={form.companyName} onChange={updateField} required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Email Address
          <input className="focus-ring rounded-md border border-silver px-4 py-3 font-normal text-ink" type="email" name="email" value={form.email} onChange={updateField} required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Phone Number
          <input className="focus-ring rounded-md border border-silver px-4 py-3 font-normal text-ink" name="phoneNumber" value={form.phoneNumber} onChange={updateField} pattern="^[0-9+\\-\\s()]{7,20}$" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy md:col-span-2">
          Service Required
          <select className="focus-ring rounded-md border border-silver px-4 py-3 font-normal text-ink" name="serviceRequired" value={form.serviceRequired} onChange={updateField} required>
            <option value="">Select a service</option>
            {services.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy md:col-span-2">
          Message
          <textarea className="focus-ring min-h-32 rounded-md border border-silver px-4 py-3 font-normal text-ink" name="message" value={form.message} onChange={updateField} required />
        </label>
      </div>
      {status.message && (
        <p className={`mt-4 rounded-md px-4 py-3 text-sm ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
          {status.message}
        </p>
      )}
      <button className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md bg-azure px-5 py-3 font-bold text-white hover:bg-steel disabled:cursor-not-allowed disabled:opacity-60" disabled={loading}>
        <Send size={18} />
        {loading ? 'Sending...' : 'Submit Enquiry'}
      </button>
    </form>
  );
}
