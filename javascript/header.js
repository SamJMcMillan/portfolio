// $(document).ready(function () {
//   $(window).on("scroll", function () {
//     if ($(window).scrollTop() < 1000) {
//       $(".hero-wrapper").css(
//         "background-size",
//         85 + parseInt($(window).scrollTop() / 5) + "%"
//       );
//       $(".title").css("top", 50 + $(window).scrollTop() * 0.1 + "%");
//       $(".title").css("opacity", 1 - $(window).scrollTop() * 0.003);
//     }
//   });
// });

var headerParallax = $(".hero-wrapper");
var elementHeight = headerParallax.outerHeight();

function topParallax() {
  var scrollPos = $(window).scrollTop();
  var transformValue = scrollPos / 40;
  var opacityValue = 1 - scrollPos / 2000;
  var blurValue = Math.min(scrollPos / 100, 3);

  if (scrollPos < elementHeight) {
    headerParallax.css({
      transform: "translate3d(0, -" + transformValue + "%, 0)",
      opacity: opacityValue,
      "-webkit-filter": "blur(" + blurValue + "px)",
    });
  }
}

$(window).scroll(function () {
  topParallax();
});
