import 'phaser';

export default class DraftScene extends Phaser.Scene {
  constructor() {
    super({ key: 'DraftScene', active: false });
  }

  create() {
    this.add.text(220, 110, 'Draft Screen fillmein');
  }
}
