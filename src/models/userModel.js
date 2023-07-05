import { connectionDB } from "../db";

const db = connectionDB();

// Função para buscar todos os usuários
exports.getAllUsers = (callback) => {
  db.query("SELECT * FROM users", callback);
};

// Função para buscar um usuário por ID
exports.getUserById = (id, callback) => {
  db.query("SELECT * FROM users WHERE id = ?", [id], callback);
};

// Função para criar um novo usuário
exports.createUser = (user, callback) => {
  db.query("INSERT INTO users SET ?", user, callback);
};

// Função para atualizar um usuário existente
exports.updateUser = (id, user, callback) => {
  db.query("UPDATE users SET ? WHERE id = ?", [user, id], callback);
};

// Função para excluir um usuário existente
exports.deleteUser = (id, callback) => {
  db.query("DELETE FROM users WHERE id = ?", [id], callback);
};
