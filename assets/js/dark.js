function slideSlider(){
  $("#slider-scroller").css({"left":"0%","transition":"all 0s linear"});
  $("#slider-scroller").css({"left": String(parseInt($("#slider-scroller").css("left")) - 1000) + "px","transition":"all 20s linear"});
  setTimeout(function(){moveSliderItem()}, 5180);
}

function moveSliderItem(){
  $("#slider-scroller div").first().detach().appendTo($("#slider-scroller"));
  slideSlider();
}

slideSlider();