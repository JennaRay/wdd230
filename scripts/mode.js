const modeButton = document.getElementById('mode');
const main = document.querySelector('body');
const card1 = document.getElementById('activities');
const card2 = document.getElementById('info');

modeButton.addEventListener("click", function() {
    if (modeButton.textContent.includes("dark")) {
        modeButton.textContent = "light";
        modeButton.style.background = "#0d1a18";
        card1.style.background = "#0d1a18";
        card2.style.background = "#0d1a18";
        modeButton.style.color = "#b7e0e0";
        card1.style.color = "#b7e0e0";
        card2.style.color = "#b7e0e0";
        modeButton.style.border = "1px solid #b7e0e0";
        card1.style.border = "1px solid #c2e781";
        card2.style.border = "1px solid #c2e781"
        card1.style.borderTop = "10px solid #b7e0e0";
        card2.style.borderTop = "10px solid #b7e0e0";
        main.style.background = "#0d1a18";
        main.style.color = "#b7e0e0";
    } else {
        modeButton.textContent = "dark";
        modeButton.style.background = "#93caca";
        card1.style.background = "#233635";
        card2.style.background = "#233635";
        modeButton.style.color = "#233635";
        card1.style.color = "#e6f5f4";
        card2.style.color = "#e6f5f4";
        modeButton.style.border = "1px solid #b7e0e0";
        card1.style.borderTop = "10px solid #4e7372";
        card2.style.borderTop = "10px solid #4e7372";
        main.style.background = "#394e4b";
        main.style.color = "#b7e0e0";
    }
});