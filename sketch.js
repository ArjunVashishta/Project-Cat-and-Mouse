var mouse;
var cat;
var garden;




function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png")
    catImage=loadAnimation("images/cat1.png")
    mouseImage=loadAnimation("images/mouse1.png")
    catRunning=loadAnimation("images/cat2.png", "images/cat3.png")
    catStop=loadAnimation("images/cat4.png")
    mouseStop=loadAnimation("images/mouse4.png")

}

function setup() {
    createCanvas(1200, 600);
    //create tom and jerry sprites here
    garden=createSprite(600,300,1200,600)
    garden.addImage(gardenImage)
    garden.scale=1.5;


    tom=createSprite(940,420)
    tom.addAnimation("stop",catImage)
    tom.scale=0.2;

    jerry=createSprite(190,470)
    jerry.addAnimation("stopMouse",mouseImage)
    jerry.scale=0.1;
    
}






function draw() {
    
if(tom.x-jerry.x<tom.width/2+jerry.width/2){
    tom.velocityX=0;
    tom.addAnimation("lastImage",catStop )
    tom.changeAnimation("lastImage")
    jerry.addAnimation("last", mouseStop)
    jerry.changeAnimation("last")
}
    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    text(mouseX + "," + mouseY,mouseX,mouseY)
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        tom.velocityX=-5;
        tom.addAnimation("running",catRunning )
        tom.changeAnimation("running")
        
    }

  //For moving and changing animation write code here


}
