interface stud{
    name:string;
    age:number;
    roll:number;
}
interface studAddress{
    city:string;
    state:string;
    country:string;
}
interface data extends stud,studAddress{}
const student:data={
    name:"Diptadip",
    age:23,
    roll:123,
    city:"Kolkata",
    state:"WB",
    country:"India"
}
console.log(student.name); // Output: Diptadip
console.log(student.age); // Output: 23
console.log(student.roll); // Output: 123
console.log(student.city); // Output: Kolkata
console.log(student.state); // Output: WB

class biodata implements stud{
    name:string;
    age:number;
    roll:number;
    constructor(name:string,age:number,roll:number){
        this.name=name;
        this.age=age;
        this.roll=roll;
    }
    display():void{
        console.log(this.name,this.age,this.roll);
    }
}
const student2=new biodata("Diptadip",23,123);
student2.display(); // Output: Diptadip 23 123
