function sumSalary(salaries) {
  let result = 0;

  let objLength = Object.keys(salaries).length;

  if (objLength) {
    for (key in salaries) {
      if (typeof salaries[key] == 'number') {
        result = result + checkRes(salaries[key]);

        console.log(result);
      }
    }
  }
  
  return result
  
}

/*проверка на NaN, -Infinity, Infinity
	- возврат 0 или переданное значение
*/
function checkRes(res) {
  let result = 0;
  if (!Number.isNaN(res)) {
    switch (res) {
      case Infinity:
        break;

      case -Infinity:
        break;

      default:
        result = res;

        break;
    }
  }

  return result;
}