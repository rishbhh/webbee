
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


function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 2.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
        stagger: .2,
        delay: 0.4
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function () { animateFrom(elem) },
            onEnterBack: function () { animateFrom(elem, -1) },
            onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
});

var tl11 = gsap.timeline({ default: { duration: .7, ease: Back.easeOut.config(2), opacity: 0 } })
tl11.from(".rect1", {
    delay: 0.8,
    xPercent: -50, left: "50%", top: "50%",
    opacity: 0,
}, "=.2")
    .from(".rect-shd", {
        xPercent: -50, left: "50%", top: "50%",
        opacity: 0,
    }, "=.3")
    .from(".ract2", {
        yPercent: -100, left: "50%", top: "50%",
        transformOrigin: "top center",
        opacity: 0,
    }, "-=.1")
// .from(".card-bg", {
//     delay: 1,
//     y: 500,
// })
// .from(".card2", {
//     opacity: 0,
//     transformorigin: 'center',
//     y: 500
// }, "-=.4")
// .from(".card3", {
//     opacity: 0,
//     transformorigin: 'center',
//     y: 500
// })
// .from(".card4", {
//     opacity: 0,
//     transformorigin: 'center',
//     y: 500
// })
// .from(".logoo", {
//     opacity: 0,

//     y: 500
// }, "-=.7")
$(document).ready(function () {

    $(".Click-here").on('click', function () {
        $(".custom-model-main").addClass('model-open');
    });
    $(".apply").on('click', function () {
        $(".custom-model-main").addClass('model-open');
    });
    $(".close-btn, .bg-overlay").click(function () {
        $(".custom-model-main").removeClass('model-open');
    });

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
            y: -100,
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
    $body = $(".hero-section, .banner-section, .banner-inner"),
        elem_1 = $(".elements .el1"),
        elem_2 = $(".elements .el2"),
        elem_3 = $(".elements .el3");
    if ($body.mousemove(function (t) {
        var e = t.pageX / $body.width() - .6, i = t.pageY / $body.height() - .6; TweenLite.to(elem_1, 2.5, {
            y: 50 * e, x: 60 * i, ease: Expo.easeOut
        }

        ), TweenLite.to(elem_2, 1.5, {
            x: 30 * e, y: 20 * i, ease: Sine.easeOut
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
    $("#pop").load("pop.html");
});