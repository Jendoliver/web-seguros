/*global $*/
$(document).ready(function(){
    $('#imgs-container').css('max-width',$(window).width());
    $('#imgs-container').css('max-height',$(window).height());
    $('#imgs-container').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(window).resize(function(){
        $('#imgs-container').css('max-width',$(window).width());
        $('#imgs-container').css('max-height',$(window).height());
    });
});