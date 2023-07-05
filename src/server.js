const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/swagger/swagger.json");
const userRoutes = require("./src/routes/userRoutes");
const db = require("./src/db");

const app = express();
const port = 4550;

// Middlewares
app.use(express.json());

// Rotas
app.use("/users", userRoutes);

// Rota padrão para a documentação do Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Conexão com o banco de dados
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados MySQL");

  // Inicialização do servidor
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
});
