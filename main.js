// Toggle > Initial Content & About Me
$('.about-me').hide();
$('#btn-about').click(function() {
  $('.initial-content, .about-me').toggle("slide", {direction: "right"}, 800);
});

// Toggle > Initial Content & Get In Touch
$('.get-in-touch').hide();
$('#btn-contact').click(function() {
  $('.initial-content, .get-in-touch').toggle("slide", {direction: "right"}, 800);
});
