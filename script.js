let noCount = 0;
let yesPressed = false;

const phrases = [
  "No",
  "¿Estás seguro?",
  "¿De verdad seguro?",
  "¡Piénsalo otra vez!",
  "¡Última oportunidad!",
  "¿Seguro que no?",
  "¡Podrías arrepentirte!",
  "¡Dale otra pensada!",
  "¿Estás completamente seguro?",
  "¡Esto podría ser un error!",
  "¡Ten corazón!",
  "¡No seas tan frío/a!",
  "¿Cambio de opinión?",
  "¿No lo reconsiderarías?",
  "¿Esa es tu respuesta final?",
  "Me estás rompiendo el corazón ;("
];

const yesGif = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
const noGif = "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif";

const gifEl = document.getElementById("gif");
const titleEl = document.getElementById("title");
const buttonsEl = document.getElementById("buttons");
const yayEl = document.getElementById("yay");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

function yesButtonSizePx() {
  return noCount * 20 + 16; // igual idea que el original
}

function getNoButtonText() {
  return phrases[Math.min(noCount, phrases.length - 1)];
}

function render() {
  yesBtn.style.fontSize = `${yesButtonSizePx()}px`;

  if (yesPressed) {
    gifEl.src = yesGif;
    gifEl.alt = "Ositos besándose";
    titleEl.classList.add("hidden");
    buttonsEl.classList.add("hidden");
    yayEl.classList.remove("hidden");
  } else {
    gifEl.src = noGif;
    gifEl.alt = "Osito con rosas";
    titleEl.classList.remove("hidden");
    buttonsEl.classList.remove("hidden");
    yayEl.classList.add("hidden");
    noBtn.textContent = noCount === 0 ? "No" : getNoButtonText();
  }
}

yesBtn.addEventListener("click", () => {
  yesPressed = true;
  render();
});

noBtn.addEventListener("click", () => {
  noCount += 1;
  render();
});

render();
