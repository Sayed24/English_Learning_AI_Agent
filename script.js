let level = "beginner";
let step = 0;

function sendMessage() {
  const input = document.getElementById("userInput");
  const userText = input.value.trim();
  if (!userText) return;

  addMessage(userText, "user");
  input.value = "";

  setTimeout(() => {
    const response = agentLoop(userText);
    addMessage(response, "agent");
  }, 500);
}

function addMessage(text, type) {
  const chat = document.getElementById("chat");
  const div = document.createElement("div");
  div.className = type;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function agentLoop(userInput) {
  // Step 1: detect level
  if (step === 0) {
    if (userInput.toLowerCase().includes("beginner")) {
      level = "beginner";
    } else if (userInput.toLowerCase().includes("intermediate")) {
      level = "intermediate";
    } else {
      level = "advanced";
    }
    step = 1;
    return `Great! We will start at ${level} level.
Lesson 1: Greetings.
Say: "Hello, my name is ___."`;
  }

  // Beginner lesson loop
  if (level === "beginner" && step === 1) {
    step = 2;
    return `Good job! 😊
Now learn:
"I am a student."
Try to write this sentence.`;
  }

  if (level === "beginner" && step === 2) {
    return `Nice try!
Lesson complete ✅
Tomorrow we will learn questions like:
"What is your name?"`;
  }

  return "Let's continue learning tomorrow 👍";
}

