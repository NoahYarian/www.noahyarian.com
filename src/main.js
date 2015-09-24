// main.js

console.log('testing!')

$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#ccddff'],
    anchors: ['welcome', 'about', 'projects', 'contact'],
    menu: '#menu',
    scrollingSpeed: 1000
  });
});
