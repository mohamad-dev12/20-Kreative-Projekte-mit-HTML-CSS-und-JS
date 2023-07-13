let hourEl = document.querySelector(".hour-line");
let minuteEl = document.querySelector(".minute-line");
let secondEl = document.querySelector(".second-line");

function Time() {
  // Get current Time
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  let hourDg = (hour / 12) * 360;
  let minuteDg = (minute / 60) * 360;
  let secondDg = (second / 60) * 360;

  hourEl.style.transform = `rotate(${hourDg}deg)`;
  minuteEl.style.transform = `rotate(${minuteDg}deg)`;
  secondEl.style.transform = `rotate(${secondDg}deg)`;
}

setInterval(Time, 1000);
