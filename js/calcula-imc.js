var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEhValido = true;
  var alturaEhValida = true;
  if (peso <= 0 || peso > 650) {
    console.log("Peso inválido.");
    pesoEhValido = false;
  }

  if (altura <= 0 || altura >= 3) {
    console.log("Altura inválida.");
    alturaEhValida = false;
  }

  var tdImc = paciente.querySelector(".info-imc");
  if (pesoEhValido && alturaEhValida) {
    // var imc = peso / (altura * altura);
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;

  } else {
    tdImc.textContent = "Altura e/ou peso inválidos.";
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}