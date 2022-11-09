const namePopup = document.getElementById("name-popup");
const emailPopup = document.getElementById("email-popup");

namePopup.style.display = "none";
emailPopup.style.display = "none";

function validateForm() {
  let firstNameInput = $(".first-name").val().trim();
  let lastNameInput = $(".last-name").val().trim();
  let emailInput = $(".email").val().trim();
  var namePattern = /^[A-Za-z\s]+$/;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!namePattern.test(firstNameInput)) {
    $(namePopup).slideDown(400).delay(2000).slideUp(400);
    return false;
  } else {
    console.log("names entered");
  }
  if (!namePattern.test(lastNameInput)) {
    $(namePopup).slideDown(400).delay(2000).slideUp(400);
    return false;
  } else {
    console.log("names entered");
  }
  if (!emailPattern.test(emailInput)) {
    $(emailPopup).slideDown(400).delay(2000).slideUp(400);
    return false;
  } else {
    console.log("email entered");
  }
}
