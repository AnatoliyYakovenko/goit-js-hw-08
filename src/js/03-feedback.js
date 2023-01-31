import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const formEl = document.querySelector('form');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormEl, 500));

fillForm();

function onFormSubmit(e) {
  e.preventDefault();
  formData.email = formEl.elements.email.value;
  formData.message = formEl.elements.message.value;

  console.log(formData);

  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormEl(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillForm() {
  const savedForm = localStorage.getItem(STORAGE_KEY);
  if (savedForm) {
    const parseSavedForm = JSON.parse(savedForm);
    for (const property in parseSavedForm) {
      if (parseSavedForm.hasOwnProperty(property)) {
        formEl.elements[property].value = parseSavedForm[property];
        formData[property] = parseSavedForm[property];
      }
    }
  }
}
