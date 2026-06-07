import { sellerName } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-hair bg-paper">
      <div className="container-x flex flex-col items-center justify-between gap-3 py-8 text-sm text-muted sm:flex-row">
        <p className="flex items-center gap-2">
          <span className="font-medium text-ink">Volvo XC90 V8 Executive</span>
          <span aria-hidden="true">/</span>
          <span>Particuliere verkoop, {sellerName}</span>
        </p>
        <p className="text-xs">Geen cookies, geen trackers. Gewoon een auto te koop.</p>
      </div>
    </footer>
  );
}
