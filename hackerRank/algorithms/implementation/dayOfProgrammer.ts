function dayOfProgrammer(year: number): string {
    const februaryDays = getFebriaryDays(year);
    
    const daysUntilAugust = 31 + februaryDays + 31 + 30 + 31 + 30 + 31 + 31;
    
    const dayInSeptember = 256 - daysUntilAugust;
    
    return formatDate(dayInSeptember, 9, year);
}

function getFebriaryDays(year: number): number {
    if (year === 1918) {
        return 15;
    }
    
    return isLeapYear(year) ? 29 : 28;
}

function isLeapYear(year: number): boolean {
    if (year <= 1917) {
        return year % 4 === 0;
    } else {
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    }
}

function formatDate(day: number, month: number, year: number): string {
    const dayStr = day.toString().padStart(2, '0');
    const monthStr = month.toString().padStart(2, '0');
    return `${dayStr}.${monthStr}.${year}`;
}