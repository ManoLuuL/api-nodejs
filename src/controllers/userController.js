const db = require("../db");

// Controlador para buscar todos os usuários
exports.getAllUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Erro ao buscar usuários:", err);
      res.status(500).json({ error: "Erro ao buscar usuários" });
      return;
    }
    res.json(results);
  });
};

// Controlador para buscar um usuário por ID
exports.getUserById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Erro ao buscar usuário por ID:", err);
      res.status(500).json({ error: "Erro ao buscar usuário por ID" });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: "Usuário não encontrado" });
      return;
    }
    res.json(results[0]);
  });
};

// Controlador para criar um novo usuário
exports.createUser = (req, res) => {
  const {
    nome,
    email,
    senha,
    idade,
    diabetico,
    vegetariano,
    lactose,
    pressao,
  } = req.body;

  const user = {
    nome,
    email,
    senha,
    idade,
    diabetico,
    vegetariano,
    lactose,
    pressao,
  };
  db.query("INSERT INTO users SET ?", user, (err, results) => {
    if (err) {
      console.error("Erro ao criar usuário:", err);
      res.status(500).json({ error: "Erro ao criar usuário" });
      return;
    }
    res.json({ message: "Usuário criado com sucesso" });
  });
};

// Controlador para atualizar um usuário existente
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const {
    nome,
    email,
    senha,
    idade,
    diabetico,
    vegetariano,
    lactose,
    pressao,
  } = req.body;
  const user = {
    nome,
    email,
    senha,
    idade,
    diabetico,
    vegetariano,
    lactose,
    pressao,
  };
  db.query("UPDATE users SET ? WHERE id = ?", [user, id], (err, results) => {
    if (err) {
      console.error("Erro ao atualizar usuário:", err);
      res.status(500).json({ error: "Erro ao atualizar usuário" });
      return;
    }
    res.json({ message: "Usuário atualizado com sucesso" });
  });
};

// Controlador para excluir um usuário existente
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM users WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Erro ao excluir usuário:", err);
      res.status(500).json({ error: "Erro ao excluir usuário" });
      return;
    }
    res.json({ message: "Usuário excluído com sucesso" });
  });
};
