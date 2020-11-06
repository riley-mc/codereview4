// Business Logic
function Pizza(size, crust, sauce, toppings)  {
  this.size = size;
  this.crust = crust; 
  this.sauce = sauce;
  this.toppings = toppings;
  this.price = 0;
  console.log(this);
}

Pizza.prototype.getPrice = function() {
  if (this.size === "sm") {
    this.price = 10;
  } else if (this.size === "md") {
    this.price = 14;
  } else if (this.size === "lrg") {
    this.price = 18;
  };
  if (this.crust === "Sourdough") {
    this.price += 1;
  } else if (this.crust === "Wheat")  {
    this.price += 2;
  } else if (this.crust === "glutenFree") {
    this.price += 3;
  }
  this.price += this.toppings.length;
  console.log(this.toppings.length);
  return this.price;
});


function generateOrder()  {
  let size = $("input[name=size]:checked").val();
  let crust = $("input[name=crust]:checked").val();
  let sauce = $("input[name=sauce]:checked").val();
  let toppings = []
  $("input[name=topping]:checked").each(function() {
    toppings.push($(this).val());
  });
  
};



// User Logic
$(document).ready(function(){
  $("form#pizza").submit(function(event)  {
    event.preventDefault();
    $("order").empty();
    $("#pizza").toggle();
    $("#output").show();

  });
  });
});