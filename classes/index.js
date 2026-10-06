class Car {
    
    constructor(name, color) {
        console.log(this, "What is this");
        this.name = name;
        this.color = color;
    }

    drive() {
        console.log("Car is driving");
    }
}

const car1 = new Car("BMW", "Black");
const car2 = new Car("Audi", "White");
console.log(car1.name);