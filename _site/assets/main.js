$('.get-in-touch').hide();
$('.projects').hide();

// Show 'About Me' Content
$('#btn-about').click(function() {
  if ($('.get-in-touch').is(':visible')) {
    $('.get-in-touch, .about-me').toggle('slide', {direction: 'right'}, 800); // Toggle > Get In Touch & About Me
  } else if ($('.projects').is(':visible')) {
    $('.projects, .about-me').toggle('slide', {direction: 'right'}, 800); // Toggle > Get In Touch & Projects
  } else {
    $('.initial-content, .about-me').toggle('slide', {direction: 'right'}, 800); // Toggle > Initial Content & Get In Touch
  }
});

// Show 'Get In Touch' Content
$('#btn-contact').click(function() {
  if ($('.about-me').is(':visible')) {
    $('.about-me, .get-in-touch').toggle('slide', {direction: 'right'}, 800); // Toggle > About Me & Get In Touch
  } else if ($('.projects').is(':visible')) {
    $('.projects, .get-in-touch').toggle('slide', {direction: 'right'}, 800); // Toggle > Projects & Get In Touch
  } else {
    $('.initial-content, .get-in-touch').toggle('slide', {direction: 'right'}, 800); // Toggle > Initial Content & Get In Touch
  }
});

// Show 'Projects' Content
$('#btn-projects').click(function() {
  if ($('.about-me').is(':visible')) {
    $('.about-me, .projects').toggle('slide', {direction: 'right'}, 800); // Toggle > About Me & projects
  } else if ($('.get-in-touch').is(':visible')) {
    $('.get-in-touch, .projects').toggle('slide', {direction: 'right'}, 800); // Toggle > Get In Touch & projects
  } else {
    $('.initial-content, .projects').toggle('slide', {direction: 'right'}, 800); // Toogle > Initial Content & projects
  }
});
