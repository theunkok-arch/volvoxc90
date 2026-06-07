// Lightweight inline SVG icons (no runtime dependency). Stroke inherits
// currentColor; size via className (default 1.25rem square via width/height).

type IconProps = { className?: string };

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 4h3l1.5 4.5L7.5 10a11 11 0 0 0 6.5 6.5l1.5-2L20 16v3a1.5 1.5 0 0 1-1.6 1.5C10.7 19.9 4.1 13.3 3.5 5.6A1.5 1.5 0 0 1 5 4Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 20.5l1.3-4.2A8 8 0 1 1 8 19.2l-4.5 1.3Z" />
      <path d="M9 8.5c.2 2.5 2 4.3 4.5 4.5.6.05 1.2-.5 1.3-1l.1-.7-1.8-.8-.8.8a4.7 4.7 0 0 1-1.6-1.6l.8-.8-.8-1.8-.7.1c-.5.1-1.05.7-1 1.3Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function ComfortIcon({ className }: IconProps) {
  // seat / comfort
  return (
    <svg {...base} className={className}>
      <path d="M6 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
      <path d="M6 10a2 2 0 0 0-2 2v3h12v-3a2 2 0 0 0-2-2H6Z" />
      <path d="M16 9h2a2 2 0 0 1 2 2v6M4 15v4M16 15v4" />
    </svg>
  );
}

export function ExterieurIcon({ className }: IconProps) {
  // car silhouette
  return (
    <svg {...base} className={className}>
      <path d="M3 13l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 8l2 5" />
      <path d="M3 13h18v3a1 1 0 0 1-1 1h-1M5 17H4a1 1 0 0 1-1-1v-3" />
      <circle cx="7.5" cy="17" r="1.6" />
      <circle cx="16.5" cy="17" r="1.6" />
    </svg>
  );
}

export function VeiligheidIcon({ className }: IconProps) {
  // shield with check
  return (
    <svg {...base} className={className}>
      <path d="M12 3l7 2.5V11c0 4.5-3 8-7 9.5C8 19 5 15.5 5 11V5.5L12 3Z" />
      <path d="m9 11.5 2 2 4-4" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 19c0-7 5-12 14-12 0 9-5 14-12 14-1.5 0-2-1-2-2Z" />
      <path d="M9 15c2-3 4.5-5 8-6" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
