const selectTarget = document.querySelectorAll('.select')!;

if(selectTarget) {
    selectTarget.forEach(item => {
        item.addEventListener('click', event => {
            console.log(event.target)
            item.children[0].classList.toggle('is-active')
        })
    })
}