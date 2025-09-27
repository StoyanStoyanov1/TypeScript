function migratoryBirds(arr: number[]): number {
    type typeBirds = Record<1 | 2 | 3 | 4 | 5, number>;
    
    const birds: typeBirds = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    };
    
    for (const num of arr) {
        birds[num as 1|2|3|4|5]++;
    }
    
    const maxBirds = Math.max(...Object.values(birds));
    
    const filteredBirds = (Object.entries(birds) as [string, number][])
        .filter(([_, value]) => value === maxBirds)
        .map(([key]) => Number(key));
    
    return Math.min(...filteredBirds);
}