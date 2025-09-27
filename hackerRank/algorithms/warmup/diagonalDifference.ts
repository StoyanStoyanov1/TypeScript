function diagonalDifference(arr: number[][]): number {
    let firstSum: number = 0;
    let secondSum: number = 0;
    let endIndex: number = arr.length - 1;
    
    for (let i = 0; i < arr.length; i++) {
        firstSum += arr[i][i];
        secondSum += arr[endIndex][i];
        
        endIndex --; 
    }
    
    return Math.abs(firstSum - secondSum);
}
