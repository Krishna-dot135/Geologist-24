
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var rubber_body;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;
var ground;
var stone;
var iron_body;

function setup() {
	createCanvas(1200, 600);
    engine = Engine.create();
	world = engine.world;

	sand1 = new Sand(302,300);
	sand2 = new Sand(304,300);
	sand3 = new Sand(306,300);
	sand4 = new Sand(3008,300);
	sand5 = new Sand(310,300);
	sand6 = new Sand(302,310);
	sand7 = new Sand(304,310);
	sand8 = new Sand(306,310);
	sand9 = new Sand(308,310);
	sand10 = new Sand(310,310);

	rubber_body = new Rubber(150,300);
	iron_body = new Iron(600,200);
	ground = new Ground(600,600,1200,10);
	stone = new Stone(800,250);

	hammer = new Hammer(100,100);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  hammer.depth = rubber_body.depth+1;
  hammer.depth = iron_body.depth+1;
  hammer.depth = stone.depth+1;
  hammer.depth = sand1.depth+1;
  hammer.depth = sand2.depth+1;
  hammer.depth = sand3.depth+1;
  hammer.depth = sand4.depth+1;
  hammer.depth = sand5.depth+1;
  hammer.depth = sand6.depth+1;
  hammer.depth = sand7.depth+1;
  hammer.depth = sand8.depth+1;
  hammer.depth = sand9.depth+1;
  hammer.depth = sand10.depth+1;


  Engine.update(engine);
   rubber_body.display();
   hammer.display();
   iron_body.display();
   ground.display();
   stone.display();
   sand1.display();
   sand2.display();
   sand3.display();
   sand4.display();
   sand5.display();
   sand6.display();
   sand7.display();
   sand8.display();
   sand9.display();
   sand10.display();
 
}



