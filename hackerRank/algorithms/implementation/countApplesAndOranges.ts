function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    const applesOnHouse = apples.filter(distance => {
        const position: number = a + distance;
        return position >= s && position <= t;
    }).length;
    
    const orangesOnHouse = oranges.filter(distance => {
        const position: number = b + distance;
        return position >= s && position <= t;
    }).length;
    
    console.log(applesOnHouse);
    console.log(orangesOnHouse);

}