export const smoothScrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const setupSmoothScrollLinks = () => {
  const links = document.querySelectorAll('a[href^="#"], button[data-scroll]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const htmlLink = link as HTMLElement;
      const target = link instanceof HTMLButtonElement
        ? htmlLink.dataset.scroll
        : link.getAttribute('href')?.slice(1);

      if (target) {
        e.preventDefault();
        smoothScrollToElement(target);

        if (htmlLink.dataset.ga && (window as any).gtag) {
          (window as any).gtag('event', htmlLink.dataset.ga);
        }
      }
    });
  });
};

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', setupSmoothScrollLinks);
}