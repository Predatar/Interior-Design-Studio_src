const trailImg = document.querySelectorAll('.trail__group-item');

trailImg.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        elem.classList.add('trail__group-item__active');
    });
    elem.addEventListener('mouseleave', () => {
        elem.classList.remove('trail__group-item__active');
    });
});
