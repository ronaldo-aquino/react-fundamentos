import Else from "./Else";
import If from "./If";

const UsuarioInfo = ({ usuario }) => {
  return (
    <div>
      {/* <If teste={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}</strong>!
      </If>
      <If teste={!usuario  || !usuario.nome}>
        Seja bem vindo <strong>Amigão</strong>!
      </If> */}

      <If teste={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}</strong>!
        <Else>
          Seja bem vindo <strong>Amigão</strong>!
        </Else>
      </If>
    </div>
  );
};

export default UsuarioInfo;
