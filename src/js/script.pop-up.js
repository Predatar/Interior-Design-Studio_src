window.addEventListener('DOMContentLoaded', () => {
    const popUpBtn = document.querySelectorAll('#makeRequest');
    const exit = document.querySelector('.backdoor__btn');
    const backdoor = document.querySelector('.backdoor');
    const sidemenu = document.querySelector('.sidemenu');

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
            form.reset();
            warning.forEach(elem => {
                elem.innerHTML = '';
            });
        } else {
            hidePopup();
            document.body.classList.remove('overflow');
            form.reset();
            warning.forEach(elem => {
                elem.innerHTML = '';
            });
        }
    }

    popUpBtn.forEach(elem => {
        elem.addEventListener('click', showPopup);
    });
    exit.addEventListener('click', exitPopup);

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
    const warning = document.querySelectorAll('.warning');
    const personInfo = {};
    let isClick = false;

    name.addEventListener('input', e => {
        if (e.target.value.match(/[a-zA-Z]+/)) {
            personInfo.name = e.target.value;
            warning[0].style.color = 'green';
            warning[0].innerHTML = 'Correctly';
        } else {
            warning[0].style.color = 'red';
            warning[0].innerHTML = 'Enter the name correctly';
        }
    });
    lastName.addEventListener('input', e => {
        if (e.target.value.match(/[a-zA-Z]+/)) {
            personInfo.lastName = e.target.value;
            warning[1].style.color = 'green';
            warning[1].innerHTML = 'Correctly';
        } else {
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
    comment.addEventListener('change', e => {
        personInfo.comment = e.target.value;
    });
    radioSet.addEventListener('click', e => {
        personInfo.area = e.target.value;
        isClick = true;
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        isClick ? null : personInfo.area = document.querySelector('[checked="checked"]').value;
        console.log(personInfo);
    });
});
