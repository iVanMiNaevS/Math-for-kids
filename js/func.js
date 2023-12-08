import { answer } from "./answers.js";
import generationAfterAnswer from "./generationAfter.js";

export function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

export function randomExamplePlus(char) {
    if (char === "X") {
        return `<span class="num1">${randomNum(1, 9)}</span>
    <span class="char">${char}</span>
    <span class="num2">${randomNum(1, 9)}</span>
    <span class="equally">=</span>
    <span class="question">?</span>`;
    } else {
        return `<span class="num1">${randomNum(1, 29)}</span>
        <span class="char">${char}</span>
        <span class="num2">${randomNum(1, 15)}</span>
        <span class="equally">=</span>
        <span class="question">?</span>`;
    }
}

export function check(e) {
    const num1Text = document.querySelector(".num1");
    const num2Text = document.querySelector(".num2");
    const char = document.querySelector(".char");
    if (e.target.closest(".block")) {
        if (
            Number(e.target.innerHTML) ===
            answer(num1Text.innerHTML, num2Text.innerHTML, char.innerHTML)
        ) {
            generationAfterAnswer();
        } else {
            e.target.classList.add("mistake");
            console.log(e.target.innerHTML);
            setTimeout(() => {
                e.target.classList.remove("mistake");
            }, 300);
            return;
        }
    }
}
