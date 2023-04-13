const formInputNodes = document.querySelector('form input[type="email"]');
const sumbitBtn = document.querySelector('form button[type="submit"]');
const errorMessage = document.getElementById('validation');

function checkLowercase(e) {
  if (formInputNodes.value !== formInputNodes.value.toLowerCase()) {
    e.preventDefault();
    errorMessage.textContent = 'Form was not submitted. Email should be lower-cased.';
  } else {
    errorMessage.textContent = '';
  }
}

sumbitBtn.addEventListener('click', checkLowercase);
