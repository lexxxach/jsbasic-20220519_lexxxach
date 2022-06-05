function highlight(table) {
  //строки со значениями
  let rows = table.querySelectorAll('tbody tr')

  for (i = 0; i < rows.length; i++) {
    
    let ageControl = 18
    let currentRow = rows[i]
    let elAge = rows[i].cells[1]
    let elGender = rows[i].cells[2]
    let elStatus = rows[i].cells[3]

    let propAge = (age, ageControl) => {

      let res

      if (age < ageControl) {
        res = 'line-through'
      }

      return res

    }
    
    let propGender = (gender) => {

      let res

      if (gender == 'm') {
        res = 'male'
      } else if (gender == 'f') {
        res = 'female'
      }

      return res

    }
    
    let propStatus = (status) => {

      let res

      
      
      if (status == 'true') {
        res = 'available'
      } else if(status == 'false'){
        res = 'unavailable'
      }

      return res

    }

    //обработка возраст
    if (+elAge.textContent < ageControl) {
      currentRow.style['text-decoration'] = propAge(Number(elAge.textContent), ageControl)
    }

    //обработка статус

     alert(currentRow.classList.length)
    
   if(elStatus.classList.length){
    
     alert(23423)
     
     
   }
    
    
    
    
    if (Boolean (elStatus.dataset.available)) {
     // alert(propStatus(elStatus.dataset.available))
      currentRow.classList.add(propStatus(elStatus.dataset.available)) 
    } else {
      currentRow.setAttribute('hidden', true)
    }

    //обработка пол
   
    //alert(currentRow.classList.length)
     
    
    
    currentRow.classList.add(propGender(elGender.textContent))

   
    
    
  }
  
//  alert(Boolean(null))

}
