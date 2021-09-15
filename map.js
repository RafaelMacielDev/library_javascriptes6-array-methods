// Retorna um novo array, de mesmo tamanho, iterando cada item de um array.

const arr = [1, 2, 3, 4, 5];
arr.map(value => value * 2); // [2, 4, 6, 8, 10]
console.log(arr)

// Outro exemplo

const frutas = ['melancia', 'banana', 'uva', 'maça'];
frutas.map((fruta, index) => `${index} - ${fruta}`) // ["0 - melancia", "1 - banana", "2 - uva", "3 - maça"]
console.log(frutas)