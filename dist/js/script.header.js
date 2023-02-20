window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const headerLogo = document.querySelector('.header__logo a img');
    const isDarkTheme = header.classList.contains('header__dark');
    const hamburger = document.querySelector('.hamburger');
    const burger = document.querySelector('.burger');
    const sidemenuTitle = document.querySelector('.hamburger__title');
    const sidemenu = document.querySelector('.sidemenu');
    const headerBurger = document.querySelector('.header__action-burger');

    const toggleMenu = () => {
        burger.classList.toggle('burger__active');
        sidemenu.classList.toggle('show');
        sidemenuTitle.classList.toggle('hamburger__title__active');
        document.body.classList.toggle('overflow');
        headerBurger.classList.toggle('header__action-burger__active');

        if (isDarkTheme) {
            header.classList.toggle('header__dark');
            headerLogo.src = header.classList.contains('header__dark')
                ? 'icons/Logo-dark.svg'
                : 'icons/Logo.svg';
        } else {
            return;
        }
    };

    hamburger.addEventListener('click', toggleMenu);
    headerBurger.addEventListener('click', toggleMenu);

    // * ---------------------------------------

    let lastScroll = 0;
    const scrollPosition = () => {
        return window.pageYOffset || document.documentElement.scrollTop;
    };

    const containHide = () => {
        return header.classList.contains('header__hide');
    };

    window.addEventListener('scroll', () => {
        console.log('scroll');
        if (scrollPosition() > lastScroll && !containHide()) {
            header.classList.add('header__hide');
        } else if (scrollPosition() < lastScroll && containHide()) {
            header.classList.remove('header__hide');
            header.classList.add('header__dark');
            headerLogo.src = header.classList.contains('header__dark')
                ? 'icons/Logo-dark.svg'
                : 'icons/Logo.svg';
            header.classList.add('header__show');
        }

        if (scrollPosition() < 50) {
            if (!header.classList.contains('header__dark')) {
                header.classList.remove('header__dark');
                headerLogo.src = header.classList.contains('header__dark')
                    ? 'icons/Logo-dark.svg'
                    : 'icons/Logo.svg';
            }
            header.classList.remove('header__show');
        }

        lastScroll = scrollPosition();
    });
});
