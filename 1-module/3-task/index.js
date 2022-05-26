function ucFirst(str) {

  let strLength = str.length
  let result

  switch (strLength) {
    case 0:

      return result = ''
      break

    case 1:

      result = str.toUpperCase()
      break

    default:

      result = varString(str)
      break

  }
  return result
}

function varString(str) {

  let firstStr = str.slice(0, 1)

  let lastStr = str.slice(1)

  let result = firstStr.toUpperCase() + lastStr.toLowerCase()

  return result

}
