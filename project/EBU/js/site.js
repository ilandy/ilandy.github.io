//**************************************
//  3Wcreative Web Design
//  https://www.facebook.com/3wcreative
//  Updated: 2015/12/10
//**************************************
var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var Pad = /iPad/i.test(navigator.userAgent);
var $scroll = {
	prev : $(window).width(),
	current: $(window).width()
}
var menuCurrent = '';
$(document).ready(function() {
	$('footer .searchrevampbox').html($('.searchrevampbox').html())
	//**************************************
	//  window scroll
	//**************************************
    var lastScrollTop = 0;
	$(window).scroll(function () {
        var st = $(this).scrollTop();
		var bodyHeight = $('body,html').height();
		var windowHeight = $(window).height();
	    if ( st < 0 ) {
	        st = 0;
	    }
	    if ( st > $('body').height() - $(window).height() ) {
	        st = $('body').height() - $(window).height();
	    }
	    if ( bodyHeight >= windowHeight) {
			if (st > lastScrollTop){
				$("header, aside.toolbar, header .subnav").removeClass("maxSize");
				$("header, aside.toolbar, header .subnav, section").addClass("minSize");
			} else if(st == 0) {
				$("header, aside.toolbar, header .subnav, section").removeClass("minSize maxSize");
			} else {
				$("header, aside.toolbar, header .subnav").removeClass("minSize");
				$("header, aside.toolbar, header .subnav").addClass("maxSize");
			}
        lastScrollTop = st;
        }else{
        	$("header, aside.toolbar, header .subnav, section").removeClass("minSize maxSize");
       	}
	});


	
    var BodyHH = $(window).height();
    var BodyWW = $(window).width();
	$(".backtop a").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
	});
	//**************************************
	//  nav
	//**************************************
	menuCurrent = $('nav .active').attr('id');
	//$('[id^=navBtn_]').click(function(){
	$('[id^=navBtn_]').click(function(){
		var scn = $(this).attr('id').split("_")[1];
		if ($('#navUnit_' + scn).hasClass('current')){
			$('#navUnit_' + scn).removeClass('current');
			$('#' + menuCurrent).addClass('active');
			$(this).next().slideUp();
		}else{
			$('.navUnit').removeClass('current');
			$('.navUnit').removeClass('active');
			$('#navUnit_' + scn).addClass('current',function(){
				$('.navUnit:not(.current)').find('.subnav').hide();
			});
			$(this).next().slideDown();
		}
	});
	$("html").on("mousedown touchstart", function(e){ 
		if ($(e.target).closest('nav').length <= 0){
			$('#' + menuCurrent).addClass('active');
			$("nav li").removeClass("current");
			$("nav li a").removeClass("open");
			$(".subnav").slideUp();
			e.stopPropagation()
		}
	});



	//**************************************
	//  search
	//**************************************
    $(".schcon a").click(function() {
	    var value = $(this).text();
	    $(".schtext").val(value);
	});
    $(".searchbox input[type=text], .searchbox .schtext").bind('input propertychange', function() {
		if(this.value == '') {
		   $(".schcon").slideUp().removeClass("keydown");
		} else {
			$(".schcon").slideDown().addClass("keydown");
		}
		$(this).blur(function(){
			$(".schcon").delay(100).slideUp().removeClass("keydown");
		   $(".schcon li").removeClass("selected");
		});
	});
	$(".searchbox input[type=text], .searchbox .schtext").each(function() {
        var default_value = this.value;
		$(this).focus(function(){
			if(this.value == default_value) {this.value = '';}
	    });
		$(this).blur(function(){
			if(this.value == '') {this.value = default_value;}
		});
	});
	$('.schcon li').hover(function() {
		$(".schcon li").removeClass('selected');
		$(this).addClass('selected');
    }, function() {    
		$(".schcon li").removeClass('selected');
    });
	$(document).on("keydown", function(e) {
		if ($(".schcon").hasClass("keydown") ) {
			var $first = $('li:first', '.schcon'),
		        $last = $('li:last', '.schcon');
		    var code = e.which;
		    if (code == 40) {
			    var $next, $selected = $(".selected");
			    $next = $selected.next('li').length ? $selected.next('li') : $first;
			    $selected.removeClass("selected");
			    $next.addClass('selected');
			    var value2 = $(".schcon li.selected").text();
			    $(".schtext").val(value2);
		    } else if (code == 38) {
			    var $prev, $selected = $(".selected");
			    $prev = $selected.prev('li').length ? $selected.prev('li') : $last;
			    $selected.removeClass("selected");
			    $prev.addClass('selected');
			    var value2 = $(".schcon li.selected").text();
			    $(".schtext").val(value2);
		    }
		}
	});	
	$('body').click(function(){
		setTimeout(function(){ 
			if ( $('body').height() < $(window).height()) {   
				$('.quickLinkBox,footer .main').attr('style','visibility: visible; animation-duration: 0.75s; animation-name: fadeInUp;');
			}
		}, 300);
	});
    wow = new WOW({
        mobile: false,
    })
    wow.init();
});


	
//**************************************
//  window resize
//**************************************
$(window).resize(function (){
	var bodyHeight = $('body,html').height();
	var windowHeight = $(window).height();
	$scroll.prev = $scroll.current;
	$scroll.current = $(window).width();
	if (!mobile){
		$('.subnav .main').css('max-height',($(window).height() - $('header').height()) + 'px');
		$('.subnav .main').css('overflow','auto');
	}
});
//**************************************
//  window load
//**************************************
$(window).load(function(){
    window.onunload = function (){window.scrollTo(0, 0);}
});
$(function() {
	var currentSize = "large";
    $(window).resize(function (){
    	var bodyContent = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
    	bodyContent = bodyContent.replace(/"/g, "").replace(/'/g, "");
    	if (bodyContent != currentSize){
        	if (bodyContent == 'large'){
        	    $(".PC").show;
        	    $(".MB").hide;
			}
        	if (bodyContent == 'smail'){
        	    $(".PC").hide;
        	    $(".MB").show;
			}
			currentSize = bodyContent;
    	}
    });
});






