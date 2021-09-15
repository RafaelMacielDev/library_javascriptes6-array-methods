// Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada (depth)

const arr = [1, 2, [3, 4]];
arr.flat(); // [1, 2, 3, 4]

// Novo Exemplo

const idades = [20, 49, [18, 16, [12, 8]]];
arr.flat(2) // [20, 49, 18, 16, 12, 8]