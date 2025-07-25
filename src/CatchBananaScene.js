import Phaser from "phaser";
export default class CatchBananaScene extends
Phaser.Scene
{
    constructor(){
        super('catch-banana-scene')
    }  
    
    init(){

    }
    preload(){
        this.load.image("background", "images/background.png");
        this.load.image("badbanana", "images/bad-banana.png");
        this.load.image("banana", "images/banana.png");
        this.load.image("startbtn", "images/start-button");
        this.load.spritesheet('gorilla', 'images/gorilla.png',{
            frameWidth,
            frameHeight //lanjutin
        })

    }
    create(){

    }
    update(){
        
    }
}