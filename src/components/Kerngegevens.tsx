import { kerngegevens } from "@/lib/content";

export default function Kerngegevens() {
  return (
    <section id="auto" className="container-x py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">Kerngegevens</p>
        <h2 className="section-title mt-3">De feiten op een rij</h2>
        <p className="mt-3 text-muted">
          Kort en zakelijk. Geen verrassingen, wel een eerlijk beeld.
        </p>
      </div>

      <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hair bg-hair sm:grid-cols-2 lg:grid-cols-3">
        {kerngegevens.map((item) => (
          <div key={item.label} className="bg-card p-5 sm:p-6">
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-forest">
              {item.label}
            </dt>
            <dd className="mt-1.5 text-lg leading-snug text-ink">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
