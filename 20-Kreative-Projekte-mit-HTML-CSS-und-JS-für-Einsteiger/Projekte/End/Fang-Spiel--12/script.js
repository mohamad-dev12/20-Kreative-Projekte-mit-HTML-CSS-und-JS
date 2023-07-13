const apple = document.querySelector(".apple");
const banana = document.querySelector(".banana");
const coconut = document.querySelector(".coconut");
const orange = document.querySelector(".orange");
const pineapple = document.querySelector(".pineapple");
const strawberrie = document.querySelector(".strawberrie");

const wave = document.querySelector(".wave");
const fruits = [apple, banana, coconut, orange, pineapple, strawberrie];
let number = 0;

function createFruit() {
  fruits.forEach((el) => {
    const pos = Math.floor(Math.random() * 90);
    el.style.left = `${pos}%`;
    addAnimation(el);
    number++;
  });
  number = 0;
}

function addAnimation(el) {
  setTimeout(function () {
    el.classList.add("animation");
    setTimeout(function () {
      el.classList.remove("animation");
      el.style.display = "block";
    }, 4000);
  }, number * 1500);
}

document.addEventListener("mouseover", function (e) {
  const fruit = e.target;
  const dataFruit = fruit.dataset.fruit;
  const fill = document.querySelector(`.circle--${dataFruit} div`);
  if (dataFruit) {
    fill.dataset.percent -= 20;
    fill.style.transform = `translate(-50%, ${fill.dataset.percent}%)`;
    fruit.style.display = "none";
  }

  checkFill(fill);
});

function checkFill(fill) {
  if (fill?.dataset.percent <= -40) {
    wave.style.backgroundColor = fill.dataset.color;
    wave.classList.add("animation-wave");
    setTimeout(reset, 2000);
  }
}

function reset() {
  const fruits = [
    "apple",
    "banana",
    "coconut",
    "orange",
    "strawberrie",
    "pineapple",
  ];

  fruits.forEach((fruit) => {
    const fill = document.querySelector(`.circle--${fruit} div`);
    fill.dataset.percent = 35;
    fill.style.transform = `translate(-50%, ${fill.dataset.percent}%)`;

    setTimeout(() => wave.classList.remove("animation-wave"), 5000);
  });
}

createFruit();
setInterval(createFruit, 12000);
