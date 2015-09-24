// main.js

console.log('testing!')

$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#385c75', '#8ea4a7', '#dcdeb6', '#f4a959'],
    anchors: ['welcome', 'about', 'projects', 'contact'],
    menu: '#menu',
    scrollingSpeed: 1000
  });
});
