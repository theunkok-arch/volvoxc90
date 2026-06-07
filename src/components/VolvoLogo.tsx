// Volvo "iron mark" (ring + diagonal arrow) used as the brand mark in the
// header. Stroke/fill inherit currentColor so it matches the theme.

type Props = { className?: string };

export function VolvoMark({ className }: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="20" cy="28" r="14" stroke="currentColor" strokeWidth="3.2" />
      <path
        d="M26 22 L35 13"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="butt"
      />
      <path d="M29 11 H39 V21 Z" fill="currentColor" />
    </svg>
  );
}

// Full lockup: iron mark + "VOLVO" wordmark.
export function VolvoLogo({ className }: Props) {
  return (
    <span className={className}>
      <VolvoMark className="h-7 w-7 text-ink" />
      <span className="text-[1.05rem] font-semibold tracking-[0.22em] text-ink">
        VOLVO
      </span>
    </span>
  );
}
