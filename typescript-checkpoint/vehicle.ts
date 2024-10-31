// Define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implement the Car class that implements Vehicle interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Implement the start method
  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance of the Car class and initialize it
const myCar = new Car("Toyota", "Corolla", 2021);

// Call the start method on the instance
myCar.start(); // Logs: "Car engine started"
