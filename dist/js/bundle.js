/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener('DOMContentLoaded', () => {
  // * Main page, main section

  const mainSelectSpan = document.querySelector('.main__select span');
  const mainOptionItem = document.querySelectorAll('.main__option-item');
  mainOptionItem.forEach(elem => {
    elem.addEventListener('click', e => {
      mainSelectSpan.textContent = e.target.getAttribute('data-location');
      mainOptionItem.forEach(element => {
        element.classList.remove('main__option-item__active');
      });
      e.target.classList.add('main__option-item__active');
    });
  });

  // * Trail

  const trailImg = document.querySelectorAll('.trail__group-item');
  trailImg.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
      elem.classList.add('trail__group-item__active');
    });
    elem.addEventListener('mouseleave', () => {
      elem.classList.remove('trail__group-item__active');
    });
  });

  // * out project

  /* const ourProjectItem = document.querySelectorAll('.our-project__projects-item');
  window.addEventListener('resize', () => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 1035) {
          ourProjectItem.forEach(elem => {
              elem.addEventListener('click', e => {
                  console.log(e.target);
                  elem.preventDefault();
              });
          });
      }
  }); */
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map