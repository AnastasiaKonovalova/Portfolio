import './login_form.scss';
import { FormSyncValidator } from '../form_validation/form_validator';
import { ResponseAlert } from '../response_alert/response_alert';
import { apiRequest } from '../../utilities/axiosConfig';

const loginForm = document.querySelector('#loginForm');
const submitButton = document.querySelector('#formSubmit');
const returnButton = document.querySelector('#backToWelcome');
const formValidator = new FormSyncValidator(loginForm);
const responseAlert = new ResponseAlert();
responseAlert.init();

submitButton.addEventListener('click', e => {
  e.preventDefault();
  const isValid = formValidator.validateForm();
  if (isValid) {
    const loginInput = loginForm.elements.login;
    const passwordInput = loginForm.elements.password;
    const userData = {
      [loginInput.name]: loginInput.value,
      [passwordInput.name]: passwordInput.value
    };

    apiRequest
      .post('/', userData, { mode: 'cors' })
      .then(response => {
        console.log('login response', response);
        location.href += 'admin';
      })
      .catch(error => {
        console.log('login error', error);
        responseAlert.showModal(`Произошла ошибка: ${error.message}`);
      });
  }
});

returnButton.addEventListener('click', e => {
  formValidator.removeErrors();
});
