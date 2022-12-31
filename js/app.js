// Mobile Hamburger Menu Animation
const menuBtn = document.querySelector(".menu-btn");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

// Mobile Hamburger Menu Toggle Open and Close
$(document).ready(function () {
  $("#menu-btn").click(function () {
    $("ul").toggleClass("show");
  });
});

$(document).ready(function () {
  $("nav ul li a").click(function () {
    $("ul").removeClass("show");
  });
});

$(document).ready(function () {
  $(".logo a").click(function () {
    $("ul").removeClass("show");
  });
});


// Mobile Hamburger Menu Animation Open and Close When Links are Clicked
$('nav ul li > a,.menu-btn').click(function () {
  console.log("clicked");
  $('body').toggleClass('show');
  if ($('body').hasClass('show')) {
      $('.menu-btn').addClass("open");
  } else {
      $('.menu-btn').removeClass("open");
  }
});


