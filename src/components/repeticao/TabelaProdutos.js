import dataProdutos from "../../data/tabelaProdutos";

const TabelaProdutos = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NOME</th>
          <th>PREÇO</th>
        </tr>
      </thead>
      <tbody>
        {dataProdutos.map((produto) => (
          <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.preco.toFixed(2).replace(".", ",")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaProdutos;
