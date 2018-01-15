$('#about-section').hide();
$('#work-section').hide();

// Show Intro Section
$('#nav-intro').click(function() {
  if ($('#about-section').is(':visible')) {
    $('#about-section, #intro-section').toggle('slide', {direction: 'right'}, 800); // Toggle > About & Intro
  } else if ($('#work-section').is(':visible')) {
    $('#work-section, .#intro-section').toggle('slide', {direction: 'right'}, 800); // Toggle > Work & Intro
  }
});

// Show About Section
$('#nav-about').click(function() {
  if ($('#intro-section').is(':visible')) {
    $('#intro-section, #about-section').toggle('slide', {direction: 'right'}, 800); // Toggle > Intro & About
  } else if ($('#work-section').is(':visible')) {
    $('#work-section, #about-section').toggle('slide', {direction: 'right'}, 800); // Toggle > Work & About
  }
});

// Show Work Section
$('#nav-work').click(function() {
  if ($('#about-section').is(':visible')) {
    $('#about-section, #work-section').toggle('slide', {direction: 'right'}, 800); // Toggle > About & Work
  } else if ($('#intro-section').is(':visible')) {
    $('#intro-section, #work-section').toggle('slide', {direction: 'right'}, 800); // Toggle > Intro & Work
  }
});
