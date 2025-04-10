var greet1 = {
    name: "Diptadip",
    age: 29
};
console.log(greet1.name); // Output: Diptadip
console.log(greet1.age); // Output: 29
var product1 = {
    name: "Laptop",
    price: 50000,
    quantity: 2
};
var calculateTotalPrice = function (product) {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(product1)); // Output: 100000
