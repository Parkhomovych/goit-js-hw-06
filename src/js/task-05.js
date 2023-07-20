const userName = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
userName.addEventListener('input', onInput);

function onInput(words) {
  if (words.currentTarget.value) {
    span.textContent = words.currentTarget.value;
  } else if (words.currentTarget.value === '') {
    span.textContent = 'Anonymous';
  }
}
