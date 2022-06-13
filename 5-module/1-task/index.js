function hideSelf() {
  
  let elButt = document.getElementsByClassName('hide-self-button')[0]
  
  elButt.addEventListener('click',function(){
    this.setAttribute('hidden','')
  })

}
