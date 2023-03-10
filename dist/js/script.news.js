window.addEventListener('DOMContentLoaded', () => {
    const news = document.querySelector('.news__wrapper');
    const newsGrid = new Isotope(news, {
        itemSelector: '.new-item',
        masonry: {
            fitWidth: true,
            gutter: 8,
            columnWidth: '.news__item__slim'
        }
    });

    const filterBtn = document.querySelector('.heading__select');
    const filterItems = document.querySelectorAll('.heading__select-item');

    function arrangeProjects(filter) {
        newsGrid.arrange({ filter });
    }

    filterItems[0].classList.add('heading__select-item__active');

    filterBtn.addEventListener('click', ({ target }) => {
        if (!target.classList.contains('heading__select')) {
            filterItems.forEach(elem => {
                elem.classList.contains('heading__select-item__active')
                    ? elem.classList.remove('heading__select-item__active')
                    : null;
            });
            target.classList.add('heading__select-item__active');
            const filter = target.dataset.filter;
            arrangeProjects(filter === '*' ? '' : `[data-filter="${filter}"]`);
        }
    });

    const dropDownMenu = document.querySelector('.dropdown__select');
    const dropDownMenuSelect = document.querySelector('.dropdown__select span');
    const dropDownWrapper = document.querySelector('.dropdown__wrapper');
    const dropDownItems = document.querySelectorAll('.dropdown__item');

    dropDownMenu.addEventListener('click', () => {
        dropDownWrapper.classList.toggle('dropdown__wrapper__active');
    });
    dropDownWrapper.addEventListener('click', e => {
        const filter = e.target.dataset.filter;
        if (filter == '*') {
            dropDownMenuSelect.innerHTML = 'All';
        } else if (filter == 'Advice') {
            dropDownMenuSelect.innerHTML = filter + '...';
        } else {
            dropDownMenuSelect.innerHTML = filter;
        }
        dropDownItems.forEach(elem => {
            elem.classList.remove('dropdown__item__active');
        });
        e.target.classList.add('dropdown__item__active');
        if (filter) {
            arrangeProjects(filter === '*' ? '' : `[data-filter="${filter}"]`);
        }
        dropDownWrapper.classList.toggle('dropdown__wrapper__active');
    });
});
