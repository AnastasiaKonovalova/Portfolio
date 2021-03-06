import '../common.scss';
import './index.scss';
import 'normalize.css';
import '../../components/preloader/preloader';
import '../../components/login_form/login_form';

console.log('index.js');

const authButton = document.querySelector('#authButton');
const flippedBlock = document.querySelector('#flippedBlock');
const backToWelcome = document.querySelector('#backToWelcome');

const flipAndChangeDisplay = () => {
  const classList = flippedBlock.classList;
  if (classList.contains('flipped')) {
    classList.remove('flipped');
    authButton.style.visibility = 'visible';
  } else {
    classList.add('flipped');
    authButton.style.visibility = 'hidden';
    window.scrollTo(0, 0);
  }
};
authButton.addEventListener('click', flipAndChangeDisplay);
backToWelcome.addEventListener('click', flipAndChangeDisplay);

const parallaxContainer = document.querySelector('#parallax');
const layers = [];

const moveLayers = e => {
  const initialX = (window.innerWidth / 2) - e.pageX;
  const initialY = (window.innerHeight / 2) - e.pageY;
  let i = 1;
  [...layers].forEach(layer => {
    const divider = i / 100;
    layer.style.transform = `translate(${initialX * divider}px, ${initialY * divider}px)`;
    i += 1.5;
  });
};

if (window.innerWidth > 768) {
  for (let i = 1; i < 4; i++) {
    const img = document.createElement('img');
    img.className = 'parallax__img';
    img.src = require(`../../img/layer_${i}.png`);

    const div = document.createElement('div');
    div.className = 'parallax__layer';
    div.appendChild(img);
    layers.push(div);
    parallaxContainer.appendChild(div);
  };

  window.addEventListener('mousemove', moveLayers);
}
