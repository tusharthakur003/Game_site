import { useState } from 'react';
import { GameLoop, Keyboard } from 'react-game-kit';

const SimpleGame = () => {
  const [player, setPlayer] = useState({ x: 100, y: 100 });
  const speed = 5;

  const updatePlayerPosition = (dt) => {
    const { keys } = Keyboard;
    const newPlayer = { ...player };

    if (keys['ArrowUp']) newPlayer.y -= speed * dt;
    if (keys['ArrowDown']) newPlayer.y += speed * dt;
    if (keys['ArrowLeft']) newPlayer.x -= speed * dt;
    if (keys['ArrowRight']) newPlayer.x += speed * dt;

    setPlayer(newPlayer);
  };

  return (
    <GameLoop update={updatePlayerPosition}>
      <div style={{ width: '800px', height: '600px', position: 'relative', border: '1px solid black' }}>
        <div
          style={{
            position: 'absolute',
            top: player.y,
            left: player.x,
            width: '50px',
            height: '50px',
            backgroundColor: 'blue'
          }}
        />
      </div>
    </GameLoop>
  );
};

export default SimpleGame;
