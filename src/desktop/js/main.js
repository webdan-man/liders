var window_w;

window_w = document.documentElement.clientWidth;

var desk_w, desk_h, deskt_h;

desk_h = document.documentElement.clientHeight;

//карта
function map() {
    ! function(e, t, n) {
        function r() {
            for (; u[0] && "loaded" == u[0][l];) o = u.shift(), o[f] = !a.parentNode.insertBefore(o, a)
        }
        for (var i, s, o, u = [], a = e.scripts[0], f = "onreadystatechange", l = "readyState"; i = n.shift();) s = e.createElement(t), "async" in a ? (s.async = !1, e.head.appendChild(s)) : a[l] ? (u.push(s), s[f] = r) : e.write("<" + t + ' src="' + i + '" defer></' + t + ">"), s.src = i
    }(document, "script", ["https://maps.googleapis.com/maps/api/js?key=AIzaSyAdzwz73OHrdVGjKVKow8ID8T31yNxiBSI", "js/map.js"]);

}

function isMobile() {
    if (navigator.userAgent.match(/Android|Mobile|IEMobile|Opera Mini|iPhone|iPad|iPod/i) == null) return false;
    else return true;
}

function desktop_w() {
    desk_w = (window_w / 1920);
}

function desktop_h() {
    deskt_h = (desk_h / 1200);
}

function sliders_m() {
    slider11 = $('#sld11').bxSlider({
        infiniteLoop: true,
        pager: true,
        pagerCustom: '#pgc11',
        controls: false,
        mode: 'horizontal',
        auto: false,
        speed: 400
    });

    $('.sec11 .prev').click(function(e) {
        e.preventDefault();
        slider11.goToPrevSlide();
    });
    $('.sec11 .next').click(function(e) {
        e.preventDefault();
        slider11.goToNextSlide();
    });
    slider2n = $('#sld2n').bxSlider({
        infiniteLoop: true,
        pager: true,
        pagerCustom: '#page2',
        controls: false,
        auto: false,
        speed: 400
    });

    $('.sec2 .slider .prev').click(function(e) {
        e.preventDefault();
        slider2n.goToPrevSlide();
    });
    $('.sec2 .slider .next').click(function(e) {
        e.preventDefault();
        slider2n.goToNextSlide();
    });

    slider4n = $('#sld4n').bxSlider({
        infiniteLoop: true,
        pager: true,
        pagerCustom: '#pgc4n',
        controls: false,
        mode: 'horizontal',
        auto: false,
        speed: 400
    });

    $('.sec4 .prev').click(function(e) {
        e.preventDefault();
        slider4n.goToPrevSlide();
    });
    $('.sec4 .next').click(function(e) {
        e.preventDefault();
        slider4n.goToNextSlide();
    });

    slider6 = $('#sld6').bxSlider({
        infiniteLoop: true,
        pager: true,
        pagerCustom: '#pgc6',
        controls: false,
        mode: 'horizontal',
        auto: false,
        speed: 400
    });

    $('.sec6 .prev').click(function(e) {
        e.preventDefault();
        slider6.goToPrevSlide();
    });
    $('.sec6 .next').click(function(e) {
        e.preventDefault();
        slider6.goToNextSlide();
    });
    slider7 = $('#sld7').bxSlider({
        infiniteLoop: true,
        pager: true,
        pagerCustom: '#pgc7',
        controls: false,
        mode: 'horizontal',
        auto: false,
        speed: 400
    });

    $('.sec7 .prev').click(function(e) {
        e.preventDefault();
        slider7.goToPrevSlide();
    });
    $('.sec7 .next').click(function(e) {
        e.preventDefault();
        slider7.goToNextSlide();
    });

    slider8 = $('#sld8').bxSlider({
        infiniteLoop: true,
        pager: true,
        pagerCustom: '#pgc8',
        controls: false,
        mode: 'horizontal',
        auto: false,
        speed: 400
    });

    $('.sec8 .prev').click(function(e) {
        e.preventDefault();
        slider8.goToPrevSlide();
    });
    $('.sec8 .next').click(function(e) {
        e.preventDefault();
        slider8.goToNextSlide();
    });

    slider9n = $('#sld9n').bxSlider({
        infiniteLoop: true,
        pager: true,
        pagerCustom: '#pgc9n',
        controls: false,
        mode: 'horizontal',
        auto: false,
        speed: 400
    });

    $('.sec9 .prev').click(function(e) {
        e.preventDefault();
        slider9n.goToPrevSlide();
    });
    $('.sec9 .next').click(function(e) {
        e.preventDefault();
        slider9n.goToNextSlide();
    });

    slider10n = $('.sec10 #sld10n').bxSlider({
        infiniteLoop: true,
        controls: false,
        pager: true,
        pagerCustom: '#pgc10n',
        speed: 400,
        mode: 'horizontal',
        slideWidth: 317,
        onSlideNext: function($slideElement, oldIndex, newIndex) {
            $('.sec10 #sld10n .slid').removeClass('active');
            $('.sec10 #sld10n .slid[data-sld="' + newIndex + '"]').addClass('active');
        },
        onSlidePrev: function($slideElement, oldIndex, newIndex) {
            $('.sec10 #sld10n .slid').removeClass('active');
            $('.sec10 #sld10n .slid[data-sld="' + newIndex + '"]').addClass('active');

        },
        onSliderLoad: function($slideElement, oldIndex, newIndex) {
            $('.sec10 #sld10n .slid.active.bx-clone').removeClass('active');
            $('.sec10').addClass('loaded-slider');
        }
    });
    $('.sec10 .prev').click(function(e) {
        e.preventDefault();
        slider10n.goToPrevSlide();
    });
    $('.sec10 .next').click(function(e) {
        e.preventDefault();
        slider10n.goToNextSlide();
    });

    slider5_1 = $('#sld5_1').bxSlider({
        infiniteLoop: true,
        pager: true,
        pagerCustom: '#pgc5_1',
        controls: false,
        auto: false,
        speed: 400
    });
    slider5_2 = $('#sld5_2').bxSlider({
        infiniteLoop: true,
        pager: true,
        pagerCustom: '#pgc5_2',
        controls: false,
        auto: false,
        speed: 400
    });
    slider5_3 = $('#sld5_3').bxSlider({
        infiniteLoop: true,
        pager: true,
        pagerCustom: '#pgc5_3',
        controls: false,
        auto: false,
        speed: 400,
        onSliderLoad: function($slideElement, oldIndex, newIndex) {
            $('.sec5 .gr[data-menus="3"] .block.active.bx-clone').removeClass('active');
            $('#sld5_3').addClass('loaded-slider');
        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            $('.sec5 .gr[data-menus="3"] .block').removeClass('active');
            $('.sec5 .gr[data-menus="3"] .block[data-sld="' + newIndex + '"]').addClass('active');
        }
    });
}

