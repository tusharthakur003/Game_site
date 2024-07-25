// src/games/Chess.js
import { useState } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js';

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const [moves, setMoves] = useState([]);
  const [fen, setFen] = useState(game.fen());

  const handleDrop = ({ sourceSquare, targetSquare }) => {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    });

    if (move) {
      setMoves([...moves, move]);
      setFen(game.fen());
    }
  };

  const handleSquareClick = (square) => {
    const move = game.move({
      from: square,
      to: square,
    });

    if (move) {
      setMoves([...moves, move]);
      setFen(game.fen());
    }
  };

  const resetGame = () => {
    const newGame = new Chess();
    setGame(newGame);
    setMoves([]);
    setFen(newGame.fen());
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Chess Game</h1>
      <Chessboard
        width={400}
        position={fen}
        onDrop={handleDrop}
        onMouseUp={handleSquareClick}
      />
      <button
        onClick={resetGame}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Reset Game
      </button>
      <div className="mt-6 w-64">
        <h2 className="text-xl font-semibold mb-2">Moves</h2>
        <ul className="list-none p-0">
          {moves.map((move, index) => (
            <li key={index} className="mb-1">
              {move.from}-{move.to}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChessGame;
