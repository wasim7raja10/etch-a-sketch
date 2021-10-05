const container = document.querySelector('.container');
const clrBtn = document.querySelector('.clear');

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.setAttribute(
      "style", "width: 2rem; height: 2rem; display: inline-block"
    );
    container.appendChild(square);
  }
}

container.childNodes.forEach((x) => {
  const mark = () => x.style.background = "black";
  x.addEventListener('mouseenter', mark);
})

function clear() {
  container.childNodes.forEach((x) => {
    x.style.background = null;
  })
  const numberSide = parseInt(prompt("enter number of square in each side"));
}

clrBtn.addEventListener('click', clear);