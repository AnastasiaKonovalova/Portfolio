export const initNavigationListeners = (firstSection) => {
    const showNavButton = document.querySelector('#navButton');
    const closeNavButton = document.querySelector('#closeNavButton');
    const scrollDownButton = document.querySelector('#scrollDownButton');
    const fullscreenNav = document.querySelector('.fullscreen');

    const toggleNavDisplay = () => {
        fullscreenNav.classList.toggle('fullscreen--visible');
    };
    
    showNavButton.addEventListener('click', toggleNavDisplay);
    closeNavButton.addEventListener('click', toggleNavDisplay);
    scrollDownButton.addEventListener('click', e => {
        firstSection.scrollIntoView()
    })
}
