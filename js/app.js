"strict mode";

const colorPicker = document.querySelector("#color-picker");
const numSquare = document.querySelector("#num-square");
const clrBtn = document.querySelector("#clear");
const container = document.querySelector(".container");

let color = colorPicker.value;
let num = numSquare.value;

container.style.cssText = `grid-template-columns: repeat(${num}, 1fr);`;

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.cssText = `border: 1px solid #c2c2c2;`;
    container.appendChild(square);
  }
}

colorPicker.addEventListener("input", changeColor);
function changeColor() {
  color = colorPicker.value;
  console.log(color);
}

numSquare.addEventListener("input", changeNum);
function changeNum() {
  num = numSquare.value;
  container.innerHTML = "";
  container.style.cssText = `grid-template-columns: repeat(${num}, 1fr);`;

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.cssText = `border: 1px solid #c2c2c2;`;
      container.appendChild(square);
    }
  }
}

container.addEventListener("mouseover", fillColor);
container.addEventListener("touchstart", fillColor);
function fillColor(e) {
  if (e.target.classList.contains("square")) {
    e.target.style.cssText = `background-color: ${color};`;
  }
}

clrBtn.addEventListener("click", changeNum);