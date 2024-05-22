function Pessoa(nome, cpf, idade){
    this.name = nome;
    this.cpf = cpf;
    this.idade = idade;
}
let pessoa1 = new Pessoa("Frobson","029.213.334.111.00","20");
let pessoa2 = new Pessoa("Jrobson","129.266.994.666.99","22");
let pessoa3 = new Pessoa("Epyson","239.123.391.850.66","28");

localStorage.setItem("local-pessoa1", JSON.stringify(pessoa1));
localStorage.setItem("local-pessoa2", JSON.stringify(pessoa2));
localStorage.setItem("local-pessoa3", JSON.stringify(pessoa3));

let pessoaPegar1 = localStorage.getItem("local-pessoa1");
let pessoaPegar2 = localStorage.getItem("local-pessoa2");
let pessoaPegar3 = localStorage.getItem("local-pessoa3");

console.log(JSON.parse(pessoaPegar1));
console.log(JSON.parse(pessoaPegar2));
console.log(JSON.parse(pessoaPegar3));





