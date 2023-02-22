window.addEventListener('DOMContentLoaded', () => {
    const popUpBtn = document.querySelectorAll('#makeRequest');
    const exit = document.querySelector('.backdoor__btn');
    const backdoor = document.querySelector('.backdoor');
    const sidemenu = document.querySelector('.sidemenu');
    const popup = document.querySelector('.pop-up');
    const modal = document.querySelector('.modal__wrapper');
    const modalBtn = document.querySelector('.modal__btn');
    let timerID;

    function showPopup() {
        backdoor.classList.remove('hide');
        document.body.classList.add('overflow');
    }

    function hidePopup() {
        backdoor.classList.add('hide');
    }

    function exitPopup() {
        if (sidemenu.classList.contains('show')) {
            hidePopup();
        } else {
            hidePopup();
            document.body.classList.remove('overflow');
        }
        backdoor.classList.remove('backdoor__centered');
        popup.classList.remove('pop-up__hide');
        modal.classList.remove('modal__wrapper__active');
        form.reset();
        warning.forEach(elem => {
            elem.innerHTML = '';
        });
        inputs.forEach(elem => {
            elem.classList.contains('input__invalid')
                ? elem.classList.remove('input__invalid')
                : null;
        });
    }

    popUpBtn.forEach(elem => {
        elem.addEventListener('click', showPopup);
    });
    exit.addEventListener('click', exitPopup);

    modalBtn.addEventListener('click', () => {
        clearTimeout(timerID);
        form.reset();
        warning.forEach(elem => {
            elem.innerHTML = '';
        });
        inputs.forEach(elem => {
            elem.classList.contains('input__invalid')
                ? elem.classList.remove('input__invalid')
                : null;
        });
        backdoor.classList.remove('backdoor__centered');
        popup.classList.remove('pop-up__hide');
        modal.classList.remove('modal__wrapper__active');
    });

    // * Validation ------------------------------------

    const form = document.querySelector('.form');
    const name = document.querySelector('#name');
    const lastName = document.querySelector('#last_name');
    const phone = document.querySelector('#phone');
    const city = document.querySelector('#city');
    const email = document.querySelector('#email');
    const type = document.querySelector('#type');
    const comment = document.querySelector('#comment');
    const radioSet = document.querySelector('.form__container2-fieldset');
    const radioSet2 = document.querySelectorAll('.form__container3-fieldset');
    const file = document.querySelector('#file');
    const warning = document.querySelectorAll('.warning');
    const inputs = document.querySelectorAll('.input');
    const personInfo = {};

    name.addEventListener('input', e => {
        if (e.target.value.match(/^[a-zA-Z ]+$/)) {
            personInfo.name = e.target.value;
            warning[0].style.color = 'green';
            warning[0].innerHTML = 'Correctly';
        } else {
            e.target.value == ''
                ? e.target.classList.remove('input__invalid')
                : e.target.classList.add('input__invalid');
            warning[0].style.color = 'red';
            warning[0].innerHTML = 'Enter the name correctly';
        }
    });
    lastName.addEventListener('input', e => {
        if (e.target.value.match(/^[a-zA-Z ]+$/)) {
            personInfo.lastName = e.target.value;
            warning[1].style.color = 'green';
            warning[1].innerHTML = 'Correctly';
        } else {
            e.target.value == ''
                ? e.target.classList.remove('input__invalid')
                : e.target.classList.add('input__invalid');
            warning[1].style.color = 'red';
            warning[1].innerHTML = 'Enter the last name correctly';
        }
    });
    phone.addEventListener('input', e => {
        if (e.target.value.match(/^[0-9\-\+]{9,15}$/)) {
            personInfo.phone = e.target.value;
            warning[2].style.color = 'green';
            warning[2].innerHTML = 'Correctly';
        } else {
            e.target.value == ''
                ? e.target.classList.remove('input__invalid')
                : e.target.classList.add('input__invalid');
            warning[2].style.color = 'red';
            warning[2].innerHTML = 'Enter the telephone number correctly';
        }
    });
    city.addEventListener('input', e => {
        if (e.target.value.match(/[a-zA-Z]+/)) {
            personInfo.city = e.target.value;
            warning[3].style.color = 'green';
            warning[3].innerHTML = 'Correctly';
        } else {
            e.target.value == ''
                ? e.target.classList.remove('input__invalid')
                : e.target.classList.add('input__invalid');
            warning[3].style.color = 'red';
            warning[3].innerHTML = 'Enter the city correctly';
        }
    });
    email.addEventListener('input', e => {
        if (e.target.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            personInfo.email = e.target.value;
            warning[4].style.color = 'green';
            warning[4].innerHTML = 'Correctly';
        } else {
            e.target.value == ''
                ? e.target.classList.remove('input__invalid')
                : e.target.classList.add('input__invalid');
            warning[4].style.color = 'red';
            warning[4].innerHTML = 'Enter the email address correctly';
        }
    });
    type.addEventListener('input', e => {
        if (e.target.value == '') {
            warning[5].style.color = 'red';
            warning[5].innerHTML = 'Enter the email address correctly';
        } else {
            personInfo.type = e.target.value;
            warning[5].style.color = 'green';
            warning[5].innerHTML = 'Correctly';
        }
    });
    comment.addEventListener('input', e => {
        if(e.target.value != '') {
            e.target.classList.remove('input__comment')
            personInfo.comment = e.target.value;
        } else {
            e.target.classList.add('input__comment');
        }
    });
    radioSet.addEventListener('click', e => {
        personInfo.area = e.target.value;
    });
    radioSet2.forEach(elem => {
        elem.addEventListener('click', e => {
            personInfo.area = e.target.value;
        });
    });
    file.addEventListener('change', () => {
        if (file.files[0].size < 10485760) {
            warning[6].style.color = 'green';
            warning[6].innerHTML = 'Correctly';
            personInfo.file = file.files;
        } else {
            warning[6].style.color = 'red';
            warning[6].innerHTML = 'The downloaded file exceeds 10 MB';
        }
        personInfo.file = file.files;
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        console.log(personInfo);
        setTimeout(() => {
            backdoor.classList.add('backdoor__centered');
            popup.classList.add('pop-up__hide');
            modal.classList.add('modal__wrapper__active');
        }, 500);
        timerID = setTimeout(exitPopup, 5000);
    });
});
