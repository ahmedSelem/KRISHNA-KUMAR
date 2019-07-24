/*global js, console, $, alert*/

(function () {
    'use strict';
    var header = $('header'),
        headerInfo = $('.header-info'),
        placeAttr = '',
        typer = $('header h1').data('text'),
        i = 0,
        theTextLength = typer.length,
        theTyper = setInterval(function () {  // Create typer Writer effect
            $('header h1').each(function () {
                $(this).html($(this).html() + typer[i]);
            });
            i += 1;
            if (i >= theTextLength) {
                clearInterval(theTyper);
            }
        }, 200);
        
    // Header Height dynamic
    header.height($(window).height());
    
    // Header Info To Center Center
    headerInfo.css('paddingTop', ($(window).height()) - 500);
    
    //Aside Show When Click Icon
    
    $('aside .fa-align-justify').on('click', function () {
        var myAsideIcon = $('aside .fa-align-justify').parent('aside');
        myAsideIcon.toggleClass('is-visible');
        if (myAsideIcon.hasClass('is-visible')) {
            myAsideIcon.animate({
                'left': 0
            }, 500);
        } else {
            myAsideIcon.animate({
                'left': '-' + $('aside').innerWidth()
            }, 500);
        }
    });
    
    $('aside .linked li').on('click', function () {
       
        $(':root').css('--main-color', $(this).data('color'));
        
    });
    
    // Aside Click Go To Link
    
    //Aside Links
    $('aside .linked ul li').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('link')).offset().top
        }, 2000);
                                
    });
    
    //About Me (Width & height Of Icon)
    $('.about .about-interest .about-icon > li').css('height', $('.about-interest .about-icon').innerWidth());
    
    // About Me (Show & hide More Hobbies)
    $('.about .hidden-xs .row:last-of-type + button').on('click', function () {
        if ($(this).prev('.row').has('property').css('display', 'none')) {
            $(this).prev('.row').toggleClass('display');
            if ($(this).prev('.row').hasClass('display')) {
                $(this).prev('.row').css('display', 'flex');
            } else {
                $(this).prev('.row').css('display', 'none');
            }
        } else {
            $('.about .hidden-xs .row:last-of-type').css('display', 'flex');
        }
    });
    
    // My Works links transparent
    $('.works ul li').on('click', function () {
        var images = $('.works .images img');
        $(this).addClass('active').siblings('.works ul li').removeClass('active');
        
        // images opacty
        if ($(this).data('class') === '.all') {
            images.css('opacity', 1);
        } else {
            images.css('opacity', '.2');
            $($(this).data('class')).css('opacity', 1);
        }
    });
    
    // My Client Width Of Slider Width (Dynamic)
    (function () {
        setInterval(function () {
            $('.client .slider').animate({left: '-200%'}, 500,  function () {
                $(this).css('left', '-100%');
                $('.client-slider').last().after($('.client-slider').first());
            });
        }, 4000);
    }());
    
    
    // Asterisk on required and Show & Hide Placeholder
    $('.contact .form form input, textarea').focus(function () {
        
        $(this).next('span').fadeOut();
        
        // Hide Placeholder
        placeAttr = $(this).attr('placeholder');
        $(this).attr('placeholder', '');
    }).blur(function () {
        //Show Placeholder
        $(this).attr('placeholder', placeAttr);
        
        if ($(this).val() === '') {
            $(this).next('span').fadeIn().css('color', 'rgb(231, 76, 60');
        } else {
            $(this).next('span').fadeOut();
        }
    });
    
    
    // Resize Window 
    $(window).resize(function () {
        
        // Header Height dynamic
        header.height($(window).height());
        
        // Header Info To Center Center
        headerInfo.css('paddingTop', ($(window).height()) - 500);
        
        //About Me (Width & height Of Icon)
        $('.about .about-interest .about-icon > li').css({
            'height': $('.about-interest .about-icon').innerWidth()
        });
        
    });
   
    //Function For Show Button Fixed To Top
    (function () {
        var fixedButton = $('.fixed-button');
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 1000) {
                fixedButton.fadeIn(1000);
            } else {
                fixedButton.fadeOut(1000);
            }
        });
        fixedButton.on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
        });
    }());
    
    // Trigger NIcescroll
    $('body').niceScroll({
        cursorborder: 0,
        cursorcolor:  $(':root').css('--main-color'),
        scrollspeed: 100
    });
    
    // Section Loading 
    
    $(window).on('load', function () {
       
        $('.spinner').delay(300).fadeOut(500, function () {
            $('.loading-overlay').fadeOut(2000);
        });
        
    });
    
}());







