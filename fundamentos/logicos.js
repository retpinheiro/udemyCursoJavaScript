function compras(trabalho1, trabalho2){
    const comprarSorvete =  trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTV32 = !!(trabalho ^ trabalho2)//bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete; //operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));

function soma(x,y){
    return x + y;
}

console.log(soma(4,5));