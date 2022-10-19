const newsItem = document?.querySelectorAll('.news__item')!;
const infoItem = document?.querySelectorAll('.info-list__item')!;

newsItem?.forEach((item1, index) => {
  item1.addEventListener('click', () => {
    newsItem?.forEach((item) => {
        item.classList.remove('news__item--active');
      });
    infoItem?.forEach((item2) => {
      item2.classList.remove('info-list__item--active');
    });
    item1.classList.add('news__item--active');
    infoItem[index].classList.add('info-list__item--active');
  });
});
