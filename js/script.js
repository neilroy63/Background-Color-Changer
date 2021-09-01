// const to target the btn element on the DOM
const btn = document.querySelector("button");

btn.onclick(changeColor());

function changeColor() {
  document.querySelector("body").style.backgroundColor = "blue";
}

// changeColor();
