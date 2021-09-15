const users = ['Rafael', 'Fernanda', 'Steven'];

const gender = {
    MAN: Symbol ('M'),
    WOMAN: Symbol ('W')
}

const persons = [
    {
        name: 'Rafael',
        age: 31,
        gender: gender.MAN
    },
    {
        name: 'Fernanda',
        age: 18,
        gender: gender.WOMAN
    },
    {
        name: 'Steven',
        age: 62,
        gender: gender.MAN
    }
];

// Retornar a quantidade de itens de um array
console.log('Items: ', persons.length);

// Verificar se é array
console.log('A variavel persons é um array: ', Array.isArray(persons));

// Iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name} index: ${index}`, arr);
});

// Filtrar array - Nesse caso, apenas homens da lista
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

// Retorna um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
    return person;
});
console.log('\nPessoas com a adição do course: ', personsWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);
console.log('\nSoma de idade das pessoas', totalAge);

// Juntando operações
const totalEvenAges = persons
.filter(person => person.age%2 === 0)
.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);
console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);

// Cria uma nova instância de array de acordo com os parâmetros informados.

const arrWith3Positions = Array(3)
console.log(arrWith3Positions)

const personsList = Array('Rafael', 'Copo', 'Pote')
console.log(personsList)