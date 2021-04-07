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
            slidesToShow: 1,
            slidesToScroll: 1,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 520,
            settings: {
                width: 500,
                slidesToShow: 1
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


$('.collapse-header').click(function () {

    $('.collapse-item').slideUp();

    if ($(this).hasClass('active')) {
        $(this).next().slideUp();
        $(this).removeClass('active');
    }
    else {
        $(this).next().slideDown();
        $('.collapse-header').removeClass('active');
        $(this).addClass('active');
    }


});



$body = $(".hero-section"),
    elem_1 = $(".elements .el1"),
    elem_2 = $(".elements .el2"),
    elem_3 = $(".elements .el3");
if ($body.mousemove(function (t) {
    var e = t.pageX / $body.width() - .6, i = t.pageY / $body.height() - .6; TweenLite.to(elem_1, 2.5, {
        y: 50 * e, x: 60 * i, ease: Expo.easeOut
    }

    ), TweenLite.to(elem_2, 1.5, {
        x: 45 * e, y: 75 * i, ease: Sine.easeOut
    }

    ), TweenLite.to(elem_3, 2, {
        rotation: -25 * e, y: -35 * e, x: -25 * i, ease: Sine.easeOut, transformOrigin: "left bottom"
    })
}

));

// var controller = new ScrollMagic.Controller();
// home_tween = (new TimelineMax).to(".el1", 2.5, {
//     x: -300, y: -300, ease: Power1.easeOut
// }

//     , "s_elem").to(".el2", 2.5, {
//         x: 150, ease: Power1.easeOut, delay: .5
//     }

//         , "s_elem").to(".el3", 4, {
//             x: 250, ease: Power1.easeOut
//         }

//             , "s_elem").to(".el4", 2.5, {
//                 x: -150, y: 270, scale: 0.5, ease: Power1.easeOut
//             }

//                 , "s_elem").to(".el5", 2.5, {
//                     y: 100, x: 200, ease: Power1.easeOut
//                 }

//                     , "s_elem").to(".el6", 3.5, {
//                         y: -80, x: 300, ease: Power1.easeOut
//                     }

//                         // , "s_elem").to(".elem_6", 3, {
//                         //                 y: -200, x: 100, ease: Power1.easeOut
//                         //  }

//                         , "s_elem").to(".el2", 3.5, {
//                             y: -250, x: 100, ease: Power1.easeOut
//                         }

//                             , "s_elem"),
//     leaf_scene = new ScrollMagic.Scene({
//         triggerElement: ".hero-section", duration: "100%", triggerHook: 0,
//         triggerElement: ".our-solution", duration: "100%", triggerHook: 0
//     }

//     ).setTween(home_tween).addTo(controller);
var rs = gsap.timeline({
    scrollTrigger: {
        trigger: ".w1",
        scrub: true,
        start: "top bottom",
    }
});

rs.to(".content-right", { x: 200, duration: 2 });

