import React, { useContext } from 'react';
import { GameContext } from '../Context/GameContext.js';
import Card from './Card';

export default function ExecutePassButton({ passCard }) {
  const { selectedCard, setSelectedCard, setFrom, from, to } = useContext(GameContext);

  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} /> from{' '}
      {from} to {to}
    </div>
  );
}
