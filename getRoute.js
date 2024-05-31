/**
 * У нас есть набор билетов вида:
 * [
 * { from: 'London', to: 'Moscow' },
 * { from: 'NY', to: 'London' },
 * { from: 'Moscow', to: 'SPb' },
 * ...
 * ]
 *
 * Из этих билетов можно построить единственный, неразрывный маршрут.
 * Петель и повторов в маршруте нет.
 * Нужно написать программу, которая возвращает эти же объекты билетов
 * в порядке следования по маршруту.
 */

const tickets = [
  { from: "London", to: "Moscow" },
  { from: "NY", to: "London" },
  { from: "Moscow", to: "SPb" },
];

function getRoute(tickets = []) {
  // const path = [];
  // while (tickets.length) {
  //   const ticket = tickets.shift();
  //   if (!path.length) {
  //     path.push(ticket);
  //   } else {
  //     const last = path[path.length - 1];
  //     const first = path[0];
  //     if (last.to === ticket.from) {
  //       path.push(ticket);
  //     } else if (first.from === ticket.to) {
  //       path.unshift(ticket);
  //     } else {
  //       ticket.push(ticket);
  //     }
  //   }
  // }
  // return path;
  const result = [];
  const finishPoints = {};
  const startPoints = {};

  tickets.forEach((ticket) => {
    startPoints[ticket.from] = ticket;
    finishPoints[ticket.to] = ticket;
  });

  let currentTicket = tickets.find((ticket) => !(ticket.from in finishPoints));

  while (currentTicket) {
    result.push(currentTicket);
    currentTicket = startPoints[currentTicket.to];
  }

  return result;
}

console.log(getRoute(tickets));

// [
// { from: 'NY', to: 'London' },
// { from: 'London', to: 'Moscow' },
// { from: 'Moscow', to: 'SPb' }
// ]
