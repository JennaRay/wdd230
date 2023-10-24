const gridBtn = document.getElementById('grid');
const colBtn = document.getElementById('column');
const section = document.getElementById('cards');

gridBtn.addEventListener("click", function() {
    gridBtn.style.background = "black";
    gridBtn.style.color = "white";
    colBtn.style.background = "white";
    colBtn.style.color = "black";
    section.classList.add("grid");
    section.classList.remove("column");
});

colBtn.addEventListener("click", function() {
    gridBtn.style.background = "white";
    gridBtn.style.color = "black";
    colBtn.style.background = "black";
    colBtn.style.color = "white";
    section.classList.add("column");
    section.classList.remove("grid");
});