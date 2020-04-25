
  var car,wall,weight,speed
function setup() {
  var canvas = createCanvas(1600, 400);
  car = createSprite(50,200,50,50)
  weight=2200;
  speed=60;
  car.velocityX = 3;
  car.shapeColor = color("white")
  wall=createSprite(1500,200, 60, height/2)
  wall.shapeColor=color("green")
}


function draw() {
  background(0);  
  if(isTouching(wall,car)){
	 deformation1();
	 wall.velocityX = 0
	 car.velocityX  = -5;
  }
  drawSprites();
 
}


function isTouching(obj1,obj2){
	if(obj1.x-obj2.x<(obj1.width/2)+(obj2.width/2)){
	console.log("touches")
	return true
	}
}
function deformation1()
{
	text("Deformation Calculated",200,10)
	var deformation=Math.round(0.5 *weight * speed*speed/22509)
	console.log(deformation)

	if(deformation>180)
	{
		car.shapeColor=color("yellow");
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color("blue");
	}

	if(deformation<100)
	{
		car.shapeColor=color("lightgreen");
	}
}