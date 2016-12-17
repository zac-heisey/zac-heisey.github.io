// $('.about-me').hide();
$('.get-in-touch').hide();
$('.certifications').hide();

// Show About Me Content
$('#btn-about').click(function() {
  if ($('.get-in-touch').is(':visible')) {
    $('.get-in-touch, .about-me').toggle('slide', {direction: 'right'}, 800); // Toggle > Get In Touch & About Me
  } else if ($('.certifications').is(':visible')) {
    $('.certifications, .about-me').toggle('slide', {direction: 'right'}, 800); // Toggle > Get In Touch & Certifications
  } else {
    $('.initial-content, .about-me').toggle('slide', {direction: 'right'}, 800); // Toggle > Initial Content & Get In Touch
  }
});

// Show Get In Touch Content
$('#btn-contact').click(function() {
  if ($('.about-me').is(':visible')) {
    $('.about-me, .get-in-touch').toggle('slide', {direction: 'right'}, 800); // Toggle > About Me & Get In Touch
  } else if ($('.certifications').is(':visible')) {
    $('.certifications, .get-in-touch').toggle('slide', {direction: 'right'}, 800); // Toggle > Certifications & Get In Touch
  } else {
    $('.initial-content, .get-in-touch').toggle('slide', {direction: 'right'}, 800); // Toggle > Initial Content & Get In Touch
  }
});

// Show Certifications Content
$('#btn-certifications').click(function() {
  if ($('.about-me').is(':visible')) {
    $('.about-me, .certifications').toggle('slide', {direction: 'right'}, 800); // Toggle > About Me & Certifications
  } else if ($('.get-in-touch').is(':visible')) {
    $('.get-in-touch, .certifications').toggle('slide', {direction: 'right'}, 800); // Toggle > Get In Touch & Certifications
  } else {
    $('.initial-content, .certifications').toggle('slide', {direction: 'right'}, 800); // Toogle > Initial Content & Certifications
  }
});
