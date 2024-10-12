$(document).ready(function(){
			
	$(window).scroll(function(){

		if($(window).scrollTop() > 40)
		{
			$(".top_arrow").fadeIn();
			$(".fix_nav").css("position", "fixed");
			$(".s_icon p").css("color", "#000");
			$(".s_icon p .fa").css("color", "#000");
			$(".fix_nav").css("top", 0);
			$(".fix_nav").css("z-index", "9999999");
			$(".fix_nav").css("background-color", "#fff");
			$(".fix_nav").css("box-shadow", "rgb(0 0 0 / 8%) 0px 0.125rem 0.25rem");
			$("#cssmenu > ul > li > a").css("color", "#000");
			// $("#logo").attr("src", "images/logo.png");
			
		}
		else
		{
			$(".top_arrow").fadeOut();
			$(".fix_nav").css("position", "static");
			$(".fix_nav").css("background-color", "transparent");
			$(".fix_nav").css("box-shadow", "none");
			$("#cssmenu > ul > li > a").css("color", "#000");
			$(".logo2 .fa").css("color", "#000");
			// $("#logo").attr("src", "images/logo1.png");
			$(".s_icon p").css("color", "#fff");
			$(".s_icon p .fa").css("color", "#fff");
		}
	});

	//////////////////////////////////////
	
	$(".top_arrow").click(function(){
		$("body,html").animate({
			"scrollTop":0
		});
	});

	
});
