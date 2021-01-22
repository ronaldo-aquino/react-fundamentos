import "./Card.css";

const Card = ({ children, title, color }) => {
  const styleBackgroundAndBorderColorCard = color || "#f00";
  const cardStyle = {
    backgroundColor: styleBackgroundAndBorderColorCard,
    borderColor: styleBackgroundAndBorderColorCard,
  };

  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{title}</div>
      <div className="Content">{children}</div>
    </div>
  );
};

export default Card;
