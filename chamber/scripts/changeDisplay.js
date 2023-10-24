const gridBtn = document.getElementById('grid');
const colBtn = document.getElementById('column');
const section = document.getElementById('section');

gridBtn.addEventListener("click", function() {
    gridBtn.style.background = "black";
    gridBtn.style.color = "white";
    colBtn.style.background = "white";
    colBtn.style.color = "black";
    section.style.display = "grid";
    section.style.gridTemplateColumns = "1fr 1fr 1fr";
})

colBtn.addEventListener("click", function() {
    gridBtn.style.background = "white";
    gridBtn.style.color = "black";
    colBtn.style.background = "black";
    colBtn.style.color = "white";
    section.style.display = "flex";
    section.style.flexDirection = "column";
})