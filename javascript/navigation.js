const navLinks = document.getElementById("navList");
const navBtn = document.getElementById("navButton");

navLinks.style.display = "none";

function displayNav() {
  if (navLinks.style.display === "none") {
    $(navLinks).slideDown(400);
  } else {
    $(navLinks).slideUp(400);
  }

  return true;
}
