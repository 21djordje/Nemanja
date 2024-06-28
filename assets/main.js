document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    loop: true, // Omogućava beskonačnu petlju
    autoplay: {
      delay: 5000, // Automatsko klizanje svakih 5 sekundi
      disableOnInteraction: false, // Omogućava autoplay nakon interakcije korisnika
    },
    pagination: {
      el: ".swiper-pagination", // Element za paginaciju
      clickable: true, // Omogućava klik na paginaciju
    },
  });
});

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  let navbar = document.querySelector("nav");

  if (currentScroll > 0) {
    navbar.classList.add("menu-scrolled");
  } else {
    navbar.classList.remove("menu-scrolled");
  }
});
