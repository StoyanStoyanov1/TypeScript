function hourglassSum(arr: number[][]): number {
  const hourglassSums: number[] = [];
  
  for (let i = 0; i <= arr.length - 3; i++) {
    for (let c = 0; c <= arr[0].length - 3; c++) {
      const sum = getSum(arr, i, c);
      hourglassSums.push(sum);
    }
  }
  
  return Math.max(...hourglassSums);
}
 
function getSum(matrix: number[][], row: number, col: number): number {
  let allNumbers: number[] = [];
 
  for (let r = 0; r < 3; r++) {
    if (r % 2 === 0) {
      for (let i = 0; i < 3; i++) {
        allNumbers.push(matrix[row + r][col + i]);
      }
    } else {
      allNumbers.push(matrix[row + r][col + 1]);
    }
  }
 
  return allNumbers.reduce((sum, val) => sum + val, 0);
}