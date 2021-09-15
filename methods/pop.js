// Remove o último elemento de um array e retorna o elemento removido.

const frutas = ['melancia', 'banana', 'laranja'];
frutas.pop('laranja');
console.log(frutas)

const arr = ['banana', 'melancia', 'abacate'];
const removedItem = arr.pop();

console.log(removedItem) //Apenas o que retirou.
console.log(arr); //Apenas os que ficaram.