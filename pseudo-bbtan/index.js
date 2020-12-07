var alvo;

var contador = 0;
var bolinhas = [];
var bolinha;

var qtdBolinhas = 5;
var quadrosParaEsperar = 10;

var b = new Bloco("#B22222", 1, "quadrado");
var bolinhaPower = new Powerups("maisBolinha", "+");

function setup() {
  createCanvas(500, 500);
}

function mouseClicked() {
  alvo.acertarAlvo();
}

function draw() {
  background(200);
  b.draw();
  bolinhaPower.draw();


  contador++;

  if(contador > quadrosParaEsperar && bolinhas.length < qtdBolinhas){

    const novaBola = new Bolinha('lala', createVector(50,100), createVector(-1,-1));
    bolinhas.push(novaBola);

    contador = 0;

  }

  for (var i = 0; i < bolinhas.length; i++) {
    bolinhas[i].movimentar();
    bolinhas[0].draw();
  }

  //const bloco02 = new Bloco("#FF00FF", 0, "quadrado");
  //bloco02.draw();
  alvo = b;
}