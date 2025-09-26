function plusMinus(arr: number[]): void {
  type TypeCounterOfTypeOfNumbers = {
    positive: number;
    negative: number;
    zero: number;
  };

  const counterOfTypeOfNumbers: TypeCounterOfTypeOfNumbers = {
    positive: 0,
    negative: 0,
    zero: 0,
  };

  for (const num of arr) {
    if (num > 0) {
      counterOfTypeOfNumbers.positive += 1;
    } else if (num === 0) {
      counterOfTypeOfNumbers.zero += 1;
    } else {
      counterOfTypeOfNumbers.negative += 1;
    }
  }

  Object.values(counterOfTypeOfNumbers)
    .forEach(num => console.log((num / arr.length).toFixed(6)));
}