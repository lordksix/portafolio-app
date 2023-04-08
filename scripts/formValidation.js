const formInputNodes = document.querySelectorAll('form input');
const formSumitValidation = document.getElementById('contact-form');
const formMessage = document.getElementById('validation');
const formTextArea = document.querySelector('form textarea');
const formInputs = Array.from(formInputNodes);
formInputs.push(formTextArea);

const patterns = {
  email: /^(([^<>()[\]\\/.,;:\s*@"]+(\.[^<>()[\]\\/.,;:\s*@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

function showMessage(input, message) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  msg.style.color = 'red';
  msg.style.fontSize = '14px';
  msg.style.fontWeight = 'bold';
}

function validate(field, regex, input) {
  if (regex.test(field.value)) {
    field.classList.remove('invalid');
    field.classList.add('valid');
    showMessage(input, '');
  } else {
    field.classList.remove('valid');
    field.classList.add('invalid');
    showMessage(input, `Please, enter a correct ${field.attributes.name.value} address`);
  }
}
function validateSize(field, size, input) {
  if (field.value.length <= size && field.value.length > 0) {
    field.classList.remove('invalid');
    field.classList.add('valid');
    showMessage(input, '');
  } else {
    field.classList.remove('valid');
    field.classList.add('invalid');
    if (field.value.length === 0) showMessage(input, `Please, ${field.attributes.name.value} is required`);
    else showMessage(input, `Please, ${field.attributes.name.value} should be shorter`);
  }
}

function lookInvalid() {
  formInputs.forEach((formInput) => formInput.classList.contains('invalid'));
}

formInputs.forEach((formInput) => {
  formInput.addEventListener('keyup', (e) => {
    const input = e.target.attributes;
    switch (input.name.value) {
      case 'name':
        validateSize(e.target, 30, formInput);
        break;
      case 'email':
        validate(e.target, patterns[input.name.value], formInput);
        break;
      case 'message':
        validateSize(e.target, 500, formInput);
        break;
      default:
        break;
    }
  });
});

formSumitValidation.addEventListener('submit', (e) => {
  formMessage.style.fontSize = '18px';
  formMessage.style.fontWeight = 'bold';
  if (lookInvalid) {
    e.preventDefault();
    formMessage.style.color = '#f00';
    formMessage.textContent = 'You need to fill correctly the form!';
  } else {
    formMessage.style.color = '#0f0';
    formMessage.textContent = 'You have submited your application';
  }
});