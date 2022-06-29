import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {

  constructor({ steps, value = 0 }) {
    this.elem = this.#innerElem(steps)
  }

  /* Получение верстки */
  #innerElem(steps) {
    let elemBefore = createElement(
      `
      <!--Корневой элемент слайдера-->
      <div class="slider">

      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb" style="left: 0%;">
      <span class="slider__value">0</span>
      </div>

      <!--Заполненная часть слайдера-->
      <div class="slider__progress" style="width: 0%;"></div>

      <!--Шаги слайдера-->
      <div class="slider__steps">
      <span></span>
      <span></span>
      <span class="slider__step-active"></span>
      <span></span>
      <span></span>
      </div>
      </div>
      `
    )

    /* Добавление SPAN по количеству шагов */
    let elemSteps = elemBefore.querySelector('.slider__steps')
    elemSteps.innerHTML = ''

    for (let i = 0; i < steps; i++) {
      let elemStep = document.createElement('SPAN')
      if (i == 0) {
        elemStep.classList.add('slider__step-active')
      }
      elemSteps.append(elemStep)
    }

    /* Обработка событий клика */
    elemBefore.addEventListener('click', coordProc)

    function coordProc(event) {

      let numberStep = getNumberStep(this, event) //номер шага
     
      /* Установка значения шага в SPAN */
      let elemSliderValue = document.querySelector('.slider__value')
      let sliderValueBefore = elemSliderValue.textContent
      elemSliderValue.textContent = numberStep
      let sliderValueAfter = elemSliderValue.textContent

      /* Условие подписки на событие */
      if (!(sliderValueBefore == sliderValueAfter)) {
        let custEvent = new CustomEvent('slider-change', {
          detail: +sliderValueAfter,
          bubbles: true
        }
        )
        elemBefore.dispatchEvent(custEvent)
      }

      let elemsSpanSliderArr = document.querySelectorAll('.slider__steps SPAN')
      /* Обработка активного SPAN */
      for (let el of elemsSpanSliderArr) {
        el.removeAttribute('class')
      }
      elemsSpanSliderArr[numberStep].classList.add('slider__step-active')

      let progress = numberStep * 100 / (steps - 1) //значение номера шага в %

      /* Обрабокта перемещения позунка */
      let elThumb = elemBefore.querySelector('.slider__thumb')
      elThumb.style.left = `${progress}%`

      /* Обработка ширины закрашиваемой области */
      let elThumbArea = elemBefore.querySelector('.slider__progress')
      elThumbArea.style.width = `${progress}%`

    }

    //Вычисление значения ближайшего шага
    let getNumberStep = (elBtn, eventBtn) => {

      let box = elBtn.getBoundingClientRect()
      let elLeft = box.left //левый угол
      let elRight = box.right //правый угол
      let elWidth = elRight - elLeft //длина элемента
      let elClick = eventBtn.clientX //координаты клика
      let stepLength = elWidth / (steps - 1) //длина шага
      let arrCoord = [] //массив для ближайших координат
      let arrSteps = [] //массив для шагов

      let arrStep = 0 //счеттчик шага
      for (let i = elLeft; i <= elRight; i = i + stepLength) {
        let delta1 = elClick - i
        
        if (Math.abs(delta1) < stepLength) {
          arrCoord.push(i)
        }

        arrSteps.push(arrStep)
        arrStep++
      }

      let xCoord1 = Math.abs(arrCoord[0] - elClick) //дельта между кликом и левой кординатой
      let xCoord2 = Math.abs(arrCoord[1] - elClick) //дельта между кликом и правой кординатой
      let delta2 = Math.min(xCoord1, xCoord2) //минимальное расстояние между кликом и координатой
     
      let sliderCoord //координата ближайшего шага
      if (delta2 == xCoord1) {
        sliderCoord = arrCoord[0]
      } else if (delta2 == xCoord2) {
        sliderCoord = arrCoord[1]
      }

      /* Вычисление шага */
      let numberStep = 0
      for (let count of arrSteps) {

        if ((Math.abs(sliderCoord - (elLeft + count * stepLength))) < 1) {
          numberStep = count
          break;
        }

      }

      return numberStep
    }

    return elemBefore
  }

}


