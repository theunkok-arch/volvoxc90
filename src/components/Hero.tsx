import Image from "next/image";
import { intro, fotoNote } from "@/lib/content";
import { priceLabel } from "@/lib/site";
import { ArrowIcon } from "./Icons";

// H1 is overgenomen zoals aangeleverd, inclusief de scheidingstekens.
const titleSegments = [
  "Volvo XC90 V8 Executive",
  "Youngtimer met 35% bijtelling",
  "Full Options",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-x pt-12 pb-10 sm:pt-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* Copy */}
          <div className="animate-fade-up">
            <p className="eyebrow">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-forest" />
              Youngtimer, 35% bijtelling
            </p>

            <h1 className="mt-5 text-[2.1rem] font-medium leading-[1.08] tracking-tightish text-ink sm:text-5xl lg:text-[3.4rem]">
              {titleSegments.map((seg, i) => (
                <span key={seg}>
                  {seg}
                  {i < titleSegments.length - 1 && (
                    <span className="font-light text-muted"> | </span>
                  )}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted">
              {intro}
            </p>

            {priceLabel && (
              <p className="mt-6 text-lg font-medium text-ink">{priceLabel}</p>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">
                Neem contact op
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a href="#auto" className="btn-secondary">
                Bekijk de auto
              </a>
            </div>
          </div>

          {/* Hero image in a soft, rounded paper frame */}
          <div className="animate-fade-up [animation-delay:120ms]">
            <figure className="rounded-[1.75rem] border border-hair bg-card p-2.5 shadow-lift">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.3rem] bg-forest-50">
                <Image
                  src="/images/side.jpg"
                  alt="Volvo XC90 V8 Executive in grijsmetallic, zijaanzicht, geparkeerd op een erf"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex items-center gap-2 px-2 pt-2.5 pb-1 text-xs text-muted">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-forest/70" />
                {fotoNote}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
