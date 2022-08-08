$(() => {
    /** header--fixed */
    const header = $('#header');
    const intro = $('#intro');

    $(window).on('scroll load resize', () => {
        const introH = intro.innerHeight();
        const scrollTop = $(window).scrollTop();

        if (scrollTop > introH -70) {
            header.addClass('header--fixed');
        } else {
            header.removeClass('header--fixed');
        }
    });

    // Smooth scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        const elementID = $(this).data('scroll');
        const elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 700);
    });

    // NAV Toggle
    const nav = $("#nav");
    const navToggle = $("#navToggle");

    $("#navToggle").on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    })

    // reviews https://kenwheeler.github.io/slick/
    const slider = $("#reviewsSlider")

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
    

});