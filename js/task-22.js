function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip'; // дополни эту строку

  return canAccessContent;
}
console.log(checkIfCanAccessContent('pro'));
console.log(checkIfCanAccessContent('starter'));
console.log(checkIfCanAccessContent('vip'));
console.log(checkIfCanAccessContent('free'));

// Задание
// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить
// доступ к контенту.Проверка происходит по типу подписки.Получить доступ могут только
// пользователи с подпиской pro или vip.

// Присвой переменной canAccessContent выражение проверки подписки.Если значение параметра
// subType равно строкам 'pro' или 'vip', пользователь получит доступ.Результатом выражения
// проверки будет буль true или false.