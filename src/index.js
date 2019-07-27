import 'phaser';
import LobbyScene from './lobby-scene/lobby-scene.class';

var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: [LobbyScene],
  dom: {
    createContainer: true,
  },
};

var game = new Phaser.Game(config);

function preload() {}

var platforms;

function create() {
  this.add.text(0, 0, 'Scene A', { fontFamily: '"Roboto Condensed"' });
}

function update() {}
