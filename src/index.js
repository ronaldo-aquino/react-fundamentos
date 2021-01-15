import ReactDOM from "react-dom";
import ComParametro from "./components/basicos/ComParametro";
import Frangmento from "./components/basicos/Fragmento";
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
    <Frangmento />
  </div>,

  document.getElementById("root")
);
