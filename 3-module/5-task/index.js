function getMinMax(str) {

  let resultFunction = {}

  let arr = str.split(' ')

  let arrNumbers = arr.map(
    
    function (item) {
      let res = 0
      
      if (!isNaN(+item)) {
        res = +item
      }

      return res
    }
  )

  arrNumbers = arrNumbers.filter(item => item != 0)

  //console.log(arrNumbers)
  //console.log(arr)
  let min = Math.min(...arrNumbers)
  let max = Math.max(...arrNumbers)
  //  console.log(min)
  //  console.log(max)
  resultFunction.min = min
  resultFunction.max = max

  return resultFunction
}
