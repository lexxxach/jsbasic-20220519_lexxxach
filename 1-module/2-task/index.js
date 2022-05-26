/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {

  let result = false;

  if (name) {

    let strLength = name.length

    let checkName = name.includes(' '); //прверка на наличие пробела

    if (strLength >= 4 && !checkName) {

      result = true;

    }

  }

  return result;

}





function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
