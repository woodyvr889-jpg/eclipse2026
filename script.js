// ===== COUNTDOWN (MAIN PAGE) =====
const countdownEl = document.getElementById("countdown");

if (countdownEl) {
  const targetDate = new Date("August 12, 2026 10:30:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff < 0) {
      countdownEl.innerHTML = "🌑 Eclipse happening now!";
      playAlert();
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    countdownEl.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
  }, 1000);
}


// ===== LIVE PAGE TIMES =====
const startEl = document.getElementById("start");
const maxEl = document.getElementById("max");
const endEl = document.getElementById("end");
const statusEl = document.getElementById("status");

if (startEl) {
  const startTime = new Date("August 12, 2026 10:00:00").getTime();
  const maxTime = new Date("August 12, 2026 10:30:00").getTime();
  const endTime = new Date("August 12, 2026 11:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();

    const format = (t) => {
      const diff = t - now;
      if (diff < 0) return "Done";
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      return `${m}m ${s}s`;
    };

    startEl.innerHTML = format(startTime);
    maxEl.innerHTML = format(maxTime);
    endEl.innerHTML = format(endTime);

    if (now < startTime) statusEl.innerHTML = "Waiting...";
    else if (now < maxTime) statusEl.innerHTML = "🌘 Eclipse started!";
    else if (now < endTime) statusEl.innerHTML = "🌑 Maximum eclipse!";
    else statusEl.innerHTML = "Finished";

  }, 1000);
}


// ===== SOUND ALERT =====
function playAlert() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.frequency.value = 800;
  gain.gain.value = 0.2;

  osc.start();
  setTimeout(() => osc.stop(), 1000);
}
