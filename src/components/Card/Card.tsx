// Card.tsx
import React from "react";
import "./Card.css";
import { CardProps } from "../../types/types";

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  text,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button onClick={onButtonClick} className="card-button">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
