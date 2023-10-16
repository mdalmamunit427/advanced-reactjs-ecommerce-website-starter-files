(function($){
    "use strict";

    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    });
    // scroll up start here
    $(function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $('.scrollToTop').css({
                    'bottom': '10%',
                    'opacity': '1',
                    'transition': 'all .5s ease'
                });
            } else {
                $('.scrollToTop').css({
                    'bottom': '-30%',
                    'opacity': '0',
                    'transition': 'all .5s ease'
                })
            }
        });

        //Click event to scroll to top
        $('a.scrollToTop').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });

    //menu search
    $(function() {
        $(".search-icon").on("click", function(e) {
          $(".menu-search-form").toggleClass("open");
           e.stopPropagation()
        });
        $(document).on("click", function(e) {
          if ($(e.target).is(".menu-search-form input, .menu-search-form form") === false) {
            $(".menu-search-form").removeClass("open");
          }
        });
    });
    
    $(document).ready(function(){

        /*==== header Section Start here =====*/
        $("ul>li>ul").parent("li").addClass("menu-item-has-children");
        // drop down menu width overflow problem fix
        $('ul').parent('li').on('hover', function () {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();
            if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({
                    left: newpos
                });
            }
        });
        $('.menu li a, .shop-menu li a').on('click', function (e) {
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        })
        $('.ellepsis-bar').on('click', function (e) {
            var element = $('.header-top');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.slideUp(300, "swing");
                $('.overlayTwo').removeClass('active');
            } else {
                element.addClass('open');
                element.slideDown(300, "swing");
                $('.overlayTwo').addClass('active');
            }
        });
        $('.header-bar').on('click', function () {
            $(this).toggleClass('active');
            $('.menu>ul').toggleClass('active');
        })

        // drop down menu width overflow problem fix
        $(window).on('load', function () {
            $('ul').parent('li').hover(function () {
                var menu = $(this).find("ul");
                var menupos = $(menu).offset();
                if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({
                    left: newpos
                });
                }
            });
        });

        // demo view
        // $('.demo-view-icon').on('click', function () {
        //     $('.demo-view').toggleClass('open');
        // })

        //Header
        var fixed_top = $("header");
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                fixed_top.addClass("header-fixed fadeInUp");
            } else {
                fixed_top.removeClass("header-fixed fadeInUp");
            }
            $('.count').data('countToOptions', {
                formatter: function (value, options) {
                    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                }
            });
            // start all the timers
            $('.count').each(count);  
            function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                $this.countTo(options);
            }
        });

        
        // bannerflag-slider
        var swiper = new Swiper('.bannerflag-slider', {
            slidesPerView: 14,
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                768: {
                    slidesPerView: 8,
                },
                576: {
                    slidesPerView: 6,
                },
                440: {
                    slidesPerView: 3,
                },
            },
        });



        // course-slider
        var swiper = new Swiper(".course-slider", {
            slidesPerView: 3,
            spaceBetween: 15,
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // },
            navigation: {
                nextEl: '.course-navi-next',
                prevEl: '.course-navi-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                420: {
                    slidesPerView: 1,
                },
            },
            loop: true,
        });

        // clients-slider
        var swiper = new Swiper(".clients-slider", {
            slidesPerView: 3,
            spaceBetween: 15,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                420: {
                    slidesPerView: 1,
                },
            },
            loop: true,
        });
        // clients-slider2
        var swiper = new Swiper(".clients-slider2", {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.clients-slider2-next',
                prevEl: '.clients-slider2-prev',
            },
            loop: true,
        });


        var swiper = new Swiper(".sponsor-slider", {
            slidesPerView: 6,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                992: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 3,
                },
                420: {
                    slidesPerView: 2,
                },
            },
            loop: true,
        });

        // post-thumb-slider section
        var swiper = new Swiper('.post-thumb-slider', {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.post-thumb-slider-next',
                prevEl: '.post-thumb-slider-prev',
            },
            loop: true,
        });

        // Evint slider
        var swiper = new Swiper('.event-sliders', {
            slidesPerView: 4,
            borderRight: 1,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.event-slider-next',
                prevEl: '.event-slider-prev',
            },
            loop: true,
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 2,
                },
                440: {
                    slidesPerView: 1,
                },
            },
        });

        // instructor-slider
        var swiper = new Swiper('.instructor-slider', {
            slidesPerView: 6,
            borderRight: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.instructor-slider-next',
                prevEl: '.instructor-slider-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 2,
                },
                440: {
                    slidesPerView: 1,
                },
            },
        });


        // popup
        $('.popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            disableOn: 300
        });

        
        //Circle ProgressbarOne
        var skillLevel1 = jQuery('.circles .first').data('percent');
        $('.first.circle').circleProgress({
            value:  '0.' + skillLevel1,
            fill: {gradient: ['#00a556']}
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(skillLevel1 * progress) + '<i>%</i>');
        });

        //Circle ProgressBarTwo
        var skillLevel2 = jQuery('.circles .second').data('percent');
        $('.second.circle').circleProgress({
            value:  '0.' + skillLevel2,
            fill: {gradient: ['#31aabd']}
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(skillLevel2 * progress) + '<i>%</i>');
        });

        //Circle ProgressBarThree
        var skillLevel3 = jQuery('.circles .third').data('percent');
        $('.third.circle').circleProgress({
            value:  '0.' + skillLevel3,
            fill: {gradient: ['#eec93d']}
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(skillLevel3 * progress) + '<i>%</i>');
        });

        //Circle ProgressBarFour
        var skillLevel3 = jQuery('.circles .four').data('percent');
        $('.four.circle').circleProgress({
            value:  '0.' + skillLevel3,
            fill: {gradient: ['#f16126']}
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(skillLevel3 * progress) + '<i>%</i>');
        });

        // custom formatting example
        // $('.count').data('countToOptions', {
        //     formatter: function (value, options) {
        //         return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        //     }
        // });
        // // start all the timers
        // $('.count').each(count);  
        // function count(options) {
        //     var $this = $(this);
        //     options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        //     $this.countTo(options);
        // }

        $(window).on('load', function () {
            // init Isotope
            var $grid = $('.course-filter').isotope({
                itemSelector: '.col',
            });
            // filter functions
            var filterFns = {
                numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
                },
                ium: function() {
                var name = $(this).find('.name').text();
                    return name.match( /ium$/ );
                }
            };
            // bind filter button click
            $('.course-filter-group').on( 'click', 'li', function() {
                var filterValue = $( this ).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[ filterValue ] || filterValue;
                $grid.isotope({ filter: filterValue });
            });
            // change active class on buttons
            $('.course-filter-group').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'li', function() {
                $buttonGroup.find('.active').removeClass('active');
                $( this ).addClass('active');
                });
            });
        });
        

        // shop cart + - start here
        var CartPlusMinus = $('.cart-plus-minus');
        $(".qtybutton").on("click", function() {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() === "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                }
            }
            $button.parent().find("input").val(newVal);
        });

        // product view mode change js
        $(function() {
            $('.product-view-mode').on('click', 'a', function (e) {
                e.preventDefault();
                var shopProductWrap = $('.shop-product-wrap');
                var viewMode = $(this).data('target');
                $('.product-view-mode a').removeClass('active');
                $(this).addClass('active');
                shopProductWrap.removeClass('grid list').addClass(viewMode);
            });
        });

        // model option start here
        $(function() {
            $('.view-modal').on('click', function () {
                $('.modal').addClass('show');
            });
            $('.close').on('click', function () {
                $('.modal').removeClass('show');
            });
        });
        // product single thumb slider
        $(function() {
            var galleryThumbs = new Swiper('.pro-single-thumbs', {
                spaceBetween: 10,
                slidesPerView: 3,
                loop: true,
                freeMode: true,
                loopedSlides: 1,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                navigation: {
                nextEl: '.pro-single-next',
                prevEl: '.pro-single-prev',
                },
            });
            var galleryTop = new Swiper('.pro-single-top', {
                spaceBetween: 10,
                loop:true,
                loopedSlides: 1,
                thumbs: {
                    swiper: galleryThumbs,
                },
            });
        });
        
        //Review Tabs
        $('ul.review-nav').on('click', 'li', function (e) {
            e.preventDefault();
            var reviewContent = $('.review-content');
            var viewRev = $(this).data('target');
            $('ul.review-nav li').removeClass('active');
            $(this).addClass('active');
            reviewContent.removeClass('review-content-show description-show').addClass(viewRev);
        });
            
       
    });

    document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "complete") {
            var clockdiv = document.getElementsByClassName("date");
            var countDownDate = new Array();
            for (var i = 0; i < clockdiv.length; i++) {
                countDownDate[i] = new Array();
                countDownDate[i]['el'] = clockdiv[i];
                countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
                countDownDate[i]['days'] = 0;
                countDownDate[i]['hours'] = 0;
                countDownDate[i]['seconds'] = 0;
                countDownDate[i]['minutes'] = 0;
            }
            var countdownfunction = setInterval(function () {
                for (var i = 0; i < countDownDate.length; i++) {
                    var now = new Date().getTime();
                    var distance = countDownDate[i]['time'] - now;
                    countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
                    countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);
                    if (distance < 0) {
                        countDownDate[i]['el'].querySelector('.days').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.hours').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.minutes').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.seconds').innerHTML = 0;
                    } else {
                        countDownDate[i]['el'].querySelector('.days').innerHTML = countDownDate[i]['days'];
                        countDownDate[i]['el'].querySelector('.hours').innerHTML = countDownDate[i]['hours'];
                        countDownDate[i]['el'].querySelector('.minutes').innerHTML = countDownDate[i]['minutes'];
                        countDownDate[i]['el'].querySelector('.seconds').innerHTML = countDownDate[i]['seconds'];
                    }
                }
            }, 1000);
        }
    });

    // ajax contact form
    $(function() {
        var form = $('#contact-form');
        var formMessages = $('.form-message');
        $(form).submit(function(e) {
            e.preventDefault();
            var formData = $(form).serialize();
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(response);
                $('#contact-form input, #contact-form textarea').val('');
            })
            .fail(function(data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        });
    });
}(jQuery));

