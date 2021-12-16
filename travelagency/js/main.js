// viewport size
function viewport() {
	var a = window,
		b = "inner";
	return (
		"innerWidth" in window ||
			((b = "client"), (a = document.documentElement || document.body)),
		{ width: a[b + "Width"], height: a[b + "Height"] }
	);
}
// viewport size end

// clear timeout
function timerOut(clearTimer) {
	clearTimeout(clearTimer);
}
// clear timeout end

// lazy load
	(function () {
		var srcArr = document.querySelectorAll("[data-lazy]");
		setTimeout(function () {
			for (var i = 0; i < srcArr.length; i++) {
				var newSrc = srcArr[i].dataset.lazy;
				srcArr[i].src = newSrc;
			}
		}, 1500);
	})();

	(function () {
		var srcArr = document.querySelectorAll("[data-bg]");
		setTimeout(function () {
			for (var i = 0; i < srcArr.length; i++) {
				var newSrc = srcArr[i].dataset.bg;
				srcArr[i].style.backgroundImage = "url(" + newSrc + ")";
			}
		}, 2500);
	})();
	// lazy load end

// select
if ($(".js-formstyler").length) {
	$("select.js-formstyler").styler({
		onSelectClosed: function onSelectClosed() {
			if (
				$(this).find("option[data-placeholder]:selected").length ==
				0
			) {
				$(this).addClass("hide-selected");
			} else {
				$(this).removeClass("hide-selected");
			}
		},
	});

	if ($(".js-select-scroll").length) {
		setTimeout(function () {
			$(".js-select-scroll")
				.not(".scroll-init")
				.mCustomScrollbar({
					horizontalScroll: false,
					scrollButtons: { enable: false },
					advanced: {
						updateOnContentResize: true,
						updateOnBrowserResize: true,
					},
					mouseWheelPixels: 100,
					scrollInertia: 250,
					contentTouchScroll: 1,
				})
				.addClass("scroll-init")
				.removeClass("scroll-destroyed");
		}, 300);
	}
}
// select end
	
window.addEventListener("load", resizeWindow);
window.addEventListener("resize", resizeWindow);
window.addEventListener("oriantationchange", resizeWindow);	

// load document end

// resize window
function resizeWindow() {
	// fix first screen
	$(".js-first-screen-main").css(
		"padding-bottom",
		$(".js-first-screen-bottom").height() + "px"
	);
	// fix first screen end

	// moving content
	if (viewport().width > 767) {
		$(".js-content-1").appendTo(".js-from-1");
		$(".js-content-2").appendTo(".js-from-2");
		$(".js-content-3").appendTo(".js-from-3");
		$(".js-content-4").appendTo(".js-from-4");
	}
	if (viewport().width <= 767) {
		$(".js-content-1").appendTo(".js-to-1");
		$(".js-content-2").appendTo(".js-to-2");
		$(".js-content-3").appendTo(".js-to-3");
		$(".js-content-4").appendTo(".js-to-4");
	}
	// moving content end

	// type of viewport
	if (viewport().width > 767) {
		$("html").addClass("page-desktop").removeClass("page-mob");
	}
	if (viewport().width <= 767) {
		$("html").addClass("page-mob").removeClass("page-desktop");
	}

		/* mobile slider */
		(function () {
			var sliderTimer;
	
			if (viewport().width > 767) {
				if ($(".js-mob-slider").length) {
					timerOut(sliderTimer);
					sliderTimer = setTimeout(function () {
						$(".js-mob-slider.active")
							.slick("unslick")
							.removeClass("active");
					}, 1000);
				}
			}
	
			if (viewport().width <= 767) {
				if ($(".js-mob-slider").length) {
					timerOut(sliderTimer);
					sliderTimer = setTimeout(function () {
						$(".js-mob-slider")
							.not(".active")
							.slick({
								dots: false,
								arrows: false,
								infinite: true,
								autoplay: false,
								slidesToShow: 1,
								slidesToScroll: 1,
								touchThreshold: 200,
								speed: 300,
								swipeToSlide: true,
								adaptiveHeight: true,
							})
							.addClass("active");
					}, 1000);
				}
		
			}
		})();
		// mobile slider end
	

}


// resize window end

// video
$(document).ready(function(){
	$(".js-frame-play").on("click", function () {
		var videoSrc = $(this).attr("data-frame");
		var videoWidth = $(this).attr("data-width");
		var videoHeight = $(this).attr("data-height");
		$(this)
			.closest(".js-frame")
			.find(".js-frame-append")
			.append(
				'<iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			);
		$(this)
			.addClass("active")
			.closest(".js-frame")
			.find(".js-frame-append")
			.find("iframe")
			.attr("src", videoSrc)
			.attr("width", videoWidth)
			.attr("height", videoHeight);
			$(this).closest(".js-frame").find(".js-frame-append").fitVids();
	});
});

$(function(){
	$(".modal-buy-plot").fancybox({
		margin: 0,
		padding: 20,
		maxWidth: 400,
		autoScale: true,
		transitionIn: 'none',
		transitionOut: 'none',
		type: 'inline',
		helpers: {
			overlay: {
				locked: false
			}
		}
	});	
});

$(".js-mob-open").on("click", function () {
	$(this).toggleClass("active");
	$(".js-mob-nav").stop().fadeToggle(300);
});

$(document).on("click touchstart", function (e) {
	if (
		$(e.target).closest(".js-mob-nav").length ||
		$(e.target).closest(".js-mob-open").length
	)
		return;
	$(".js-mob-open").removeClass("active");
	$(".js-mob-nav").stop().fadeOut(300);
});



  
var itemsCount = 0,
itemsMax = $('.outer-catalog .child-catalog').length;
$('.outer-catalog .child-catalog').hide();

function showNextItems() {
	var pagination = 4;
	if (viewport().width <= 1250) {
		var pagination = 3;
	}
	if (viewport().width <= 991) {
		var pagination = 2;
	}
	if (viewport().width <= 700) {
		var pagination = 1;
	}
for (var i = itemsCount; i < (itemsCount + pagination); i++) {
	$('.outer-catalog .child-catalog:eq(' + i + ')').show();
}

itemsCount += pagination;

if (itemsCount > itemsMax) {
	$('#showMore').hide();
}
};

showNextItems();

$('#showMore').on('click', function (e) {
e.preventDefault();
showNextItems();
});	

$(document).ready(function () {   
function qPopup() {
	$('.banks__button').click(function() {
		$('.question__popup .bg').fadeToggle(600);
		$('.popup__block').fadeToggle(600);
	});
	$('.inner-popup__close').click(function() {
		$('.question__popup .bg').fadeToggle(500);
		$('.popup__block').fadeToggle(500);
	});
  }
  
  
  qPopup();
});
