/**
 * Полиндром
 * Написать функцию, которая будет принимать строку и возвращать булево
 * значение является ли эта строка полиндромом
 *
 * Полиндром - когда слово читается слева направо и справо налево одинаково
 * racecar - это полиндром.
 */

const polindrom = (str) => {
  const arr = str.toLowerCase().split("");

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] === " ") {
      left++;
    }

    if (arr[right] === " ") {
      right--;
    }

    if (arr[left] !== arr[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

console.log(polindrom("racecar"));
console.log(polindrom("table"));
console.log(polindrom("Anna"));
console.log(polindrom("А роза упала на лапу Азора"));
