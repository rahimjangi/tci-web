// CardSection.tsx
import React from "react";
import Card from "./Card"; // Adjust the path as necessary
import "./CardSection.css"; // Ensure this CSS file exists with styles from the previous example
import { CardProps } from "../../types/types";

// Reuse the CardProps interface to define the type of cards data
interface CardSectionProps {
  cards: CardProps[];
}

const CardSection: React.FC<CardSectionProps> = ({ cards }) => {
  return (
    <div className="card-section">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardSection;
