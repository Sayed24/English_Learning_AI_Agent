function startVoice() {
  const rec = new webkitSpeechRecognition();
  rec.lang = "en-US";
  rec.onresult = e => {
    document.getElementById("userInput").value = e.results[0][0].transcript;
  };
  rec.start();
}

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(msg);
}

