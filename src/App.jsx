import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CampaignForm from './components/CampaignForm';
import CampaignList from './components/CampaignList';
import AdForm from './components/AdForm';
import AdList from './components/AdList';
import AnimatedSection from './components/AnimatedSection';
import MetricCard from './components/MetricCard';
import NeonGrid from './components/NeonGrid';

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
        <div className="mx-auto max-w-7xl px-6 space-y-16">

          <AnimatedSection id="campaigns" title="Campaigns" subtitle="Create and track performance across channels" accent="emerald">
            <CampaignForm onCreated={() => loadCampaigns()} />
            <div className="mt-8">
              <CampaignList />
            </div>
          </AnimatedSection>

          <AnimatedSection
            id="ads"
            title="Ads"
            subtitle="Create creatives and placements"
            accent="fuchsia"
            rightSlot={
              <select className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-100" value={selectedCampaign} onChange={(e)=>setSelectedCampaign(e.target.value)}>
                {campaigns.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
              </select>
            }
          >
            <AdForm campaigns={campaigns} onCreated={() => {}} />
            <div className="mt-8">
              <AdList campaignId={selectedCampaign} />
            </div>
          </AnimatedSection>

          <AnimatedSection id="insights" title="Insights" subtitle="Performance metrics coming next" accent="blue">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MetricCard label="Impressions" value="—" delta="+0%" color="blue" />
              <MetricCard label="Clicks" value="—" delta="+0%" color="fuchsia" />
              <MetricCard label="Spend" value="$0" delta="0%" color="emerald" />
            </div>
            <div className="mt-8">
              <NeonGrid />
            </div>
            <div className="mt-6 text-xs text-slate-400">Backend: {import.meta.env.VITE_BACKEND_URL}</div>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <a href="#top" className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 text-xs text-slate-300 hover:bg-white/10 transition-colors">
              Back to top
            </a>
          </motion.div>

        </div>
      </main>

      <footer className="py-12 text-center text-slate-500 text-sm">
        Built for performance marketers
      </footer>
    </div>
  );
}

export default App
