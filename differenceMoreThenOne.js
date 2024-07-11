/**
 * Дан массив a из n чисел.
 * Найдите минимальное количество чисел, после удаления которых попарная
 * разность оставшихся чисел по модулю не будет превышать 1, то есть после удаления
 * ни одно число не должно отличаться от какого-либо другого более чем на 1.
 *
 * Первый аргумент содержит одно целое число n (1 ≤ n ≤ 2⋅10^5) — количество элементов массива a.
 * Второй аргумент содержит n целых чисел a1, a2, …, an (0 ≤ ai ≤ 10^5) — элементы массива a
 */

const differenceMoreThenOne = (n, arr) => {
  const dict = {};
  arr.forEach((item) => {
    if (dict[item] >= 0) {
      dict[item] = dict[item] + 1;
    } else {
      dict[item] = 1;
    }
  });

  let currMax = 0;

  for (let key in dict) {
    const localMax = dict[key] + Math.max(dict[key - 1] || 0, dict[key + 1] || 0);

    if (localMax > currMax) {
      currMax = localMax;
    }
  }

  return n - currMax;
};

console.log(differenceMoreThenOne(5, [1, 2, 3, 4, 5])); // 3
console.log(differenceMoreThenOne(10, [1, 1, 2, 3, 5, 5, 2, 2, 1, 5])); // 4
console.log(differenceMoreThenOne(6, [1, 2, 3, 1, 3, 3])); // 2
