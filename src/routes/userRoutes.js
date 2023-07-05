const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// Rotas CRUD de usuario
router.get("/user", UserController.getAllUsers);
router.get("/user:id", UserController.getUserById);
router.post("/user", UserController.createUser);
router.put("/user:id", UserController.updateUser);
router.delete("/user:id", UserController.deleteUser);
// Rotas de busca das receitas

// Outras Rotas

module.exports = router;
