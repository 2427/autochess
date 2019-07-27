import 'phaser';

export default class LobbyScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LobbyScene', active: true });
  }

  create() {
    let graphics = this.add.graphics();

    graphics.fillStyle(0xff9933, 1);
    graphics.fillRect(100, 200, 600, 300);

    this.add.text(220, 110, 'Welcome to 2427 Autochess');
  }
}
