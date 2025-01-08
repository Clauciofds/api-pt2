## Documentação da API para Integração

## URL da API

```javascript=
    https://api-crud-user.pedagogico.cubos.academy
```

---

## Rotas

### POST `/login`

Permite você fazer o login na requisição

- Body da requisição

```jsonld=
    {
	"email": "jessica.medeiros@cubos.academy",
	"senha": "12345678"
    }
```

- Resposta da requisição quando houver sucesso

```jsonld=
    {
      "usuario": {
        "id": 1,
        "nome": "Jess",
        "email": "jessica.medeiros@cubos.academy"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0ODQ2NzIxLCJleHAiOjE2NjQ4NzU1MjF9.tV21FxS0qZ3-16g8rHR_sw-YuSRtAJEAXXzZBOupbD8"

    }
```

---

### POST /usuarios

Permite você cadastrar um novo usuário

Body da requisição

```jsonld=
{
    "nome": "Jess",
    "email": "jessica.medeiros@cubos.academy",
    "senha": "123456"
}
```

A resposta é:

```jsonld=
{
  "id": 2,
  "nome": "Jess",
  "email": "jessica.medeiros@cubos.academy"
}

```

---

### GET /usuarios

Permite você listar o usuário que está logado, para isso você precisa passar o seu token no **header** da requisição:

```javascript
    headers: {
        "Authorization":token
    }
```

A resposta é como essa:

```jsonld=
{
  "id": 2,
  "nome": "Jess",
  "email": "jessica.medeiros@cubos.academy"
}
```

---

### PUT /usuarios

Permite você atualizar as informações do usuário que está logado, para isso você precisa passar o seu token no **header** da requisição:

```javascript
    headers: {
        "Authorization":token
    }
```

O Body da requisição precisa ter as seguintes informações:

```jsonld=
{
  "nome": "Jess",
  "email": "jessica.medeiros@cubos.academy",
  "senha":"102030"
}
```

A resposta é como essa quando obtiver sucesso:

```jsonld=
    "Usuário foi atualizado com sucesso."
```

---

### DELETE /usuarios

Permite você excluir o usuário que está logado, para isso você precisa passar o seu token no **header** da requisição:

```javascript
    headers: {
        "Authorization":token
    }
```

A resposta é como essa quando obtiver sucesso:

```jsonld=
    "Usuário excluido com sucesso"
```
