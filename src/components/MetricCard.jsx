import { motion } from 'framer-motion';

export default function MetricCard({ label, value, delta, color = 'blue' }) {
  const colorMap = {
    blue: 'text-blue-300 bg-blue-500/10 ring-blue-500/20',
    fuchsia: 'text-fuchsia-300 bg-fuchsia-500/10 ring-fuchsia-500/20',
    emerald: 'text-emerald-300 bg-emerald-500/10 ring-emerald-500/20',
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur p-4"
    >
      <div className="text-slate-400 text-xs">{label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className="text-2xl font-bold text-white">{value}</div>
        {delta && (
          <span className={`text-xs rounded-full px-2 py-0.5 ring-1 ${colorMap[color]}`}>{delta}</span>
        )}
      </div>
    </motion.div>
  );
}
