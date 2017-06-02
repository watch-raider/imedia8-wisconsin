$('.lists').hide();

$(document).ready(function() {
  $('.lists').hide();
  $('li').hover(function() {
    $(this).toggleClass('touch');
  })
  $('.effect').hover(function() {
    $(this).toggleClass('touch');
  })
  $('.sections').hover(function() {
    $(this).toggleClass('underline');
  })
  $('.tabs').click(function() {
    $('.lists').hide();
    $(this).prev('.lists').show();
  })
});
