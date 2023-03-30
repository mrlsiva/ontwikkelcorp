 $(document).scroll(function() {
     var y = $(this).scrollTop();
     if (y > 0.1) {
         $('.bottom').slideDown();
     } else {
         $('.bottom').slideUp();
     }
 });

 $(".flex-slide").each(function() {
     $(this).hover(
         function() {
             $(this).find(".flex-title").css({
                 top: "30%"
             });
             $(this).find(".flex-about").css({
                 opacity: "1"
             });
         },
         function() {
             $(this).find(".flex-title").css({
                 top: "50%"
             });
             $(this).find(".flex-about").css({
                 opacity: "0"
             });
         }
     );
 });
 $(window).on('scroll resize');

 var myFullpage = new fullpage('#fullpage', {
     anchors: ['firstPage', 'secondPage', '3rdPage'],
     responsiveWidth: 900,
     afterResponsive: function(isResponsive) {

     }
 });


 $('#related-products').owlCarousel({
     loop: true,
     margin: 20,
     dots: false,
     nav: false,
     autoplay: true,
     autoplaySpeed: 200,
     navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
     responsiveClass: true,
     responsive: {
         0: {
             items: 1
         },
         360: {
             items: 1
         },
         768: {
             items: 2
         },
         1000: {
             items: 3
         }
     }
 });
 //  $(document).ready(function(){
 //       $(".logo-wrapper").mouseenter(function() {
 //           $('.product-navigation').stop().show();
 //       });

 //       $(".logo-wrapper, .product-navigation").mouseleave(function() {
 //         if(!$('.product-navigation').is(':hover')){
 //           $('.product-navigation').hide();
 //         };
 //       });
 // });
 var sectionSecond = new vidbg('.section-second', {
     mp4: 'https://enlogic.com/videos/Home_BG.mp4',
     webm: 'media/webm_video.webm',
     poster: 'https://gourmethouse.com/public/frontend/images/video/home-bg.jpg',
     overlay: true,
     overlayColor: '#0f1010',
     overlayAlpha: 0.5,
 })
 var sectionHomeMobile = new vidbg('.section-second-mobile', {
     mp4: 'https://enlogic.com/videos/mobile-home/Home_03_mobile.mp4',
     webm: 'media/webm_video.webm',
     poster: 'https://gourmethouse.com/public/frontend/images/video/home-bg.jpg',
     overlay: true,
     overlayColor: '#0f1010',
     overlayAlpha: 0.5,
 })
 var video_url1 = document.getElementById('video_url').value;
 var video_url2 = document.getElementById('video_url').value;
 var video_url3 = document.getElementById('video_url').value;





 var productVideo = new vidbg('.product-video', {
     mp4: video_url1,
     webm: 'media/webm_video.webm',
     poster: 'https://gourmethouse.com/public/frontend/images/video/landing.jpg',
     overlay: true,
     overlayColor: '#0f1010',
     overlayAlpha: 0.3,
 })

 var sectionTasting = new vidbg('.section-tasting', {
     mp4: video_url2,
     webm: 'media/webm_video.webm',
     poster: 'https://gourmethouse.com/public/frontend/images/video/Caviar_poster.png',
     overlay: true,
     overlayColor: '#0f1010',
     overlayAlpha: 0.1,
 })

 var sectionSalmon = new vidbg('.section-salmon', {
     mp4: 'https://enlogic.com/videos/salmon-landing.mp4',
     webm: 'media/webm_video.webm',
     poster: 'https://gourmethouse.com/public/frontend/images/video/Beautiful_Salmon.jpg',
     overlay: true,
     overlayColor: '#0f1010',
     overlayAlpha: 0.1,
 })

 var sectionAboutus = new vidbg('.section-about', {
         mp4: video_url3,
         webm: 'media/webm_video.webm',
         poster: 'https://gourmethouse.com/public/frontend/images/video/landing.jpg',
         overlay: true,
         overlayColor: '#0f1010',
         overlayAlpha: 0.1,
     })
     // Lightcase start

 $(document).ready(function() {
     $('a[data-rel^=lightcase]').lightcase();
 });

 // Lightcase end

 // fullpage start


 // fullpage end

 // owl start

 $('#breeder-owl').on('initialized.owl.carousel changed.owl.carousel', function(e) {
     if (!e.namespace) {
         return;
     }
     var carousel = e.relatedTarget;
     $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
 }).owlCarousel({
     items: 1,
     loop: true,
     margin: 0,
     nav: true,
     navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
     dots: false,
     autoplay: true
 });

 $('#caviar-product-owl').on('initialized.owl.carousel changed.owl.carousel', function(e) {
     if (!e.namespace) {
         return;
     }
     var carousel = e.relatedTarget;
     $('.slider-counter2').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
 }).owlCarousel({
     items: 1,
     loop: true,
     margin: 0,
     nav: true,
     navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
     dots: false,
     slideSpeed: 90000,
     animateOut: 'fadeOut',
     autoplay: true
 });

 $('#related-products').owlCarousel({
     loop: false,
     margin: 20,
     dots: false,
     nav: false,
     navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
     responsiveClass: true,
     responsive: {
         0: {
             items: 1
         },
         360: {
             items: 1
         },
         768: {
             items: 2
         },
         1000: {
             items: 3
         }
     }
 });

 $('#about-wrap').owlCarousel({
     loop: true,
     margin: 10,
     dots: false,
     nav: false,
     navText: ["<img src='images/left-arrow.png'>", "<img src='images/right-arrow.png'>"],
     responsiveClass: true,
     items: 1,
     autoplay: true,
     autoplaySpeed: 200
 });
 // owl end

 // easy smooth scrolling start
 $("html").easeScroll({
     frameRate: 60,
     animationTime: 1000,
     stepSize: 200,
     pulseAlgorithm: !0,
     pulseScale: 8,
     pulseNormalize: 1,
     accelerationDelta: 20,
     accelerationMax: 1,
     keyboardSupport: !0,
     arrowScroll: 50
 });
 // easy smooth scrolling end

 // lightslider start
 $(document).ready(function() {
     $("#content-slider").lightSlider({
         loop: true,
         keyPress: true
     });
     $('#image-gallery').lightSlider({
         gallery: true,
         item: 1,
         verticalHeight: 100,
         thumbItem: 4,
         galleryMargin: 70,
         adaptiveHeight: true,
         thumbMargin: 10,
         speed: 500,
         auto: true,
         loop: true,
         onSliderLoad: function() {
             $('#image-gallery').removeClass('cS-hidden');
         }
     });
 });

 // lightslider end
 // quantity counter start
 $(document).ready(function() {
     $('.minus-btn').click(function() {
         var $input = $(this).parent().find('input');
         var count = parseInt($input.val()) - 1;
         count = count < 1 ? 1 : count;
         $input.val(count);
         $input.change();
         return false;
     });
     $('.plus-btn').click(function() {
         var $input = $(this).parent().find('input');
         $input.val(parseInt($input.val()) + 1);
         $input.change();
         return false;
     });
 });
 // quantity counter end





 $(".flex-slide").each(function() {
     $(this).hover(
         function() {
             $(this).find(".flex-title").css({
                 top: "30%"
             });
             $(this).find(".flex-about").css({
                 opacity: "1"
             });
         },
         function() {
             $(this).find(".flex-title").css({
                 top: "50%"
             });
             $(this).find(".flex-about").css({
                 opacity: "0"
             });
         }
     );
 });