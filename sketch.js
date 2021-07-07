
var shipImages,Ship;
var seaImage,sea;

function preload(){
  shipImages=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");  
  seaImage=loadImage("sea.png");
  
}

function setup(){
  //Creating canvas
  createCanvas(400,400);
 
//Creating Ship
Ship=createSprite(100,300,20,50);
Ship.addAnimation("ship",shipImages);
Ship.scale=0.2;
Ship.x=50;

    //Creating Sea
 sea=createSprite(200,200,400,20);
 sea.addImage("sea",seaImage);
 sea.x = sea.width/2;  

  

  console.log(sea.depth);
  console.log(Ship.depth);


  sea.depth=Ship.depth;
  Ship.depth=Ship.depth+1;
}

function draw() {
  background("blue");

 sea.velocityX = -2
 console.log(sea.x)

  if(sea.x<0){
    sea.x = sea.widht/2;
  }

  if(keyDown("right")){
    Ship.x = Ship.x+2;
  }

  if(keyDown("left")){
    Ship.x = Ship.x-2;
  }



// Ship.collide(sea);
  drawSprites();
}