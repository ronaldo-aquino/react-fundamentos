const If = ({ children, teste }) => {
  const elseChild = children.filter((child) => {
    return child.type && child.type.name === "Else";
  })[0];

  const ifChildren = children.filter((child) => {
    return child !== elseChild;
  });

  if (teste) {
    return ifChildren;
  } else if (elseChild) {
    return elseChild;
  } else {
    return false;
  }
};

export default If;
