import { useState, useEffect } from 'react';

export default function AdForm({ campaigns, onCreated }) {
  const [form, setForm] = useState({
    campaign_id: '',
    name: '',
    channel: 'facebook',
    format: 'image',
    headline: '',
    cta: '',
    target_audience: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const backend = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    if (!form.campaign_id && campaigns?.length) {
      setForm((f) => ({ ...f, campaign_id: campaigns[0]._id }));
    }
  }, [campaigns]);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${backend}/api/ads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      onCreated?.(data.id);
      setForm({ campaign_id: campaigns?.[0]?._id || '', name: '', channel: 'facebook', format: 'image', headline: '', cta: '', target_audience: '' });
    } catch (err) {
      console.error(err);
      setError('Could not create ad');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-6 gap-4">
      <select className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100" value={form.campaign_id} onChange={(e)=>setForm({...form, campaign_id: e.target.value})}>
        {campaigns?.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
      </select>
      <input className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-400" placeholder="Ad name" value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} required />
      <select className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100" value={form.channel} onChange={(e)=>setForm({...form, channel: e.target.value})}>
        <option value="facebook">Facebook</option>
        <option value="instagram">Instagram</option>
        <option value="google">Google</option>
        <option value="tiktok">TikTok</option>
        <option value="x">X</option>
        <option value="linkedin">LinkedIn</option>
        <option value="other">Other</option>
      </select>
      <select className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100" value={form.format} onChange={(e)=>setForm({...form, format: e.target.value})}>
        <option value="image">Image</option>
        <option value="video">Video</option>
        <option value="carousel">Carousel</option>
        <option value="text">Text</option>
        <option value="html5">HTML5</option>
        <option value="other">Other</option>
      </select>
      <input className="md:col-span-3 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-400" placeholder="Headline" value={form.headline} onChange={(e)=>setForm({...form, headline: e.target.value})} />
      <input className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-400" placeholder="CTA" value={form.cta} onChange={(e)=>setForm({...form, cta: e.target.value})} />
      <input className="md:col-span-6 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-400" placeholder="Target audience" value={form.target_audience} onChange={(e)=>setForm({...form, target_audience: e.target.value})} />
      <button disabled={loading} className="md:col-span-6 bg-fuchsia-600 hover:bg-fuchsia-500 disabled:opacity-50 text-white font-medium rounded-lg px-4 py-2 transition-colors">{loading ? 'Creating...' : 'Create Ad'}</button>
      {error && <p className="md:col-span-6 text-sm text-red-400">{error}</p>}
    </form>
  );
}
