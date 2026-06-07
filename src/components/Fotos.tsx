import Image from "next/image";

// Brede uitgelichte foto bovenaan, daaronder een net raster met details.
const feature = {
  src: "/images/side.jpg",
  alt: "Volvo XC90 V8 in grijsmetallic, volledig zijaanzicht",
  width: 2000,
  height: 966,
};

const gallery = [
  { src: "/images/rear.jpg", alt: "Achterkant met dubbele uitlaat en V8 embleem" },
  { src: "/images/motor-v8.jpg", alt: "De 4.4 V8 motor (samen met Yamaha ontwikkeld) in het motorcompartiment" },
  { src: "/images/stoelen-achter.jpg", alt: "Tweede en derde zitrij in leder, 7 zitplaatsen" },
  { src: "/images/interieur-voor.jpg", alt: "Interieur voorin met lederen bekleding en houtafwerking" },
  { src: "/images/dashboard.jpg", alt: "Dashboard en middenconsole met automaat" },
  { src: "/images/kofferbak.jpg", alt: "Ruime kofferbak met de derde zitrij" },
  { src: "/images/velg.jpg", alt: "Lichtmetalen velg met 255/55 R19 band" },
  { src: "/images/tellerstand.jpg", alt: "Tellerstand op het instrumentenpaneel" },
];

export default function Fotos() {
  return (
    <section id="fotos" className="bg-cream/60 py-16 sm:py-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Foto&apos;s</p>
          <h2 className="section-title mt-3">Zo staat hij erbij</h2>
        </div>

        {/* Uitgelichte zijfoto */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-hair bg-card p-2 shadow-soft">
          <Image
            src={feature.src}
            alt={feature.alt}
            width={feature.width}
            height={feature.height}
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="h-auto w-full rounded-xl bg-forest-50"
          />
        </figure>

        {/* Detailfoto's in een net raster */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {gallery.map((p) => (
            <figure
              key={p.src}
              className="overflow-hidden rounded-2xl border border-hair bg-card p-2 shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-forest-50">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
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
