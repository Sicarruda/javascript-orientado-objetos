class Powerups {
  tipo;
  texto;

  constructor(tipo, texto) {
    this.tipo = tipo;
    this.texto = texto;
  }

  draw() {
    push();
    circle(300, 300, 30);
    text(this.texto, 295, 305);
    fill("#000000");
    textSize(32);
    pop();
  }
  
  darPoder() {
    if (this.tipo == "maisBolinha") {
      nBolinhas = nBolinhas + 1;
    }
    if(this.tipo == "menosBolinha"){
        nBolinhas = nBolinhas-1;
    }
    if(this.tipo == "tiraVida"){

    }
  }

}
