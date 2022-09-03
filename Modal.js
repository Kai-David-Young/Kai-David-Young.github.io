

function getCookie() {
  var name = "AcceptTOS" + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the button that closes the modal
var closemod = document.getElementById("closemodule");

// When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
closemod.onlick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

function autoopen() {
  var user = getCookie();
  if (user != "") {
    console.log("TOS Cookie Currently reads as:   " + user);
  } else {
    modal.style.display = "block";
  }
}

function AcceptTos() {
  document.cookie = "AcceptTOS" + "=" + "TRUE" + ";" + ";path=/";
  modal.style.display = "none";
}

autoopen();
