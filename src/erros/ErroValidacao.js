import RequisicaoIncorreta from "./RequisicaoIncorreta.js ";

class ErroValidacao extends RequisicaoIncorreta{
  constructor(erro){
    const mensagensErrors = Object.values(erro.errors).map(erro => erro.message).join("; ");
    
    super(`os seguintes erros foram encontrados : ${mensagensErrors}`);
  }
}

export default ErroValidacao;