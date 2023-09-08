import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

const saveFormData = () => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

emailInput.addEventListener('input', throttle(saveFormData, 500));
messageTextarea.addEventListener('input', throttle(saveFormData, 500));

document.addEventListener('DOMContentLoaded', () => {
  const savedFormData = localStorage.getItem('feedback-form-state');

  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    emailInput.value = parsedFormData.email;
    messageTextarea.value = parsedFormData.message;
  }
});

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  emailInput.value = '';
  messageTextarea.value = '';

  localStorage.removeItem('feedback-form-state');
});
