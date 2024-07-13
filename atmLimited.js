/**
 * Задача про банкомат
 *
 * Необходимо написать ф-цию, которая принимает:
 * первым аргументом - количество денег, которые клиент хочет получить от банкомата
 * вторым аргументом - объект, наминалы купюр и их количество, доступные в банкомате
 * Возвращает ф-ция:
 * объект - купюры разного наминала и их кол-во, чтобы удовлетварить запрос клиента.
 * Необходимо выдать наименьшее кол-во банкнот, которое возможно
 *
 * Допущения и условия:
 * 1) Банковский счет клиента бесконечен - запросить можно сколько угодно
 * 2) Если удволетворить запрос клиента не получается (не достаточно денег или нет таких типов купюр),
 * то ничего не возвращаем
 */

function atm(amountNeeded, limits) {
  const noteTypes = Object.keys(limits)
    .map(Number)
    .sort((next, prev) => prev - next);

  function collect(amount, nominals) {
    if (amount === 0) {
      return {};
    }

    if (!nominals.length) {
      return;
    }

    let currNominal = nominals[0];
    let availableNotes = limits[currNominal];
    let notesNeeded = Math.floor(amount / currNominal);
    let givenNumberOfNotes = Math.min(availableNotes, notesNeeded);

    for (let i = givenNumberOfNotes; i >= 0; i--) {
      let result = collect(amount - i * currNominal, nominals.slice(1));

      if (result) {
        return i ? { [currNominal]: i, ...result } : result;
      }
    }
  }

  return collect(amountNeeded, noteTypes);
}

const limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };

console.log(atm(230, limits)); // { 30: 1, 100: 2 };
console.log(atm(1000, limits)); // { 1000: 1 };
console.log(atm(200, limits)); // { 100: 2 };
console.log(atm(150, limits)); // { 50: 1, 100: 1};
console.log(atm(120, limits)); // { 30: 4 };
console.log(atm(275, limits)); // undefined
console.log(atm(9999999, limits)); // undefined
console.log(atm(11680, limits)); // { '30': 6, '50': 100, '100': 5, '500': 2, '1000': 5 }
