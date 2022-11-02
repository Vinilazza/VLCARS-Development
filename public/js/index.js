

// we will create an array of JS objects with the properties of our elephants

// we use const here cause the variable doesn't change after

// we have 4 items inside the array, each item is an object with 6 properties. An id, title, color, age, image and alt description.
function redc(e) {
  window.location = "/search";
  busca()
}
document.getElementById("btn-submit").addEventListener("click", (ev) => {
  ev.preventDefault();
  if (filename == "/search") {
  }
  else {
    redc(event)
  }
})

jQuery(document).ready(function($) {
  
  //Buy button effects
  $('.buy').on('click', function() {
    
    //It is possible to put the 1st argument of setTimeout as callback of the Materialize.toast function but that approach seems significantly slower. I don't know why yet
    setTimeout (function() {
      $("#buy").removeClass("green");
      $('.buy').fadeOut(100, function() {
        $(this).text('add_shopping_cart').fadeIn(150);
      });
    }, 5000);
 
    
    $("#buy").addClass("green");
    $('.buy').fadeOut(100, function() {
      $(this).text('check').fadeIn(150);
    });
    
    var $toastContent = $('<div class="flow-text">ORDERED! &nbsp <a href="#" class=" amber-text">MY CART</a></div>');
    Materialize.toast($toastContent, 5000, "rounded");
    
   });
  
  //Like button effects
  
  $('.like').on('click', function() {
    
    setTimeout (function() {
      
      $('.like').fadeOut(100, function() {
        $(this).text('favorite_border').fadeIn(150);
      });
    }, 5000);
 
    $('.like').fadeOut(100, function() {
      $(this).text('favorite').fadeIn(150);
    });
    
    var $toastContent2 = $('<div class="flow-text">LIKED!</div>');
    Materialize.toast($toastContent2, 5000, "pink rounded");
    
   });
});


console.log(window.location.pathname.split('/'))