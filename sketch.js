
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polyim
var hex
function preload(){
  polyim = loadImage("polygon.png")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


ground1 = new Ground(265,360,350,10)
ground2 = new Ground(660,300,350,10)

//first level1
box1 = new Box(400,344,30,40)
box2 = new Box(370,344,30,40)
box3 = new Box(340,344,30,40)
box4 = new Box(310,344,30,40)
box5 = new Box(280,344,30,40)
box6 = new Box(250,344,30,40)
box7 = new Box(220,344,30,40)
box8 = new Box(190,344,30,40)
box9 = new Box(160,344,30,40)
box10 = new Box(130,344,30,40)
//second level1
box21 = new Box(340,328,30,40)
box22 = new Box(310,328,30,40)
box23 = new Box(280,328,30,40)
box24 = new Box(250,328,30,40)
box25 = new Box(220,328,30,40)
box26 = new Box(190,328,30,40)

//third level1
box27 = new Box(280,312,30,40)
box28 = new Box(250,312,30,40)


//first level2
box11 = new Box(800,284,30,40)
box12 = new Box(770,284,30,40)
box13 = new Box(740,284,30,40)
box14 = new Box(710,284,30,40)
box15 = new Box(680,284,30,40)
box16 = new Box(650,284,30,40)
box17 = new Box(620,284,30,40)
box18 = new Box(590,284,30,40)
box19 = new Box(560,284,30,40)
box20 = new Box(530,284,30,40)
// second level2
box29 = new Box(770,268,30,40)
box30 = new Box(710,268,30,40)
box31 = new Box(650,268,30,40)
box32 = new Box(590,268,30,40)
//third level2
box33 = new Box(680,252,200,40);

hex = Bodies.circle(50,200,20);
World.add(world,hex);
sling = new Slingshot(this.hex,{x:100,y:200});


}

function draw() {
  background("skyblue");  
  Engine.update(engine);
ground1.display();
ground2.display();
box5.display();
box6.display();
box7.display();
box4.display();
box8.display();
box3.display();
box9.display();
box2.display();
box10.display();
box1.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();
box31.display();
box32.display();
box33.display();
sling.display();

imageMode(CENTER)
image(polyim,hex.position.x,hex.position.y,40,40);


  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.hex,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode===32){
      sling.attach(this.hex);
  }
}