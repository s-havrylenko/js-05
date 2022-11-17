/*
Напиши класс StringBuilder.На вход он получает один параметр - строку,
которую записывает в свойство _value.

Добавь классу следующий функционал:

Геттер value - возвращает текущее значение поля _value
Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
Метод pad(str) - получает парметр str(строку) и добавляет ее в начало и в конец _value
*/


class StringBuilder {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  };

  append(stringAppend) {
    this.value = this.value + stringAppend;
  };

  prepend(stringPrepend) {
    this.value = stringPrepend + this.value
  };

  pad(stringPad) {
    this.value = stringPad + this.value + stringPad;
  };
};

const builder = new StringBuilder('.');

const value = builder.getValue();
console.log(value)

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='