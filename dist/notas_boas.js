"use strict";

var alunos = [{
  nome: 'Alice',
  nota: 8
}, {
  nome: 'Beatriz',
  nota: 5
}, {
  nome: 'Caio',
  nota: 7
}, {
  nome: 'Douglas',
  nota: 4
}, {
  nome: 'Eduarda',
  nota: 6
}];
var exibeAlunosComNotasBoas = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log(exibeAlunosComNotasBoas);