function worldsTracker (words: string[]): void {

    interface Word {
        name: string,
        count: number,
    }

    const firstWordSet = words.shift(); 
    const foundWords: Word[] = firstWordSet
        ? firstWordSet.split(' ').map(word => ({ name: word, count: 0 }))
        : [];

    for (const word of words) {
        const findWord = foundWords.find(curWord => word === curWord.name);

        if (findWord) {
            findWord.count += 1;
        }
    }

    const sortedWords: Word[] = foundWords.sort((a, b) => b.count - a.count);

    sortedWords.forEach(word => {
        console.log(`${word.name} - ${word.count}`);
    });
}
