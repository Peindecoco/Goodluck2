const entrance = document.querySelector('.entrance');
const confetti = document.querySelector('.confetti');

for (let index = 0; index < 26; index += 1) {
  const piece = document.createElement('i');
  piece.style.setProperty('--delay', `${index * 0.16}s`);
  piece.style.setProperty('--left', `${(index * 37) % 100}%`);
  confetti.appendChild(piece);
}

window.setTimeout(() => {
  entrance.classList.add('delivered');
}, 4300);
