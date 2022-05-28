function isEmpty(obj) {
  let result = true;

  let numProp = Object.keys(schedule).length;

  if (numProp) {
    result = false;
  }

  return result;
}