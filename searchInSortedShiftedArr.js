/**
 *	Найти число в отсортированном и сдвинутом массиве.
 *	Мы не знаем, на сколько элементов у этого массива сдвиг.
 *	Но мы точно знаем, что изначально он был отсортирован.
 *
 *	На вход: [4, 5, 6, 7, 0, 1, 2], target = 0. На выход: 4
 *	На вход: [4, 5, 6, 7, 0, 1, 2], target = 3. На выход: -1
 */

const array = [4, 5, 6, 7, 0, 1, 2];

const searchInSortedShiftedArr = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < arr[right]) {
      if (arr[mid] < target && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (arr[left] <= target && target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};

console.log(searchInSortedShiftedArr(array, 0));
console.log(searchInSortedShiftedArr(array, 3));
