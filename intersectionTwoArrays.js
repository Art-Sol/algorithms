/**
 * Найти пересечение двух массивов и вернуть только элементы, которые встерчаются в обоих массивах
 * Не могут придти пустые массивы
 * Порядок элементов в ответе не важен
 *
 * Пример:
 * Вход:
 * [1, 2, 2, 1] и [2, 2]
 * Выход:
 * [2, 2]
 */

const input1 = [1, 2, 2, 1];
const input2 = [2, 2];

const input3 = [4, 9, 5];
const input4 = [9, 4, 9, 8, 4];

const intersect = (arr1, arr2) => {
  const map = {};
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    const el = arr1[i];

    if (!map[el]) {
      map[el] = 1;
    } else {
      map[el] += 1;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const el = arr2[i];

    if (!map[el]) {
      map[el] = 1;
    } else if (map[el] > 0) {
      map[el] -= 1;
      result.push(el);
    }
  }

  return result;
};

console.log(intersect(input1, input2));
console.log(intersect(input3, input4));
