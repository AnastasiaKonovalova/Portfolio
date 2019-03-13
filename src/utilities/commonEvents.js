export const initNavigationListeners = (firstSection) => {
    const showNavButton = document.querySelector('#navButton');
    const closeNavButton = document.querySelector('#closeNavButton');
    const scrollDownButton = document.querySelector('#scrollDownButton');
    const fullscreenNav = document.querySelector('.fullscreen');

    const showNavDisplay = () => {
        fullscreenNav.classList.add('fullscreen--visible');
        // document.body.style.overflow = 'hidden';
    };
    const hideNavDisplay = () => {
        fullscreenNav.classList.remove('fullscreen--visible');
        // document.body.style.overflow = 'auto';
    };
    
    showNavButton.addEventListener('click', showNavDisplay);
    closeNavButton.addEventListener('click', hideNavDisplay);
    scrollDownButton.addEventListener('click', e => {
        firstSection.scrollIntoView()
    })
}
