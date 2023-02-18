window.addEventListener('DOMContentLoaded', () => {
    // * Main page, main section

    const mainSelectSpan = document.querySelector('.main__select span');
    const mainOptionItem = document.querySelectorAll('.main__option-item');

    mainOptionItem.forEach(elem => {
        elem.addEventListener('click', e => {
            mainSelectSpan.textContent = e.target.getAttribute('data-location');
            mainOptionItem.forEach(element => {
                element.classList.remove('main__option-item__active');
            });
            e.target.classList.add('main__option-item__active');
        });
    });

});