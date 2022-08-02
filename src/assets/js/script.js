function consultarCEP() {
  event.preventDefault();
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (dados) {
      mostrarEndereco(dados);
    });
}

function mostrarEndereco(endereco) {
  document.getElementById("endereco").value = endereco.logradouro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
}
