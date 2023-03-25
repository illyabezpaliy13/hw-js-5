const number = 1;
const start = 35;
const end = 40;
const isNotInRange = number <= start && number >= end;
const isInRange = !isNotInRange;
console.log(isInRange);