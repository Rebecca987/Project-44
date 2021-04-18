var scubaDiver, scubaDiverImg
var turtle, turtleImg, crab, crabImg;
var angefish, angelfishImg, whale, whaleImg;
var underwaterBG;

var score;


function preload(){
  underwaterBG = loadImage("images/Underwater.png");

  scubaDriverImg = loadAnimation("images/ScubaDiver-Left.png","images/ScubaDiver-Right");
  turtleImg = loadImage("images/Turtle.png");
  crabImg = loadImage("images/Crab.png");
  angelfishImg = loadImage("images/Angel Fish.png");
  whaleImg = loadImage("images/Whale.png");
}

function setup() {
  createCanvas(450,400);
  
  scubaDiver = createSprite(220,350,20,50);
  scubaDiver.addAnimation("scuba",scubaDiverImg);
  scubaDiver.scale = 0,5;

  turtle = createSprite(226,76,100,100);
  turtle.addImage("turtle",turtleImg);
  turtle.scale = 0.3;

  crab = createSprite(80,250,100,100);
  crab.addImage("crab",crabImg);
  crab.scale = 0.3;

  angefish = createSprite(100,120,100,100);
  angefish.addImage("fish",angelfishImg);
  angefish.scale = 0.1;

  whale = createSprite(330,200,100,100);
  whale.addImage("whale",whaleImg);
  whale.scale = 0.1;

  scubaDiver.setCollider("rectangle",10, 120, 400, 100, 00);
  scubaDiver.debug = true;
  
  score = 0;
  
}

function draw() {
  
  background(underwaterBG);

  if (keyDown("right")) {
    scubaDiver.x = scubaDiver.x +2;
  }

  if (keyDown("left")) {
    scubaDiver.x = scubaDiver.x -2;
  }
 
  drawSprites();

}

