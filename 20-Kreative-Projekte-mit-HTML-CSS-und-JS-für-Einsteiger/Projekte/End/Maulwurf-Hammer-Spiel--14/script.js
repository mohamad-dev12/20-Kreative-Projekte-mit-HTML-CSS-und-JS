const Maulwürfe = document.querySelectorAll(".Maulwurf");
const popup = document.querySelector(".popup");
const pooupImg = document.querySelector(".popup-img");
const btn = document.querySelector(".btn");

const effect1 = new Audio("effect--1.mp3");
const effect2 = new Audio("effect--2.wav");
const music = new Audio("bg-music.wav");

let show = true;

function showHammer(e) {
  const ctn = e.target.closest(".loch-ctn");
  const Hammer = ctn?.querySelector(".Hammer");

  if (Hammer) {
    effect1.play();
    setTimeout(() => Hammer.classList.add("visible"), 0);
    setTimeout(() => Hammer.classList.add("rotate"), 0);
    setTimeout(() => Hammer.classList.remove("rotate"), 300);
    setTimeout(() => Hammer.classList.remove("visible"), 700);
    checkHite(ctn);
  }
}

function showMole() {
  if (!show) return;
  const number = Math.floor(Math.random() * 9);
  const Maulwurf = Maulwürfe[number];
  Maulwurf.classList.add("moveUp");
  hideMole(Maulwurf);
}

function hideMole(Maulwurf) {
  setTimeout(() => {
    if (show) Maulwurf.classList.remove("moveUp");
  }, 1000);
}

function checkHite(ctn) {
  const Maulwurf = ctn.querySelector(".Maulwurf");
  const classList = Array.from(Maulwurf.classList);
  if (classList.includes("moveUp")) {
    Maulwurf.src = "Bilder/maulwurf--2.png";
    setTimeout(() => effect2.play(), 100);
    show = false;
    showPopUp();
  }
}

function showPopUp() {
  pooupImg.src = "Bilder/maulwurf--2.png";
  btn.textContent = "Neues Spiel";
  popup.classList.remove("hide-popup");
}

function play() {
  music.play();
  Maulwürfe.forEach((Maulwurf) => {
    Maulwurf.src = "Bilder/maulwurf--1.png";
    Maulwurf.classList.remove("moveUp");
  });
  show = true;
  popup.classList.add("hide-popup");
}

setInterval(showMole, 1000);
btn.addEventListener("click", play);
document.addEventListener("click", showHammer);
