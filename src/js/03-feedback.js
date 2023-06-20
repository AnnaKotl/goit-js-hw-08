import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function localStorageData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    emailInput.value = savedData.email || '';
    messageInput.value = savedData.message || '';
  }
};

function saveFormState() {
  const feedback = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
};

function handleSubmit(e) {
  e.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log('Form Data:', formData);

  localStorage.removeItem(STORAGE_KEY);
  emailInput.value = '';
  messageInput.value = '';
};

form.addEventListener('input', throttle(saveFormState, 500));
form.addEventListener('submit', handleSubmit);
document.addEventListener('DOMContentLoaded', localStorageData);
