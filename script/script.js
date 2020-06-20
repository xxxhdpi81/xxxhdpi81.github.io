$(function () {
    justin.init();
})

const justin = {
    init: function () {
        justin.setStatebyScroll();
        justin.handleNav();
        justin.setColor();
        justin.hoverEffect();
    },

    setStatebyScroll: function () {
        $(window).on('scroll', function () {
            const windowHeight = $(window).innerHeight();
            console.log(windowHeight);

            const scrollTop = $(window).scrollTop();
            console.log('scrollTop', scrollTop);

            if(scrollTop > innerHeight / 2) {
                $('.header').fadeIn(400);
            } else {
                $('.header').fadeOut(400);
            }

            if(scrollTop > 60) {
                $('html').addClass('show-about-me')
            } else {
                $('html').removeClass('show-about-me')
            }

            /*
            if ( scrollTop > 60 ){
                $('.html').addClass('hide-txt')
            } else {
                $('.html').removeClass('hide-txt')
            }

             */

        })
    },

    handleNav: function () {
        $('.header ul li').on('mouseenter', function () {
            $(this).find('a').addClass('list-color')
        }).on('mouseleave', function () {
            $(this).find('a').removeClass('list-color')
        })

    },

    setColor: function () {
        $('.btn-settings').on('click', function () {
            $('html').toggleClass('open-set-color');
        })
    },


    hoverEffect: function () {
        $('.card')
            .on('mouseenter', function () {
                $(this).addClass('on')
            })
            .on('mouseleave', function () {
                $(this).removeClass('on')
            })
    }

}

