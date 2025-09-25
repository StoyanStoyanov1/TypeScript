function sequences(inputStrings: string[]): number[][] {
    const uniqueArrays = new Set<string>();
    const orderedArrays: number[][] = [];

    inputStrings.forEach(arr => {
        const numArr: number[] = JSON.parse(arr).sort((a: number, b: number) => b - a);
        const strArr: string = JSON.stringify(numArr);

        if (!uniqueArrays.has(strArr)) {
            uniqueArrays.add(strArr);
            orderedArrays.push(numArr);
        }
    });

    orderedArrays.sort((a, b) => a.length - b.length);

    return orderedArrays;
}
