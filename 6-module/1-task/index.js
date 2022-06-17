/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = this.#createTable(rows)

  }

  #createTable(rows) {
    let elemTable = document.createElement('TABLE')
    elemTable.innerHTML = `
    <thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>
  </thead>
    `
    this.#addRows(elemTable, rows)

    return elemTable

  }

  /* Добавление строк */
  #addRows(elemTable, rows) {
    
    if (rows) {
      
      let elBody = document.createElement('TBODY')

      for (let el of rows) {
        let elTr = document.createElement('TR')
        elTr.innerHTML = `
        <td>${el.name}</td>
            <td>${el.age}</td>
            <td>${el.salary}</td>
            <td>${el.city}</td>
            <td><button>X</button></td>
        `
        let btn = elTr.querySelector('button')
        
        btn.addEventListener('click', function () {
          this.parentElement.parentElement.remove()
        })

        elBody.append(elTr)
      }

      elemTable.append(elBody)
    }
  }
}