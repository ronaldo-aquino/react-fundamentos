const ParOuImpar = ({ numero }) => {
  return (
    <div>
      {numero % 2 === 0 ? (
        <span>O número {numero} é Par</span>
      ) : (
        <span>O número {numero} é Impar</span>
      )}
    </div>
  );
};

export default ParOuImpar;
