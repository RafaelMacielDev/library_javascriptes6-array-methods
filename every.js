// Retorna um booleano verificando se todos os itens de um arrary satisfazem a condição.

const arr = [1, 3, 3, 4, 3];

const allEvenNumbers = arr.every(value => value % 2 === 0); //false

// Outro Exemplo

const students = [
    {name: 'Rafael', grade: 10},
    {name: 'Fernanda', grade: 5},
    {name: 'Marcela', grade: 2}
];
students.every(student => student.grade >= 7); // false
students.find(student => student.grade >= 7); // {name: "Fernanda", grade: 5} //A primeira/o aluno que não passou.
students.findIndex(student => student.grade >= 7); // 0