// Alle zichtbare teksten staan letterlijk overgenomen uit de opdracht.
// Stijlregel: geen kastlijntjes (em/en dash). Komma's, punten, haakjes of
// dubbele punten in plaats daarvan.

// -- Kerngegevens (compacte feitenlijst) ------------------------------------
// label/value gesplitst voor nette opmaak; de getoonde tekst blijft identiek.
export const kerngegevens: { label: string; value: string }[] = [
  { label: "Motor", value: "4.4 V8 (Yamaha), soepel en krachtig" },
  { label: "Uitvoering", value: "Executive (topuitvoering)" },
  { label: "Bouwjaar", value: "2005" },
  { label: "Kilometerstand", value: "202.000 km (exact)" },
  { label: "APK", value: "tot 04-2027" },
  { label: "Plaatsen", value: "7 zitplaatsen, AWD" },
];

// -- Uitrusting (drie categorieen) ------------------------------------------
export type UitrustingCategorie = {
  titel: string;
  icon: "comfort" | "exterieur" | "veiligheid";
  items: string[];
};

export const uitrusting: UitrustingCategorie[] = [
  {
    titel: "Comfort",
    icon: "comfort",
    items: [
      "Executive lederen bekleding",
      "7 zitplaatsen",
      "Glazen schuif-/kanteldak",
      "Climate control, cruise control, parkeersensoren",
    ],
  },
  {
    titel: "Exterieur",
    icon: "exterieur",
    items: [
      "Grijsmetallic lak",
      "Lichtmetalen velgen, dakrails, treeplanken",
      "Getint privacyglas achter",
    ],
  },
  {
    titel: "Veiligheid",
    icon: "veiligheid",
    items: [
      "AWD (vierwielaandrijving)",
      "DSTC stabiliteitscontrole en ABS",
      "Zij- en gordijnairbags, WHIPS, ISOFIX",
    ],
  },
];

// -- Fiscaal blok ------------------------------------------------------------
export const fiscaal = {
  kop: "Fiscaal voordeel: aantrekkelijke Youngtimer",
  punten: [
    "35% bijtelling over de dagwaarde, niet over de nieuwprijs",
    "Daardoor een lage maandlast voor zakelijk rijden",
    "Zakelijke kosten zijn aftrekbaar",
  ],
  afsluiter:
    "Voor de ondernemer een interessante manier om voordelig in een V8 te rijden. Check je eigen situatie even met je boekhouder.",
};

// -- Intro -------------------------------------------------------------------
export const intro =
  "Te koop: een ruime en comfortabele Volvo XC90 met de 4.4 V8 (samen met Yamaha ontwikkeld). De auto is van mijn vader. Hij is 84 en gaat er niet meer in rijden, vandaar de verkoop. De auto is altijd goed verzorgd. Eerlijk en transparant: de auto is net gekeurd en APK tot april 2027. Een volgende onderhoudsbeurt is wel nodig, dat is in de vraagprijs meegenomen.";

// -- Contact -----------------------------------------------------------------
export const contactTekst = {
  kop: "Interesse?",
  body: "Bezichtiging en een proefrit zijn welkom, zodat je de auto rustig kunt bekijken. Op serieuze biedingen reageer ik altijd. Vragen of een afspraak maken? Stuur gerust een bericht.",
};

// -- Foto's ------------------------------------------------------------------
export const fotoNote = "Hogere resolutie foto's volgen nog.";
