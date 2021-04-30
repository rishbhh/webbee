(function ($) {

    "use strict";

    var $html = $('html'), isTouch = $html.hasClass('touchevents');
    var $body = $('body');
    var $window = $(window);
    var windowWidth = Math.max($window.width(), window.innerWidth);


    /*Detect IE*/
    function detectIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE');
        var trident = ua.indexOf('Trident/');
        var edge = ua.indexOf('Edge/');
        if (msie > 0) {
            $html.addClass('ie');
        } else if (trident > 0) {
            $html.addClass('ie');
        } else if (edge > 0) {
            $html.addClass('edge');
        } else {
            $html.addClass('not-ie');
        }
        return false;
    }

    detectIE();

    /*Detect ios*/
    var mac = !!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i);
    if (mac) {
        $html.addClass('ios');
        if ($html.hasClass('touchevents')) {
            $html.addClass('touch-ios');
        }
    }

    function iOSversion() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
        }
    }

    var ver = iOSversion();

    if (ver && ver[0] < 11) {
        $html.addClass('no-autoplay-video');
    }


    /*Ios fix zoom on form elems focus*/
    if ($html.hasClass('ios')) {
        var metaViewport = document.querySelector('meta[name=viewport]');
        if (metaViewport !== null) {
            var content = metaViewport.getAttribute('content');
            var re = /maximum\-scale=[0-9\.]+/g;

            if (re.test(content)) {
                content = content.replace(re, 'maximum-scale=1.0');
            } else {
                content = [content, 'maximum-scale=1.0'].join(', ')
            }
            metaViewport.setAttribute('content', content);
        }
    }

    /*Detect Android*/
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    if (isAndroid) {
        $html.addClass('android');
    } else {
        $html.addClass('not-android');
    }

    /*Detect Chrome*/
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if (isChrome) {
        $html.addClass('chrome');
    } else {
        $html.addClass('not-chrome');
    }

    /*Detect Firefox*/
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $html.addClass('firefox');
    }







    /*RequestAnimationFrame Animate*/
    var clientX, clientY;

    if ($html.hasClass('no-touchevents')) {
        document.addEventListener("mousemove", function (e) {
            clientX = e.clientX;
            clientY = e.clientY;
        });
    }


    var runningAnimationFrame = true;
    var scrolledY;

    window.requestAnimationFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback, element) {
                return window.setTimeout(callback, 1000 / 60);
            };
    })();

    var mainTextSliderFlag = true;

    function loop() {
        if (runningAnimationFrame) {

            scrolledY = $window.scrollTop();



            /*Main text slider*/
            if (mainTextSliderFlag == true && $('.main-text-slider-box').length) {
                $('.main-text-slider-box').each(function () {
                    if ($(this).parents('.js-view-checker').hasClass('visible') || $(this).hasClass('visible')) {
                        var $this = $(this);
                        var $thisTextSlider = $this.find('.main-text-slider .swiper-container')[0].swiper;
                        $thisTextSlider.params.autoplay = {
                            delay: $mainTextBulletsSliderDelay,
                            disableOnInteraction: false
                        };
                        $thisTextSlider.autoplay.start();

                        var progress = $this.find('.progress');
                        progress.css({ 'stroke-dashoffset': 114 });
                        progress.animate({
                            'stroke-dashoffset': 0
                        }, $mainTextBulletsSliderDelay - 150, function () {
                            progress.css({ 'stroke-dashoffset': 114 });
                        });

                        mainTextSliderFlag = false;
                    }
                });
            }

            if ($html.hasClass('opened-nav') && navAnimationFlag) {
                navAnimate();
            }

            requestAnimationFrame(loop);
        }
    }

    requestAnimationFrame(loop);


    /*Viewport checker*/
    function inViewChecker() {
        $('.js-view-checker').viewportChecker({
            classToAdd: 'visible',
            classToAddForFullView: 'full-visible',
            invertBottomOffset: true,
            repeat: false
        });
    }

    if ($('.js-view-checker').length) {
        inViewChecker();
    }


    /*Typography*/
    function lastWord() {
        $('h6, .h6').each(function () {
            var text = $(this).html().split(' ');
            var lastword = text.pop();
            $(this).html([text.join(' '), ' <span class="last-word">', lastword, '</span>'].join(''));
        });
    }
    if ($('h6, .h6').length) {
        lastWord();
    }


    /*Responsive img*/
    if ($('.responsimg').length) {
        $('.responsimg').responsImg();
    }




    /*Text grid*/
    function textGridHasIcons() {
        if ($(this).find('.icon').length) {
            $(this).addClass('has-icons');
        }
    }
    $('.text-grid').each(function () {
        textGridHasIcons();
    });


    /*Main text slider*/

    var $mainTextBulletsSlider = undefined, $mainTextBulletsSliderDelay = 6500
    function mainTextSliderInit() {

        $('.main-text-slider .swiper-container').each(function (index) {

            var $thisParent = $(this).parents('.main-text-slider-box');

            var bulletsText = [];
            $(this).find('.swiper-slide').each(function (i) {
                bulletsText.push($(this).attr("data-bullet"));
            });

            var loop = true;
            if ($(this).find('.swiper-slide').length <= 1) {
                loop = false;
            }

            var speed = 400,
                progressSpeed = $mainTextBulletsSliderDelay,
                progress,
                strokeDashOffset = 114;

            if (progress !== undefined) {
                progress.css({ 'stroke-dashoffset': strokeDashOffset });
                progress.animate({
                    'stroke-dashoffset': 0
                }, progressSpeed, function () {
                    progress.css({ 'stroke-dashoffset': strokeDashOffset });
                });
            }

            var $mainTextSlider = new Swiper($(this)[0], {
                spaceBetween: 90,
                slidesPerView: '1',
                speed: speed,
                loop: loop,
                watchOverflow: true,
                /*autoHeight: true,
                autoplay: {
                    delay: $mainTextBulletsSliderDelay,
                    disableOnInteraction: false
                },*/
                pagination: {
                    el: $(this).parents('.main-text-slider-box').find('.swiper-pagination'),
                    clickable: true,
                    renderBullet: function (index, className) {

                        /*setTimeout(function(){
                            var progress = $thisParent.find('.progress');
                            progress.css({'stroke-dashoffset': strokeDashOffset});
                            progress.animate({
                                'stroke-dashoffset': 0
                            }, progressSpeed - 150, function(){
                                progress.css({'stroke-dashoffset': strokeDashOffset});
                            });
                        }, 150);*/

                        return '<span class="' + className + ' swiper-slide"><span class="bullet-text">' + bulletsText[index] + '</span><span class="slide-progress"><svg width="36" height="36" viewBox="0 0 37 37"><circle cx="18.5" cy="18.5" r="18" fill="none" stroke="#8691a8" stroke-miterlimit="10" stroke-opacity=".7" class="progress" /></svg></span>' + '</span>';
                    }
                },
                on: {
                    slideChange: function (index) {

                        var progress = $thisParent.find('.progress');

                        progress.stop(true, true).attr('style', '');

                        progress.css({ 'stroke-dashoffset': strokeDashOffset });
                        progress.animate({
                            'stroke-dashoffset': 0
                        }, progressSpeed, function () {
                            progress.css({ 'stroke-dashoffset': strokeDashOffset });
                        });

                        progressSpeed = $mainTextBulletsSliderDelay + speed;

                        if (windowWidth <= 780 && $mainTextBulletsSlider !== undefined) {
                            var realIndex = this.realIndex;
                            $thisParent.find('.main-text-bullets-slider .swiper-container').each(function () {
                                $(this)[0].swiper.slideTo(realIndex);
                            });
                        }
                    }
                },
                breakpoints: {
                    480: {
                        spaceBetween: 30
                    }
                }
            });
        });
    }

    function maintTextBulletsSlider() {
        var $thisParent = $(this).parents('.main-text-slider-box');
        if (windowWidth <= 780 && $mainTextBulletsSlider == undefined) {
            $('.main-text-bullets-slider .swiper-container').each(function () {
                $mainTextBulletsSlider = new Swiper($(this)[0], {
                    spaceBetween: 40,
                    slidesPerView: 'auto',
                    speed: 400,
                    watchOverflow: true,
                    slideToClickedSlide: true,
                    on: {
                        init: function (index) {
                            setTimeout(function () {
                                var activeIndex = $('.swiper-pagination-bullet-active').index();
                                $mainTextBulletsSlider.slideTo(activeIndex);
                            }, 100);
                        }
                    },
                    breakpoints: {
                        780: {
                            spaceBetween: 32
                        }
                    }
                });
            })
        }
        else if (windowWidth > 781 && $mainTextBulletsSlider !== undefined) {
            $('.main-text-bullets-slider .swiper-container').each(function () {
                $(this)[0].swiper.destroy();
            });
            $mainTextBulletsSlider = undefined;
            $('.main-text-bullets-slider .swiper-wrapper').attr('style', '');
            $('.main-text-bullets-slider .swiper-slide').attr('style', '');

            $thisParent.find('.main-text-slider .swiper-container').each(function () {
                $(this)[0].swiper.update();
            });
        }
    }

    if ($('.main-text-slider').length) {
        mainTextSliderInit();
        maintTextBulletsSlider();
    }

