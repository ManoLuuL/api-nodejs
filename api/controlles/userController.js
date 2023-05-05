const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Função de criação de usuário
exports.createUser = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        gender: req.body.gender,
        age: req.body.age,
      });
      user
        .save()
        .then(() => {
          res.status(201).json({ message: "User created" });
        })
        .catch((error) => {
          res.status(400).json({ error });
        });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

// Função de listagem de usuários
exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

// Função de busca de usuário por ID
exports.getUserById = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

// Função de atualização de usuário
exports.updateUser = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: hash,
        gender: req.body.gender,
        age: req.body.age,
      };
      User.updateOne({ _id: req.params.id }, user)
        .then(() => {
          res.status(200).json({ message: "User updated" });
        })
        .catch((error) => {
          res.status(400).json({ error });
        });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

// Função de exclusão de usuário
exports.deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "User deleted" });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
