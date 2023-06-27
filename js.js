let linkDelivery = document.querySelector('.exclusive-delivery')
let modal = document.querySelector('.modal-container')
let modalClose = document.querySelector('.modal-close-button')
let modalPlus = document.querySelector('.max-product')
let modalMinus = document.querySelector('.min-product')
let input = document.querySelector('.input-numder')

linkDelivery.addEventListener('click', function () {
    modal.classList.remove('modal-container-close');
});

modalClose.addEventListener('click', function () {
  modal.classList.add('modal-container-close');
});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    modal.classList.add('modal-container-close');
    }
});

modalPlus.addEventListener('click', function () {
  input.value++
});

modalMinus.addEventListener('click', function () {
  if(input.value >= 2) {
    input.value--
  }
});
