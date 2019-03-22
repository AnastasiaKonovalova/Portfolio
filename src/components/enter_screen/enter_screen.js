import '../preloader/preloader';

const centralInfo = document.querySelector('.author');
const bgText = document.querySelector('.background__text');
const arrow = document.querySelector('.enter__arrow');

window.addEventListener('scroll', e => {
  const scroll = window.pageYOffset;
  arrow.style.transform = `translate(-50%, -${scroll / 8}px)`;
  centralInfo.style.transform = `translateY(-${scroll / 3}px)`;
  bgText.style.transform = `translate(-50%, -${scroll / 10}px)`;
});
