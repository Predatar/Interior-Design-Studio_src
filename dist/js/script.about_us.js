window.addEventListener('DOMContentLoaded', () => {
    const sliderNumberFirst = document.querySelector('.slider__number');
    const btnNext = document.querySelector('.slider-button-next');
    const btnPrev = document.querySelector('.slider-button-prev');
    const scrollbarDrag = document.querySelector('.slider-scrollbar-drag');
    const mas = [];
    mas.push(0);

    btnPrev.style.opacity = '0';
    btnPrev.style.cursor = 'default';

    const swiper = new Swiper('.swiper', {
        spaceBetween: 12,
        slidesPerView: 'auto',
        grabCursor: true,
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev'
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
