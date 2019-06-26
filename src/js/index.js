jQuery(document).ready(function($) {
    $('li.menu-item a').click(function(e){
        e.preventDefault();
        const dropDown = $(this).parent().next();
        $('.drop-down').not(dropDown).slideUp('fast');
        dropDown.slideToggle('fast');
    });
    $('.line .menu-item').hover(function() {
        const left = $(this).offset().left - $('.line').offset().left,
            width = $(this).width();
        $('hr').css({
            'margin-left': left,
            'width'      : width
        })
    }).first().mouseenter().mouseleave();
    $('.menu-btn').on('click', function(e) {
        e.preventDefault();
        const nav = $('nav');
        $(this).toggleClass('menu-btn_active');
        // nav.toggleClass('menu-show');
        if(nav.is(':visible')){
            nav.slideUp('fast');
        } else {
            nav.slideDown('fast');
        }
    });

    $('.sort-btn').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('sort-btn_active').siblings().removeClass('sort-btn_active');
    });

    $('.btn-together').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('btn-together-active').siblings().removeClass('btn-together-active');
    });

    $('.plus-btn-item').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('plus-btn_active');
    });

    $('div .plus-btn a').click(function(e){
        e.preventDefault();
        const dropDown = $(this).parent().next();
        $('.plus-drop-down').not(dropDown).slideUp('slow');
        dropDown.slideToggle('slow');
    });

});