const newsTarget = document.querySelectorAll('.news__item')!;
const infoTarget = document.querySelectorAll('.info-list__item')!;

    if(newsTarget){
        newsTarget.forEach((item, index) => {
            
            item.addEventListener('click', () => {
                infoTarget.forEach(item => {
                    item.classList.remove('info-list__item--active')
                })
                infoTarget[index].classList.add('info-list__item--active')
            })
        })
    }