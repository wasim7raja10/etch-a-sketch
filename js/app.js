const container = document.querySelector('.container');
const clrBtn = document.querySelector('.clear');
const numberSide = 16

function makeGrid(numberSide) {
  for (let i = 0; i < numberSide; i++) {
    for (let j = 0; j < numberSide; j++) {
      const square = document.createElement("div");
      square.setAttribute(
        "style", `width: ${32/numberSide}rem; height: ${32/numberSide}rem; display: inline-block`
      );
      container.appendChild(square);
    }
  }
}

function markSquare() {
  container.childNodes.forEach((x) => {
    const mark = () => x.style.background = "black";
    x.addEventListener('mouseenter', mark);
  })
}

function removeMark() {
  container.childNodes.forEach((x) => {
    x.style.background = null;
  })
}

makeGrid(numberSide);
markSquare();

function clear() {
  removeMark();
  const numberSide = parseInt(
    prompt("enter number of square in each side")
  );
  container.innerHTML = null;
  makeGrid(numberSide);
  markSquare();
}

clrBtn.addEventListener('click', clear);