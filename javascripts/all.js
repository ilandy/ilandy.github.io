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
        getLineTo()
        $('[data-scroll]').on('click',function(){
            t = $(this).attr('data-scroll');
            moveTo = $('#'+t).offset();
            $('body').animate({
                scrollTop: moveTo.top
            },500);
        });
    });  
})();

 function getLineTo(){
        logoPosition = $(".logo").offset();
       $("#line1").attr({'x2':logoPosition.left-30,'y2':logoPosition.top-15,'x1':window.innerWidth/10*2,'y1':'0'});
        $("#line2").attr({'x2':logoPosition.left+380,'y2':logoPosition.top+347,'x1':window.innerWidth/10*8,'y1':window.innerHeight});
    }