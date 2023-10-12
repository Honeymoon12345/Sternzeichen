import { sternzeichen } from "./tiere";
import { geschichte } from "./geschichte";
import { loveWidder } from "./loveCombinations";
import { Sternzeichen } from "./classes";
import WidderB from "../img/widderB.png";
import { container } from "webpack";

export function createHauptseite() {
  const container = document.getElementById("container");
  container.innerHTML = "";
  const header = document.createElement("header");
  container.appendChild(header);
  const element = document.createElement("h1");
  element.textContent = "Sternzeichen";
  header.appendChild(element);
  //Buttons zu den Infos
  const btnWidder = document.createElement("button");
  //btnWidder.textContent = "Widder";
  btnWidder.id = "1";
  const imgWidderB = new Image();
  imgWidderB.src = WidderB;
  btnWidder.innerHTML = "<img src='" + WidderB + "' />";
  btnWidder.addEventListener("click", () => {
    console.log("Widder");
  });
  const btnStier = document.createElement("button");
  btnStier.textContent = "Stier";
  btnStier.id = "2";
  btnStier.addEventListener("click", () => {
    console.log("Stier");
  });
  const btnZwilling = document.createElement("button");
  btnZwilling.textContent = "Zwilling";
  btnZwilling.id = "3";
  btnZwilling.addEventListener("click", () => {
    console.log("Zwilling");
  });
  const btnKrebs = document.createElement("button");
  btnKrebs.textContent = "Krebs";
  btnKrebs.id = "4";
  btnKrebs.addEventListener("click", () => {
    console.log("Krebs");
  });
  const btnLoewe = document.createElement("button");
  btnLoewe.textContent = "Löwe";
  btnLoewe.id = "5";
  btnLoewe.addEventListener("click", () => {
    console.log("Löwe");
  });
  const btnJungfrau = document.createElement("button");
  btnJungfrau.textContent = "Jungfrau";
  btnJungfrau.id = "6";
  btnJungfrau.addEventListener("click", () => {
    console.log("Jungfrau");
  });
  const btnWaage = document.createElement("button");
  btnWaage.textContent = "Waage";
  btnWaage.id = "7";
  btnWaage.addEventListener("click", () => {
    console.log("Waage");
  });
  const btnSkorpion = document.createElement("button");
  btnSkorpion.textContent = "Skorpion";
  btnSkorpion.id = "8";
  btnSkorpion.addEventListener("click", () => {
    console.log("Skorpion");
  });
  const btnSchuetze = document.createElement("button");
  btnSchuetze.textContent = "Schütze";
  btnSchuetze.id = "9";
  btnSchuetze.addEventListener("click", () => {
    console.log("Schütze");
  });
  const btnSteinbock = document.createElement("button");
  btnSteinbock.textContent = "Steinbock";
  btnSteinbock.id = "10";
  btnSteinbock.addEventListener("click", () => {
    console.log("Steinbock");
  });
  const btnWassermann = document.createElement("button");
  btnWassermann.textContent = "Wassermann";
  btnWassermann.id = "11";
  btnWassermann.addEventListener("click", () => {
    console.log("Wassermann");
  });
  const btnFische = document.createElement("button");
  btnFische.textContent = "Fische";
  btnFische.id = "12";
  btnFische.addEventListener("click", () => {
    console.log("Fische");
  });

  const btnBack = document.createElement("button");
  btnBack.textContent = "Zurück";
  btnBack.addEventListener("click", () => {
    //createHtml("", "Zwillinge","♥️♥️♥️♥️", "");
    console.log("Startseite");
  });

  header.appendChild(btnBack);
  header.appendChild(btnWidder);
  header.appendChild(btnStier);
  header.appendChild(btnZwilling);
  header.appendChild(btnKrebs);
  header.appendChild(btnLoewe);
  header.appendChild(btnJungfrau);
  header.appendChild(btnWaage);
  header.appendChild(btnSkorpion);
  header.appendChild(btnSchuetze);
  header.appendChild(btnSteinbock);
  header.appendChild(btnWassermann);
  header.appendChild(btnFische);
}

// function createGeschichte() {
//   const main = document.createElement("main");
//   //main.classList.add("main");
//   container.appendChild(main);
//   const geschichte = document.createElement("div");
//   geschichte.classList.add("geschichte");
//   main.appendChild(geschichte);
//   const heading = document.createElement("h1");
//   heading.textContent = "Geschichte";
//   geschichte.appendChild(heading);
//   // const div = document.createElement("div");
//   // div.id = "geschichte";
//   // geschichte.appendChild(div);
//   const text = document.createElement("p");
//   text.innerHTML = geschichte.history;
//   geschichte.appendChild(text);
// }

function createSternzeichenInfo() {
  const bottom = document.createElement("footer");
  container.appendChild(bottom);
  sternzeichen.forEach((zeichen) => {
    bottom.appendChild(zeichen.symbol);
    //Überschrift
    const header1 = document.createElement("h1");
    header1.textContent = zeichen.name;
    bottom.appendChild(header1);
    console.log(header1);
    //Element
    const header2 = document.createElement("h2");
    header2.textContent = zeichen.element;
    bottom.appendChild(header2);
    //Beschreibung
    const header3 = document.createElement("h3");
    header3.textContent = "Beschreibung";
    bottom.appendChild(header3);
    const textDescription = document.createElement("p");
    textDescription.innerHTML = zeichen.description;
    bottom.appendChild(textDescription);
    //Love
    const header4 = document.createElement("h3");
    header4.textContent = "Liebe";
    bottom.appendChild(header4);
    console.log(sternzeichen);
    let loveArray = zeichen.love;
    loveArray.forEach((liebe) => {
      const textLove = document.createElement("p");
      textLove.textContent = liebe.name + ": ";
      bottom.appendChild(textLove);
      const textLove2 = document.createElement("p");
      textLove2.textContent += liebe.hearts;
      bottom.appendChild(textLove2);
      const textLove3 = document.createElement("p");
      textLove3.textContent += liebe.strong;
      bottom.appendChild(textLove3);
    });
    //Gem
    const header5 = document.createElement("h3");
    header5.textContent = "Stein";
    bottom.appendChild(header5);
    const textStein = document.createElement("p");
    textStein.textContent = zeichen.gem;
    bottom.appendChild(textStein);
    //Color
    const header6 = document.createElement("h3");
    header6.textContent = "Farbe";
    bottom.appendChild(header6);
    const textFarbe = document.createElement("p");
    textFarbe.textContent = zeichen.color;
    bottom.appendChild(textFarbe);
  });
}
createHauptseite();
// createGeschichte();
// createSternzeichenInfo();
