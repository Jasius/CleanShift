// cache elements
var $active,
    $indicator,
    resetTimer;

// events
$("nav li").mouseover(function(){
  clearTimeout(resetTimer);
  moveIndicator($(this));
}).mouseout(function(){
  resetTimer = setTimeout(function(){
    moveIndicator($active);
  }, 500);
});

// init
$(function(){
	$active = $("#active");
  $indicator = $("#indicator");
  
  moveIndicator($active);
});

function moveIndicator($elm){
  $indicator.css({
    left: $elm.position().left,
    width: $elm.width(),
    backgroundColor: $elm.css("color")
  })
}