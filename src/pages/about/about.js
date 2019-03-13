import 'normalize.css';
import '../common.scss';
import './about.scss';

import { initNavigationListeners } from '../../utilities/commonEvents';
import '../../components/enter_screen/enter_screen';

import mapboxgl from 'mapbox-gl';

console.log('about.js');
const aboutSection = document.querySelector('.about__main');

initNavigationListeners(aboutSection)


mapboxgl.accessToken = 'pk.eyJ1Ijoia29ub3ZhbG92YS1hbmFzdCIsImEiOiJjanI4M25ndzYwMTlzNDNydnFzaWN0Y3ZyIn0.-F8vqMHXpCl_iG9iVxjADQ';
const map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/konovalova-anast/cjt6wtb412ghs1fjwii2ghisf',
    center: [37.409607, 55.759663],
    zoom: 10
});

const div = document.createElement('div');
div.className = 'map__marker';
const marker = new mapboxgl.Marker({
    element: div,
    anchor: 'bottom'
});
marker.setLngLat([37.645701, 55.859663]);
marker.addTo(map);
