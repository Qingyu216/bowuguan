var window_height = parseInt($(window).height());
var wraper = parseInt($('.wraper').height());
var header_height = parseInt($('.header_box').height());
var footer_height = parseInt($('.footer_box').height());
var content_height = window_height - header_height - footer_height;
if (wraper < window_height) {
    $('.content_box').css('minHeight', content_height + 'px');
}
setInterval(function () {
    if ($(document).scrollTop() > 620) {
        $('.sidebar_left_lm').css({position:'fixed',top:'20px'});
    }else{
        $('.sidebar_left_lm').css({position:'relative',top:'0px'});
    }
}, 100);
