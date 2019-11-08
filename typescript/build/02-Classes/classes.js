// Classes allow us to create 'blueprints' for objects
// In Angular 2 we use classes a lot. For example to create Components, Services, Directives, Pipes, ...
// How to create a class
var Car = /** @class */ (function () {
    function Car(speed) {
        this.speed = speed || 0;
        this.engineName = 'KLV-2oo';
    }
    Car.prototype.accelerate = function () {
        this.speed++;
    };
    Car.prototype.throttle = function () {
        this.speed--;
    };
    Car.prototype.getSpeed = function () {
        console.log(this.speed);
    };
    Car.prototype.getEngineName = function () {
        return this.engineName;
    };
    Car.numberOfWheels = function () {
        return 4;
    };
    return Car;
}());
// Instantiate (create) an object from a class
var car_ins = new Car(5);
car_ins.accelerate();
car_ins.getSpeed();
console.log(Car.numberOfWheels());
console.log(car_ins.engineName);
//# sourceMappingURL=classes.js.map