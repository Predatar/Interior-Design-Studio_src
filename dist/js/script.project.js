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
});
