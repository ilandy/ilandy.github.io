(function(){
    angular
        .module('myApp',['ngSanitize']);
   
    //jq
    $(document).ready(function(){
        var t = "index",
            moveTo = 0,
            deviceW = screen.availWidth,
            logoPosition = $(".logo").offset(),
            galleryW = 90;
        $('[data-scroll]').on('click',function(){
            t = $(this).attr('data-scroll');
            moveTo = $('#'+t).offset();
            $('body').animate({
                scrollTop: moveTo.top
            },500);
        });
    });  
})();
