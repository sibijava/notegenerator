function getNumbersOnly(input) {
  const numberArray = [];
  for (let i = 0; i < input.length; i++) {
    numberArray.push(input[i]);
  }
  let numberWithoutDashes = numberArray.filter((x) => parseInt(x) < 10);
  numberWithoutDashes = numberWithoutDashes.reduce((prev, curr) => prev + curr);
  return numberWithoutDashes;
}

console.log(getNumbersOnly("405 - 788 - 5525"));
