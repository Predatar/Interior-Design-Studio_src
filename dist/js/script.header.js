const header = document.querySelector('.header');
const isDarkTheme = header.classList.contains('header__dark');
const headerLogo = document.querySelector('.header__logo a img');

window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const burger = document.querySelector('.burger');
    const sidemenuTitle = document.querySelector('.hamburger__title');
    const sidemenu = document.querySelector('.sidemenu');
    const headerBurger = document.querySelector('.header__action-burger');

    hamburger.addEventListener('click', () => {
        burger.classList.toggle('burger__active');
        sidemenu.classList.toggle('show');
        sidemenuTitle.classList.toggle('hamburger__title__active');
        document.body.classList.toggle('overflow');
        headerBurger.classList.toggle('header__action-burger__active');

        if(!header.classList.contains('header__fixed')) {
            if (isDarkTheme) {
                if (header.classList.contains('header__dark')) {
                    header.classList.remove('header__dark');
                    headerLogo.src = 'icons/Logo.svg';
                } else {
                    header.classList.add('header__dark');
                    headerLogo.src = 'icons/Logo-dark.svg';
                }
            } else {
                return;
            }
        }
    });
    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('header__action-burger__active');
        sidemenu.classList.toggle('show');
        document.body.classList.toggle('overflow');
        burger.classList.toggle('burger__active');
        sidemenuTitle.classList.toggle('hamburger__title__active');

        if(!header.classList.contains('header__fixed')) {
            if (isDarkTheme) {
                if (header.classList.contains('header__dark')) {
                    header.classList.remove('header__dark');
                    headerLogo.src = 'icons/Logo.svg';
                } else {
                    header.classList.add('header__dark');
                    headerLogo.src = 'icons/Logo-dark.svg';
                }
            } else {
                return;
            }
        }
    });
});

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY >= 800) {
        if (!header.classList.contains('header__fixed')) {
            header.classList.add('header__fixed');
            if (!isDarkTheme) {
                header.classList.add('header__dark');
                headerLogo.src = 'icons/Logo-dark.svg';
            }
        }
        /* if(window.outerWidth >= 624){
            document.body.style = 'margin-top: 96px';
        } else {
            document.body.style = 'margin-top: 58px';
        } */

    }
    if (window.scrollY <= 800) {
        if (header.classList.contains('header__fixed')) {
            header.classList.remove('header__fixed');
            document.body.style = 'margin-top: 0';
            if (!isDarkTheme) {
                header.classList.remove('header__dark');
                headerLogo.src = 'icons/Logo.svg';
            }
        }
    }
});
