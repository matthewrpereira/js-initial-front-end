var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  
  var paciente = obtemPacienteDoFormulario(form);

  var erros = validaPaciente(paciente);
  if (erros.length > 0) {
    exibeMensagensErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});


function validaPaciente(paciente) {
  var erros = [];

  // validação de campos em branco
  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser vazio.");
  }
  if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser vazio.");
  }
  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser vazio.");
  }
  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser vazio.");
  }

  // valida valores de peso e altura
  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido.");
  }
  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é inválido.");
  }

  return erros;
}

function exibeMensagensErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(element => {
    var li = document.createElement("li");
    li.textContent = element;
    ul.appendChild(li);
  });
}

function montaTd(dado) {
  var td = document.createElement("td");
  td.textContent = dado;

  return td;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");

  pacienteTr.appendChild(montaTd(paciente.nome));
  pacienteTr.appendChild(montaTd(paciente.peso));
  pacienteTr.appendChild(montaTd(paciente.altura));
  pacienteTr.appendChild(montaTd(paciente.gordura));
  pacienteTr.appendChild(montaTd(paciente.imc));

  return pacienteTr;
}

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}