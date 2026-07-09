let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let userGuess = Number(document.getElementById("guessInput").value);
    let result = document.getElementById("result");

    if (userGuess === randomNumber) {
        result.innerHTML = "🎉 Bingo! Correct Answer!";
    }
    else if (userGuess < randomNumber) {
        result.innerHTML = "⬆️ Enter Higher Number";
    }
    else {
        result.innerHTML = "⬇️ Enter Lower Number";
    }
}