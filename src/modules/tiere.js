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
  loveStier,
} from "./loveCombinations";

//Symbole
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
//Sternbilder
import WidderS from "../img/widderSternbild.gif";
import StierS from "../img/stierSternbild.gif";
import ZwillingeS from "../img/zwillingeSternbild.gif";
import KrebsS from "../img/krebsSternbild.gif";
import LoeweS from "../img/loeweSternbild.gif";
import JungfrauS from "../img/jungfrauSternbild.gif";
import WaageS from "../img/waageSternbild.gif";
import SkorpionS from "../img/skorpionSternbild.gif";
import SchuetzeS from "../img/schuetzeSternbild.gif";
import SteinbockS from "../img/schuetzeSternbild.gif";
import WassermannS from "../img/wassermannSternbild.gif";
import FischeS from "../img/fischeSternbild.gif";

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
widder.gif.src = WidderS;

export const stier = new Sternzeichen(
  "Stier",
  "Erde",
  beschreibungStier.descriptions,
  loveStier,
  "Smaragd",
  "Braun, Grün"
);
stier.symbol.src = Stier;
stier.gif.src = StierS;

export const zwillinge = new Sternzeichen(
  "Zwillinge",
  "Luft",
  beschreibungZwillinge.descriptions,
  loveZwillinge,
  "Turmalin",
  "Gelb"
);
zwillinge.symbol.src = Zwillinge;
zwillinge.gif.src = ZwillingeS;

export const krebs = new Sternzeichen(
  "Krebs",
  "Wasser",
  beschreibungKrebs.descriptions,
  loveKrebs,
  "Mondstein",
  "Silber"
);
krebs.symbol.src = Krebs;
krebs.gif.src = KrebsS;

export const loewe = new Sternzeichen(
  "Löwe",
  "Feuer",
  beschreibungLoewe.descriptions,
  loveLoewe,
  "Tigerauge",
  "Gold"
);
loewe.symbol.src = Loewe;
loewe.gif.src = LoeweS;

export const jungfrau = new Sternzeichen(
  "Jungfrau",
  "Erde",
  beschreibungJungfrau.descriptions,
  loveJungfrau,
  "Pridot",
  "Grau, Braun, Beige"
);
jungfrau.symbol.src = Jungfrau;
jungfrau.gif.src = JungfrauS;

export const waage = new Sternzeichen(
  "Waage",
  "Luft",
  beschreibungWaage.descriptions,
  loveWaage,
  "Saphier",
  "Hellblau, Rosa"
);
waage.symbol.src = Waage;
waage.gif.src = WaageS;

export const skorpion = new Sternzeichen(
  "Skorpion",
  "Wasser",
  beschreibungSkorpion.descriptions,
  loveSkorpion,
  "Topas",
  "Schwarz, Rot, Violett"
);
skorpion.symbol.src = Skorpion;
skorpion.gif.src = SkorpionS;

export const schuetze = new Sternzeichen(
  "Schütze",
  "Feuer",
  beschreibungSchuetze.descriptions,
  loveSchuetze,
  "Türkis",
  "Königsblau, Kardinalrot"
);
schuetze.symbol.src = Schuetze;
schuetze.gif.src = SchuetzeS;

export const steinbock = new Sternzeichen(
  "Steinbock",
  "Erde",
  beschreibungSteinbock.descriptions,
  loveSteinbock,
  "Gagat",
  "Schwarz, Grau, Dunkelgrün"
);
steinbock.symbol.src = Steinbock;
steinbock.gif.src = SteinbockS;

export const wassermann = new Sternzeichen(
  "Wassermann",
  "Luft",
  beschreibungWassermann.descriptions,
  loveWassermann,
  "Aquamarin",
  "Schwarz, Eisblau, Dunkelgrün"
);
wassermann.symbol.src = Wassermann;
wassermann.gif.src = WassermannS;

export const fische = new Sternzeichen(
  "Fische",
  "Wasser",
  beschreibungFische.descriptions,
  loveFische,
  "Amethyst",
  "Lila, Blau, Grün"
);
fische.symbol.src = Fische;
fische.gif.src = FischeS;

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
