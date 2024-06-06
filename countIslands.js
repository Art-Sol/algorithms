/**
 * Необходимо посчитать количество островов в матрице.
 * Островом считаются единицы (1), которые находятся друг рядом с другом по горизонтали
 * и по вертикали. Водой считаются ячейки матрицы с нулями.
 */

const grid1 = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

const grid2 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

const grid3 = [
  [1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];

const countIslands = (grid) => {
  let count = 0;

  const mark = (i, j) => {
    grid[i][j] = 2;

    if (grid[i]?.[j - 1] === 1) {
      mark(i, j - 1);
    }

    if (grid?.[i - 1]?.[j] === 1) {
      mark(i - 1, j);
    }

    if (grid[i]?.[j + 1] === 1) {
      mark(i, j + 1);
    }

    if (grid?.[i + 1]?.[j] === 1) {
      mark(i + 1, j);
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        count++;
        mark(i, j);
      }
    }
  }

  return count;
};

console.log(countIslands(grid1)); // 1
console.log(countIslands(grid2)); // 3
console.log(countIslands(grid3)); // 4
