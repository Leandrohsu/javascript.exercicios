// let pessoa = {
   // nome: "Leandro",
    //idade: 37,
    //profissao: "Eng. Software",
//}
//console.log(pessoa.nome)
//pessoa.nome = "Pedro"
//pessoa.cidade = "Foz do Iguaçu"
//delete pessoa.profissao
//console.log(pessoa) //

let produtos = {
    Nome: "Smartphone XYZ",
    Preco: 999.99,
    Descricao: "Um smartphone poderoso com camera de alta resolucao e processador rapido",
    Imagem: "desktop/faculdade/2semestre/imagem.jpg",
    Disponivel: true,
    Avaliacao: 4.5,
    Caracteristica: ["Tela de 6 polegadas","Memoria Interna de 128gb","Camera principal de 48MP"],
    Tags: ["tecnologia","smartphone","eletronicos"]
}
function impressaodoCodigo() {
    console.log(produtos.Caracteristica, produtos.Tags);
}
impressaodoCodigo();

let produtos2 = {
    Nome: "Smartphone X",
    Preco: 899.99,
    Descricao: "Um smartphone poderoso com camera de alta resolucao e processador rapido",
    Imagem: "desktop/faculdade/2semestre/imagem2.jpg",
    Disponivel: true,
    Avaliacao: 4.8,
    Caracteristica: ["Tela de 10 polegadas","Memoria Interna de 512gb","Camera principal de 48MP"],
    Tags: ["tecnologia","smartphone","eletronicos"]
}
let produtos3 = {
    Nome: "TV Smart",
    Preco: 3999.99,
    Descricao: "Um smartphone poderoso com camera de alta resolucao e processador rapido",
    Imagem: "desktop/Faculdade/2semestre/imagem3.jpg",
    Disponivel: true,
    Avaliacao: 4.5,
    Caracteristica: ["Tela de 52 polegadas","FULL LED","Curved"],
    Tags: ["tecnologia","smartphoneTV","eletronicos"]
}
let produtos4 = {
    Nome: "Smartphone PRO",
    Preco: 1299.99,
    Descricao: "Um smartphone poderoso com camera de alta resolucao e processador rapido",
    Imagem: "desktop/faculdade/2semestre/imagem4.jpg",
    Disponivel: true,
    Avaliacao: 4.8,
    Caracteristica: ["Tela de 12 polegadas","Memoria Interna de 1tb","Camera principal de 48MP"],
    Tags: ["tecnologia","smartphone","eletronicos"]
}
let produtos5 = {
    Nome: "Smartphone ULTRA",
    Preco: 1599.99,
    Descricao: "Um smartphone poderoso com camera de alta resolucao e processador rapido",
    Imagem: "desktop/faculdade/2semestre/imagem5.jpg",
    Disponivel: true,
    Avaliacao: 4.9,
    Caracteristica: ["Tela de 12 polegadas","Memoria Interna de 2tb","Camera principal de 48MP"],
    Tags: ["tecnologia","smartphone","eletronicos"]
}

const listadeProdutos = [produtos2,produtos3,produtos4,produtos5];

console.log(listadeProdutos);

function Produto(nome, preco,
                descricao, imagem,
                disponivel,avaliacao,
                caracteristicas, Tags
                )
{
this.nome = nome;
this.preco = preco;
this.descricao = descricao;
this.imagem = imagem;
this.disponivel = disponivel;
this.avaliacao = avaliacao;
this.caracteristicas = caracteristicas;
this.Tags = Tags;

this.imprimeTags = function(){
    this.tags.forEach((currentTag)=>{
        console.log(currentTag);
    })
}
this.imprimeCaracteristicas = function(){
    console.log(this.caracteristicas.join(";"));
}
}
let produto = new Produto("xiamomi", 1000, ["cel 15 polegadas","gravar full hd"],"/caminho/imagem",true,5,["android","celular","tecnologia"])
console.log(produto);

let arrayPessoas = ["Joao","Maria","Pedro","Enzo"];
console.log(arrayPessoas);
let resultado = arrayPessoas.join(";");
console.log(resultado);
console.log(resultado.split(";"));


//Exercicio

//crie 5 objetos atras do construtor e
// imprima produtos com avaliacao apenas
// maior que nota 3

// Desafio: adicione um atributo porcentagemDesconto,caso
// houver desconto, aplique a porcentagemDesconto(10,20...)no preco
// do produto e imprima o preco no formato "R$ 50.00(desconto de x porcento)


function Product (
        nome,preco,avaliacao
)
 {
    this.nome = nome;
    this.preco = preco;
    this.avaliacao = avaliacao;

this.imprimeAvaliacao= function (){
    this.avaliacao.forEach((currentAvaliacao)=>{
        console.log(currentAvaliacao);
    })
}
}
let product = new Product ("samsungo",3000,4.3);
let product2 = new Product("iphono",4000,4.9);
let product3 = new Product("xiaomio",2000,3);
let product4 = new Product("oppo",1000,2.2);
let product5 = new Product("motorolo",1300,2.8);

for(i=0 ; i > 5 ; i++){
    if(this.avaliacao < 3){
    }else{
        console.log(this.avaliacao)
    }
}