function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input[type="number"');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', handlerCreate);
destroyBtn.addEventListener('click', handlerDestroy);

input.value = '0';

let size = 30;
function handlerCreate() {
  const count = Number(input.value);
  const arr = [];

  for (let i = 0; i < count; i += 1) {

    const createDiv = document.createElement('div');
    createDiv.style.width = `${size}px`;
    createDiv.style.height = `${size}px`;
    createDiv.style.backgroundColor = getRandomHexColor();

    arr.push(createDiv);
    size += 10;

  }
  boxes.append(...arr);
  input.value = '0';
}

function handlerDestroy() {
  boxes.innerHTML = '';
  size = 20
  input.value = '0';
}
