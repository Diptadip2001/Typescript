var arr = ["Jasmine", "Rose", "Lilly", "Lotus"];
var arr1 = [true, "Diptadip", "Vishnu"];
var arr2 = [true, 20, false, 30];
console.log(arr);
console.log(arr1);
console.log(arr2);
var product = {
    pname: "Diptadip",
    pprice: 100,
    expired: false
};
var abc = function (obj1) {
    return obj1;
};
console.log(abc(product)); // Output: { pname: 'Diptadip', pprice: 100, expired: false }
var price = function (obj2) {
    return obj2.pprice;
};
var res = abc({ pname: "Diptadip", pprice: 100, expired: false });
console.log(res); // Output: 100
console.log(price(product)); // Output: 100
;
//tuples
//fixed length array with predefined types of each element
var details = ["Diptadip", 29, true];
console.log(details[0]); // Output: Diptadip
console.log(details[1]); // Output: 29
console.log(details[2]); // Output: true
