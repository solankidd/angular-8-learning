// Classes allow us to create 'blueprints' for objects
// In Angular 2 we use classes a lot. For example to create Components, Services, Directives, Pipes, ...

// How to create a class

class Car {
    engineName: string;
    gears: number;
    private speed: number;

    constructor(speed: number) {
        this.speed = speed || 0;
        this.engineName = 'KLV-2oo'
    }

    accelerate(): void {
        this.speed++;
    }

    throttle():void {
        this.speed--;
    }

    getSpeed():void {
        console.log(this.speed);
    }

    getEngineName():string {
        return this.engineName;
    }

    static numberOfWheels(): number {
        return 4;
    }
}

// Instantiate (create) an object from a class

let car_ins = new Car(5);
car_ins.accelerate();
car_ins.getSpeed();

console.log(Car.numberOfWheels());
console.log(car_ins.engineName);