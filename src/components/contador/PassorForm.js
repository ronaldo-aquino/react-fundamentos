const PassoForm = ({currentValue, handleChance}) => {
  return (
    <>
      <label htmlFor="passoInput">Passo: </label>
      <input
        type="number"
        id="passoInput"
        value={currentValue}
        onChange={handleChance}
      />
    </>
  );
};

export default PassoForm;
