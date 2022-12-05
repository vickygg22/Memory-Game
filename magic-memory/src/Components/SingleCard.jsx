import './SingleCard.css'


const SingleCard = ({card, handleChoice, flipped, disabled}) => {
  const handleClick = () => {
    if (!disabled) {
     handleChoice(card) 
    }
    
  }
    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
              <img className="front" src={card.src} alt="" />
              <img className="back" src="/img/cover.png" alt="" onClick={handleClick} />
            </div>
          </div>
    )
}

export default SingleCard;