/*Cols text slider*/
var $colsTextSlider;
function colsTextSliderInit(){
    $('.cols-text-slider .swiper-container').each(function(){
        $colsTextSlider = new Swiper($(this)[0], {
            spaceBetween: 40,
            slidesPerView: 'auto',
            speed: 400,
            loop: false,
            touchStartPreventDefault: false,
            watchOverflow: true,
            navigation: {
                nextEl: $(this).parents('.cols-text-slider').find('.next-btn'),
                prevEl: $(this).parents('.cols-text-slider').find('.prev-btn')
            },
            breakpoints:{
                480: {
                    spaceBetween: 30
                }
            }
        });
    })
}

if($('.cols-text-slider').length){
    colsTextSliderInit();
}






    // load page with ajax
    function loadPage(url, push_state) {
        $.ajax({
            url: url,
            dataType: 'html',
            beforeSend: function () {
                loading = true;

                var minContentHeight = $('.ajax-upload-box').innerHeight();
                $('.ajax-upload-box').css('min-height', minContentHeight);

                $html.addClass('page-transition-start hidden-scroll');
                if ($html.hasClass('no-touchevents') && $html.hasClass('hover-cursor-activated')) {
                    $html.removeClass('hover-cursor-activated');
                }
                $('.page-transitions-box').find('.video')[0].play();
            },
            success: function (data) {
                var $data = $('<div/>').html(data);

                setTimeout(function () {

                    $('html, body').animate({
                        scrollTop: 0
                    }, 10);

                    $('#all, #header, #footer').css('opacity', 1);

                    if ($html.hasClass('opened-nav')) {
                        $('#nav-box').removeClass('nav-animate');
                        navBoxWaveAnimateDirection = -1;
                        navBoxWaveAnimate.setDirection(navBoxWaveAnimateDirection);
                        navBoxWaveAnimate.play();
                        navAnimationFlag = false;
                        setTimeout(function () {
                            $html.removeClass('opened-nav light-cursor');
                        }, 1000);
                    }

                    var bodyClass = '';

                    var m = data.match(/<body class="([^"]+)">/);
                    if (m) {
                        bodyClass = m[1];
                    }

                    var docTitle = $data.find('title').text();
                    var pageContent = $data.find('.ajax-upload-box').html();

                    document.title = "" + docTitle;

                    /*Body class*/
                    $body.attr('class', bodyClass);


                    /*Ajax content*/
                    $('.ajax-upload-box').html("" + pageContent).attr('style', '');


                    if (push_state) {
                        if ('pushState' in window.history) window.history.pushState(null, null, url);
                    }
                    loading = false;

                }, 800);


                setTimeout(function () {

                    /*Functions reinit*/

                    /*Viewport checker*/
                    if ($('.js-view-checker').length) {
                        inViewChecker();
                    }

                    /*Typography*/
                    if ($(' .h6').length) {
                        lastWord();
                    }

                    /*Text grid*/
                    $('.text-grid').each(function () {
                        textGridHasIcons();
                    });



                    /*Main text slider*/
                    if ($('.main-text-slider').length) {
                        mainTextSliderFlag = true;
                        mainTextSliderInit();
                        maintTextBulletsSlider();
                    }

                }, 1000);



            },

        });
    }






    var resizeEnd;
    $window.on('resize', function () {
        windowWidth = Math.max($window.width(), window.innerWidth);

        clearTimeout(resizeEnd);
        resizeEnd = setTimeout(function () {


            if ($('.main-text-slider').length) {
                maintTextBulletsSlider();
            }

        }, 250);
    });


    $window.on('orientationchange', function () {
        windowWidth = Math.max($window.width(), window.innerWidth);


        clearTimeout(resizeEnd);
        resizeEnd = setTimeout(function () {
            if ($('.main-text-slider').length) {
                maintTextBulletsSlider();
            }
        }, 350);
    });



})(jQuery);


