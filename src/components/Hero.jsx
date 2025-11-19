import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] w-full overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-blue-100 ring-1 ring-white/20 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Live Ad Ops Dashboard
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Manage campaigns with speed and clarity
          </h1>
          <p className="mt-4 text-blue-100/90 text-base md:text-lg">
            A high‑energy control center for performance marketers. Launch, monitor, and optimize across channels from one place.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/30 to-slate-900"></div>
    </section>
  );
}
