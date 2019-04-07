$(document).ready(function () {
    $('.features-section').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('stickey');
        } else {
            $('nav').removeClass('stickey');
        }
    }, {
            offset: '60px'
        }
    );

    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.plans-section').offset().top }, 1000)
    })
    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({ scrollTop: $('.features-section').offset().top }, 1000)
    })



    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

    $('.js--wp-1').waypoint(function () {
        $('.js--wp-1').addClass('animated fadeIn')
    }, {
            offset: "50%"
        }
    )
    $('.js--wp-2').waypoint(function () {
        $('.js--wp-2').addClass('animated fadeInUp')
    }, {
            offset: "50%"
        }
    )
    $('.js--wp-3').waypoint(function () {
        $('.js--wp-3').addClass('animated fadeIn')
    }, {
            offset: "50%"
        }
    )
    $('.js--wp-4').waypoint(function () {
        $('.js--wp-4').addClass('animated pulse')
    }, {
            offset: "50%"
        }
    )

    $('.mobile-nav-icon').click(function() {

        var nav = $('.main-nav');
        var icon = $('.mobile-nav-icon ion-icon');
        nav.slideToggle(200);
        
        if (icon.hasClass("menu")) {
            icon.attr("name","close");
            icon.removeClass("menu");
            icon.addClass("close");
        } else {
            icon.attr("name","menu");
            icon.removeClass("close");
            icon.addClass("menu");
            
        }
        
    })
})
