// Implement the Car class that implements Vehicle interface
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement the start method
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Create an instance of the Car class and initialize it
var myCar = new Car("Toyota", "Corolla", 2021);
// Call the start method on the instance
myCar.start(); // Logs: "Car engine started"
