import { Link } from "@tanstack/react-router";

export function SequrinMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="Sequrin mark"
      fill="none"
      stroke="currentColor"
    >
      <path d="M16 4 L26 10 V22 L16 28 L6 22 V10 Z" strokeWidth="1.25" opacity="0.45" />
      <path d="M16 8.5 L16 16 L22.5 19.5 M16 16 L9.5 19.5" strokeWidth="1.25" opacity="0.7" />
      <circle cx="16" cy="8.5" r="2.1" fill="currentColor" stroke="none" />
      <circle cx="22.5" cy="19.5" r="1.7" fill="currentColor" stroke="none" opacity="0.8" />
      <circle cx="9.5" cy="19.5" r="1.7" fill="currentColor" stroke="none" opacity="0.8" />
    </svg>
  );
}

export function Wordmark({ subtitle }: { subtitle?: string }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Sequrin home">
      <span className="text-primary">
        <SequrinMark className="h-7 w-7" />
      </span>
      <span className="leading-none">
        <span className="font-display text-xl tracking-tight text-foreground">Sequrin</span>
        {subtitle ? <span className="label-mono mt-1 block">{subtitle}</span> : null}
      </span>
    </Link>
  );
}
