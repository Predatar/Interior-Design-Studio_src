const ourProject = document.querySelector('.our-project__projects');

const ourProjectGrid = new Isotope(ourProject, {
    itemSelector: '.our-project__projects-item',
    masonry: {
        fitWidth: true,
        gutter: 8
    }
});

const filterBtn = document.querySelector('.heading__select');

filterBtn.addEventListener('click', e => {
    switch (e.target.dataset.filter) {
        case 'House':
            ourProjectGrid.arrange({ filter: '[data-filter = "House"]' });
            break;
        case 'Apartments':
            ourProjectGrid.arrange({ filter: '[data-filter = "Apartments"]' });
            break;
        case 'Commerce':
            ourProjectGrid.arrange({ filter: '[data-filter = "Commerce"]' });
            break;
        case 'Architecture':
            ourProjectGrid.arrange({ filter: '[data-filter = "Architecture"]' });
            break;
        default:
            break;
    }
});
