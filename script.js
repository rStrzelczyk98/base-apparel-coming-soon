'use strict';

const form = document.querySelector('.newsletter');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
  if (!checkInput()) e.preventDefault();
});
email.addEventListener('input', checkInput);

function emailValidation(element) {
  const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return pattern.test(element.value.toLowerCase());
}

function displayError(element, message) {
  element.ariaInvalid = 'true';
  const inputField = element.parentElement;
  const error = form.querySelector('.error');
  inputField.classList.add('error');
  error.innerHTML = `<p>${message}</p>`;
  error.children[0].setAttribute('id', 'errorID');
  error.children[0].setAttribute('aria-label', `Error: ${message}`);
}

function validInput(element) {
  element.ariaInvalid = 'false';
  const inputField = element.parentElement;
  const error = inputField.querySelector('.error');
  inputField.classList.remove('error');
  error.innerHTML = '';
}

function checkInput() {
  if (!email.value) {
    displayError(email, 'Email adress required');
    return false;
  } else if (!emailValidation(email)) {
    displayError(email, 'Please provide a valid email');
    return false;
  } else {
    validInput(email);
    return true;
  }
}
