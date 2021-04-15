$( ".tax-edit" ).click(function() {
  $(this).toggleClass('te-open').parent;
  $('.tax-calculate').slideToggle(200);
});

$( ".if-left" ).click(function() {
  $(this).prev('.if-message').slideToggle(200);
});

$( ".bp-toggle" ).click(function() {
  $('.bonus-products').slideToggle(200);
});