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
    </>
  );
};

export default App;
