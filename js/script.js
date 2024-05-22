let x = 10
let y = 10
let z = 20

let nome = "Marcos";
let nome2 = "Henrique";


console.log(x);
console.log(y);
console.log(x+y)
console.log(x==y);
console.log(x!==y);
console.log(x * y * z);
console.log(x * y *(z - 20));

console.log(nome+nome2);
console.log(nome+" "+x);

nome = "Gustavo";
let idade = 29;
let endereco = "Belarmino de mendonça"

console.log("Olá, meu nome é: " +nome+ ", eu tenho: " +idade+ "anos e moro na rua: " + endereco);
console.log(`Olá, meu nome é: ${nome} e tenho ${idade} anos e moro na rua ${endereco}`);

const g = 9.8;
const pi = 3.1415;

console.log(g);

//g=20
// comentario 1 linha

/** Comentario N linhas
 * 
 */

function imprimeDadosUsuario(nome, idade){
    console.log(`Meu nome é ${nome}, e tenho ${idade} anos.`);
}

imprimeDadosUsuario("Gustavo",29);

function formataStringDadosUsuario(nome,idade){
    return `Meu nome é ${nome}, e tenho ${idade} anos.`
}

let dadosUsuarioFormatad = formataStringDadosUsuario("Jonas", 29);

console.log(dadosUsuarioFormatad);


//array
let array = [];
console.log(array);
let array1 = [1,2,3,4,5];


console.log (array1);
console.log(array1.length);

array1.push(6);

console.log(array1);

array1.pop();

console.log(array1);

let pessoas = ["João","Pedro", "Maria", "Josefina"];

for(let i = 0 ; i<pessoas.length ; i++){
    console.log(pessoas[i]);

}

//faca uma matriz 3x3 de numeros  
//imprima ela

/**
 * |1 5 7|
 * |8 2 1|
 * |4 5 5|
 */

    let matriz = [[1,5,7],[8,2,1],[4,5,1]];
for (let i=0 ; i<matriz.length ; i++){
    console.log("-")
    for(let j=0 ; j<matriz[i].length ; j++)
    console.log(matriz[i][j]);
}

