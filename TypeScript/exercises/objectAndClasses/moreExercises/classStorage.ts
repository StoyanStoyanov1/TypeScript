class ClassStorage {
    capacity: number;
    storage: {name: string, price: number, quantity: number}[];
    totalCost: number;

    constructor (capacity: number) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct (product: {name: string, price: number, quantity: number}): void {
        this.capacity -= product.quantity;
        this.totalCost += product.quantity * product.price;
        this.storage.push(product);
    }

    getProducts (): string {
        return JSON.stringify(this.storage);
    }
}