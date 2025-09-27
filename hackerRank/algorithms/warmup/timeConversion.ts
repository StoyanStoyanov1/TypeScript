function timeConversion(s: string): string {
    const typeOfTime = s.slice(-2); 
    let [hour, minutes, seconds] = s.slice(0, -2).split(":");
    let hourNum = parseInt(hour);

    if (typeOfTime === "AM" && hourNum === 12) {
        hourNum = 0;
    } else if (typeOfTime === "PM" && hourNum < 12) {
        hourNum += 12;
    }

    const hourStr = hourNum.toString().padStart(2, "0");

    return `${hourStr}:${minutes}:${seconds}`;
}
