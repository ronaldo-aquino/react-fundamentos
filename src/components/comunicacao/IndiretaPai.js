import { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = () => {
  const initialState = {
    nome: "",
    idade: null,
    nerd: null,
  };
  const [filho, setFilho] = useState(initialState);
  const fornecerInformacoes = (nome, idade, nerd) => {
    setFilho({
      nome,
      idade,
      nerd,
    });
  };

  const limparInformacoes = () => {
    setFilho(initialState);
  };

  return (
    <div>
      <div>
        <span>{filho.nome} </span>
        <span>
          <strong>{filho.idade}</strong>
        </span>
        {filho.nerd !== null && (
          <span> {filho.nerd ? "Verdadeiro" : "False"}</span>
        )}
      </div>
      <IndiretaFilho
        fornecerInformacoes={fornecerInformacoes}
        limparInformacoes={limparInformacoes}
      />
    </div>
  );
};
export default IndiretaPai;
