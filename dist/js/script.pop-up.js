window.addEventListener('DOMContentLoaded', () => {
    const popUpBtn = document.querySelectorAll('#makeRequest');
    const exit = document.querySelector('.backdoor__btn');
    const backdoor = document.querySelector('.backdoor');
    const sidemenu = document.querySelector('.sidemenu');

    popUpBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            backdoor.classList.remove('hide');
            document.body.classList.add('overflow');
        });
    });
    exit.addEventListener('click', () => {
        if (sidemenu.classList.contains('show')) {
            backdoor.classList.add('hide');
        } else {
            backdoor.classList.add('hide');
            document.body.classList.remove('overflow');
        }
    });
});
