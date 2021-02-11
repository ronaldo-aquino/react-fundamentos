import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [{}],
  products: [{}, {}],
  user: null,
  number: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };

    case "login":
      return { ...state, user: { name: action.name } };
    default:
      return state;
  }
};

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Não tem usuário logado</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => dispatch({ type: "login", name: "João" })}>
            Logar
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberAdd2" })}
          >
            +2
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
