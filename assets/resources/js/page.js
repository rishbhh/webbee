
$(document).ready(function () {
    // var html = document.documentElement;
    // var body = document.body;

    // var scroller = {
    //     target: document.querySelector("#scroll-container"),
    //     ease: 0.05, // <= scroll speed
    //     endY: 0,
    //     y: 0,
    //     resizeRequest: 1,
    //     scrollRequest: 0,
    // };

    // var requestId = null;

    // TweenLite.set(scroller.target, {
    //     rotation: 0.01,
    //     force3D: true
    // });

    // window.addEventListener("load", onLoad);

    // function onLoad() {
    //     updateScroller();
    //     window.focus();
    //     window.addEventListener("resize", onResize);
    //     document.addEventListener("scroll", onScroll);
    // }

    // function updateScroller() {

    //     var resized = scroller.resizeRequest > 0;

    //     if (resized) {
    //         var height = scroller.target.clientHeight;
    //         body.style.height = height + "px";
    //         scroller.resizeRequest = 0;
    //     }

    //     var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

    //     scroller.endY = scrollY;
    //     scroller.y += (scrollY - scroller.y) * scroller.ease;

    //     if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    //         scroller.y = scrollY;
    //         scroller.scrollRequest = 0;
    //     }

    //     TweenLite.set(scroller.target, {
    //         y: -scroller.y
    //     });

    //     requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    // }

    // function onScroll() {
    //     scroller.scrollRequest++;
    //     if (!requestId) {
    //         requestId = requestAnimationFrame(updateScroller);
    //     }
    // }

    // function onResize() {
    //     scroller.resizeRequest++;
    //     if (!requestId) {
    //         requestId = requestAnimationFrame(updateScroller);
    //     }
    // }


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

    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {
            $('header').addClass('fixed').fadeIn;
        } else {
            $('header').removeClass('fixed');
        }
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

    const scroll_elem = gsap.utils.toArray('.m_s_el');
    scroll_elem.forEach(s_elem => {
        gsap.to(s_elem, {
            y: -200,
            duration: 2.5,
            ease: "power4.out",
            scrollTrigger: {
                trigger: s_elem,
                scrub: true
            }
        })
    });

    const heading_elem = gsap.utils.toArray('.overflow__cont');
    heading_elem.forEach(h_elem => {
        gsap.to(h_elem, {
            scrollTrigger: {
                trigger: h_elem,
                start: "top bottom",
                toggleClass: "active",
            }
        })
    });
    $body = $(".hero-section, .banner-section"),
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
    // gsap.to(".overflow__cont", {
    //     scrollTrigger: {
    //       trigger: ".overflow__cont",                        
    //       start: "top bottom",              
    //       toggleClass: "active",
    //       ease: "power2"
    //     }
    //   });    


});
jQuery(document).ready(function ($) {
    var $slickElement = $('.slideshow');

    $slickElement.slick({
        autoplay: true,
        dots: false,
    });

});


$(function () {
    $("#header-template").load("header.html");
    $("#footer-template").load("footer.html");
});