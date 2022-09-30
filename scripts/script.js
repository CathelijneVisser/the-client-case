const allButtons = document.querySelectorAll(".js-expand");

allButtons.forEach((button) => {
  button.addEventListener("click", function () {
    console.log(button);
    button.parentElement.classList.toggle("expand");
  });
});
