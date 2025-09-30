function minimumNumber(n: number, password: string): number {
    
     const numbers = "0123456789";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialCharacters = "!@#$%^&*()-+";
    const leastLength = 6;

    let missingTypes = 0;

    if (![...password].some(l => numbers.includes(l))) missingTypes++;
    if (![...password].some(l => lowerCase.includes(l))) missingTypes++;
    if (![...password].some(l => upperCase.includes(l))) missingTypes++;
    if (![...password].some(l => specialCharacters.includes(l))) missingTypes++;

    return Math.max(missingTypes, leastLength - n);
}