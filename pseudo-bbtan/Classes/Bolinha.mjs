class Bolinha {
  formato;
  posicao;
  velocidade;

  constructor(formato, posicao, velocidade) {
    this.formato = formato;
    this.posicao = posicao;
    this.velocidade = velocidade;
  }

  draw() {
    push();
    circle(this.posicao.x, this.posicao.y, 30);
    pop();
  }
  
  //codigo que o Gabriel fez e que resolve o problema da bolinha no canto do canvas
  movimentar() {
    const px = this.posicao.x;
    const py = this.posicao.y;

    if (px <= 0 || px >= 500) {
      this.velocidade.mult(-1, 1);
    }

    if (py <= 0 || py >= 500) {
      this.velocidade.mult(1, -1);
    }

    this.posicao.add(this.velocidade);
  }

  /* codigo que eu fiz e que não funciona quando a bola bate nos cantos do canvas
  movimentar() {
    console.log(this.posicao);
    if (this.posicao.x === 0 && this.posicao.y !== 500) {
      this.velocidade.mult(-1, 1);
    }
    if (this.posicao.y === 0 && this.posicao.x !== 500) {
      this.velocidade.mult(1, -1);
    }
    if (this.posicao.x !== 0 && this.posicao.y === 500) {
      this.velocidade.mult(1, -1);
    }
    if (this.posicao.y !== 500 && this.posicao.x === 500) {
      this.velocidade.mult(-1, 1);
    }
    if (
      (this.posicao.x === 0 && this.posicao.y === 500) ||
      (this.posicao.y === 0 && this.posicao.x === 0)
    ) {
      this.velocidade.mult(-1, -1);
    }
    if (this.posicao.y === 0 && this.posicao.x === 0) {
      this.velocidade.mult(-1, -1);
    }

    this.posicao.add(this.velocidade);
  }*/
}
