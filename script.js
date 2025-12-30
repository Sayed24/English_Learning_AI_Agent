let progress = JSON.parse(localStorage.getItem("progress")) || { day: 1 };
const chat = document.getElementById("chat");

updateStatus();
startLesson();

function startLesson() {
  const l = course[progress.day - 1];
  addMessage(`📘 ${l.lesson}`, "agent");
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text })
  })
  .then(res => res.json())
  .then(data => {
    addMessage("✅ Grammar fix:\n" + data.reply, "agent");
    nextDay();
  });
}

function nextDay() {
  progress.day++;
  localStorage.setItem("progress", JSON.stringify(progress));
  updateStatus();
  if (progress.day <= 30) startLesson();
}

function addMessage(text, type) {
  const d = document.createElement("div");
  d.className = type;
  d.innerText = text;
  chat.appendChild(d);
}

function updateStatus() {
  const l = course[progress.day - 1] || {};
  document.getElementById("day").innerText = progress.day;
  document.getElementById("level").innerText = l.level || "Completed";
}
