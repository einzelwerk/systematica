/* eslint-disable  */
import './modules/Sliders.ts';
import './modules/SetVariables.ts';
import './modules/Lightgallery.ts';
// eslint-disable-next-line import/no-extraneous-dependencies
import Alpine from 'alpinejs';

declare global {
  // eslint-disable-next-line
  interface Window {
    Alpine: unknown;
  }
}

window.Alpine = Alpine;

Alpine.start();



class Accordion {
  el: HTMLDetailsElement;
  summary: HTMLElement;
  content: HTMLElement;
  animation: Animation | null;
  isClosing: boolean;
  isExpanding: boolean;

  static accordions: Accordion[] = [];

  constructor(el: HTMLDetailsElement) {
    this.el = el;
    this.summary = el.querySelector('summary') as HTMLElement;
    this.content = el.querySelector('.content') as HTMLElement;

    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;

    this.summary.addEventListener('click', (e) => this.onClick(e));

    Accordion.accordions.push(this);
  }

  onClick(e: MouseEvent) {
    e.preventDefault();
    this.el.style.overflow = 'hidden';

    if (this.isClosing || !this.el.open) {
      this.open();
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }

  shrink() {
    this.isClosing = true;
    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = this.el.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 250,
        easing: 'ease-out',
      }
    );

    this.animation.onfinish = () => this.onAnimationFinish(false);
    this.animation.oncancel = () => (this.isClosing = false);
  }

  open() {
    Accordion.accordions.forEach((accordion) => {
      if (accordion !== this) {
        accordion.shrink();
      }
    });

    this.el.style.height = `${this.el.offsetHeight}px`;
    this.el.open = true;
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    this.isExpanding = true;
    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = this.el.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 250,
        easing: 'ease-out',
      }
    );

    this.animation.onfinish = () => this.onAnimationFinish(true);
    this.animation.oncancel = () => (this.isExpanding = false);
  }

  onAnimationFinish(open: boolean) {
    this.el.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.el.style.height = this.el.style.overflow = '';
  }
}

document.querySelectorAll('details').forEach((el) => {
  new Accordion(el as HTMLDetailsElement);
});
