const entrance = document.querySelector('.entrance');
const confetti = document.querySelector('.confetti');

for (let index = 0; index < 26; index += 1) {
  const piece = document.createElement('i');
  const left = (index * 37) % 100;
  piece.style.setProperty('--delay', `${index * 0.16}s`);
  piece.style.setProperty('--left', `${left}%`);
  piece.style.setProperty('--hue', `${(index * 47) % 360}`);
  confetti.appendChild(piece);
}

window.setTimeout(() => {
  entrance.classList.add('delivered');
}, 5200);
