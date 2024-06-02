/**
 * Дан массив целых чисел, отсортированный по неубыванию, и число `target`.
 * Найти индексы самого левого и самого правого вхождения числа `target` в массив.
 * Если такого числа в массиве нет, вернуть пустой массив.
 */

const findRange = (arr, target) => {
  let firstTargetIndex = null;
  let lastTargetIndex = null;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] <= target) {
      lastTargetIndex = mid;
      firstTargetIndex = mid;
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    }
  }

  if (arr[lastTargetIndex] !== target) {
    return [];
  }

  let stop = false;
  let count = 1;

  while (!stop) {
    if (arr[lastTargetIndex - count] === target) {
      firstTargetIndex = lastTargetIndex - count;
      count++;
    } else {
      stop = true;
    }
  }

  return [firstTargetIndex, lastTargetIndex];
};

console.log(findRange([1, 2, 3], 1)); // [ 0, 0 ]
console.log(findRange([1, 2, 3], 4)); // [ ]
console.log(findRange([1, 2, 2, 3, 4, 4, 4, 5], 4)); // [ 4, 6 ]
