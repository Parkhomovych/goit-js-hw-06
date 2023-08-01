let counterValue = 0;
const span = document.querySelector('#counter #value');
const minus = span.previousElementSibling;
const plus = span.nextElementSibling;
minus.addEventListener('click', rem);
plus.addEventListener('click', add);

function rem() {
  counterValue -= 1;
  span.textContent = counterValue;
  
}
function add() {
  counterValue += 1;
  span.textContent = counterValue
  
}


// <=================================================================>

// let counterValue = 0;
// const plusBtn = document.querySelector(
//   '#counter button[data-action="increment"'
// );
// const minusBtn = document.querySelector(
//   '#counter button[data-action="decrement"'
// );
// const span = document.querySelector('#value')
// plusBtn.addEventListener('click', add);
// minusBtn.addEventListener('click', remove);
// function add() {
//   counterValue += 1;
//   span.textContent = counterValue;
// }
// function remove() {
//   counterValue -= 1;
//   span.textContent = counterValue;
// }

// <=================================================================>

// let counterValue = 0;
// const button = document.querySelector('#counter');
// const span = button.children[1];
// button.children[0].addEventListener('click', remove);
// button.children[2].addEventListener('click', add);
// console.log(counterValue);
// function add() {
//   counterValue += 1;
//   span.textContent = counterValue;
// }
// function remove() {
//   counterValue -= 1;
//   span.textContent = counterValue;
// }

// <=================================================================>
