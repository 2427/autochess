import 'phaser';
import DraftScene from '../draft-scene/draft-scene.class';

export default class LobbyScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LobbyScene', active: true });
  }

  preload() {
    this.load.html('nameform', 'assets/nameform.html');
  }

  create() {
    this.createNameForm();
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
  }

  startGame() {
    this.game.scene.add('DraftScene', DraftScene);
    this.game.scene.remove('LobbyScene');
  }

  createNameForm() {
    var text = this.add.text(300, 10, 'Please enter your name', {
      color: 'white',
      fontSize: '20px ',
    });

    var element = this.add.dom(20, 20).createFromCache('nameform');

    element.addListener('click');

    element.on('click', function(event) {
      if (event.target.name === 'playButton') {
        var inputText = this.getChildByName('nameField');

        if (inputText.value !== '') {
          this.removeListener('click');
          this.setVisible(false);
          text.setText('Welcome ' + inputText.value);
          success();
        }
      }
    });
    const success = () => {
      var welcomeMessage = this.add.text(100, 180, 'Welcome to 2427 Autochess');
      const startButton = this.createStartButton();
    };
  }
}
