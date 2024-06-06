/**
 * Минимальный прямоугольник
 * На клетчатой плоскости закрашено K клеток.
 * Требуется найти минимальный по площади прямоугольник, со сторонами, параллельными
 * линиям сетки, покрывающий все закрашенные клетки.
 *
 * Формат ввода
 * Во входном файле, на первой строке, находится число K (1 ≤ K ≤ 100).
 * На следующих K строках находятся пары чисел Xi и Yi — координаты закрашенных клеток (|Xi|, |Yi| ≤ 109).
 *
 * Формат вывода
 * Выведите в выходной файл координаты левого нижнего и правого верхнего углов прямоугольника.
 */

const coordinates = [
  [1, 3],
  [3, 1],
  [3, 5],
  [6, 3],
];

const minRectangle = (k, coordinates) => {
  if (!k || !coordinates.length) {
    return null;
  }

  let xMin = coordinates[0][0];
  let yMin = coordinates[0][1];
  let xMax = coordinates[0][0];
  let yMax = coordinates[0][1];

  for (let i = 1; i < coordinates.length; i++) {
    if (coordinates[i][0] < xMin) {
      xMin = coordinates[i][0];
    }

    if (coordinates[i][1] < yMin) {
      yMin = coordinates[i][1];
    }

    if (coordinates[i][0] > xMax) {
      xMax = coordinates[i][0];
    }

    if (coordinates[i][1] > yMax) {
      yMax = coordinates[i][1];
    }
  }

  return [
    [xMin, yMin],
    [xMax, yMax],
  ];
};

console.log(minRectangle(4, coordinates)); // [ [ 1, 1 ], [ 6, 5 ] ]
