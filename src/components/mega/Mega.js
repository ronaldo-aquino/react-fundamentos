import { useState } from "react";

const Mega = ({ quantidade }) => {
  const [qtde, setQtde] = useState(quantidade || 6);
  const numerosIniciais = Array(qtde).fill(0);
  const [numeros, setNumeros] = useState(numerosIniciais);

  const gerarNumeroNãoContido = (min, max, array) => {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(aleatorio)
      ? gerarNumeroNãoContido(min, max, array)
      : aleatorio;
  };

  const gerarNumeros = (qtde) => {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNãoContido(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((x, y) => x - y);

    return numeros;
  };

  return (
    <div>
      <h2>Mega</h2>
      <h3>{numeros.join(" - ")}</h3>
      <div>
        <label>Quantidde de números</label>
        <input
          type="number"
          value={qtde}
          onChange={(e) => setQtde(+e.target.value)}
        />
      </div>
      <button onClick={() => setNumeros(gerarNumeros(qtde))}>
        Gerar Números
      </button>
    </div>
  );
};

export default Mega;
