import { fiscaal } from "@/lib/content";
import { LeafIcon, CheckIcon } from "./Icons";

export default function Fiscaal() {
  return (
    <section id="fiscaal" className="container-x py-16 sm:py-20">
      <div className="overflow-hidden rounded-3xl border border-forest/25 bg-cream shadow-soft">
        <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-12">
          {/* Big emphasis badge */}
          <div className="flex items-center gap-6">
            <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-2xl bg-forest text-cream sm:h-32 sm:w-32">
              <span className="text-4xl font-semibold leading-none sm:text-5xl">35%</span>
              <span className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-cream/80">
                bijtelling
              </span>
            </div>
            <div>
              <p className="eyebrow">
                <LeafIcon className="h-4 w-4" />
                Fiscaal voordeel
              </p>
              <h2 className="mt-3 text-2xl font-medium leading-snug tracking-tightish text-ink sm:text-[1.7rem]">
                {fiscaal.kop}
              </h2>
            </div>
          </div>

          {/* Points + closer */}
          <div>
            <ul className="space-y-3.5">
              {fiscaal.punten.map((punt) => (
                <li key={punt} className="flex gap-3 text-[1.02rem] leading-snug text-ink">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                  <span>{punt}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-forest/15 pt-5 text-[0.95rem] leading-relaxed text-muted">
              {fiscaal.afsluiter}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
