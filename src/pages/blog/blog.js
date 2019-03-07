import 'normalize.css';
import '../common.scss';
import './blog.scss';

import { initNavigationListeners } from '../../utilities/commonEvents';

console.log('blog.js');
const blogSection = document.querySelector('.blog');
const sidebar = document.querySelector('.sidebar');
const showSidebarButton = document.querySelector('#showSidebar');
const maincontent = document.querySelector('.maincontent');

initNavigationListeners(blogSection);

window.addEventListener('scroll', e => {
    const blogCoords = blogSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sidebarBottom = blogCoords.bottom - windowHeight;

    if(blogCoords.top <= 0){
        sidebar.classList.add('blog__sidebar--fixed');
    } else if (blogCoords.top > 0) {
        sidebar.classList.remove('blog__sidebar--fixed', 'blog__sidebar--visible');
    };
    
    if(sidebarBottom <= 0){
        sidebar.style.bottom = `${Math.abs(sidebarBottom) + 0.5}px`
    } else {
        sidebar.style.bottom = '0px';
    }
});

showSidebarButton.addEventListener('click', e => {
    sidebar.classList.toggle('blog__sidebar--visible')
})