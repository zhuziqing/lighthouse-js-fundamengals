const loopyLighthouse = (range, multiples, words) => {
  let start = range[0];
  let end = range[1];
  let result = [];
  let mOne = multiples[0];
  let mTwo = multiples[1];
  let wOne = words[0];
  let wTwo = words[1];
  for (let i = start; i <= end; i++) {
    if (i % (mOne * mTwo) === 0) {
      result.push(wOne + wTwo);
    } else if (i % mOne === 0) {
      result.push(wOne);
    } else if (i % mTwo === 0) {
      result.push(wTwo);
    } else {
      result.push(i);
    }
  }
  return result;
};

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
