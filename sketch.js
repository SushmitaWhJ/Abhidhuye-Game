
var canvas, backgroundImage;

var gameState = "Text";
var playerCount;

var database;

var form, player, game;
var blue1,blue2,lue3,blue4,dice1,dice2,dice3,dice4,dice5,dice6,green1,green2,green3,green4,lodo,red1,red2,red3,red4,yellow1,yellow2,yellow3,yellow4;

function preload(){
  ludoImage = loadImage("images/ludo bg.png");
  blue1Image = loadImage("images/blue.png");
}
function setup(){
  canvas = createCanvas(400,400);
  
  
  ludo = createSprite(200,200);
  ludo.visible=false;
  blue1 = createSprite(200,200);
  blue1.visible=false;
}


  
function draw(){
 background("white")
if(gameState==="Text"){
 text("WELCOME TO ABHIDUYE GAME",200,200)
 text("Press Space to start" ,200,300 )
}
 text(mouseX+","+mouseY,mouseX,mouseY)

   if(keyDown("space")&& gameState==="Text"){
     gameState="Play"
   
   }
   if(gameState==="Play"){
    background (ludoImage)
   }
  
  
  drawSprites();
}
