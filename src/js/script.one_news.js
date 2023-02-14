window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.mySwiper', {
        direction: 'horizontal',
        spaceBetween: 26,
        slidesPerView: "auto",
        grabCursor: true,
        breakpoints: {
            1024: {
                spaceBetween: 48
            },
            768: {
                spaceBetween: 40
            },
            624: {
                spaceBetween: 26
            }
          }
    })
})