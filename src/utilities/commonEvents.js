export const initNavigationListeners = (firstSection) => {
    const wrapper = document.querySelector('#wrapper');
    const showNavButton = document.querySelector('#navButton');
    const closeNavButton = document.querySelector('#closeNavButton');
    const scrollDownButton = document.querySelector('#scrollDownButton');
    const fullscreenNav = document.querySelector('.fullscreen');


    const columnLeft = document.querySelector('#columnLeft');
    const columnRight = document.querySelector('#columnRight');
    const navigation = document.querySelector('#menuNav');

    const showNavDisplay = () => {
        // fullscreenNav.classList.add('fullscreen--visible');
        columnLeft.classList.add('menu__column--left--visible');
        columnRight.classList.add('menu__column--right--visible');
        closeNavButton.classList.add('menu__button-close--visible');
        navigation.classList.add('menu__nav--visible');
        // wrapper.style.paddingRight = '16px';
        document.body.style.overflow = 'hidden';
    };
    const hideNavDisplay = () => {
        // fullscreenNav.classList.remove('fullscreen--visible');
        columnLeft.classList.remove('menu__column--left--visible');
        columnRight.classList.remove('menu__column--right--visible');
        closeNavButton.classList.remove('menu__button-close--visible');
        navigation.classList.remove('menu__nav--visible');
        // wrapper.style.paddingRight = '0';
        document.body.style.overflow = 'auto';
    };
    
    showNavButton.addEventListener('click', showNavDisplay);
    closeNavButton.addEventListener('click', hideNavDisplay);
    scrollDownButton.addEventListener('click', e => {
        firstSection.scrollIntoView()
    })
}


// menu__button-close--visible