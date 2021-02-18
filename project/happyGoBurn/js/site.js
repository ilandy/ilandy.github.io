//**************************************
//  3Wcreative Web Design
//  https://www.facebook.com/3wcreative
//  Updated: 2017/10/19
//**************************************
var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var Pad = /iPad/i.test(navigator.userAgent);
$(document).ready(function() {
	if (mobile){
		$(".noscriptCode").html("<noscript><div><img alt='DCSIMG' id='DCSIMG' width='1' height='1' src='http://weblog.fetnet.net/dcs6rwoj6vd0ousspd9j1urky_4d5v/njs.gif?dcsuri=/nojavascript&amp;WT.js=No&amp;WT.tv=8.6.2'/></div></noscript>");
		$('meta[name="description"]').attr('content','創新大進擊系列首波主打客戶專屬免費優惠。無論您是白金會員、老客戶、遠傳用戶，都能享受吃喝玩樂超多優惠，用手機就能領各項優惠，因為當遠傳用戶就是比較好！');
		$("meta[property='og:description']").attr('content','創新大進擊系列首波主打客戶專屬免費優惠。無論您是白金會員、老客戶、遠傳用戶，都能享受吃喝玩樂超多優惠，用手機就能領各項優惠，因為當遠傳用戶就是比較好！');
	}else{
		$(".noscriptCode").html("<noscript><div><img alt='DCSIMG' id='DCSIMG' width='1' height='1' src='http://weblog.fetnet.net/dcs4r0of5vd0ousspd9j1urky_5d2y/njs.gif?dcsuri=/nojavascript&amp;WT.js=No&amp;WT.tv=8.6.2'/></div></noscript>");
		$('meta[name="description"]').attr('content','創新大進擊系列首波主打客戶專屬免費優惠。無論您是白金會員、老客戶、遠傳用戶，都能享受吃喝玩樂超多優惠，因為當遠傳用戶就是比較好！');
		$("meta[property='og:description']").attr('content','創新大進擊系列首波主打客戶專屬免費優惠。無論您是白金會員、老客戶、遠傳用戶，都能享受吃喝玩樂超多優惠，因為當遠傳用戶就是比較好！');
	}
	//**************************************
	//  window scroll
	//**************************************
    $(window).scroll(function (e) {
    	var afterScroll = $(window).scrollTop()
    	if (mobile) {
        	if ($(this).scrollTop() > 0 && (($(document).height() - $('.ch-footer').height()) > afterScroll)) {
        		$('.backtop').fadeIn(200);
        	} else {
        		$('.backtop').fadeOut(200);
        	}
    	} else {
        	if ($(this).scrollTop() > 150) {
        		$('.backtop').fadeIn();
        	} else {
        		$('.backtop').fadeOut();
        	}
		}
		
    });
	$(".backtop a").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
    wow = new WOW({
        //mobile: false,
    })
	wow.init();
	/* ilandy */
	const WINDOW = $(window);
	const POS = $('.decoration-go').offset();
	var innerPage = document.querySelector('.hgr-inner');
	var dateIdx = 0;
	var awList = document.querySelector('.time-ctrl-center');
	
	console.log(innerPage);
	window.popCtrl = function (mySlec){
		$(mySlec).parent('.hgr-pop').addClass('open-pop');
	}
	
	function getBtnSize () {
		if(awList && window.screen.availWidth <= 768){
			var size = window.screen.availWidth <= 768 ? awList.offsetWidth-20 : awList.offsetWidth-40;
			$('.time').css({ width: size+'px' })
		} else if ( window.screen.availWidth > 768){
			$('.time').css({ width: 'calc(25% - 20px)' })
		}
	}
	function goGamePanel (){
		$("html, body").animate({ scrollTop: POS.top + 1 +"px" }, "slow");
		$('.decoration-go').removeClass('movin');
	}
	getBtnSize ()

	$(window).on('resize',function (){
		getBtnSize ();
		dateCtrl(1);
	});
	
	window.dateCtrl = function (direction){
		
		dateIdx += direction;

		var timeWidth = $('.time-ctrl-center').width();
		if(dateIdx == 0){
			$('.time-ctrl-left').addClass('final');
		} else if(dateIdx > 2){
			$('.time-ctrl-right').addClass('final');
		} else {
			$('.time-ctrl-right,.time-ctrl-left').removeClass('final');
		}
		if(dateIdx < 0) {
			dateIdx = 0
			timeWidth = -10
			$('.time-ctrl-left').addClass('final');
			$('.time').eq(dateIdx).addClass('active');
		} else if (dateIdx>3){	
			dateIdx = 3
			timeWidth = -timeWidth*3;
			$('.time-ctrl-right').addClass('final');
			$('.time').eq(dateIdx).addClass('active');
		} else {
			timeWidth = -timeWidth*dateIdx;
			$('.time').eq(dateIdx).addClass('active');
		}
		$('.time-selector').stop().animate({ left: timeWidth +'px' },500);
		
		
	}
	if(innerPage){
		WINDOW.on('scroll',function (){
			if ($(this).scrollTop() > 64) {
				$('.hgr-submenu').addClass('fixed');
			} else {
				$('.hgr-submenu').removeClass('fixed');
			}
			
		});
	} else {
		$('.hgr-kv').find('img').on('click',goGamePanel);
		WINDOW.on('scroll',function (){
			$('.decoration-go').removeClass('movin');
			
			// if(WINDOW.scrollTop() > POS.top) {
			// 	$('.decoration-go').removeClass('movin');
			// } else {
			// 	$('.decoration-go').addClass('movin');			
			// }
		})
	}

	
	$('.hgr-menuBtn-mob').on('click',function (){
		$(this).parent('.hgr-submenu').toggleClass('active');
	});
	$('.decoration-go').on('click',goGamePanel);
	
	$('.panel-slide-ctrl').on('click', function (){
		$(this).parent('.hasSlideCtrl').toggleClass('slide-open');
	})
	
	$('.close-pop').on('click',function (){
		$(this).parents('.hgr-pop').removeClass('open-pop');
	})
	
	/* end */
	
});



//**************************************
//  window resize
//**************************************
$(window).resize(function (){
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
	//ilandy 
	
});


