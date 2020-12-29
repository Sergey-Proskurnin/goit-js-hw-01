function isNumberInRange(start, end, number) {
  const isInRange = number >= start && end >= number; // дополни эту строку

  return isInRange;
}
console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 76));

// Задание
// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток.Она
// объявляет три параметра, значения которых будут
// задаваться во время её вызова:

// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток
// от srart до end.То есть число должно быть больше либо равно start и меньше либо равно end.Результатом
// выражения проверки будет буль true или false.