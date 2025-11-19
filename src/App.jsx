import Hero from './components/Hero';
import CampaignForm from './components/CampaignForm';
import CampaignList from './components/CampaignList';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Hero />

      <main className="relative -mt-12 md:-mt-16 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/80 backdrop-blur p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Campaigns</h2>
                <p className="text-slate-400 text-sm">Create and track performance across channels</p>
              </div>
              <div className="hidden md:block text-xs text-slate-400">Backend: {import.meta.env.VITE_BACKEND_URL}</div>
            </div>

            <CampaignForm />

            <div className="mt-8">
              <CampaignList />
            </div>
          </div>
        </div>
      </main>

      <footer className="py-10 text-center text-slate-500 text-sm">
        Built for performance marketers
      </footer>
    </div>
  );
}

export default App
