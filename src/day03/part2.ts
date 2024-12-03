import { parseInput } from '../util/index.js';

const opRegex = new RegExp(/(mul)\((\d{1,3}),(\d{1,3})\)|(do)\(\)|(don't)\(\)/g)

type Operator = 'mul' | 'do' | 'don\'t'

interface Operation {
  operator: Operator,
  x?: number,
  y?: number,
}

const input = parseInput({
  split: { mapper: (e) => {
    const matches = e.matchAll(opRegex);
    let matchArray = Array.from(matches, (out): Operation => {
      const filtered = out.filter((value) => value != undefined)
      if (filtered[1] === 'mul') {
        return {
          operator: filtered[1] as Operator,
          x: Number(filtered[2]),
          y: Number(filtered[3]),
        }
      }
      return { operator: filtered[1] as Operator }
    });
    return matchArray;
  } },
});

let result = 0;
let enabled = true;
input.forEach((operations) => {
  
  operations.forEach((operation) => {
    switch (operation.operator) {
      case 'mul':
        if (enabled) {
          result += (operation.x ?? 0) * (operation.y ?? 0);
        }
        break;
      case 'do':
        enabled = true;
        break;
      case 'don\'t':
        enabled = false;
        break;
    }
  })
});

export default result;
