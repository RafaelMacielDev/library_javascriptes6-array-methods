// Retorna um Array Iterator que contém os pares chave/valor para cada elemento do array

const arr = [1, 2, 3, 4];
const arrIterator = arr.entries();

arrIterator.next(); // {value: [0, 1], done: false}
arrIterator.next(); // {value: [1, 2], done: false}
arrIterator.next(); // {value: [2, 3], done: false}
arrIterator.next(); // {value: [3, 4], done: false}

// Outro Exemplo

const frutas = ['melancia', 'acerola', 'laranja', 'amora']
const frutasIterator = frutas.entries()
frutasIterator.next() // {value: [0, melancia], done: false}
frutasIterator.next() // {value: [1, acerola], done: false}
frutasIterator.next() // {value: [2, laranja], done: false}
frutasIterator.next() // {value: [3, amora], done: false}
