function isEmpty(obj) {
  let result = true;

  let numProp = Object.keys(obj).length;

  if (numProp) {
    result = false;
  }

  return result;
}