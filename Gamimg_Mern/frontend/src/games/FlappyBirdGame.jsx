// src/games/FlappyBird.js
import { useRef, useEffect } from 'react';
import Phaser from 'phaser';

const FlappyBirdGame = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 },
          debug: false
        }
      },
      scene: {
        preload,
        create,
        update
      }
    };

    const game = new Phaser.Game(config);

    function preload() {
      this.load.image('sky', 'https://labs.phaser.io/assets/skies/space3.png');
      this.load.image('bird', 'https://labs.phaser.io/assets/sprites/bird.png');
      this.load.image('pipe', 'https://labs.phaser.io/assets/sprites/pipes.png');
    }

    function create() {
      this.add.image(400, 300, 'sky');

      this.bird = this.physics.add.sprite(100, 450, 'bird');
      this.bird.setBounce(0.2);
      this.bird.setCollideWorldBounds(true);

      this.pipes = this.physics.add.group();

      this.physics.add.collider(this.bird, this.pipes, hitPipe, null, this);

      this.physics.add.overlap(this.bird, this.pipes, hitPipe, null, this);

      this.input.on('pointerdown', () => {
        this.bird.setVelocityY(-330);
      });
    }

    function update() {
      if (this.bird.y < 0 || this.bird.y > 600) {
        this.scene.restart();
      }
    }

    function hitPipe() {
      this.scene.restart();
    }

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Flappy Bird</h1>
      <div ref={gameRef} style={{ width: '800px', height: '600px' }}></div>
    </div>
  );
};

export default FlappyBirdGame;
