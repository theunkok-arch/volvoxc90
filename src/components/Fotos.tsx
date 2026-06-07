import Image from "next/image";
import { fotoNote } from "@/lib/content";

const photos = [
  {
    src: "/images/side.jpg",
    alt: "Volvo XC90 V8 in grijsmetallic, volledig zijaanzicht",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/images/rear.jpg",
    alt: "Achterkant van de Volvo XC90 V8 met dubbele uitlaat en V8 embleem",
    ratio: "aspect-[16/10]",
  },
];

export default function Fotos() {
  return (
    <section id="fotos" className="bg-cream/60 py-16 sm:py-20">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow">Foto&apos;s</p>
            <h2 className="section-title mt-3">Zo staat hij erbij</h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-hair bg-card px-3.5 py-1.5 text-xs text-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-forest/70" />
            {fotoNote}
          </span>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {photos.map((p) => (
            <figure
              key={p.src}
              className="overflow-hidden rounded-2xl border border-hair bg-card p-2 shadow-soft"
            >
              <div className={`relative ${p.ratio} overflow-hidden rounded-xl bg-forest-50`}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
