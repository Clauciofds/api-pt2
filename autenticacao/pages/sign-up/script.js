const nameInput = document.querySelector("[name='name']");
const emailInput = document.querySelector("[name='email']");
const passwordInput = document.querySelector("[name='password']");

async function cadastrarUsuario(event) {
  event.preventDefault();
  if (!nameInput.value || !emailInput.value || !passwordInput.value) {
    alert("Preencha os campos corretamente");
    return;
  }
  try {
    await api.post("/usuarios", {
      nome: nameInput.value,
      email: emailInput.value,
      senha: passwordInput.value,
    });

    alert("Cadastro executado com sucesso");

    limparCampos();
    location.href = "/autenticacao/index.html";
  } catch (error) {
    alert(error.response.data);
  }
}

function limparCampos() {
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}
