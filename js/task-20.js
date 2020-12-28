function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
if (ordered === 0) { // Дополни эту строку
    message = 'В заказе еще нет товаров';
  } else if (ordered > available) { // Дополни эту строку
    message = 'Слишком большой заказ, на складе недостаточно товаров!';
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  }

  // Пиши код выше этой строки
  return message;
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));
