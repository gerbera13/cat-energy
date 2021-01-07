const first = document.querySelector(".first");
const second = document.querySelector(".second");
const slider = document.querySelector("#slider");

slider.addEventListener("input", evt => {
  const value = evt.target.valueAsNumber;
  first.style.width = `${value}%`;
  second.style.width = `${100 - value}%`;
});
