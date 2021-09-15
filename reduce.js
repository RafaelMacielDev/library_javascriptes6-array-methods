// Retorna um novo tipo de dado iterando cada posição de um array.

const arr = [1, 2, 3, 4, 5];

arr.reduce((total, value) => total += value, 0); //15

// Outro exemplo

const students = [
    {name: 'Rafael', grade: 10},
    {name: 'Fernanda', grade: 5},
    {name: 'Marcela', grade: 2}
];

students.reduce((totalGrades, student) => totalGrades += student.grade, 0) //17
students.reduce((totalGrades, student) => totalGrades += student.grade, 0) / students.length //5,6