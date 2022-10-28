document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const headerLogo = document.getElementById('header-logo');
  const nav = document.querySelector('nav');
  const imgMenuOpen = document.getElementById('img-menu-open');
  const imgMenuClose = document.getElementById('img-menu-close');

  imgMenuOpen.addEventListener('click', () => {
    header.classList.add('menu-open');
    headerLogo.classList.add('menu-open');
    nav.classList.remove('hide');
    imgMenuOpen.classList.add('hide');
    imgMenuClose.classList.remove('hide');
  });

  imgMenuClose.addEventListener('click', () => {
    header.classList.remove('menu-open');
    headerLogo.classList.remove('menu-open');
    nav.classList.add('hide');
    imgMenuOpen.classList.remove('hide');
    imgMenuClose.classList.add('hide');
  });
});