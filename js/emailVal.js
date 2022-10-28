document.addEventListener('DOMContentLoaded', () => {
  const inputEmail = document.getElementById('input-email');
  const inputSubmit = document.getElementById('input-submit');
  const errorMsg = document.getElementById('error-msg');

  inputSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (!inputEmail.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      inputEmail.classList.add('error');
      inputEmail.parentElement.classList.add('error');
      errorMsg.classList.remove('hide');
    } else {
      inputEmail.classList.remove('error');
      inputEmail.parentElement.classList.remove('error');
      errorMsg.classList.add('hide');
    }
  })
});