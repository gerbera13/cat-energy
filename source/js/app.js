const first = document.querySelector(".first");
const second = document.querySelector(".second");
const slider = document.querySelector("#slider");

if (slider) {
  slider.addEventListener("input", evt => {
    const value = evt.target.valueAsNumber;
    first.style.width = `${100 - value}%`;
    second.style.width = `${value}%`;
  });
}

const burger = document.querySelector(".js-button");
const menu = document.querySelector(".js-menu");

if (burger) {
  burger.classList.remove("opened");
  menu.classList.remove("opened");
  burger.addEventListener("click", function (evt) {
    burger.classList.toggle("opened");
    menu.classList.toggle("opened");
  })
}
