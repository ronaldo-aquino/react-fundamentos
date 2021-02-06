const Mega = () => {
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

  console.log(gerarNumeros(7));
  return <div></div>;
};

export default Mega;
