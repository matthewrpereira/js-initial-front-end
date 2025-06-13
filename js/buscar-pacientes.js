// importação de uma API de pacientes (json)

var botaoAdicionar = document.querySelector("#buscar-pacientes");

console.log(botaoAdicionar);


botaoAdicionar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/matthewrpereira/pacientes-api/main/pacientes.json");

    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            // retorno de todos os pacientes
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        }
    });
    xhr.send();
});
