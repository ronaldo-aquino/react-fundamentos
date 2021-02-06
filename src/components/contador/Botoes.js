const Botoes = ({ inc, dec }) => {
  return (
    <>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </>
  );
};

export default Botoes;
