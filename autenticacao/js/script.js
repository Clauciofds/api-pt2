const emailLoginInput = document.querySelector("[name='emailLogin']");
const passwordLoginInput = document.querySelector("[name='passwordLogin']");

async function login(event) {
  event.preventDefault();
  if (!emailLoginInput.value || !passwordLoginInput.value) {
    alert("Preencha os campos corretamente");
    return;
  }
  const response = await api.post("/login", {
    email: emailLoginInput.value,
    senha: passwordLoginInput.value,
  });
  if (!response.data.token) {
    alert("Email ou senha incorreto!");
    limparCampos();
    return;
  }
  setLocalStorage("token", response.data.token);
  location.href = "../autenticacao/pages/home/index.html";
}

function limparCampos() {
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}
