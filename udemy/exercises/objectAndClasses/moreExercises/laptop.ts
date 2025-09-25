interface Info {
    producer: string;
    age: number;
    brand: string;
}

class Laptop {
    info: Info;
    isOn: boolean = false;
    quality: number;

    constructor (info: Info, quality: number) {
        this.info = info;
        this.isOn = false;
        this.quality = quality;
    }


    turnOn (): void {
        this.isOn = true;
        this.quality -= 1;
    }

    turnOff (): void {
        this.isOn = false;
        this.quality -= 1;
    }

    showInfo (): string {
        return JSON.stringify(this.info);
    }

    get price (): number {
        return 800 - this.info.age * 2 + this.quality * 0.5;
    }

}