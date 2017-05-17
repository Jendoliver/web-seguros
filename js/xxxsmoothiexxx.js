/*global $*/
//ESTE DOCUMENTO HACE QUE EL NAVBAR DESPLAZE EL MENÚ XxxSMOOTHIExxX
$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  $("body").attr("data-offset", $('#lanav').height()+10);
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - ($('#lanav').height()-10) // Dynamic offset calculation
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).resize(changeOffset);
})
// http://jqapi.com/
function changeOffset()
{
  $("body").attr("data-offset", $('#lanav').height()+50);
}