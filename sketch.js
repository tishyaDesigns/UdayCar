var bg,car,car2,car3,car4,ground;
var gamestate="play";

function preload(){
  bgimg=loadImage("bg2.jpg")
  car1img=loadImage("Car1.png")
  car2img=loadImage("Car2.png")
  car3img=loadImage("Car3.png")
  car4img=loadImage("Car4.png")
  groundimg=loadImage("Land.png")
  finishImg = loadImage("finishImg2.png")
}
function setup(){
createCanvas(windowWidth,400)
car2 = createSprite(20, 100,10,10);
car2.addImage(car2img);
car2.velocityX=random(8,10)+ getFrameRate()/60;
car2.scale=0.3;
car2.velocityY=10;
car3 = createSprite(20, 100,10,10);
car3.addImage(car3img);
car3.velocityX=random(8,12)+ getFrameRate()/60;;
car3.scale=0.3;
car3.velocityY=10;
car4 = createSprite(20, 100,10,10);
car4.addImage(car4img);
car4.velocityX=random(8,14)+ getFrameRate()/60;;
car4.scale=0.3;
car4.velocityY=10;
car = createSprite(5, 100,10,10);
car.addImage(car1img);
car.scale=0.3;
car.velocityY=10;
ground = createSprite(0, height - 5,width,10);
ground.visible = false;
finish = createSprite(3000, 300,10,10);
finish.addImage(finishImg);
}
function draw() {
if(gamestate=="play"){
background(0);
image(bgimg,-800,0, width*3,height)
camera.position.x = car.x;
car.collide(ground);
car2.collide(ground);
car3.collide(ground);
car4.collide(ground);

if (keyWentDown(RIGHT_ARROW)) {
car.velocityX=10;
}
if (keyWentUp(RIGHT_ARROW)){
  car.velocityX=0;
}
if (keyWentDown(LEFT_ARROW)) {
car.velocityX=-10;
}
if (keyWentUp(LEFT_ARROW)){
  car.velocityX=0;
}
if(car.x>=3000){
gamestate ="end";
}
drawSprites();
}
else if(gamestate==="end"){
  background("black");
if(car2.x< 3000 && car3.x<3000 && car4.x<3000){
    textSize(40);
    fill("yellow");
    text("You Win",3000,height/2);
    car2.velocityX = 0;
    car3.velocityX = 0;
    car4.velocityX = 0;
    car.velocityX = 0;
  }
else if(car2.x> 3000 && car3.x>3000 && car4.x>3000){
  textSize(40);
  fill("yellow");
  text("You Lost!!!Game Over",2850,height/2);
  car2.velocityX = 0;
  car3.velocityX = 0;
  car4.velocityX = 0;
  car.velocityX = 0;
}
else if(car2.x> 3000 && car3.x<3000 && car4.x<3000){
  textSize(40);
  fill("yellow");
  text("You Came Second!!!Game Over",2500,height/2);
  car2.velocityX = 0;
  car3.velocityX = 0;
  car4.velocityX = 0;
  car.velocityX = 0;
}
else if(car3.x> 3000 && car2.x<3000 && car4.x<3000){
  textSize(40);
  fill("yellow");
  text("You Came Second!!!Game Over",2500,height/2);
  car2.velocityX = 0;
  car3.velocityX = 0;
  car4.velocityX = 0;
  car.velocityX = 0;
}
else if(car4.x> 3000 && car2.x<3000 && car3.x<3000){
  textSize(40);
  fill("yellow");
  text("You Came Second!!!Game Over",2500,height/2);
  car2.velocityX = 0;
  car3.velocityX = 0;
  car4.velocityX = 0;
  car.velocityX = 0;
}
else if(car2.x> 3000 && car3.x>3000 && car4.x<3000){
  textSize(40);
  fill("yellow");
  text("You Came Third!!!Game Over",2500,height/2);
  car2.velocityX = 0;
  car3.velocityX = 0;
  car4.velocityX = 0;
  car.velocityX = 0;
}
else if(car2.x> 3000 && car4.x>3000 && car3.x<3000){
  textSize(40);
  fill("yellow");
  text("You Came Third!!!Game Over",2500,height/2);
  car2.velocityX = 0;
  car3.velocityX = 0;
  car4.velocityX = 0;
  car.velocityX = 0;
}
else if(car4.x> 3000 && car3.x>3000 && car2.x<3000){
  textSize(40);
  fill("yellow");
  text("You Came Third!!!Game Over",2500,height/2);
  car2.velocityX = 0;
  car3.velocityX = 0;
  car4.velocityX = 0;
  car.velocityX = 0;
}
}
}