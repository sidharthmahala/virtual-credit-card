import React from 'react'
import { useState } from 'react'
import './VirtualCard.css'


const CARD_DETAILS = {
    name: "Sidharth Mahala",
    exp: new Date("Jan 1, 2025"),
    number: "6518205478948745",
    cvv: "306"
}

const MASK_CHAR = "*";

function VirtualCard() {

    const { name, exp, number, cvv } = CARD_DETAILS;

    const mmYY = `${exp.getMonth() + 1}/${CARD_DETAILS.exp.getFullYear().toString().slice(-2)}`

    const [cardNumber, setCardNumber] = useState(number);
    const [expDate, setExpDate] = useState(mmYY);
    const [cvvCode, setCvvCode] = useState(cvv);
    const [isLocked, setIsLocked] = useState(false);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);


    //FUNCTION TO COPY TO CLIPBOARD

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    }
    let formattedCard = cardNumber;
    if (!isHovered) {

        formattedCard = formattedCard
            .slice(-4)
            .padStart(formattedCard.length, MASK_CHAR);
    }

    formattedCard = formattedCard.match(/.{1,4}/g).join(" ");


    //EVENT HANDLING

    // event handler for the Lock/Unlock button
    const handleLockClick = () => {
        setIsLocked((prevIsLocked) => !prevIsLocked);
    }

    //CARD NUMBER FIELD

    const handleCardNumberClick = () => {

        copyToClipboard(cardNumber);
        setCardNumber('Copied');
        setTimeout(() => setCardNumber(cardNumber), 1500);
    }

    //EXPIRY DATE

    const handleExpDateClick = () => {

        copyToClipboard(expDate);
        setExpDate("Copied");
        setTimeout(() => setExpDate(expDate), 1500);
    }

    //cvv

    const handleCvvCodeClick = () => {

        copyToClipboard(cvvCode);
        setCvvCode("Copied");
        setTimeout(() => setCvvCode(cvvCode), 1500)

    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-details" style={{ opacity: isLocked ? "0.1" : "1" }}>
                    <div className="name-number">
                        {name}
                        <div className="card-number" onClick={handleCardNumberClick} style={{ opacity: isLocked ? "0" : "1" }} onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            {formattedCard}                       </div>
                    </div>
                    <div className="expire-cvv">
                        <div className="exp-details">
                            <p>Expire</p>
                            <div className="exp-date" onClick={handleExpDateClick} style={{ opacity: isLocked ? "0" : "1" }}>
                                {expDate.replace(/\d(?=\d{2})/g, "x")}
                            </div>
                        </div>
                        <div className="cvv-details">
                            <p>CVV</p>
                            <div className="cvv" style={{ opacity: isLocked ? "0" : "1" }} onClick={handleCvvCodeClick} >
                                {cvvCode}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="branding" style={{ opacity: isLocked ? "0.5" : "1" }}>
                    <img src={require('./Assets/delhi-gate-min.png')} alt="logo" />
                    <h1 className='brand-name'>vird</h1>
                    <img className="shape-logo" src={require('./Assets/qrcode.png')} alt="" />
                </div>

            </div>
            <button className='button-lock' onClick={handleLockClick}>{isLocked ? "Unlock" : "Lock"}</button>
        </div>
    )
}

export default VirtualCard