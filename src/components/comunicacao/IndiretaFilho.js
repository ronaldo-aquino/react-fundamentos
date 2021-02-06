const IndiretaFilho = ({ fornecerInformacoes, limparInformacoes }) => {
  const min = 30;
  const max = 70;
  const gerarIdade = () => parseInt(Math.random() * ((max - min) + 1)) + min;

  return (
    <div>
      <div>Filho</div>
      <button
        onClick={() => fornecerInformacoes("Ronaldo", gerarIdade(), true)}
      >
        Fornecer Informações
      </button>
      <button onClick={() => limparInformacoes()}>Limpar Informações</button>
    </div>
  );
};
export default IndiretaFilho;
