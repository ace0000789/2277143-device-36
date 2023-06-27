let linkDelivery = document.querySelector('.exclusive-delivery')
let modal = document.querySelector('.modal-container')
let modalClose = document.querySelector('.modal-close-button')

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
