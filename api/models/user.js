const mongoose = require("mongoose");

// Definição do schema de usuário
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ["M", "F"], required: true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model("User", userSchema);
