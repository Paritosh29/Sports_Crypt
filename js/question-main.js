function reset_animation() {
  var el = document.getElementById('map');
  el.style.animation = 'none';
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null;
}

$(function(){
  $('#map-button').on('click',function(){
    $('#map').addClass('map-animation-2');
    $('#map').removeClass('map-animation')
  });
});

$(function(){
  $('#map-close').on('click',function(){
    $('#map').addClass('map-animation');
    $('#map').removeClass('map-animation-2');
  });
});