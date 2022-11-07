const navLinks = document.getElementById("navList");
const navBtn = document.getElementById("navButton");

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
  } else {
    $(navLinks).slideUp(400);
  }

  return true;
}
