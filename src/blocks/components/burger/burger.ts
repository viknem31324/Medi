const burger = document?.querySelector('.burger');
const nav = document?.querySelector('.header__nav');
const content = document?.querySelector('.content-visibl');
const navItem = nav?.querySelectorAll('a');

burger?.addEventListener('click', () => {
  content?.classList.toggle('content-visibl--active');
  document.body.classList.toggle('stop-scrol');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav-visible');
});

content?.addEventListener('click', () => {
  content?.classList.remove('content-visibl--active');
  document.body.classList.remove('stop-scrol');
  burger?.classList.remove('burger--active');
  nav?.classList.remove('nav-visible');
});

navItem?.forEach((item) => {
  item.addEventListener('click', () => {
    content?.classList.remove('content-visibl--active');
    document.body.classList.remove('stop-scrol');
    burger?.classList.remove('burger--active');
    nav?.classList.remove('nav-visible');
  });
});
