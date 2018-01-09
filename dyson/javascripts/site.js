﻿//**************************************
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
   $(window).on('scroll',function (){
        if( $(this).scrollTop() > 500) {
            $('.backTop').show();
        } else {
            $('.backTop').hide();
        }
    });
    $('.nav-list').find('.btn').on('click',function(){
        
        var idx = $(this).index()-1;
        var pos = $('.panel').eq(idx).offset();
        
        $('.nav-mob').toggleClass('active');
        $('.nav-list').toggleClass('active');

        $("html, body").animate({ scrollTop: pos.top-30 }, "slow");
        
    });
    $('.nav-mob').on('click',function (){
        $(this).toggleClass('active');
        $('.nav-list').toggleClass('active');
    });
    
});

function linkTo (path){
    window.location.replace(path);
}

