export default function LoadingDots({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:-0.2s]"></span>
      <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:-0.1s]"></span>
      <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-bounce"></span>
    </span>
  );
}
