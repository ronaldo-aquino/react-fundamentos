import React from "react";

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
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input
            type="number"
            id="passoInput"
            value={this.state.passo}
            onChange={(e) => this.handleChangeInput(e)}
          />
        </div>
        <button onClick={() => this.inc()}>+</button>
        <button onClick={() => this.dec()}>-</button>
        <p>{this.state.numero}</p>
      </div>
    );
  }
}

export default Contador;
