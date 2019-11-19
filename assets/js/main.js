// Update copyright year in footer
var dateEl = document.querySelector('#date');
var date = new Date();
var currentYear = date.getFullYear();

dateEl.innerText = currentYear;


// Test Netlify environment variable
var enVar = process.env.MY_VAR;
console.log(enVar);
