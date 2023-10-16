import { sternzeichen } from "./tiere";
import { anfang } from "./geschichte";
import { loveWidder } from "./loveCombinations";
import { Sternzeichen } from "./classes";
//Buttons
import WidderB from "../img/widderB.png";
import StierB from "../img/stierB.png";
import ZwillingeB from "../img/zwillingeB.png";
import KrebsB from "../img/krebsB.png";
import LoeweB from "../img/loeweB.png";
import JungfrauB from "../img/jungfrauB.png";
import WaageB from "../img/waageB.png";
import SkorpionB from "../img/skorpionB.png";
import SchuetzeB from "../img/schuetzeB.png";
import SteinbockB from "../img/steinbockB.png";
import WassermannB from "../img/wassermannB.png";
import FischeB from "../img/fischeB.png";
import StartseiteB from "../img/returnStart.png";

export function createHauptseite() {
  const container = document.getElementById("container");
  container.innerHTML = "";
  const header = document.createElement("header");
  container.appendChild(header);

  //Überschrift
  const element = document.createElement("h1");
  element.textContent = "Sternzeichen";
  header.appendChild(element);

  //Buttons zu den Infos
  const buttons = document.createElement("div");
  buttons.id = "Buttons";
  header.appendChild(buttons);

  //Widder
  const btnWidder = document.createElement("button");
  btnWidder.id = "1";
  //Image
  const imgWidderB = new Image();
  imgWidderB.src = WidderB;
  btnWidder.innerHTML = "<img src='" + WidderB + "' />";
  //klick Event
  btnWidder.addEventListener("click", () => {
    location.href = "#Widder";
  });

  //Stier
  const btnStier = document.createElement("button");
  btnStier.textContent = "Stier";
  btnStier.id = "2";
  //Image
  const imgStierB = new Image();
  imgStierB.src = StierB;
  btnStier.innerHTML = "<img src='" + StierB + "' />";
  //klick Event
  btnStier.addEventListener("click", () => {
    href = "#Stier";
  });

  //Zwillinge
  const btnZwillinge = document.createElement("button");
  btnZwillinge.textContent = "Zwilling";
  btnZwillinge.id = "3";
  //Image
  const imgZwillingeB = new Image();
  imgZwillingeB.src = ZwillingeB;
  btnZwillinge.innerHTML = "<img src='" + ZwillingeB + "' />";
  //klick Event
  btnZwillinge.addEventListener("click", () => {
    location.href = "#Zwillinge";
  });

  //Krebs
  const btnKrebs = document.createElement("button");
  btnKrebs.textContent = "Krebs";
  btnKrebs.id = "4";
  //Image
  const imgKrebsB = new Image();
  imgKrebsB.src = KrebsB;
  btnKrebs.innerHTML = "<img src='" + KrebsB + "' />";
  //klick Event
  btnKrebs.addEventListener("click", () => {
    location.href = "#Krebs";
  });

  //Löwe
  const btnLoewe = document.createElement("button");
  btnLoewe.textContent = "Löwe";
  btnLoewe.id = "5";
  //Image
  const imgLoeweB = new Image();
  imgLoeweB.src = LoeweB;
  btnLoewe.innerHTML = "<img src='" + LoeweB + "' />";
  //klick Event
  btnLoewe.addEventListener("click", () => {
    location.href = "#Löwe";
  });

  //Jungfrau
  const btnJungfrau = document.createElement("button");
  btnJungfrau.textContent = "Jungfrau";
  btnJungfrau.id = "6";
  //Image
  const imgJungfrauB = new Image();
  imgJungfrauB.src = JungfrauB;
  btnJungfrau.innerHTML = "<img src='" + JungfrauB + "' />";
  //klick Event
  btnJungfrau.addEventListener("click", () => {
    location.href = "#Jungfrau";
  });

  //Waage
  const btnWaage = document.createElement("button");
  btnWaage.textContent = "Waage";
  btnWaage.id = "7";
  //Image
  const imgWaageB = new Image();
  imgWaageB.src = WaageB;
  btnWaage.innerHTML = "<img src='" + WaageB + "' />";
  //klick Event
  btnWaage.addEventListener("click", () => {
    location.href = "#Waage";
  });

  //Skorpion
  const btnSkorpion = document.createElement("button");
  btnSkorpion.textContent = "Skorpion";
  btnSkorpion.id = "8";
  //Image
  const imgSkorpionB = new Image();
  imgSkorpionB.src = SkorpionB;
  btnSkorpion.innerHTML = "<img src='" + SkorpionB + "' />";
  //klick Event
  btnSkorpion.addEventListener("click", () => {
    location.href = "#Skorpion";
  });

  //Schütze
  const btnSchuetze = document.createElement("button");
  btnSchuetze.textContent = "Schütze";
  btnSchuetze.id = "9";
  //Image
  const imgSchuetzeB = new Image();
  imgSchuetzeB.src = SchuetzeB;
  btnSchuetze.innerHTML = "<img src='" + SchuetzeB + "' />";
  //klick Event
  btnSchuetze.addEventListener("click", () => {
    location.href = "#Schütze";
  });

  //Steinbock
  const btnSteinbock = document.createElement("button");
  btnSteinbock.textContent = "Steinbock";
  btnSteinbock.id = "10";
  //Image
  const imgSteinbockB = new Image();
  imgSteinbockB.src = SteinbockB;
  btnSteinbock.innerHTML = "<img src='" + SteinbockB + "' />";
  //klick Event
  btnSteinbock.addEventListener("click", () => {
    location.href = "#Steinbock";
  });

  //Wassermann
  const btnWassermann = document.createElement("button");
  btnWassermann.textContent = "Wassermann";
  btnWassermann.id = "11";
  //Image
  const imgWassermannB = new Image();
  imgWassermannB.src = WassermannB;
  btnWassermann.innerHTML = "<img src='" + WassermannB + "' />";
  //klick Event
  btnWassermann.addEventListener("click", () => {
    location.href = "#Wassermann";
  });

  //Fische
  const btnFische = document.createElement("button");
  btnFische.id = "12";
  //Image
  const imgFischeB = new Image();
  imgFischeB.src = FischeB;
  btnFische.innerHTML = "<img src='" + FischeB + "' />";
  //klick Event
  btnFische.addEventListener("click", () => {
    location.href = "#Fische";
  });

  //zur Startseite
  const btnBack = document.createElement("button");
  btnBack.id = "13";
  //Image
  const imgStartseiteB = new Image();
  imgStartseiteB.src = StartseiteB;
  btnBack.innerHTML = "<img src='" + StartseiteB + "' />";
  //klick Event
  btnBack.addEventListener("click", () => {
    location.href = "#Geschichte";
  });

  buttons.appendChild(btnBack);
  buttons.appendChild(btnWidder);
  buttons.appendChild(btnStier);
  buttons.appendChild(btnZwillinge);
  buttons.appendChild(btnKrebs);
  buttons.appendChild(btnLoewe);
  buttons.appendChild(btnJungfrau);
  buttons.appendChild(btnWaage);
  buttons.appendChild(btnSkorpion);
  buttons.appendChild(btnSchuetze);
  buttons.appendChild(btnSteinbock);
  buttons.appendChild(btnWassermann);
  buttons.appendChild(btnFische);
}

