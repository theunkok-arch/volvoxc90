import { uitrusting } from "@/lib/content";
import {
  ComfortIcon,
  ExterieurIcon,
  VeiligheidIcon,
  CheckIcon,
} from "./Icons";

const iconFor = {
  comfort: ComfortIcon,
  exterieur: ExterieurIcon,
  veiligheid: VeiligheidIcon,
} as const;

export default function Uitrusting() {
  return (
    <section id="uitrusting" className="bg-cream/60 py-16 sm:py-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Uitrusting</p>
          <h2 className="section-title mt-3">Royaal uitgerust</h2>
          <p className="mt-3 text-muted">
            De Executive is de topuitvoering. Comfort, exterieur en veiligheid
            overzichtelijk bij elkaar.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {uitrusting.map((cat) => {
            const Icon = iconFor[cat.icon];
            return (
              <article key={cat.titel} className="card p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-50 text-forest">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-medium text-ink">{cat.titel}</h3>
                </div>

                <ul className="mt-5 space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.95rem] leading-snug text-ink/90">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
