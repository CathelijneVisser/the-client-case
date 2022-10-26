const allButtons = document.querySelectorAll(".js-expand");

allButtons.forEach((button) => {
	button.addEventListener("click", function () {
		console.log(button);
		button.parentElement.classList.toggle("expand");
	});
});

const headerTrigger = document.querySelector(".header__trigger");
const headerList = document.querySelector(".header__list");

if (headerTrigger) {
	headerTrigger.addEventListener("click", () => {
		headerTrigger.classList.toggle("is-open");
		headerList.classList.toggle("is-open");
	});
}
