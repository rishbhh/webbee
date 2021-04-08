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
                duration:2.5,
                ease:"power4.out",
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





// var rs = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".w1",
//         scrub: true,
//         start: "top bottom",
//     }
// });

// rs.to(".content-right", { x: 200, duration: 2 });

