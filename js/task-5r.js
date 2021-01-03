let message;
let contry = prompt('Введите страну доставки');
switch (contry) {
    case null:
        alert('Отменено пользователем');
}
// contry = contry.toLowerCase();

switch (contry.toLowerCase()) {
  case 'китай':
    message = `Доставка в ${contry} будет стоить 100 кредитов`;
    break;

  case 'чили':
    message = `Доставка в ${contry} будет стоить 250 кредитов`;
    break;

  case 'австралия':
    message = `Доставка в ${contry} будет стоить 170 кредитов`;
    break;

  case 'индия':
    message = `Доставка в ${contry} будет стоить 80 кредитов`;
    break;

  case 'ямайка':
    message = `Доставка в ${contry} будет стоить 120 кредитов`;
    break;

    default:
    message = 'В вашей стране доставка не доступна';
}
alert(message);

// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении
// страницы в prompt.Учти, пользователь может ввести имя страны не только буквами
// нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Обязательно используй switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи
// в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
