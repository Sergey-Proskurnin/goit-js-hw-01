function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
 message = ordered > available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';
    
    
    
//   if (ordered > available) {
//     message = 'На складе недостаточно товаров!';
//   } else {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
//   }

  // Пиши код выше этой строки
  return message;
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));

// Задание
// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.