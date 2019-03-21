import './login_form.scss';
import { FormSyncValidator } from '../form_validation/form_validator';


const loginForm = document.querySelector('#loginForm');
const submitButton = document.querySelector('#formSubmit');
const formValidator = new FormSyncValidator(loginForm);

submitButton.addEventListener('click', e => {
    e.preventDefault();
    formValidator.validateForm()
});
