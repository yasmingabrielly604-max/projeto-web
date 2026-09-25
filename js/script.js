console.log("Projeto Web carregado com sucesso!");

const formulario = document.getElementById("formContato");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value;

        alert("Obrigado pelo contato, " + nome + "!");

        formulario.reset();
    });
}
