var a = 3;
var b = a;

console.log(a);
console.log(b);

b++
console.log(b);
console.log(a);


//  

let valor // não inicializada
console.log(valor); // definido
// console.log(valor2); // não definido retorna um erro

valor = null; // ausência de valor
console.log(valor);
//console.log(valor.toString()) // erro, não pode ler a propriedade de um valor null

const produto = {};
console.log(produto.preco); //indefinido o preço 
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco // para tirar um atributo de um item usar delete.
console.log(produto);

produto.preco = null //sem preço
console.log(!!produto.preco);
console.log(produto); 