const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);

// acessar um item não existeste no array da um item indefinido
console.log(valores[4]);

valores [4] = 10;
console.log(valores);

valores [10] = 10;
console.log(valores);

console.log(valores.length);

valores.push({id:3}, false, null, 'teste');
console.log(valores);

// retira o ultimo valor do array
console.log(valores.pop()); 

// retira o primeiro valor do array
console.log(valores);

console.log(typeof valores);

