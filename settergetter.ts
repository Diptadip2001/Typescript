class Persons {
    private _age: number | undefined;

    constructor(public name: string, protected hobbies: string[]) {}

    // Correctly placed setter method
    public set age(age: number) {
        if (age < 0 || age > 120) {
            throw new Error("Age must be between 0 and 120.");
        }
        this._age = age;
    }

    // Corrected getter method (avoiding recursion)
    public get age(): number | undefined {
        return this._age; 
    }

    introduce(): string {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1: Persons = new Persons("Diptadip", ["Reading", "Traveling"]);
person1.age = 23;  // Calls the setter
console.log(person1.introduce()); // Output: My name is Diptadip and I am 23 years old.
console.log(person1.age); // Output: 23

// Access control examples
console.log(person1.name); // ✅ Allowed (Public property)
// console.log(person1.hobbies); // ❌ Error: Cannot access protected property outside the class.