const formInputNodes = document.querySelector('form input[type="email"]');
const sumbitBtn = document.querySelector('form button[type="submit"]');
const errorMessage = document.getElementById('validation');

function checkLowercase(input) {
  if (input !== input.toLowerCase()) {
    errorMessage.textContent = 'Form was not submitted. Email should be lower-cased.';
  }
}