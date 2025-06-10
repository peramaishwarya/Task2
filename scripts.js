let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;
let display = document.getElementById("display");
let laps = document.getElementById("laps");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = `${h}:${m}:${s}`;
}

function start() {
  if (timer) return;
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    updateDisplay();
  }, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  laps.innerHTML = "";
}

function lap() {
  const time = display.textContent;
  const li = document.createElement("li");
  li.textContent = `Lap ${laps.children.length + 1}: ${time}`;
  laps.appendChild(li);
}
