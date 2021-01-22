import FamiliaMembro from "./FamiliaMembro";

const Familia = ({lastName}) => {
  return (
    <>
      <FamiliaMembro firstName="Ronaldo" lastName={lastName} />
      <FamiliaMembro firstName="Ana" lastName={lastName} />
      <FamiliaMembro firstName="Ronaldo" lastName="Oliveira" />
    </>
  );
};

export default Familia;
