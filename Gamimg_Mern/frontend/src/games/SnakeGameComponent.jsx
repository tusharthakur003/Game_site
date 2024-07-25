// src/SnakeGame.js
import { useState, useEffect, useRef } from 'react';

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 5, y: 5 }]);
  const [food, setFood] = useState({ x: 10, y: 10 });
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const canvasRef = useRef(null);
  const gridSize = 20;
  const boxSize = 20;

  useEffect(() => {
    const handleKeydown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [direction]);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setSnake(prevSnake => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };

        switch (direction) {
          case 'UP':
            head.y -= 1;
            break;
          case 'DOWN':
            head.y += 1;
            break;
          case 'LEFT':
            head.x -= 1;
            break;
          case 'RIGHT':
            head.x += 1;
            break;
          default:
            break;
        }

        newSnake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
          setFood({
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
          });
        } else {
          newSnake.pop();
        }

        if (
          head.x < 0 || head.x >= gridSize ||
          head.y < 0 || head.y >= gridSize ||
          newSnake.slice(1).some(seg => seg.x === head.x && seg.y === head.y)
        ) {
          setGameOver(true);
          clearInterval(interval);
        }

        return newSnake;
      });
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [direction, food, gameOver]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'green';
    snake.forEach(seg => {
      ctx.fillRect(seg.x * boxSize, seg.y * boxSize, boxSize, boxSize);
    });

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize);
  }, [snake, food]);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Snake Game</h1>
      <canvas
        ref={canvasRef}
        width={gridSize * boxSize}
        height={gridSize * boxSize}
        className="border border-gray-400"
      />
      {gameOver && <div className="mt-4 text-xl text-red-500">Game Over</div>}
    </div>
  );
};

export default SnakeGame;
