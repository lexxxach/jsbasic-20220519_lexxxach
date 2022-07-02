import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  #offSet = 0
  constructor() {
    this.render();
    this.#offSet = this.elem.getBoundingClientRect().top - window.pageYOffset

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, { once: true });

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {

    let el = this.elem


    if (!el.offsetWidth) return

    if (this.#offSet < window.pageYOffset) {

      if (document.documentElement.clientWidth > 767) {

        el.style.position = 'fixed'
        let elContainer = document.querySelector('.container')
        let coordRightBorder = elContainer.getBoundingClientRect().right //правая часть элемента
        let windowWidth = document.documentElement.clientWidth //ширина окна

        console.log(`${coordRightBorder + 20} +20
        ${windowWidth - el.offsetWidth - 10} -10`)


        if (coordRightBorder + 20 < windowWidth - el.offsetWidth - 10) {
          el.style.left = coordRightBorder + 20 + 'px'
        }
        else {
          el.style.left = windowWidth - el.offsetWidth - 10 + 'px'
         // el.style.right = '10px'
          el.style.zIndex = 1000

        }
      }
      else {

        alert(799)
        Object.assign(this.elem.style, {
          position: '',
          top: '',
          left: '',
          zIndex: ''
        })

      }
    } else {
      Object.assign(this.elem.style, {
        position: '',
        top: '',
        left: '',
        zIndex: ''
      })

    }

  }

}
