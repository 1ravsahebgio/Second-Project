function showSection(sectionId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

function toggleMenu() {
  const menu = document.getElementById('menuOptions');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Dark Mode Switch
function enableDarkMode() {
  document.body.classList.add('dark-mode');
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
}
// clock
setInterval(() => {
  const now = new Date();
  document.getElementById('currentTime').textContent = now.toLocaleTimeString();
}, 1000);

// watch
    let hrs = document.getElementById("hrs")
    let min = document.getElementById("min")
    let sec = document.getElementById("sec")

    //  digital Timer
    setInterval(() => {
      let currentTime = new Date();

      hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
      min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
      sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    }, 1000);

       // JavaScript to display today's date in "6 January 2025" format
       const today = new Date();
       const day = today.getDate(); // Gets the day (6)
       const month = today.toLocaleString('default', { month: 'long' }); // Gets full month name (January)
       const year = today.getFullYear(); // Gets the year (2025)
       
       const formattedDate = `${day} ${month} ${year}`; // Combine into desired format
       document.getElementById('dateDiv').textContent = formattedDate;
       
// Alarm
let alarmTime = null;

function setAlarm() {
  alarmTime = document.getElementById('alarmTime').value;
  alert(`Alarm set for ${alarmTime}`);
}

setInterval(() => {
  const now = new Date();
  const currentTime = now.toTimeString().substr(0, 5);
  if (alarmTime === currentTime) {
    document.getElementById('alarmSound').play();
    document.getElementById('stopButton').style.display = 'block';  // Show stop button
    alert('Alarm ringing!');
    alarmTime = null;
  }
}, 1000);

// Timer
let timerInterval;
let totalTimerSeconds = 0;
let remainingTime = 0;
let isTimerPaused = false;

function startTimer() {
  const minutes = parseInt(document.getElementById('timerMinutes').value) || 0;
  const seconds = parseInt(document.getElementById('timerSeconds').value) || 0;
  totalTimerSeconds = minutes * 60 + seconds;
  remainingTime = totalTimerSeconds;

  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
  isTimerPaused = false;
  document.getElementById('timerDisplay').textContent = `${minutes}:${seconds}`;
}

function updateTimer() {
  if (remainingTime > 0) {
    remainingTime--;
    const mins = Math.floor(remainingTime / 60).toString().padStart(2, '0');
    const secs = (remainingTime % 60).toString().padStart(2, '0');
    document.getElementById('timerDisplay').textContent = `${mins}:${secs}`;
  } else {
    clearInterval(timerInterval);
    document.getElementById('alarmSound').play();
    document.getElementById('stopButton').style.display = 'block';  // Show stop button
    alert('Timer finished!');
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  isTimerPaused = true;
}

function resumeTimer() {
  if (isTimerPaused) {
    timerInterval = setInterval(updateTimer, 1000);
    isTimerPaused = false;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById('timerDisplay').textContent = '00:00';
  isTimerPaused = false;
}

// Stopwatch
let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
  if (stopwatchInterval) return; // Prevent starting multiple intervals
  stopwatchInterval = setInterval(updateStopwatch, 10);
  document.getElementById('pauseStopwatchButton').style.display = 'inline-block';
  document.getElementById('resumeStopwatchButton').style.display = 'none';
  document.getElementById('startStopwatchButton').style.display = 'none';
}

function updateStopwatch() {
  stopwatchTime++;
  const hours = Math.floor(stopwatchTime / 360000).toString().padStart(2, '0');
  const minutes = Math.floor((stopwatchTime % 360000) / 6000).toString().padStart(2, '0');
  const seconds = Math.floor((stopwatchTime % 6000) / 100).toString().padStart(2, '0');
  const milliseconds = (stopwatchTime % 100).toString().padStart(3, '0');
  document.getElementById('stopwatchDisplay').textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  document.getElementById('resumeStopwatchButton').style.display = 'inline-block';
  document.getElementById('pauseStopwatchButton').style.display = 'none';
}

function resumeStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(updateStopwatch, 10);
    document.getElementById('pauseStopwatchButton').style.display = 'inline-block';
    document.getElementById('resumeStopwatchButton').style.display = 'none';
  }
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  document.getElementById('stopwatchDisplay').textContent = '00:00:00:000';
  stopwatchInterval = null;
  document.getElementById('startStopwatchButton').style.display = 'inline-block';
  document.getElementById('pauseStopwatchButton').style.display = 'none';
  document.getElementById('resumeStopwatchButton').style.display = 'none';
}

// Bedtime
let bedtimeTime = null;

function setBedtime() {
  bedtimeTime = document.getElementById('bedtimeTime').value;
  alert(`Bedtime reminder set for ${bedtimeTime}`);
}

setInterval(() => {
  const now = new Date();
  const currentTime = now.toTimeString().substr(0, 5);
  if (bedtimeTime === currentTime) {
    document.getElementById('bedtimeSound').play();
    alert('Bedtime Reminder!');
    document.getElementById('stopButton').style.display = 'block';  // Show stop button
    bedtimeTime = null;
    enableDarkMode();  // Enable dark mode on bedtime
  }
}, 1000);

// Stop Button functionality
function stopAudio() {
  document.getElementById('alarmSound').pause();
  document.getElementById('bedtimeSound').pause();
  document.getElementById('stopButton').style.display = 'none';  // Hide stop button
}