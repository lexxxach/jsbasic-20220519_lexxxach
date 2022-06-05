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

      if (status) {
        res = 'available'
      } else {
        res = 'unavailable'
      }

      return res

    }

    //обработка возраст
    if (+elAge.textContent < ageControl) {
      currentRow.style['text-decoration'] = propAge(Number(elAge.textContent), ageControl)
    }

    //обработка статус
    if (elStatus.dataset.available) {
      currentRow.className = propStatus(elStatus.dataset.available)
    } else {
      currentRow.setAttribute('hidden', true)
    }

    //обработка пол
    currentRow.classList.add(propGender(elGender.textContent))

  }

}
