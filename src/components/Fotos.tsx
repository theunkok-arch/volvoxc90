import Image from "next/image";

export default function Fotos() {
  return (
    <section id="fotos" className="bg-cream/60 py-16 sm:py-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Foto&apos;s</p>
          <h2 className="section-title mt-3">Zo staat hij erbij</h2>
        </div>

        <div className="mt-8 space-y-5">
          {/* Zijaanzicht, breed */}
          <figure className="overflow-hidden rounded-2xl border border-hair bg-card p-2 shadow-soft">
            <Image
              src="/images/side.jpg"
              alt="Volvo XC90 V8 in grijsmetallic, volledig zijaanzicht"
              width={2000}
              height={966}
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="h-auto w-full rounded-xl bg-forest-50"
            />
          </figure>

          {/* Achterkant */}
          <figure className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-hair bg-card p-2 shadow-soft">
            <Image
              src="/images/rear.jpg"
              alt="Achterkant van de Volvo XC90 V8 met dubbele uitlaat en V8 embleem"
              width={1206}
              height={1034}
              sizes="(max-width: 768px) 100vw, 640px"
              className="h-auto w-full rounded-xl bg-forest-50"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
