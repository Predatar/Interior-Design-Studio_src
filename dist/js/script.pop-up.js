function showPopup() {
    backdoor.classList.remove('hide');
    document.body.classList.add('overflow');
}

function hidePopup() {
    backdoor.classList.add('hide');
    document.body.classList.remove('overflow');
}

function exitPopup() {
    if (sidemenu.classList.contains('show')) {
        hidePopup();
    } else {
        hidePopup();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const popUpBtn = document.querySelectorAll('#makeRequest');
    const exit = document.querySelector('.backdoor__btn');
    const backdoor = document.querySelector('.backdoor');
    const sidemenu = document.querySelector('.sidemenu');

    popUpBtn.forEach(elem => {
        elem.addEventListener('click', showPopup);
    });
    exit.addEventListener('click', exitPopup);
});
