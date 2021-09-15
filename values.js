// Retorna um Array Iterator que contém os valores para cada elemento do array

const arr = [1, 2, 3, 4];
const arrIterator = arr.values();

arrIterator.next(); // {value: 1, done: false}
arrIterator.next(); // {value: 2, done: false}
arrIterator.next(); // {value: 3, done: false}
arrIterator.next(); // {value: 4, done: true}