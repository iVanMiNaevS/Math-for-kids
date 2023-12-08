import { randomNum } from "./func.js";
export function answer(num1, num2, action) {
    const num1Text = document.querySelector(".num1");

    if (action === "+") {
        return Number(num1) + Number(num2);
    } else if (action === "X") {
        return Number(num1) * Number(num2);
    } else if (action === "/") {
        if (Number(num1) % Number(num2) === 0) {
            return Number(num1) / Number(num2);
        } else {
            while (Number(num1) % Number(num2) !== 0) {
                num1 = Number(num1) + 1;
            }
            num1Text.innerHTML = num1;
            return num1 / Number(num2);
        }
    } else if (action === "-") {
        if (Number(num1) - Number(num2) <= 0) {
            while (Number(num1) - Number(num2) <= 0) {
                num1 = Number(num1) + randomNum(3, 10);
            }
            num1Text.innerHTML = num1;
            return num1 - Number(num2);
        } else return Number(num1) - Number(num2);
    }
}

export function anyAnswer(answer) {
    let i = randomNum(answer - 5, answer + 5);
    if ((i = answer)) {
        return i + 2;
    } else {
        return i;
    }
}

export function createGenerateAnswer() {
    const num1Text = document.querySelector(".num1");
    const num2Text = document.querySelector(".num2");
    const char = document.querySelector(".char");
    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    let i = randomNum(1, 3);
    return function generateAnswer() {
        if (i === 1) {
            one.innerHTML = answer(
                num1Text.innerHTML,
                num2Text.innerHTML,
                char.innerHTML
            );
            two.innerHTML = anyAnswer(Number(one.innerHTML));
            three.innerHTML = anyAnswer(Number(one.innerHTML));
            if (three.innerHTML === two.innerHTML) {
                three.innerHTML = Number(two.innerHTML) + randomNum(1, 3);
            }
        } else if (i === 2) {
            two.innerHTML = answer(
                num1Text.innerHTML,
                num2Text.innerHTML,
                char.innerHTML
            );
            one.innerHTML = anyAnswer(Number(two.innerHTML));
            three.innerHTML = anyAnswer(Number(two.innerHTML));
            if (three.innerHTML === one.innerHTML) {
                three.innerHTML = Number(one.innerHTML) + randomNum(1, 3);
            }
        } else if (i === 3) {
            three.innerHTML = answer(
                num1Text.innerHTML,
                num2Text.innerHTML,
                char.innerHTML
            );
            two.innerHTML = anyAnswer(Number(three.innerHTML));
            one.innerHTML = anyAnswer(Number(three.innerHTML));
            if (one.innerHTML === two.innerHTML) {
                one.innerHTML = Number(two.innerHTML) + randomNum(1, 3);
            }
        }
    };
}
