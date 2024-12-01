import { parseInput } from '../util/index.js';

const leftCol: number[] = [];
const rightCounts = new Map<number, number>();

parseInput({
  split: {
    mapper: (e) =>
      e
        .split('  ')
        .map((value) => Number(value))
        .map((value, index) => {
          if (index & 1) {
            if (rightCounts.has(value)) {
              const count = rightCounts.get(value) ?? 0;
              rightCounts.set(value, count + 1);
            } else {
              rightCounts.set(value, 1);
            }
          } else {
            leftCol.push(value);
          }
        }),
  },
});

let result = 0;
leftCol.forEach((value) => {
  result += value * (rightCounts.get(value) ?? 0);
});

export default result;
