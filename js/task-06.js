const input = document.querySelector('#validation-input');
const length = input.dataset.length;
input.addEventListener('blur', elem => {
  if (elem.currentTarget.value.length === Number(length)) {
    input.classList = 'valid';
  } else {
    input.classList = 'invalid';
  }
});
