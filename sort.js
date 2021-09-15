// Ordena os elementos de um array de acordo com a condição

const arr = [1, 3, 2, 5, 4];
arr.sort(); // [1, 2, 3, 4, 5]


// Outro Exemplo

const students = [
    {name: 'Rafael', grade: 10},
    {name: 'Fernanda', grade: 5},
    {name: 'Marcela', grade: 2}
];
students.sort((current, next) => current.grade - next.grade);
//[   {name: 'Rafael', grade: 10},
//    {name: 'Fernanda', grade: 5},
//    {name: 'Marcela', grade: 2}
//]; //Retorna um array ordenado.