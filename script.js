// TIMES (edit these to real eclipse times)
const startTime = new Date("Aug 12, 2026 10:00:00").getTime();
const maxTime = new Date("Aug 12, 2026 11:00:00").getTime();
const endTime = new Date("Aug 12, 2026 12:00:00").getTime();

// Countdown
setInterval(() => {
  const now = new Date().getTime();

  const update = (id, time) => {
    const diff = time - now;
    if (diff <= 0) return document.getElementById(id)?.innerHTML = "Now";

    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById(id)?.innerHTML = `${m}m ${s}s`;
  };

  update("start", startTime);
  update("max", maxTime);
  update("end", endTime);

  // STATUS
  let status = "Waiting...";
  if (now >= startTime) status = "Eclipse Started 🌘";
  if (now >= maxTime) status = "Greatest Eclipse 🌕";
  if (now >= endTime) status = "Eclipse Ended";

  const statusEl = document.getElementById("status");
  if (statusEl) statusEl.innerText = status;

}, 1000);

// 🔊 VOICE ALERTS
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.rate = 1;
  speech.pitch = 1;
  speechSynthesis.speak(speech);
}

// Example alerts
setTimeout(() => speak("Put your glasses on in 10 seconds"), 5000);
setTimeout(() => speak("Greatest eclipse approaching"), 15000);

// 🌑 LOADER REMOVE
window.onload = () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
};
