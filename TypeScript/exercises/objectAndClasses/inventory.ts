function inventory (input: string[]): string {
    interface Hero {
        name: string,
        level: number,
        items: string,
    };

    const heroes: Hero[] = [];

    for (const curr of input) {
        const [name, level, items] = curr.split(' / ');
        heroes.push({name,
            level: Number(level),
            items,
        });
    };

    const sortedHeroes: Hero[] = heroes.sort((a, b) => a.level - b.level);

    const result: string[] = sortedHeroes.map(hero => `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);

    return result.join('\n')
}