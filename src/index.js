import _ from "lodash";
import "./style.scss";
import { createHauptseite } from "./modules/hauptseite";
import { createGeschichte } from "./modules/hauptseite";
import { createSternzeichenInfo } from "./modules/hauptseite";

// function createHtml() {
//   const container = document.getElementById("container");
//   container.innerHTML = "";
//   const element = document.createElement("h1");
//   element.textContent = _.join(["Sternzeichen"], "");
//   container.appendChild(element);

//   const button = document.createElement("button");
//   button.textContent = "Weiter";
//   button.addEventListener("click", () => {
//     createHauptseite();
//     createGeschichte();
//     createSternzeichenInfo();
//   });
//   container.appendChild(button);
// }

createHtml();
