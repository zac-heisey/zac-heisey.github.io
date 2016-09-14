$('.about-me').hide();
$('.get-in-touch').hide();

// Toggle > Initial Content & About Me
$('#btn-about').click(function() {
  if ($('.get-in-touch').is(':visible')) {
    $('.get-in-touch, .about-me').toggle('slide', {direction: 'right'}, 800);
  } else {
    $('.initial-content, .about-me').toggle('slide', {direction: 'right'}, 800);
  }
});

// Toggle > Initial Content & Get In Touch
$('#btn-contact').click(function() {
  if ($('.about-me').is(':visible')) {
    $('.about-me, .get-in-touch').toggle('slide', {direction: 'right'}, 800);
  } else {
    $('.initial-content, .get-in-touch').toggle('slide', {direction: 'right'}, 800);
  }
});
