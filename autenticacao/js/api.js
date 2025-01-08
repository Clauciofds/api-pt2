const api = axios.create({
  baseURL: "https://api-crud-user.pedagogico.cubos.academy",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
