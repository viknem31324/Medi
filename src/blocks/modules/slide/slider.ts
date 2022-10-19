import Swiper, { Navigation, Pagination } from 'swiper';

const arr: any = ["Комплексные процедуры", "Центр обучения", "VIP клиентам"];

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (arr[index]) + '</span>';
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
