import 'normalize.css';
import '../common.scss';
import './works.scss';
import '../../components/slider/slider';
import { initNavigationListeners } from '../../utilities/commonEvents';
import { FormSyncValidator } from '../../components/form_validation/form_validator';
import '../../components/enter_screen/enter_screen';

console.log('works.js')

const worksSection = document.querySelector('.works')
const scrollUpButton = document.querySelector('#scrollUpButton')

initNavigationListeners(worksSection)
scrollUpButton.addEventListener('click', e => {
    window.scrollTo(0, 0)
});

const form = document.querySelector('.form');
const [...inputs] = document.querySelectorAll('.form__input');
const submitButton = document.querySelector('#formSubmit');
const resetButton = document.querySelector('#formReset');

const formValidator = new FormSyncValidator(form);

inputs.forEach(input => input.addEventListener('click', function(e) {
    this.classList.remove('form__input--invalid')
}));

submitButton.addEventListener('click', e => {
    e.preventDefault();
    formValidator.validateForm()
});

resetButton.addEventListener('click', e => {
    formValidator.removeErrorField();
    inputs.forEach(input => input.classList.remove('form__input--invalid'));
})