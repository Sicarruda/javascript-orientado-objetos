const QTD_OUTROS_PRODUTOS = 4;

const parametroUrl = new URLSearchParams(window.location.search);
const meuParametro = parametroUrl.get("id");

function adicionarProdutoNaPagina(produto) {
  const nome = document.getElementById("nome");
  nome.innerHTML = produto.nome;
  const imagem = document.getElementById("imagem");
  imagem.src = produto.imagem;
  imagem.alt = produto.descricao;
  const descricao = document.getElementById("descricao");
  descricao.innerHTML = produto.descricao;
  const preco = document.getElementById("preco");
  preco.innerHTML = "R$" + produto.preco;
}

adicionarProdutoNaPagina(listaDeProdutos[meuParametro]);

function listaOutrosProdutos(produto) {
  const img = document.createElement("img");
  const nome = document.createElement("a");
  const novoProduto = document.createElement("figure");
  const areaNovoProduto = document.getElementById("outrosProdudos");
  areaNovoProduto.appendChild(novoProduto);
  novoProduto.appendChild(img);
  novoProduto.appendChild(nome);
  img.src = produto.imagem;
  img.alt = produto.descricao;
  nome.href = `./produto.html?id=${produto.id}`;
  nome.innerHTML = produto.nome;
}


function exibiOutrosProdutos2() {
  var indexesSorteados = [];

  while(indexesSorteados.length < QTD_OUTROS_PRODUTOS){
    var indexAleatorio = Math.floor(Math.random() * listaDeProdutos.length);
    
    if (indexAleatorio != indexAlvo && indexesSorteados.indexOf(indexAleatorio) == -1) {
      indexesSorteados.push(indexAleatorio);
      listaOutrosProdutos(listaDeProdutos[indexAleatorio]);
    }
  }
}

function exibiOutrosProdutos() {
  var listaAleatoria = [];

  for (var i = 0; i < listaDeProdutos.length; i++) {
    var indexAleatorio = Math.floor(Math.random() * listaDeProdutos.length);
    
     

    if (listaAleatoria.indexOf(indexAleatorio) == -1 && listaAleatoria.length < 4) {
      listaAleatoria.push(indexAleatorio);
    }
  }
  for (var j = 0; j < listaAleatoria.length; j++) {
    if (meuParametro != listaAleatoria[j]) {
      listaOutrosProdutos(listaDeProdutos[listaAleatoria[j]]);
    }
  }
  listaAleatoria = [];
}

exibiOutrosProdutos();
