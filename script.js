let progress = JSON.parse(localStorage.getItem("progress")) || {
  day: 1
};

const chat = document.getElementById("chat");

updateStatus();
startLesson();

function startLesson() {
  const lesson = course[progress.day - 1];
  addMessage(`📘 Day ${lesson.day} (${lesson.level})\n${lesson.lesson}`, "agent");
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    nextStep();
  }, 500);
}

function nextStep() {
  progress.day++;
  if (progress.day > 30) {
    addMessage("🎉 You finished the 30-day English course!", "agent");
    return;
  }

  localStorage.setItem("progress", JSON.stringify(progress));
  updateStatus();
  startLesson();
}

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = type;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function updateStatus() {
  const lesson = course[progress.day - 1];
  document.getElementById("day").innerText = progress.day;
  document.getElementById("level").innerText = lesson.level;
}
