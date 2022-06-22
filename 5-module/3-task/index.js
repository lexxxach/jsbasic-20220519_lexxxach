function initCarousel() {
  
  let elBtnL = document.getElementsByClassName('carousel__arrow carousel__arrow_left')[0]
  let elBtnR = document.getElementsByClassName('carousel__arrow carousel__arrow_right')[0]

  let chClick = 0
  checkShow(chClick, elBtnR, elBtnL)

  elBtnL.addEventListener('click', () => {
    if (chClick > 0) {
      let elCarousel = document.getElementsByClassName('carousel__inner')[0]
      chClick -= 1
      elCarousel.style.transform = `translateX(-${chClick * elCarousel.offsetWidth}px  )`
      checkShow(chClick, elBtnR, elBtnL)
    }
  })

  elBtnR.addEventListener('click', () => {
    if (chClick < 3) {
      chClick += 1
      let elCarousel = document.getElementsByClassName('carousel__inner')[0]
      elCarousel.style.transform = `translateX(-${chClick * elCarousel.offsetWidth}px  )`
      checkShow(chClick, elBtnR, elBtnL)
    }
  })

  function checkShow(chClick, elR, elL) {
    switch (chClick) {
      case 0:
        elL.style.display = 'none'
        break

      case 3:
        elR.style.display = 'none'
        break
      default:
        elR.style.display = ''
        elL.style.display = ''
        break
    }
  }
}
