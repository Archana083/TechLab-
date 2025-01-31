(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '0px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 3,
        margin:15,
        dots: true,
        loop: true,
        nav: false,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            },
            900:{
                items:2
            }
        }

    });




    // clients-carousel
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 5,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            900:{
                items:5
            }
        }

    });




    // photo-carousel
    $(".photo-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 4,
        margin:15,
        dots: false,
        loop: true,
        nav: false,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            900:{
                items:3
            }
        }

    });






    
})(jQuery);

