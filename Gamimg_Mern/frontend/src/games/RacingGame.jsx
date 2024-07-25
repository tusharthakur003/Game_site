// src/games/RacingGame.js
import  { useState, useEffect } from 'react';

const RacingGame = () => {
  const [carPosition, setCarPosition] = useState(50); // 50% from left
  const [obstaclePosition, setObstaclePosition] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setCarPosition(prev => Math.max(prev - 10, 0));
    } else if (e.key === 'ArrowRight') {
      setCarPosition(prev => Math.min(prev + 10, 100));
    }
  };

  useEffect(() => {
    const handleObstacleMovement = () => {
      if (obstaclePosition > 100) {
        setObstaclePosition(0);
        setScore(prev => prev + 1);
      } else {
        setObstaclePosition(prev => prev + 2);
      }

      if (Math.abs(carPosition - obstaclePosition) < 5 && obstaclePosition > 90) {
        setIsGameOver(true);
      }
    };

    if (!isGameOver) {
      const intervalId = setInterval(handleObstacleMovement, 100);
      return () => clearInterval(intervalId);
    }
  }, [obstaclePosition, carPosition, isGameOver]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const restartGame = () => {
    setCarPosition(50);
    setObstaclePosition(0);
    setScore(0);
    setIsGameOver(false);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Racing Game</h1>
      <div className="relative w-64 h-64 border border-gray-400 overflow-hidden">
        <div
          className="absolute w-10 h-10 bg-blue-500"
          style={{ left: `${carPosition}%`, bottom: '10px' }}
        ></div>
        <div
          className="absolute w-10 h-10 bg-red-500"
          style={{ left: `${obstaclePosition}%`, top: '0' }}
        ></div>
      </div>
      <div className="mt-4">Score: {score}</div>
      {isGameOver && (
        <div className="mt-4 text-xl text-red-500">Game Over</div>
      )}
      <button
        onClick={restartGame}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        {isGameOver ? 'Restart Game' : 'Reset Game'}
      </button>
    </div>
  );
};

export default RacingGame;
