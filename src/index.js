import ReactDOM from "react-dom";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import "./index.css";

ReactDOM.render(
  <div>
    <Primeiro />
    <ComParametro
      titulo="Situação do Aluno"
      aluno="Ronaldo Aquino"
      nota={9.3}
    />
    <ComParametro
      titulo="Situação do Aluno"
      aluno="Maria Gomes"
      nota={5.9}
    />
  </div>,

  document.getElementById("root")
);
