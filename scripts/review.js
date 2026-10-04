document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = Number(window.localStorage.getItem("reviewCounter-ls")) || 0;
    reviewCount++;
    window.localStorage.setItem("reviewCounter-ls", reviewCount);

    const counterDisplay = document.getElementById("reviewCounter");
    if (counterDisplay) {
        counterDisplay.textContent = reviewCount;
    }
});