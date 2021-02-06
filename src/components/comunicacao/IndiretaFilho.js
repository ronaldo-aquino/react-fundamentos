const IndiretaFilho = ({ fornecerInformacoes, limparInformacoes }) => {
  return (
    <div>
      <div>Filho</div>
      <button onClick={() => fornecerInformacoes("Ronaldo", 27, true)}>
        Fornecer Informações
      </button>
      <button onClick={() => limparInformacoes()}>Limpar Informações</button>
    </div>
  );
};
export default IndiretaFilho;
