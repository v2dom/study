let pomodoroInterval;
let pomodoroMinutes = 25;
let pomodoroSeconds = 0;
let isTimerRunning = false;

document.getElementById('startStopBtn').addEventListener('click', () => {
  if (isTimerRunning) {
    clearInterval(pomodoroInterval);
    document.getElementById('startStopBtn').textContent = 'Start';
  } else {
    pomodoroInterval = setInterval(updateTimer, 1000);
    document.getElementById('startStopBtn').textContent = 'Stop';
  }
  isTimerRunning = !isTimerRunning;
});

document.getElementById('resetBtn').addEventListener('click', () => {
  clearInterval(pomodoroInterval);
  pomodoroMinutes = 25;
  pomodoroSeconds = 0;
  document.getElementById('timer').textContent = '25:00';
  document.getElementById('startStopBtn').textContent = 'Start';
  isTimerRunning = false;
});

function updateTimer() {
  if (pomodoroSeconds === 0) {
    if (pomodoroMinutes === 0) {
      clearInterval(pomodoroInterval);
      document.getElementById('startStopBtn').textContent = 'Start';
      isTimerRunning = false;
      alert('Time for a break!');
      return;
    }
    pomodoroMinutes--;
    pomodoroSeconds = 59;
  } else {
    pomodoroSeconds--;
  }

  document.getElementById('timer').textContent = `${padTime(pomodoroMinutes)}:${padTime(pomodoroSeconds)}`;
}

function padTime(time) {
  return time < 10 ? `0${time}` : time;
}

function updateTime() {
  const currentTime = new Date();
  const hours = padTime(currentTime.getHours());
  const minutes = padTime(currentTime.getMinutes());
  const seconds = padTime(currentTime.getSeconds());
  document.getElementById('timeDisplay').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);

document.getElementById("addTaskBtn").addEventListener("click", function() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");

    newTask.innerHTML = `
      ${taskText}
      <button class="delete-btn">Delete</button>
    `;

    newTask.querySelector(".delete-btn").addEventListener("click", function() {
      taskList.removeChild(newTask);
    });

    newTask.addEventListener("click", function() {
      newTask.classList.toggle("completed");
    });

    taskList.appendChild(newTask);
    taskInput.value = "";
  }
});

const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const containers = document.querySelectorAll('.card');

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  containers.forEach(container => {
    container.classList.toggle("light-mode-card");
  });
});


