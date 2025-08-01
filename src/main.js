import Phaser from "phaser";
import CatchBananaScene from "./CatchBananaScene";


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [CatchBananaScene]
};

var game = new Phaser.Game(config);