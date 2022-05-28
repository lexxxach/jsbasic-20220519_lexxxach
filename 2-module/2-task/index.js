function isEmpty(obj) {
  let result = false;

  let numProp = Object.keys(schedule).length;

  if (numProp) {
    result = true;
  }

  return result;
}