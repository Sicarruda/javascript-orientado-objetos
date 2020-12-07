
class Produto {
  nome;
  imagem;
  descricao;
  preco;
  id;
  classificacao;

  static produtosInstanciados = 0;

  constructor(nome, imagem, descricao, preco, classificacao) {
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
    this.preco = preco;
    this.id = Produto.produtosInstanciados++;
    this.classificacao = classificacao;
  }
}
