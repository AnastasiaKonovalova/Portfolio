import { debounce } from '../../utilities/helpers';

const WORKS = [
  {
    id: 1,
    name: 'школа онлайн образования школа онлайн образования',
    techs: 'HTML, CSS',
    url: '#',
    img: './img/work-1.png'
  },
  {
    id: 2,
    name: 'itLoft',
    techs: 'HTML, JS',
    url: '#',
    img: './img/work-2.png'
  },
  {
    id: 3,
    name: 'smth',
    techs: 'CSS, JS',
    url: '#',
    img: './img/work-3.png'
  }
];
const MAIN_ACTIVE_CLASS = 'works__img--active';
const SLIDE_ACTIVE_CLASS = 'slider__img--active';
const SLIDE_UP_CLASS = 'slider__img--up';
const SLIDE_DOWN_CLASS = 'slider__img--down';

const slideTitle = document.querySelector('.works__title');
const slideTechs = document.querySelector('.works__techs');
const slideLink = document.querySelector('.works__link');

const slideDown = document.querySelector('#slideDown');
const slideUp = document.querySelector('#slideUp');

const [...leftSlides] = document.querySelectorAll('.slider__img--left');
const [...rightSlides] = document.querySelectorAll('.slider__img--right');
const [...mainSlides] = document.querySelectorAll('.works__img');

const mainSlideInfo = new WeakMap(
  mainSlides.map((slide, index) => [slide, WORKS[index]])
);

const manageMainSlide = (direction) => {
  const activeMain = mainSlides.find(slide => slide.classList.contains(MAIN_ACTIVE_CLASS));
  let nextActiveMain;
  switch (direction) {
  case 'down':
    nextActiveMain = activeMain.previousElementSibling || mainSlides[mainSlides.length - 1];
    break;

  case 'up':
    nextActiveMain = activeMain.nextElementSibling || mainSlides[0];
    break;

  default:
    return;
  }
  activeMain.classList.remove(MAIN_ACTIVE_CLASS);
  nextActiveMain.classList.add(MAIN_ACTIVE_CLASS);

  const slideInfo = mainSlideInfo.get(nextActiveMain);
  slideTitle.textContent = slideInfo.name;
  slideTechs.textContent = slideInfo.techs;
  slideLink.href = slideInfo.url;
};

const manageActiveClasses = (current, next, direction) => {
  current.classList.remove(SLIDE_ACTIVE_CLASS);
  current.classList.add(direction === 'down' ? SLIDE_DOWN_CLASS : SLIDE_UP_CLASS);
  setTimeout(() => {
    current.classList.remove(direction === 'down' ? SLIDE_DOWN_CLASS : SLIDE_UP_CLASS);
    current.classList.add(direction === 'down' ? SLIDE_UP_CLASS : SLIDE_DOWN_CLASS);
  }, 500);

  next.classList.add(SLIDE_ACTIVE_CLASS);
  next.classList.remove(direction === 'down' ? SLIDE_UP_CLASS : SLIDE_DOWN_CLASS);
};

const manageSmallSlides = (direction) => {
  const activeLeft = leftSlides.find(slide => slide.classList.contains(SLIDE_ACTIVE_CLASS));
  const activeRight = rightSlides.find(slide => slide.classList.contains(SLIDE_ACTIVE_CLASS));
  let nextActiveLeft, nextActiveRight;

  switch (direction) {
  case 'down':
    nextActiveLeft = activeLeft.previousElementSibling || leftSlides[leftSlides.length - 1];
    nextActiveRight = activeRight.previousElementSibling || rightSlides[leftSlides.length - 1];
    break;

  case 'up':
    nextActiveLeft = activeLeft.nextElementSibling || leftSlides[0];
    nextActiveRight = activeRight.nextElementSibling || rightSlides[0];
    break;

  default:
    return;
  }

  manageActiveClasses(activeLeft, nextActiveLeft, 'down');
  manageActiveClasses(activeRight, nextActiveRight, 'up');
};

const debouncedManageMainSlide = debounce(250, manageMainSlide);
const debouncedManageSmallSlides = debounce(250, manageSmallSlides);

slideDown.addEventListener('click', e => {
  e.preventDefault();
  console.log('down');

  debouncedManageMainSlide('down');
  debouncedManageSmallSlides('down');
});

slideUp.addEventListener('click', e => {
  e.preventDefault();
  console.log('up');

  debouncedManageMainSlide('up');
  debouncedManageSmallSlides('up');
});
