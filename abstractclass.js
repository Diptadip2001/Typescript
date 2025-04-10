var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        var _this = _super.call(this) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.area = function () {
        return this.side * this.side;
    };
    Square.prototype.perimeter = function () {
        return 4 * this.side;
    };
    return Square;
}(Shape));
var circle = new Circle(5);
console.log("Circle Area:", circle.area()); // Output: Circle Area: 78.53981633974483
console.log("Circle Perimeter:", circle.perimeter()); // Output: Circle Perimeter: 31.41592653589793
var rectangle = new Rectangle(4, 5);
console.log("Rectangle Area:", rectangle.area()); // Output: Rectangle Area: 20
console.log("Rectangle Perimeter:", rectangle.perimeter()); // Output: Rectangle Perimeter: 18
var square = new Square(4);
console.log("Square Area:", square.area()); // Output: Square Area: 16
console.log("Square Perimeter:", square.perimeter()); // Output: Square Perimeter: 16
// The abstract class Shape defines the structure for all shapes, and each derived class (Circle, Rectangle, Square) implements the area and perimeter methods according to its specific shape. This allows for polymorphism, where you can treat different shapes uniformly while still allowing for their unique behaviors.   
