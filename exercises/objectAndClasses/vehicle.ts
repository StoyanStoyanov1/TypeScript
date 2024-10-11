class Vehicle {
    type: string;
    model: string;
    parts: { engine: number; power: number; quality?: number };
    fuel: number;

    constructor(type: string, model: string, parts: { engine: number; power: number }, fuel: number) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.parts.quality = this.parts.engine * this.parts.power; 
    }

    drive(fuelLoss: number): void {
        this.fuel -= fuelLoss; 
    }
}
