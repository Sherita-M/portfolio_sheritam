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

// Mobile Hamburger Menu Toggle
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

