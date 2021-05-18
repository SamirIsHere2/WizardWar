var canvas;

var gameState = 0;
var distance = 0;
var hearts = 3;
var database;

var form, player, game;

var Player, Wizard;

function preload(){
  Attack = loadImage("../images/Untitled drawing.jpg")
 Defence = loadImage("../images/Untitled drawing(1).jpg")
 Charge = loadImage("../images/Untitled drawing(2).jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  game = new Game();
  game.start();
}


function draw(){
  if(playerCount === 2){
    gameState = 1
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 1){
       
  }
  if(this.attack && gameState === 1){
    
  }

}