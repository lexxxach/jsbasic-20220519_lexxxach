import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.#getElem()
  }

  #getElem() {

    let elem = this.#innerElem()
    let btnL = elem.querySelector('button.ribbon__arrow_left')
    let btnR = elem.querySelector('button.ribbon__arrow_right')
    let elemMenu = elem.querySelector('.ribbon__inner')


    if (!elemMenu.scrollLeft) {

      btnL.classList.remove('ribbon__arrow_visible')
      btnR.classList.add('ribbon__arrow_visible')

      
    }

    let direction = this.#scrollMenu

    /* Обработка клика левой кнопки меню */
    btnL.addEventListener('click', function () {

      direction('back', elem)

    })

    /* Обработка правой кнопки меню */
    btnR.addEventListener('click', function () {

      direction('forvard', elem)

    })

    /* Обработчик прокрутки */
    elemMenu.addEventListener('scroll', () => {

      /* Управление видимостью кнопок */
      if (elemMenu.scrollLeft < 1) {
        btnL.classList.remove('ribbon__arrow_visible')
        btnR.classList.add('ribbon__arrow_visible')
      } else if ((elemMenu.scrollWidth - elemMenu.scrollLeft - elem.clientWidth) < 1) {
        btnL.classList.add('ribbon__arrow_visible')
        btnR.classList.remove('ribbon__arrow_visible')
      }
      else {
        btnL.classList.add('ribbon__arrow_visible')
        btnR.classList.add('ribbon__arrow_visible')
      }

    })

    /* Обработчик выбора категории */
    elemMenu.addEventListener('click', function (event) {

      this.preventDefault = false
      let elemCurrent = event.target

      /* Удаление подсветки активной категории */
      let elemBefore = elemMenu.querySelector('.ribbon__item_active')
      elemBefore.classList.remove('ribbon__item_active')

      /* Добавление подсветки для активного элемента */
      elemCurrent.classList.add('ribbon__item_active')

      /* Генерация пользовательского события */
      let eventRibbonSelect = new CustomEvent(
        'ribbon-select', {
        detail: elemCurrent.dataset.id,
        bubbles: true
      }
      )

    })

    return elem

  }

  /* Создание HTML меню */
  #innerElem() {

    let elem = createElement(
      ` <!--Корневой элемент RibbonMenu-->
    <div class="ribbon">
      <!--Кнопка прокрутки влево-->
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
  
      <!--Ссылки на категории-->
      <nav class="ribbon__inner">
        <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
        <a href="#" class="ribbon__item" data-id="salads">Salads</a>
        <a href="#" class="ribbon__item" data-id="soups">Soups</a>
        <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
        <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
        <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
        <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
        <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
        <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
      </nav>
  
      <!--Кнопка прокрутки вправо-->
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
    `
    )

    return elem

  }

  /* Прокрутка */
  #scrollMenu(dir, elemAdd) {

    let elemMenu = elemAdd.querySelector('.ribbon__inner')

    if (dir == 'forvard') {
      elemMenu.scrollBy(350, 0)
    }
    else if (dir == 'back') {
      elemMenu.scrollBy(-350, 0)
    }

  }

}
