const namePopup = document.getElementById("name-popup");
const emailPopup = document.getElementById("email-popup");

namePopup.style.display = "none";
emailPopup.style.display = "none";

function validateForm() {
  let nameInput = $(".name").val().trim();
  let emailInput = $(".email").val().trim();
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (nameInput.length === 0) {
    $(namePopup).slideDown(400).delay(2000).slideUp(400);
    return false;
  } else {
    console.log("names entered");
  }
  if (emailInput.length === 0) {
    $(emailPopup).slideDown(400).delay(2000).slideUp(400);
    return false;
  } else if (emailPattern.test(emailInput) == false) {
    $(emailPopup).slideDown(400).delay(2000).slideUp(400);
    return false;
  } else {
    console.log("email entered");
  }
}
