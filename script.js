const hour = document.querySelector('.arrow-hours');
const minutes = document.querySelector('.arrow-minutes');
const seconds = document.querySelector('.arrow-seconds');

const clock = () => {
    let date = new Date();

    let hrs = date.getHours() * 30;
    let mins = date.getMinutes() * 6;
    let secs = date.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hrs + mins / 12}deg)`;
    minutes.style.transform = `rotateZ(${mins}deg)`;
    seconds.style.transform = `rotateZ(${secs}deg)`;
}
 
setInterval(clock, 1000);

// Date
const date = () => {
let date = new Date();
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

let currentDay = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 
'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

day.textContent = currentDay + ' ';
month.textContent = `${months[currentMonth]}`;
year.textContent = currentYear;
}

setInterval(date, 1000);

// Stopwatch
const stopwatchContent = document.querySelector('.stw');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let ssec = 0;
let smin = 0;
let shour = 0;
let stopwatchTime;

function timeCount() {
   ssec++;
   if (ssec >= 60) {
    ssec = 0;
    smin++;
    if (smin >= 60) {
        smin = 0;
        shour++;
      }
   }
}

function addZero() {
    timeCount();
    stopwatchContent.textContent = (shour > 9 ? shour : "0" + shour)
                       + ":" + (smin > 9 ? smin : "0" + smin)
                       + ":" + (ssec > 9 ? ssec : "0" + ssec);
    timerStart();                   
}
function timerStart() {
    stopwatchTime = setTimeout(addZero, 1000);
}

startButton.onclick = timerStart;
stopButton.onclick = function() {
    clearTimeout(stopwatchTime);
}

resetButton.onclick = function() {
stopwatchContent.textContent = "00:00:00";
ssec = 0;
smin = 0;
shour = 0;
}

// Stopwatch toggle

const stopwatchToggle = document.querySelector('.stopwatch-toggle');
const stopwatchActive = document.querySelector('.stopwatch');
const boxActive = document.querySelector('.box');



function showStopwatch () {
    stopwatchActive.classList.toggle('active');
    boxActive.classList.toggle('active');
    startButton.classList.toggle('active');
    stopButton.classList.toggle('active');
    resetButton.classList.toggle('active');
    stopwatchToggle.classList.toggle('active');
}
stopwatchToggle.addEventListener('click', showStopwatch);
