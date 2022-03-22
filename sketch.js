var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairyVoice;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg=loadImage("images/realHada.png");
	fairyVoice=loadSound("sound/videoplayback.mp4");
	//carga aquí la animación del hada
}

function setup() {
	createCanvas(800, 750);

    fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.50;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

 
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if(star.y > 470 && starBody.position.y > 470 ){
	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 20;
	}
	
	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		console.log("called");
		Matter.Body.setStatic(starBody,false); 
	}

}
