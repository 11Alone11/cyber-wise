// document.querySelector(".checkbox").addEventListener("input", function (event) {
//   console.log(this.checked);
// });

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

btn1.addEventListener("click", function (event) {
  this.classList.toggle("blue-color");
  this.querySelector(".switcher__title").classList.toggle(
    "switcher__title_white"
  );
  this.querySelector(".switcher__value").classList.toggle(
    "switcher__value_light-gray"
  );

  setText(this.querySelector(".switcher__value"));
});

btn2.addEventListener("click", function (event) {
  this.classList.toggle("white-color");
  this.querySelector(".switcher__title").classList.toggle(
    "switcher__title_white"
  );
  this.querySelector(".switcher__value").classList.toggle(
    "switcher__value_light-gray"
  );
  setText(this.querySelector(".switcher__value"));
});

function setText(btn) {
  btn.textContent = btn.textContent === "ON" ? "OFF" : "ON";
}
