const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
input.value = '16'
input.addEventListener('input', elem => {
  span.style.fontSize = `${elem.currentTarget.value}px`;
});
