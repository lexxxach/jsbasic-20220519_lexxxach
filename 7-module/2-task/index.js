import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  
  #elem = this.#getInnerElem()

  constructor() {
    //this.#elem = this.#getInnerElem()
  }

  open() {
    let elemNew = this.#elem
    let elemBody = document.querySelector('BODY')
    elemBody.classList.add('is-modal-open')
    let elemContainer = document.querySelector('.container')
    elemContainer.after(elemNew)

    let btnClose = elemNew.querySelector('.modal__close')
    
    /* удаление обработчика по ESC */
    btnClose.addEventListener('click', () => {
      this.#closeModal(elemNew)

      document.removeEventListener('keydown', this.#closeModalEsc)
    })

    /* ЗАкрытие модального окна */
    document.addEventListener('keydown', this.#closeModalEsc, { once: true })

  }

  setTitle(modalTitle) {
    let elemNew = this.#elem
    let elemModaTitle = elemNew.querySelector('.modal__title')
    elemModaTitle.textContent = modalTitle
  }

  /* Получение корневого эелемента */
  #getInnerElem() {
    let elem = createElement(
      `
      <!--Корневой элемент Modal-->
  <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
        </h3>
      </div>

      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>

  </div>`
    )




    return elem

  }

  setBody(elemWindow) {

    let modalBody = this.#elem.querySelector('.modal__body')
    modalBody.innerHTML = elemWindow.innerHTML

  }

  close() {
    let elModal = document.querySelector('.modal')
    this.#closeModal(elModal)
    document.removeEventListener('keydown', this.#closeModalEsc)
  }

  /* Закрытие модального окна по внутреннему методуи закрывающей кнопке */
  #closeModal(elemModal) {

    elemModal.remove()

  }

  /* Обработчик закрытия по ESC кнопке */
  #closeModalEsc(event) {

    let elemModal = document.querySelector('.modal')
    if (!elemModal) {
      return
    }

    if (event.code === 'Escape') {
      elemModal.remove()
    }
  }

}
