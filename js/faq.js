document.addEventListener('DOMContentLoaded', () => {
  const imgArrows = document.getElementsByClassName('img-arrow');
  
  for (let i = 0; i < imgArrows.length; i++) {
    imgArrows[i].addEventListener('click', (e) => {
      e.preventDefault();

      if (e.currentTarget.classList.contains('open')) {
        e.currentTarget.parentElement.parentElement.children[1].classList.add('hide');
        e.currentTarget.parentElement.classList.remove('open');
        e.currentTarget.classList.remove('open');
      } else {
        e.currentTarget.parentElement.parentElement.children[1].classList.remove('hide');
        e.currentTarget.parentElement.classList.add('open');
        e.currentTarget.classList.add('open');
      }
    });
  }
});