function sliders_d() {

    slider11 = $('#sld11').bxSlider({
        infiniteLoop: true,
        pager: true,
        pagerCustom: '#pgc11',
        controls: false,
        mode: 'horizontal',
        auto: false,
        speed: 400,
        slideWidth: 400
    });

    $('.sec11 .prev').click(function(e) {
        e.preventDefault();
        slider11.goToPrevSlide();
    });
    $('.sec11 .next').click(function(e) {
        e.preventDefault();
        slider11.goToNextSlide();
    });

    slider4 = $('#sld4').bxSlider({
        infiniteLoop: true,
        pager: false,
        controls: false,
        mode: 'horizontal',
        auto: false,
        speed: 400,
        onSlideNext: function($slideElement, oldIndex, newIndex) {
            $('#pgc4 .page').removeClass('active');
            $('#pgc4 .page[data-sld="' + newIndex + '"]').addClass('active');
        },
        onSlidePrev: function($slideElement, oldIndex, newIndex) {
            $('#pgc4 .page').removeClass('active');
            $('#pgc4 .page[data-sld="' + newIndex + '"]').addClass('active');
        },
        onSliderLoad: function($slideElement, oldIndex, newIndex) {
            $('#pgc4 .page.active.bx-clone').removeClass('active');
            $('#pgc4').addClass('loaded-slider');
        }
    });

    $('.sec4 .prev').click(function(e) {
        e.preventDefault();
        // $('.sec4 .page.active').css({
        //     "padding": "0px 10px",
        //     "background": "none",
        //     "color": "white"
        // });
        $('.sec4 .page.active').removeAttr('style');
        $('#pgc4 .page').removeClass('active');
        slider4.goToPrevSlide();
    });
    $('.sec4 .next').click(function(e) {
        e.preventDefault();
        // $('.sec4 .page.active').css({
        //     "padding": "0px 10px",
        //     "background": "none",
        //     "color": "white"
        // });
        $('.sec4 .page.active').removeAttr('style');
        $('#pgc4 .page').removeClass('active');
        slider4.goToNextSlide();
    });
    $('#pgc4 .page').click(function() {
        $('#pgc4 .page').removeClass('active');
        $(this).addClass('active');
        slider4.goToSlide(parseInt($(this).data('sld')));
    });

    slider9 = $('#sld9').bxSlider({
        infiniteLoop: true,
        pager: true,
        pagerCustom: '#pgc9',
        controls: false,
        mode: 'horizontal',
        auto: false,
        speed: 400,
        onSlideNext: function($slideElement, oldIndex, newIndex) {
            $('.sec9 .grup .slidn').removeClass('active');
            $('.sec9 .grup .slidn[data-sld="' + newIndex + '"]').addClass('active');
        },
        onSlidePrev: function($slideElement, oldIndex, newIndex) {
            $('.sec9 .grup .slidn').removeClass('active');
            $('.sec9 .grup .slidn[data-sld="' + newIndex + '"]').addClass('active');
        },
        onSliderLoad: function($slideElement, oldIndex, newIndex) {
            $('.sec9 .grup .slidn.active.bx-clone').removeClass('active');
            $('#sld9').addClass('loaded-slider');
        }
    });

    $('.sec9 .prev').click(function(e) {
        e.preventDefault();
        slider9.goToPrevSlide();
    });
    $('.sec9 .next').click(function(e) {
        e.preventDefault();
        slider9.goToNextSlide();
    });

    $('.sec9 .grup .slidn').click(function() {
        $('.sec9 .grup .slidn').removeClass('active');
        $(this).addClass('active');
        slider9.goToSlide(parseInt($(this).data('sld')));
    });

    slider10 = $('.sec10 #sld10').bxSlider({
        infiniteLoop: true,
        controls: false,
        pager: false,
        speed: 400,
        mode: 'horizontal',
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 10,
        slideWidth: 460,
        onSlideNext: function($slideElement, oldIndex, newIndex) {
            var i = newIndex + 1;
            $('.sec10 #sld10 .slid').removeClass('active');
            if (newIndex == 5) {
                $('.sec10 #sld10 .slid[data-sld="0"]').addClass('active');
            } else {
                $('.sec10 #sld10 .slid[data-sld="' + i + '"]').addClass('active');
            }
        },
        onSlidePrev: function($slideElement, oldIndex, newIndex) {
            var i = newIndex + 1;
            $('.sec10 #sld10 .slid').removeClass('active');
            if (newIndex == 5) {
                $('.sec10 #sld10 .slid[data-sld="0"]').addClass('active');
            } else {
                $('.sec10 #sld10 .slid[data-sld="' + i + '"]').addClass('active');
            }
        },
        onSliderLoad: function($slideElement, oldIndex, newIndex) {
            $('.sec10 #sld10 .slid.active.bx-clone').removeClass('active');
            $('.sec10').addClass('loaded-slider');
        }
    });
    $('.sec10 .prev').click(function(e) {
        e.preventDefault();
        slider10.goToPrevSlide();
    });
    $('.sec10 .next').click(function(e) {
        e.preventDefault();
        slider10.goToNextSlide();
    });

    slider5_1 = $('#sld5_1').bxSlider({
        infiniteLoop: true,
        pager: true,
        pagerCustom: '#pgc5_1',
        controls: false,
        auto: false,
        speed: 400
    });
    slider5_2 = $('#sld5_2').bxSlider({
        infiniteLoop: true,
        pager: true,
        pagerCustom: '#pgc5_2',
        controls: false,
        auto: false,
        speed: 400
    });
    slider5_3 = $('#sld5_3').bxSlider({
        infiniteLoop: true,
        pager: true,
        pagerCustom: '#pgc5_3',
        controls: false,
        auto: false,
        speed: 400,
        onSliderLoad: function($slideElement, oldIndex, newIndex) {
            $('.sec5 .gr[data-menus="3"] .block.active.bx-clone').removeClass('active');
            $('#sld5_3').addClass('loaded-slider');
        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            $('.sec5 .gr[data-menus="3"] .block').removeClass('active');
            $('.sec5 .gr[data-menus="3"] .block[data-sld="' + newIndex + '"]').addClass('active');
        }
    });
};

