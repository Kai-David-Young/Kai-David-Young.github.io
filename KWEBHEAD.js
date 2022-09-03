


(function () {
  // Load the script
  const script = document.createElement("script");
  script.src = "https://code.jquery.com/jquery-3.3.1.js";
  integrity = "sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=";
  crossorigin = "anonymous";
  script.type = "text/javascript";
  script.addEventListener("load", () => {
    console.log(`jQuery ${$.fn.jquery} has been loaded successfully!`);
    // use jQuery below
  });
  document.head.appendChild(script);
})();

$(function () {
  $("#header").load("/Fixed-Files/Header.html");
  $("#footer").load("/Fixed-Files/Footer.html");
  $("#Tos").load("/Fixed-Files/Tos-Modal.html");
});
(function () {
  window.sib = {
    equeue: [],
    client_key: "m2f9jmi6q46ekqlcidom859b",
  };
  /* OPTIONAL: email for identify request*/
  // window.sib.email_id = 'example@domain.com';
  window.sendinblue = {};
  for (
    var j = ["track", "identify", "trackLink", "page"], i = 0;
    i < j.length;
    i++
  ) {
    (function (k) {
      window.sendinblue[k] = function () {
        var arg = Array.prototype.slice.call(arguments);
        (
          window.sib[k] ||
          function () {
            var t = {};
            t[k] = arg;
            window.sib.equeue.push(t);
          }
        )(arg[0], arg[1], arg[2], arg[3]);
      };
    })(j[i]);
  }
  var n = document.createElement("script"),
    i = document.getElementsByTagName("script")[0];
  (n.type = "text/javascript"),
    (n.id = "sendinblue-js"),
    (n.async = !0),
    (n.src = "https://sibautomation.com/sa.js?key=" + window.sib.client_key),
    i.parentNode.insertBefore(n, i),
    window.sendinblue.page();
})();

!(function () {
  const e = document.createElement("script");
  (e.type = "text/javascript"),
    (e.src =
      "https://global.ketchcdn.com/web/v2/config/kweb_technology_and_services/kweb_exp1/boot.js"),
    (e.defer = e.async = !0),
    document.getElementsByTagName("head")[0].appendChild(e),
    (window.semaphore = window.semaphore || []);
})();


