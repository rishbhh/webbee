$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            slidesToShow: 2,
            slidesToScroll: 1,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
        $('header').addClass('fixed').fadeIn;
    } else {
        $('header').removeClass('fixed');
    }
});
jQuery(document).ready(function ($) {
    var $slickElement = $('.slideshow');

    $slickElement.slick({
        autoplay: true,
        dots: false,
    });

});

const tl = gsap.timeline();
tl.from(".box", { duration: 1, y: 100, opacity: 0 })
tl.to(".box", { duration: 1, y: 0, opacity: 1 })
