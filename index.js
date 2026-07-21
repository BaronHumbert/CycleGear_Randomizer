const button = document.getElementById("button");
const entriesInput = document.getElementById("entries");
const prizesInput = document.getElementById("prizes");
const winnerElement = document.getElementById("winner");

function showWinner(text) {
    winnerElement.classList.remove("show");
    requestAnimationFrame(() => {
        winnerElement.textContent = text;
        winnerElement.classList.add("show");
    });
}

function generateWinners() {
    const maxEntries = Number(entriesInput.value);
    const maxPrizes = Number(prizesInput.value);

    if (!maxEntries || !maxPrizes) {
        showWinner("Please enter valid numbers.");
        return;
    }

    if (maxPrizes > maxEntries) {
        showWinner(
            "Number of prizes cannot exceed number of entries."
        );
        return;
    }

    if (maxPrizes > 10) {
        showWinner(
            "Prizes cannot exceed 10."
        );
        return;
    }

    const entries = Array.from(
        { length: maxEntries },
        (_, index) => index + 1
    );

    // Shuffle entries
    for (let i = entries.length - 1; i > 0; i--) {
        const randomIndex =
            Math.floor(Math.random() * (i + 1));
        [
            entries[i],
            entries[randomIndex]
        ] =
        [
            entries[randomIndex],
            entries[i]
        ];

    }

    const winners = entries.slice(0, maxPrizes);

    showWinner(
        winners.join(", ")
    );
}

button.addEventListener(
    "click",
    generateWinners
);
