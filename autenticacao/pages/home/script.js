const token = getLocalStorage("token");
const namePerfil = document.querySelector('[name="namePerfil"]')
const emailPerfil = document.querySelector('[name="emailPerfil"]')
const passwordPerfil = document.querySelector('[name="passwordPerfil"]')

const verifyToken = () => {
  try {
    const splitToken = token.split(".");
    return splitToken.length == 3;
  } catch (error) {
    return false;
  }
};

if (!verifyToken()) {
  location.href = "/autenticacao/index.html";
}

function logout() {
  removeLocalStorage("token");
  location.href = "/autenticacao/index.html";
}


// troquei o nome da função para ficar tudo em ingles de loadDataPerfil para loadDataProfile
async function loadDataProfile() {
  // requisicao
  try {
    const { data } = await api.get('/usuarios', {
      headers: {
        Authorization: token
      }
    })
    // setar os dados no input
    namePerfil.value = data.nome
    emailPerfil.value = data.email

  } catch (error) {
    console.error(error)
  }
}

loadDataProfile();



async function updateProfile() {

  if (!namePerfil.value || !emailPerfil.value || !passwordPerfil.value) {
    alert('preencha todos os campos');
    return
  }

  const newProfile = {
    nome: namePerfil.value,
    email: emailPerfil.value,
    senha: passwordPerfil.value
  }


  // requisição para alterar
  try {
    const response = await api.put('/usuarios', newProfile, {
      headers: {
        Authorization: token
      }
    })
    console.log(response)
    alert('perfil alterado com sucesso')

  } catch (error) {
    console.error(error)
  }

}


async function deleteProfile() {
  try {
    await api.delete('/usuarios', {
      headers: {
        Authorization: token
      }
    })

    alert('perfil deletado com sucesso');
    logout()
  } catch (error) {
    console.error(error)
  }
}