function fullpage() {
    $("#fullpage").fullpage({
        anchors: ["section1", "section2", "section3", "section4", "section5", "section6", "section7", "section8", "section9", "section10", "section11", "section12", "section13", "section14"],
        responsiveHeight: true,
        scrollOverflow: true,
        scrollBar: true,
        // lazyLoading: false,
        afterLoad: function(anchorLink, index) {

            var $head = $(this).find('.head');

            setTimeout(function() {
                $head.stop().animate({
                    top: '1px'
                }, 100, function() {
                    $head.animate({
                        top: '0px'
                    }, 100)
                });
            }, 100)
        }
    });
}

function desktop_size() {
    if (window_w < 1900) {
        desktop_w();
        $(".sec1 .wrapper .wrap, .sec2 .wrapper .wrap, .sec3 .wrapper .wrap, .sec4 .wrapper .wrap, .sec5 .wrapper .wrap, .sec6 .wrapper .wrap, .sec7 .wrapper .wrap, .sec8 .wrapper .wrap, .sec9 .wrapper .wrap, .sec10 .wrapper .wrap, .sec12 .wrapper .wrap, .slid_point, .sec1 .mouse_gr, .head, .sec4 .grup, .sec9 .grup, .sec11 .block, .foot, .sec13 .block, .sec14 .block, .popap, .menu_open .men_ul, .tablica, .sps").css("zoom", desk_w);
        $("section").css("min-height", desk_h);
    } else if (desk_h < 1200) {
        desktop_h();
        $(".sec1 .wrapper .wrap, .sec2 .wrapper .wrap, .sec3 .wrapper .wrap, .sec4 .wrapper .wrap, .sec5 .wrapper .wrap, .sec6 .wrapper .wrap, .sec7 .wrapper .wrap, .sec8 .wrapper .wrap, .sec9 .wrapper .wrap, .sec10 .wrapper .wrap, .sec12 .wrapper .wrap, .slid_point, .sec1 .mouse_gr, .head, .sec4 .grup, .sec9 .grup, .sec11 .block, .foot, .sec13 .block, .sec14 .block, .popap, .menu_open .men_ul, .tablica, .sps").css("zoom", deskt_h);
        $("section").css("min-height", desk_h);
        $(".center").css("max-width", deskt_h * window_w);
    }
}

