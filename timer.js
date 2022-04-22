"use strict";

const clockFace = document.querySelector(".seconds");
const startBtn = document.querySelector(".button");

let time = 10;
let intervalId;

startBtn.addEventListener("click", start);

function start() {
  intervalId = setInterval(updateClockFace, 1000);
};

function updateClockFace() {
  if (clockFace.innerHTML > 0) {
    startBtn.setAttribute("disabled", true);
    time = time < 10 ? "0" + time : time;
    clockFace.innerHTML = time;
    time = time - 1;
  } else {
    time = 10;
    clockFace.innerHTML = time;
    clearInterval(intervalId);
    startBtn.removeAttribute("disabled");
  }
};
