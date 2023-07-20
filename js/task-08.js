const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(elem) {
  elem.preventDefault();
  const { email, password } = elem.currentTarget.elements;
  if (!email.value || !password.value) {
    alert('Всі поля повинні бути заповнені');
  } else {
    const obj = {
      email: email.value,
      password: password.value,
    };
    console.log(obj);
    form.reset()
  }
}
