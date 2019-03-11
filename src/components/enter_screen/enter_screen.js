const centralInfo = document.querySelector('.author');
const bgText = document.querySelector('.background__text');

window.addEventListener('scroll', e => {
    const scroll = window.pageYOffset;
    centralInfo.style.transform = `translateY(-${scroll / 3}px)`;
    bgText.style.transform = `translate(-50%, -${scroll / 10}px)`;

})
