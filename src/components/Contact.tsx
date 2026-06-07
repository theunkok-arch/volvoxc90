import { contactTekst } from "@/lib/content";
import { contact, sellerName } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon, MailIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="container-x py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow justify-center">Contact</p>
        <h2 className="section-title mt-3">{contactTekst.kop}</h2>
        <p className="mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-muted">
          {contactTekst.body}
        </p>
      </div>

      <div className="mx-auto mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
        <a
          href={contact.phoneHref}
          className="btn-primary w-full"
          aria-label={`Bellen naar ${contact.phoneDisplay}`}
        >
          <PhoneIcon className="h-4 w-4" />
          Bellen
        </a>
        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary w-full"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
        <a href={contact.emailHref} className="btn-secondary w-full">
          <MailIcon className="h-4 w-4" />
          Mailen
        </a>
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        Of rechtstreeks: <span className="text-ink">{sellerName}</span>,{" "}
        <a href={contact.phoneHref} className="text-forest hover:underline">
          {contact.phoneDisplay}
        </a>{" "}
        <span aria-hidden="true" className="text-hair">
          /
        </span>{" "}
        <a href={contact.emailHref} className="text-forest hover:underline">
          {contact.emailDisplay}
        </a>
      </p>
    </section>
  );
}
