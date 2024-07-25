// src/games/ClickerGame.jsx
import { useState } from 'react';

const ClickerGame = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Clicker Game</h1>
      <button
        className="px-4 py-2 mb-4 border-2 border-gray-400"
        onClick={() => setScore(score + 1)}
      >
        Click Me!
      </button>
      <div className="text-xl">Score: {score}</div>
    </div>
  );
};

export default ClickerGame;
