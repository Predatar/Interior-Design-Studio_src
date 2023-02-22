window.addEventListener('DOMContentLoaded', () => {
    const mainSelectSpan = document.querySelector('.main__select span');
    const mainOptionItem = document.querySelectorAll('.main__option-item');
    const sliderNumberFirst = document.querySelector('.slider__number');
    const btnNext = document.querySelector('.slider-button-next');
    const btnPrev = document.querySelector('.slider-button-prev');
    const scrollbarDrag = document.querySelector('.slider-scrollbar-drag');
    const mas = [];
    mas.push(0);

    btnPrev.style.opacity = '0';
    btnPrev.style.cursor = 'default';

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
        autoplay: {
            delay: 5000
        }
    });

    let scrollDragWidth = 100 / swiper.slides.length;

    function widthBar(size, length) {
        const n = size;
        for (i = 0; i < length; i++) {
            mas.push(mas[i] + n);
        }
        mas.shift();
    }

    function arrowDefault () {
        btnPrev.style.opacity = '1';
        btnNext.style.opacity = '1';
        btnPrev.style.cursor = 'pointer';
        btnNext.style.cursor = 'pointer';
    }

    widthBar(scrollDragWidth, swiper.slides.length);

    scrollbarDrag.style.width = `${mas[0]}%`;

    swiper.on('slideChange', () => {
        scrollbarDrag.style.width = `${mas[swiper.activeIndex]}%`;
        arrowDefault();
        if (swiper.activeIndex == 0) {
            btnPrev.style.opacity = '0';
            btnPrev.style.cursor = 'default';
        } else if (swiper.activeIndex == swiper.slides.length - 1) {
            btnNext.style.opacity = '0';
            btnNext.style.cursor = 'default';
        } else {
            arrowDefault();
        }
        sliderNumberFirst.innerHTML = `0${swiper.activeIndex + 1}`;
    });
});
