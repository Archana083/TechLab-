$(document).ready(function(){
			
	$(window).scroll(function(){

		if($(window).scrollTop() > 40)
		{
			$(".top_arrow").fadeIn();
			$(".fix_nav").css("position", "fixed");
			$(".fix_nav").css("top", 0);
			$(".fix_nav").css("z-index", "9999999");
			$(".fix_nav").css("border-bottom", "none");
			$(".fix_nav").css("box-shadow", "0 0.125rem 0.25rem rgb(0 0 0 / 8%)");
			$(".fix_nav").css("background-color", "rgba(255, 255, 255)");
			$(".fix_nav").css("transition","0.4s ease-in-out");
			$(".fix_nav").addClass("animate");
			$(".navbar .navbar-nav .nav-link").css("color", "#000");
			$(".navbar .navbar-nav .nav-link").css("color", "#eb2126");
			$(".navbar .navbar-nav .nav-link").css("color", "#000");
			$(".navbar .navbar-nav .nav-link:hover,.navbar .navbar-nav .nav-link.active").css("color", "#eb2126");
			
		}
		else
		{
			$(".top_arrow").fadeOut();
			$(".fix_nav").css("position", "fixed");
			$(".fix_nav").css("top",0);
			$(".fix_nav").css("background-color", "transparent");
			$(".fix_nav").css("border-bottom", "none");
			$(".fix_nav").css("box-shadow", "none");
			$(".navbar .navbar-nav .nav-link").css("color", "#fff");
			$(".navbar .navbar-nav .nav-link:hover,.navbar .navbar-nav .nav-link.active").css("color", "#eb2126");

		}
	});

	//////////////////////////////////////
	
	$(".top_arrow").click(function(){
		$("body,html").animate({
			"scrollTop":0
		});
	});

	
});
