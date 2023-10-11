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
import {
  loveFische,
  loveJungfrau,
  loveKrebs,
  loveLoewe,
  loveSchuetze,
  loveSkorpion,
  loveSteinbock,
  loveWaage,
  loveWassermann,
  loveWidder,
  loveZwillinge,
} from "./loveCombinations";
import { loveStier } from "./loveCombinations";
import Widder from "../img/widder.png";
import Stier from "../img/stier.png";
import Zwillinge from "../img/zwillinge.png";
import Krebs from "../img/krebs.png";
import Loewe from "../img/loewe.png";
import Jungfrau from "../img/jungfrau.png";
import Waage from "../img/waage.png";
import Skorpion from "../img/skorpion.png";
import Schuetze from "../img/schuetze.png";
import Steinbock from "../img/steinbock.png";
import Wassermann from "../img/wassermann.png";
import Fische from "../img/fische.png";

let sternzeichen = [];

export const widder = new Sternzeichen(
  "Widder",
  "Feuer",
  beschreibungWidder.descriptions,
  loveWidder,
  "Rubin",
  "Rot"
);
widder.symbol.src = Widder;

export const stier = new Sternzeichen(
  "Stier",
  "Erde",
  beschreibungStier.descriptions,
  loveStier,
  "Smaragd",
  "Braun, Grün"
);
stier.symbol.src = Stier;

export const zwillinge = new Sternzeichen(
  "Zwillinge",
  "Luft",
  beschreibungZwillinge.descriptions,
  loveZwillinge,
  "Turmalin",
  "Gelb"
);
zwillinge.symbol.src = Zwillinge;

export const krebs = new Sternzeichen(
  "Krebs",
  "Wasser",
  beschreibungKrebs.descriptions,
  loveKrebs,
  "Mondstein",
  "Silber"
);
krebs.symbol.src = Krebs;

export const loewe = new Sternzeichen(
  "Löwe",
  "Feuer",
  beschreibungLoewe.descriptions,
  loveLoewe,
  "Tigerauge",
  "Gold"
);
loewe.symbol.src = Loewe;

export const jungfrau = new Sternzeichen(
  "Jungfrau",
  "Erde",
  beschreibungJungfrau.descriptions,
  loveJungfrau,
  "Pridot",
  "Grau, Braun, Beige"
);
jungfrau.symbol.src = Jungfrau;

export const waage = new Sternzeichen(
  "Waage",
  "Luft",
  beschreibungWaage.descriptions,
  loveWaage,
  "Saphier",
  "Hellblau, Rosa"
);
waage.symbol.src = Waage;

export const skorpion = new Sternzeichen(
  "Skorpion",
  "Wasser",
  beschreibungSkorpion.descriptions,
  loveSkorpion,
  "Topas",
  "Schwarz, Rot, Violett"
);
skorpion.symbol.src = Skorpion;

export const schuetze = new Sternzeichen(
  "Schütze",
  "Feuer",
  beschreibungSchuetze.descriptions,
  loveSchuetze,
  "Türkis",
  "Königsblau, Kardinalrot"
);
schuetze.symbol.src = Schuetze;

export const steinbock = new Sternzeichen(
  "Steinbock",
  "Erde",
  beschreibungSteinbock.descriptions,
  loveSteinbock,
  "Gagat",
  "Schwarz, Grau, Dunkelgrün"
);
steinbock.symbol.src = Steinbock;

export const wassermann = new Sternzeichen(
  "Wassermann",
  "Luft",
  beschreibungWassermann.descriptions,
  loveWassermann,
  "Aquamarin",
  "Schwarz, Eisblau, Dunkelgrün"
);
wassermann.symbol.src = Wassermann;

export const fische = new Sternzeichen(
  "Fische",
  "Wasser",
  beschreibungFische.descriptions,
  loveFische,
  "Amethyst",
  "Lila, Blau, Grün"
);
fische.symbol.src = Fische;

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
