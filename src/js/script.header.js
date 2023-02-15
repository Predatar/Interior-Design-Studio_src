const hamburger = document.querySelector('.hamburger');
const burger = document.querySelector('.burger');
const sidemenuTitle = document.querySelector('.hamburger__title');
const sidemenu = document.querySelector('.sidemenu');
const headerBurger = document.querySelector('.header__action-burger')

hamburger.addEventListener('click', () => {
    burger.classList.toggle('burger__active');
    sidemenu.classList.toggle('show');
    sidemenuTitle.classList.toggle('hamburger__title__active')
    document.body.classList.toggle('overflow');
    headerBurger.classList.toggle('header__action-burger__active')
});
headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('header__action-burger__active');
    sidemenu.classList.toggle('show');
    document.body.classList.toggle('overflow');
    burger.classList.toggle('burger__active');
    sidemenuTitle.classList.toggle('hamburger__title__active')
});
