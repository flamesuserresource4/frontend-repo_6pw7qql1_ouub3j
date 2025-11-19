import { motion } from 'framer-motion';

export default function NeonGrid() {
  const squares = Array.from({ length: 36 });
  return (
    <div className="grid grid-cols-6 gap-2">
      {squares.map((_, i) => (
        <motion.div
          key={i}
          className="h-10 rounded-md bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 ring-1 ring-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: (i % 6) * 0.05 + Math.floor(i / 6) * 0.04 }}
        />
      ))}
    </div>
  );
}
