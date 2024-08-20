import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const CardApp = () => {
  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);

  // Fetch a new deck when the component mounts
  useEffect(() => {
    async function fetchDeck() {
      try {
        const res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        setDeckId(res.data.deck_id);
        setRemaining(res.data.remaining);
      } catch (error) {
        console.error('Error fetching deck:', error);
      }
    }

    fetchDeck();
  }, []);

  // Function to draw a card
  const drawCard = async () => {
    if (remaining === 0) {
      alert('Error: no cards remaining!');
      return;
    }

    try {
      const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
      setCards((prevCards) => [...prevCards, res.data.cards[0]]);
      setRemaining(res.data.remaining);
    } catch (error) {
      console.error('Error drawing card:', error);
    }
  };

  // Function to shuffle the deck
  const shuffleDeck = async () => {
    setIsShuffling(true);

    try {
      const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
      setDeckId(res.data.deck_id);
      setCards([]); // Clear all drawn cards from the display
      setRemaining(52); // Reset the remaining card count
    } catch (error) {
      console.error('Error shuffling deck:', error);
    }

    setIsShuffling(false);
  };

return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={drawCard} disabled={remaining === 0}>
        Draw a Card
      </button>
      <button onClick={shuffleDeck} disabled={isShuffling}>
        {isShuffling ? 'Shuffling...' : 'Shuffle Deck'}
      </button>

      <div style={{  marginBottom: "400px", position: 'relative', width: '200px', height: '300px', margin: '0 auto' }}>
        {cards.map((card, index) => {
          const randomX = Math.random() * 40 - 20; // Random X offset between -20px and 20px
          const randomY = Math.random() * 40 - 20; // Random Y offset between -20px and 20px
          const randomRotation = Math.random() * 40 - 20; // Random rotation between -20deg and 20deg

          return (
            <img
              key={index}
              src={card.image}
              alt={`${card.value} of ${card.suit}`}
              style={{
                position: 'absolute',
                top: `${randomY}px`,
                left: `${randomX}px`,
                transform: `rotate(${randomRotation}deg)`,
                width: '100%',
                height: 'auto',
                zIndex: index, // Ensure cards stack in the order they are drawn
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardApp;

