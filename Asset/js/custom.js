$(document).ready(function() {





    // debugger

    // $('.nav-link').has('.active').parent().css({ "border": "1px solid #000" });

    $("#mySidenav a").click(function() {

        $("#mySidenav").removeClass("show", 1000, "easeInOutQuad");

        $(".navbar-toggler").addClass("collapsed", 1000, "easeInOutQuad");

    });

});



$(window).scroll(function() {

    var scrollDistance = $(window).scrollTop();

    var y = $(window).height() / 2;



    // Show/hide menu on scroll

    //if (scrollDistance >= 850) {

    //		$('nav').fadeIn("fast");

    //} else {

    //		$('nav').fadeOut("fast");

    //}



    // Assign active class to nav links while scolling

    $('.page-section').each(function(i) {

        if ($(this).position().top - y <= scrollDistance) {

            // alert(y);

            $('.navigation a.active').removeClass('active');

            $('.navigation a').eq(i).addClass('active');

        }

    });

}).scroll();





jQuery(function($) {



    // Function which adds the 'animated' class to any '.animatable' in view

    var doAnimations = function() {



        // Calc current offset and get all animatables

        var offset = $(window).scrollTop() + $(window).height(),

            $animatables = $('.animatable');



        // Unbind scroll handler if we have no animatables

        if ($animatables.length == 0) {

            $(window).off('scroll', doAnimations);

        }



        // Check all animatables and animate them if necessary

        $animatables.each(function(i) {

            var $animatable = $(this);

            if (($animatable.offset().top + $animatable.height() - 30) < offset) {

                $animatable.removeClass('animatable').addClass('animated');

            }

        });



    };



    // Hook doAnimations on scroll, and trigger a scroll

    $(window).on('scroll', doAnimations);

    $(window).trigger('scroll');



});



// Adjusted version of https://codepen.io/bramus/pen/yikfd

// This version also reverses the animation when elements that got slide into view

// succesively slide out of view again.



// In case you're wondering about that `.css('top', $animatable.css('top'))` part:

// -> it's the magic part in this code as it triggers layout, so the browser will 

// render after having deleted the animate-in class and having added the animate-out

// class. That way the animation-play-state will actually change from running to 

// paused to running again, thus triggering the start of the animation



// jQuery(function($) {



//     // Function which adds the 'animated' class to any '.animatable' in view

//     var doAnimations = function() {



//         // Calc current offset and get all animatables

//         var offset = $(window).scrollTop() + $(window).height(),

//             $animatables = $('.animatable');



//         // Check all animatables and animate them if necessary

//         $animatables.each(function(i) {

//             var $animatable = $(this);



//             // Items that are "above the fold"

//             if (($animatable.offset().top + $animatable.height() + 50) < offset) {



//                 // Item previously wasn't marked as "above the fold": mark it now

//                 if (!$animatable.hasClass('animate-in')) {

//                     $animatable.removeClass('animate-out').css('top', $animatable.css('top')).addClass('animate-in');

//                 }



//             }



//             // Items that are "below the fold"
//             else if (($animatable.offset().top + $animatable.height() + 50) > offset) {



//                 // Item previously wasn't marked as "below the fold": mark it now

//                 if ($animatable.hasClass('animate-in')) {

//                     $animatable.removeClass('animate-in').css('top', $animatable.css('top')).addClass('animate-out');

//                 }



//             }



//         });



//     };



//     // Hook doAnimations on scroll, and trigger a scroll

//     $(window).on('scroll', doAnimations);

//     $(window).trigger('scroll');



// });

(function($) {
    $.fn.sectionsnap = function(options) {
        var settings = $.extend({
            'delay': 100 // time dilay (ms)
                ,
            'selector': ".section" // selector
                ,
            'reference': .9 // % of window height from which we start
                ,
            'animationTime': 400 // animation time (snap scrolling)
                ,
            'offsetTop': 0 // offset top (no snap before scroll reaches this position)
                ,
            'offsetBottom': 0 // offset bottom (no snap after bottom - offsetBottom)
        }, options);

        var $wrapper = this,
            direction = 'down',
            currentScrollTop = $(window).scrollTop(),
            scrollTimer, animating = false;

        // check the direction
        var updateDirection = function() {
            if ($(window).scrollTop() >= currentScrollTop)
                direction = 'down';
            else
                direction = 'up';
            currentScrollTop = $(window).scrollTop();
        }

        // return the closest element (depending on direction)
        var getClosestElement = function() {
            var $list = $wrapper.find(settings.selector),
                wt = $(window).scrollTop(),
                wh = $(window).height(),
                refY = wh * settings.reference,
                wtd = wt + refY - 1,
                $target;

            if (direction == 'down') {
                $list.each(function() {
                    var st = $(this).position().top;
                    if ((st > wt) && (st <= wtd)) {
                        $target = $(this);
                        return false; // just to break the each loop
                    }
                });
            } else {
                wtd = wt - refY + 1;
                $list.each(function() {
                    var st = $(this).position().top;
                    if ((st < wt) && (st >= wtd)) {
                        $target = $(this);
                        return false; // just to break the each loop
                    }
                });
            }
            return $target;
        }

        // snap
        var snap = function() {
                var $target = getClosestElement();
                if ($target) {
                    animating = true;
                    $('html, body').animate({
                        scrollTop: ($target.offset().top)
                    }, settings.animationTime, function() {
                        window.clearTimeout(scrollTimer);
                        animating = false;
                    });
                }
            }
            // on window scroll
        var windowScroll = function() {
            if (animating)
                return;
            var st = $(window).scrollTop();
            if (st < settings.offsetTop)
                return;
            if (st > ($("html").height() - $(window).height() - settings.offsetBottom))
                return;
            updateDirection();
            window.clearTimeout(scrollTimer);
            scrollTimer = window.setTimeout(snap, settings.delay);
        }
        $(window).scroll(windowScroll);
        return this;
    };
})(jQuery);

$(document).ready(function() {

});