

$(document).ready(
    function(){
    $('.slider').bxSlider({
        slideWidth: 200,
        minSlides: 2,
        maxSlides: 3,
        slideMargin: 10,
        nextSelector:'.nextSlide',
        prevSelector:'.prevSlide'
    });
});

$(function () {
    $('.toggle').on('click', function(){
        $('.menu').slideToggle(400, function () {
            if($(this).css('display')==='none'){
            $(this).removeAttr('style');
        }
        });
    })
})