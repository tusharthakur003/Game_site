// src/games/ShootingGame.js
import { useState, useEffect } from 'react';

const ShootingGame = () => {
  const [playerPosition, setPlayerPosition] = useState(50); // 50% from left
  const [bullets, setBullets] = useState([]);
  const [targets, setTargets] = useState([{ left: Math.random() * 90, top: 0 }]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setPlayerPosition(prev => Math.max(prev - 10, 0));
    } else if (e.key === 'ArrowRight') {
      setPlayerPosition(prev => Math.min(prev + 10, 100));
    } else if (e.key === ' ') {
      setBullets(prev => [...prev, { left: playerPosition, top: 90 }]);
    }
  };

  useEffect(() => {
    const handleTargetsMovement = () => {
      if (!isGameOver) {
        setTargets(prev => {
          const newTargets = prev.map(target => ({
            ...target,
            top: target.top + 2,
          })).filter(target => target.top < 100);

          if (newTargets.length === 0) {
            setIsGameOver(true);
          }

          return newTargets;
        });
      }
    };

    const handleBulletsMovement = () => {
      setBullets(prev => {
        const newBullets = prev.map(bullet => ({
          ...bullet,
          top: bullet.top - 5,
        })).filter(bullet => bullet.top > 0);

        setTargets(prev => {
          const newTargets = prev.filter(target => !newBullets.some(bullet => (
            Math.abs(bullet.left - target.left) < 5 && Math.abs(bullet.top - target.top) < 5
          )));
          setScore(prev => prev + (prev.length - newTargets.length));
          return newTargets;
        });

        return newBullets;
      });
    };

    if (!isGameOver) {
      const intervalId = setInterval(() => {
        handleTargetsMovement();
        handleBulletsMovement();
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, [isGameOver]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const restartGame = () => {
    setPlayerPosition(50);
    setBullets([]);
    setTargets([{ left: Math.random() * 90, top: 0 }]);
    setScore(0);
    setIsGameOver(false);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Shooting Game</h1>
      <div className="relative w-64 h-64 border border-gray-400 overflow-hidden">
        <div
          className="absolute w-10 h-10 bg-blue-500"
          style={{ left: `${playerPosition}%`, bottom: '10px' }}
        ></div>
        {bullets.map((bullet, index) => (
          <div
            key={index}
            className="absolute w-2 h-4 bg-yellow-500"
            style={{ left: `${bullet.left}%`, bottom: `${bullet.top}%` }}
          ></div>
        ))}
        {targets.map((target, index) => (
          <div
            key={index}
            className="absolute w-10 h-10 bg-red-500"
            style={{ left: `${target.left}%`, top: `${target.top}%` }}
          ></div>
        ))}
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

export default ShootingGame;
