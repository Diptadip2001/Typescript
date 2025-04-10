//type annotation with object
var person = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    address: {
        city: "New York",
        country: "USA",
    },
};
console.log(person.name); // Output: John Doe
var person2 = {
    name: "Jane Doe",
    age: 25,
    isStudent: true,
    address: {
        city: "Los Angeles",
        country: "USA",
    },
};
console.log(person2.name); // Output: Jane Doe
var product1 = {
    name: "Laptop",
    price: 50000,
    quantity: 2
};
var calculateTotalPrice = function (product) {
    return product.price * product.quantity;
};
console.log(calculateTotalPrice(product1)); // Output: 100000
