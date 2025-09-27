function breakingRecords(scores: number[]): number[] {
    let highest = scores[0];
    let lowest = scores[0];
    let highestBreaks = 0;
    let lowestBreaks = 0;
    
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > highest) {
            highest = scores[i];
            highestBreaks++;
        } else if (scores[i] < lowest) {
            lowest = scores[i];
            lowestBreaks++;
        }
    }
    
    return [highestBreaks, lowestBreaks];
}