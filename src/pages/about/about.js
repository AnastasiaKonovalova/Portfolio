import 'normalize.css';
import '../common.scss';
import './about.scss';
import { initNavigationListeners } from '../../utilities/commonEvents';
import '../../components/enter_screen/enter_screen';

import mapboxgl from 'mapbox-gl';
import { mapToken, mapStyle } from '../../utilities/constants';

console.log('about.js');
const aboutSection = document.querySelector('.about__main');

initNavigationListeners(aboutSection);

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: 'mapContainer',
  style: mapStyle,
  center: [37.622504, 55.753215],
  zoom: 10
});

const div = document.createElement('div');
div.className = 'map__marker';
const marker = new mapboxgl.Marker({
  element: div,
  anchor: 'bottom'
});
marker.setLngLat([37.622504, 55.753215]);
marker.addTo(map);

const [...stackLists] = document.querySelectorAll('.techs__list');
const stack = new WeakMap(
  stackLists.map(list => {
    const [...circles] = list.querySelectorAll('.circle__color');
    return [list, { list: circles, isAnimated: false }];
  })
);
const animate = list => {
  const value = stack.get(list);
  value.list.forEach(circle => circle.classList.remove('circle__color--disable'));
  value.isAnimated = true;
};
const checkList = list => {
  if (list.getBoundingClientRect().top > window.innerHeight) return;
  if (stack.get(list).isAnimated) return;

  animate(list);
};
const handleAnimation = e => {
  stackLists.forEach(list => checkList(list));
  const isAnimatedLast = stack.get(stackLists[stackLists.length - 1]).isAnimated;

  if (isAnimatedLast) {
    window.removeEventListener('scroll', handleAnimation);
  }
};

window.addEventListener('scroll', handleAnimation);
window.addEventListener('load', handleAnimation);
