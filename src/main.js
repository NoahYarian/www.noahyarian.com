// main.js

console.log('testing!')

$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#5E412F', '#FCEBB6', '#78C0A8', '#F07818'],
    anchors: ['welcome', 'about', 'projects', 'contact'],
    menu: '#menu',
    scrollingSpeed: 1000
  });
});
