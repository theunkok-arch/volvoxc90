import PhotoGallery, { type Photo } from "./PhotoGallery";

// Brede uitgelichte foto bovenaan, daaronder een net raster met details.
// Klik op een foto opent een grote, swipebare weergave (zie PhotoGallery).
const feature: Photo = {
  src: "/images/side.jpg",
  alt: "Volvo XC90 V8 in grijsmetallic, volledig zijaanzicht",
  width: 2000,
  height: 966,
};

const photos: Photo[] = [
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
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-2xl">
            <p className="eyebrow">Foto&apos;s</p>
            <h2 className="section-title mt-3">Zo staat hij erbij</h2>
          </div>
          <p className="text-sm text-muted">Klik of tik om te vergroten en te bladeren.</p>
        </div>

        <PhotoGallery feature={feature} photos={photos} />
      </div>
    </section>
  );
}
