const userName = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
userName.addEventListener('input', onInput);

function onInput(elem) {
  if (elem.currentTarget.value) {
    span.textContent = elem.currentTarget.value;
  } else if (words.currentTarget.value === '') {
    span.textContent = 'Anonymous';
  }
}
