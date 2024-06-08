/**
 * Слоны и ладьи
 *
 * На шахматной доске стоят слоны и ладьи, необходимо посчитать,
 * сколько клеток не бьется ни одной из фигур.
 *
 * Шахматная доска имеет размеры 8 на 8. Ладья бьет все клетки горизонтали и вертикали,
 * проходящих через клетку, где она стоит, до первой встретившейся фигуры. Слон бьет все
 * клетки обеих диагоналей, проходящих через клетку, где он стоит, до первой встретившейся фигуры.
 *
 * Формат ввода:
 * В первых восьми строках ввода описывается шахматная доска.
 * Первые восемь символов каждой из этих строк описывают состояние соответствующей горизонтали:
 * символ B (заглавная латинская буква) означает, что в клетке стоит слон,
 * символ R — ладья,
 * символ * — что клетка пуста.
 * После описания горизонтали в строке могут идти пробелы, однако длина каждой строки не превышает 250
 * символов. После описания доски в файле могут быть пустые строки.
 *
 * Формат вывода:
 * Выведите количество пустых клеток, которые не бьются ни одной из фигур.
 */

const chessboard1 = [
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "R", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
];

const chessboard2 = [
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "B", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
];

const chessboard3 = [
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "R", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "B", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
];

const directionTypes = {
  top: {
    i: -1,
    j: 0,
  },
  bottom: {
    i: 1,
    j: 0,
  },
  left: {
    i: 0,
    j: -1,
  },
  right: {
    i: 0,
    j: 1,
  },
  topleft: {
    i: -1,
    j: -1,
  },
  topright: {
    i: -1,
    j: 1,
  },
  bottomleft: {
    i: 1,
    j: -1,
  },
  bottomright: {
    i: 1,
    j: 1,
  },
};

const mark = (i, j, chessboard, d) => {
  if (chessboard[i][j] !== "B" && chessboard[i][j] !== "R") {
    chessboard[i][j] = "x";
  }

  if (chessboard?.[i + directionTypes[d].i]?.[j + directionTypes[d].j]) {
    if (
      chessboard?.[i + directionTypes[d].i]?.[j + directionTypes[d].j] !== "B" &&
      chessboard?.[i + directionTypes[d].i]?.[j + directionTypes[d].j] !== "R"
    ) {
      mark(i + directionTypes[d].i, j + directionTypes[d].j, chessboard, d);
    }
  }
};

const bishopsAndRooks = (chessboard) => {
  let counter = 0;

  if (!chessboard.length) {
    return counter;
  }

  for (let i = 0; i < chessboard.length; i++) {
    for (let j = 0; j < chessboard[i].length; j++) {
      const cage = chessboard[i][j];

      if (cage === "R") {
        mark(i, j, chessboard, "top");
        mark(i, j, chessboard, "bottom");
        mark(i, j, chessboard, "left");
        mark(i, j, chessboard, "right");
      }

      if (cage === "B") {
        mark(i, j, chessboard, "topleft");
        mark(i, j, chessboard, "topright");
        mark(i, j, chessboard, "bottomleft");
        mark(i, j, chessboard, "bottomright");
      }
    }
  }

  for (let i = 0; i < chessboard.length; i++) {
    for (let j = 0; j < chessboard[i].length; j++) {
      const cage = chessboard[i][j];

      if (cage === "*") {
        counter++;
      }
    }
  }

  return counter;
};

console.log(bishopsAndRooks(chessboard1)); // 49
console.log(bishopsAndRooks(chessboard2)); // 54
console.log(bishopsAndRooks(chessboard3)); // 41
