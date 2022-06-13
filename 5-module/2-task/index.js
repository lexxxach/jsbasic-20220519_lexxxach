function toggleText() {
  let elText = document.getElementById('text')
  let attrName = 'hidden'
  if(elText.hasAttribute(attrName)){
    elText.removeAttribute(attrName)
  } else {
    elText.setAttribute(attrName,'')
  }
}

let elBtn = document.getElementsByClassName('toggle-text-button')[0]

elBtn.addEventListener('click',toggleText)
