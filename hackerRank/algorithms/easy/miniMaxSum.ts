function miniMaxSum(arr: number[]): void {
    let minSum: number;
    let maxSum: number;
    
    for (let i = 0; i < arr.length; i++) {
        let currentSum: number = 0;
        for (let j = 0; j < arr.length; j++) {
            if (j != i) {
                currentSum += arr[j];
            }
        }
        
        if (!minSum || minSum > currentSum) minSum = currentSum;
        if (!maxSum || maxSum < currentSum) maxSum = currentSum;
        
    }
    
    console.log(minSum + " " + maxSum);

}