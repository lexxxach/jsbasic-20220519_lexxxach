import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.elem = this.#innerElem(steps)
  }

  #innerElem(steps){
    let elemBefore = createElement(
      `
      <!--Корневой элемент слайдера-->
  <div class="slider">

    <!--Ползунок слайдера с активным значением-->
    <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">2</span>
    </div>

    <!--Заполненная часть слайдера-->
    <div class="slider__progress" style="width: 50%;"></div>

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
    
    getElSpan(steps,elemSteps)
  
    function getElSpan(stepsFunc,el){

      el.innerHTML = ''

      for(let i=0;i<stepsFunc;i++){
        let elemStep = document.createElement('SPAN')
        el.append(elemStep)
      }

    }

    return elemBefore

  }


}


