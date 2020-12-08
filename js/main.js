var elSiteHeader = document.querySelector('.site-header');
var elSiteHeaderToggler = elSiteHeader.querySelector('.menu-btn');

elSiteHeaderToggler.addEventListener('click', function () {
  elSiteHeader.classList.toggle('site-header--open');
});