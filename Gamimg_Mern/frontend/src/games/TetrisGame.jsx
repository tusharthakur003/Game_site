// src/games/Tetris.js
// import React from 'react';
import { Tetris } from 'react-tetris';

const TetrisGame = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Tetris</h1>
      <div className="border border-gray-400 p-4">
        <Tetris />
      </div>
    </div>
  );
};

export default TetrisGame;
