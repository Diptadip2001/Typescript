interface greet{
    name:string;
    age:number
}
const greet1:greet={
    name:"Diptadip",
    age:29
}
console.log(greet1.name); // Output: Diptadip
console.log(greet1.age); // Output: 29
interface product{
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
