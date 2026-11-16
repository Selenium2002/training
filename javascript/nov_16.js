
function Student(firstName, lastName, age, gender, disignation, isQualifiedEnough){

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.disignation = disignation;
    this.isQualifiedEnough = isQualifiedEnough;

} 

let showStudent = new Student("Mona", "Hegazy", 22, "female", "5 years of experience as a backend development engineer", true);

console.log(showStudent);
console.log(showStudent.firstName);
console.log(showStudent.lastName);
console.log(showStudent.age);
console.log(showStudent.gender);
console.log(showStudent.disignation);



function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = ()=>{console.log(`You drive the ${this.model}`)}
}

let car1 = new Car("Ford", "Mustang", 2024, "red");
let car2 = new Car("Audi", "Compact Sedans", 2025, "blue");
let car3 = new Car("BMW", "6-Series Gran Turismo", 2024, "black");

car1.drive();
car2.drive();
car3.drive();


