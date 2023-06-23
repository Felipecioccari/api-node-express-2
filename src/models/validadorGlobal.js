import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validade", {
  validador: (valor) => valor != "",
  message: ({path}) => `o campo ${path} não pode ser vazio.`
});