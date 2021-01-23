import dataAlunos from "../../data/alunos";

const ListaAlunos = () => {
  return (
    <div>
      <ul>
        {dataAlunos.map((aluno) => (
          <li key={aluno.id}>
            {aluno.nome} - {aluno.nota}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaAlunos;
