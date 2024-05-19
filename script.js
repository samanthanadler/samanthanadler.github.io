window.onscroll = function() {stickTopnav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyTopnav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function resizeTopnav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
