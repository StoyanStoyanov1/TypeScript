function sockMerchant(n: number, ar: number[]): number {
    const colors = new Map<number, number>();

    for (const num of ar) {
        colors.set(num, (colors.get(num) || 0) + 1);
    }

    let pairs: number = 0;

    for (const color of colors.values()) {
        pairs += Math.floor(color / 2);
    }

    return pairs;

}