import { useState } from 'react';

export default function CampaignForm({ onCreated }) {
  const [form, setForm] = useState({
    name: '',
    brand: '',
    objective: 'awareness',
    budget: '',
    start_date: '',
    end_date: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const backend = import.meta.env.VITE_BACKEND_URL;

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${backend}/api/campaigns`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          budget: parseFloat(form.budget || '0'),
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      onCreated?.(data.id);
      setForm({ name: '', brand: '', objective: 'awareness', budget: '', start_date: '', end_date: '' });
    } catch (err) {
      setError('Could not create campaign');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-6 gap-4">
      <input className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-400" placeholder="Campaign name" value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} required />
      <input className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-400" placeholder="Brand" value={form.brand} onChange={(e)=>setForm({...form, brand: e.target.value})} required />
      <select className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100" value={form.objective} onChange={(e)=>setForm({...form, objective: e.target.value})}>
        <option value="awareness">Awareness</option>
        <option value="traffic">Traffic</option>
        <option value="conversions">Conversions</option>
        <option value="leads">Leads</option>
        <option value="engagement">Engagement</option>
      </select>
      <input type="number" step="0.01" className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-400" placeholder="Budget (USD)" value={form.budget} onChange={(e)=>setForm({...form, budget: e.target.value})} required />
      <input type="date" className="md:col-span-3 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100" value={form.start_date} onChange={(e)=>setForm({...form, start_date: e.target.value})} required />
      <input type="date" className="md:col-span-3 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100" value={form.end_date} onChange={(e)=>setForm({...form, end_date: e.target.value})} required />
      <button disabled={loading} className="md:col-span-6 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium rounded-lg px-4 py-2 transition-colors">
        {loading ? 'Creating...' : 'Create Campaign'}
      </button>
      {error && <p className="md:col-span-6 text-sm text-red-400">{error}</p>}
    </form>
  );
}
