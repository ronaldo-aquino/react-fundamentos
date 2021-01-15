import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Frangmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";

const App = () => {
  return (
    <>
      <Primeiro />
      <ComParametro
        titulo="Situação do Aluno"
        aluno="Ronaldo Aquino"
        nota={9.3}
      />
      <Frangmento />
      <Aleatorio min={10} max={100} />
    </>
  );
};

export default App;
