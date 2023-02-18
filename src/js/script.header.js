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

        if (!header.classList.contains('header__fixed')) {
            if (isDarkTheme) {
                header.classList.toggle('header__dark');
                headerLogo.src = header.classList.contains('header__dark')
                    ? 'icons/Logo-dark.svg'
                    : 'icons/Logo.svg';
            } else {
                return;
            }
        }
    };

    hamburger.addEventListener('click', toggleMenu);
    headerBurger.addEventListener('click', toggleMenu);

    window.addEventListener('scroll', () => {
        const shouldAddClass = window.scrollY >= 800;
        if (shouldAddClass && !header.classList.contains('header__fixed')) {
            header.classList.add('header__fixed');
            if (!isDarkTheme) {
                header.classList.add('header__dark');
                headerLogo.src = 'icons/Logo-dark.svg';
            }
        } else if (!shouldAddClass && header.classList.contains('header__fixed')) {
            header.classList.remove('header__fixed');
            document.body.style = 'margin-top: 0';
            if (!isDarkTheme) {
                header.classList.remove('header__dark');
                headerLogo.src = 'icons/Logo.svg';
            }
        }
    });
});
