import Image from "next/image";
import { intro, inclusief } from "@/lib/content";
import { priceLabel } from "@/lib/site";
import { ArrowIcon, LeafIcon } from "./Icons";

// H1 is overgenomen zoals aangeleverd, inclusief de scheidingstekens.
const titleSegments = [
  "Volvo XC90 V8 Executive",
  "Youngtimer met 35% bijtelling",
  "7-zitter, Full Options",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-x pt-12 pb-10 sm:pt-16 lg:pt-20">
        <div className="grid items-center gap-10 xl:grid-cols-[1.1fr_1fr] xl:gap-14">
          {/* Copy */}
          <div className="animate-fade-up">
            <p className="eyebrow">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-forest" />
              Youngtimer, 35% bijtelling
            </p>

            <h1 className="mt-5 font-medium leading-[1.12] tracking-tightish text-ink text-[clamp(1.3rem,4.6vw,2.35rem)]">
              {titleSegments.map((seg) => (
                <span key={seg} className="block">
                  {seg}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted">
              {intro}
            </p>

            {priceLabel && (
              <div className="mt-7">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm uppercase tracking-[0.14em] text-muted">
                    Vraagprijs
                  </span>
                  <span className="text-3xl font-semibold text-ink sm:text-4xl">
                    {priceLabel}
                  </span>
                </div>
                <p className="mt-2.5 inline-flex items-center gap-2 rounded-full bg-forest-50 px-3.5 py-1.5 text-sm font-medium text-forest">
                  <LeafIcon className="h-4 w-4 shrink-0" />
                  {inclusief}
                </p>
              </div>
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
              <Image
                src="/images/side.jpg"
                alt="Volvo XC90 V8 Executive in grijsmetallic, volledig zijaanzicht"
                width={2000}
                height={966}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-[1.3rem] bg-forest-50"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
