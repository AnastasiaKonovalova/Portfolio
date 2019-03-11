import 'normalize.css';
import '../common.scss';
import './about.scss';

import { initNavigationListeners } from '../../utilities/commonEvents';
import '../../components/enter_screen/enter_screen';

console.log('about.js');
const aboutSection = document.querySelector('.about__main');

initNavigationListeners(aboutSection)
