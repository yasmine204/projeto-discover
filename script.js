const html = document.documentElement;
const switchButton = document.querySelector(".switch__button");
const imgProfile = document.querySelector(".profile img");

function toggleMode() {
	html.classList.toggle("light");

	if (html.classList.contains("light")) {
		imgProfile.src = "./assets/avatar-light.jpg";
		// imgProfile.setAttribute("src", "./assets/avatar-light.png");
	} else {
		imgProfile.src = "./assets/avatar.jpg";
	}
}

switchButton.addEventListener("click", toggleMode);
