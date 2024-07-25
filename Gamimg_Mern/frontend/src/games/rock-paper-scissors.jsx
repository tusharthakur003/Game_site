// src/games/RockPaperScissors.js
import { useState } from 'react';

const choices = ['Rock', 'Paper', 'Scissors'];

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const playGame = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setResult(determineWinner(choice, computerChoice));
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return 'It\'s a tie!';
    if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
    ) {
      return 'You win!';
    }
    return 'You lose!';
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Rock-Paper-Scissors</h1>
      <div className="flex space-x-4">
        {choices.map(choice => (
          <button
            key={choice}
            onClick={() => playGame(choice)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            {choice}
          </button>
        ))}
      </div>
      {result && (
        <div className="mt-4 text-xl">
          <div>You chose: {userChoice}</div>
          <div>Computer chose: {computerChoice}</div>
          <div>{result}</div>
        </div>
      )}
      <button
        onClick={() => {
          setUserChoice(null);
          setComputerChoice(null);
          setResult(null);
        }}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Play Again
      </button>
    </div>
  );
};

export default RockPaperScissors;
