class Bloco {
  cor;
  vida;
  formato;
  vivo;

  constructor(cor, vida, formato) {
    this.cor = cor;
    this.vida = vida;
    this.formato = formato;
    this.vivo = vida > 0;
  }

  draw() {
    if (this.vivo) {
      push();
      fill(this.cor);
      rect(0, 0, 50, 50);
      textSize(25);
      fill("#000000");
      text(this.vida, 20, 35);
      pop();
    }
  }

  acertarAlvo() {
    if (this.vida > 0) {
      this.vida = this.vida - 1;
    }
    if (this.vida === 0) {
      this.vivo = false;
    }
  }
}
