import { cloneElement } from "react";

const Familia = (props) => {
  return (
    <div>
      {props.children.map((child, index) => {
        return cloneElement(child, {...props, key: index});
      })}
    </div>
  );
};

export default Familia;
