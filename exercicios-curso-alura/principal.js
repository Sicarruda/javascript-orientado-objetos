const elementoUl = document.getElementsByTagName("ul")[0];
function listarProdutoNaPagina(produto) {
  const novoProduto = document.createElement("li");
  const linkNovoProduto = document.createElement("a");
  linkNovoProduto.innerHTML = produto.nome;
  linkNovoProduto.href = `./produto.html?id=${produto.id}`;
  novoProduto.appendChild(linkNovoProduto);
  elementoUl.appendChild(novoProduto);
}

for (var i = 0; i < listaDeProdutos.length; i++) {
  listarProdutoNaPagina(listaDeProdutos[i]);
}

function busca(evento) {
  const valor = evento.target.value;
  elementoUl.innerHTML = "";
  for (var i = 0; i < listaDeProdutos.length; i++) {
    if (valor == "todos" || valor == listaDeProdutos[i].classificacao.tipo) {
      listarProdutoNaPagina(listaDeProdutos[i]);
    }
  }
}

var seletor = document.getElementById("busca");
seletor.onchange = busca;
