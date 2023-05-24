import Swiper, { Mousewheel, Navigation, Pagination } from 'swiper';
/* eslint-disable import/no-unresolved */
import 'swiper/css';

// import breakpoints from '../utils/MatchMedia';

class Sliders {
  static cases() {
    const root = document.querySelector('.js-cases-slider') as HTMLElement;
    const sliderInstance = new Swiper(root, {
      modules: [Mousewheel, Pagination],
      init: false,
      loop: true,
      slidesPerView: 2,
      loopedSlides: 18,
      centeredSlides: true,
      spaceBetween: 30,

      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },
    });

    sliderInstance.init();
  }

  static reviews() {
    const root = document.querySelector('.js-reviews-slider') as HTMLElement;
    const sliderInstance = new Swiper(root, {
      modules: [Mousewheel, Navigation],
      init: false,

      slidesPerView: 1,

      spaceBetween: 30,

      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },

      breakpoints: {
        768: {
          slidesPerView: 3,
        },
      },

      navigation: {
        prevEl: root.querySelector('.js-prev-slider') as HTMLElement,
        nextEl: root.querySelector('.js-next-slider') as HTMLElement,
      },
    });

    sliderInstance.init();
  }
}

function slidersInit() {
  Sliders.cases();
  Sliders.reviews();
}

document.addEventListener('DOMContentLoaded', () => {
  slidersInit();
});

window.addEventListener('resize', () => {
  setTimeout(() => {
    slidersInit();
  }, 1000);
});