const main = document.createElement("main");
export function createGeschichte() {
  container.appendChild(main);
  const geschichte = document.createElement("div");
  geschichte.classList.add("geschichte");
  main.appendChild(geschichte);
  const heading = document.createElement("h1");
  heading.textContent = "Geschichte";
  heading.id = "Geschichte";
  geschichte.appendChild(heading);
  const text = document.createElement("p");
  text.innerHTML = anfang.history;
  geschichte.appendChild(text);
  text.id = "Widder";
}

export function createSternzeichenInfo() {
  const tiere = document.createElement("div");
  tiere.classList.add("grid-container");
  main.appendChild(tiere);
  sternzeichen.forEach((zeichen) => {
    //Symbol
    tiere.appendChild(zeichen.symbol);

    //Überschrift
    const header1 = document.createElement("h1");
    header1.textContent = zeichen.name;
    header1.classList = "zuZeichen";
    tiere.appendChild(header1);
    header1.id = zeichen.name;

    //Element
    const header2 = document.createElement("h1");
    header2.textContent = zeichen.element;
    tiere.appendChild(header2);

    //GIF
    tiere.appendChild(zeichen.gif);
    zeichen.gif.id = "gif";

    //Gem Überschrift
    const header5 = document.createElement("h1");
    header5.textContent = "Stein";
    header5.style = "grid-column: 2";
    tiere.appendChild(header5);

    //Color Überschrift
    const header6 = document.createElement("h1");
    header6.textContent = "Farbe";
    tiere.appendChild(header6);

    //Gem
    const textStein = document.createElement("p");
    textStein.textContent = zeichen.gem;
    textStein.style = "grid-column: 2";
    tiere.appendChild(textStein);

    //Color
    const textFarbe = document.createElement("p");
    textFarbe.textContent = zeichen.color;
    tiere.appendChild(textFarbe);

    //Beschreibung Überschrift
    const header3 = document.createElement("h1");
    header3.textContent = "Beschreibung";
    header3.style = "grid-column: 1 / span 2";
    tiere.appendChild(header3);

    //Love Überschrift
    const header4 = document.createElement("h1");
    header4.textContent = "Liebe";
    tiere.appendChild(header4);
    header4.style = "grid-column: 3 / span 2";
    console.log(sternzeichen);

    //Beschreibung Text
    const textDescription = document.createElement("p");
    textDescription.innerHTML = zeichen.description;
    textDescription.style = "grid-column: 1 / span 2";
    tiere.appendChild(textDescription);

    //Love Text
    let loveArray = zeichen.love;
    const div = document.createElement("div");
    tiere.appendChild(div);
    let parent = div;
    let count = 0;
    loveArray.forEach((liebe) => {
      count++;
      if (count == 7) {
        const div2 = document.createElement("div");
        tiere.appendChild(div2);
        parent = div2;
      }
      const textLove = document.createElement("p");
      textLove.textContent = liebe.name + " & " + liebe.name2;
      parent.appendChild(textLove);
      const textLove2 = document.createElement("p");
      textLove2.textContent += liebe.hearts;
      parent.appendChild(textLove2);
      const textLove3 = document.createElement("p");
      textLove3.textContent += liebe.strong;
      parent.appendChild(textLove3);
    });
  });
}
createHauptseite();
createGeschichte();
createSternzeichenInfo();
