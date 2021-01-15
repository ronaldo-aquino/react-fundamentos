const Aleatorio = ({ min, max }) => {
  const valorEscolhido = parseInt(Math.random() * (max - min + 1) + min);
  return (
    <>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor Mínimo: </strong>
        {min}
      </p>
      <p>
        <strong>Valor Máximo: </strong>
        {max}
      </p>
      <p>
        <strong>Valor Escolhido: </strong>
        {valorEscolhido}
      </p>
    </>
  );
};

export default Aleatorio;
