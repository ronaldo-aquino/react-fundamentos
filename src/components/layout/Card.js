import "./Card.css";

const Card = ({ children, title }) => {
  return (
    <div className="Card">
      <div className="Title">{title}</div>
      <div className="Content">{children}</div>
    </div>
  );
};

export default Card;
