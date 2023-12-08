import { randomExamplePlus, check } from "./func.js";
import { createGenerateAnswer } from "./answers.js";
import generationAfterAnswer from "./generationAfter.js";

const window = document.querySelector(".window");
const header = document.querySelector("header");
window.innerHTML = randomExamplePlus("+");

let generateAnswer = createGenerateAnswer();
generateAnswer();

generationAfterAnswer();
document.querySelector(".answers").addEventListener("click", (e) => {
    check(e);
});
console.log(document.location.pathname);
