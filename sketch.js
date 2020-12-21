var dog;
var happyDog;
var dogSitting_image, dogCrouching_image;
var database; 
var foodStock;
var lastFed;
var milk_image;
var feedButton;
var addMilkButton;
var feedTime;
var lastFed;
var milkBottle
var name
//var time;

function preload(){
dogSitting_image = loadImage("images/dogImg.png");
dogCrouching_image = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  dog = createSprite(400, 300, 20, 50);
  dog = setImage("dog", dogSitting_image);
  
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  feedButton = createButton("Feed Your Doggo");
  addMilkButton = createButton("Add Milk");
  feedButton.position(150, 50);
  addMilkButton.position(200, 50);
}

function draw() {  
background(46, 139, 87);

textSize(2.5);
text("Current foodstock: " + foodStock, 350, 50);
if (lastFed > 12){
  text("Last Fed: " + lastFed-12 + "PM", 400, 50);
 }
else {if(lastFed < 12){
text("Last Fed: " + lastFed + "AM", 400, 50)
 }
} 
else { 
  text("Last Fed: " + "12 AM");
}

//if (foodStock <= 0){
  //textSize(3);
  //text("You're did good! The milk is over, but you kept your doggo well fed!", 200, 200)
//}

feedButton.mousePressed(feedDoggo());
addMilkButton.mousePressed(addFood());

  Milk.display();

  drawSprites();
}

function readStock(data){
  foodStock = data.val();
}

function writeStock(x){
if (x<=0){
  x=0;
} else {if(x>0){
  x - 1;
}}

database.ref('Food').update({
Food:x
})
} 

function getTime(time){
'Time' = frameCount/10;
database.ref('Time').update({
  Time:time
});
}

function addFood() {
database.ref('Food');
foodStock+=1;
database.ref('Food').update();
}

function feedDoggo() {
dog = addImage("dog1", dogCrouching_image);
Milk.updateFoodStock(Milk.getFoodStock()-1)
database.ref('/').update();
lastFed = database.ref('Time');
} 