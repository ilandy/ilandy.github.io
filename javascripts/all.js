(function(){
    angular
        .module('myApp',['ngSanitize']);    
})();

$(document).ready(function(){
    var t = "index",
        moveTo = 0,
        deviceW = screen.availWidth,
        galleryW = 90;
    console.log(deviceW);
    $('[data-scroll]').on('click',function(){
        t = $(this).attr('data-scroll');
        moveTo = $('#'+t).offset();
        $('body').animate({
            scrollTop: moveTo.top
        },500);
    });
    // $('#work').swipe( {
    //     swipeStatus:function(event, phase, direction, distance, duration,fingerCount) {
    //     $('.work-scroll').text("你用"+fingerCount+"个手指以"+duration+"秒的速度向" + direction + "滑动了" +distance+ "像素 " +"你在"+phase+"中");
    // }
    // });
});
