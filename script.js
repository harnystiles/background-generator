var csn = document.getElementsByTagName("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var start = function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	csn.textContent = body.style.background + 'current';
}

windows.oncload = start

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
