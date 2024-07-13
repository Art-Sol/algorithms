/**
 * Задача на алгоритм RLE (Run-length encoding) - кодирование данных.
 * На вход получаем строку: AAAAAABBBBBBACCCCCCCCCCCCCDDDAAAAAAAAAAAAA
 * На выход: 6A6B1A13C3D13A
 */

const rle = (str) => {
  if (!str.length) return null;

  let res = "";
  let count = 1;
  let currentChar = str[0];

  for (let i = 1; i < str.length; i++) {
    const char = str[i];

    if (currentChar === char) {
      count++;
    } else {
      res += `${count}${currentChar}`;
      count = 1;
      currentChar = char;
    }
  }

  return res;
};

console.log(rle("AAAAAABBBBBBACCCCCCCCCCCCCDDDAAAAAAAAAAAAA")); // 6A6B1A13C3D
