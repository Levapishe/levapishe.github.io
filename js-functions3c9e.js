$(document).ready(function(){
	$('.article-citations').after('<div class="article-citations-showall text-center"><button class="btn btn-sm btn-default">View References...</button></div><br />').css( {"opacity": "0.3", "max-height": "60px", "overflow": "hidden"});
	$('.article-citations-showall button, .article a[href^=#article-citations-], a[href=#references]').on('click', function(e){
		$('#references-outer').removeClass('hide');
		$('.article-citations li').removeClass('highlighted');
		$($(this).attr('href')).addClass('highlighted');
		$('.article-citations-showall button').remove();
		$('.article-citations').css({"opacity": "1", "max-height": ""});

		window.location.href='#references';
		e.preventDefault();
		

//		$('html,body').animate({
//			scrollTop: $('.article-citations').offset().top
//		},500);
	});
	
	if (1==2) {
		$('.onscrollfadein').css('opacity',0);
	
		function SubscribePageScroll(){	
			$('.onscroll').each(function(){
				if (!$(this).hasClass('scrolledto')){
					if ($(window).scrollTop()+$(window).height()>$(this).offset().top){
						delay=150;
						if ($(this).is('[data-onscrolldelay]')) delay=$(this).attr('data-onscrolldelay')*1;
						if ($(this).hasClass('onscrollfadein')){
							$(this).addClass('scrolledto').delay(delay).animate({ "opacity": 1 },500);
						} else if ($(this).hasClass('onscrolljump')){
							$(this).addClass('scrolledto').css('top','3px').delay(delay).animate({ "top": "8px" },300).animate({ "top": "0px" },100);	
						}
					}
				}
			});
		}
	}
	if (1==2){
		$(window).on('scroll',function(){
			SubscribePageScroll();
		});
		SubscribePageScroll();
	}

	

$("#urlchange").submit(function(e){
	if ($("input:checked").length == 7) {
		if ($("#haveyes").prop("checked") == true){
			if ($("#planyes").prop("checked") == true) {
				if ($("#everyyear").prop("checked") == true || $("#severalyear").prop("checked") == true) {
					$( "#urlchange" ).attr( "action", "planbuyg.html" );
				} else {
						$( "#urlchange" ).attr( "action", "plang.html" );	
					   }
			} else {
				if ($("#everyyear").prop("checked") == true || $("#severalyear").prop("checked") == true) {
						$( "#urlchange" ).attr( "action", "buyg.html" );	
					}
			}
		} else {
			if ($("#planyes").prop("checked") == true){
				$( "#urlchange" ).attr( "action", "noplang.html" );
			}	
		}
	} else {
		e.preventDefault();
	}
        
    });








});





