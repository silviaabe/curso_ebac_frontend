function Pessoa(nome) {
  this.nome = nome;
}

function Caractericticas(nome, idade, naturalidade, hobby)  {
  this.idade = idade;
  this.naturalidade = naturalidade;
  this.hobby = hobby;

  Pessoa.call(this, nome);
}

function Funcionario(nome, idade, naturalidade, hobby, cargo, salario) {
  this.cargo = cargo;
  this.salario = salario;

  Pessoa.call(this, nome);
  Caractericticas.call(this, nome, idade, naturalidade, hobby, cargo, salario);
}

const pessoa1 = new Pessoa("Maria");
const caractericticas1 = new Caractericticas("Maria", 27, "brasileira", "vôlei");
const funcionario1 = new Funcionario("Maria", 27, "brasileira", "vôlei", "dev front-end", 5000);
const funcionario2 = new Funcionario("Jonas", 34, "brasileiro", "pedalar", "dev front-end", 9000);
const funcionario3 = new Funcionario("Lívia", 18, "brasileira", "nadar", "dev front-end", 4000);
const funcionario4 = new Funcionario("Nicole", 28, "brasileira", "correr", "dev front-end", 5000);

console.log(pessoa1);
console.log(caractericticas1);
console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);
console.log(funcionario4);

console.log(funcionario1 instanceof Funcionario);
console.log(funcionario2 instanceof Funcionario);
console.log(funcionario3 instanceof Funcionario);
console.log(funcionario4 instanceof Funcionario);