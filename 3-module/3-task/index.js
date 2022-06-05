function camelize(str) {
  let res = '';
  let arrStr = str.split('-');
  
  //console.log(arrStr);

  arrStr.forEach((item, index) => {
    
    if (index > 0) {
      let strFirst = item.slice(0, 1).toUpperCase()
      let strSecond = item.slice(1, item.length)
      res += strFirst + strSecond
      //console.log(res);
    } else {
      res = item
    }

  });
 // console.log(res);
  return res;
}
