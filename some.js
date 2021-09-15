// Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição

const arr = [1, 3, 3, 4, 3];
const hasSomeEvenNumber = arr.some(value => value % 2 === 0); //true
console.log(hasSomeEvenNumber)

// Outro exemplo

const students = [
    {name: 'Rafael', grade: 10},
    {name: 'Fernanda', grade: 5},
    {name: 'Marcela', grade: 2}
];
students.some(student => student.grade >= 7); // true
students.find(student => student.grade >= 7); // {name: "Rafael", grade: 10}
students.findIndex(student => student.grade >= 7); // 0