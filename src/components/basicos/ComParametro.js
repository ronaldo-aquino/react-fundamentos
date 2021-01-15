const ComParametro = ({ titulo, aluno, nota }) => {
  const status = nota >= 7 ? "Aprovado" : "Recuperação";
  return (
    <>
      <h1>{titulo}</h1>
      <p>
        {aluno} tem nota {nota} e foi {status}
      </p>
    </>
  );
};

export default ComParametro;
