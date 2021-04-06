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

// leopard illusion




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

), $(".atg_folio").length) {
    var $word = $("path#word");
    pathPrepare($word);

    var controller = new ScrollMagic.Controller,
        tween = (new TimelineMax).add(TweenMax.to($word, .1, {
            strokeDashoffset: 0, ease: Sine.easeOut
        }

        )),
        scene = new ScrollMagic.Scene({
            triggerElement: ".section_4", duration: "2800", triggerHook: 1, tweenChanges: !0
        }

        ).setTween(tween).addTo(controller),
        scene = new ScrollMagic.Scene({
            triggerElement: ".section_4", duration: "200%", triggerHook: .25
        }

        ).setPin(".atg_scrollto_cont").addTo(controller);

    (controller = new ScrollMagic.Controller).scrollTo(function (t) { }

    ),
        controller.scrollTo(function (t) {
            TweenMax.to(window, 1, {
                scrollTo: {
                    y: t, autoKill: !0
                }

                , ease: Cubic.easeInOut
            }

            )
        }

        )
}
