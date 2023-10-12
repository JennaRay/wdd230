const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
const todaysDate = new Date();
const msToDays = 84600000;
if (numVisits == 0) {
    visitsDisplay.textContent = 'Welcome! Let us know if you have any questions.';
}
else {
    let lastVisit = Number(window.localStorage.getItem("lastVisit-ls"));
    let daysBetween = (Date.now() - lastVisit) / msToDays;

    if (daysBetween > 1){
        visitsDisplay.textContent ="Back so soon! Awesome!";
    } else if (daysBetween == 1){
        visitsDisplay.textContent = "You last visited " + daysBetween.valueOf + " day ago";
    }
    else {visitsDisplay.textContent = "You last visited " + daysBetween.valueOf + " days ago";}
}   
numVisits ++;
localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("lastVisit-ls", Date.now());
