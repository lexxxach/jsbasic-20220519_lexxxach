let calculator = {
  read: '',
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

let read = function read(a, b) {
  this.a = a;
  this.b = b;
};

calculator.read = read;

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
