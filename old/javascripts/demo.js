$(document).ready(function(e){
	$('.getmore').on('click',function(){
		$('.ismore').slideToggle();
	});
	$('.list-item').on('click','select',function(){
		if($(this).val() != 0){
			$(this).closest('.list-item').addClass('active');
		}else{
			$(this).closest('.list-item').removeClass('active');
		}
	}).on('click',function(){
		$(this).toggleClass('active').next('.list-info').slideToggle('show');
		// console.log($(this))
	});
	$('.list-info-item').click(function(){
		$(this).toggleClass('active');
		});
	$(document).scroll(function(event){
		if ($(document).scrollTop() > 50) {
            $("#top").hide();
        } else {
            $("#top").show();
        }
	});
});