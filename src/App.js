import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Frangmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import Card from "./components/layout/Card";
import "./App.css";
import Familia from "./components/basicos/Familia";

const App = () => {
  return (
    <>
      <h1 className="title-component-app">Fundamentos React</h1>
      <div className="cards">
        <Card title="#05 Exemplo Children" color="#00C8F8">
          <Familia lastName="Aquino"></Familia>
        </Card>

        <Card title="#04 Desafio Aleatório" color="#588C73">
          <Aleatorio min={10} max={100} />
        </Card>

        <Card title="#03 Exemplo de Fragment" color="#E8871A">
          <Frangmento />
        </Card>

        <Card title="#02 Exemplo com parâmetro" color="#E94C6F">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Ronaldo Aquino"
            nota={9.3}
          />
        </Card>

        <Card title="#01 Primeiro components" color="#FA6900">
          <Primeiro />
        </Card>
      </div>
    </>
  );
};

export default App;
