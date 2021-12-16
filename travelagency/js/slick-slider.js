// sliders
if ($(".js-first-slider").length) {
    $(function () {
        $(".js-slide").each(function () {
            $(this).attr("data-item", $(this).index());
        });

        $(".js-first-slider").on("init", function () {
            $(".js-first-slider").removeClass("loaded");
            $(".js-first-scroll").css(
                "height",
                $(".js-first-dots li.slick-active").height() + "px"
            );
        });

        $(".js-first-slider").slick({
            dots: true,
            appendDots: $(".js-first-dots"),
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 7000,
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 200,
            speed: 1000,
            waitForAnimate: false,
            fade: true,
            adaptiveHeight: true,
        });

        $(".js-first-slider").on(
            "beforeChange",
            function (event, slick, currentSlide, nextSlide) {
                var newCount = "0" + (nextSlide + 1);
                var totalSlides = "0" + slick.slideCount;
                $(".js-first-active").html(newCount);
                $(".js-first-total").html(totalSlides);
                $(this).find(".js-slide").removeClass("active");
                $(this)
                    .find(".js-slide[data-item=" + nextSlide + "]")
                    .addClass("active");
                $(".js-first-scroll")
                    .css(
                        "height",
                        $(
                            ".js-first-dots li:nth-child(" +
                                (nextSlide + 1) +
                                ")"
                        ).height() + "px"
                    )
                    .css(
                        "top",
                        $(
                            ".js-first-dots li:nth-child(" +
                                (nextSlide + 1) +
                                ")"
                        ).position().top + "px"
                    );
            }
        );

        var dragStart, dragStop;
        $(".js-first-scroll").draggable({
            containment: ".js-first-dots",
            scroll: false,
            start: function (event, ui) {
                dragStart = ui.position.top;
            },
            stop: function (event, ui) {
                dragStop = ui.position.top;
                if (dragStart < dragStop) {
                    $(".js-first-dots li.slick-active")
                        .next("li")
                        .find("button")
                        .trigger("click");
                } else {
                    $(".js-first-dots li.slick-active")
                        .prev("li")
                        .find("button")
                        .trigger("click");
                }
            },
        });
    });
}
$('.slides').slick({
slidesToShow: 1,
dots: false,
arrows:true,
responsive: [
  {
    breakpoint: 767,
    settings: {
      arrows:false
    }
  }
]
});

$('.libn').slick({
slidesToShow: 1,
slidesToScroll: 1,
dots: true,
arrows: false,
vertical: true,
responsive: [
    {
      breakpoint: 768,

      settings: "unslick"
      
    }
  ]
});

$('.der-nav').slick({
slidesToShow: 4,
asNavFor: '.libn',
vertical: true,
focusOnSelect: true,
arrows: false,
responsive: [
    {
      breakpoint: 768,
      settings:{
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      asNavFor: null
      
  }
    }
  ]
});


// sliders end