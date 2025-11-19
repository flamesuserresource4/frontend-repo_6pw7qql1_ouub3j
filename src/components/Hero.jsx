import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[85vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-blue-100 ring-1 ring-white/20 mb-4"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Live Ad Ops Dashboard
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white"
          >
            Run high‑velocity ad campaigns
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300">with cinematic clarity</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-4 text-blue-100/90 text-base md:text-lg"
          >
            Create, launch, and analyze across every channel — all in one motion‑driven workspace.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#campaigns" className="rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-5 py-2.5 font-semibold transition-colors">New Campaign</a>
            <a href="#insights" className="rounded-xl bg-white/10 hover:bg-white/15 ring-1 ring-white/10 text-white px-5 py-2.5 font-semibold transition-colors">View Insights</a>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-950/60 to-slate-950"></div>
    </section>
  );
}
