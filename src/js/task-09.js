function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
button.addEventListener('click', changes);

const span = document.querySelector('.color');

const body = document.querySelector('body');

function changes() {
  let value = getRandomHexColor();
  body.style.backgroundColor = value;
  span.textContent = value;
  // цей код не змінює двічі DOM?

  
  // (body.style.backgroundColor = value) && (span.textContent = value) 
  // закоментований код мені подобається більше
}
