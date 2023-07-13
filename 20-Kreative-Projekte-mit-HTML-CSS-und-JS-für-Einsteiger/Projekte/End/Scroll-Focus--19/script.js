const body = document.querySelector("body");

let pastPos = 0;
let blur = 20;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > pastPos)
    body.style.backdropFilter = `blur(${(blur -= 0.17)}px)`;
  else body.style.backdropFilter = `blur(${(blur += 0.17)}px)`;

  pastPos = window.pageYOffset;
});
