//**************************************
//  3Wcreative Web Design
//  https://www.facebook.com/3wcreative
//  Updated: 2017/10/19
//**************************************
var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var Pad = /iPad/i.test(navigator.userAgent);
$(document).ready(function() {
	//**************************************
	//  window scroll
	//**************************************
    
	$(".backTop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
	});
    wow = new WOW({
        //mobile: false,
    })
    wow.init();

    /* ilandy */
    var inner = document.querySelector('.inner-page');
   $(window).on('scroll',function (){
        if( $(this).scrollTop() > 100) {
            $('.backTop').show();
        } else {
            $('.backTop').hide();
        }
        if($(this).scrollTop() > 54 ){
            $('.nav').addClass('fixed');
        }
    });

    if (!inner) {
        var pageHref = window.location.href;
        var getTypeString = pageHref.split('?')[1];
        // pageHref ? pageHref.split('?')[1].split('=')[1]: '';
        var getType = getTypeString ? getTypeString.split('=')[1]:'';
        console.log(getType);
        
        var panelType = $('.panel');
        
        if (getType) {
            var pos = panelType.eq(getType).offset();
            var posTop = getType === '0' ? panelType.eq(0).offset().top : panelType.eq(1).offset().top;
            console.log(posTop)
            $("html, body").animate({ scrollTop:posTop - 30 }, "slow");            
        } 
        $('.nav-list').find('.btn').on('click',function(){
            
            var idx = $(this).index()-1;
            var pos = panelType.eq(idx).offset();
            
            $('.nav-mob').toggleClass('active');
            $('.nav-list').toggleClass('active');
    
            $("html, body").animate({ scrollTop: pos.top-30 }, "slow");
            
        });
    } else {
        $('.nav-list').find('.btn').on('click',function(){
            
            var idx = $(this).index();
            
            
            if(idx === 1) {
                window.location.replace('index.html?type=0');
                
            } else if (idx === 2){
                window.location.replace('index.html?type=1');
            }
            
        });
        
    }
    

    $('.nav-mob').on('click',function (){
        $(this).toggleClass('active');
        $('.nav-list').toggleClass('active');
    });
    

    
});

function linkTo (path){
    window.location.replace(path);
}

