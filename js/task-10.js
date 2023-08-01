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
let size = 20;

function handlerCreate() {
  const count = Number(input.value);
  const arr = [];

  for (let i = 0; i < count; i += 1) {
    size += 10;

    const createDiv = document.createElement('div');
    createDiv.style.width = `${size}px`;
    createDiv.style.height = `${size}px`;
    createDiv.style.backgroundColor = getRandomHexColor();

    arr.push(createDiv);
  }
  boxes.append(...arr);
  input.value = '0';
}

function handlerDestroy() {
  boxes.innerHTML = '';
  input.value = '0';
}
