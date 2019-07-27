import 'phaser';
import DraftScene from '../draft-scene/draft-scene.class';

var myScene;
export default class LobbyScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LobbyScene', active: true });
    myScene = this;
  }

  create() {
    let graphics = this.add.graphics();
    graphics.fillStyle(0xff9933, 1);
    graphics.fillRect(100, 200, 600, 300);

    var welcomeMessage = this.add.text(100, 180, 'Welcome to 2427 Autochess');
    const startButton = this.createStartButton();
  }

  createStartButton() {
    const startButton = this.add.text(350, 520, 'Start =>', {
      backgroundColor: '#fff',
      padding: {
        x: 20,
        y: 10,
      },
      fill: '#000',
      borderRadius: 10,
    });
    startButton.setInteractive();
    startButton.on('pointerover', () => {
      startButton.setStyle({
        backgroundColor: '#d7d7ff',
      });
    });
    startButton.on('pointerout', () => {
      startButton.setStyle({
        backgroundColor: '#fff',
      });
    });
    startButton.on('pointerdown', this.startGame.bind(this));
    return startButton;
  }

  startGame() {
    this.game.scene.add('DraftScene', DraftScene);
    this.game.scene.remove('LobbyScene');
  }
}
