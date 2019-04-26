export const initNavigationListeners = firstSection => {
  const showNavButton = document.querySelector('#navButton');
  const closeNavButton = document.querySelector('#closeNavButton');
  const scrollDownButton = document.querySelector('#scrollDownButton');

  const columnLeft = document.querySelector('#columnLeft');
  const columnRight = document.querySelector('#columnRight');
  const navigation = document.querySelector('#menuNav');

  const showNavDisplay = () => {
    columnLeft.classList.add('menu__column--left--visible');
    columnRight.classList.add('menu__column--right--visible');
    closeNavButton.classList.add('menu__button--visible');
    navigation.classList.add('menu__nav--visible');
    showNavButton.classList.add('header__hamburger--hidden');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  };
  const hideNavDisplay = () => {
    columnLeft.classList.remove('menu__column--left--visible');
    columnRight.classList.remove('menu__column--right--visible');
    closeNavButton.classList.remove('menu__button--visible');
    navigation.classList.remove('menu__nav--visible');
    showNavButton.classList.remove('header__hamburger--hidden');
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
  };

  showNavButton.addEventListener('click', showNavDisplay);
  closeNavButton.addEventListener('click', hideNavDisplay);
  scrollDownButton.addEventListener('click', e => {
    firstSection.scrollIntoView();
  });
};
