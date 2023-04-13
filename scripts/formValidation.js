const formInputNodes = document.querySelector('form input[type="email"]');
const sumbitBtn = document.querySelector('form button[type="submit"]');
const errorMessage = document.getElementById('validation');

const formInputs = document.querySelectorAll('form input');
const formTextArea = document.querySelector('form textarea');
const resetBtn = document.querySelector('form button[type="reset"]');
const formInputsArr = Array.from(formInputs);
formInputsArr.push(formTextArea);
const formStorage = {
  name: '',
  email: '',
  message: '',
};

function loadLocalStorage() {
  const formStr = localStorage.getItem('formData');
  if (formStr) {
    const formData = JSON.parse(formStr);
    formInputsArr.forEach((formInput) => {
      formInput.value = formData[formInput.attributes.name.value];
    });
  }
}

function checkLowercase(e) {
  if (formInputNodes.value !== formInputNodes.value.toLowerCase()) {
    e.preventDefault();
    errorMessage.textContent = 'Form was not submitted. Email should be lowercased.';
  } else {
    errorMessage.textContent = '';
  }
}

resetBtn.addEventListener('click', () => {
  localStorage.clear();
  Object.keys(formStorage).forEach((key) => {
    formStorage[key] = '';
  });
});

formInputsArr.forEach((formInput) => {
  formInput.addEventListener('keyup', (e) => {
    const input = e.target.attributes.name.value;
    formStorage[input] = e.target.value;
    const formStorageStr = JSON.stringify(formStorage);
    localStorage.setItem('formData', formStorageStr);
  });
});
sumbitBtn.addEventListener('click', checkLowercase);
window.addEventListener('load', loadLocalStorage);
