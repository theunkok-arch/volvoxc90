import { VolvoMark } from "./VolvoLogo";

const links = [
  { href: "#auto", label: "De auto" },
  { href: "#uitrusting", label: "Uitrusting" },
  { href: "#fiscaal", label: "Fiscaal" },
  { href: "#fotos", label: "Foto's" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hair/70 bg-paper/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5">
          <VolvoMark className="h-7 w-7 text-ink" />
          <span className="text-[1.05rem] font-semibold tracking-[0.22em] text-ink">
            VOLVO
          </span>
          <span className="rounded bg-forest-50 px-1.5 py-0.5 text-xs font-semibold text-forest">
            XC90 V8
          </span>
        </a>

        <nav
          aria-label="Hoofdmenu"
          className="hidden items-center gap-7 text-sm text-muted md:flex"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-forest">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-primary btn-sm hidden md:inline-flex">
          Interesse?
        </a>
      </div>
    </header>
  );
}
