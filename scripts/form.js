const pwd = document.querySelector("#pwd");
const confirm = document.querySelector("#confirm");
const message = document.querySelector("#formMessage");

confirm.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (pwd.value !== confirm.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		confirm.style.backgroundColor = "#fff0f3";
		confirm.value = "";
		confirm.focus();
	} else {
		message.style.display = "none";
		confirm.style.backgroundColor = "#fff";
		confirm.style.color = "#000";
	}
}

const rangeValue = document.getElementById("rangeValue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangeValue.innerHTML = range.value;
}