function catalogue (products: string[]): string {
     
    const objCatalogue: {[key: string]: {[key: string]: number}} = {};

    for (const product of products) {
        const [name, price] = product.split(' : ');
        const key = name[0];
        
        if (!(key in objCatalogue)) {
            objCatalogue[key] = {};
        }

        objCatalogue[key][name] = Number(price);
    }

    const sortedCatalogue = Object.keys(objCatalogue).sort();
    const result: string[] = [];

    sortedCatalogue.forEach(key => {
        const sortedProducts = Object.keys(objCatalogue[key]).sort((a, b) => a.localeCompare(b, 'en'))
        result.push(key)
        sortedProducts.forEach(product => {
            result.push(`  ${product}: ${objCatalogue[key][product]}`)
        });
    });


    return result.join('\n');

}