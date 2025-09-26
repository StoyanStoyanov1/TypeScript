function lengthOfLongestSubstring(s: string): number {
    const lastIndex = new Map<string, number>();
    let maxLen = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (lastIndex.has(ch) && lastIndex.get(ch)! >= start) {
            start = lastIndex.get(ch)! + 1;
        }
        lastIndex.set(ch, i);
        maxLen = Math.max(maxLen, i - start + 1);
    }

    return maxLen;
}
