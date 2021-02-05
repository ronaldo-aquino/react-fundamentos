import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Frangmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import Card from "./components/layout/Card";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import "./App.css";
import Familia from "./components/basicos/Familia";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";

const App = () => {
  return (
    <>
      <h1 className="title-component-app">Fundamentos React</h1>
      <div className="cards">
      
      <Card title="#08 Renderização condicional" color="#982395">
          <ParOuImpar numero={21} />
        </Card>

        <Card title="#07 Repetição desafio" color="#FF432E">
          <TabelaProdutos />
        </Card>

        <Card title="#06 Repetição" color="#FF4C65">
          <ListaAlunos />
        </Card>

        <Card title="#05 Exemplo Children" color="#00C8F8">
          <Familia lastName="Aquino">
            <FamiliaMembro firstName="Ronaldo" />
            <FamiliaMembro firstName="Ana" />
            <FamiliaMembro firstName="Gustavo" />
          </Familia>
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
