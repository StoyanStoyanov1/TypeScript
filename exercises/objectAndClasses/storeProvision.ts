function storeProvision (...allProducts: string[][]): void {
    const store: {[key: string]: number} = {};


    function addProducts(store: {[key: string]: number}, products: string[]): {[key: string]: number} {

        for (let i = 0; i < products.length; i += 2) {
            const product: string = products[i];
            const value: number = Number(products[i + 1]);
            if (!(product in store)) {
                store[product] = 0;
            }

            store[product] += value;

        }

        return store;
    };

    let objProducts: {[key:string]: number} = {};

    for (const products of allProducts) {
        objProducts = addProducts(objProducts, products);
    };

    Object.entries(objProducts).forEach(([product, count]) => {
        console.log(`${product} -> ${count}`);
    });
}