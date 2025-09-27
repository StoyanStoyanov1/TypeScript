function staircase(n: number): void {
   const result: string[] = []; 
    
   for (let i = n; i > 0; i-- ) {
        const countOfSpaces: number = i - 1;
        const countOfHash: number = Math.abs(countOfSpaces - n);
        
        const currentLine: string = " ".repeat(countOfSpaces) + "#".repeat(countOfHash);
        
        result.push(currentLine); 
   }
   
   console.log(result.join("\n"));
}
