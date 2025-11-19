export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow ring-1 ring-white/20" />
            <div className="leading-tight">
              <div className="text-sm uppercase tracking-widest text-blue-200/80">Pulse</div>
              <div className="-mt-0.5 text-base font-semibold text-white">Ad Ops</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200/80">
            <a className="hover:text-white transition-colors" href="#campaigns">Campaigns</a>
            <a className="hover:text-white transition-colors" href="#ads">Ads</a>
            <a className="hover:text-white transition-colors" href="#insights">Insights</a>
          </nav>
          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-xs text-slate-300/70 mr-2">Live</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <button className="ml-3 rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white ring-1 ring-white/10 hover:bg-white/15 transition-colors">New</button>
          </div>
        </div>
      </div>
    </header>
  );
}
