//**************************************
//  3Wcreative Web Design
//  https://www.facebook.com/3wcreative
//  Updated: 2017/10/19
//**************************************
$(document).ready(function() {

    $('.slickKv').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    });
    $('.js-promotion').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
    
        },{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                arrows: false
            }
    
        }]
    });
    $('.js-promotion-inner').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: true,
        swipe: true,
        touchMove: true,
        responsive: [
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        }]
    });


    $('.banner-ad').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });
    $('.mobileHdBox .banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
        
    }); 
    $('.js-page-search').on('click',function (){
        var scrollTo = $(this).parents('.ebu-select').next('div').offset();
        $('html').stop().animate({
            scrollTop: scrollTo.top - 30
        });
    });
    
	//**************************************
	//  mobile navSub
	//**************************************
	$('.menuMask,.navbar,.section').bind('touchmove', function(event){
		if (!$(".menuMask").is(":hidden")){
			event.preventDefault();
			$(".menuMobile").focus();
		}
	});
    $(".navMobile a.menuComplex").click(function () {
		var headerShowHeight = parseInt($('header').css('top').replace('px','')) + $('header').height();
		if ($(this).hasClass("on") ) {
            $(this).removeClass("on");
            $(".menuMobile").removeClass("on");
            $(".menuMask").fadeOut();
			$(window).scrollTop($('body').attr('scroll'));
			$('body').removeAttr('style').removeAttr('scroll');
			$('#wrapper').removeAttr('style');
		} else {
            $(this).addClass("on");
            $(".menuMobile").addClass("on");
            $(".menuMask").fadeIn();
			$('body').attr('scroll',$(window).scrollTop());
			$('#wrapper').attr('style','overflow:hidden;height:' + $(window).height() + 'px;');
		}
    });
    $(".menuMask").click(function () {
        $(".navMobile a.menuComplex, .menuMobile").removeClass("on");
        $(".menuMask").fadeOut();
        $('body').css("height", "auto");
        $('body').css("overflow","auto");
        $(window).scrollTop($('body').attr('scroll'));
        $('body').removeAttr('style').removeAttr('scroll');
        $('#wrapper').removeAttr('style');
    });
    $(".subicon2").on('click','li', function () {
        $(this).toggleClass("active"); 
        $(this).closest(".menubd").toggleClass("openSub"); 
        
        console.log($(this).parent())
        $(this).parent().next('.submenu2 > .js-slide-down').toggleClass('active');
        $(this).parent().next(".submenu2").slideToggle();
        
    });
    
    //ilandy write it

    $(".selectBoxIt").selectBoxIt();
    
    $(".js-side-slider").slick ({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        centerPadding: 0,
        verticalSwiping: true,
        vertical: true,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding: 0,
                verticalSwiping: false,
                vertical: false,
                swipe: true,
                touchMove: true
            }
        }]
    })
    var slickBoxItem = $(".js-side-slider").find('.slickLi').length;
    function getSlickArrow(){
        var showItem = $('.js-side-slider').slick('slickGetOption','slidesToShow');
        if( slickBoxItem <= $('.js-side-slider').slick('slickGetOption','slidesToShow') ){
            $(".js-slide-prev, .js-slide-next").hide();
        }
    }
    getSlickArrow();
    $(".js-slide-prev").on('click',function (){
        var showItems = $('.js-side-slider').slick('slickGetOption','slidesToShow');
        var idx = $(".js-side-slider").slick('slickCurrentSlide');
        
        if ( 0 <  idx < (slickBoxItem - showItems)){
            $(".js-side-slider").slick("slickPrev");
            $(".js-slide-prev, .js-slide-next").removeClass('disable');
        } 
        if ( $(".js-side-slider").slick('slickCurrentSlide') <= 0 ) {
            $(this).addClass('disable');
        }
    });
    $(".js-slide-next").on('click',function (){
        var showItems = $('.js-side-slider').slick('slickGetOption','slidesToShow');
        var idx = $(".js-side-slider").slick('slickCurrentSlide');

        if ( 0 < idx < (slickBoxItem - showItems)){

            $(".js-slide-prev, .js-slide-next").removeClass('disable');

            if( idx < slickBoxItem - showItems ){
                $(".js-side-slider").slick("slickNext");
            }
            
            

        } 
        if ( $(".js-side-slider").slick('slickCurrentSlide') > (slickBoxItem - showItems - 1) ) {
            $(this).addClass('disable');
        }
        
    });
    $('.EBUtoolSub').on('click','.slickLi',function(){
        var idx = $(this).index();
        var slickPanel = $('.stick-menu-panel');
        
        

        if($(this).hasClass('slickLi-open')){
            
            $(this).removeClass('slickLi-open');
            slickPanel.removeClass('active');
            $('.stick-menu-panel-bg').removeClass('active');


        } else {
            $('.slickLi').removeClass('slickLi-open');
            slickPanel.removeClass('active');
            $('.stick-menu-panel-bg').removeClass('active');

            $(this).addClass('slickLi-open');
            slickPanel.eq(idx).addClass('active');
            $('.stick-menu-panel-bg').addClass('active');
        }
        
    });

    // 
    $('.label-item').on('click',function (){
        var a = $(this).index();
        $('.label-item').removeClass('active').eq(a).addClass('active');
        $('.info-label-header+.info-body').find('.info-content').hide().eq(a).fadeIn();
        if(a === 0) {
            $('.info-more-bottom').text('MORE NEWS');
            $(this).parents('.ebu-info').find('.info-more,.info-more-bottom').attr('href','./news-notice.html');
        } else {
            $('.info-more-bottom').text('MORE INFORMATION');
            $(this).parents('.ebu-info').find('.info-more,.info-more-bottom').attr('href','./service-notice.html');
        }
    });
    
    $('.js-slide-down').on('click', function(){
        $(this).toggleClass('active');
        $(this).find('.submenu3').stop().slideToggle();
    })
    
    
    $(".main,.stick-menu-panel-bg").on("click tap", function (){
        if(!$(this).is('.EBUtoolSub')){
            $('.slickLi').removeClass('slickLi-open');
            $('.stick-menu-panel').removeClass('active');
            $('.stick-menu-panel-bg').removeClass('active');
        }
        
    });
    //select
    $('.js-select-switch').on('click','.select-title li',function (){
        var idx = $(this).index();
        $('.title-active').removeClass('title-active');
        $('.select-group-active').removeClass('select-group-active');    
        $(this).addClass('title-active');            
        $('.select-group').eq(idx).addClass('select-group-active');
    });
    if (mobile) {
        $('.js-select-slider .select-body').hide();
    }
    $('.js-select-slider').on('click','.select-title li',function (){
        var idx = $(this).index();
        $('.select-body').stop().slideToggle(300);
    });
    // magic box 
    $(".js-comment")
        .on("click", function () {
            var target = $(this).find('a');
            if($('.join-form-wrap')){
                $('.join-form-wrap').find('img.arrow').toggleClass('open')
            }
            if (target.hasClass("on") ) {
                target.removeClass("on");
                $(this).next('.exhortBox').slideUp();
            } else {
                target.addClass("on");
                $(this).next('.exhortBox').slideDown();
            }
    });
    $(".js-comment+.exhortBox").on('click', 'a.open', function(){
        var content = $(this).parents('.exhortBox');

            if($('.join-form-wrap')){
                $('.join-form-wrap').find('img.arrow').removeClass('open')
            }
            content.prev('.js-comment').find('a').removeClass("on");
            content.slideUp();
           
    });
    

    
	//**************************************
	//  scroll  待完成 滾到底收不起來
    //**************************************
    var mobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var Pad = /iPad/i.test(navigator.userAgent);
    var mode = Math.abs(window.orientation) == 90 ? 'landscape' : 'portrait';
    
    var $myScreen = window.screen;
    var toolsBox = $('.EBUtoolSub');
    var scrollTop;
    var scrollHeight = $(document).height() - $myScreen.availHeight*1.3;
    var windowHeight;
    


    
    $(window).on('scroll',function (){

        windowHeight = $(this).height();
        scrollTop = $(this).scrollTop();
        if ($myScreen.availWidth < 480) {
            if( $(this).scrollTop() > 5  && (scrollTop < scrollHeight)) {
                
                if( !toolsBox.hasClass('fixed')){
                    toolsBox.addClass('fixed');
                    $('.backtop').addClass('show');
                }
            } else {
                
                toolsBox.removeClass('fixed');
                $('.backtop').removeClass('show');
            }
        } else {
            if( $(this).scrollTop() > 0 ) {
                
                if( !toolsBox.hasClass('fixed')){
                    toolsBox.addClass('fixed');
                    $('.backtop').addClass('show');
                }
                if( $(this).scrollTop() > 0  && (scrollTop < scrollHeight)) {
                
                    if( !toolsBox.hasClass('fixed')){
                        
                        $('.backtop').addClass('show');
                    }
                } else {
                    
                    $('.backtop').removeClass('show');
                }
            } else {
                
                toolsBox.removeClass('fixed');
                $('.backtop').removeClass('show');
            }
        }
    });
    
    
    //**************************************
	//  resize
    //**************************************
    $(window).on('resize',function(){
        getSlickArrow();
        
    });
});