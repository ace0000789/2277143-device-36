let linkDelivery = document.querySelector('.exclusive-delivery')
let modal = document.querySelector('.modal-container')
let modalClose = document.querySelector('.modal-close-button')

linkDelivery.addEventListener('click', function () {
    modal.classList.remove('modal-container-close');
});

modalClose.addEventListener('click', function () {
  modal.classList.add('modal-container-close');
});
