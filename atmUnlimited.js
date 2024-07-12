/**
 * Задача про банкомат (простая)
 *
 * Необходимо написать ф-цию, которая принимает количество денег, которые клиент хочет получить от банкомата.
 * Возвращает банкомат количество купюр разного наминала, чтобы удовлетварить запрос клиента.
 * Необходимо выдать наименьшее кол-во банкнот, которое возможно
 * Типы купюр в банкомате: 100, 50, 20, 10
 *
 * Допущения:
 * 1) Кол-во денег (всех представленных купюр) в банкомате бесконечно
 * 2) Банковский счет клиента так же бесконечен - снаять можно сколько угодно
 * 2) Запрашиваемая сумма, может быть удовлетворена тем набором купюр, которые есть в наличии
 */

function atm(amount) {
  const availableNotes = [100, 50, 20, 10];
  const result = [];

  let index = 0;

  while (amount > 0) {
    const note = availableNotes[index];

    if (amount >= note) {
      amount = amount - note;
      result.push(note);
    } else {
      index++;
    }
  }

  return result;
}

console.log(atm(370)); // [ 100, 100, 100, 50, 20 ]