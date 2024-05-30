/**
 * Напишите функцию `typeWriter(delay, outputChar)`, возвращающую функцию `writeText(text)`.
 *
 * `writeText(text)` далее вызывается несколько раз в разные моменты времени и должна вызывать
 * `outputChar` поочерёдно для каждого символа строки text с задержкой в `delay` миллисекунд.
 *
 * writeText('ab')
 * writeText('CD')     writeText('ef')           writeText('xy')
 *             │                   │                         │
 *             ▼         250ms     ▼          750ms          ▼
 *             ├───────┬───────┬───┴───┬───────┬───────┬ ... ┼───────┐
 *             ▲ 100ms ▲ 100ms ▲ 100ms ▲ 100ms ▲ 100ms ▲ ... ▲ 100ms ▲
 *             │       │       │       │       │       │     │       │
 * outputChar('a')    'b'     'C'     'D'     'e'     'f'   'x'     'y'
 *
 * type OutputChar = (char: string) => void
 * type WriteText = (text: string) => void
 * function typeWriter(delay: number, outputText: OutputChar): WriteText
 *
 * Дополнительно:
 * Решение должно быть линейным по сложности и «отпускать» ссылку на строку сразу
 * же после того, как последний символ строки был выведен.
 */

function typeWriter(delay, outputChar) {
  const buffer = [];
  let timer = false;

  return function throttle(text = "") {
    buffer.push(...text);

    if (!timer && buffer.length) {
      outputChar(buffer.shift());

      timer = true;
      setTimeout(() => {
        timer = false;
        throttle();
      }, delay);
    }
  };
}

let start = Date.now();

const outputChar = (char) => console.log(`${Date.now() - start}: ${char}`);

const writeText = typeWriter(100, outputChar);

writeText("");
writeText("ab");
writeText("CD");
setTimeout(() => writeText("ef"), 250);
setTimeout(() => writeText("xy"), 1000);

/*
'1: a' 
'104: b' 
'206: C' 
'307: D' 
'409: e' 
'510: f' 
'1004: x' 
'1106: y'
*/
