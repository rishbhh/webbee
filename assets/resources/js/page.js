var progressbar = $('.js-progress-bar-search');

var tween = new TweenLite(progressbar, 1, {
    width: '100%',
    ease: Linear.easeNone,
    onUpdate: countPercent,
    onComplete: function () { // progressbar completed
        //progressbar.css({"width": "100%"});
        progressbar.addClass("complete");
    }
});


function countPercent() {
    newPercent = (tween.progress() * 100).toFixed();

    $('#count').text(newPercent + "%");
}


gsap.timeline({}).to(".loading__overlay", {
    xPercent: -300,
    ease: "none",
    duration: 1,

}).to(".load__inner", {
    opacity: 0,
    ease: "none"
}, "ldn").to(".bluee", {
    duration: 1,
    attr: {
        d: "M0 502S175 272 500 272s500 230 500 250V0H0Z"
    },
    ease: "power2.in"
}, "-=.7").to(".bluee", {
    duration: 1,
    attr: {
        d: "M0 2S175 1 500 1s500 1 500 1V0H0Z"
    },
    ease: "power2.out"
}).to("#loading__main", {
    height: "0",
    duration: 1
}, "-=1")
    .from(".main-content", { opacity: 0, y: 40, duration: 0.4, stagger: .4 })
    .from(".rect1", {
        xPercent: -50, left: "50%", top: "50%",
        opacity: 0,
    }, "-=.2")
    .from(".rect-shd", {
        xPercent: -50, left: "50%", top: "50%",
        opacity: 0,

    }, "-=.3")
    .from(".ract2", {
        yPercent: -100, left: "50%", top: "50%",
        transformOrigin: "top center",
        opacity: 0,

    }, "-=.4")
    .from(".card-bg", {
        delay: .1,
        yPercent: -100, left: "50%", top: "50%",
        transformOrigin: "top center",
        opacity: 0,

    }, "-=.5")
    .from(".card1", {
        yPercent: 100, left: "50%", top: "50%",
        transformOrigin: "bottom center",
        opacity: 0,

    }, "-=.6")
    .from(".logoo", {
        transformOrigin: "bottom center",
        opacity: 0,

    }, "-=.5")
    .from(".ract3", {
        yPercent: 50, left: "50%", top: "50%",
        transformOrigin: "top center",
        opacity: 0,

    }, "-=.6")
    .from(".rct", {
        yPercent: -50, left: "50%", top: "50%",
        opacity: 0,
        transformOrigin: 'top center',

    }, "=.1")
// .to(".whole-card", { y: 7, repeat: -1, yoyo: true })


// CURSOR
var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 12,
                top: posY - 12
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
// yellow circle
$("a").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
});
$("a").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
});

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
        stagger: .3,
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
            once: true,
            onEnter: function () { animateFrom(elem, 1) },
        });
    });
});

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
    let cas_e = gsap.timeline({
        scrollTrigger: {
            trigger: ".cases-cards",

        },
    });
    cas_e.from(".cass", { y: 40, opacity: 0, ease: "power2.easeOut", duration: 0.1, stagger: 0.5 }, "-=1.6")

    cas_e.fromTo(".case-card", { yPercent: -100 }, { duration: 0.5, yPercent: 0 }, "-=.1")
    cas_e.fromTo(".case-card img", { yPercent: 100 }, { duration: 0.5, yPercent: 0 }, "-=.1")
    cas_e.from(".card-description", { scaleY: 0, transformOrigin: "bottom left" }, "-=.1")
    let tal_k = gsap.timeline({
        scrollTrigger: {
            trigger: ".cases-cards",
            start: "bottom 50%",

        },
    });
    tal_k.from(".talk-message-box", { y: 40, opacity: 0, ease: "power2.easeOut", duration: 1 }, "-=1")
    tal_k.from(".message-icon", { scale: 0, opacity: 0, ease: "power2.easeOut", duration: 1 }, "-=1.2")

    let blog_s = gsap.timeline({
        scrollTrigger: {
            trigger: ".talk-section",
            start: "bottom 10%",
        }
    });
    blog_s.from(".blog-content", { yPercent: 100, opacity: 0, ease: "Power2.easeOut", duration: 0.7, stagger: 0.9 }, "-=.7")


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
    $body = $(" .banner-section, .banner-inner, .hero-section"),
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