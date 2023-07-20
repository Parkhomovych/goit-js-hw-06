const input = document.querySelector('#validation-input');
console.dir(input.id);
const length = input.dataset.length;
input.addEventListener('blur', elem => {
  if (elem.currentTarget.value.length > length) {
    input.classList = 'invalid';
  } else if (elem.currentTarget.value.length < length) {
    input.classList = 'valid';
  }
});
