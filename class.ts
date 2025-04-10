class Persons{
    name:string;
    age:number;
    hobbies:string[];
    
    constructor(name:string,age:number,hobbies:string[]){
        this.name=name;
        this.age=age;
        this.hobbies=hobbies;
    }
    introduce():string{
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I like ${this.hobbies.join(", ")}.`;
    }

}
class student extends Persons{
    student_id:number;
    constructor(name:string,age:number,hobbies:string[],student_id:number){
        super(name,age,hobbies);
        this.student_id=student_id;
    }
    introduce():string{
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I like ${this.hobbies.join(", ")}. My student ID is ${this.student_id}.`;
    }
}
const person1:Persons=new Persons("Diptadip",29,["cricket","football"]);
const person2:Persons=new Persons("Diya",23,["art","dance"]);
console.log(person1.name); // Output: vinod
console.log(person1.age); // Output: 29
console.log(person1.hobbies); // Output: ["cricket","football"]
console.log(person2.name); // Output: Diya
console.log(person2.age); // Output: 23
console.log(person2.hobbies); // Output: ["art","dance"]
console.log(person2.introduce()); // Output: Hello, my name is Diya, I am 23 years old and I like art, dance.
console.log(person1.introduce()); // Output: Hello, my name is Diptadip, I am 29 years old and I like cricket, football.
const student1:student=new student("Diptadip",29,["cricket","football"],101);
const student2:student=new student("Diya",23,["art","dance"],102);
console.log(student1.name); // Output: vinod
console.log(student1.age); // Output: 29
console.log(student1.hobbies); // Output: ["cricket","football"]
console.log(student1.student_id); // Output: 101
console.log(student2.name); // Output: Diya
console.log(student2.age); // Output: 23
console.log(student2.hobbies); // Output: ["art","dance"]
console.log(student2.student_id); // Output: 102
console.log(student2.introduce()); // Output: Hello, my name is Diya, I am 23 years old and I like art, dance. My student ID is 102.

