function garage(arrOfStrings: string[]): string {
    const garage: { [key: string]: string[] } = {};
    const result: string[] = [];

    for (let currentStr of arrOfStrings) {
        const [garageNum, moreInfo] = currentStr.split(' - ');
        const carInfo = moreInfo.split(': ').join(' - ');

        if (!(garageNum in garage)) {
            garage[garageNum] = [];
        }

        garage[garageNum].push(carInfo);
    }

    Object.entries(garage).forEach(([garNum, carInfo]) => {
        result.push(`Garage № ${garNum}`);
        result.push(`--- ${carInfo.join('\n--- ')}`);
    });

    return result.join('\n');
}
