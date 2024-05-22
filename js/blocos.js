var VarNome = "Joana"
let letNome = "Joana"
const constNome = "Joana"

{
console.log(VarNome);
console.log(letNome);
console.log(constNome);

var varNomeInside = "Pedro"
let letNomeInside = "Pedro"
const constNomeInside = "Pedro"

}

// console.log(varNomeInside);
// console.log(letNomeInside);
// console.log(constNomeInside);


function sum(a,b){
let x = a + b;
// var y = x;
xOut = x;
yOut = x;
}
sum (1,1);
console.log(xOut);
console.log(yOut);


for(let i = 0 ; i < 5 ; i++)
{
    console.log(i);
}

console.log("--------------------------------------");

for(var x = 0 ; x < 5 ; x++)
{
    console.log(x);

}
console.log(x);

let x1 = 2
let x2 = 4

function suma(){
   return x1 + x2;
}
console.log(suma());

function declaraDentroEchamaFora(){
    var x;
    x = 450;

    function soma(){
        var x1 = x+x
        console.log(x1);
        
        function subtracao(){

            console.log(x1-x)
        }
    subtracao()
    }
    soma()
}
console.log(declaraDentroEchamaFora());


// const x = function nomeFuncao(parametro1, parametro2){
    // return parametro1 + parametro2;
// }

// console.log(x(1,2))

const variavelfuncaoComUmNomeQualquer = (a,b,c) => {
    return a+b+c;

}
console.log(variavelfuncaoComUmNomeQualquer)
console.log(variavelfuncaoComUmNomeQualquer(1, 1, 3));

/* Faça 5 arrowFunctions
1 para soma
1 para subtracao
1 para divisao
1 para multiplicacao
1 para mod (%)

*/

const funcaoQualquer = (a,b) => {
    return a+b;
}
console.log(funcaoQualquer(1,2));

const funcao2 = (a,b) => {
    return a-b
}
console.log(funcao2(2,3));

const funcao3 = (a,b) => {
    return a*b
}
console.log(funcao3(5,2))

const funcao4 = (a,b) => {
    return a/b
}
console.log(funcao4(10,2))

const funcao5 = (a,b)=>{
    return a%b
}
console.log(funcao5(25,3))

