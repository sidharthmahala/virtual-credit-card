import React from "react";
import {useState} from "react"
const CARD_DETAILS = {
  name: "Sidharth Mahala",
  exp: new Date("Jan 1, 2025"),
  number: "6518205478948745",
  cvv: "306"
};
const MASK_CHAR = "*";

const MaskNumbers = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  let cardNumber = CARD_DETAILS.number;
  if (!isHovered) {
    cardNumber = cardNumber
      .slice(-4)
      .padStart(cardNumber.length, MASK_CHAR);
  }
  cardNumber = cardNumber.match(/.{1,4}/g).join(" ");

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="virtual-card"
    >
      <div className="card-name">{CARD_DETAILS.name}</div>
      <div className="card-number">{cardNumber}</div>
      <div className="card-exp">{CARD_DETAILS.exp.toLocaleDateString()}</div>
      <div className="card-cvv">{CARD_DETAILS.cvv}</div>
    </div>
  );
};

export default MaskNumbers;
