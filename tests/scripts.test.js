// Business Logic
function Pizza(size, crust, sauce, toppings)  {
  this.size = size;
  this.crust = crust; 
  this.sauce = sauce;
  this.toppings = toppings;
  this.price = 0;
}














// User Logic
$(document).ready(function(){
  $("eat").click(function() {
    $("form#pizza").show();
    $("#eat").toggle();
  $("form#pizza").submit(function(event)  {

  });
  });
});