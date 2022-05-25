function checkSpam(str) {

  let result = false
 
   if (str) {
     
     let checkStr = str.toUpperCase();
     
     console.log(checkStr)
   
     let checkArr = ["1XBET", "XXX"];  //массив значений для проверки
 
     let arrLenght = checkArr.length;
     
     while (arrLenght) {
 
       if (checkStr.includes(checkArr[arrLenght-1])) {
         
      result = true
              
       }
       
       arrLenght--
     
     }
     
   }
 
   return result
 }