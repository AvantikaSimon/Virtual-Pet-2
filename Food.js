class Milk{
constructor(foodStock, lastFed){
milk_image = loadImage("images/Milk.png");
}    
getFoodStock(){
var foodStockRef = database.ref('Food');
foodStockRef.on("value", function(data){
foodStock = data.val();
}); 
}    

updateFoodStock(stock){
database.ref('/').this.update({
  foodStock:stock
});
}

display(){
var x = 50;
var y = 101;

imageMode(CENTER);
this.milk = setImage("milk bottle", milk_image);

if(this.foodStock = 0){
  for(var i = 0; i < this.foodStock; i++){
    if(i%10 === 0){
    x = x + 50
    }
    if(i%100 === 0){;
    y = y + 50;
    }
    new Milk(x, y, 50, 50);
  }

}

}
}
