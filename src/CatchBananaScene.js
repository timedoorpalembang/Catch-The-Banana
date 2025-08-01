import Phaser from "phaser";

export default class CatchBananaScene extends Phaser.Scene {
  constructor() {
    super("catch-banana-scene");
  }

  init() {
    this.cursor = undefined;
    this.player = undefined;
    this.background = undefined;
  }

  preload() {
    this.load.image("background", "images/background.jpg");
    this.load.image("badbanana", "images/bad-banana.png");
    this.load.image("banana", "images/banana.png");
    this.load.image("startbtn", "images/start-button.png"); // pastikan file ini ada dan pakai ekstensi!
    this.load.spritesheet("gorilla", "images/gorilla.png", {
      frameWidth: 114,
      frameHeight: 110,
    });
  }

  create() {
    // Tambahkan background terlebih dahulu agar ada di paling bawah
    this.background = this.add.image(300, 200, "background");
    this.background.setScrollFactor(0); // Ini mencegah background bergerak saat kamera bergerak

    // Tambahkan gorilla
    this.player = this.physics.add.sprite(100, 450, "gorilla");
    this.player.setCollideWorldBounds(true);

    // Input keyboard
    this.cursor = this.input.keyboard.createCursorKeys();

    // Animasi lompat
    this.anims.create({
      key: "jump",
      frames: this.anims.generateFrameNumbers("gorilla", {
        start: 12,
        end: 15,
      }),
      frameRate: 10,
      repeat: 0,
    });
  }

  update() {
    this.background.x -= 2;

    // Gerakan dasar player (kiri, kanan, loncat)

    if (this.cursor.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
      this.player.anims.play("jump", true);
    }
  }
}
