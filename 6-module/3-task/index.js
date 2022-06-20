import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.#createElem()
  }

  #createElem() {

    let elem = createElement(
      ` <!--Корневой элемент карусели-->
  <div class="carousel">
    <!--Кнопки переключения-->
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>

    
    ${this.#elemsInner()}
    
    
    
    
    
      
    
  </div>`
    )

    alert(elem.innerHTML)

    for (let slide of this.slides) {

      let elDiv = elem.querySelector(`[data-id="${slide.id}"]`)
     
     let btn = elDiv.getElementsByClassName('carousel__button')[0]

     btn.addEventListener('click',function(){

      let userEvent = new CustomEvent('product-add',{
        detail: slide.id,
        bubbles:true
      })

      btn.dispatchEvent(userEvent)


     })


    }


      



    return elem
  }

  #elemsInner(){

    let elemCarousel = createElement(
     `
     <div class="carousel__inner">
    </div>
      `)
 
       for (let slide of this.slides){

        let elSlide = createElement(
          `<div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}<!--значение slide.price--></span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
          </div>
          </div>
         `
          ) 

        


        elemCarousel.append(elSlide)
      
       /*  let btn = elSlide.querySelector('BUTTON')
        alert(btn)
        btn.onclick= ()=>alert(2323) */

      } 
      return elemCarousel.outerHTML
  }


}
