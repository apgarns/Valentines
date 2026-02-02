// === Hidden tracking (per browser) ===
let yesCount = Number(localStorage.getItem("yesCount")) || 0;
let noCount = Number(localStorage.getItem("noCount")) || 0;
let yesPressed = false;

// === Spanish "No" phrases ===
const phrases = [
  "No",
  "¿Estás segura?",
  "¿De verdad segura?",
  "¡Piénsalo otra vez!",
  "Te invito unos tacos ;((",
  "¡Última oportunidad!",
  "¿Segura que no?",
  "¡Podrías arrepentirte!",
  "¡Dale otra pensada!",
  "¿Estás completamente segura?",
  "¡Esto podría ser un error!",
  "¡Ten corazón!",
  "POR FAVOR BEBE",
  "¡No seas tan fría!",
  "PERO :*(",
  "Me voy a morir:",
  "¿Cambio de opinión?",
  "Sip, ya me mori",
  "Bueno, estas hablando con el fantasma de Alex",
  "¿No lo reconsiderarías?",
  "¿Esa es tu respuesta final?",
  ":(((((",
  "Me estás rompiendo el corazón ;(",
  "No",
];

const LAST_NO_INDEX = phrases.length - 1;

// === GIFs ===
const yesGif =
  "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
const noGif =
  "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif";

// === Elements ===
const gifEl = document.getElementById("gif");
const titleEl = document.getElementById("title");
const buttonsEl = document.getElementById("buttons");
const yayEl = document.getElementById("yay");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// === Helpers ===
function yesButtonSizePx() {
  return noCount * 20 + 16;
}

function getNoButtonText() {
  return phrases[Math.min(noCount, LAST_NO_INDEX)];
}

function moveNoButtonRandomly() {
  const padding = 20;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// === Render ===
function render() {
  yesBtn.style.fontSize = `${yesButtonSizePx()}px`;

  if (yesPressed) {
    gifEl.src = yesGif;
    titleEl.classList.add("hidden");
    buttonsEl.classList.add("hidden");
    yayEl.classList.remove("hidden");
  } else {
    gifEl.src = noGif;
    titleEl.classList.remove("hidden");
    buttonsEl.classList.remove("hidden");
    yayEl.classList.add("hidden");
    noBtn.textContent = noCount === 0 ? "No" : getNoButtonText();
  }
}

// === Events ===
yesBtn.addEventListener("click", () => {
  yesCount++;
  localStorage.setItem("yesCount", yesCount);

  yesPressed = true;
  render();
});

noBtn.addEventListener("click", () => {
  noCount++;
  localStorage.setItem("noCount", noCount);

  if (noCount >= LAST_NO_INDEX) {
    moveNoButtonRandomly();
  }

  render();
});

// Evil hover mode 😈
noBtn.addEventListener("mouseenter", () => {
  if (noCount >= LAST_NO_INDEX) {
    moveNoButtonRandomly();
  }
});

render();
