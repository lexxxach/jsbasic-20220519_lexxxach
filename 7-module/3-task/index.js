import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  #elemInner = ''
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

    let elemSteps = elemBefore.querySelector('.slider__steps')

    getElSpan(steps, elemSteps)

    function getElSpan(stepsFunc, el) {

      el.innerHTML = ''

      for (let i = 0; i < stepsFunc; i++) {
        let elemStep = document.createElement('SPAN')
        if(i==0){
          elemStep.classList.add('slider__step-active')
        }
        el.append(elemStep)
      }

    }

    /* Обработка событий клика */
    elemBefore.addEventListener('click', coordProc)

    function coordProc(event) {

      let box = this.getBoundingClientRect()
      let elLeft = box.left //левый угол
      let elRight = box.right //правый угол
      let elWidth = elRight - elLeft //длина элемента
      let elClick = event.clientX //координаты клика
      let stepLength = elWidth / (steps - 1) //длина шага

      let arrCoord = []
      let arrSteps = []

      let arrStep = 0
      for (let i = elLeft; i <= elRight; i = i + stepLength) {
        let delta1 = elClick - i

        if (Math.abs(delta1) < stepLength) {
          arrCoord.push(i)
        }
        arrSteps.push(arrStep)

        arrStep++

      }

      let xCoord1 = Math.abs(arrCoord[0] - elClick)
      let xCoord2 = Math.abs(arrCoord[1] - elClick)
      let delta2 = Math.min(xCoord1, xCoord2)
      let sliderCoord

      if (delta2 == xCoord1) {
        sliderCoord = arrCoord[0]
      } else if (delta2 == xCoord2) {
        sliderCoord = arrCoord[1]
      }

      //alert(sliderCoord)

      let numberStep = 0
      for (let count of arrSteps) {



        if ((Math.abs(sliderCoord - (elLeft + count * stepLength))) < 1) {
          numberStep = count
          break;
        }

      }

      let elemSliderValue = document.querySelector('.slider__value')
      elemSliderValue.textContent = numberStep

      let elemsSpanSliderArr = document.querySelectorAll('.slider__steps SPAN')

      for (let el of elemsSpanSliderArr) {
        el.removeAttribute('class')
      }
      
      
      elemsSpanSliderArr[numberStep].classList.add('slider__step-active')
      
        let progress = numberStep * 100 / (steps - 1)

        /* Обрабокта перемещения позунка */
      let elThumb = elemBefore.querySelector('.slider__thumb')
      elThumb.style.left = `${progress}%`

      /* Обработка ширины закрашиваемой области */
      let elThumbArea = elemBefore.querySelector('.slider__progress')
      elThumbArea.style.width = `${progress}%`
        


    }

    






    return elemBefore

  }


  #getCoord(elSlider) {
    let sliderX

    return sliderX
  }








}


