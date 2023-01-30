let canvas;
let button;
let button2;
let happy = false;
let food = 0;

let hungry = 0;
let full = 1;
let tamaState = hungry;

let tamaX;
let tamaY;
let tamaDiam;

function setup() {

  canvas = createCanvas(500, 500);
  canvas.parent("sketch-container");
  tamaX = width/2;
  tamaY = height/2;
  tamaDiam = width/6;

  addGUI();
}

function draw() {
  background(140, 192, 245);
  noStroke();
  
  if(tamaState == hungry){
    fill(255);
    
    if(tamaDiam > width/2){
      tamaDiam = full;
    }
  }else{
    fill(0,255,0);
       }

  ellipse(tamaX,tamaY,tamaDiam);
  circle(tamaX *2 / 3,tamaY *2 / 3,50);
  circle(tamaX *4 / 3,tamaY *2 / 3,50);
  
  fill(43, 97, 153);
  circle(tamaX *2 / 3,tamaY *2 / 3,20);
  circle(tamaX *4 / 3,tamaY *2 / 3,20);
  fill(140, 192, 245);
  let mouthOffset = tamaDiam/2;
  rect(tamaX-mouthOffset/2,tamaY,mouthOffset,3);


  if(food > 0 ){
    
    if(tamaState == hungry){
      eatFood();
    }

    fill(100);
    circle(tamaX,tamaY+food,food);

  }else{
    happy = false;
    button.html("MODE");
    button.removeClass("interactive");
  }
  

}

function eatFood(){
  fill(140, 192, 245);
  ellipse(tamaX,tamaY,tamaDiam/2,tamaDiam/4);
  
  food--;
  tamaDiam++;
}


  

function addGUI(){

  
  button = createButton("FEED");
  button.parent("gui-container");
  button.addClass("button");
  button.mousePressed(handleButtonPress);

  button2 = createButton("FEED");
  button2.parent("gui-container");
  button2.addClass("button");
  button2.mousePressed(handleButtonPress);
}

function handleButtonPress(){
  
  if(!happy){
    happy = true;
  food = random(40,60);
  console.log("Pressed");
    
    button.html("HUNGRY");
    button.addClass("interactive");
}
}