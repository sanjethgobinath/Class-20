
var item2,item1;


function setup() {
  createCanvas(800,400);
  item1 = createSprite(400, 200, 50, 50);
  item1.shapeColor = "green";
   item2 = createSprite(500,200,30,80);
   item2.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
console.log(item2.x - item1.x);
item2.x = World.mouseX; 
item2.y = World.mouseY;

if(item2.x - item1.x < item1.width/2  + item2.width/2 &&
   item1.x - item2.x < item1.width/2  + item2.width/2 &&
   item2.y - item1.y < item1.height/2  + item2.height/2 && 
   item1.y - item2.y < item1.height/2  + item2.height/2){
item1.shapeColor = "red";

item2.shapeColor = "red";

}
else {
  item1.shapeColor = "green";

  item2.shapeColor = "green";
}


  drawSprites();
}