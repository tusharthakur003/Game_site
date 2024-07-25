// src/games/MemoryCardGame.js
import { useState, useEffect } from 'react';

const generateCards = () => {
  const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const cards = symbols.concat(symbols).sort(() => Math.random() - 0.5);
  return cards.map((symbol, index) => ({ id: index, symbol, isFlipped: false, isMatched: false }));
};

const MemoryCardGame = () => {
  const [cards, setCards] = useState(generateCards());
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  const handleCardClick = (clickedCard) => {
    if (clickedCard.isFlipped || firstCard && secondCard) return;

    const newCards = cards.map(card => card.id === clickedCard.id ? { ...card, isFlipped: true } : card);
    setCards(newCards);

    if (!firstCard) {
      setFirstCard(clickedCard);
    } else if (!secondCard) {
      setSecondCard(clickedCard);
    }
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.symbol === secondCard.symbol) {
        const newCards = cards.map(card =>
          card.symbol === firstCard.symbol ? { ...card, isMatched: true } : card
        );
        setCards(newCards);
      } else {
        setTimeout(() => {
          const newCards = cards.map(card =>
            card.id === firstCard.id || card.id === secondCard.id ? { ...card, isFlipped: false } : card
          );
          setCards(newCards);
        }, 1000);
      }
      setFirstCard(null);
      setSecondCard(null);
    }
  }, [firstCard, secondCard, cards]);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Memory Card Game</h1>
      <div className="grid grid-cols-4 gap-4">
        {cards.map(card => (
          <div
            key={card.id}
            className={`w-16 h-16 flex items-center justify-center text-2xl border border-gray-400 ${card.isFlipped || card.isMatched ? 'bg-white' : 'bg-gray-200'}`}
            onClick={() => handleCardClick(card)}
          >
            {card.isFlipped || card.isMatched ? card.symbol : ''}
          </div>
        ))}
      </div>
      <button
        onClick={() => setCards(generateCards())}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Reset Game
      </button>
    </div>
  );
};

export default MemoryCardGame;
