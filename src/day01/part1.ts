import { parseInput } from '../util/index.js';

const leftCol: number[] = [];
const rightCol: number[] = [];
const diffs: number[] = [];

parseInput({
  split: {
    mapper: (e) =>
      e
        .split('  ')
        .map((value) => Number(value))
        .map((value, index) =>
          index & 1 ? rightCol.push(value) : leftCol.push(value)
        ),
  },
});
leftCol.sort();
rightCol.sort();

leftCol.forEach((left, index) => {
  diffs.push(Math.abs(left - rightCol[index]));
});

const result = diffs.reduce((prev, curr) => {
  return prev + curr;
});

export default result;
