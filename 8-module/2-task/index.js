import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.elem = this.#render(products)
  }

  #render(products) {
    let elem = createElement(`
    <div class="products-grid">
    <div class="products-grid__inner">
      ${this.#innerElem(products)}
    </div>
    </div>
    `)

    return elem

  }

  #innerElem(products) {
    
    let innerProductDiv = document.createElement('DIV')
    for (let currentProduct of products) {
      let elemCard = new ProductCard(currentProduct)
      innerProductDiv.append(elemCard.elem)
    }

    return innerProductDiv.innerHTML
  }

  updateFilter(filters){
    alert(111)

  }

}

