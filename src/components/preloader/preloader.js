import './preloader.scss';

class Preloader {
  constructor (images, svg, bgImages, textContainer) {
    this.allImages = [...images, ...svg, ...this._createMockImagesFromBg(bgImages)];
    this.textContainer = textContainer;
  }

  init () {
    this.allImages.forEach(img => {
      img.addEventListener('load', this._changeProgress(this.allImages));
    });
  }

  _changeProgress (imgArr) {
    return e => {
      const percent = +this.textContainer.textContent;
      this.textContainer.textContent = percent >= 98 ? '100' : `${Math.round(percent + (100 / imgArr.length))}`;
    };
  }

  _createMockImagesFromBg ([...blocks]) {
    const bgImages = blocks.reduce((accum, block) => {
      const bgURL = window.getComputedStyle(block).backgroundImage;
      if (!bgURL) {
        return accum;
      };

      if (bgURL !== 'none') {
        const mockImg = new Image();
        mockImg.src = bgURL.slice(5, -2);
        return [...accum, mockImg];
      } else { return accum; }
    }, []);
    return bgImages;
  }
};

const wrapper = document.querySelector('#wrapper');
const enterSection = document.querySelector('.enter');
const preloaderContainer = document.querySelector('#preloader');

window.addEventListener('load', e => {
  if (preloaderContainer.parentElement === wrapper) {
    wrapper.removeChild(preloaderContainer);
  } else {
    enterSection.removeChild(preloaderContainer);
  }
});

document.addEventListener('DOMContentLoaded', e => {
  const images = document.getElementsByTagName('img');
  const svg = document.getElementsByTagName('svg');
  const blocksWithBgImages = document.querySelectorAll('.has_bg_image');
  const loadProgress = document.querySelector('.preloader__text');

  const preloader = new Preloader(images, svg, blocksWithBgImages, loadProgress);
  preloader.init();
});
