import React from "react";
import Botoes from "./Botoes";
import Display from "./Display";
import PassoForm from "./PassorForm";

class Contador extends React.Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: 1,
  };

  inc() {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  }

  dec() {
    if (this.state.numero <= 0) {
      this.setState({
        numero: 0,
      });
      return;
    }
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  }

  handleChangeInput(e) {
    this.setState({
      passo: Number(e.target.value),
    });
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <Display currentNumber={this.state.numero} />
        <div>
          <PassoForm
            currentValue={this.state.passo}
            handleChance={(e) => this.handleChangeInput(e)}
          />
        </div>
        <Botoes inc={() => this.inc()} dec={() => this.dec()} />
      </div>
    );
  }
}

export default Contador;
