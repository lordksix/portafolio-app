const formInput = document.querySelector('form input[type="email"]');
const formSumitValidation = document.getElementById('contact-form');
const formMessage = document.getElementById('validation');

const patterns = {
  email: /^(([^<>()[\]\\/.,;:\s*@"]+(\.[^<>()[\]\\/.,;:\s*@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.classList.remove('invalid');
    field.classList.add('valid');
  } else {
    field.classList.remove('valid');
    field.classList.add('invalid');
  }
}

function lookInvalid() {
  return formInput.classList.contains('invalid');
}

formInput.addEventListener('keyup', (e) => {
  validate(e.target, patterns[e.target.attributes.name.value]);
});

formSumitValidation.addEventListener('submit', (e) => {
  formMessage.style.fontSize = '18px';
  formMessage.style.fontWeight = 'bold';
  if (lookInvalid()) {
    e.preventDefault();
    formMessage.style.color = '#f00';
    formMessage.textContent = 'You need to fill correctly the form!';
  } else {
    formMessage.style.color = '#0f0';
    formMessage.textContent = 'You have submited your application';
  }
});