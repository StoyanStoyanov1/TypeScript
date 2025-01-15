function oddOccurrences (singleString: string): void {
    const words: {[key: string]: number} = {};

    for (const word of singleString.split(' ')) {
        const currentWord: string = word.toLowerCase();

        if (!(currentWord in words)) {
            words[currentWord] = 0;
        }

        words[currentWord] += 1;
    };

    const result: string[] = [];

    for (const [key, value] of Object.entries(words)) {
        if (value % 2 !== 0) {
            result.push(key);
        }
    }

    console.log(result.join(' '));
}