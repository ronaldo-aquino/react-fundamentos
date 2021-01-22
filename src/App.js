import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Frangmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import Card from "./components/layout/Card";
import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="title-component-app">Fundamentos React</h1>
      <div className="cards">
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
      </div>
    </>
  );
};

export default App;
