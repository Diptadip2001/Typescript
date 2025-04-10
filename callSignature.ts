type Student = {
    name: string;
    age: number;
    gender?: string;
};

const student1: Student = {
    name: "Diptadip",
    age: 29,
};

// Correct function definition
const instruction = (student: Student): void => {
    console.log(`Name: ${student.name}, Age: ${student.age}`);
};

instruction(student1);