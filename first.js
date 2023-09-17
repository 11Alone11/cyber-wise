// document.querySelector(".checkbox").addEventListener("input", function (event) {
//   console.log(this.checked);
// });

function setText(btn) {
  btn.textContent = btn.textContent === "ON" ? "OFF" : "ON";
}

const buttons = document.querySelectorAll(".scroll-section__button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const itemToRemove = this.closest(".scroll-section__item");
    itemToRemove.classList.add("scroll-section__item--remove");

    itemToRemove.addEventListener("transitionend", function () {
      itemToRemove.remove();
    });
  });
});
