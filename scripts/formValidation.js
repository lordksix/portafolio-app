const formInputNodes = document.querySelector('form input[type="email"]');
const sumbitBtn = document.querySelector('form button[type="submit"]');
const errorMessage = document.getElementById('validation');

const formInputs = document.querySelectorAll('form input');
const formTextArea = document.querySelector('form textarea');
const resetBtn = document.querySelector('form button[type="submit"]');
const formInputsArr = Array.from(formInputs);
formInputsArr.push(formTextArea);
const formStorage = {
  name: '',
  email: '',
  message: '',
}

function loadLocalStorage(){

}

function checkLowercase(e) {
  formInputsArr.forEach((formInput) => {
    formStorage[formInput.name] = formInput.value;
  });

  const formStorageStr = JSON.stringify(formStorage);
  localStorage.setItem('formData', formStorageStr);

  if (formInputNodes.value !== formInputNodes.value.toLowerCase()) {
    e.preventDefault();
    errorMessage.textContent = 'Form was not submitted. Email should be lowercased.';
  } else {
    errorMessage.textContent = '';
  }
}

sumbitBtn.addEventListener('click', checkLowercase);
