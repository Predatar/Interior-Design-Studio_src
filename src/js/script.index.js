window.addEventListener('DOMContentLoaded', () => {
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

    const swiper = new Swiper('.swiper', {
        grabCursor: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev'
        },
        scrollbar: {
            el: '.slider-scrollbar'
        },
        autoplay: {
            delay: 5000
        }
    });
});