function ugol_size() {
    $(".sec8").find('.ugol').css({
        "zoom": "0.8",
        "margin-top": "300px"
    });
}

function start_d() {

    if (desk_h < 750) {
        ugol_size();
    }

    desktop_size();

    fullpage();

    sliders_d();

    $('body').addClass('pre-loaded');

    $('.menu_open .mena_p').click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveTo($(this).attr('data-href'));
        $('.menu_open').removeClass('active');
        menu_active = 0;
    });

    $('.sec5 .slid_menu .mena_s').click(function(e) {
        data_menus = $(this).attr('data-mena');
        $('.sec5 .slid_menu .mena_s').removeClass('active');
        $('.sec5 .gr').removeClass('active');
        switch (data_menus) {
            case '1':
                $('.sec5 .gr[data-menus="1"]').addClass('active');
                break;
            case '2':
                $('.sec5 .gr[data-menus="2"]').addClass('active');
                break;
            case '3':
                $('.sec5 .gr[data-menus="3"]').addClass('active');
                break;
            case '4':
                $('.sec5 .gr[data-menus="4"]').addClass('active');
                break;
            case '5':
                $('.sec5 .gr[data-menus="5"]').addClass('active');
                break;
            case '6':
                $('.sec5 .gr[data-menus="6"]').addClass('active');
                break;
            case '7':
                $('.sec5 .gr[data-menus="7"]').addClass('active');
                break;
        }
        $(this).addClass('active');
    });

    $('.sec3 .cont').hover(function() {
        $(this).find('.block_anime').stop().animate({
            opacity: "0.0"
        }, 750);
        $(this).find('.block_hov[data-hov="hov1"]').stop().animate({
            opacity: "1.0"
        }, 100).animate({
            top: "-19",
            right: "-50"
        }, 1000);
        $(this).find('.block_hov[data-hov="hov2"]').stop().animate({
            opacity: "1.0"
        }, 100).animate({
            bottom: "-11",
            right: "-50"
        }, 1000);
        $(this).find('.block_hov[data-hov="hov3"]').stop().animate({
            opacity: "1.0"
        }, 100).animate({
            top: "-3",
            left: "4"
        }, 1000);
        $(this).find('.block_hov[data-hov="hov4"]').stop().animate({
            opacity: "1.0"
        }, 100).animate({
            bottom: "42",
            left: "3"
        }, 500);
    }, function() {
        $(this).find('.block_anime').animate({
            opacity: "1.0"
        }, 750);
        $(this).find('.block_hov[data-hov="hov1"]').animate({
            top: "1",
            right: "0"
        }, 500);
        $(this).find('.block_hov[data-hov="hov2"]').animate({
            bottom: "-11",
            right: "0"
        }, 500);
        $(this).find('.block_hov[data-hov="hov3"]').animate({
            top: "17",
            left: "4"
        }, 500);
        $(this).find('.block_hov[data-hov="hov4"]').animate({
            bottom: "42",
            left: "3"
        }, 500);
    });

    $('.foot .verh, .point_slide').click(function() {
        $.fn.fullpage.moveTo($(this).attr('href'));
    });
    $('.mouse').click(function() {
        $.fn.fullpage.moveTo($(this).attr('href'));
    });

}

