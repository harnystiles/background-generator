var css = document.querySelector(".in");
var csn = document.querySelector(".inn");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	csn.textContent = body.style.background + 'current';
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);