  $(document).ready(function() {
	new WOW().init();


	//phone size menu onclick
	if ($(window).width() <= 1199) {
        $('#menu-id').click(function (e) {
           e.preventDefault()
           $(".overlay-box").fadeIn(300);
           $(".navgition").addClass("reset-left");
           $("body").addClass("overflow");
       });
       $(".nav-head .close-btn, .overlay-box").click(function () {
           $(".overlay-box").fadeOut(300);
           $(".navgition").removeClass("reset-left");
           $("body").removeClass("overflow");
       });

	   //dropdown inside menu
	   $('.cat-li.dropdown .cat-anchor, .lang-word, .navgition .dropdown>a, .hide-txt').click(function (e) {
		e.preventDefault()
		var item =  $(this).siblings(".dropdown-content");
		item.slideToggle(500);
		
		})

        //slide down menu
        $('.btn-div').click(function () {
            $(".cats-dispaly").slideToggle(400);
            if ($(window).width() <= 1199) {
                $(this).toggleClass("active")
            }
        });
    }
    $(".top-header .add-chevron").addClass("chevron-down");
    
    // //main Slider Carousel
    ///////// ** main** /////////
    var specials = new Swiper('.main-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1199: {
                slidesPerView: 1,
            },
        },
    });
	

    // //product Slider Carousel
    ///////// ** product** /////////
    var specials = new Swiper('.prdouct-one .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.prdouct-one .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.prdouct-one .swiper-btn-next',
            prevEl: '.prdouct-one .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    ///////// ** product 2** /////////
    var specials = new Swiper('.prdouct-two .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.prdouct-two .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.prdouct-two .swiper-btn-next',
            prevEl: '.prdouct-two .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });    
    ///////// ** product 3** /////////
    var specials = new Swiper('.prdouct-three .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.prdouct-three .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.prdouct-three .swiper-btn-next',
            prevEl: '.prdouct-three .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    ///////// ** product 2** /////////
    var specials = new Swiper('.prdouct-four .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.prdouct-four .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.prdouct-four .swiper-btn-next',
            prevEl: '.prdouct-four .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });

     // //reviews-section Slider Carousel
    ///////// ** reviews-section** /////////
    var specials = new Swiper('.reviews-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.reviews-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });

	////////////////add swiper carsoul to class feature////////////////////////////////

    if ( $(window).width() < 1199 ) {
        $('.features .col-md-3.col-xs-12').contents().unwrap();
		$('.features .row').contents().unwrap();
        $(".feature-section .features").addClass("swiper-container");
        $(".feature-section .features-div").addClass("swiper-wrapper");
        $(".feature-section .features-box").addClass("swiper-slide");
        var blog = new Swiper('.feature-section .swiper-container', {
            loop: true,
            autoplay: true,
            pagination: {
                el: '.feature-section .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1199: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
        });
    }
    ////////////** footer transfer into accordion **//////////

	if ($(window).width() <= 767) {
		$(".nav-foot-header").addClass("footer-accordion");
		$(".nav-foot").addClass("footer-panel");
	}
	$('.footer-accordion').click(function () {
		var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
		$(".footer-accordion").not(this).removeClass("active");
		$(this).toggleClass("active");
		if ($(this).siblings().css('max-height') == '0px') {
			$(this).siblings().css('max-height', x);
			$(this).siblings('.nav-foot').css('padding-top', "15px");
		} else {
			$(this).siblings().css('max-height', '0');
			$(this).siblings('.nav-foot').css('padding-top', "0");
		}

		$(".footer-accordion").not(this).siblings().css('max-height', '0');
		$(".footer-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
	})

});