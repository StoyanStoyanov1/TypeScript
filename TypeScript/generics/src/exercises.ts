class DataStore<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): void {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    find(predicate: (item: T) => boolean): T | undefined {
        return this.items.find(predicate);
    }

    getAll(): T[] {
        return [...this.items];
    }

    clear(): void {
        this.items = [];
    }
}

const numberStore = new DataStore<number>();
numberStore.add(10);
numberStore.add(20);
numberStore.add(30);
console.log(numberStore.getAll);
numberStore.remove(20);
console.log(numberStore.getAll);
const foundNumber = numberStore.find((item) => item > 25);
console.log(foundNumber);

const stringStore = new DataStore<string>();
stringStore.add("apple");
stringStore.add("banana");
stringStore.add("cherry");
console.log(stringStore.getAll()); 
const foundString = stringStore.find((item) => item.startsWith("a"));
console.log(foundString); 


interface Product {
    id: number;
    name: string;
}

const productStore = new DataStore<Product>();
productStore.add({ id: 1, name: "Laptop" });
productStore.add({ id: 2, name: "Phone"});
productStore.add({ id: 3, name: "Tablet"});
console.log(productStore.getAll());

productStore.remove({id: 2, name: "Phone"});

const foundProduct = productStore.find((item) => item.id === 3);
console.log(foundProduct);