$('#site-nav').hide();

// Show Nav Menu
$('#nav-btn').click(function() {
  $('#site-nav').slideToggle(600); // Toggle Nav Menu (slides from top to bottom)
});

// Hide Nav Menu
$('#close-nav').click(function() {
  $('#site-nav').slideToggle(600); // Toggle Nav Menu (slides from top to bottom)
});
