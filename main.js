$('.about-me').hide();
$('.get-in-touch').hide();

// Toggle > Initial Content & About Me
$('#btn-about').click(function() {
  $('.initial-content, .about-me').toggle("slide", {direction: "right"}, 800);
});

// Toggle > Initial Content & Get In Touch
$('#btn-contact').click(function() {
  $('.initial-content, .get-in-touch').toggle("slide", {direction: "right"}, 800);
});
