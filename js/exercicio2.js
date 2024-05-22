


function Produto(nome, preco,  descricao, imagem,  disponivel, avaliacao,caracteristicas, 
    imagem, disponivel,avaliacao,caracteristicas,tags,porcentagemDesconto)
{
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao
    this.imagem = imagem;
    this.disponivel = disponivel;
    this.avaliacao = avaliacao
    this.caracteristicas = caracteristicas
    this.tags = tags;
    this.porcentagemDesconto = porcentagemDesconto;
}
this.imprimeNome = function(){
    console.log(this.impremeNome)
};
this.imprimePreco = function(){
    console.log(this.imprimePreco)
}
this.imprimeDescricao
this.imprimeCaracteristicas = function(){
    console.log(this.caracteristicas.join(", "))
};

if (!Array.isArray(tags)){
    console.error("Tags deve ser um array")
}
if (!Array.isArray(caracteristicas)){
    console.error("Caracteristicas deve ser um array")
}
if (typeof preco !== 'number' ){
    console.error("Preco deve ser um número")
}