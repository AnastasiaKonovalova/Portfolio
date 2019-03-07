import 'normalize.css';
import '../common.scss';
import './about.scss';
import { initNavigationListeners } from '../../utilities/commonEvents';

console.log('about.js');
const aboutSection = document.querySelector('.about__main');

initNavigationListeners(aboutSection)
