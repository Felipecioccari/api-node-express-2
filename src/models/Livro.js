import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, required: [true, "O titulo do livro é obrigatorio."]},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "o(a) autor(a) é obrigatorio "], autopopulate: {select: "nome"}},
    editora: {type: String, required: [true, "O nome da editora é obrigatorio."]},
    numeroPaginas: {
      type: Number,
      validate:{
        validator: (valor) => { 
          return valor >= 10 && valor <=1000;
        },
        message: "O numero de paginas deve ser entre 10 e 1000. Valor fornecido: {VALUE}"
      }
    }
  }
);
livroSchema.plugin(autopopulate);
const livros= mongoose.model("livros", livroSchema);

export default livros;