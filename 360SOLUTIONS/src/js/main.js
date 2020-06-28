$(window).on('scroll', function(){
  if($(window).scrollTop()>=50){
    $('.fix-nav').show();
  }
  else{
    $('.fix-nav').hide();
  }

});
var captionLength = 0;
var caption = '';
$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    setInterval(testTypingEffect,10000);
    captionEl = $('#demo');
});
var text_array=[
'Lorem ipsum typing effect!',
'360 solution on fire',
'here automatic text gnerate',
'we all services',
'we give solutions for machine learning',
'AI is good topic in IT industries',
'nothing here to show only work says',
'good things works here',
'here have django node.js rect .js like frameworks Best front-end framework using javascript,it is top in google treding',
'We use Rect Native for android development'
]
function testTypingEffect() {
    caption =text_array[Math.floor(Math.random()*10)]
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}
function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}