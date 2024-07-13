/**
 * Скобочки
 *
 * На вход строка в которой могут быть только символы скобочек "(", ")", "{", "}", "[", "]",
 * открывающие и закрывающие, в любом количестве и порядке.
 * Необходимо проверить является данная последовательность скобочек валидной:
 * - у каждой открывающей скобочки должна быть закрывающая: "( )" - валидно, "( ]" - не валидно
 * - последовательности скобочек могут быть вложены друг в друга: "{ [ ] }" - валидно
 * - не должно быть пересечений скобочек: "{ [ } ]" - не валидно
 *
 * Например, такая последовательность "{ [ [ ] { } ] } ( ) ( )" является валидной
 */

const checkValidBrackets = (brackets) => {
  const closedBrackets = ["}", "]", ")"];
  const bracketsDict = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  const stack = [];

  for (let i = 0; i < brackets.length; i++) {
    const currBracket = brackets[i];

    if (closedBrackets.includes(currBracket)) {
      const lastOpenedBracket = stack.pop(); //

      if (bracketsDict[currBracket] !== lastOpenedBracket) {
        return false;
      }
    } else {
      stack.push(currBracket);
    }
  }

  return stack.length === 0;
};

console.log(checkValidBrackets("{[[]{}]}()()")); // true
console.log(checkValidBrackets("{[[]{}]}()()(")); // false
console.log(checkValidBrackets("{[}]")); // false