function start_m() {

    sliders_m();

    $('body').addClass('pre-loaded');

    $('.foot .verh').click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top - 73
        }, 1000);
    });

    $('.menu_open .mena_p').click(function(e) {
        e.preventDefault();
        if ($(this).attr('href') == '#sec2') {
            $("html, body").animate({
                scrollTop: $($(this).attr('href')).offset().top + 80
            }, 1000);
        } else {
            $("html, body").animate({
                scrollTop: $($(this).attr('href')).offset().top - 73
            }, 1000);
        }
        $('.menu_open').removeClass('active');
        menu_active = 0;
    });

    $('.sec3 .cont').click(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).find('.block_anime').stop().animate({
                opacity: "0.0"
            }, 750);
            $(this).find('.block_hov[data-hov="hov1"]').stop().animate({
                opacity: "1.0"
            }, 100).animate({
                top: "-19",
                right: "-50"
            }, 1000);
            $(this).find('.block_hov[data-hov="hov2"]').stop().animate({
                opacity: "1.0"
            }, 100).animate({
                bottom: "-11",
                right: "-50"
            }, 1000);
            $(this).find('.block_hov[data-hov="hov3"]').stop().animate({
                opacity: "1.0"
            }, 100).animate({
                top: "-3",
                left: "4"
            }, 1000);
            $(this).find('.block_hov[data-hov="hov4"]').stop().animate({
                opacity: "1.0"
            }, 100).animate({
                bottom: "42",
                left: "3"
            }, 500);
        } else {
            $(this).removeClass('active');
            $(this).find('.block_anime').animate({
                opacity: "1.0"
            }, 750);
            $(this).find('.block_hov[data-hov="hov1"]').animate({
                top: "1",
                right: "0"
            }, 500);
            $(this).find('.block_hov[data-hov="hov2"]').animate({
                bottom: "-11",
                right: "0"
            }, 500);
            $(this).find('.block_hov[data-hov="hov3"]').animate({
                top: "17",
                left: "4"
            }, 500);
            $(this).find('.block_hov[data-hov="hov4"]').animate({
                bottom: "42",
                left: "3"
            }, 500);
        }

    });
}

