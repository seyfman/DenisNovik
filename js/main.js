$(document).ready(function () {
    $('.burger').click(function (evt) {
        evt.preventDefault();
        $($(this)).toggleClass('burger__activ')
        $('.nav').toggleClass('nav__activ')
    })

    $(".nav__link a").click(function (ent) {
        $('.burger').removeClass('burger__activ')
        $('.nav').removeClass('nav__activ')

    })

    $('.slider').slick({
        dots: false,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $(".nav__link a").on("click", function (e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 0
        }, 800);
    });
});