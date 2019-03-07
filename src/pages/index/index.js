import '../common.scss';
import './index.scss';
import 'normalize.css';
import test from '../../test';

console.log('index.js');
test()

const authButton = document.querySelector('#authButton');
const flippedBlock = document.querySelector('#flippedBlock');
const backToWelcome = document.querySelector('#backToWelcome');
const formSubmit = document.querySelector('#formSubmit');

const flipAndChangeDisplay = () => {
    const classList = flippedBlock.classList;
    if( classList.contains('flipped') ) {
        classList.remove('flipped');
        authButton.style.display = 'block';
    } else {
        classList.add('flipped');
        authButton.style.display = 'none';
    }
}

authButton.addEventListener('click', flipAndChangeDisplay);
backToWelcome.addEventListener('click', flipAndChangeDisplay)