$(document).ready(function() {

    if (window_w <= 768 && isMobile() == true) {
        $('#viewport').attr('content', 'width=480');
    } else {
        $('#viewport').attr('content', 'width=device-width');
    }

    isMobile();

    if (window_w > 768 && isMobile() == false) {

        start_d();

    } else {

        start_m();

    }

    map();

    $('.video, .video_t').click(function(e) {
        e.preventDefault();
        $('.video_pop').arcticmodal();
        $('.vid_open').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + $(this).data('video') + '?autoplay=1;rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')
    });
    $('.video_pop .close').click(function(e) {
        e.preventDefault();
        $(this).parent().arcticmodal('close');
        $('.vid_open').children('iframe').remove();
    });

    $('.btn_pop1').click(function() {
        $('#pop1').arcticmodal();
    });
    $('.btn_pop2').click(function() {
        $('#pop2').arcticmodal();
    });
    $('.btn_pop3').click(function() {
        $('#pop3').arcticmodal();
    });

    $('.btn_tabl').click(function() {
        $('.tablica').arcticmodal();
    });
    $('.btn_ras').click(function() {
        $('.tablica').arcticmodal('close');
        $('#pop4').arcticmodal();
    });

    $('.infoin').click(function() {
        $('.infopop').arcticmodal();
    });

    $('.close, .clos_b').click(function(e) {
        e.preventDefault();
        $(this).parent().arcticmodal('close');
    });

    //menu
    var menu_active = 0;
    $('.menu_btn').click(function(e) {
        e.preventDefault();
        if (!$('.menu_open').hasClass('active')) {
            $('.menu_open').addClass('active');
            menu_active = 1;
        } else {
            $('.menu_open').removeClass('active');
            menu_active = 0;
        }
    });

    $('.menu_open .close_m').click(function(e) {
        e.preventDefault();
        $('.menu_open').removeClass('active');
        menu_active = 0;
    });

    var data_day, data_slider, data_menus;

    $('.sec2 .day_gr .day').click(function(e) {
        data_day = $(this).attr('data-day');
        $('.sec2 .day_gr .day').removeClass('active');
        $('.sec2 .bg').removeClass('active');
        switch (data_day) {
            case 'day0':
                $('.sec2 .bg[data-dom="day0"]').addClass('active');
                $('.sec2 .day_gr .day[data-day="day0"]').addClass('active');
                break;
            case 'day1':
                $('.sec2 .bg[data-dom="day1"]').addClass('active');
                $('.sec2 .day_gr .day[data-day="day1"]').addClass('active');
                break;
            case 'day2':
                $('.sec2 .bg[data-dom="day2"]').addClass('active');
                $('.sec2 .day_gr .day[data-day="day2"]').addClass('active');
                break;
            case 'day3':
                $('.sec2 .bg[data-dom="day3"]').addClass('active');
                $('.sec2 .day_gr .day[data-dom="day3"]').addClass('active');
                break;
            case 'day4':
                $('.sec2 .bg[data-dom="day4"]').addClass('active');
                $('.sec2 .day_gr .day[data-dom="day4"]').addClass('active');
                break;
        }
        $(this).addClass('active');
    });


    var data_ug, data_ugt;

    $('.sec8 .ugol .ug_point').hover(function() {
        $(this).find('.loop').stop().animate({
            opacity: "1.0"
        }, 250).addClass('active');
        $('.sec8 .ugol .ug_point').find('.loop').removeClass('op');
        $('.sec8 .menu_uhol .mena').removeClass('active');
        data_ug = $(this).attr('data-ug');
        switch (data_ug) {
            case '1':
                $('.sec8 .menu_uhol .mena[data-ugt="1"]').addClass('active');
                break;
            case '2':
                $('.sec8 .menu_uhol .mena[data-ugt="2"]').addClass('active');
                break;
            case '3':
                $('.sec8 .menu_uhol .mena[data-ugt="3"]').addClass('active');
                break;
            case '5':
                $('.sec8 .menu_uhol .mena[data-ugt="5"]').addClass('active');
                break;
            case '7':
                $('.sec8 .menu_uhol .mena[data-ugt="7"]').addClass('active');
                break;
            case '8':
                $('.sec8 .menu_uhol .mena[data-ugt="8"]').addClass('active');
                break;
            case '9':
                $('.sec8 .menu_uhol .mena[data-ugt="9"]').addClass('active');
                break;
            case '10':
                $('.sec8 .menu_uhol .mena[data-ugt="10"]').addClass('active');
                break;
            case '11':
                $('.sec8 .menu_uhol .mena[data-ugt="11"]').addClass('active');
                break;
        }
    }, function() {
        $(this).find('.loop').stop().animate({
            opacity: "0.0"
        }, 1000).removeClass('active');
    });


    $('.sec8 .menu_uhol .mena').hover(function() {
        $('.sec8 .menu_uhol .mena').removeClass('active');
        $('.sec8 .ugol .ug_point').find('.loop').removeClass('op');
        $('.sec8 .ugol .ug_point').find('.loop').removeClass('active');
        data_ugt = $(this).attr('data-ugt');
        switch (data_ugt) {
            case '1':
                $('.sec8 .ugol .ug_point[data-ug="1"]').find('.loop').stop().animate({
                    opacity: "1.0"
                }, 250).addClass('active');
                break;
            case '2':
                $('.sec8 .ugol .ug_point[data-ug="2"]').find('.loop').stop().animate({
                    opacity: "1.0"
                }, 250).addClass('active');
                break;
            case '3':
                $('.sec8 .ugol .ug_point[data-ug="3"]').find('.loop').stop().animate({
                    opacity: "1.0"
                }, 250).addClass('active');
                break;
            case '5':
                $('.sec8 .ugol .ug_point[data-ug="5"]').find('.loop').stop().animate({
                    opacity: "1.0"
                }, 250).addClass('active');
                break;
            case '7':
                $('.sec8 .ugol .ug_point[data-ug="7"]').find('.loop').stop().animate({
                    opacity: "1.0"
                }, 250).addClass('active');
                break;
            case '8':
                $('.sec8 .ugol .ug_point[data-ug="8"]').find('.loop').stop().animate({
                    opacity: "1.0"
                }, 250).addClass('active');
                break;
            case '9':
                $('.sec8 .ugol .ug_point[data-ug="9"]').find('.loop').stop().animate({
                    opacity: "1.0"
                }, 250).addClass('active');
                break;
            case '10':
                $('.sec8 .ugol .ug_point[data-ug="10"]').find('.loop').stop().animate({
                    opacity: "1.0"
                }, 250).addClass('active');
                break;
            case '11':
                $('.sec8 .ugol .ug_point[data-ug="11"]').find('.loop').stop().animate({
                    opacity: "1.0"
                }, 250).addClass('active');
                break;
        }
    }, function() {
        $('.sec8 .ugol .ug_point').find('.loop').stop().animate({
            opacity: "0.0"
        }, 1000).removeClass('active');
        $(this).addClass('active');
    });

    //geo
    function getURLParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
    }

    function run_geo(geo_url) {
        $.ajax({
            type: 'GET',
            url: geo_url,
            dataType: 'xml',
            success: function(xml) {
                $(xml).find('ip').each(function() {
                    var city = $(this).find('city').text();
                    var region = $(this).find('region').text();
                    if (city != region) {
                        var ipg = city + ', ' + region;
                    } else {
                        var ipg = city;
                    }
                    $('<input type="hidden" />').attr({
                        name: 'location',
                        class: 'location',
                        value: ipg
                    }).appendTo("form");
                });
            }
        });
    }
    $.get("http://ipinfo.io", function(response) {
        geo_url = 'http://ipgeobase.ru:7020/geo?ip=' + response.ip;
        run_geo(geo_url);
    }, "jsonp");
    utm = [];
    $.each(["utm_source", "utm_medium", "utm_campaign", "utm_term", 'source_type', 'source', 'position_type', 'position', 'added', 'creative', 'matchtype'], function(i, v) {
        $('<input type="hidden" />').attr({
            name: v,
            class: v,
            value: function() {
                if (getURLParameter(v) == undefined) return '-';
                else return getURLParameter(v)
            }
        }).appendTo("form")
    });
    $('<input type="hidden" />').attr({
        name: 'url',
        value: document.location.href
    }).appendTo("form");
    $('<input type="hidden" />').attr({
        name: 'title',
        value: document.title
    }).appendTo("form");

    //mail
    function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    };

    $('input[name="email"]').blur(function() {
        if (!validateEmail($(this).val())) {
            $(this).addClass('error-input');
            $(this).closest('.inp').find('.err').addClass('active');
        }
    });
    $('input[name="email"]').focus(function() {
        $(this).removeClass('error-input');
        $(this).closest('.inp').find('.err').removeClass('active');
    });

    //name  

    $('input[name="name"]').blur(function() {
        if ($(this).val().length < 2) {
            $(this).addClass('error-input');
            $(this).closest('.inp').find('.err').addClass('active');
        }
    });
    $('input[name="name"]').focus(function() {
        $(this).removeClass('error-input');
        $(this).closest('.inp').find('.err').removeClass('active');
    });

    //phone

    $('input[name="phone"]').mask('+7 (999) 999-99-99');
    $('input[name="phone"]').blur(function() {
        if ($(this).val().length != 18) {
            $(this).addClass('error-input');
            $(this).closest('.inp').find('.err').addClass('active');
        }
    });
    $('input[name="phone"]').focus(function() {
        $(this).removeClass('error-input');
        $(this).closest('.inp').find('.err').removeClass('active');
    });

    //отправка формы

    $('form').submit(function(e) {
        e.preventDefault();
        $(this).find('.input').trigger('blur');
        if (!$(this).find('.input').hasClass('error-input')) {
            var type = $(this).attr('method');
            var url = $(this).attr('action');
            var data = $(this).serialize();
            var track_event = $(this).find('input[name="event"]').val();
            $.ajax({
                type: type,
                url: url,
                data: data,
                success: function() {
                    $.arcticmodal('close');
                    $('.sps').arcticmodal();
                    // $('input').val('');
                    // yaCounter41857094.reachGoal(track_event);
                    // ga('send', 'event', 'submit', track_event);
                }
            });
        }
    });

    $('.sec4 .page').hover(function() {
        $('.sec4 .page.active').css({
            "padding": "0px 10px",
            "background": "none",
            "color": "white"
        });
    }, function() {
        // $('.sec4 .page.active').css({
        //     "padding": "0px 20px",
        //     "background-color": "#d8a313",
        //     "color": "#222"
        // });
        $('.sec4 .page.active').removeAttr('style');
    });

    $(".fancy").fancybox({
        helpers: {
            overlay: {
                locked: false
            },
            title: null
        }

    });

    var data_menusn;

    //style select
    $('.slct').click(function() {
        /* Заносим выпадающий список в переменную */
        var dropBlock = $(this).parent().find('.drop');
        /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
        if (dropBlock.is(':hidden')) {
            dropBlock.slideDown('fast');
            /* Выделяем ссылку открывающую select */
            $(this).addClass('active');
            /* Работаем с событием клика по элементам выпадающего списка */
            $('.drop').find('li').click(function() {
                /* Заносим в переменную HTML код элемента
                списка по которому кликнули */
                var selectResult = $(this).html();
                /* Находим наш скрытый инпут и передаем в него
                значение из переменной selectResult */
                $(this).parent().parent().find('input').val(selectResult);
                /* Передаем значение переменной selectResult в ссылку которая
                открывает наш выпадающий список и удаляем активность */
                $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
                /* Скрываем выпадающий блок */
                dropBlock.slideUp('fast');
                data_menusn = $(this).attr('data-mena');
                $('.sec5 .gr').removeClass('active');
                switch (data_menusn) {
                    case '1':
                        $('.sec5 .gr[data-menus="1"]').addClass('active');
                        break;
                    case '2':
                        $('.sec5 .gr[data-menus="2"]').addClass('active');
                        break;
                    case '3':
                        $('.sec5 .gr[data-menus="3"]').addClass('active');
                        break;
                    case '4':
                        $('.sec5 .gr[data-menus="4"]').addClass('active');
                        break;
                    case '5':
                        $('.sec5 .gr[data-menus="5"]').addClass('active');
                        break;
                    case '6':
                        $('.sec5 .gr[data-menus="6"]').addClass('active');
                        break;
                    case '7':
                        $('.sec5 .gr[data-menus="7"]').addClass('active');
                        break;
                }
            });
            $('section').click(function() {
                dropBlock.slideUp('fast');
            });
            /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
        } else {
            $(this).removeClass('active');
            dropBlock.slideUp('fast');
        }
        // $(this).removeClass('error-input');
        /* Предотвращаем обычное поведение ссылки при клике */
        return false;
    });



});
