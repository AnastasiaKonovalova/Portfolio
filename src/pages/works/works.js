import '../common.scss';
import './works.scss';
import 'normalize.css';
import { initNavigationListeners } from '../../utilities/commonEvents';

console.log('works.js')

const worksSection = document.querySelector('.works')
const scrollUpButton = document.querySelector('#scrollUpButton')

initNavigationListeners(worksSection)
scrollUpButton.addEventListener('click', e => {
    window.scrollTo(0, 0)
})
