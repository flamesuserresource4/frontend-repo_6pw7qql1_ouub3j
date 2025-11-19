import { useEffect, useState } from 'react';

export default function AdList({ campaignId }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const backend = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const load = async () => {
      if (!campaignId) return;
      setLoading(true);
      try {
        const res = await fetch(`${backend}/api/ads?campaign_id=${campaignId}`);
        const data = await res.json();
        setItems(data.items || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [backend, campaignId]);

  if (!campaignId) return <div className="text-slate-400">Select a campaign to view ads.</div>;
  if (loading) return <div className="text-slate-300">Loading ads...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((ad) => (
        <div key={ad._id} className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-slate-100 font-semibold">{ad.name}</h3>
              <p className="text-slate-400 text-sm">{ad.channel} • {ad.format}</p>
            </div>
            <span className="text-xs rounded-full bg-blue-500/20 text-blue-300 px-2 py-0.5">{ad.status}</span>
          </div>
          <div className="mt-3 text-sm text-slate-300">
            <div className="truncate">“{ad.headline}”</div>
            <div className="text-slate-400">CTA: {ad.cta || '—'}</div>
          </div>
        </div>
      ))}
      {items.length === 0 && (
        <div className="text-slate-400">No ads for this campaign yet.</div>
      )}
    </div>
  );
}
