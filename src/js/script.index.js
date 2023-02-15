window.addEventListener('DOMContentLoaded', () => {
    // * Main page, main section

    const mainSelectSpan = document.querySelector('.main__select span');
    const mainOptionItem = document.querySelectorAll('.main__option-item');

    const popUpBtn = document.querySelectorAll('#makeRequest');
    const exit = document.querySelector('.backdoor__btn');
    const backdoor = document.querySelector('.backdoor');

    mainOptionItem.forEach(elem => {
        elem.addEventListener('click', e => {
            mainSelectSpan.textContent = e.target.getAttribute('data-location');
            mainOptionItem.forEach(element => {
                element.classList.remove('main__option-item__active');
            });
            e.target.classList.add('main__option-item__active');
        });
    });

    popUpBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            backdoor.classList.remove('hide');
            document.body.classList.add('overflow');
        });
    });
    exit.addEventListener('click', () => {
        backdoor.classList.add('hide');
        document.body.classList.remove('overflow');
    });
});
