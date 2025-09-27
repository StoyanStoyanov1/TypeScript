function birthday(s: number[], d: number, m: number): number {
     let counter: number = 0;
    
    for (let i = 0; i <= s.length - m; i++) {
        const sum: number = s.slice(i, i + m).reduce((a, b) => a + b, 0);
        if (sum == d) {
            counter++;
        }
    }
    
    return counter;

}