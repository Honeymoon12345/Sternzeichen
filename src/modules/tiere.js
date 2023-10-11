import { Sternzeichen } from "./classes";

import {
  beschreibungFische,
  beschreibungJungfrau,
  beschreibungKrebs,
  beschreibungLoewe,
  beschreibungSchuetze,
  beschreibungSkorpion,
  beschreibungSteinbock,
  beschreibungStier,
  beschreibungWaage,
  beschreibungWassermann,
  beschreibungWidder,
  beschreibungZwillinge,
} from "./beschreibungSternzeichen";
import { loveWidder } from "./loveCombinations";
import { loveStier } from "./loveCombinations";

let sternzeichen = [];

export const widder = new Sternzeichen(
  "Widder",
  "Feuer",
  beschreibungWidder.descriptions,
  loveWidder,
  "Rubin",
  "Rot"
);

export const stier = new Sternzeichen(
  "Stier",
  "Erde",
  beschreibungStier.descriptions,
  loveStier,
  "Smaragd",
  "Braun, Grün"
);

export const zwillinge = new Sternzeichen(
  "Zwillinge",
  "Luft",
  beschreibungZwillinge.descriptions,
  "Liebe...",
  "Turmalin",
  "Gelb"
);

export const krebs = new Sternzeichen(
  "Krebs",
  "Wasser",
  beschreibungKrebs.descriptions,
  "Liebe...",
  "Mondstein",
  "Silber"
);

export const loewe = new Sternzeichen(
  "Löwe",
  "Feuer",
  beschreibungLoewe.descriptions,
  "Liebe...",
  "Tigerauge",
  "Gold"
);

export const jungfrau = new Sternzeichen(
  "Jungfrau",
  "Erde",
  beschreibungJungfrau.descriptions,
  "Liebe...",
  "Pridot",
  "Grau, Braun, Beige"
);

export const waage = new Sternzeichen(
  "Waage",
  "Luft",
  beschreibungWaage.descriptions,
  "Liebe...",
  "Saphier",
  "Hellblau, Rosa"
);

export const skorpion = new Sternzeichen(
  "Skorpion",
  "Wasser",
  beschreibungSkorpion.descriptions,
  "Liebe...",
  "Topas",
  "Schwarz, Rot, Violett"
);

export const schuetze = new Sternzeichen(
  "Schütze",
  "Feuer",
  beschreibungSchuetze.descriptions,
  "Liebe...",
  "Türkis",
  "Königsblau, Kardinalrot"
);

export const steinbock = new Sternzeichen(
  "Steinbock",
  "Erde",
  beschreibungSteinbock.descriptions,
  "Liebe...",
  "Gagat",
  "Schwarz, Grau, Dunkelgrün"
);

export const wassermann = new Sternzeichen(
  "Wassermann",
  "Luft",
  beschreibungWassermann.descriptions,
  "Liebe...",
  "Aquamarin",
  "Schwarz, Eisblau, Dunkelgrün"
);

export const fische = new Sternzeichen(
  "Fische",
  "Wasser",
  beschreibungFische.descriptions,
  "Liebe...",
  "Amethyst",
  "Lila, Blau, Grün"
);

sternzeichen.push(
  widder,
  stier,
  zwillinge,
  krebs,
  loewe,
  jungfrau,
  waage,
  skorpion,
  schuetze,
  steinbock,
  wassermann,
  fische
);
export { sternzeichen };
