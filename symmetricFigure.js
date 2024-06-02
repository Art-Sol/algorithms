/**
 * Дано N точек на плоскости с целочисленными координатами (x, y), где  |x| и |y| ≤ 10^18.
 * Нужно проверить, существует ли для них ось симметрии, параллельная оси OY.
 * Если да, то вывести её абсциссу. Предполагается, что точки не повторяются.
 *
 * const a = [ [1, 1], [2, 2], [1, 3], [3, 3], [5, 3], [4, 2], [5, 1] ]
 *
 * y
 *
 * 5
 * 4        •
 * 3  •           •
 * 2     •     •
 * 1  •          •
 * 0  1  2  3  4  5   x
 *
 * Ответ: 3
 */

const a = [
  [1, 1],
  [1, 3],
  [2, 2],
  [3, 3],
  [4, 2],
  [5, 3],
  [5, 1],
];

const copmare = (arr1, arr2) =>
  JSON.stringify(arr1.sort((next, prev) => next - prev)) ===
  JSON.stringify(arr2.sort((next, prev) => next - prev));

const getAbscissa = (arr) => {
  if (!arr.length || !(arr.length % 2)) return null;

  const abscissaIndex = Math.floor(arr.length / 2);

  const coordinatesByX = {};

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i][0];
    const y = arr[i][1];

    if (coordinatesByX[x]?.length) {
      coordinatesByX[x] = [...coordinatesByX[x], y];
    } else {
      coordinatesByX[x] = [y];
    }
  }

  const xAxis = Object.keys(coordinatesByX);
  let left = 0;
  let right = xAxis.length - 1;

  while (left < right) {
    const leftArrY = coordinatesByX[xAxis[left]];
    const rightArrY = coordinatesByX[xAxis[right]];

    if (!copmare(leftArrY, rightArrY)) {
      return null;
    }

    left++;
    right--;
  }

  return abscissaIndex;
};

console.log(getAbscissa(a));
