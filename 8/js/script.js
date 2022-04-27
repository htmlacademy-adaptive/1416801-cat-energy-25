let navMain = document.querySelector('.main-header__navigation');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-header--nojs');
navToggle.classList.remove('main-header__toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header--closed') && navToggle.classList.contains('main-header__toggle--closed')) {
    navMain.classList.remove('main-header--closed');
    navToggle.classList.remove('main-header__toggle--closed');
    navMain.classList.add('main-header--opened');
    navToggle.classList.add('main-header__toggle--opened');
  } else {
    navMain.classList.add('main-header--closed');
    navToggle.classList.add('main-header__toggle--closed');
    navMain.classList.remove('main-header--opened');
    navToggle.classList.remove('main-header__toggle--opened');
  }
});
