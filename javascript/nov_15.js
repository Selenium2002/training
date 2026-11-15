let student_1 = {};

student_1.firstName = "Ismail";
student_1.lastName = "Abokhalifa";
student_1.age = 24;
student_1.gender = "Male";
student_1.disignation = "Junior Front-end Development Engineer";
student_1.isQualifiedEnough = false;

console.log(student_1);

let showStudent = (firstName, lastName, age, gender, disignation, isQualifiedEnough) => {
    let student_2 = {};
    student_2.firstName = firstName;
    student_2.lastName = lastName;
    student_2.age = age;
    student_2.gender = gender;
    student_2.disignation = disignation;
    student_2.isQualifiedEnough = isQualifiedEnough;

    return student_2;
} 

let showObjectStudent = showStudent("Mona", "Hegazy", 22, "female", "5 years of experience as a backend development engineer", true);

console.log(showObjectStudent);
