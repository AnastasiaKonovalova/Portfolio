import './login_form.scss';
import { FormSyncValidator } from '../../utilities/helpers';


const loginForm = document.querySelector('#loginForm');
const submitButton = document.querySelector('#formSubmit');
const formValidator = new FormSyncValidator(loginForm);

submitButton.addEventListener('click', e => {
    e.preventDefault();
    formValidator.validateForm()
});


// const checkboxLabel = document.querySelector('.checkbox__label');
// const radioLabel = document.querySelector('.radio__label');

// loginForm.addEventListener('click', e => {
//     const target = e.target;
//     if (target.classList.contains('checkbox__label')){
//         target.firstElementChild.classList.toggle('styled-checkbox--checked');
//     };
//     if (target.classList.contains('radio__label')){
//         console.log(target.lastElementChild.checked)
//     }
    
// });

