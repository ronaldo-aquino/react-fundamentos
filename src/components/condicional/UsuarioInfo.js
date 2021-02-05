import If from "./If";

const UsuarioInfo = ({ usuario }) => {
  return (
    <div>
      <If teste={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}</strong>!
      </If>
    </div>
  );
};

export default UsuarioInfo;
