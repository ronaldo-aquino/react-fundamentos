import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Frangmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import Card from "./components/layout/Card";

const App = () => {
  return (
    <>
      <h1>Fundamentos React</h1>

      <Card title="#01 Primeiro components">
        <Primeiro />
      </Card>

      <Card title="#02 Exemplo com parâmetro">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Ronaldo Aquino"
          nota={9.3}
        />
      </Card>

      <Card title="#03 Exemplo de Fragment">
        <Frangmento />
      </Card>

      <Card title="#04 Desafio Aleatório">
        <Aleatorio min={10} max={100} />
      </Card>
    </>
  );
};

export default App;
