const xPos = document.querySelector(".x-pos");
const yPos = document.querySelector(".y-pos");
const figures = document.querySelector(".figures");
const body = document.querySelector("body");

let element;
let figure;

figures.addEventListener("click", (e) => {
  let clicked = e.target;
  let element = clicked?.dataset.figure;

  if (element) figure = element;
});

document.addEventListener("click", (e) => {
  const clicked = e.target;

  if (figure && !clicked?.dataset.figure)
    createFigure(figure, e.clientX, e.clientY);
});

function createFigure(name, posX, posY) {
  const newFigure = document.createElement("img");
  newFigure.src = `${name}.png`;
  newFigure.className = "newFigure";
  body.prepend(newFigure);

  //   POSITION FIGURE
  console.log(posX, posY);
  newFigure.style.top = `${posY}px`;
  newFigure.style.left = `${posX}px`;

  xPos.textContent = `x: ${posX}`;
  yPos.textContent = `y: ${posY}`;
}
