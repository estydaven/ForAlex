$(function() {


	$("a.ancLinks").click(function () { 
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 1200 );
		return false;
	});

	$(".top-line-mnu").removeClass("fixDef");
	$(window).scroll(function(){
		if($(this).scrollTop()>0){
			$(".top-line-mnu").addClass("fixDef").fadeIn("fast");
		}
		else{
			$(".top-line-mnu").removeClass("fixDef").fadeIn("fast");
		}
	});
	
	$('.fancybox').fancybox({padding: 0});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	// $("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
	// $('#countdown_dashboard').countDown({
		// targetOffset: {
			// 'day':      0,
			// 'month':    0,
			// 'year':     0,
			// 'hour':     19,
			// 'min':      34,
			// 'sec':      0
		// },
		// omitWeeks: true
    // });
	
	// $('#countdown_dashboard2').countDown({
		// targetOffset: {
			// 'day':      1,
			// 'month':    0,
			// 'year':     0,
			// 'hour':     19,
			// 'min':      34,
			// 'sec':      0
		// },
		// omitWeeks: true
    // });
	
	var i = 0;
	function yved(){
		$('.yved:nth-child('+getCookie('viewed')+')').fadeIn(500).delay(7000).fadeOut(500);//В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
		document.cookie = "viewed=" + (parseInt(getCookie('viewed')) + 1);
		window.viewed = window.viewed + 1;
	}
	if ( (getCookie('viewed') == null) | (parseInt(getCookie('viewed')) > 12) )  {
		document.cookie = "viewed=1";
	}
	window.viewed = 0;
	setTimeout(
		function(){
			setInterval(
				function(){
					if (window.viewed < 2) {
						$('.yved:nth-child('+getCookie('viewed')+')').fadeIn(500).delay(7000).fadeOut(500);//В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
						document.cookie = "viewed=" + (parseInt(getCookie('viewed')) + 1);
						window.viewed = window.viewed + 1;
					}
				},
				25000
			);//25000 - задержка в мс меду показами уведомлений
			yved();
		},
		10000
	);//10000 - задержка в мс перед показом первого уведомления
	
});


function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}