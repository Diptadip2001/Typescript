abstract class Shape{
    abstract area(): number; // Abstract method to calculate area
    abstract perimeter(): number; // Abstract method to calculate perimeter
}
class Circle extends Shape{
    constructor(private radius: number){
        super();
    }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape{
    constructor(private width: number, private height: number){
        super();
    }
    area(): number {
        return this.width * this.height;
    }
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}
class Square extends Shape{
    constructor(private side: number){
        super();
    }
    area(): number {
        return this.side * this.side;
    }
    perimeter(): number {
        return 4 * this.side;
    }
}
const circle = new Circle(5);
console.log("Circle Area:", circle.area()); // Output: Circle Area: 78.53981633974483
console.log("Circle Perimeter:", circle.perimeter()); // Output: Circle Perimeter: 31.41592653589793
const rectangle = new Rectangle(4, 5);
console.log("Rectangle Area:", rectangle.area()); // Output: Rectangle Area: 20
console.log("Rectangle Perimeter:", rectangle.perimeter()); // Output: Rectangle Perimeter: 18
const square = new Square(4);
console.log("Square Area:", square.area()); // Output: Square Area: 16
console.log("Square Perimeter:", square.perimeter()); // Output: Square Perimeter: 16
// The abstract class Shape defines the structure for all shapes, and each derived class (Circle, Rectangle, Square) implements the area and perimeter methods according to its specific shape. This allows for polymorphism, where you can treat different shapes uniformly while still allowing for their unique behaviors.   