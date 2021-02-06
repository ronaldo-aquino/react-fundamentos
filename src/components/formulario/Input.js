import { useState } from "react";
import "./Input.css";

const Input = () => {
  const [valor, setValor] = useState("Inicial");

  const handleChangeInput = (e) => {
    setValor(e.target.value);
  };

  return (
    <div className="Input">
      <h3>{valor}</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" onChange={handleChangeInput} value={valor} />
        <input type="text" value={valor} readOnly />
        <input type="text" value={undefined} />
      </div>
    </div>
  );
};

export default Input;
