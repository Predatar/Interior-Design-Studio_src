window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        spaceBetween: 12,
        slidesPerView: 'auto',
        grabCursor: true,
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev'
        },
        scrollbar: {
            el: '.slider-scrollbar'
        }
    });
});
