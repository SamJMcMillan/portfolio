$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() < 1000) {
      $(".hero-wrapper").css(
        "background-size",
        85 + parseInt($(window).scrollTop() / 5) + "%"
      );
      $(".title").css("top", 50 + $(window).scrollTop() * 0.1 + "%");
      $(".title").css("opacity", 1 - $(window).scrollTop() * 0.003);
    }
  });
});
