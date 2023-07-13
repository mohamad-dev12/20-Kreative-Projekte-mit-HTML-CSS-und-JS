const mill_El = document.querySelector(".mill");
const sec_El = document.querySelector(".sec");
const min_EL = document.querySelector(".min");
const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnEnd = document.querySelector(".btn-end");

let repeat;
let stopTime = false;
let firstClick = false;

const start = () => {
  if (!stopTime) {
    milliSeconds();
  }
};
function milliSeconds() {
  mill_El.textContent++;
  const value = mill_El.textContent;
  if (value.length === 1) mill_El.textContent = value.padStart(2, "0");
  if (value >= 100) {
    mill_El.textContent = "00";
    Seconds();
  }
}

function Seconds() {
  sec_El.textContent++;
  const value = sec_El.textContent;
  if (value.length === 1) sec_El.textContent = value.padStart(2, "0");
  if (value >= 60) {
    sec_El.textContent = "00";
    Minutes();
  }
}

function Minutes() {
  min_EL.textContent++;
  const value = min_EL.textContent;
  if (value.length === 1) min_EL.textContent = value.padStart(2, "0");
  if (value >= 60) {
    min_EL.textContent = "00";
  }
}

btnStart.addEventListener("click", function () {
  if (!firstClick) {
    firstClick = true;
    stopTime = false;
    repeat = setInterval(start, 10);
  }
});

btnStop.addEventListener("click", function () {
  stopTime = true;
  firstClick = false;
  clearInterval(repeat);
});

btnEnd.addEventListener("click", function () {
  stopTime = true;
  firstClick = false;
  clearInterval(repeat);
  mill_El.textContent = sec_El.textContent = min_EL.textContent = "00";
});
