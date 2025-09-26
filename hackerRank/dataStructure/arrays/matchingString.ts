function matchingStrings(stringList: string[], queries: string[]): number[] {
    const countMap = stringList.reduce((map, str) => {
        map.set(str, (map.get(str) || 0) + 1) 
        return map
        }, 
        new Map<string, number>()
    );
    
    return queries.map(q => (countMap.get(q) || 0));
}
