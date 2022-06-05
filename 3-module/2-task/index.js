function filterRange(arr, a, b) {
  //let copyArr = arr.slice();
  //console.log(copyArr);

  let result = arr.filter((item) => item >= a && item <= b);

  return result;
}
