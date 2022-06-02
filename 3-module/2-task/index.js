function filterRange(arr, a, b) {
  let copyArr = arr.slice();
  console.log(copyArr);

  let result = copyArr.filter((item) => item >= 1 && item <= b);

  return result;
}
