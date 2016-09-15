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



$(function() {
    $(".rslides").responsiveSlides();
});
$(".rslides").responsiveSlides({
    auto: true, // Boolean: Animate automatically, true or false
    speed: 500, // Integer: Speed of the transition, in milliseconds
    timeout: 4000, // Integer: Time between slide transitions, in milliseconds
    pager: false, // Boolean: Show pager, true or false
    nav: false, // Boolean: Show navigation, true or false
    random: false, // Boolean: Randomize the order of the slides, true or false
    pause: false, // Boolean: Pause on hover, true or false
    pauseControls: true, // Boolean: Pause when hovering controls, true or false
    prevText: "Previous", // String: Text for the "previous" button
    nextText: "Next", // String: Text for the "next" button
    maxwidth: "", // Integer: Max-width of the slideshow, in pixels
    navContainer: "", // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: "", // Selector: Declare custom pager navigation
    namespace: "rslides", // String: Change the default namespace used
    before: function() {}, // Function: Before callback
    after: function() {} // Function: After callback
});
