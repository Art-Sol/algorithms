/**
 * Дана вложенная структура файлов и папок.
 *
 * Нужно вывести в консоль файлы и папки с отступами, чтобы показать вложенность.
 * Решение должно учитывать любую вложенность элементов (т.е. не должно содержать рекурсивные вызовы)
 *
 * folder
 *   file1.txt
 *   file2.txt
 *   images
 *     image.png
 *     vacation
 *     crocodile.png
 *     penguin.png
 *   shopping-list.pdf
 */

const data = {
  name: "folder",
  children: [
    { name: "file1.txt" },
    { name: "file2.txt" },
    {
      name: "images",
      children: [
        { name: "image.png" },
        {
          name: "vacation",
          children: [{ name: "crocodile.png" }, { name: "penguin.png" }],
        },
      ],
    },
    { name: "shopping-list.pdf" },
  ],
};

function printDirectoryStructure(data) {
  const queue = [{ ...data, level: 0 }];

  while (queue.length) {
    const el = queue.pop();
    const shift = el.name.length + el.level;

    console.log(el.name.padStart(shift));

    if (el.children) {
      el.children.reverse().forEach((child) => {
        queue.push({ ...child, level: el.level + 2 });
      });
    }
  }
}

printDirectoryStructure(data);
