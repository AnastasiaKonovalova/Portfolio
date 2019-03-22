import 'normalize.css';
import '../common.scss';
import './blog.scss';

import { initNavigationListeners } from '../../utilities/commonEvents';
import '../../components/enter_screen/enter_screen';

console.log('blog.js');

const blogSection = document.querySelector('.blog');
const sidebar = document.querySelector('.sidebar');
const showSidebarButton = document.querySelector('#showSidebar');

const [...headers] = document.querySelectorAll('.headers__item');
const [...posts] = document.querySelectorAll('.posts__item');

const postsMap = new WeakMap(
  posts.map((post, index) => [post, headers[index]])
);

const manageHeadersHighlight = () => {
  let currentPost;
  if (window.innerWidth <= 768) {
    currentPost = document.elementFromPoint(window.innerWidth - 35, window.innerHeight / 3);
  } else {
    currentPost = document.elementFromPoint(window.innerWidth - 120, window.innerHeight / 3);
  }

  if (currentPost.classList.contains('posts__item')) {
    const currentHeader = postsMap.get(currentPost);

    headers.forEach(header => header.classList.remove('headers__item--active'));
    currentHeader.classList.add('headers__item--active');
  }
};
const manageSidebarGeometry = () => {
  const blogCoords = blogSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const sidebarBottom = blogCoords.bottom - windowHeight;

  if (blogCoords.top <= 0) {
    sidebar.classList.add('blog__sidebar--fixed');
  } else if (blogCoords.top > 0) {
    sidebar.classList.remove('blog__sidebar--fixed', 'blog__sidebar--visible');
  };

  if (sidebarBottom <= 0) {
    sidebar.style.bottom = `${Math.abs(sidebarBottom) + 1}px`;
  } else {
    sidebar.style.bottom = '0px';
  };
};

const swipe = () => {
  let startX, endX, distantion;
  const minMove = 100;

  window.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  window.addEventListener('touchmove', e => {
    e.preventDefault();
  });
  window.addEventListener('touchend', e => {
    endX = e.changedTouches[0].clientX;
    distantion = startX - endX;

    if (Math.abs(distantion) > minMove) {
      if (distantion > 0) {
        sidebar.classList.remove('blog__sidebar--visible');
      } else {
        if (!sidebar.classList.contains('blog__sidebar--fixed')) {
          return;
        };
        sidebar.classList.add('blog__sidebar--visible');
      }
    }
  });
};
swipe();
initNavigationListeners(blogSection);

window.addEventListener('scroll', e => {
  manageHeadersHighlight();
  manageSidebarGeometry();
});

showSidebarButton.addEventListener('click', e => {
  sidebar.classList.toggle('blog__sidebar--visible');
});
