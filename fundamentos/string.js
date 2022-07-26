const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola'.concat(escola).concat("!"));

// substituia todos os digitos dentro do texto pela letra " e "
console.log(escola.replace(/\d/, 'e'));

// substituia todas as letras e os digitos dentro do texto pela letra " e "
console.log(escola.replace(/\w/g, 'e'));

// converte essa strings em um array, transformando em elementos array a partir da ","
console.log('Ana, Maria, Pedo'.split(','));
