const navLinks = document.getElementById("navList");
const navBtn = document.getElementById("navButton");

$(window).ready(function () {
  if ($("body").width() < 768) {
    navLinks.style.display = "none";
  }
});

$(window).resize(function () {
  if ($("body").width() < 768) {
    navLinks.style.display = "none";
  }
});

$(window).resize(function () {
  if ($("body").width() >= 768) {
    navLinks.style.display = "flex";
  }
});

function displayNav() {
  if (navLinks.style.display === "none") {
    $(navLinks).slideDown(400);
    $(navBtn).addClass("is-active");
  } else {
    $(navLinks).slideUp(400);
    $(navBtn).removeClass("is-active");
  }

  return true;
}
