import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CampaignForm from './components/CampaignForm';
import CampaignList from './components/CampaignList';
import AdForm from './components/AdForm';
import AdList from './components/AdList';

function App() {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState('');
  const backend = import.meta.env.VITE_BACKEND_URL;

  const loadCampaigns = async () => {
    try {
      const res = await fetch(`${backend}/api/campaigns`);
      const data = await res.json();
      const items = data.items || [];
      setCampaigns(items);
      if (!selectedCampaign && items.length) setSelectedCampaign(items[0]._id);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => { loadCampaigns(); }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />

      <main className="relative -mt-16 z-20">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <section id="campaigns" className="rounded-2xl border border-slate-800/80 bg-slate-900/70 backdrop-blur-xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Campaigns</h2>
                <p className="text-slate-400 text-sm">Create and track performance across channels</p>
              </div>
            </div>

            <CampaignForm onCreated={() => loadCampaigns()} />

            <div className="mt-8">
              <CampaignList />
            </div>
          </section>

          <section id="ads" className="rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Ads</h2>
                <p className="text-slate-400 text-sm">Create creatives and placements</p>
              </div>
              <select className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100" value={selectedCampaign} onChange={(e)=>setSelectedCampaign(e.target.value)}>
                {campaigns.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
              </select>
            </div>

            <AdForm campaigns={campaigns} onCreated={() => {}} />

            <div className="mt-8">
              <AdList campaignId={selectedCampaign} />
            </div>
          </section>

          <section id="insights" className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Insights</h2>
                <p className="text-slate-400 text-sm">Performance metrics coming next</p>
              </div>
              <div className="text-xs text-slate-400">Backend: {import.meta.env.VITE_BACKEND_URL}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">Impressions</div>
              <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">Clicks</div>
              <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">Spend</div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-10 text-center text-slate-500 text-sm">
        Built for performance marketers
      </footer>
    </div>
  );
}

export default App
