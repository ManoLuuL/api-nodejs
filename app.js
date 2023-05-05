const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados
mongoose
  .connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Connection failed:", error);
  });

// Configuração das rotas
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
