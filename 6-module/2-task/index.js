import createElement from '../../assets/lib/create-element.js'

export default class ProductCard {
  constructor(product) {
    this.elem = this.#elem(product)
  }

  #elem(prod){
    let elem = createElement(
      `<div class="card">
      <div class="card__top">
          <img src="/assets/images/products/...значение product.image..." class="card__image" alt="product">
          <span class="card__price">€<!--значение product.price--></span>
      </div>
      <div class="card__body">
          <div class="card__title"><!--значение product.name--></div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
  </div>`
    )

      let elPrice = elem.getElementsByClassName('card__price')[0]
      elPrice.textContent = '€' + prod.price.toFixed(2)

      let elImg = elem.getElementsByClassName('card__image')[0]
      elImg.src = `../../assets/images/products/${prod.image}`

      
      elem.addEventListener('product-add',function(event){

        

      })
      
      let elBtn = elem.getElementsByClassName('card__button')[0]
      let userEvent = new CustomEvent('product-add',{
        detail: prod.id,
        bubbles: true
      }
                
      )

      elBtn.dispatchEvent(userEvent)

      
    return elem
  }

  
}
