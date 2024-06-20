class Saudacao {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  saudacaoOla(): string {
    return ("Olá " + this.nome) 
  }
}

