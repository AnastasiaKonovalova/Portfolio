export class ResponseAlert {
  showModal(text) {
    this.modalText.textContent = text;
    this.modal.classList.add(this.MODAL_VISIBLE_CLASS);
  }

  init() {
    this.closeModalButton = document.querySelector('.modal__button');
    this.MODAL_VISIBLE_CLASS = 'modal__wrapper--visible';
    this.modal = document.querySelector('.modal__wrapper');
    this.modalText = document.querySelector('.modal__text');

    this.closeModalButton.addEventListener('click', e => {
      this.modal.classList.remove(this.MODAL_VISIBLE_CLASS);
    });
  }
}
