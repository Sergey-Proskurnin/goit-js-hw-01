function getNameLength(name) {
  const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

  return message;
}
console.log(getNameLength('Poly'));
console.log(getNameLength('Harambe'));
console.log(getNameLength('Billy'));
console.log(getNameLength('Joe'));

// Задание
// Функция getNameLength(name) принимает имя(параметр name) и возвращает строку, в которой указана его длина.
// Дополни шаблонную строку в переменной message длиной строки из параметра name.