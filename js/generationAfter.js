import { randomExamplePlus } from "./func.js";
import { createGenerateAnswer } from "./answers.js";

export default function generationAfterAnswer() {
    const window = document.querySelector(".window");
    if (document.location.pathname === "/Math-for-kids/add.html") {
        window.innerHTML = randomExamplePlus("+");
        let generateAnswer = createGenerateAnswer();
        generateAnswer();
    } else if (document.location.pathname === "/Math-for-kids/divide.html") {
        window.innerHTML = randomExamplePlus("/");
        let generateAnswer = createGenerateAnswer();
        generateAnswer();
    } else if (document.location.pathname === "/Math-for-kids/multiply.html") {
        window.innerHTML = randomExamplePlus("X");
        let generateAnswer = createGenerateAnswer();
        generateAnswer();
    } else if (document.location.pathname === "/Math-for-kids/minus.html") {
        window.innerHTML = randomExamplePlus("-");
        let generateAnswer = createGenerateAnswer();
        generateAnswer();
    }
}
