const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
    playerBase = new PlayerBase(300,random(450,height - 300), 180, 150);
    player = new Player(285,playerBase.body.position.y - 153,50,180);
    computerbase = new ComputerBase(300,random(460,height - 300), 150, 180);
    player2 = new ComputerPlayer(290,computerbase.body.position.y-153, 60,120);
 }

function draw() {

  background(180);

  

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
    playerBase.display();
    computerbase.display();

   //display Player and computerplayer
   player.display();
   player2.display();
   Engine.update(engine);
}
