import { useEffect, useState } from 'react';

export default function CampaignList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const backend = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${backend}/api/campaigns`);
        const data = await res.json();
        setItems(data.items || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [backend]);

  if (loading) return <div className="text-slate-300">Loading campaigns...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((c) => (
        <div key={c._id} className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-slate-100 font-semibold">{c.name}</h3>
              <p className="text-slate-400 text-sm">{c.brand} • {c.objective}</p>
            </div>
            <span className="text-xs rounded-full bg-emerald-500/20 text-emerald-300 px-2 py-0.5">{c.status}</span>
          </div>
          <div className="mt-3 text-sm text-slate-300">
            Budget: ${Number(c.budget || 0).toLocaleString()}<br />
            {c.start_date} → {c.end_date}
          </div>
        </div>
      ))}
      {items.length === 0 && (
        <div className="text-slate-400">No campaigns yet. Create your first one above.</div>
      )}
    </div>
  );
}
