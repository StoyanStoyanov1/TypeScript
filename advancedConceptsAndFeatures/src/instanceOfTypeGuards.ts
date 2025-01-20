abstract class Product {
    constructor(public name: string, public price: number) {}

    abstract getPrice(): number;
}

class Electronics extends Product {
    constructor(name: string, price: number, public warranty: number) {
        super(name, price);
    }

    getPrice(): number {
        return this.price;
    }
}

class Clothing extends Product {
    constructor(
        name: string,
        price: number,
        public size: string,
        public material: string
    ) {
        super(name, price);
    }

    getPrice(): number {
        return this.price;
    }
}

function displayDetails(product: Product): void {
    console.log(`Name: ${product.name}`);
    console.log(`Name: ${product.getPrice()}`);
  
    if (product instanceof Electronics) {
      console.log(`Warranty: ${product.warranty}`);
    } else if (product instanceof Clothing) {
      console.log(`Size: ${product.size}`);
      console.log(`Material: ${product.material}`);
    }
  }