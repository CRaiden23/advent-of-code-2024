import { parseInput } from '../util/index.js';

const mulRegex = new RegExp(/(mul)\((\d{1,3}),(\d{1,3})\)/g)

interface Operation {
  operator: string,
  x: number,
  y: number,
}

const input = parseInput({
  split: { mapper: (e) => {
    const matches = e.matchAll(mulRegex)
    let matchArray = Array.from(matches, (out) => {return {
      operator: out[1],
      x: Number(out[2]),
      y: Number(out[3]),
    } as Operation});
    
    return matchArray;
  } },
});

let result = 0;
input.forEach((operations) => {
  operations.forEach((operation) => {
    console.log(operation)
    result += operation.x * operation.y
  })
});

export default result;
