import DiretaFilho from "./DiretaFilho"

const DiretaPai = () => {
  return (
    <div>
      <DiretaFilho nome="Ronaldo" idade={27} nerd={false} />
      <DiretaFilho nome="Gusmão" idade={33} nerd={true} />
    </div>
  )
}
export default DiretaPai;