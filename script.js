let form = document.getElementById('form-number');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  verificar();
})

function verificar() {
  let numeroA = document.getElementById('number-A');
  let numA = Number(numeroA.value);
  let numeroB = document.getElementById('number-B');
  let numB = Number(numeroB.value);
  let resposta = document.getElementById('resultado');

  if(numB > numA) {
    resposta.innerHTML = alert(`O valor é VÁLIDO!`);
  } else {
    resposta.innerHTML = alert(`O valor é INVÁLIDO - O campo B deve ser maior que o campo A`);
  }
}