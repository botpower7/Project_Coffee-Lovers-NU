// กำหนดให้ว่า เมื่อเลื่อน scroll ลง ให้เปลี่ยน class เป็น navbar-inverse (ปกติจะเป็น navbar-default)
// จากนั้นเราก็จะไปแก้ที่ style.css เพื่อเปลี่ยนสี ขนาด และใส่ลูกเล่น Transition ตามใจชอบได้เลย

$(document).ready(function() {
    var $window = $(window);

    function checkWidth() {
        if ($window.width() < 767) {
            $('.navTop').show();
            $(window).scroll(function() {
                if ($('.navTop').offset().top > 50) {
                    $('.navTop').addClass('nav-bg');
                } else {
                    $('.navTop').removeClass('nav-bg shadow-box-xs');
                    return false;
                }
            });
        } else {
            $('.navTop').hide();
            $(window).scroll(function() {
                if ($('#js-bootstrap-offcanvas').offset().top > 50) {
                    $('#js-bootstrap-offcanvas').removeClass('navbar-default');
                    $('#js-bootstrap-offcanvas').addClass('navbar-inverse');
                } else {
                    $('#js-bootstrap-offcanvas').removeClass('navbar-inverse');
                    $('#js-bootstrap-offcanvas').addClass('navbar-default');
                    return false;
                }
            });
        }
    }
    checkWidth();
    $(window).resize(checkWidth);
});

$(document).ready(function() {
    $(window).stellar();

});

$(document).ready(

    function() {

        $("html").niceScroll({
            cursorcolor: "rgba(30,30,30,.5)",
            zindex: 999,
            scrollspeed: 100,
            mousescrollstep: 50,
            cursorborder: "0px solid #fff",
        });


    }

);

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict
