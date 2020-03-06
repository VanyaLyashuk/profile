document.querySelector('.menu-icon-wrapper').onclick = function () {
  document.querySelector('.menu-icon-wrapper').classList.toggle('menu-icon-wrapper--active');
  document.querySelector('.menu-icon').classList.toggle('menu-icon--active');
  document.querySelector('.nav').classList.toggle('nav--active');
};


