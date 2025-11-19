import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl px-4 py-3"
        >
          <motion.div className="flex items-center gap-3" initial={false} whileHover={{ scale: 1.01 }}>
            <motion.div
              className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow ring-1 ring-white/20"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            />
            <div className="leading-tight">
              <div className="text-sm uppercase tracking-widest text-blue-200/80">Pulse</div>
              <div className="-mt-0.5 text-base font-semibold text-white">Ad Ops</div>
            </div>
          </motion.div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200/80">
            {[
              { href: '#campaigns', label: 'Campaigns' },
              { href: '#ads', label: 'Ads' },
              { href: '#insights', label: 'Insights' },
            ].map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -1, color: '#fff' }}
                className="transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-xs text-slate-300/70 mr-2">Live</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <motion.button whileTap={{ scale: 0.98 }} className="ml-3 rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white ring-1 ring-white/10 hover:bg-white/15 transition-colors">New</motion.button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
