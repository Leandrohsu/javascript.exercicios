let pessoa = {
    nome: "Leandro",
    idade: 36,
    endereco:{
        rua: "Belarmino de mendonça",
        numero: 1346,
        bairro: "Centro",
        cidade: "Foz do iguaçu",
    },
    formacaoAcademica:{
        nomeFaculdade:"Faculdade X",
        curso:{
            nome:"Computacao",
            disciplinas:[
                "Computacao 1",
                "Computacao 2",
                "Algoritimo",
                "Compiladores",
                "LFA",
            ],
            imprimeTrasParaFrente: function(){
                this.disciplinas.reverse().forEach((disciplinas)=>{
                    console.log(disciplinas)
                })
            }

            // imprimeDisciplinas: function(){
                // this.disciplinas.forEach((disciplinas)=>{
                    // console.log(disciplinas)
                // })
            }
        }
    }
// pessoa.formacaoAcademica.curso.imprimeDisciplinas()
pessoa.formacaoAcademica.curso.imprimeTrasParaFrente()

// pessoa.formacaoAcademica.curso.disciplina.forEach((disciplina)=>{
    // console.log(disciplina);
// })


console.log(pessoa.endereco.rua);

//convertendo para JSON
// let pessoaJson = JSON.stringify(pessoa)
// console.log(pessoaJson);

//Reverter a operacao
// let pessoaObjeto = JSON.parse(pessoaJson);
// console.log(pessoaObjeto);

//Fazendo um JSON
//console.log(JSON.stringify(pessoa));




let array1 = [1, 2, 3, 4, 8, 25, 200];
// for(let i = 0; i < a <= array1.lenght ; i++)
    // console.log(array1[i]);

function imprimeNumero(numero){
    console.log(numero)
}
array1.forEach(imprimeNumero);
console.log(array1);


let listaNomes = ["jose", "Maria", "Pedro", "Rosangela"];

listaNomes.forEach((nomeAtual, indice)=>{
    console.log(`Nome: ${nomeAtual} está na posição ${indice}`)

})
// listaNomes.forEach(imprimeNome);

let salarioAnual = 0;

let salarioAno = [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000];

salarioAno.forEach((salarioAno)=>{
    salarioAnual += salarioAno
})
console.log(salarioAnual);

let pessoa5 = {
    nome: "Leandro",
    idade: 37
} 

delete pessoa5.nome;
console.log(pessoa5.nome);