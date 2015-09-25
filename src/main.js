// main.js

console.log('testing!')

$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#5E412F', '#FCEBB6', '#78C0A8', '#F07818'],
    anchors: ['welcome', 'about', 'projects', 'contact'],
    menu: '#menu',
    scrollingSpeed: 1000,
    scrollOverflow: true
  });
});

$('.screenshot').hover(function() {
  $(this).children().removeClass('hidden');
}, function() {
  $(this).children().addClass('hidden');
});

$('.hover-link').hover(function() {
  $(this).children().css('color', '#F07818');
  $(this).children().css('text-shadow', '1px 1px rgba(0,0,0,.5)');

}, function() {
  $(this).children().css('color', '#FFFFFF');
  $(this).children().css('text-shadow', '1px 1px rgba(0,0,0,.5)');
});
