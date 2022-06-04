function showSalary(users, age) {
  let res = ''

  let strArr = users.filter(item => item.age <= age)

  let resStr = ''

  res = strArr.map(function (item, ind, arr) {

    let resStr = item.name + ', ' + item.balance
    if (ind < arr.length - 1) {
      resStr = resStr + '\n'


    }
    return resStr
  })


  return res.join('')
}
