function namify(users) {
  
  /*
  let result = []

  users.forEach((item) => result.push(item.name))

  return result */

  let res = users.map(item=>item.name)
  return res

}
