import { contact } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon, MailIcon } from "./Icons";

// Vaste onderbalk op mobiel met drie acties: Bellen, WhatsApp, Mailen.
// Verborgen vanaf md (daar staat de actie in de header en sectie Contact).
export default function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hair bg-paper/95 backdrop-blur-md md:hidden">
      <nav
        aria-label="Snelle acties"
        className="container-x grid grid-cols-3 gap-2 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]"
      >
        <a
          href={contact.phoneHref}
          className="flex flex-col items-center gap-1 rounded-xl py-1.5 text-xs font-medium text-ink active:bg-forest-50"
          aria-label={`Bellen naar ${contact.phoneDisplay}`}
        >
          <PhoneIcon className="h-5 w-5 text-forest" />
          Bellen
        </a>
        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 rounded-xl py-1.5 text-xs font-medium text-ink active:bg-forest-50"
        >
          <WhatsAppIcon className="h-5 w-5 text-forest" />
          WhatsApp
        </a>
        <a
          href={contact.emailHref}
          className="flex flex-col items-center gap-1 rounded-xl py-1.5 text-xs font-medium text-ink active:bg-forest-50"
        >
          <MailIcon className="h-5 w-5 text-forest" />
          Mailen
        </a>
      </nav>
    </div>
  );
}
