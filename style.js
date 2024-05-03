let win = 0;
function flipCoin() {
    const coinHeads = document.getElementById("coinHeads");
    const coinTails = document.getElementById("coinTails");
    const resultElement = document.getElementById("result");
    const winValue = document.getElementById("winValue");
    coinHeads.style.display = "none";
    coinTails.style.display = "none";
    const randomNum = Math.random();
    if (randomNum < 0.5) {
        coinHeads.style.display = "block";
        resultElement.textContent = "Результат: Орёл";
    } else {
        coinTails.style.display = "block";
        resultElement.textContent = "Результат: Решка";
    }
    if (resultElement.textContent === "Результат: Орёл") {
        win++;
        winValue.textContent = win;
    }
}
document.getElementById("flipBtn").addEventListener("click", flipCoin);