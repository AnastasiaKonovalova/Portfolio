import 'normalize.css';
import '../common.scss';
import './works.scss';
import '../../components/slider/slider';
import { initNavigationListeners } from '../../utilities/commonEvents';
import '../../components/enter_screen/enter_screen';

console.log('works.js')

const worksSection = document.querySelector('.works')
const scrollUpButton = document.querySelector('#scrollUpButton')

initNavigationListeners(worksSection)
scrollUpButton.addEventListener('click', e => {
    window.scrollTo(0, 0)
})
