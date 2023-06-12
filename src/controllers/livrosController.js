import livros from "../models/Livro.js";

class LivroController {

  static listarLivros = async (req, res, next) => {
    try{
      const livrosResultado = await livros.find();
    
      res.status(200).json(livrosResultado);
    } catch (erro){
      next(erro);
    }

  };

  static listarLivroPorId = async (req, res, next) => {
    try{
      const id = req.params.id;

      const livroResultado = await livros.findById(id);

      res.status(200).send(livroResultado);

    }catch (erro){
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try{
      let livro = new livros(req.body);

      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJson);
    }catch (erro){
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try{
      const id = req.params.id;

      await livros.findByIdAndUpdate(id, {$set: req.body});

      res.status(200).send({message: "livro atualizado com sucesso"});
    }catch (erro){
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try{
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      res.status(200).send({message: "livro removido com sucesso"});
    }catch(erro){
      next(erro);
    }
  };

  static listarLivroPorEditora = async (req, res, next) => {
    try {
      const editora = req.query.editora;

      const livrosResultado = await livros.find({"editora": editora});

      res.status(200).send(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  };

}

export default LivroController;