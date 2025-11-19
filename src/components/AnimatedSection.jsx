import { motion } from 'framer-motion';

export default function AnimatedSection({ id, title, subtitle, accent = 'blue', children, rightSlot }) {
  const colors = {
    blue: 'from-blue-500/20 via-blue-400/10 to-transparent',
    fuchsia: 'from-fuchsia-500/20 via-fuchsia-400/10 to-transparent',
    emerald: 'from-emerald-500/20 via-emerald-400/10 to-transparent',
    amber: 'from-amber-500/20 via-amber-400/10 to-transparent',
    pink: 'from-pink-500/20 via-pink-400/10 to-transparent',
  };

  return (
    <section id={id} className="relative">
      <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${colors[accent] || colors.blue} blur-2xl`} aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 md:p-8 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <motion.h2 layout className="text-xl md:text-2xl font-semibold tracking-tight">
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p layout className="text-slate-400 text-sm mt-1">{subtitle}</motion.p>
            )}
          </div>
          {rightSlot}
        </div>
        {children}
      </motion.div>
    </section>
  );
}
