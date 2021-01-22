const ComParametro = ({ titulo, aluno, nota }) => {
  const status = nota >= 7 ? "Aprovado" : "Recuperação";
  return (
    <>
      <h2>{titulo}</h2>
      <p>
        {aluno} tem nota {nota} e foi {status}
      </p>
    </>
  );
};

export default ComParametro;
