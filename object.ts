//type annotation with object

const person: {
    name: string;
    age: number;
    isStudent: boolean;
    address: {
        city: string;
        country: string;
    };
} = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    address: {
        city: "New York",
        country: "USA",
    },
};
console.log(person.name); // Output: John Doe


//Type Alias 
// It is a way to create a new name for a type. It can be used to create a new name for an existing type or to create a new type based on existing types. Type aliases are often used to simplify complex types or to create more readable code.
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address: {
        city: string;
        country: string;
    };
};
const person2: Person = {
    name: "Jane Doe",
    age: 25,
    isStudent: true,
    address: {
        city: "Los Angeles",
        country: "USA",
    },
};
console.log(person2.name); // Output: Jane Doe

type product={
name:string;
price:number;
quantity:number;
}
const product1:product={
    name:"Laptop",
    price:50000,
    quantity:2
}
const calculateTotalPrice=(product:product):number=>{
    return product.price*product.quantity;
}
console.log(calculateTotalPrice(product1)); // Output: 100000
