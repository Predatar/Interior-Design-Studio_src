window.addEventListener('DOMContentLoaded', () => {
    const ourProject = document.querySelector('.our-project__projects');
    const ourProjectGrid = new Isotope(ourProject, {
        itemSelector: '.our-project__projects-item',
        masonry: {
            fitWidth: true,
            gutter: 8
        }
    });

    const filterBtn = document.querySelector('.heading__select');

    function arrangeProjects(filter) {
        ourProjectGrid.arrange({ filter });
    }

    filterBtn.addEventListener('click', e => {
        const filter = e.target.dataset.filter;
        if (filter) {
            arrangeProjects(`[data-filter="${filter}"]`);
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
        dropDownMenuSelect.innerHTML = filter;
        dropDownItems.forEach(elem => {
            elem.classList.remove('dropdown__item__active');
        })
        e.target.classList.add('dropdown__item__active');
        if (filter) {
            arrangeProjects(`[data-filter="${filter}"]`);
        }
        dropDownWrapper.classList.toggle('dropdown__wrapper__active');
    });
});
