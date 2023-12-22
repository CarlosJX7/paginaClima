const inputCheck = document.querySelector('.input__check');
inputCheck.addEventListener('click', function() {
  if (this.checked) {
    document.body.style.background = 'linear-gradient(to bottom, #24243e, #302b63, #0f0c29)';
  } else {
    document.body.style.background = 'linear-gradient(to bottom, #2F80ED, #56CCF2)';
  }
});
