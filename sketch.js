function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(200, 200, 50, 80);
  movingrect=createSprite(400,200,80,30);
  fixedrect.shapeColor='red';
  movingrect.shapeColor='red';
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2&&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2) {
  fixedrect.shapeColor='blue';
  movingrect.shapeColor='blue';
  }
  else{
    fixedrect.shapeColor='red';
    movingrect.shapeColor='red'; 
  }
  drawSprites();
}