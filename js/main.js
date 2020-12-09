// Find an element with a class "site-header" by announcing it using var
var elSiteHeader = document.querySelector('.site-header');
// Find an element with a class "menu-btn" by announcing it using var
var elSiteHeaderToggler = elSiteHeader.querySelector('.menu-btn');
//Js listens to the button with "menu-btn" class and when it is clicked it toggles the "site-header--open" class of the site-header
elSiteHeaderToggler.addEventListener('click', function () {
  elSiteHeader.classList.toggle('site-header--open');
});