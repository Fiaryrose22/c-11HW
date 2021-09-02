var DrinkImg,boyImg,

function params() {
  
  //pre-load images
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  DrinkImg = loadAnimation("energyDrink.png")
  Path = loadAnimation("path.png")
}

function setup(){
 Path = createCanvas(400,400);
 Path = addImage(PathImg)
 Path.velcityY=4;
 Path.scale=1.2;
  //create sprites here
}

function draw() {
  background(0);
   
  if(Path.y > 400 ){
    Path.y =height/2 ;
  }

}
