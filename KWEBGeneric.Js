var aud = new Audio("/Dynamic/Test.mp3");
aud.setAttribute("webkit-playsinline", "webkit-playsinline");
if (aud.currentTime > 4) {
  aud.pause();
}

function AcceptCookies() {
  var input = document.getElementById("EMInput").value;
  alert(input);
  document.cookie = "Emailver" + "=" + input + ";" + ";path=/";
  location.href = "home.html";
}

function search() {
  if (event.keyCode == 13) {
    alert("should get the innerHTML or text value here");
    AcceptCookies()
  }
}

