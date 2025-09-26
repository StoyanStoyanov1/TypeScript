function arrayManipulation(n: number, queries: number[][]): number {
     let diff = new Array(n + 2).fill(0);
    
    for (let [a, b, k] of queries) {
        diff[a] += k;      
        diff[b + 1] -= k;  
    }
    
    let max = 0;
    let current = 0;
    
    for (let i = 1; i <= n; i++) {
        current += diff[i];
        max = Math.max(max, current);
    }
    
    return max;
}