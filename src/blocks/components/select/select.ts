const select = document?.querySelector('.select')!;
const list = document?.querySelector('.select__list')!;
const listItem = list?.querySelector('li')!;

select?.addEventListener('click', () => {
    list?.classList.toggle('is-active');
})

window.addEventListener('click', e => { 
    const target = e.target as Element; 
    if (!target.closest('.select__list') && !target.closest('.select')) { 
      list.classList.remove('is-active');
    }
  })
  