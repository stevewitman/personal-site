$(document).ready(function() {


    /* Scroll hire me button to contact page */
    $('.hire-me').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    /* For Bootstrap current state on portfolio sorting */

    $('ul.nav-pills li a').click(function(e) {
        $('ul.nav-pills li.active').removeClass('active')
        $(this).parent('li').addClass('active')
    })

    /* portfolio mixitup */

    $(window).load(function() {
        var $container = $('.grid-wrapper');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.grid-controls li a').click(function() {
            $('.grid-controls .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });


    /* Magnific Popup */
    $('.grid-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });



    /* Sticky menu */
    $(".navbar").sticky({
        topSpacing: 0
    });


    /* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
    });

    /* Charts*/

    $('.chart').waypoint(function() {
        $(this).easyPieChart({
            barColor: '#3498db',
            size: '150',
            easing: 'easeOutBounce',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'
    });


    /* VEGAS Home Slider */

    $.vegas('slideshow', {
        backgrounds: [

            {
                src: 'img/slider/IMAG0034a.jpg',
                fade: 1000
            },
            {
                src: 'img/slider/IMG_2810d.jpg',
                fade: 1000
            },
            {
                src: 'img/slider/IMG_4919.jpg',
                fade: 1000
            },
            {
                src: 'img/slider/IMG_4967.jpg',
                fade: 1000
            },
            {
                src: 'img/slider/IMG_5034.jpg',
                fade: 1000
            },
            {
                src: 'img/slider/IMG_5139.jpg',
                fade: 1000
            },
            {
                src: 'img/slider/IMG_5340.jpg',
                fade: 1000
            },
            {
                src: 'img/slider/IMG_8481.jpg',
                fade: 1000
            },
            {
                src: 'img/slider/IMG_1766.jpg',
                fade: 1000
            },
            {
                src: 'img/slider/IMG_4411.jpg',
                fade: 1000
            },
            {
                src: 'img/slider/IMG_6891.jpg',
                fade: 1000
            },
            {
                src: 'img/slider/15c.jpg',
                fade: 1000
            },
            {
                src: 'img/slider/WPbase2.jpg',
                fade: 1000
            },


        ]
    })('overlay', {
        src: 'img/overlays/16.png'
    });
    $("#vegas-next").click(function() {
        $.vegas('next');
    });
    $("#vegas-prev").click(function() {
        $.vegas('previous');
    });


});
