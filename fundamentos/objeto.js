const prod1 = {};

prod1.nome = 'Celular Ultra Mega';

console.log(prod1);

prod1.preco = 4998.90;

console.log(prod1);

prod1['Desconto Legal'] = 0.40;

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        Obj: {
            blabla: 2
        }
    }
}

console.log(prod2)

const prod3 = {
    nome: 'Camisa Polo',
    preco: 79.90,
}

// json
'{ "nome": "Camisa Polo", "preco": 79.90 }'